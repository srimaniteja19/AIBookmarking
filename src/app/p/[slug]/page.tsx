import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function PublicCollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = await prisma.collection.findFirst({
    where: { publicSlug: slug, isPublic: true },
    include: {
      bookmarks: {
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!collection) notFound();

  await prisma.collection.update({
    where: { id: collection.id },
    data: { viewCount: { increment: 1 } },
  });

  return (
    <div className="min-h-screen bg-bg text-text">
      <header className="border-b border-border px-6 py-4">
        <h1 className="font-display text-2xl italic">
          {collection.emoji}{" "}
          {collection.name}
        </h1>
        {collection.description && (
          <p className="font-mono text-sm text-muted mt-1">
            {collection.description}
          </p>
        )}
        <p className="font-mono text-xs text-muted mt-2">
          {collection.bookmarks.length} bookmark
          {collection.bookmarks.length !== 1 ? "s" : ""}
        </p>
      </header>
      <main className="max-w-2xl mx-auto p-6">
        <ul className="space-y-3">
          {collection.bookmarks.map((b) => (
            <li key={b.id}>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-card bg-surface border border-border hover:border-border-hover font-mono text-sm transition-colors duration-150"
              >
                {b.title}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
