import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { subYears, subMonths, startOfDay, endOfDay } from "date-fns";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const today = new Date();
  const oneYearAgo = subYears(today, 1);
  const oneMonthAgo = subMonths(today, 1);

  const [yearAgo, monthAgo, unvisitedCount, unvisitedSample] = await Promise.all([
    prisma.bookmark.findFirst({
      where: {
        userId: session.user.id,
        isArchived: false,
        createdAt: {
          gte: startOfDay(oneYearAgo),
          lte: endOfDay(oneYearAgo),
        },
      },
      include: {
        collection: { select: { id: true, name: true, emoji: true, color: true } },
        tags: { select: { id: true, name: true, color: true } },
      },
    }),
    prisma.bookmark.findFirst({
      where: {
        userId: session.user.id,
        isArchived: false,
        createdAt: {
          gte: startOfDay(oneMonthAgo),
          lte: endOfDay(oneMonthAgo),
        },
      },
      include: {
        collection: { select: { id: true, name: true, emoji: true, color: true } },
        tags: { select: { id: true, name: true, color: true } },
      },
    }),
    prisma.bookmark.count({
      where: {
        userId: session.user.id,
        isArchived: false,
        visitCount: 0,
      },
    }),
    prisma.bookmark.findMany({
      where: {
        userId: session.user.id,
        isArchived: false,
        visitCount: 0,
      },
      take: 1,
      skip: Math.floor(Math.random() * 15),
      include: {
        collection: { select: { id: true, name: true, emoji: true, color: true } },
        tags: { select: { id: true, name: true, color: true } },
      },
      orderBy: { createdAt: "asc" },
    }),
  ]);

  const randomUnvisited = unvisitedCount > 0 ? unvisitedSample[0] : null;

  const out: Array<Record<string, unknown> & { resurfaceLabel: string }> = [];
  if (yearAgo) out.push({ ...yearAgo, resurfaceLabel: "1 year ago" });
  if (monthAgo) out.push({ ...monthAgo, resurfaceLabel: "1 month ago" });
  if (randomUnvisited && randomUnvisited.id !== yearAgo?.id && randomUnvisited.id !== monthAgo?.id) {
    out.push({ ...randomUnvisited, resurfaceLabel: "Unvisited" });
  }

  type BookmarkWithDates = { createdAt: Date; updatedAt: Date; lastVisited: Date | null; remindAt: Date | null };
  const serialized = out.map((b) => {
    const x = b as unknown as BookmarkWithDates & typeof b;
    return {
      ...b,
      createdAt: x.createdAt.toISOString(),
      updatedAt: x.updatedAt.toISOString(),
      lastVisited: x.lastVisited?.toISOString() ?? null,
      remindAt: x.remindAt?.toISOString() ?? null,
    };
  });

  return NextResponse.json(serialized);
}
