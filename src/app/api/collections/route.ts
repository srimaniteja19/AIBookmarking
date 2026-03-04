import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { randomBytes } from "crypto";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const collections = await prisma.collection.findMany({
    where: { userId: session.user.id },
    include: { _count: { select: { bookmarks: true } } },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(
    collections.map((c) => ({
      id: c.id,
      name: c.name,
      description: c.description,
      emoji: c.emoji,
      color: c.color,
      isPublic: c.isPublic,
      publicSlug: c.publicSlug,
      count: c._count.bookmarks,
    }))
  );
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { name: string; description?: string; emoji?: string; color?: string; isPublic?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, description, emoji, color, isPublic } = body;
  if (!name?.trim()) {
    return NextResponse.json({ error: "Name required" }, { status: 400 });
  }

  const publicSlug = isPublic
    ? randomBytes(6).toString("base64url").toLowerCase().slice(0, 10)
    : null;

  const collection = await prisma.collection.create({
    data: {
      userId: session.user.id,
      name: name.trim(),
      description: description?.trim() ?? null,
      emoji: emoji ?? null,
      color: color ?? null,
      isPublic: isPublic ?? false,
      publicSlug,
    },
  });

  return NextResponse.json(collection);
}
