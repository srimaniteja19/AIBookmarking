"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

type ByType = { type: string; count: number };
type MostVisited = { id: string; title: string; url: string; visitCount: number };

const HEATMAP_COLORS = ["var(--faint)", "rgba(232,255,71,0.2)", "rgba(232,255,71,0.5)", "var(--accent)"];

type StatsContentProps = {
  bookmarkCount: number;
  collectionCount: number;
  tagCount: number;
  byType: ByType[];
  mostVisited: MostVisited[];
  unreadCount: number;
  heatmapData?: Record<string, number>;
};

export function StatsContent(props: StatsContentProps) {
  const { bookmarkCount, collectionCount, tagCount, byType, mostVisited, unreadCount, heatmapData } = props;
  const heat = heatmapData ?? {};
  const pieData = byType.map((t) => ({ name: t.type, value: t.count }));
  const maxHeat = Math.max(1, ...Object.values(heat));
  const days: string[] = [];
  for (let i = 52 * 7 - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().slice(0, 10));
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="font-display text-2xl italic text-text mb-6">Stats</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="p-4 rounded-card bg-surface border border-border">
          <p className="font-mono text-2xl font-medium text-text">{bookmarkCount}</p>
          <p className="font-mono text-xs text-muted">Bookmarks</p>
        </div>
        <div className="p-4 rounded-card bg-surface border border-border">
          <p className="font-mono text-2xl font-medium text-text">{collectionCount}</p>
          <p className="font-mono text-xs text-muted">Collections</p>
        </div>
        <div className="p-4 rounded-card bg-surface border border-border">
          <p className="font-mono text-2xl font-medium text-text">{tagCount}</p>
          <p className="font-mono text-xs text-muted">Tags</p>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="font-display text-lg italic text-text mb-3">By type</h2>
        {pieData.length > 0 ? (
          <div className="h-48 w-full max-w-xs">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={(item: { name: string; value: number }) => `${item.name} ${item.value}`}
                >
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={["var(--blue)", "var(--accent)", "var(--red)", "var(--green)", "var(--muted)"][i % 5]} stroke="var(--border)" />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        ) : null}
        <div className="flex flex-wrap gap-2 mt-2">
          {byType.map(({ type, count }) => (
            <div
              key={type}
              className="font-mono text-sm px-3 py-2 rounded-btn bg-surface border border-border"
            >
              <span className="text-text">{type}</span>
              <span className="text-muted ml-2">{count}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-display text-lg italic text-text mb-3">Activity (last 52 weeks)</h2>
        <div className="flex gap-0.5 flex-wrap" style={{ width: 52 * 12 }}>
          {days.map((d) => {
            const c = heat[d] ?? 0;
            const level = maxHeat > 0 ? Math.min(3, Math.ceil((c / maxHeat) * 4)) : 0;
            return (
              <div
                key={d}
                className="w-2 h-2 rounded-sm border border-border"
                style={{ backgroundColor: HEATMAP_COLORS[level] }}
                title={`${d}: ${c}`}
              />
            );
          })}
        </div>
      </section>

      {mostVisited.length > 0 && (
        <section className="mb-8">
          <h2 className="font-display text-lg italic text-text mb-3">
            Most visited
          </h2>
          <ul className="space-y-2">
            {mostVisited.map((b) => (
              <li key={b.id}>
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-text hover:text-accent block"
                >
                  {b.title}
                </a>
                <span className="font-mono text-xs text-muted">
                  {b.visitCount} visits
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {unreadCount > 0 && (
        <p className="font-mono text-sm text-muted italic">
          {unreadCount} unread article{unreadCount !== 1 ? "s" : ""} in your
          reading list.
        </p>
      )}
    </div>
  );
}
