# Vault

A modern, full-stack bookmark manager. Dark, minimal, editorial. Built with Next.js 14, TypeScript, Tailwind, Prisma, PostgreSQL, NextAuth, and Gemini API.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Prisma** + **PostgreSQL**
- **NextAuth** (Google, GitHub)
- **Gemini API** (summaries, AI search)

## Setup

1. **Clone and install**

   ```bash
   npm install
   ```

2. **Environment**

   Copy `.env.example` to `.env` and set:

   - `DATABASE_URL` — PostgreSQL connection string
   - `NEXTAUTH_SECRET` — e.g. `openssl rand -base64 32`
   - `NEXTAUTH_URL` — e.g. `http://localhost:3000`
   - `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` (optional, for Google sign-in)
   - `GITHUB_ID` / `GITHUB_CLIENT_SECRET` (optional, for GitHub sign-in)
   - `GEMINI_API_KEY` (optional; without it, ingestion works but no AI summary/tags)

3. **Database**

   ```bash
   npx prisma migrate dev --name init
   ```

4. **Run**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000). Sign in, then paste a URL in the vault to add a bookmark.

## Features

- **Smart URL ingestion** — Fetches title, description, OG image, favicon; detects type (video, article, GitHub, tweet, etc.); optional Gemini summary and suggested tags.
- **Time-based views** — By Day, Week, Month (calendar), Timeline.
- **Density modes** — Comfortable cards, compact list, magazine grid.
- **Collections** — Create collections in the sidebar; move bookmarks into them.
- **⌘K command palette** — Fuzzy search over bookmarks.
- **Quick add** — Paste URL in the bar or drag a link; CMD+V on vault page to ingest from clipboard.
- **Public sharing** — Make a collection public to get a `/p/[slug]` link.
- **AI semantic search** — Use Gemini to find bookmarks by concept (e.g. “things about startups”).
- **Reading list** — Unread articles; archive and favorites.

## Routes

| Route | Description |
|-------|-------------|
| `/` | Redirects to `/vault` or `/auth` |
| `/auth` | Sign in (Google / GitHub) |
| `/vault` | Main vault (all bookmarks) |
| `/vault/favorites` | Favorited bookmarks |
| `/vault/reading-list` | Unread articles |
| `/vault/archive` | Archived bookmarks |
| `/vault/[collectionId]` | Single collection |
| `/vault/stats` | Stats (when implemented) |
| `/p/[slug]` | Public shared collection |
| `/settings` | User settings |

## Design

- **Fonts:** Instrument Serif (italic) + DM Mono (Google Fonts)
- **Colors:** Dark theme with `--bg`, `--surface`, `--accent` (acid yellow), etc. See `src/app/globals.css`.
- **No box-shadow** — borders only; 10px cards, 6px buttons, 24px pills; 0.15s ease transitions.

## License

MIT
