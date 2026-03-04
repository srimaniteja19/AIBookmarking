"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { useVaultView } from "@/contexts/vault-view-context";
import { useVaultFilter } from "@/contexts/vault-filter-context";

export function Navbar({ onOpenFilter }: { onOpenFilter?: () => void }) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { data: session } = useSession();
  const { viewMode, setViewMode, density, setDensity, sort, setSort } = useVaultView();
  const { hasActiveFilters } = useVaultFilter();

  return (
    <header className="sticky top-0 z-50 h-[52px] flex items-center justify-between px-4 bg-bg border-b border-border">
      <Link href="/vault" className="font-display text-xl italic text-text">
        Vault
      </Link>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-1 font-mono text-xs font-light">
          {(["day", "week", "month", "timeline"] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setViewMode(v)}
              className={`px-2.5 py-1.5 rounded-btn capitalize transition-colors duration-150 ${
                viewMode === v
                  ? "text-text bg-surface-2 border border-border"
                  : "text-muted hover:text-text"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 font-mono text-xs text-muted">
          <button
            type="button"
            onClick={() => setDensity("comfortable")}
            title="Comfortable"
            className={`p-1.5 rounded-btn ${density === "comfortable" ? "bg-surface-2 text-text" : "hover:text-text"}`}
          >
            ▤
          </button>
          <button
            type="button"
            onClick={() => setDensity("compact")}
            title="Compact"
            className={`p-1.5 rounded-btn ${density === "compact" ? "bg-surface-2 text-text" : "hover:text-text"}`}
          >
            ▥
          </button>
          <button
            type="button"
            onClick={() => setDensity("magazine")}
            title="Magazine"
            className={`p-1.5 rounded-btn ${density === "magazine" ? "bg-surface-2 text-text" : "hover:text-text"}`}
          >
            ▦
          </button>
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as "newest" | "oldest" | "visited")}
          className="font-mono text-xs bg-surface border border-border rounded-btn px-2 py-1.5 text-text"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="visited">Most visited</option>
        </select>
        {onOpenFilter && (
          <button
            type="button"
            onClick={onOpenFilter}
            title="Filters"
            className={`p-1.5 rounded-btn font-mono text-xs ${hasActiveFilters ? "text-accent" : "text-muted hover:text-text"}`}
          >
            ⏷
          </button>
        )}
      </div>

      <nav className="flex items-center gap-3">
        <span className="font-mono text-xs font-light text-muted hidden sm:inline">⌘K</span>
        <div className="relative">
          <button
            type="button"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="w-8 h-8 rounded-full bg-surface-2 border border-border flex items-center justify-center overflow-hidden"
          >
            {session?.user?.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={session.user.image}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="font-mono text-xs text-muted">
                {session?.user?.name?.[0] ?? "?"}
              </span>
            )}
          </button>
          {userMenuOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setUserMenuOpen(false)}
                aria-hidden
              />
              <div className="absolute right-0 top-full mt-1 py-1 w-40 bg-surface border border-border rounded-btn z-50">
                <Link
                  href="/settings"
                  className="block px-3 py-2 font-mono text-sm text-text hover:bg-surface-2"
                  onClick={() => setUserMenuOpen(false)}
                >
                  Settings
                </Link>
                <button
                  type="button"
                  onClick={() => signOut({ callbackUrl: "/auth" })}
                  className="block w-full text-left px-3 py-2 font-mono text-sm text-text hover:bg-surface-2"
                >
                  Sign out
                </button>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
