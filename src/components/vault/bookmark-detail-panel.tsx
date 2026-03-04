"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { formatDistanceToNow } from "date-fns";

type BookmarkDetail = {
  id: string;
  url: string;
  title: string;
  description: string | null;
  favicon: string | null;
  ogImage: string | null;
  siteName: string | null;
  type: string;
  aiSummary: string | null;
  keyPoints: string[];
  readTime: number | null;
  readProgress: number | null;
  note: string | null;
  highlight: string | null;
  isFavorite: boolean;
  isArchived: boolean;
  isRead: boolean;
  visitCount: number;
  lastVisited: string | null;
  createdAt: string;
  remindAt: string | null;
  collection: { id: string; name: string; emoji: string | null } | null;
  tags: { id: string; name: string }[];
};

export function BookmarkDetailPanel({
  bookmarkId,
  onClose,
  onOpenReadingMode,
}: {
  bookmarkId: string | null;
  onClose: () => void;
  onOpenReadingMode: (payload: { id: string; title: string; readTime: number | null }) => void;
}) {
  const router = useRouter();
  const [bookmark, setBookmark] = useState<BookmarkDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState("");
  const [savingNote, setSavingNote] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [remindAt, setRemindAt] = useState("");

  useEffect(() => {
    if (!bookmarkId) {
      setBookmark(null);
      return;
    }
    setLoading(true);
    fetch(`/api/bookmarks/${bookmarkId}`)
      .then((r) => r.json())
      .then((data) => {
        setBookmark(data);
        setNote(data.note ?? "");
        setRemindAt(data.remindAt ? new Date(data.remindAt).toISOString().slice(0, 16) : "");
      })
      .catch(() => setBookmark(null))
      .finally(() => setLoading(false));
  }, [bookmarkId]);

  const saveNote = () => {
    if (!bookmarkId || savingNote) return;
    setSavingNote(true);
    fetch(`/api/bookmarks/${bookmarkId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ note }),
    })
      .then(() => router.refresh())
      .finally(() => setSavingNote(false));
  };

  const toggleFavorite = () => {
    if (!bookmark) return;
    fetch(`/api/bookmarks/${bookmarkId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isFavorite: !bookmark.isFavorite }),
    }).then(() => {
      setBookmark((b) => (b ? { ...b, isFavorite: !b.isFavorite } : null));
      router.refresh();
    });
  };

  const toggleArchive = () => {
    if (!bookmark) return;
    fetch(`/api/bookmarks/${bookmarkId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isArchived: !bookmark.isArchived }),
    }).then(() => {
      router.refresh();
      onClose();
    });
  };

  const markRead = () => {
    if (!bookmark) return;
    fetch(`/api/bookmarks/${bookmarkId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isRead: true }),
    }).then(() => {
      setBookmark((b) => (b ? { ...b, isRead: true } : null));
      router.refresh();
    });
  };

  const copyUrl = () => {
    if (bookmark) navigator.clipboard.writeText(bookmark.url);
  };

  const addTag = () => {
    if (!bookmarkId || !tagInput.trim()) return;
    fetch(`/api/bookmarks/${bookmarkId}/tags`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: tagInput.trim() }),
    })
      .then((r) => r.json())
      .then((tag) => {
        setBookmark((b) => (b ? { ...b, tags: [...b.tags, { id: tag.id, name: tag.name }] } : null));
        setTagInput("");
        router.refresh();
      })
      .catch(() => {});
  };

  const removeTag = (tagId: string) => {
    if (!bookmarkId) return;
    fetch(`/api/bookmarks/${bookmarkId}/tags/${tagId}`, { method: "DELETE" })
      .then(() => {
        setBookmark((b) => (b ? { ...b, tags: b.tags.filter((t) => t.id !== tagId) } : null));
        router.refresh();
      })
      .catch(() => {});
  };

  const saveRemindAt = () => {
    if (!bookmarkId) return;
    const value = remindAt ? new Date(remindAt).toISOString() : null;
    fetch(`/api/bookmarks/${bookmarkId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ remindAt: value }),
    }).then(() => router.refresh());
  };

  if (!bookmarkId) return null;

  return (
    <motion.div
        initial={{ x: 380 }}
        animate={{ x: 0 }}
        exit={{ x: 380 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 bottom-0 w-[380px] bg-bg border-l border-border z-40 flex flex-col overflow-hidden"
      >
        <div className="p-4 border-b border-border flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-sm text-muted hover:text-text"
          >
            ← Back
          </button>
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-muted hover:text-text"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-auto p-4">
          {loading ? (
            <div className="font-mono text-sm text-muted">Loading...</div>
          ) : !bookmark ? (
            <div className="font-mono text-sm text-muted">Not found</div>
          ) : (
            <>
              {bookmark.ogImage && (
                <div className="w-full h-[200px] rounded-btn overflow-hidden border border-border mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={bookmark.ogImage}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <h1 className="font-mono text-sm font-medium text-text mb-2 line-clamp-2">
                {bookmark.title}
              </h1>
              <a
                href={bookmark.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-blue break-all hover:underline"
              >
                {bookmark.url}
              </a>
              <div className="flex items-center gap-2 mt-2 flex-wrap font-mono text-xs text-muted">
                <span>{bookmark.siteName || new URL(bookmark.url).hostname}</span>
                <span className="px-1.5 py-0.5 rounded bg-faint">{bookmark.type}</span>
                <span>{formatDistanceToNow(new Date(bookmark.createdAt), { addSuffix: true })}</span>
              </div>

              {bookmark.aiSummary && (
                <div className="mt-4">
                  <p className="font-mono text-[10px] uppercase text-muted mb-1">Summary</p>
                  <p className="font-mono text-xs font-light text-muted italic">
                    {bookmark.aiSummary}
                  </p>
                </div>
              )}

              {bookmark.keyPoints && bookmark.keyPoints.length > 0 && (
                <ul className="mt-4 font-mono text-xs text-muted space-y-1 list-disc list-inside">
                  {bookmark.keyPoints.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              )}

              <div className="mt-4">
                <p className="font-mono text-[10px] uppercase text-muted mb-1">Your note</p>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  onBlur={saveNote}
                  placeholder="Add a note..."
                  className="w-full font-mono text-xs bg-surface border border-border rounded-btn p-3 text-text placeholder:text-muted min-h-[80px] resize-y focus:outline-none focus:border-border-hover"
                />
              </div>

              {bookmark.highlight && (
                <blockquote className="mt-4 pl-3 border-l-2 border-accent font-mono text-xs text-muted italic">
                  {bookmark.highlight}
                </blockquote>
              )}

              <div className="mt-4">
                <p className="font-mono text-[10px] uppercase text-muted mb-1">Tags</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {bookmark.tags.map((t) => (
                    <span
                      key={t.id}
                      className="font-mono text-[10px] px-2 py-0.5 rounded-pill bg-surface-2 text-muted border border-border inline-flex items-center gap-1"
                    >
                      {t.name}
                      <button
                        type="button"
                        onClick={() => removeTag(t.id)}
                        className="hover:text-red"
                        aria-label="Remove tag"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTag()}
                    placeholder="Add tag..."
                    className="flex-1 font-mono text-xs bg-surface border border-border rounded-btn px-2 py-1.5 text-text"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="font-mono text-xs px-2 py-1.5 rounded-btn bg-surface border border-border"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <p className="font-mono text-[10px] uppercase text-muted mb-1">Reminder</p>
                <input
                  type="datetime-local"
                  value={remindAt}
                  onChange={(e) => setRemindAt(e.target.value)}
                  onBlur={saveRemindAt}
                  className="w-full font-mono text-xs bg-surface border border-border rounded-btn px-3 py-2 text-text"
                />
              </div>

              <div className="mt-4 font-mono text-xs text-muted">
                {bookmark.readTime && <span>{bookmark.readTime} min read</span>}
                {bookmark.visitCount > 0 && (
                  <span className="ml-2">Opened {bookmark.visitCount} times</span>
                )}
                {bookmark.lastVisited && (
                  <span className="ml-2">
                    Last visited {formatDistanceToNow(new Date(bookmark.lastVisited), { addSuffix: true })}
                  </span>
                )}
              </div>

              {bookmark.type === "ARTICLE" && (
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => onOpenReadingMode({ id: bookmark.id, title: bookmark.title, readTime: bookmark.readTime })}
                    className="font-mono text-xs px-3 py-2 rounded-btn bg-surface border border-border hover:border-border-hover text-text"
                  >
                    Open in Reading Mode
                  </button>
                  {!bookmark.isRead && (
                    <button
                      type="button"
                      onClick={markRead}
                      className="font-mono text-xs px-3 py-2 rounded-btn bg-surface border border-border hover:border-border-hover text-text ml-2"
                    >
                      Mark as read
                    </button>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {bookmark && (
          <div className="p-4 border-t border-border flex flex-wrap gap-2 shrink-0">
            <a
              href={bookmark.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-3 py-2 rounded-btn bg-surface border border-border hover:border-border-hover"
            >
              Open ↗
            </a>
            <button
              type="button"
              onClick={copyUrl}
              className="font-mono text-xs px-3 py-2 rounded-btn bg-surface border border-border hover:border-border-hover"
            >
              Copy URL
            </button>
            <button
              type="button"
              onClick={toggleFavorite}
              className="font-mono text-xs px-3 py-2 rounded-btn bg-surface border border-border hover:border-border-hover"
            >
              {bookmark.isFavorite ? "♥ Favorited" : "♡ Favorite"}
            </button>
            <button
              type="button"
              onClick={toggleArchive}
              className="font-mono text-xs px-3 py-2 rounded-btn bg-surface border border-border hover:border-border-hover"
            >
              {bookmark.isArchived ? "Unarchive" : "Archive"}
            </button>
          </div>
        )}
      </motion.div>
  );
}
