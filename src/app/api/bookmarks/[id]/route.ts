import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const existing = await prisma.bookmark.findFirst({
    where: { id, userId: session.user.id },
  });
  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const allowed = [
    "collectionId",
    "isPinned",
    "isFavorite",
    "isArchived",
    "isRead",
    "readProgress",
    "note",
    "highlight",
    "remindAt",
  ];
  const data: Record<string, unknown> = {};
  for (const key of allowed) {
    if (key in body) data[key] = body[key];
  }

  const updated = await prisma.bookmark.update({
    where: { id },
    data,
    include: {
      collection: { select: { id: true, name: true, emoji: true, color: true } },
      tags: { select: { id: true, name: true, color: true } },
    },
  });

  return NextResponse.json(updated);
}

export async function GET(
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
    include: {
      collection: { select: { id: true, name: true, emoji: true, color: true } },
      tags: { select: { id: true, name: true, color: true } },
    },
  });
  if (!bookmark) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  let keyPoints: string[] = [];
  if (Array.isArray((bookmark as any).keyPoints)) {
    keyPoints = (bookmark as any).keyPoints as string[];
  } else if (typeof (bookmark as any).keyPoints === "string") {
    try {
      const parsed = JSON.parse((bookmark as any).keyPoints as string);
      if (Array.isArray(parsed)) keyPoints = parsed as string[];
    } catch {
      keyPoints = [];
    }
  }

  const out = {
    ...bookmark,
    keyPoints,
  };

  return NextResponse.json(out);
}
