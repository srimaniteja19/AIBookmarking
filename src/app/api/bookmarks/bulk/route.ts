import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: {
    ids: string[];
    action: "archive" | "unarchive" | "markRead" | "markUnread" | "favorite" | "unfavorite" | "delete" | "move" | "addTags" | "removeTags";
    collectionId?: string;
    tagIds?: string[];
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { ids, action } = body;
  if (!Array.isArray(ids) || ids.length === 0) {
    return NextResponse.json({ error: "ids required" }, { status: 400 });
  }

  const where = {
    id: { in: ids },
    userId: session.user.id,
  };

  switch (action) {
    case "archive":
      await prisma.bookmark.updateMany({ where, data: { isArchived: true } });
      break;
    case "unarchive":
      await prisma.bookmark.updateMany({ where, data: { isArchived: false } });
      break;
    case "markRead":
      await prisma.bookmark.updateMany({ where, data: { isRead: true } });
      break;
    case "markUnread":
      await prisma.bookmark.updateMany({ where, data: { isRead: false } });
      break;
    case "favorite":
      await prisma.bookmark.updateMany({ where, data: { isFavorite: true } });
      break;
    case "unfavorite":
      await prisma.bookmark.updateMany({ where, data: { isFavorite: false } });
      break;
    case "delete":
      await prisma.bookmark.deleteMany({ where });
      break;
    case "move":
      if (!body.collectionId) {
        return NextResponse.json({ error: "collectionId required" }, { status: 400 });
      }
      await prisma.bookmark.updateMany({
        where,
        data: { collectionId: body.collectionId },
      });
      break;
    case "addTags":
      if (!body.tagIds?.length) {
        return NextResponse.json({ error: "tagIds required" }, { status: 400 });
      }
      for (const id of ids) {
        const b = await prisma.bookmark.findFirst({
          where: { id, userId: session.user.id },
          include: { tags: true },
        });
        if (b) {
          const existingIds = b.tags.map((t) => t.id);
          const toConnect = (body.tagIds as string[]).filter((tid) => !existingIds.includes(tid));
          if (toConnect.length) {
            await prisma.bookmark.update({
              where: { id },
              data: { tags: { connect: toConnect.map((tid) => ({ id: tid })) } },
            });
          }
        }
      }
      break;
    case "removeTags":
      if (!body.tagIds?.length) {
        return NextResponse.json({ error: "tagIds required" }, { status: 400 });
      }
      for (const id of ids) {
        await prisma.bookmark.update({
          where: { id },
          data: { tags: { disconnect: (body.tagIds as string[]).map((tid) => ({ id: tid })) } },
        });
      }
      break;
    default:
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
