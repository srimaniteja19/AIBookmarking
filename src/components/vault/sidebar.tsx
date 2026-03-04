"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "/vault", label: "All Bookmarks", icon: "📚" },
  { href: "/vault/favorites", label: "Favorites", icon: "❤" },
  { href: "/vault/reading-list", label: "Reading List", icon: "📖" },
  { href: "/vault/archive", label: "Archive", icon: "🗄" },
  { href: "/vault/stats", label: "Stats", icon: "📊" },
];

type Collection = {
  id: string;
  name: string;
  emoji: string | null;
  count: number;
};

export function Sidebar({
  userId,
  pathname,
}: {
  userId: string;
  pathname: string;
}) {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [newName, setNewName] = useState("");
  const [showNew, setShowNew] = useState(false);

  useEffect(() => {
    fetch("/api/collections")
      .then((r) => r.json())
      .then(setCollections)
      .catch(() => {});
  }, []);

  const createCollection = () => {
    if (!newName.trim()) return;
    fetch("/api/collections", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName.trim() }),
    })
      .then((r) => r.json())
      .then((c) => {
        setCollections((prev) => [...prev, { id: c.id, name: c.name, emoji: c.emoji, count: 0 }]);
        setNewName("");
        setShowNew(false);
      })
      .catch(() => {});
  };

  return (
    <aside className="w-[220px] shrink-0 bg-bg border-r border-border flex flex-col">
      <div className="p-3 space-y-0.5">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted px-2 py-1">
          Home
        </p>
        {NAV_ITEMS.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/vault" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-btn font-mono text-sm transition-colors duration-150 ${
                isActive
                  ? "bg-surface-2 text-text border border-border"
                  : "text-muted hover:text-text hover:bg-surface-2/50"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className="p-3 mt-4 border-t border-border">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted px-2 py-1">
          Collections
        </p>
        {collections.map((c) => {
          const isActive = pathname === `/vault/${c.id}`;
          return (
            <Link
              key={c.id}
              href={`/vault/${c.id}`}
              className={`flex items-center gap-2 px-3 py-2 rounded-btn font-mono text-sm transition-colors duration-150 ${
                isActive
                  ? "bg-surface-2 text-text border border-border"
                  : "text-muted hover:text-text hover:bg-surface-2/50"
              }`}
            >
              <span>{c.emoji ?? "📁"}</span>
              <span className="flex-1 truncate">{c.name}</span>
              <span className="text-muted text-xs">{c.count}</span>
            </Link>
          );
        })}
        {showNew ? (
          <div className="flex gap-1 mt-1">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Name"
              className="flex-1 font-mono text-xs px-2 py-1.5 bg-surface border border-border rounded-btn text-text"
              onKeyDown={(e) => {
                if (e.key === "Enter") createCollection();
                if (e.key === "Escape") setShowNew(false);
              }}
            />
            <button
              type="button"
              onClick={createCollection}
              className="font-mono text-xs px-2 py-1.5 bg-surface border border-border rounded-btn"
            >
              Add
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShowNew(true)}
            className="flex items-center gap-2 px-3 py-2 rounded-btn font-mono text-sm text-muted hover:text-text hover:bg-surface-2/50 w-full"
          >
            + New Collection
          </button>
        )}
      </div>
      <div className="p-3 mt-4 border-t border-border">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted px-2 py-1">
          Tags
        </p>
        <p className="font-mono text-xs text-muted px-2">View all tags</p>
      </div>
    </aside>
  );
}
