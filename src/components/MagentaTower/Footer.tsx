"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/magentaTower/LanguageContext";
import PropertySearchFormThree from "../common/PropertySearchFormThree";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative py-20 lg:py-32 bg-[#642d5b] dark:bg-[#0f1f2e] text-white">
      {/* <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <Image
          src="https://seamont.rdhuae.com/assets/images/home/bgs/slider-3.png?ver=54"
          alt="Footer Background"
          fill
          className="object-cover"
          unoptimized
        />
      </div> */}

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Buttons */}
          <div className="space-y-4 ">
            <div className="footer-form-container">
              <PropertySearchFormThree
                formName="magenta-tower"
                pointName="get-in-touch"
                formType="footer-form"
                visibleFields={[
                  "firstName",
                  "lastName",
                  "email",
                  "phoneNumber",
                  "hearAboutUs",
                  "unitType",
                  "bedrooms",
                  "budget",
                  "message",
                ]}
                requiredFields={["firstName", "lastName", "phoneNumber","email"]}
                redirectToThankYou={true}
                thankYouPath="/magenta-tower/thank-you"
                colorCodeOne="#0000003b"
                colorCodeTwo="#0f1f2e"
                colorCodeThree="#642d5b"
                colorCodeBtnBg="#642d5b"
                colorCodeBtnText="#cccccc"
                colorCodeBtnBorder="#ebe8dd"
                colorCodeBtnHoverBg="#ebe8dd"
                colorCodeBtnHoverText="#ffffff"
                colorCodeBtnHoverBorder="#642d5b"
                classAdd="classAddFooter"
              />
            </div>

            {/* <div className="flex gap-6 mt-8 text-sm">
              <a href="#" className="hover:underline uppercase tracking-wider">
                {t("royal.footer.privacy")}
              </a>
              <a href="#" className="hover:underline uppercase tracking-wider">
                {t("royal.footer.terms")}
              </a>
              <a href="#" className="hover:underline uppercase tracking-wider">
                {t("royal.footer.sitemap")}
              </a>
            </div> */}
            {/* <div className="flex gap-6 mt-8 text-sm">
             
            </div> */}
          </div>

          {/* Right Column - Logo and Contact */}
          <div className="space-y-6 flex flex-col items-center justify-center text-center">
            <div>
              <div
                className="text-2xl mb-2 flex justify-center"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                <img
                  src="/images/magenta-tower/magenta_tower_logo_white.png"
                  width={100}
                  height={100}
                  style={{ width: "200px" }}
                  alt="one residences"
                />
              </div>
              <div className="text-sm uppercase tracking-wider opacity-80">
                {/* {t("royal.tagline")} */}
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <p>Abu Dhabi, UAE</p>
              {/* <p className="mt-4">Phone:  </p>  */}
              {/* <p>Email: info@abudhabi-properties.net</p> */}
              <p className="text-xs opacity-70 mt-8">
                Copyright © 2026 Abu Dhabi Properties. All rights reserved.
              </p>
            </div>

            {/* Social Media Icons */}
            {/* <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 dark:bg-gray-700/50 rounded-full flex items-center justify-center hover:bg-white/30 dark:hover:bg-gray-600/50 transition-colors"
              >
                <span className="text-lg">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 dark:bg-gray-700/50 rounded-full flex items-center justify-center hover:bg-white/30 dark:hover:bg-gray-600/50 transition-colors"
              >
                <span className="text-lg">📷</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 dark:bg-gray-700/50 rounded-full flex items-center justify-center hover:bg-white/30 dark:hover:bg-gray-600/50 transition-colors"
              >
                <span className="text-lg">▶</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 dark:bg-gray-700/50 rounded-full flex items-center justify-center hover:bg-white/30 dark:hover:bg-gray-600/50 transition-colors"
              >
                <span className="text-lg">in</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
