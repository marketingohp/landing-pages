"use client";

import { LanguageProvider } from "@/contexts/AlreemIsland/LanguageContext";

export default function AlReemIslandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
