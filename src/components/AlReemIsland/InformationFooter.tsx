"use client";

import Image from "next/image";
import PropertySearchForm from "../common/PropertySearchForm";
import PropertySearchFormTwo from "../common/PropertySearchFormTwo";

export default function InformationFooter() {
  return (
    <footer className="relative bg-white dark:bg-[#0a0a0a]">
      <div className="grid lg:grid-cols-3 gap-0">
        {/* Left Section - Form with Light Blue Background (1/3 width) */}
        <div className="lg:col-span-1 relative bg-[#e8f4f8] dark:bg-[#1a2a3a] py-12 lg:py-16 px-6 lg:px-8">
          {/* Dotted Pattern on Left Edge */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-4"
            style={{
              backgroundImage: `radial-gradient(circle, #2296c4 2px, transparent 2px)`,
              backgroundSize: "8px 12px",
              backgroundPosition: "center 0",
              backgroundRepeat: "repeat-y",
            }}
          />

          {/* Form Heading */}
          <h2 className="text-2xl playfair-display-regular lg:text-3xl font-bold mb-6 lg:mb-8" style={{ color: "#0f1f2e" }}>
            Register your interest!
          </h2>

          {/* Property Search Form - Unchanged */}
          <PropertySearchFormTwo
            formName="al-reem-island"
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
            thankYouPath="/al-reem-island/thank-you"
            colorCodeOne="#ebe8dd"
            colorCodeTwo="#0f1f2e"
            colorCodeThree="#2296c4"
            colorCodeBtnBg="#2296c4"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#ebe8dd"
            colorCodeBtnHoverBg="#ebe8dd"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#2296c4"
          />
        </div>

        {/* Right Section - Image Banner (2/3 width) */}
        <div className="lg:col-span-2 relative h-[600px] lg:h-auto min-h-[600px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/al-reem-island/paner.webp"
              alt="Reem Island Cityscape"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Overlay Content - Positioned in upper right */}
          <div className="absolute inset-0 flex flex-col items-start pl-8 lg:pl-16 pt-12 lg:pt-16">
            {/* Large "S" Shape - Upper Right */}
            <div 
              className="text-white font-bold mb-6"
              style={{
                fontSize: "clamp(100px, 18vw, 250px)",
                lineHeight: "0.8",
                fontFamily: "serif",
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
                opacity: 0.95,
              }}
            >
          <img
                  src="/images/reem-island/reem_IslandLogo_white.png"
                  width={100}
                  height={60}
                  style={{ width: "600px", stroke: "white" , marginTop:100}}
                  alt="one residences"
                />
            </div>

            {/* Arabic Text - Below S */}
            {/* <div 
              className="text-white mb-3"
              style={{
                fontSize: "clamp(28px, 5vw, 56px)",
                fontWeight: "600",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                direction: "rtl",
                textAlign: "right",
              }}
            >
              جزيرة الريم
            </div>

            <div 
              className="text-white uppercase tracking-wider"
              style={{
                fontSize: "clamp(22px, 4vw, 42px)",
                fontWeight: "700",
                letterSpacing: "0.15em",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              REEM ISLAND
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

