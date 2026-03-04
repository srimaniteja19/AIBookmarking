import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/auth");

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <header className="h-[52px] flex items-center px-4 border-b border-border">
        <Link href="/vault" className="font-display text-xl italic text-text">
          Vault
        </Link>
      </header>
      <main className="flex-1 p-6 max-w-2xl mx-auto w-full">
        <h1 className="font-display text-2xl italic text-text mb-6">
          Settings
        </h1>
        <div className="font-mono text-sm text-muted">
          <p>Signed in as {session.user.email}</p>
          <p className="mt-4">More settings coming soon.</p>
        </div>
      </main>
    </div>
  );
}
