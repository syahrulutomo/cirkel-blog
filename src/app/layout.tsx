import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cirkel Blog | Homepage",
  description: "Blog page for cirkel.id",
  applicationName: "Cirkel Blog",
  authors: {
    url: "https://www.cirkel.id/",
    name: "Cirkel.id",
  },
  keywords:
    "music, music community, session player, learn music, music tutorial",
  referrer: "origin",
  publisher: "https://www.cirkel.id/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
