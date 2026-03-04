import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const view = searchParams.get("view") || "all";
  const collectionId = searchParams.get("collectionId");

  const where: Record<string, unknown> = { userId: session.user.id };

  if (view === "favorites") where.isFavorite = true;
  if (view === "archive") where.isArchived = true;
  if (view === "reading") {
    where.isArchived = false;
    where.isRead = false;
    where.type = "ARTICLE";
  }
  if (collectionId) where.collectionId = collectionId;

  const bookmarks = await prisma.bookmark.findMany({
    where,
    include: {
      collection: { select: { id: true, name: true, emoji: true, color: true } },
      tags: { select: { id: true, name: true, color: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(bookmarks);
}
