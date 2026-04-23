"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function InteriorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/radission-residences/Radisson_Residences_12.webp",
    "/images/radission-residences/Radisson_Residences_20.webp",
    "/images/radission-residences/Radisson_Residences_21.webp",
    "/images/radission-residences/Radisson_Residences_11.webp",
    "/images/radission-residences/Radisson_Residences_13.webp",
    "/images/radission-residences/Radisson_Residences_22.webp",
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative h-[600px] lg:h-[800px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images?.map((items, index) => (
          <SwiperSlide key={index}>
            <img src={items} width={1000} height={1000} alt="one residences" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 p-3 rounded-full transition-colors z-10"
        aria-label="Previous image"
      >
        <svg
          className="w-6 h-6 text-[#1a3a5c] dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 p-3 rounded-full transition-colors z-10"
        aria-label="Next image"
      >
        <svg
          className="w-6 h-6 text-[#1a3a5c] dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button> */}
    </section>
  );
}
