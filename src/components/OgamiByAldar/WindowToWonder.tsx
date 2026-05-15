"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/ogamiByAldar/LanguageContext";

export default function WindowToWonder() {
  const { t } = useLanguage();
  return (
    <section className="relative h-[600px] lg:h-[800px]">
      <Image
        src="/images/one-residences/one_residences_6.webp"
        alt="Window to Wonder"
        fill
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h2
          className="text-2xl md:text-4xl lg:text-5xl text-white text-center capitalize"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {t("royal.window.title")}
        </h2>
      </div>
    </section>
  );
}
