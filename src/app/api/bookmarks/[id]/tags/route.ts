import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const bookmark = await prisma.bookmark.findFirst({
    where: { id, userId: session.user.id },
    include: { tags: true },
  });
  if (!bookmark) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  let body: { name: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim()?.toLowerCase();
  if (!name) {
    return NextResponse.json({ error: "Name required" }, { status: 400 });
  }

  const tag = await prisma.tag.upsert({
    where: {
      userId_name: { userId: session.user.id, name },
    },
    create: { userId: session.user.id, name },
    update: {},
  });

  if (bookmark.tags.some((t) => t.id === tag.id)) {
    return NextResponse.json(tag);
  }

  await prisma.bookmark.update({
    where: { id },
    data: { tags: { connect: { id: tag.id } } },
  });

  return NextResponse.json(tag);
}
