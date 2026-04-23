"use client";

import { useLanguage } from "@/contexts/AlreemIsland/LanguageContext";
import Image from "next/image";

export default function ValueAddedSection() {
  const { t } = useLanguage();

  const timelineItems = [
    {
      number: "01",
      title: "Waterfront Views",
      image: "/images/al-reem-island/img1.webp",
      description:
        "Wake up every day to breathtaking views of the sea and city skyline.Experience the calm and beauty of living right by the water.",
    },
    {
      number: "02",
      title: "Vibrant Community",
      image: "/images/al-reem-island/img2.webp",
      description:
        "Live among a lively and diverse neighborhood full of energy and culture. Connect with like-minded residents and enjoy a true sense of community.",
    },
    {
      number: "03",
      title: "Prime Location",
      image: "/images/al-reem-island/img3.webp",
      description:
        "Reach Abu Dhabi’s top destinations, schools, and shopping within minutes. Stay connected while enjoying the tranquility of island living.",
    },
    {
      number: "04",
      title: "Golden Visa",
      image: "/images/al-reem-island/img4.webp",
      description:
        "The UAE Golden Visa offers long-term residency for investors, professionals, and top talent. Enjoy stability, world-class living, and the freedom to live, work, and invest in Abu Dhabi for years to come.",
    }
  ];

  return (
    <>
      <div className="container mx-auto max-w-12xl">
        {/* Main Heading */}
        <h2 className="text-3xl playfair-display-regular md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-6 lg:mb-8 leading-tight"
          style={{ color: "#2296c4" }}

        >
          <span className="text-8xl">4</span> Reasons<br />Why Living on Al Reem Island is Perfect for Life?
        </h2>
      </div>
      <section className="relative min-h-screen dark:bg-[#0a0a0a] overflow-hidden container-fluid mx-auto px-4s  lg:px-8"
        id="value-added-section"
        style={{
          borderRadius: 20,
          paddingBottom: 0, marginTop: 60, marginBottom: 150, position: "relative", border: "2px solid #2296c4", marginLeft: 20, marginRight: 20
        }}
      >

        {/* Diagonal Background Band - Top Left with Sharp Diagonal Cut */}
        {/* <div
          className="absolute top-0 left-0 z-0"
          style={{

            width: "45%",
            height: "55%",
            background: "#2296c4",
            // clipPath: "polygon(0 0, 100% 0, 20% 100%, 0 100%)",
            clipPath: "polygon(0% 0%, 75% 0%, 0% 100%, 0% 85%)",
            //clipPath: "polygon(70% 0, 0 1%, 0 100%)",
          }}
        >

         
          <div className="absolute inset-0 opacity-80">
            <div className="relative w-full h-full">
              <Image
                src="/images/al-reem-island/sidetop.webp"
                alt="Background"
                fill
                className="object-cover blur-md-none"
                priority

              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#2296c4]/25 to-transparent" />
            </div>
          </div>
        </div> */}

        {/* Main Content Container */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-16 lg:py-24">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Section - Timeline */}
            <div className="lg:col-span-3 relative z-20 flex flex-col justify-end">
              {/* <h3 className="text-3xl playfair-display-regular lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                In a market that beats as fast as Abu Dhabi.
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm montserrat-regular lg:text-base leading-relaxed">
                for incress abu dhabi its a landmark for a new beginning tomorrow, gain others the
                new
              </p> */}
              <div className="relative" style={{ marginBottom: -200 }}
              >
                <div className="hidden lg:block absolute left-0 bottom-54">
                  <Dots />
                </div>
                <div className="hidden lg:block absolute left-0 bottom-24">
                  <Dots />
                </div>
              </div>

            </div>


            {/* Center Section - Numbered Timeline Items */}
            <div className="lg:col-span-6 relative py-4">
              {/* Vertical Connecting Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#2296c4]/30 transform -translate-x-1/2" />

              {/* Timeline Items */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 lg:block lg:space-y-14">
                {timelineItems.map((item, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={item.number}
                      className="relative"
                      style={{ minHeight: "80px" }}
                    >
                      {/* Connection point on center line */}
                      <div
                        className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                        style={{
                          top: "40px",
                          width: "12px",
                          height: "12px",
                          backgroundColor: "#2296c4",
                          borderRadius: "50%",
                          border: "4px solid white",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                        }}
                      />

                      <div
                        className={`relative flex flex-col md:flex-col items-start gap-4 md:gap-6 ${isEven ? "lg:flex-row-reverse lg:gap-6" : "lg:flex-row lg:gap-6"
                          }`}
                      >
                        {/* Number Badge - Box Style */}
                        <div className="relative z-10 flex-shrink-0 group w-full lg:w-auto timeline-image-container">
                          <div
                            className="relative overflow-hidden timeline-image-box"
                            style={{
                              width: "100%",
                              height: "180px",
                              minWidth: "100%",
                              minHeight: "180px",
                              borderRadius: "0px 50px 0px 50px",
                              border: "2px solid rgba(255, 255, 255, 0.2)",
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                            }}
                          >
                            {/* Background Image */}
                            <div
                              className="absolute inset-0"
                              style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                              }}
                            />

                            {/* Number - Top Left */}
                            <div
                              className="absolute top-0 left-0 text-white font-bold z-20 px-2 md:px-4 pt-0"
                              style={{
                                fontSize: "40px",
                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                              }}
                            >
                              <span className="lg:text-6xl md:text-5xl text-4xl">{item.number}</span>
                            </div>

                            {/* Hover Overlay - Fades and slides from bottom to top */}
                            <div
                              className="absolute inset-0 bg-[#2296c4]/80 transform translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 z-10"
                              style={{
                                backdropFilter: "blur(2px)",
                              }}
                            >
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white text-left px-4 pt-8 hover-text-s1">
                                  <div className="text-2xl font-bold mb-0 playfair-display-regular">{item.title}</div>
                                  {/* <div className="text-sm opacity-90 montserrat-regular">{item.description}</div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div
                          className={`flex-1 w-full ${isEven ? "md:text-left lg:text-right lg:pr-8" : "md:text-left lg:text-left lg:pl-8"
                            }`}
                        >
                          <h4 className="text-lg md:text-xl lg:text-2xl font-bold playfair-display-regular text-gray-900 dark:text-white mb-2 md:mb-3">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm montserrat-regular lg:text-base leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>


          </div>
        </div>

        {/* Right Section - Blue Bar with Background Image - Edge to Edge */}
        <div
          className="hidden lg:block absolute top-0 right-0 z-20 h-full next-legacy-mobile-section"
          style={{
            width: "calc(25% + 0rem + 0px)", // Extend beyond section padding (lg:px-8 = 2rem) and border (2px)
            backgroundColor: "#2296c4",
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/al-reem-island/long.webp"
                alt="Background"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#2296c4]/56" />

            {/* Content - Centered */}
            <div className="relative z-10 px-6 py-8 text-center">
              <h3 className="text-2xl playfair-display-regular lg:text-3xl xl:text-3xl font-bold text-white mb-4 leading-tight">
                In a market that beats as fast as Abu Dhabi,<br /> the opportunity you miss today becomes tomorrow’s gain for others. Be the one to take the first step.
              </h3>
              {/* <p className="text-white/90 text-sm lg:text-base leading-relaxed">
              for incress abu dhabi its a landmark for a new beginning tomorrow, gain others the new
              </p> */}

            </div>
          </div>
        </div>

      </section>
    </>
  );
}

/* Dotted Pattern */
function Dots() {
  return (
    <div className="grid grid-cols-6 gap-3">
      {Array.from({ length: 36 }).map((_, i) => (
        <span
          key={i}
          className="w-2 h-2 border border-[#4cc3ff] rounded-full opacity-70"
        />
      ))}

    </div>
  );
}