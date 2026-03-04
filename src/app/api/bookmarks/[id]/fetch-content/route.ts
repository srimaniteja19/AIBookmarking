import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const bookmark = await prisma.bookmark.findFirst({
    where: { id, userId: session.user.id },
  });
  if (!bookmark) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  try {
    const res = await fetch(bookmark.url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      cache: "no-store",
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch content" },
        { status: 502 }
      );
    }
    const html = await res.text();
    const dom = new JSDOM(html, { url: bookmark.url });
    const reader = new Readability(dom.window.document);
    const article = reader.parse();

    if (!article) {
      return NextResponse.json(
        { error: "Could not extract article" },
        { status: 422 }
      );
    }

    const textContent = article.textContent || "";
    const wordCount = textContent.split(/\s+/).filter(Boolean).length;

    return NextResponse.json({
      title: article.title || bookmark.title,
      byline: article.byline || null,
      content: article.content || "",
      textContent,
      wordCount,
    });
  } catch (e) {
    return NextResponse.json(
      { error: "Error fetching content" },
      { status: 500 }
    );
  }
}

