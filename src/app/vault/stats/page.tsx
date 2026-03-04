import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { StatsContent } from "@/components/vault/stats-content";

export default async function StatsPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return null;

  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  const [bookmarkCount, collectionCount, tagCount, byType, recent, bookmarksForHeatmap] =
    await Promise.all([
      prisma.bookmark.count({ where: { userId: session.user.id } }),
      prisma.collection.count({ where: { userId: session.user.id } }),
      prisma.tag.count({ where: { userId: session.user.id } }),
      prisma.bookmark.groupBy({
        by: ["type"],
        where: { userId: session.user.id },
        _count: true,
      }),
      prisma.bookmark.findMany({
        where: { userId: session.user.id },
        orderBy: { visitCount: "desc" },
        take: 5,
        select: { id: true, title: true, url: true, visitCount: true },
      }),
      prisma.bookmark.findMany({
        where: {
          userId: session.user.id,
          createdAt: { gte: oneYearAgo },
        },
        select: { createdAt: true },
      }),
    ]);

  const unread = await prisma.bookmark.count({
    where: {
      userId: session.user.id,
      isArchived: false,
      isRead: false,
      type: "ARTICLE",
    },
  });

  const heatmapData = bookmarksForHeatmap.reduce((acc, b) => {
    const d = b.createdAt.toISOString().slice(0, 10);
    acc[d] = (acc[d] ?? 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <StatsContent
      bookmarkCount={bookmarkCount}
      collectionCount={collectionCount}
      tagCount={tagCount}
      byType={byType.map((x) => ({ type: x.type, count: x._count }))}
      mostVisited={recent}
      unreadCount={unread}
      heatmapData={heatmapData}
    />
  );
}
