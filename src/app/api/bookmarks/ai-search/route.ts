import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = process.env.GEMINI_API_KEY
  ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  : null;

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { query: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { query } = body;
  if (!query?.trim()) {
    return NextResponse.json({ error: "Query required" }, { status: 400 });
  }

  const bookmarks = await prisma.bookmark.findMany({
    where: { userId: session.user.id, isArchived: false },
    select: {
      id: true,
      title: true,
      description: true,
      aiSummary: true,
      aiTags: true,
      url: true,
    },
  });

  if (bookmarks.length === 0) {
    return NextResponse.json({ ids: [] });
  }

  if (!genAI) {
    const q = query.toLowerCase();
    const scored = bookmarks
      .map((b) => {
        let tags: string[] = [];
        if (Array.isArray((b as any).aiTags)) {
          tags = (b as any).aiTags as string[];
        } else if (typeof (b as any).aiTags === "string") {
          try {
            const parsed = JSON.parse((b as any).aiTags as string);
            if (Array.isArray(parsed)) tags = parsed as string[];
          } catch {
            tags = [];
          }
        }
        const text = [b.title, b.description, b.aiSummary, ...tags]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        let score = 0;
        for (const word of q.split(/\s+/)) {
          if (text.includes(word)) score += 1;
        }
        return { id: b.id, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .map((x) => x.id);
    return NextResponse.json({ ids: scored });
  }

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const prompt = `Given this list of bookmarks, find the most relevant ones for this query. The query might be conceptual, not keyword-based.
Query: "${query}"

Bookmarks (JSON array):
${JSON.stringify(
  bookmarks.map((b) => {
    let tags: string[] = [];
    if (Array.isArray((b as any).aiTags)) {
      tags = (b as any).aiTags as string[];
    } else if (typeof (b as any).aiTags === "string") {
      try {
        const parsed = JSON.parse((b as any).aiTags as string);
        if (Array.isArray(parsed)) tags = parsed as string[];
      } catch {
        tags = [];
      }
    }
    return {
      id: b.id,
      title: b.title,
      description: b.description || "",
      summary: b.aiSummary || "",
      tags,
    };
  })
)}

Return ONLY a JSON array of bookmark IDs ordered by relevance, most relevant first. Max 10 results. Return [] if nothing is relevant. No other text.`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const cleaned = text.replace(/^```\w*\n?|\n?```$/g, "").trim();
    const ids = JSON.parse(cleaned) as string[];
    const validIds = Array.isArray(ids) ? ids.filter((id) => typeof id === "string").slice(0, 10) : [];
    return NextResponse.json({ ids: validIds });
  } catch {
    return NextResponse.json({ ids: [] });
  }
}
