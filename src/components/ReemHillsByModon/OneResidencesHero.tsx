"use client";

import Image from "next/image";
import PropertySearchForm from "../common/PropertySearchForm";
import { useLanguage } from "@/contexts/reemHillsByModon/LanguageContext";

export default function OneResidencesHero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://seamont.rdhuae.com/assets/images/home/bgs/slider-3.png?ver=54"
          alt="Seamont Hero"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1
          className="text-6xl md:text-8xl lg:text-9xl text-white mb-4"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {t("royal.hero.title")}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-sans uppercase tracking-[0.3rem]">
          {t("royal.hero.subtitle")}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white text-xs uppercase tracking-wider font-sans">
          {t("royal.hero.scroll")}
        </span>
        <svg
          className="w-6 h-6 text-white animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* Property Search Form Overlay */}
    </section>
  );
}
