"use client";

import { useLanguage } from "@/contexts/sobhaCity/LanguageContext";
import Image from "next/image";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import PropertySearchForm from "../common/PropertySearchForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CareAndGrace() {
  const { t } = useLanguage();
  const [open, setOpen] = React.useState(false);
  const [amenitiesModalOpen, setAmenitiesModalOpen] = useState(false);
  const [selectedAmenityIndex, setSelectedAmenityIndex] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleAmenityClick = (index: number) => {
    // setSelectedAmenityIndex(index);
    // setAmenitiesModalOpen(true);
  };

  const handleCloseAmenitiesModal = () => {
    setAmenitiesModalOpen(false);
  };

  const amenities = [
  {
    name: "Wellness Centre",
    icon: "/images/sobha-city/amenities/fitness.svg"
  },
  {
    name: "Swimming Pools",
    icon: "/images/sobha-city/amenities/swimming_pool.svg"
  },
  {
    name: "Golf Course",
    icon: "/images/sobha-city/amenities/golf_course.svg"
  },
  {
    name: "International Schools",
    icon: "/images/sobha-city/amenities/schools.svg"
  },
  {
    name: "Retail & Dining",
    icon: "/images/sobha-city/amenities/retail_outlets.svg"
  },
  {
    name: "Running Tracks",
    icon: "/images/sobha-city/amenities/running_track.svg"
  },
  {
    name: "24/7 Security",
    icon: "/images/sobha-city/amenities/24x7hr_security.svg"
  },
  {
    name: "Community Transport",
    icon: "/images/sobha-city/amenities/community_center.svg"
  },
  {
    name: "Landscaped Parks",
    icon: "/images/sobha-city/amenities/landscape_garden.svg"
  },
  {
    name: "Concierge Services",
    icon: "/images/sobha-city/amenities/concierage.svg"
  },
  {
    name: "Smart Home Tech",
    icon: "/images/sobha-city/amenities/kitchen.svg"
  },
  {
    name: "Premium Clubhouse",
    icon: "/images/sobha-city/amenities/football_court.svg"
  }
];

  return (
    <section className="py-20 lg:py-32 bg-[[#C9A96E]] dark:bg-[#[#9C7A45]] relative">
      <div className="absolute inset-0 opacity-20 dark:opacity-20 z-0">
        <Image
          src="/images/one-residences/one-residence_amenities-back.webp"
          alt="Footer Background"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12 ">
          <h2
            className="text-2xl md:text-4xl lg:text-4xl text-[#9C7A45] dark:text-white mb-8"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {t("royal.care.title")}
          </h2>
          <p className="text-base sm:text-lg text-[#9C7A45] dark:text-white max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2">
            {t("royal.care.desc")}
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {amenities?.map((amenity, index) => (
            <div
              key={index}
              className="text-center cursor-pointer"
              onClick={() => handleAmenityClick(index)}
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#C9A96E] dark:bg-[#9C7A45] flex items-center justify-center shadow-lg text-4xl hover:scale-110 transition-transform duration-300">
                <img
                  src={amenity.icon}
                  width={60}
                  height={60}
                  alt={amenity.name}
                />
              </div>
              <p className="text-[#9C7A45] dark:text-white text-sm font-sans uppercase tracking-wider leading-tight font-bold">
                {amenity.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center relative z-20">
          <button
            onClick={handleClickOpen}
            className="bg-[#C9A96E] dark:bg-[#9C7A45] text-white px-8 py-4 rounded uppercase tracking-wider font-sans font-semibold hover:bg-[#E5CC9D]/80 dark:hover:bg-[#E5CC9D]/80 transition-colors relative z-20"
          >
            {t("royal.care.viewAll")}
          </button>
        </div>
      </div>

      {/* Modern Lightbox Modal */}
      {amenitiesModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn"
          onClick={handleCloseAmenitiesModal}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            className="relative w-full max-w-6xl bg-transparent rounded-3xl shadow-2xl overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseAmenitiesModal}
              className="absolute top-4 right-4 z-50 w-12 h-12 flex items-center justify-center bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl group"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300 drop-shadow-lg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Swiper Container */}
            <div className="py-0 md:py-0 px-0 md:px-0">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination-custom",
                  bulletClass: "swiper-pagination-bullet-custom",
                  bulletActiveClass: "swiper-pagination-bullet-active-custom",
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                initialSlide={selectedAmenityIndex}
                className="amenities-lightbox-swiper"
                loop={true}
              >
                {amenities.map((amenity, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
                      {/* Full Background Image with Modern Effects */}
                      <div className="absolute inset-0">
                        {/* Base Image */}
                        <img
                          src={amenity.icon}
                          alt={amenity.name}
                          className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-100"
                        />

                        {/* Animated Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00314a]/80 via-[#00314a]/60 to-[#00314a]/80 dark:from-[#0a0a0a]/90 dark:via-[#1a1a1a]/80 dark:to-[#2a4a6c]/90"></div>

                        {/* Animated Light Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>

                        {/* Radial Gradient Overlay for Focus */}
                        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60"></div>

                        {/* Modern Glassmorphism Effect */}
                        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
                      </div>

                      {/* Content Overlay */}
                      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8 text-center">
                        {/* Title with Modern Typography */}
                        <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold mb-6 md:mb-8 leading-tight drop-shadow-2xl px-4 max-w-4xl">
                          <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                            {amenity.name}
                          </span>
                        </h3>

                        {/* Decorative Elements */}
                        <div className="flex items-center gap-4 mt-4">
                          <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-white/60"></div>
                          <div className="w-2 h-2 rounded-full bg-white/80 animate-pulse"></div>
                          <div className="w-16 md:w-24 h-0.5 bg-gradient-to-l from-transparent via-white/60 to-white/60"></div>
                        </div>
                      </div>

                      {/* Floating Particles Effect */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-float"></div>
                        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white/30 rounded-full animate-float-delay"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-white/20 rounded-full animate-float-delay-2"></div>
                        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/50 rounded-full animate-float"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 flex items-center justify-center bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl cursor-pointer group">
                <svg
                  className="w-7 h-7 text-white group-hover:text-white transition-colors drop-shadow-lg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 flex items-center justify-center bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl cursor-pointer group">
                <svg
                  className="w-7 h-7 text-white group-hover:text-white transition-colors drop-shadow-lg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              {/* Custom Pagination */}
              <div className="swiper-pagination-custom flex justify-center gap-2 absolute bottom-6 left-1/2 -translate-x-1/2 z-50"></div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles for Lightbox */}
      <style jsx global>{`
        .amenities-lightbox-swiper {
          padding-bottom: 0rem;
        }

        .amenities-lightbox-swiper .swiper-slide {
          height: auto;
        }

        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }

        .swiper-pagination-bullet-active-custom {
          background: rgba(255, 255, 255, 0.9);
          width: 32px;
          border-radius: 6px;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        .dark .swiper-pagination-bullet-custom {
          background: rgba(255, 255, 255, 0.3);
        }

        .dark .swiper-pagination-bullet-active-custom {
          background: rgba(255, 255, 255, 0.8);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
        }

        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-15px) translateX(-10px);
            opacity: 0.7;
          }
        }

        @keyframes float-delay-2 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-25px) translateX(15px);
            opacity: 0.6;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }

        .animate-float-delay-2 {
          animation: float-delay-2 7s ease-in-out infinite;
        }

        .bg-radial-gradient {
          background: radial-gradient(
            circle at center,
            transparent 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.6) 100%
          );
        }
      `}</style>

      {/* Form Modal */}
      <Dialog
        open={open}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth={false}
        fullWidth
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "80%",
              maxWidth: "80%",
              margin: 0,
              height: "auto",
              maxHeight: "80%",
              borderRadius: 10,
              marginTop: "100px",
            },
          },
        }}
      >
        <PropertySearchForm
          formName="sobha-city"
          pointName="get-in-touch"
          formType="amenities-form"
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
          requiredFields={["firstName", "lastName", "phoneNumber", "email"]}
          viewType="image"
          // downloadBrochure={true}
          // brochureUrl="/images/yas-riva-residences/Yas_Riva_Residences_Brochure.pdf"
          redirectToThankYou={true}
          thankYouPath="/sobha-city/thank-you"
          colorCodeOne="#00314a"
          colorCodeTwo="#0f1f2e"
          colorCodeThree="#00314a"
          colorCodeBtnBg="#00314a"
          colorCodeBtnText="#ffffff"
          colorCodeBtnBorder="#00314a"
          colorCodeBtnHoverBg="#00314a"
          colorCodeBtnHoverText="#ffffff"
          colorCodeBtnHoverBorder="#00314a"
        />
      </Dialog>
    </section>
  );
}
