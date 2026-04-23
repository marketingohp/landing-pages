"use client";

import { useLanguage } from "@/contexts/LanguageContext";

import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import PropertySearchForm from "../common/PropertySearchForm";

export default function HeroKeywords() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const keywords = [
    {
      wordKey: "hero.energy",
      taglineKey: "hero.tagline",
      url: "/images/one-residences/one_residences_6.webp",
    },
    {
      wordKey: "hero.energy",
      taglineKey: "hero.tagline",
      url: "/images/one-residences/one_residences_1.webp",
    },
    {
      wordKey: "hero.energy",
      taglineKey: "hero.tagline",
      url: "/images/one-residences/one_residences_2.webp",
    },
    {
      wordKey: "hero.energy",
      taglineKey: "hero.tagline",
      url: "/images/one-residences/one_residences_3.webp",
    },
    {
      wordKey: "hero.energy",
      taglineKey: "hero.tagline",
      url: "/images/one-residences/one_residences_4.webp",
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
       <img
         src="/images/one-residences/one-residences-logo.png"
         width={100}
         height={60}
         className="main-logo-banner"
         alt="one residences"
       />
     </div>
      
    </section>
  );
}
