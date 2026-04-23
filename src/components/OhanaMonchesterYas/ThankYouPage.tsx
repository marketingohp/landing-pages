"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "./Header";
import { useLanguage } from "@/contexts/ohanaMonschasterYas/LanguageContext";
import { pushToDataLayer } from "@/utils/gtag";

export default function ThankYouPage() {
  const { t } = useLanguage();
  const router = useRouter();


  return (
    <div className="min-h-screen bg-[#5f602c] dark:bg-[#0f1f2e] flex flex-col">
      <Header />

      {/* Main Content - Cente #001340 */}
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Thank You Message */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {t("royal.thankYou.title")}
          </h1>

          {/* Confirmation Message */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t("royal.thankYou.message")}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push("/manchester-city-yas-residences-by-ohana")}
              className="bg-white text-[#5f602c] px-8 py-3 rounded uppercase tracking-wider font-sans font-semibold hover:bg-white/90 transition-colors"
            >
              {t("royal.thankYou.backHome")}
            </button>
            {/* <button
              onClick={() => router.push("/yas-riva-residences#contact-us")}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded uppercase tracking-wider font-sans font-semibold hover:bg-white hover:text-[#5f602c] transition-colors"
            >
              {t("royal.thankYou.contactUs")}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
