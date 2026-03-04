"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { CommandPalette } from "./command-palette";
import { FilterDrawer } from "./filter-drawer";
import { QuickAddFloating } from "./quick-add-floating";
import { VaultViewProvider } from "@/contexts/vault-view-context";
import { VaultFilterProvider } from "@/contexts/vault-filter-context";

type CollectionStub = { id: string; name: string };
type TagStub = { id: string; name: string };

export function VaultShell({
  children,
  userId,
}: {
  children: React.ReactNode;
  userId: string;
}) {
  const pathname = usePathname();
  const [filterOpen, setFilterOpen] = useState(false);
  const [collections, setCollections] = useState<CollectionStub[]>([]);
  const [tags, setTags] = useState<TagStub[]>([]);

  useEffect(() => {
    Promise.all([
      fetch("/api/collections").then((r) => r.json()),
      fetch("/api/tags").then((r) => r.json()),
    ]).then(([cols, tagsData]) => {
      setCollections(cols.map((c: { id: string; name: string }) => ({ id: c.id, name: c.name })));
      setTags(tagsData.map((t: { id: string; name: string }) => ({ id: t.id, name: t.name })));
    }).catch(() => {});
  }, []);

  return (
    <VaultViewProvider>
      <VaultFilterProvider>
        <div className="min-h-screen flex bg-bg">
          <Sidebar userId={userId} pathname={pathname} />
          <div className="flex-1 flex flex-col min-w-0">
            <Navbar onOpenFilter={() => setFilterOpen(true)} />
            <main className="flex-1 overflow-auto">{children}</main>
            <CommandPalette />
            <QuickAddFloating />
            <FilterDrawer
              open={filterOpen}
              onClose={() => setFilterOpen(false)}
              collections={collections}
              tags={tags}
            />
          </div>
        </div>
      </VaultFilterProvider>
    </VaultViewProvider>
  );
}
