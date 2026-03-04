import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const batch = await prisma.bookmark.findMany({
    where: {
      userId: session.user.id,
      OR: [
        { linkCheckedAt: null },
        { linkCheckedAt: { lt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } },
      ],
    },
    take: 50,
    select: { id: true, url: true },
  });

  const results: { id: string; status: "LIVE" | "CHANGED" | "DEAD" }[] = [];

  for (const b of batch) {
    try {
      const res = await fetch(b.url, {
        method: "HEAD",
        redirect: "follow",
        headers: { "User-Agent": "Mozilla/5.0 (compatible; VaultBot/1.0)" },
      });
      const status = res.ok ? "LIVE" : res.status === 404 || res.status >= 500 ? "DEAD" : "CHANGED";
      await prisma.bookmark.update({
        where: { id: b.id },
        data: { linkStatus: status, linkCheckedAt: new Date() },
      });
      results.push({ id: b.id, status });
    } catch {
      await prisma.bookmark.update({
        where: { id: b.id },
        data: { linkStatus: "DEAD", linkCheckedAt: new Date() },
      });
      results.push({ id: b.id, status: "DEAD" });
    }
  }

  return NextResponse.json({ checked: results.length, results });
}
