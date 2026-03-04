const DEFAULT_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

export type BookmarkType =
  | "LINK"
  | "VIDEO"
  | "ARTICLE"
  | "TWEET"
  | "GITHUB"
  | "IMAGE"
  | "DOCUMENT"
  | "OTHER";

export function detectTypeFromUrl(url: string): BookmarkType {
  const u = url.toLowerCase();
  if (
    u.includes("youtube.com") ||
    u.includes("youtu.be") ||
    u.includes("vimeo.com") ||
    u.includes("loom.com")
  )
    return "VIDEO";
  if (u.includes("github.com")) return "GITHUB";
  if (u.includes("twitter.com") || u.includes("x.com")) return "TWEET";
  if (u.endsWith(".pdf")) return "DOCUMENT";
  if (/\.(jpg|jpeg|png|gif|webp)(\?|$)/i.test(u)) return "IMAGE";
  return "LINK";
}

export interface FetchedMetadata {
  title: string;
  description: string | null;
  ogImage: string | null;
  siteName: string | null;
  favicon: string | null;
}

export async function fetchMetadata(url: string): Promise<FetchedMetadata> {
  const res = await fetch(url, {
    headers: { "User-Agent": DEFAULT_UA },
    next: { revalidate: 0 },
  }).catch(() => null);

  if (!res?.ok) {
    try {
      const parsed = new URL(url);
      return {
        title: parsed.hostname,
        description: null,
        ogImage: null,
        siteName: parsed.hostname.replace(/^www\./, ""),
        favicon: `${parsed.origin}/favicon.ico`,
      };
    } catch {
      return {
        title: url,
        description: null,
        ogImage: null,
        siteName: null,
        favicon: null,
      };
    }
  }

  const html = await res.text();
  const baseUrl = new URL(url).origin;

  let title =
    getMeta(html, "og:title") ||
    getMeta(html, "twitter:title") ||
    getTag(html, "title") ||
    new URL(url).hostname;
  const description =
    getMeta(html, "og:description") ||
    getMeta(html, "twitter:description") ||
    getMeta(html, "description") ||
    null;
  const ogImage =
    getMeta(html, "og:image") || getMeta(html, "twitter:image") || null;
  const siteName =
    getMeta(html, "og:site_name") || getMeta(html, "twitter:site") || null;

  let favicon = getFavicon(html, baseUrl);
  if (!favicon) favicon = `${baseUrl}/favicon.ico`;

  return {
    title: title.trim().slice(0, 500),
    description: description?.trim().slice(0, 1000) ?? null,
    ogImage: ogImage ? resolveUrl(ogImage, url) : null,
    siteName: siteName?.trim().slice(0, 200) ?? null,
    favicon: resolveUrl(favicon, url),
  };
}

function getMeta(html: string, name: string): string | null {
  const patterns = [
    new RegExp(`<meta[^>]+property=["']${name}["'][^>]+content=["']([^"']+)["']`, "i"),
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+property=["']${name}["']`, "i"),
    new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["']`, "i"),
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+name=["']${name}["']`, "i"),
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m) return m[1].trim();
  }
  return null;
}

function getTag(html: string, tag: string): string | null {
  const m = html.match(new RegExp(`<${tag}[^>]*>([^<]+)</${tag}>`, "i"));
  return m ? m[1].replace(/<[^>]+>/g, "").trim() : null;
}

function getFavicon(html: string, baseUrl: string): string | null {
  const m = html.match(
    /<link[^>]+rel=["'](?:shortcut )?icon["'][^>]+href=["']([^"']+)["']/i
  );
  if (m) return resolveUrl(m[1].trim(), baseUrl);
  const m2 = html.match(
    /<link[^>]+href=["']([^"']+)["'][^>]+rel=["'](?:shortcut )?icon["']/i
  );
  if (m2) return resolveUrl(m2[1].trim(), baseUrl);
  return null;
}

function resolveUrl(href: string, base: string): string {
  if (href.startsWith("http")) return href;
  try {
    return new URL(href, base).href;
  } catch {
    return href;
  }
}

export function estimateReadTime(wordCount: number): number {
  return Math.max(1, Math.ceil(wordCount / 200));
}
