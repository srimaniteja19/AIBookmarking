import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ error: "No file" }, { status: 400 });
  }

  const text = await file.text();
  const urls: string[] = [];

  if (file.name.endsWith(".txt")) {
    urls.push(
      ...text
        .split(/\n/)
        .map((l) => l.trim())
        .filter((l) => /^https?:\/\//i.test(l))
    );
  } else if (file.name.endsWith(".html")) {
    const hrefRegex = /<a[^>]+href=["']([^"']+)["']/gi;
    let m: RegExpExecArray | null;
    while ((m = hrefRegex.exec(text)) !== null) {
      const u = m[1].trim();
      if (/^https?:\/\//i.test(u)) urls.push(u);
    }
  } else if (file.name.endsWith(".json")) {
    try {
      const data = JSON.parse(text);
      const items = Array.isArray(data) ? data : data.urls || data.bookmarks || [];
      for (const item of items) {
        const u = typeof item === "string" ? item : item.url || item.href;
        if (u && /^https?:\/\//i.test(u)) urls.push(u);
      }
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }
  }

  const seen = new Set<string>();
  const unique = urls.filter((u) => {
    try {
      const key = new URL(u).href;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    } catch {
      return false;
    }
  });

  return NextResponse.json({ urls: unique });
}
