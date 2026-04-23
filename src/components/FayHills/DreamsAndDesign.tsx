"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/fayHills/LanguageContext";

export default function DreamsAndDesign() {
  const { t } = useLanguage();
  return (
    <section className="relative py-20 lg:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/one-residences/one_residences_5.webp"
          alt="Dreams and Design"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <h2
          className="text-2xl md:text-4xl lg:text-5xl text-white mb-8"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {t("royal.dreams.title")}
        </h2>
        <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
          {t("royal.dreams.desc")}
        </p>
      </div>
    </section>
  );
}
