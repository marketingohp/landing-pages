"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/AlreemIsland/LanguageContext";

export default function LanguageSelector({
  isScrolled,
}: {
  isScrolled: boolean;
}) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "ar", name: "العربية", flag: "🇦🇪" },
  ];

  const currentLang =
    languages.find((lang) => lang.code === language) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`text-sm font-sans uppercase tracking-wider hover:underline transition-all flex items-center gap-2 ${
          isScrolled
            ? "text-[#5f602c] dark:text-gray-100"
            : "text-[#5f602c] dark:text-gray-100"
        }`}
        //style={{ display: "none" }}
      >
        {/* <span>{currentLang.flag}</span> */}
        <span>{currentLang.name}</span>
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 rtl:left-0 rtl:right-auto mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-20 border border-gray-200 dark:border-gray-700">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as "en" | "ar");
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  language === lang.code
                    ? "bg-gray-50 dark:bg-gray-700 font-semibold"
                    : ""
                }`}
              >
                {/* <span className="text-xl">{lang.flag}</span> */}
                <span className="text-gray-900 dark:text-gray-100 text-sm">
                  {lang.name}
                </span>
                {language === lang.code && (
                  <svg
                    className="w-4 h-4 ml-auto text-[#5f602c] dark:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
