"use client";

import { useState, useEffect, useCallback } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const STREAK_KEY = "vault-focus-streak";
const STREAK_DATE_KEY = "vault-focus-streak-date";

function getStreak(): { count: number; lastDate: string } {
  if (typeof window === "undefined") return { count: 0, lastDate: "" };
  const raw = localStorage.getItem(STREAK_KEY);
  const date = localStorage.getItem(STREAK_DATE_KEY) ?? "";
  return { count: raw ? parseInt(raw, 10) : 0, lastDate: date };
}

function incrementStreak(): number {
  const today = new Date().toISOString().slice(0, 10);
  const { count, lastDate } = getStreak();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().slice(0, 10);
  let next = count;
  if (lastDate === today) return next;
  if (lastDate === yesterdayStr) next += 1;
  else next = 1;
  localStorage.setItem(STREAK_KEY, String(next));
  localStorage.setItem(STREAK_DATE_KEY, today);
  return next;
}

type BookmarkItem = {
  id: string;
  url: string;
  title: string;
  type: string;
  isRead?: boolean;
};

export function FocusModeOverlay({
  open,
  onClose,
  bookmarks,
}: {
  open: boolean;
  onClose: () => void;
  bookmarks: BookmarkItem[];
}) {
  const router = useRouter();
  const [current, setCurrent] = useState<BookmarkItem | null>(null);
  const [streak, setStreak] = useState(0);

  useHotkeys("mod+.", () => onClose(), { enabled: open });

  const unread = bookmarks.filter((b) => !b.isRead);
  const pickRandom = useCallback(() => {
    if (unread.length === 0) {
      setCurrent(null);
      return;
    }
    const i = Math.floor(Math.random() * unread.length);
    setCurrent(unread[i]);
  }, [unread]);

  useEffect(() => {
    if (open) {
      setStreak(getStreak().count);
      pickRandom();
    }
  }, [open, pickRandom]);

  const markDone = () => {
    if (!current) return;
    fetch(`/api/bookmarks/${current.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isRead: true }),
    }).then(() => {
      const newStreak = incrementStreak();
      setStreak(newStreak);
      router.refresh();
      pickRandom();
    });
  };

  const skip = () => {
    pickRandom();
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-bg flex flex-col items-center justify-center p-8"
      >
        <div className="absolute top-4 right-4 font-mono text-xs text-muted">
          {streak > 0 && `🔥 ${streak} day streak`}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 left-4 font-mono text-sm text-muted hover:text-text"
        >
          ← Exit (⌘.)
        </button>
        {current ? (
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl w-full text-center"
          >
            <h2 className="font-display text-2xl italic text-text mb-4">
              {current.title}
            </h2>
            <a
              href={current.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-blue hover:underline block mb-6"
            >
              {current.url}
            </a>
            <div className="flex gap-4 justify-center">
              <button
                type="button"
                onClick={markDone}
                className="font-mono text-sm px-4 py-2 rounded-btn bg-surface border border-border hover:border-accent text-accent"
              >
                Done
              </button>
              <button
                type="button"
                onClick={skip}
                className="font-mono text-sm px-4 py-2 rounded-btn bg-surface border border-border"
              >
                Skip
              </button>
            </div>
          </motion.div>
        ) : (
          <p className="font-mono text-muted">
            No unread bookmarks. Great job!
          </p>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
