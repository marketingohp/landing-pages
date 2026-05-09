"use client";

import { useLanguage } from "@/contexts/bloomLivingGranada/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Change background after 50px scroll
    };

    // Set initial state
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    {
      key: "royal.nav.home",
      href: "#home",
    },
    {
      key: "royal.nav.location",
      href: "#location",
    },
    {
      key: "royal.nav.amenities",
      href: "#amenities",
    },
    {
      key: "royal.nav.gallery",
      href: "#gallery",
    },
    {
      key: "royal.nav.contact",
      href: "#contact-us",
    },
    {
      key: "royal.nav.enquire",
      href: "#enquire-now",
    },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-[#AA8B6A]/95 backdrop-blur-md shadow-lg"
          : "bg-[#ebe8dd] dark:bg-[#AA8B6A]/80 dark:backdrop-blur-md"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div
              className={`text-3xl lg:text-4xl transition-colors duration-300 ${
                isScrolled
                  ? "text-[#AA8B6A] dark:text-gray-100"
                  : "text-[#AA8B6A] dark:text-gray-100"
              }`}
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <img
                src="/images/bloom-living-granada/granada_logo_black.png"
                width={200}
                height={200}
                style={{ width: "80px" }}
                alt="Bloom Living Granada"
              />
            </div>
            <div
              className={`text-xs lg:text-sm font-sans uppercase tracking-wider transition-colors duration-300 ${
                isScrolled
                  ? "text-[#AA8B6A]/80 dark:text-gray-300"
                  : "text-[#AA8B6A]/80 dark:text-gray-300"
              }`}
            >
              {/* {t("royal.tagline")} */}
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-sans uppercase tracking-wider hover:underline transition-all cursor-pointer ${
                  isScrolled
                    ? "text-[#AA8B6A] dark:text-gray-100"
                    : "text-[#AA8B6A] dark:text-gray-100"
                }`}
              >
                {t(item.key)}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-[#AA8B6A] dark:text-gray-100 hover:bg-[#00314a]/10 dark:hover:bg-gray-800/50"
                  : "text-[#AA8B6A] dark:text-gray-100 hover:bg-white/10 dark:hover:bg-gray-800/50"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>

            {/* Language Selector */}
            <LanguageSelector isScrolled={isScrolled} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden transition-colors duration-300 ${
              isScrolled
                ? "text-[#AA8B6A] dark:text-gray-100"
                : "text-[#AA8B6A] dark:text-gray-100"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`lg:hidden py-4 space-y-4 backdrop-blur-sm rounded-lg mt-2 transition-colors duration-300 ${
              isScrolled
                ? "bg-white/95 dark:bg-[#AC7B58]/95"
                : "bg-black/50 dark:bg-[#AC7B58]/90"
            }`}
          >
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block text-sm font-sans uppercase tracking-wider hover:underline transition-all px-4 cursor-pointer ${
                  isScrolled
                    ? "text-[#AA8B6A] dark:text-gray-100"
                    : "text-[#AA8B6A] dark:text-gray-100"
                }`}
              >
                {t(item.key)}
              </a>
            ))}
            <div className="px-4 flex items-center gap-4">
              {/* Theme Toggle for Mobile */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-[#AA8B6A] dark:text-gray-100 hover:bg-[#00314a]/10 dark:hover:bg-gray-800/50"
                    : "text-[#AA8B6A] dark:text-gray-100 hover:bg-white/10 dark:hover:bg-gray-800/50"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )}
              </button>
              {/* <LanguageSelector isScrolled={isScrolled} /> */}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
