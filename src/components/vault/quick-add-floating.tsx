"use client";

import { useState, useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function QuickAddFloating() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  useHotkeys("shift+mod+s", (e) => {
    e.preventDefault();
    setOpen((o) => !o);
    if (!open) setUrl("");
  });

  const save = async () => {
    const trimmed = url.trim();
    if (!trimmed) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/bookmarks/ingest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: trimmed }),
      });
      if (res.ok) {
        setUrl("");
        setStatus("done");
        router.refresh();
        setTimeout(() => {
          setStatus("idle");
          setOpen(false);
        }, 1000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 2000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="fixed bottom-6 right-6 z-50 w-80 bg-surface border border-border rounded-card p-4 shadow-lg"
      >
        <p className="font-mono text-xs text-muted mb-2">Quick add bookmark</p>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && save()}
          placeholder="Paste URL..."
          className="w-full font-mono text-sm px-3 py-2 bg-bg border border-border rounded-btn text-text mb-2"
          autoFocus
        />
        <div className="flex gap-2">
          <button
            type="button"
            onClick={save}
            disabled={status === "loading" || !url.trim()}
            className="font-mono text-xs px-3 py-2 rounded-btn bg-surface-2 border border-border"
          >
            {status === "loading" ? "..." : status === "done" ? "Saved ✓" : "Save"}
          </button>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="font-mono text-xs px-3 py-2 rounded-btn border border-border"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
