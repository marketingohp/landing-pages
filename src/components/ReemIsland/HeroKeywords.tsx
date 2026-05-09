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
      url: "/images/reem-island/Al-Reem-Island-01.webp",
    },

    {
      wordKey: "hero.energy",
      taglineKey: "hero.tagline",
      url: "/images/reem-island/Al-Reem-Island-02.webp",
    },
    {
      wordKey: "hero.energy",
      taglineKey: "hero.tagline",
      url: "/images/reem-island/banner-2.webp",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % keywords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-keywords-banner relative mt-20 h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
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
    </section>
  );
}
