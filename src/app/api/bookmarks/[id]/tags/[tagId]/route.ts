import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string; tagId: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, tagId } = await params;
  const bookmark = await prisma.bookmark.findFirst({
    where: { id, userId: session.user.id },
  });
  if (!bookmark) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  await prisma.bookmark.update({
    where: { id },
    data: { tags: { disconnect: { id: tagId } } },
  });

  return NextResponse.json({ ok: true });
}
