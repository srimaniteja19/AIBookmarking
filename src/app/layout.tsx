import type { Metadata } from "next";
import { Caveat, DM_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const caveat = Caveat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vault — Your second brain",
  description: "A premium bookmark manager. Minimal. Smart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${caveat.variable} ${dmMono.variable}`}>
      <body className="font-mono antialiased min-h-screen bg-bg text-text">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
