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
import PropertySearchFormThree from "../common/PropertySearchFormThree";

export default function HeroKeywords() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const keywords = [
    {
      wordKey: "hero.energy",
      taglineKey: "hero.tagline",
      url: "/images/athlon/ATHLON2-32.webp",
    },
    {
      wordKey: "hero.energy",
      taglineKey: "hero.tagline",
      url: "/images/athlon/ATHLON2-33.webp",
    },
    {
      wordKey: "hero.energy",
      taglineKey: "hero.tagline",
      url: "/images/athlon/ATHLON2-66.webp",
    },
    {
      wordKey: "hero.energy",
      taglineKey: "hero.tagline",
      url: "/images/athlon/ATHLON2-11.webp",
    },
    {
      wordKey: "hero.energy",
      taglineKey: "hero.tagline",
      url: "/images/athlon/ATHLON2-34.webp",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % keywords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-keywords-banner mt-20 relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
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
              //height={200}
              alt="one residences"
              //style={{height: "auto !important"}}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-slide img {
          height: auto !important;
        }
      `}</style>
    </section>
  );
}
