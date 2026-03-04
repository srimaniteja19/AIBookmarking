import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  fetchMetadata,
  detectTypeFromUrl,
  estimateReadTime,
  type BookmarkType,
} from "@/lib/metadata";
import { enrichWithGemini } from "@/lib/gemini";

function isValidUrl(s: string): boolean {
  try {
    const u = new URL(s);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { url: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { url } = body;
  if (!url || typeof url !== "string") {
    return NextResponse.json(
      { error: "Missing or invalid url" },
      { status: 400 }
    );
  }

  const trimmed = url.trim();
  if (!isValidUrl(trimmed)) {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  const existing = await prisma.bookmark.findFirst({
    where: { userId: session.user.id, url: trimmed },
  });
  if (existing) {
    return NextResponse.json(
      { error: "Already saved", bookmark: existing },
      { status: 409 }
    );
  }

  const type = detectTypeFromUrl(trimmed);
  const metadata = await fetchMetadata(trimmed);
  const enrichment = await enrichWithGemini(
    metadata.title,
    metadata.description,
    trimmed
  );

  const readTime = metadata.description
    ? estimateReadTime(metadata.description.split(/\s+/).length)
    : null;

  const bookmark = await prisma.bookmark.create({
    data: {
      userId: session.user.id,
      url: trimmed,
      title: metadata.title,
      description: metadata.description,
      favicon: metadata.favicon,
      ogImage: metadata.ogImage,
      siteName: metadata.siteName,
      type,
      aiSummary: enrichment.summary || null,
      aiTags: JSON.stringify(enrichment.suggestedTags ?? []),
      keyPoints: JSON.stringify(enrichment.keyPoints ?? []),
      readTime,
    },
    include: {
      collection: { select: { id: true, name: true, emoji: true, color: true } },
      tags: { select: { id: true, name: true, color: true } },
    },
  });

  const out = {
    ...bookmark,
    aiTags: enrichment.suggestedTags ?? [],
    keyPoints: enrichment.keyPoints ?? [],
  };

  return NextResponse.json(out);
}
