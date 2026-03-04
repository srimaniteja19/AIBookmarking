"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import type { BookmarkType as PrismaBookmarkType } from "@prisma/client";

export type BookmarkCardItem = {
  id: string;
  url: string;
  title: string;
  description: string | null;
  favicon: string | null;
  ogImage: string | null;
  siteName: string | null;
  type: PrismaBookmarkType | string;
  aiSummary: string | null;
  readTime: number | null;
  createdAt: Date | string;
  collection: { name: string; emoji: string | null } | null;
  tags: { name: string }[];
};

const TYPE_LABELS: Record<PrismaBookmarkType, string> = {
  LINK: "Link",
  VIDEO: "Video",
  ARTICLE: "Article",
  TWEET: "Tweet",
  GITHUB: "GitHub",
  IMAGE: "Image",
  DOCUMENT: "Document",
  OTHER: "Other",
};

const TYPE_BG_COLOR: Record<string, string> = {
  VIDEO: "#f5ddd0",
  ARTICLE: "#e8e4f0",
  LINK: "#d8ecd8",
  GITHUB: "#f2e0ec",
  TWEET: "#d4e8f5",
  DOCUMENT: "#f5f0d8",
  OTHER: "#ebe8e4",
};

const TYPE_SHAPE_COLOR: Record<string, string> = {
  VIDEO: "#f1b89a",
  ARTICLE: "#c8bedf",
  LINK: "#a8d6a8",
  GITHUB: "#e1b8d6",
  TWEET: "#9fc4e6",
  DOCUMENT: "#e1d7a3",
  OTHER: "#c7c1ba",
};

function TypeShape({ type, color }: { type: string; color: string }) {
  const t = type as PrismaBookmarkType;
  switch (t) {
    case "VIDEO":
      return (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <circle cx="60" cy="60" r="46" fill={color} fillOpacity={0.9} />
        </svg>
      );
    case "ARTICLE":
      return (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <rect x="22" y="24" width="70" height="44" rx="10" fill={color} fillOpacity={0.6} />
          <rect x="30" y="44" width="68" height="44" rx="12" fill={color} fillOpacity={0.9} />
        </svg>
      );
    case "LINK":
      return (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <polygon
            points="60,16 100,60 60,104 20,60"
            fill={color}
            fillOpacity={0.9}
          />
        </svg>
      );
    case "GITHUB":
      return (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <polygon points="20,100 60,20 100,100" fill={color} fillOpacity={0.9} />
        </svg>
      );
    case "TWEET":
      return (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <path
            d="M0,70 C20,50 40,90 60,70 C80,50 100,90 120,70 L120,120 L0,120 Z"
            fill={color}
            fillOpacity={0.9}
          />
        </svg>
      );
    case "DOCUMENT":
      return (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <rect x="28" y="18" width="64" height="84" rx="14" fill={color} fillOpacity={0.95} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <path
            d="M20,60 C18,40 34,18 56,20 C72,22 84,34 92,48 C100,62 96,82 80,92 C64,102 42,100 30,88 C22,80 22,72 20,60 Z"
            fill={color}
            fillOpacity={0.9}
          />
        </svg>
      );
  }
}

export function BookmarkCard({
  bookmark,
  index,
  density = "comfortable",
  onSelect,
  isSelected,
  onToggleSelect,
}: {
  bookmark: BookmarkCardItem;
  index: number;
  density?: "comfortable" | "compact" | "magazine";
  onSelect?: (id: string) => void;
  isSelected?: boolean;
  onToggleSelect?: (id: string, shiftKey: boolean) => void;
}) {
  const [showOgImage, setShowOgImage] = useState(true);
  const dateStr = formatDistanceToNow(
    typeof bookmark.createdAt === "string" ? new Date(bookmark.createdAt) : bookmark.createdAt,
    { addSuffix: true }
  );

  const cardClass =
    "flex items-center gap-3 h-10 px-3 rounded-btn bg-surface border border-border hover:bg-surface-2 hover:border-border-hover transition-all duration-150 group";

  const motionProps = {
    initial: { opacity: 0, y: 6 } as const,
    animate: { opacity: 1, y: 0 } as const,
    transition: { delay: index * 0.03, duration: 0.15 },
  };

  const checkboxEl = onToggleSelect ? (
    <div
      className="absolute left-2 top-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
      onClick={(e) => e.stopPropagation()}
    >
      <input
        type="checkbox"
        checked={!!isSelected}
        onChange={(e) => onToggleSelect(bookmark.id, "shiftKey" in e.nativeEvent ? !!e.nativeEvent.shiftKey : false)}
        className="rounded border-border bg-surface"
      />
    </div>
  ) : null;

  const typeKey = (bookmark.type as PrismaBookmarkType) || "OTHER";
  const bgColor = TYPE_BG_COLOR[typeKey] ?? TYPE_BG_COLOR.OTHER;
  const shapeColor = TYPE_SHAPE_COLOR[typeKey] ?? TYPE_SHAPE_COLOR.OTHER;

  if (density === "compact") {
    if (onSelect) {
      return (
        <motion.div
          {...motionProps}
          role="button"
          tabIndex={0}
          onClick={() => onSelect(bookmark.id)}
          onKeyDown={(e) => e.key === "Enter" && onSelect(bookmark.id)}
          className={cardClass + " cursor-pointer relative group pl-8"}
        >
          {checkboxEl}
          {bookmark.favicon ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={bookmark.favicon} alt="" className="w-4 h-4 rounded shrink-0" />
          ) : (
            <span className="w-4 h-4 rounded bg-faint shrink-0" />
          )}
          <span className="flex-1 font-mono text-sm font-medium truncate text-text">
            {bookmark.title}
          </span>
          <span className="font-mono text-xs text-muted shrink-0">
            {bookmark.siteName || new URL(bookmark.url).hostname}
          </span>
          <span className="font-mono text-xs text-muted shrink-0">{dateStr}</span>
          <a
            href={bookmark.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="font-mono text-xs text-muted hover:text-accent shrink-0"
          >
            Open ↗
          </a>
        </motion.div>
      );
    }
    return (
      <motion.a
        href={bookmark.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={motionProps.initial}
        animate={motionProps.animate}
        transition={motionProps.transition}
        className={cardClass + " relative group pl-8"}
      >
        {checkboxEl}
        {bookmark.favicon ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={bookmark.favicon}
            alt=""
            className="w-4 h-4 rounded shrink-0"
          />
        ) : (
          <span className="w-4 h-4 rounded bg-faint shrink-0" />
        )}
        <span className="flex-1 font-mono text-sm font-medium truncate text-text">
          {bookmark.title}
        </span>
        <span className="font-mono text-xs text-muted shrink-0">
          {bookmark.siteName || new URL(bookmark.url).hostname}
        </span>
        <span className="font-mono text-xs text-muted shrink-0">{dateStr}</span>
      </motion.a>
    );
  }

  if (density === "magazine") {
    if (onSelect) {
      return (
        <motion.div
          {...motionProps}
          role="button"
          tabIndex={0}
          onClick={() => onSelect(bookmark.id)}
          onKeyDown={(e) => e.key === "Enter" && onSelect(bookmark.id)}
          className="block rounded-card overflow-hidden border border-border hover:border-border-hover transition-all duration-150 group relative aspect-[4/3] cursor-pointer"
        >
          {checkboxEl}
          {bookmark.ogImage && showOgImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={bookmark.ogImage}
              alt=""
              className="object-cover w-full h-full"
              onError={() => setShowOgImage(false)}
            />
          ) : (
            <div className="absolute inset-0 bg-surface-2" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-display text-lg italic text-white line-clamp-2">{bookmark.title}</h3>
            <p className="font-mono text-xs text-white/70 mt-1">
              {bookmark.siteName || new URL(bookmark.url).hostname} · {dateStr}
            </p>
            <a
              href={bookmark.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs text-white/80 hover:text-accent mt-1 inline-block"
            >
              Open ↗
            </a>
          </div>
        </motion.div>
      );
    }
    return (
      <motion.a
        href={bookmark.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.03, duration: 0.15 }}
        className="block rounded-card overflow-hidden border border-border hover:border-border-hover transition-all duration-150 group relative aspect-[4/3]"
      >
        {checkboxEl}
        {bookmark.ogImage && showOgImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={bookmark.ogImage}
            alt=""
            className="object-cover w-full h-full"
            onError={() => setShowOgImage(false)}
          />
        ) : (
          <div className="absolute inset-0 bg-surface-2" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-display text-lg italic text-white line-clamp-2">
            {bookmark.title}
          </h3>
          <p className="font-mono text-xs text-white/70 mt-1">
            {bookmark.siteName || new URL(bookmark.url).hostname} · {dateStr}
          </p>
        </div>
      </motion.a>
    );
  }

  if (density === "comfortable") {
    const labelText = TYPE_LABELS[typeKey] ?? bookmark.type;
    const inner = (
      <>
        {checkboxEl}
        <div className="flex gap-4 h-full">
          <div className="flex-[0.6] flex flex-col justify-between h-full min-w-0">
            <div className="space-y-2">
              <span className="inline-flex px-2.5 py-1 rounded-full bg-white/50 font-mono text-[11px] text-[#1a1a1a]">
                {labelText}
              </span>
              <h3 className="font-display text-[20px] italic text-[#1a1a1a] leading-snug line-clamp-2">
                {bookmark.title}
              </h3>
              {bookmark.description && (
                <p className="font-sans text-[13px] text-[#555] leading-snug line-clamp-2">
                  {bookmark.description}
                </p>
              )}
            </div>
            <a
              href={bookmark.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center font-sans text-[13px] font-medium text-[#333] hover:text-black transition-colors"
            >
              Open →
            </a>
          </div>
          <div className="flex-[0.4] flex items-center justify-center h-full">
            {bookmark.ogImage && showOgImage ? (
              <div className="w-[140px] h-[140px] rounded-[12px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={bookmark.ogImage}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={() => setShowOgImage(false)}
                />
              </div>
            ) : (
              <div className="w-[120px] h-[120px]">
                <TypeShape type={typeKey} color={shapeColor} />
              </div>
            )}
          </div>
        </div>
      </>
    );

    if (onSelect) {
      return (
        <motion.div
          {...motionProps}
          whileHover={{ scale: 1.02, y: -3 }}
          role="button"
          tabIndex={0}
          onClick={() => onSelect(bookmark.id)}
          onKeyDown={(e) => e.key === "Enter" && onSelect(bookmark.id)}
          className="relative rounded-[20px] h-[180px] px-5 py-4 cursor-pointer transition-transform duration-200"
          style={{ backgroundColor: bgColor }}
        >
          {inner}
        </motion.div>
      );
    }

    return (
      <motion.a
        href={bookmark.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={motionProps.initial}
        animate={motionProps.animate}
        transition={motionProps.transition}
        whileHover={{ scale: 1.02, y: -3 }}
        className="relative block rounded-[20px] h-[180px] px-5 py-4 cursor-pointer transition-transform duration-200"
        style={{ backgroundColor: bgColor }}
      >
        {inner}
      </motion.a>
    );
  }

  if (onSelect) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.03, duration: 0.15 }}
        whileHover={{ scale: 1.005 }}
        role="button"
        tabIndex={0}
        onClick={() => onSelect(bookmark.id)}
        onKeyDown={(e) => e.key === "Enter" && onSelect(bookmark.id)}
        className="flex gap-4 p-4 rounded-card bg-surface border border-border hover:border-border-hover transition-all duration-150 group relative cursor-pointer pl-10"
      >
        {checkboxEl}
        {bookmark.type === "VIDEO" && (
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-red rounded-l-card" />
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            {bookmark.favicon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={bookmark.favicon} alt="" className="w-4 h-4 rounded shrink-0" />
            )}
            <span className="font-mono text-xs text-muted">
              {bookmark.siteName || new URL(bookmark.url).hostname}
            </span>
            <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-faint text-muted">
              {TYPE_LABELS[bookmark.type as PrismaBookmarkType] ?? bookmark.type}
            </span>
            <span className="font-mono text-xs text-muted">{dateStr}</span>
          </div>
          <h3 className="font-mono text-sm font-medium text-text line-clamp-2 mb-1">
            {bookmark.title}
          </h3>
          {bookmark.aiSummary && (
            <p className="font-mono text-xs font-light text-muted line-clamp-2">
              {bookmark.aiSummary}
            </p>
          )}
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            {bookmark.tags.slice(0, 3).map((t) => (
              <span
                key={t.name}
                className="font-mono text-[10px] px-2 py-0.5 rounded-pill bg-surface-2 text-muted border border-border"
              >
                {t.name}
              </span>
            ))}
            {bookmark.readTime && (
              <span className="font-mono text-xs text-muted">{bookmark.readTime} min read</span>
            )}
            <a
              href={bookmark.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="font-mono text-xs text-accent hover:underline"
            >
              Open ↗
            </a>
          </div>
        </div>
        {bookmark.ogImage && showOgImage && (
          <div className="w-20 h-15 shrink-0 rounded-btn overflow-hidden border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={bookmark.ogImage}
              alt=""
              className="object-cover w-full h-full"
              onError={() => setShowOgImage(false)}
            />
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.a
      href={bookmark.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.15 }}
      whileHover={{ scale: 1.005 }}
      className={`flex gap-4 p-4 rounded-card bg-surface border border-border hover:border-border-hover transition-all duration-150 group relative ${onToggleSelect ? "pl-10" : ""}`}
    >
        {checkboxEl}
      {bookmark.type === "VIDEO" && (
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-red rounded-l-card" />
      )}
        <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          {bookmark.favicon && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={bookmark.favicon}
              alt=""
              className="w-4 h-4 rounded shrink-0"
            />
          )}
          <span className="font-mono text-xs text-muted">
            {bookmark.siteName || new URL(bookmark.url).hostname}
          </span>
          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-faint text-muted">
            {TYPE_LABELS[bookmark.type as PrismaBookmarkType] ?? bookmark.type}
          </span>
          <span className="font-mono text-xs text-muted">{dateStr}</span>
        </div>
          <h3 className="font-display text-[18px] leading-snug text-text line-clamp-2 mb-1">
          {bookmark.title}
        </h3>
        {bookmark.aiSummary && (
          <p className="font-mono text-xs font-light text-muted line-clamp-2">
            {bookmark.aiSummary}
          </p>
        )}
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          {bookmark.tags.slice(0, 3).map((t) => (
            <span
              key={t.name}
              className="font-mono text-[10px] px-2 py-0.5 rounded-pill bg-surface-2 text-muted border border-border"
            >
              {t.name}
            </span>
          ))}
          {bookmark.readTime && (
            <span className="font-mono text-xs text-muted">
              {bookmark.readTime} min read
            </span>
          )}
        </div>
      </div>
      {bookmark.ogImage && showOgImage && (
        <div className="w-20 h-15 shrink-0 rounded-btn overflow-hidden border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bookmark.ogImage}
            alt=""
            className="object-cover w-full h-full"
            onError={() => setShowOgImage(false)}
          />
        </div>
      )}
    </motion.a>
  );
}
