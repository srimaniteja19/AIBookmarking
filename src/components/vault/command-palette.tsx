"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { motion, AnimatePresence } from "framer-motion";
import Fuse from "fuse.js";

type BookmarkForSearch = {
  id: string;
  title: string;
  url: string;
  siteName: string | null;
  type: string;
  createdAt: string;
  collection: { name: string } | null;
  tags: { name: string }[];
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [bookmarks, setBookmarks] = useState<BookmarkForSearch[]>([]);
  const [loading, setLoading] = useState(false);
  const [aiResults, setAiResults] = useState<BookmarkForSearch[]>([]);
  const [aiLoading, setAiLoading] = useState(false);

  const isAiSearch = query.startsWith("?");
  const isTagFilter = query.startsWith("#");
  const isSiteFilter = query.startsWith("@");
  const isTypeFilter = query.startsWith("/");
  const isCommands = query.startsWith(">");
  const searchQuery = /^[? #@/>]/.test(query) ? query.slice(1).trim() : query.trim();

  useHotkeys("mod+k", (e) => {
    e.preventDefault();
    setOpen((o) => !o);
    if (!open) setQuery("");
  });

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    fetch("/api/bookmarks")
      .then((r) => r.json())
      .then((data) => {
        setBookmarks(
          data.map((b: BookmarkForSearch & { tags: { name: string }[] }) => ({
            ...b,
            tags: b.tags ?? [],
          }))
        );
      })
      .finally(() => setLoading(false));
  }, [open]);

  useEffect(() => {
    if (!isAiSearch || !searchQuery) {
      setAiResults([]);
      return;
    }
    setAiLoading(true);
    fetch("/api/bookmarks/ai-search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: searchQuery }),
    })
      .then((r) => r.json())
      .then((data: { ids?: string[] }) => {
        const ids = data.ids ?? [];
        const byId = new Map(bookmarks.map((b) => [b.id, b]));
        setAiResults(ids.map((id) => byId.get(id)).filter(Boolean) as BookmarkForSearch[]);
      })
      .catch(() => setAiResults([]))
      .finally(() => setAiLoading(false));
  }, [isAiSearch, searchQuery, bookmarks]);

  const fuse = useMemo(
    () =>
      new Fuse(bookmarks, {
        keys: ["title", "url", "siteName", "tags.name"],
        threshold: 0.3,
      }),
    [bookmarks]
  );

  const results = useMemo(() => {
    if (isAiSearch) return aiResults;
    if (isCommands) return [];
    let list = bookmarks;
    if (isTagFilter && searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter((b) => b.tags?.some((t) => t.name.toLowerCase().includes(q)));
    } else if (isSiteFilter && searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter((b) => {
        const site = (b.siteName || (b.url ? new URL(b.url).hostname : "")).toLowerCase();
        return site.includes(q);
      });
    } else if (isTypeFilter && searchQuery) {
      const q = searchQuery.toUpperCase();
      list = list.filter((b) => b.type.toUpperCase().includes(q));
    } else if (searchQuery) {
      list = fuse.search(searchQuery).map((r) => r.item);
    } else {
      list = bookmarks.slice(0, 10);
    }
    return list;
  }, [isAiSearch, isTagFilter, isSiteFilter, isTypeFilter, isCommands, searchQuery, bookmarks, fuse, aiResults]);

  const RECENT_KEY = "vault-recent-searches";
  const recentSearches = useMemo(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem(RECENT_KEY) || "[]").slice(0, 5);
    } catch {
      return [];
    }
  }, [open, query]);

  const openFirst = useCallback(() => {
    if (isCommands) return;
    const first = results[0];
    if (first) {
      window.open(first.url, "_blank");
      if (searchQuery && typeof window !== "undefined") {
        const prev = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
        const next = [searchQuery, ...prev.filter((s: string) => s !== searchQuery)].slice(0, 10);
        localStorage.setItem(RECENT_KEY, JSON.stringify(next));
      }
      setOpen(false);
    }
  }, [results, isCommands, searchQuery]);

  const placeholder = isCommands
    ? "Commands..."
    : isAiSearch
      ? "AI search..."
      : isTagFilter
        ? "Filter by tag (#react)"
        : isSiteFilter
          ? "Filter by site (@github)"
          : isTypeFilter
            ? "Filter by type (/video)"
            : "Search... ? AI · # tag · @ site · / type · > commands";

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[100]"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="fixed left-1/2 top-[20%] -translate-x-1/2 w-full max-w-xl bg-surface border border-border rounded-card overflow-hidden z-[101] shadow-lg"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholder}
              className="w-full font-mono text-sm px-4 py-3 bg-transparent border-b border-border text-text placeholder:text-muted focus:outline-none"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.metaKey && !e.shiftKey) {
                  e.preventDefault();
                  openFirst();
                }
              }}
            />
            <div className="max-h-[60vh] overflow-auto">
              {isAiSearch && searchQuery && aiLoading ? (
                <div className="font-mono text-sm text-muted p-4">
                  AI searching...
                </div>
              ) : loading && !isAiSearch ? (
                <div className="font-mono text-sm text-muted p-4">
                  Loading...
                </div>
              ) : isCommands ? (
                <ul className="py-2">
                  <li>
                    <a
                      href="/vault"
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-surface-2 font-mono text-sm text-text"
                      onClick={() => setOpen(false)}
                    >
                      Create collection
                    </a>
                  </li>
                  <li>
                    <a
                      href="/settings?import=1"
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-surface-2 font-mono text-sm text-text"
                      onClick={() => setOpen(false)}
                    >
                      Import bookmarks
                    </a>
                  </li>
                  <li>
                    <a
                      href="/api/export?format=json"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-surface-2 font-mono text-sm text-text"
                      onClick={() => setOpen(false)}
                    >
                      Export (JSON)
                    </a>
                  </li>
                </ul>
              ) : results.length === 0 ? (
                <div className="font-mono text-sm text-muted p-4">
                  {isAiSearch && searchQuery ? "No matches." : "No bookmarks found."}
                </div>
              ) : (
                <ul className="py-2">
                  {isAiSearch && searchQuery && (
                    <li className="px-4 py-2 font-mono text-xs text-muted border-b border-border">
                      AI found {results.length} match{results.length !== 1 ? "es" : ""} for &quot;{searchQuery}&quot;
                    </li>
                  )}
                  {results.slice(0, 8).map((b) => (
                    <li key={b.id}>
                      <a
                        href={b.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-surface-2 font-mono text-sm text-text"
                        onClick={() => setOpen(false)}
                      >
                        <span className="flex-1 truncate">{b.title}</span>
                        <span className="text-muted text-xs shrink-0">
                          {b.collection?.name ?? "—"}
                        </span>
                        <span className="text-muted text-xs shrink-0">
                          {new Date(b.createdAt).toLocaleDateString()}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="px-4 py-2 border-t border-border font-mono text-[10px] text-muted flex justify-between">
              <span>↵ Open · ⌘↵ Copy URL</span>
              {recentSearches.length > 0 && !searchQuery && (
                <span>Recent: {recentSearches.slice(0, 3).join(", ")}</span>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
