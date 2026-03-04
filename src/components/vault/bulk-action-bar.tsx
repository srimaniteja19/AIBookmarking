"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type BulkActionBarProps = {
  selectedIds: string[];
  onClear: () => void;
  collections: { id: string; name: string }[];
  tags: { id: string; name: string }[];
};

export function BulkActionBar({
  selectedIds,
  onClear,
  collections,
  tags,
}: BulkActionBarProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showMove, setShowMove] = useState(false);
  const [showTags, setShowTags] = useState(false);

  const run = async (
    action: string,
    extra?: { collectionId?: string; tagIds?: string[] }
  ) => {
    setLoading(true);
    try {
      const res = await fetch("/api/bookmarks/bulk", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: selectedIds, action, ...extra }),
      });
      if (res.ok) {
        onClear();
        router.refresh();
      }
    } finally {
      setLoading(false);
      setShowMove(false);
      setShowTags(false);
    }
  };

  const handleDelete = () => {
    if (typeof window !== "undefined" && window.confirm(`Delete ${selectedIds.length} bookmark(s)?`)) {
      run("delete");
    }
  };

  if (selectedIds.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-4 py-3 bg-surface border border-border rounded-card font-mono text-sm">
      <span className="text-muted">{selectedIds.length} selected</span>
      <button
        type="button"
        onClick={() => setShowMove(!showMove)}
        className="px-3 py-1.5 rounded-btn border border-border hover:border-border-hover"
      >
        Move
      </button>
      {showMove && (
        <div className="absolute bottom-full left-0 mb-1 py-1 bg-surface border border-border rounded-btn max-h-40 overflow-auto">
          {collections.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => run("move", { collectionId: c.id })}
              className="block w-full text-left px-3 py-2 hover:bg-surface-2"
            >
              {c.name}
            </button>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => setShowTags(!showTags)}
        className="px-3 py-1.5 rounded-btn border border-border hover:border-border-hover"
      >
        Add tags
      </button>
      {showTags && (
        <div className="absolute bottom-full left-0 mb-1 py-1 bg-surface border border-border rounded-btn max-h-40 overflow-auto">
          {tags.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => run("addTags", { tagIds: [t.id] })}
              className="block w-full text-left px-3 py-2 hover:bg-surface-2"
            >
              {t.name}
            </button>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => run("markRead")}
        disabled={loading}
        className="px-3 py-1.5 rounded-btn border border-border hover:border-border-hover disabled:opacity-50"
      >
        Mark read
      </button>
      <button
        type="button"
        onClick={() => run("archive")}
        disabled={loading}
        className="px-3 py-1.5 rounded-btn border border-border hover:border-border-hover disabled:opacity-50"
      >
        Archive
      </button>
      <button
        type="button"
        onClick={handleDelete}
        disabled={loading}
        className="px-3 py-1.5 rounded-btn border border-red text-red hover:bg-red/10 disabled:opacity-50"
      >
        Delete
      </button>
      <a
        href={`/api/export?format=json&ids=${selectedIds.join(",")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-btn border border-border hover:border-border-hover"
      >
        Export
      </a>
      <button
        type="button"
        onClick={onClear}
        className="px-3 py-1.5 rounded-btn border border-border hover:border-border-hover"
      >
        Clear
      </button>
    </div>
  );
}
