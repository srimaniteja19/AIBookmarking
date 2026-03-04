"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type ReadingContent = {
  title: string;
  byline: string | null;
  content: string;
  textContent: string;
  wordCount: number;
};

export function ReadingModeOverlay({
  bookmarkId,
  title,
  readTime,
  onClose,
}: {
  bookmarkId: string;
  title: string;
  readTime: number | null;
  onClose: () => void;
}) {
  const router = useRouter();
  const [content, setContent] = useState<ReadingContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [fontSize, setFontSize] = useState(18);
  const [highlightTooltip, setHighlightTooltip] = useState<{ text: string; x: number; y: number } | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/bookmarks/${bookmarkId}/fetch-content`, { method: "POST" })
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch");
        return r.json();
      })
      .then(setContent)
      .catch(() => setError("Could not load article"))
      .finally(() => setLoading(false));
  }, [bookmarkId]);

  const handleScroll = useCallback(() => {
    const el = document.getElementById("reading-content");
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const max = scrollHeight - clientHeight;
    setProgress(max > 0 ? Math.round((scrollTop / max) * 100) : 100);
  }, []);

  useEffect(() => {
    const el = document.getElementById("reading-content");
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [content, handleScroll]);

  const saveProgress = useCallback(() => {
    fetch(`/api/bookmarks/${bookmarkId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ readProgress: progress }),
    }).then(() => router.refresh());
  }, [bookmarkId, progress, router]);

  useEffect(() => {
    const t = setInterval(saveProgress, 5000);
    return () => clearInterval(t);
  }, [saveProgress]);

  useEffect(() => {
    const el = document.getElementById("reading-content");
    if (!el) return;
    const onMouseUp = () => {
      const sel = window.getSelection();
      const text = sel?.toString()?.trim();
      if (!text) {
        setHighlightTooltip(null);
        return;
      }
      const range = sel?.getRangeAt(0);
      const rect = range?.getBoundingClientRect();
      if (rect) {
        setHighlightTooltip({ text, x: rect.left + rect.width / 2, y: rect.top });
      }
    };
    el.addEventListener("mouseup", onMouseUp);
    return () => el.removeEventListener("mouseup", onMouseUp);
  }, [content]);

  const saveHighlight = () => {
    if (!highlightTooltip) return;
    fetch(`/api/bookmarks/${bookmarkId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ highlight: highlightTooltip.text }),
    }).then(() => {
      setHighlightTooltip(null);
      window.getSelection()?.removeAllRanges();
      router.refresh();
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-50 bg-bg flex flex-col"
    >
      <div
        className="h-0.5 bg-accent shrink-0 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
      <header className="h-14 flex items-center justify-between px-4 border-b border-border shrink-0">
        <button
          type="button"
          onClick={onClose}
          className="font-mono text-sm text-muted hover:text-text"
        >
          ← Back
        </button>
        <span className="font-mono text-xs text-muted truncate max-w-[50%]">
          {title}
        </span>
        <div className="flex items-center gap-2">
          {readTime && (
            <span className="font-mono text-xs text-muted">{readTime} min left</span>
          )}
          <button
            type="button"
            onClick={() => setFontSize((s) => Math.max(14, s - 2))}
            className="font-mono text-sm w-8 h-8 rounded-btn border border-border hover:border-border-hover"
          >
            A-
          </button>
          <button
            type="button"
            onClick={() => setFontSize((s) => Math.min(24, s + 2))}
            className="font-mono text-sm w-8 h-8 rounded-btn border border-border hover:border-border-hover"
          >
            A+
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
      </header>
      <main
        id="reading-content"
        className="flex-1 overflow-auto mx-auto w-full max-w-[680px] px-6 py-8"
        style={{ fontFamily: "Georgia, serif", fontSize: `${fontSize}px`, lineHeight: 1.8, color: "#d0d0d0" }}
      >
        {loading && (
          <div className="font-mono text-sm text-muted">Loading article...</div>
        )}
        {error && (
          <div className="font-mono text-sm text-red">{error}</div>
        )}
        {content && !error && (
          <>
            <h1 className="text-2xl font-serif text-white mb-2">{content.title}</h1>
            {content.byline && (
              <p className="text-sm text-muted mb-6">{content.byline}</p>
            )}
            <article
              className="reading-article prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          </>
        )}
        {highlightTooltip && (
          <div
            className="fixed z-50 font-mono text-xs px-3 py-2 rounded-btn bg-surface border border-border"
            style={{ left: highlightTooltip.x - 60, top: highlightTooltip.y - 40 }}
          >
            <button
              type="button"
              onClick={saveHighlight}
              className="text-accent hover:underline"
            >
              ✦ Save highlight
            </button>
          </div>
        )}
      </main>
    </motion.div>
  );
}
