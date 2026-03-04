import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const format = searchParams.get("format") || "json";
  const idsParam = searchParams.get("ids");

  const where: { userId: string; id?: { in: string[] } } = {
    userId: session.user.id,
  };
  if (idsParam) {
    const ids = idsParam.split(",").filter(Boolean);
    if (ids.length) where.id = { in: ids };
  }

  const bookmarks = await prisma.bookmark.findMany({
    where,
    include: {
      collection: { select: { name: true, emoji: true } },
      tags: { select: { name: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  if (format === "json") {
    const data = bookmarks.map((b) => ({
      ...b,
      createdAt: b.createdAt.toISOString(),
      updatedAt: b.updatedAt.toISOString(),
      lastVisited: b.lastVisited?.toISOString() ?? null,
      remindAt: b.remindAt?.toISOString() ?? null,
      collection: b.collection?.name ?? null,
      tags: b.tags.map((t) => t.name),
    }));
    return new NextResponse(JSON.stringify(data, null, 2), {
      headers: {
        "Content-Type": "application/json",
        "Content-Disposition": `attachment; filename="vault-export-${new Date().toISOString().slice(0, 10)}.json"`,
      },
    });
  }

  if (format === "csv") {
    const headers = ["title", "url", "type", "siteName", "aiSummary", "createdAt", "collection", "tags"];
    const rows = bookmarks.map((b) => [
      `"${(b.title || "").replace(/"/g, '""')}"`,
      b.url,
      b.type,
      (b.siteName || "").replace(/"/g, '""'),
      (b.aiSummary || "").replace(/"/g, '""'),
      b.createdAt.toISOString(),
      (b.collection?.name || "").replace(/"/g, '""'),
      (b.tags.map((t) => t.name).join("; ") || "").replace(/"/g, '""'),
    ]);
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="vault-export-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  }

  if (format === "html") {
    const lines = bookmarks.map(
      (b) => `  <DT><A HREF="${b.url}" ADD_DATE="${Math.floor(b.createdAt.getTime() / 1000)}">${(b.title || b.url).replace(/</g, "&lt;")}</A>`
    );
    const html = `<!DOCTYPE NETSCAPE-Bookmark-file-1>\n<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">\n<TITLE>Vault Export</TITLE>\n<H1>Bookmarks</H1>\n<DL><p>\n${lines.join("\n")}\n</DL><p>`;
    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html",
        "Content-Disposition": `attachment; filename="vault-export-${new Date().toISOString().slice(0, 10)}.html"`,
      },
    });
  }

  return NextResponse.json({ error: "Invalid format" }, { status: 400 });
}
