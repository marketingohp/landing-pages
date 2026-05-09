"use client";

import { useLanguage } from "@/contexts/LanguageContext";

import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function HeroKeywords() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const keywords = [
    {
      wordKey: "hero.energy",
      taglineKey: "hero.tagline",
      url: "/images/home-view/banner.webp",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % keywords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-keywords-banner relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {keywords?.map((items, index) => (
          <SwiperSlide key={index}>
            <img
              src={items.url}
              width={1000}
              height={1000}
              alt="one residences"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 flex items-center justify-center z-20">
        {/* <img
         src="/images/home-view/logo.webp"
         width={100}
         height={60}
         className="main-logo-banner"
         alt="home view"
       /> */}
        <div className="flex flex-col items-center justify-center sm:text-center p-4">
          <h1 className="text-4xl font-bold text-[#1a3a5c] sm:text-center">
            Discover New Properties in Abu Dhabi
          </h1>
          <br />
          <p className="text-lg text-gray-500 sm:px-8">
            Apartments, villas & townhouses in prime locations
          </p>
        </div>
      </div>
    </section>
  );
}
