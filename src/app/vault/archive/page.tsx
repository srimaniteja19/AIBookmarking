import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { VaultContent } from "@/components/vault/vault-content";

export default async function ArchivePage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return null;

  const bookmarks = await prisma.bookmark.findMany({
    where: { userId: session.user.id, isArchived: true },
    include: {
      collection: { select: { id: true, name: true, emoji: true, color: true } },
      tags: { select: { id: true, name: true, color: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  const serialized = bookmarks.map((b) => ({
    ...b,
    createdAt: b.createdAt.toISOString(),
    updatedAt: b.updatedAt.toISOString(),
    lastVisited: b.lastVisited?.toISOString() ?? null,
    remindAt: b.remindAt?.toISOString() ?? null,
  }));

  return <VaultContent bookmarks={serialized} />;
}
