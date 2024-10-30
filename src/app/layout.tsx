'use client'
import { Inter } from "next/font/google";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/domains/common/query/query-client";
import "./globals.css";
import { HelmetProvider } from "react-helmet-async";

const inter = Inter({ subsets: ["latin"] });
const helmetContext = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <HelmetProvider>
        <body className={inter.className}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </body>
      </HelmetProvider>
    </html>
  );
}
