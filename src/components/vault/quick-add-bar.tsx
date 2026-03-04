"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export function QuickAddBar() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const router = useRouter();

  const ingest = useCallback(async (inputUrl: string) => {
    const trimmed = inputUrl.trim();
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
        setTimeout(() => setStatus("idle"), 2000);
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ingest(url);
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const text = e.clipboardData.getData("text").trim();
    try {
      new URL(text);
      if (text.startsWith("http")) {
        e.preventDefault();
        setUrl(text);
        setTimeout(() => ingest(text), 0);
      }
    } catch {
      // not a URL
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const link = e.dataTransfer.getData("text/uri-list") || e.dataTransfer.getData("text");
    if (link && link.startsWith("http")) {
      ingest(link.trim());
    }
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  return (
    <form
      onSubmit={handleSubmit}
      onPaste={handlePaste}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="mb-6"
    >
      <div className="flex gap-2">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste a URL or drag a link here..."
          className="flex-1 font-mono text-sm font-light px-4 py-3 bg-surface border border-border rounded-btn text-text placeholder:text-muted focus:outline-none focus:border-border-hover transition-colors duration-150"
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading" || !url.trim()}
          className="font-mono text-sm font-medium px-4 py-3 bg-surface border border-border rounded-btn text-text hover:border-border-hover disabled:opacity-50 transition-all duration-150"
        >
          {status === "loading" ? "..." : status === "done" ? "Saved ✓" : "Add"}
        </button>
      </div>
      {status === "error" && (
        <p className="font-mono text-xs text-red mt-1">Could not save. Check URL or try again.</p>
      )}
    </form>
  );
}
