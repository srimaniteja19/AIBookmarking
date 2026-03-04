import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { VaultContent } from "@/components/vault/vault-content";

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ collectionId: string }>;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return null;

  const { collectionId } = await params;

  const collection = await prisma.collection.findFirst({
    where: { id: collectionId, userId: session.user.id },
  });
  if (!collection) notFound();

  const bookmarks = await prisma.bookmark.findMany({
    where: { collectionId, userId: session.user.id, isArchived: false },
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

  return (
    <div>
      <div className="px-6 pt-6 pb-2">
        <h1 className="font-display text-2xl italic text-text">
          {collection.emoji} {collection.name}
        </h1>
        {collection.description && (
          <p className="font-mono text-sm text-muted mt-1">
            {collection.description}
          </p>
        )}
      </div>
      <VaultContent bookmarks={serialized} />{" "}
    </div>
  );
}
