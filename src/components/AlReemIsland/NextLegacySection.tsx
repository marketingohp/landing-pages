"use client";

import Image from "next/image";

export default function NextLegacySection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden next-legacy-section"
    // style={{
    //   paddingTop: "200px",
    //   paddingBottom: "200px",
    // }}
    >
      {/* Background Image - Cityscape */}
      <div className="absolute inset-0 z-0 next-legacy-banner-container">
        <Image
          src="/images/al-reem-island/banner-2.webp"
          alt="Al Reem Island Cityscape"
          fill
          className="object-cover next-legacy-image"
          priority
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50 next-legacy-overlay" />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto">
        {/* Main Title */}
        <h1 className="text-5xl playfair-display-regular md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-8 uppercase tracking-tight">
        Is Al Reem Island Your <br/> Next Legacy?
        </h1>

        {/* Descriptive Text 1 */}
        <p className="text-lg montserrat-regular md:text-xl lg:text-2xl text-white mb-4 md:mb-6 leading-relaxed font-light">
        Connect with us to discover an elite portfolio of waterfront masterpieces tailored to your ambition.
        </p>

        

        {/* Call to Action Button */}
        <button className="px-8 py-4 md:px-12 md:py-5 text-base md:text-lg font-semibold montserrat-regular text-white uppercase tracking-wider border-2 border-white bg-transparent hover:bg-white hover:text-[#0f1f2e] transition-all duration-300 ease-in-out">
          SECURE YOUR PRIORITY ACCESS
        </button>
        {/* <button
          className="px-8 py-4 md:px-12 md:py-5 text-base md:text-lg font-semibold text-white uppercase tracking-wider border-2 border-white bg-transparent hover:bg-white hover:text-[#0f1f2e] transition-all duration-300 ease-in-out"
          onClick={() => {
            // Scroll to contact form or handle consultation
            const contactSection = document.getElementById("contact-us");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          SECURE YOUR PRIORITY ACCESS
        </button> */}
      </div>
    </section>
  );
}

