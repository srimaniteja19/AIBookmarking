import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { VaultShell } from "@/components/vault/vault-shell";

export default async function VaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    redirect("/auth");
  }
  return <VaultShell userId={session.user.id}>{children}</VaultShell>;
}
