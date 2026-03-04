"use client";

import { useVaultFilter } from "@/contexts/vault-filter-context";

const BOOKMARK_TYPES = [
  "LINK",
  "VIDEO",
  "ARTICLE",
  "TWEET",
  "GITHUB",
  "IMAGE",
  "DOCUMENT",
  "OTHER",
];

type FilterDrawerProps = {
  open: boolean;
  onClose: () => void;
  collections: { id: string; name: string }[];
  tags: { id: string; name: string }[];
};

export function FilterDrawer({
  open,
  onClose,
  collections,
  tags,
}: FilterDrawerProps) {
  const {
    filters,
    toggleType,
    setStatus,
    toggleTag,
    setCollectionId,
    setHasImage,
    setHasNote,
    setDateRange,
    setLinkStatus,
    clearAll,
    hasActiveFilters,
  } = useVaultFilter();

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
        aria-hidden
      />
      <div className="fixed right-0 top-0 bottom-0 w-[280px] bg-surface border-l border-border z-50 overflow-auto">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <span className="font-mono text-sm font-medium text-text">Filters</span>
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-muted hover:text-text"
          >
            ✕
          </button>
        </div>
        <div className="p-4 space-y-6">
          <section>
            <p className="font-mono text-[10px] uppercase text-muted mb-2">
              Type
            </p>
            <div className="flex flex-wrap gap-1">
              {BOOKMARK_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => toggleType(type)}
                  className={`font-mono text-xs px-2 py-1 rounded-btn border ${
                    filters.types.includes(type)
                      ? "border-accent text-accent bg-accent/10"
                      : "border-border text-muted hover:text-text"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </section>
          <section>
            <p className="font-mono text-[10px] uppercase text-muted mb-2">
              Status
            </p>
            <select
              value={filters.status}
              onChange={(e) =>
                setStatus(e.target.value as typeof filters.status)
              }
              className="w-full font-mono text-xs bg-bg border border-border rounded-btn px-3 py-2 text-text"
            >
              <option value="all">All</option>
              <option value="unread">Unread</option>
              <option value="read">Read</option>
              <option value="favorited">Favorited</option>
              <option value="pinned">Pinned</option>
            </select>
          </section>
          <section>
            <p className="font-mono text-[10px] uppercase text-muted mb-2">
              Collection
            </p>
            <select
              value={filters.collectionId ?? ""}
              onChange={(e) =>
                setCollectionId(e.target.value || null)
              }
              className="w-full font-mono text-xs bg-bg border border-border rounded-btn px-3 py-2 text-text"
            >
              <option value="">All</option>
              {collections.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </section>
          <section>
            <p className="font-mono text-[10px] uppercase text-muted mb-2">
              Tags
            </p>
            <div className="max-h-32 overflow-auto space-y-1">
              {tags.map((t) => (
                <label
                  key={t.id}
                  className="flex items-center gap-2 font-mono text-xs text-text cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.tagIds.includes(t.id)}
                    onChange={() => toggleTag(t.id)}
                    className="rounded border-border"
                  />
                  {t.name}
                </label>
              ))}
            </div>
          </section>
          <section>
            <p className="font-mono text-[10px] uppercase text-muted mb-2">
              Date range
            </p>
            <div className="space-y-2">
              <input
                type="date"
                value={filters.dateFrom ?? ""}
                onChange={(e) =>
                  setDateRange(
                    e.target.value || null,
                    filters.dateTo
                  )
                }
                className="w-full font-mono text-xs bg-bg border border-border rounded-btn px-3 py-2 text-text"
              />
              <input
                type="date"
                value={filters.dateTo ?? ""}
                onChange={(e) =>
                  setDateRange(
                    filters.dateFrom,
                    e.target.value || null
                  )
                }
                className="w-full font-mono text-xs bg-bg border border-border rounded-btn px-3 py-2 text-text"
              />
            </div>
          </section>
          <section>
            <p className="font-mono text-[10px] uppercase text-muted mb-2">
              Has image
            </p>
            <select
              value={filters.hasImage === null ? "" : String(filters.hasImage)}
              onChange={(e) =>
                setHasImage(
                  e.target.value === "" ? null : e.target.value === "true"
                )
              }
              className="w-full font-mono text-xs bg-bg border border-border rounded-btn px-3 py-2 text-text"
            >
              <option value="">Any</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </section>
          <section>
            <p className="font-mono text-[10px] uppercase text-muted mb-2">
              Has note
            </p>
            <select
              value={filters.hasNote === null ? "" : String(filters.hasNote)}
              onChange={(e) =>
                setHasNote(
                  e.target.value === "" ? null : e.target.value === "true"
                )
              }
              className="w-full font-mono text-xs bg-bg border border-border rounded-btn px-3 py-2 text-text"
            >
              <option value="">Any</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </section>
          <section>
            <p className="font-mono text-[10px] uppercase text-muted mb-2">
              Link health
            </p>
            <select
              value={filters.linkStatus ?? ""}
              onChange={(e) =>
                setLinkStatus(
                  (e.target.value || null) as "all" | "live" | "dead" | null
                )
              }
              className="w-full font-mono text-xs bg-bg border border-border rounded-btn px-3 py-2 text-text"
            >
              <option value="">All</option>
              <option value="live">Live</option>
              <option value="dead">Dead</option>
            </select>
          </section>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearAll}
              className="font-mono text-xs text-muted hover:text-accent"
            >
              Clear all
            </button>
          )}
        </div>
      </div>
    </>
  );
}
