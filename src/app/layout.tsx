'use client'
import { Inter } from "next/font/google";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/domains/common/query/query-client";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Cirkel Blog | Homepage",
//   description: "Blog page for cirkel.id",
//   applicationName: "Cirkel Blog",
//   authors: {
//     url: "https://www.cirkel.id/",
//     name: "Cirkel.id",
//   },
//   keywords:
//     "music, music community, session player, learn music, music tutorial",
//   referrer: "origin",
//   publisher: "https://www.cirkel.id/",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
