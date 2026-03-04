"use client";

import { useMemo, useState, useCallback, useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useRouter } from "next/navigation";
import { format, isToday, isYesterday, startOfWeek, endOfWeek } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import { useGlobalPaste } from "@/hooks/use-global-paste";
import { QuickAddBar } from "./quick-add-bar";
import { BookmarkCard } from "./bookmark-card";
import { BookmarkDetailPanel } from "./bookmark-detail-panel";
import { ReadingModeOverlay } from "./reading-mode-overlay";
import { BulkActionBar } from "./bulk-action-bar";
import { FocusModeOverlay } from "./focus-mode-overlay";
import { useVaultView } from "@/contexts/vault-view-context";
import { useVaultFilter } from "@/contexts/vault-filter-context";

export type BookmarkItem = {
  id: string;
  url: string;
  title: string;
  description: string | null;
  favicon: string | null;
  ogImage: string | null;
  siteName: string | null;
  type: string;
  aiSummary: string | null;
  readTime: number | null;
  createdAt: string;
  collection: { id?: string; name: string; emoji: string | null } | null;
  tags: { id: string; name: string }[];
  isRead?: boolean;
  isFavorite?: boolean;
  isPinned?: boolean;
  note?: string | null;
  linkStatus?: string | null;
};

export function VaultContent({ bookmarks }: { bookmarks: BookmarkItem[] }) {
  const router = useRouter();
  const { viewMode, density, sort } = useVaultView();
  const { filters } = useVaultFilter();
  const [pasteToast, setPasteToast] = useState<string | null>(null);
  const [selectedBookmarkId, setSelectedBookmarkId] = useState<string | null>(null);
  const [readingMode, setReadingMode] = useState<{
    id: string;
    title: string;
    readTime: number | null;
  } | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [lastSelectedIndex, setLastSelectedIndex] = useState<number | null>(null);
  const [collectionsForBulk, setCollectionsForBulk] = useState<{ id: string; name: string }[]>([]);
  const [tagsForBulk, setTagsForBulk] = useState<{ id: string; name: string }[]>([]);
  const [resurfaced, setResurfaced] = useState<Array<BookmarkItem & { resurfaceLabel?: string }>>([]);
  const [focusModeOpen, setFocusModeOpen] = useState(false);

  const ingestUrl = useCallback(async (url: string) => {
    setPasteToast("Fetching bookmark...");
    try {
      const res = await fetch("/api/bookmarks/ingest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      if (res.ok) {
        setPasteToast("Saved ✓");
        router.refresh();
        setTimeout(() => setPasteToast(null), 2000);
      } else {
        setPasteToast("Could not save");
        setTimeout(() => setPasteToast(null), 3000);
      }
    } catch {
      setPasteToast("Error");
      setTimeout(() => setPasteToast(null), 3000);
    }
  }, [router]);

  useGlobalPaste(ingestUrl);
  useHotkeys("mod+.", () => setFocusModeOpen((o) => !o), { enabled: true });

  const openDetail = useCallback((id: string) => setSelectedBookmarkId(id), []);

  useEffect(() => {
    Promise.all([
      fetch("/api/collections").then((r) => r.json()),
      fetch("/api/tags").then((r) => r.json()),
    ]).then(([cols, tagsData]) => {
      setCollectionsForBulk(cols.map((c: { id: string; name: string }) => ({ id: c.id, name: c.name })));
      setTagsForBulk(tagsData.map((t: { id: string; name: string }) => ({ id: t.id, name: t.name })));
    }).catch(() => {});
  }, []);

  useEffect(() => {
    fetch("/api/bookmarks/resurface")
      .then((r) => r.json())
      .then(setResurfaced)
      .catch(() => {});
  }, []);

  const handleToggleSelect = useCallback(
    (id: string, shiftKey: boolean, index: number, orderedIds: string[]) => {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        if (shiftKey && lastSelectedIndex != null) {
          const start = Math.min(lastSelectedIndex, index);
          const end = Math.max(lastSelectedIndex, index);
          for (let i = start; i <= end; i++) {
            if (orderedIds[i]) next.add(orderedIds[i]);
          }
          return next;
        }
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
      setLastSelectedIndex(index);
    },
    [lastSelectedIndex]
  );

  const { dayGroups, weekGroups, timelineList, orderedIds } = useMemo(() => {
    let list = [...bookmarks];

    // Apply filters
    if (filters.types.length > 0) {
      list = list.filter((b) => filters.types.includes(b.type));
    }
    if (filters.status === "unread") list = list.filter((b) => !b.isRead);
    if (filters.status === "read") list = list.filter((b) => b.isRead);
    if (filters.status === "favorited") list = list.filter((b) => b.isFavorite);
    if (filters.status === "pinned") list = list.filter((b) => b.isPinned);
    if (filters.tagIds.length > 0) {
      list = list.filter((b) =>
        b.tags?.some((t) => filters.tagIds.includes(t.id))
      );
    }
    if (filters.collectionId) {
      list = list.filter(
        (b) => b.collection?.id === filters.collectionId
      );
    }
    if (filters.hasImage === true) list = list.filter((b) => !!b.ogImage);
    if (filters.hasImage === false) list = list.filter((b) => !b.ogImage);
    if (filters.hasNote === true) list = list.filter((b) => !!b.note?.trim());
    if (filters.hasNote === false) list = list.filter((b) => !b.note?.trim());
    if (filters.dateFrom) {
      list = list.filter(
        (b) => b.createdAt >= `${filters.dateFrom}T00:00:00.000Z`
      );
    }
    if (filters.dateTo) {
      list = list.filter(
        (b) => b.createdAt <= `${filters.dateTo}T23:59:59.999Z`
      );
    }
    if (filters.linkStatus === "live") {
      list = list.filter((b) => b.linkStatus === "LIVE");
    }
    if (filters.linkStatus === "dead") {
      list = list.filter((b) => b.linkStatus === "DEAD");
    }

    // Sort
    if (sort === "oldest") {
      list.sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1));
    } else if (sort === "visited") {
      list.sort((a, b) => ((b as { visitCount?: number }).visitCount ?? 0) - ((a as { visitCount?: number }).visitCount ?? 0));
    } else {
      list.sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1));
    }

    const byDay = new Map<string, BookmarkItem[]>();
    const byWeek = new Map<string, BookmarkItem[]>();
    for (const b of list) {
      const d = new Date(b.createdAt);
      const dayKey = format(d, "yyyy-MM-dd");
      if (!byDay.has(dayKey)) byDay.set(dayKey, []);
      byDay.get(dayKey)!.push(b);
      const weekStart = startOfWeek(d, { weekStartsOn: 1 });
      const weekKey = format(weekStart, "yyyy-MM-dd");
      if (!byWeek.has(weekKey)) byWeek.set(weekKey, []);
      byWeek.get(weekKey)!.push(b);
    }
    const dayGroups = Array.from(byDay.entries()).sort((a, b) =>
      a[0] > b[0] ? -1 : 1
    );
    const weekGroups = Array.from(byWeek.entries()).sort((a, b) =>
      a[0] > b[0] ? -1 : 1
    );
    return {
      dayGroups,
      weekGroups,
      timelineList: list,
      orderedIds: list.map((b) => b.id),
    };
  }, [bookmarks, filters, sort]);

  const getDayLabel = (dateStr: string) => {
    const d = new Date(dateStr + "T12:00:00");
    if (isToday(d)) return "Today";
    if (isYesterday(d)) return "Yesterday";
    return format(d, "EEEE, MMM d");
  };

  const getWeekLabel = (weekStartStr: string) => {
    const start = new Date(weekStartStr + "T12:00:00");
    const end = endOfWeek(start, { weekStartsOn: 1 });
    if (isToday(start) || (start <= new Date() && end >= new Date())) {
      return "This Week";
    }
    const prevStart = new Date(start);
    prevStart.setDate(prevStart.getDate() - 7);
    if (prevStart <= new Date() && end >= new Date()) return "Last Week";
    return `Week of ${format(start, "MMM d")}`;
  };

  const toastEl = pasteToast ? (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 font-mono text-sm px-4 py-2 rounded-btn bg-surface border border-border z-50">
      {pasteToast}
    </div>
  ) : null;

  const focusOverlay = (
    <FocusModeOverlay
      open={focusModeOpen}
      onClose={() => setFocusModeOpen(false)}
      bookmarks={timelineList}
    />
  );

  const bulkBar = (
    <BulkActionBar
      selectedIds={Array.from(selectedIds)}
      onClear={() => { setSelectedIds(new Set()); setLastSelectedIndex(null); }}
      collections={collectionsForBulk}
      tags={tagsForBulk}
    />
  );

  const panelAndOverlay = (
    <>
      {focusOverlay}
      {bulkBar}
      <AnimatePresence>
        {selectedBookmarkId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-30"
              onClick={() => setSelectedBookmarkId(null)}
              aria-hidden
            />
            <BookmarkDetailPanel
              key={selectedBookmarkId}
              bookmarkId={selectedBookmarkId}
              onClose={() => setSelectedBookmarkId(null)}
              onOpenReadingMode={(b) => {
                setReadingMode(b);
                setSelectedBookmarkId(null);
              }}
            />
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {readingMode && (
          <ReadingModeOverlay
            key={readingMode.id}
            bookmarkId={readingMode.id}
            title={readingMode.title}
            readTime={readingMode.readTime}
            onClose={() => setReadingMode(null)}
          />
        )}
      </AnimatePresence>
    </>
  );

  const resurfaceSection = resurfaced.length > 0 && (
    <section className="mb-10 p-4 rounded-card border border-border bg-surface" style={{ boxShadow: "0 0 0 1px rgba(232,255,71,0.2)" }}>
      <h2 className="font-display text-[22px] italic text-text mb-3">Today&apos;s Resurfaced</h2>
      <div className="space-y-3">
        {resurfaced.map((b) => (
          <div key={b.id} className="flex items-center justify-between gap-4">
            <BookmarkCard
              bookmark={b}
              index={0}
              density="comfortable"
              onSelect={openDetail}
            />
            <span className="font-mono text-xs text-muted shrink-0">
              {(b as { resurfaceLabel?: string }).resurfaceLabel}
            </span>
          </div>
        ))}
      </div>
    </section>
  );

  if (viewMode === "timeline") {
    return (
      <div className="p-6 max-w-4xl mx-auto relative">
        {panelAndOverlay}
        {toastEl}
        <QuickAddBar />
        {resurfaceSection}
        <div className="relative pl-6 border-l border-border ml-2 space-y-6">
          {timelineList.map((bookmark, i) => (
            <div key={bookmark.id} className="relative flex gap-4">
              <div
                className="absolute left-[-29px] w-2 h-2 rounded-full border border-border bg-surface"
                style={{
                  backgroundColor:
                    bookmark.type === "VIDEO"
                      ? "var(--red)"
                      : bookmark.type === "ARTICLE"
                        ? "var(--blue)"
                        : bookmark.type === "GITHUB"
                          ? "var(--accent)"
                          : "var(--surface-2)",
                }}
              />
              <div className="flex-1 min-w-0 pt-0.5">
                <BookmarkCard
                  bookmark={bookmark}
                  index={i}
                  density={density}
                  onSelect={openDetail}
                  isSelected={selectedIds.has(bookmark.id)}
                  onToggleSelect={(id, shiftKey) => handleToggleSelect(id, shiftKey, orderedIds.indexOf(bookmark.id), orderedIds)}
                />
              </div>
            </div>
          ))}
        </div>
        {timelineList.length === 0 && (
          <div className="text-center py-16 font-mono text-sm text-muted">
            No bookmarks yet. Paste a URL above to add one.
          </div>
        )}
      </div>
    );
  }

  if (viewMode === "week") {
    return (
      <div className="p-6 max-w-4xl mx-auto relative">
        {panelAndOverlay}
        {toastEl}
        <QuickAddBar />
        {resurfaceSection}
        <div className="space-y-12">
          {weekGroups.map(([weekStart, items]) => (
            <section key={weekStart}>
              <header className="mb-4">
                <h2 className="font-display text-[22px] italic text-text">
                  {getWeekLabel(weekStart)}
                </h2>
                <p className="font-mono text-xs font-light text-muted mt-0.5">
                  {items.length} bookmark{items.length !== 1 ? "s" : ""}
                </p>
                <div className="flex gap-1 mt-2">
                  {[0, 1, 2, 3, 4, 5, 6].map((d) => {
                    const count = items.filter(
                      (b) => new Date(b.createdAt).getDay() === (d + 1) % 7
                    ).length;
                    return (
                      <div
                        key={d}
                        className="w-2 h-2 rounded-full bg-faint"
                        style={{
                          opacity: count > 0 ? 0.3 + Math.min(count / 5, 1) * 0.7 : 0.15,
                        }}
                        title={`${count} bookmarks`}
                      />
                    );
                  })}
                </div>
              </header>
              <div className="space-y-3">
                {items.map((bookmark, i) => (
                  <BookmarkCard
                    key={bookmark.id}
                    bookmark={bookmark}
                    index={i}
                    density={density}
                    onSelect={openDetail}
                    isSelected={selectedIds.has(bookmark.id)}
                    onToggleSelect={(id, shiftKey) => handleToggleSelect(id, shiftKey, orderedIds.indexOf(bookmark.id), orderedIds)}
                  />
                ))}
              </div>
              <div className="h-12 border-b border-border" />
            </section>
          ))}
        </div>
        {weekGroups.length === 0 && (
          <div className="text-center py-16 font-mono text-sm text-muted">
            No bookmarks yet. Paste a URL above to add one.
          </div>
        )}
      </div>
    );
  }

  if (viewMode === "month") {
    const monthStart = new Date();
    monthStart.setDate(1);
    monthStart.setHours(0, 0, 0, 0);
    const daysInMonth = new Date(
      monthStart.getFullYear(),
      monthStart.getMonth() + 1,
      0
    ).getDate();
    const firstDay = new Date(monthStart);
    firstDay.setDate(1);
    const startPad = (firstDay.getDay() + 6) % 7;
    const dayCounts = new Map<string, number>();
    bookmarks.forEach((b) => {
      const k = format(new Date(b.createdAt), "yyyy-MM-dd");
      dayCounts.set(k, (dayCounts.get(k) ?? 0) + 1);
    });
    const maxCount = Math.max(1, ...Array.from(dayCounts.values()));

    return (
      <div className="p-6 max-w-4xl mx-auto relative">
        {panelAndOverlay}
        {toastEl}
        <QuickAddBar />
        <h2 className="font-display text-[22px] italic text-text mb-4">
          {format(monthStart, "MMMM yyyy")}
        </h2>
        <div
          className="grid grid-cols-7 gap-1 font-mono text-sm"
          style={{ gridTemplateRows: "repeat(6, 48px)" }}
        >
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
            <div key={d} className="text-muted text-xs py-1">
              {d}
            </div>
          ))}
          {Array.from({ length: startPad }, (_, i) => (
            <div key={`pad-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const dateStr = format(
              new Date(monthStart.getFullYear(), monthStart.getMonth(), day),
              "yyyy-MM-dd"
            );
            const count = dayCounts.get(dateStr) ?? 0;
            return (
              <div
                key={dateStr}
                className="rounded-btn border border-border flex items-center justify-center text-xs"
                style={{
                  backgroundColor:
                    count > 0
                      ? `color-mix(in srgb, var(--accent) ${(count / maxCount) * 25}%, var(--surface))`
                      : undefined,
                }}
                title={count > 0 ? `${count} bookmarks` : ""}
              >
                {count > 0 ? count : ""}
              </div>
            );
          })}
        </div>
        <p className="font-mono text-xs text-muted mt-4">
          Click a day to filter (coming soon).
        </p>
        {bookmarks.length === 0 && (
          <div className="text-center py-16 font-mono text-sm text-muted">
            No bookmarks yet. Paste a URL above to add one.
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto relative">
      {panelAndOverlay}
      {toastEl}
      <QuickAddBar />
      {resurfaceSection}
      <div className="space-y-12">
        {dayGroups.map(([date, items]) => (
          <section key={date}>
            <header className="mb-5">
              <h2 className="font-display text-[28px] italic text-[#1a1a1a]">
                {getDayLabel(date)}
              </h2>
              <p className="font-mono text-[13px] font-light text-[#999] mt-1">
                {items.length} bookmark{items.length !== 1 ? "s" : ""}
              </p>
            </header>
            <div
              className={
                density === "comfortable"
                  ? "grid gap-4 md:grid-cols-2"
                  : "space-y-3"
              }
            >
              {items.map((bookmark, i) => (
                <BookmarkCard
                  key={bookmark.id}
                  bookmark={bookmark}
                  index={i}
                  density={density}
                  onSelect={openDetail}
                  isSelected={selectedIds.has(bookmark.id)}
                  onToggleSelect={(id, shiftKey) =>
                    handleToggleSelect(
                      id,
                      shiftKey,
                      orderedIds.indexOf(bookmark.id),
                      orderedIds
                    )
                  }
                />
              ))}
            </div>
            <div className="h-12 border-b border-border" />
          </section>
        ))}
      </div>
      {dayGroups.length === 0 && (
        <div className="text-center py-16 font-mono text-sm text-muted">
          No bookmarks yet. Paste a URL above to add one.
        </div>
      )}
    </div>
  );
}
