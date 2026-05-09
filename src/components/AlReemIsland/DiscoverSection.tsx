"use client";

import { useLanguage } from "@/contexts/reemIsland/LanguageContext";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Image from "next/image";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PropertySearchForm from "../common/PropertySearchForm";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DiscoverSection() {
  const { t } = useLanguage();

  const [open, setOpen] = React.useState(false);
  const [destinationsModalOpen, setDestinationsModalOpen] = useState(false);
  const [selectedDestinationIndex, setSelectedDestinationIndex] = useState(0);
  const [mapLightboxOpen, setMapLightboxOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDestinationClick = (index: number) => {
    setSelectedDestinationIndex(index);
    setDestinationsModalOpen(true);
  };

  const handleCloseDestinationsModal = () => {
    setDestinationsModalOpen(false);
  };

  const handleMapImageClick = () => {
    setMapLightboxOpen(true);
  };

  const handleCloseMapLightbox = () => {
    setMapLightboxOpen(false);
  };

  // Destinations matching the image layout (2x3 grid)
  const destinations = [
    // Row 1
    {
      time: "05 MINUTES",
      icon: "/images/yas-riva/location/ferrari_world.webp",
      destination: "Yas Mall & Ferrari World",
    },
    {
      time: "07 MINUTES",
      icon: "/images/yas-riva/location/Yas_Bay_Waterfront_Etihad_Arena.webp",
      destination: "Yas Bay Waterfront & Etihad Arena",
    },
    {
      time: "10 MINUTES",
      icon: "/images/yas-riva/location/Yas_Marina_Circuit.webp",
      destination: "Yas Marina Circuit",
    },
    // Row 2
    {
      time: "12 MINUTES",
      icon: "/images/yas-riva/location/Zayed_International_Airport.webp",
      destination: "Zayed International Airport",
    },
    {
      time: "15 MINUTES",
      icon: "/images/yas-riva/location/Al_Raha_Beach.webp",
      destination: "Al Raha Beach",
    },
    {
      time: "20 MINUTES",
      icon: "/images/yas-riva/location/Saadiyat_Island.webp",
      destination: "Saadiyat Island (Cultural District)",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-10 bg-[#f5f5f0] dark:bg-[#1a1a1a] pt-0"
      style={{ paddingTop: "80px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2296c4] dark:text-white mb-4 sm:mb-6 md:mb-8"
            style={{ fontFamily: "var(--font-playfair), serif" }}
            dangerouslySetInnerHTML={{ __html: t("royal.discover.title") }}
          ></h2>
          <div className="max-w-8xl mx-auto space-y-4 text-[#2296c4] dark:text-gray-300 text-4xl py-0">
            <p
              className="custom-mobile-display-style1"
              dangerouslySetInnerHTML={{ __html: t("royal.discover.desc2") }}
            ></p>
          </div>
          <p className="text-base sm:text-lg text-[#2c57a3] dark:text-gray-300 max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2 py-4 ">
            {t("royal.discover.desc")}
          </p>
        </div>

        {/* Two Column Layout: Destinations Grid + Map */}
        <div className="max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21759.424395725622!2d54.40838380945662!3d24.496943393353384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1766839687846!5m2!1sen!2sae"
            width="600"
            height="450"
            loading="lazy"
            style={{ border: "0", width: "100%" }}
          ></iframe>

          <div className="text-center relative z-20 pt-10">
            <button
              onClick={handleClickOpen}
              className="btn-font bg-[#2296c4] dark:bg-[#2a4a6c] capitalize text-white my-10 px-8 py-4 rounded tracking-wider font-semibold hover:bg-[#1c6f91]/90 dark:hover:bg-[#2a4a6c]/90 transition-colors relative z-20"
            >
              {t("royal.discover.cta")}
            </button>
          </div>
        </div>
        {/* 
        <div className="text-center">
          <button
            onClick={handleClickOpen}
            className="bg-[#2296c4] dark:bg-[#2a4a6c] text-white px-8 py-4 rounded uppercase tracking-wider font-sans font-semibold hover:bg-[#2296c4]/90 dark:hover:bg-[#2a4a6c]/90 transition-colors"
          >
            {t("royal.discover.masterplan")}
          </button>
        </div> */}
      </div>

      {/* Modern Lightbox Modal for Destinations */}
      {destinationsModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn"
          onClick={handleCloseDestinationsModal}
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
              onClick={handleCloseDestinationsModal}
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
                  nextEl: ".swiper-button-next-destinations",
                  prevEl: ".swiper-button-prev-destinations",
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination-destinations",
                  bulletClass: "swiper-pagination-bullet-destinations",
                  bulletActiveClass:
                    "swiper-pagination-bullet-active-destinations",
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                initialSlide={selectedDestinationIndex}
                className="destinations-lightbox-swiper"
                loop={true}
              >
                {destinations.map((destination, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
                      {/* Full Background Image with Modern Effects */}
                      <div className="absolute inset-0">
                        {/* Base Image */}
                        <img
                          src={destination.icon}
                          alt={destination.destination}
                          className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-100"
                        />

                        {/* Animated Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2296c4]/80 via-[#2296c4]/60 to-[#2296c4]/80 dark:from-[#0a0a0a]/90 dark:via-[#1a1a1a]/80 dark:to-[#2a4a6c]/90"></div>

                        {/* Animated Light Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>

                        {/* Radial Gradient Overlay for Focus */}
                        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60"></div>

                        {/* Modern Glassmorphism Effect */}
                        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
                      </div>

                      {/* Content Overlay */}
                      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8 text-center">
                        {/* Time Badge with Modern Effect */}
                        <div className="mb-6 md:mb-8">
                          <div className="inline-block bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 px-6 py-3 rounded-full shadow-2xl">
                            <div className="text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-wider drop-shadow-lg">
                              {destination.time}
                            </div>
                          </div>
                        </div>

                        {/* Title with Modern Typography */}
                        <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold mb-6 md:mb-8 leading-tight drop-shadow-2xl px-4 max-w-4xl">
                          <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                            {destination.destination}
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
              <div className="swiper-button-prev-destinations absolute left-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 flex items-center justify-center bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl cursor-pointer group">
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
              <div className="swiper-button-next-destinations absolute right-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 flex items-center justify-center bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl cursor-pointer group">
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
              <div className="swiper-pagination-destinations flex justify-center gap-2 absolute bottom-6 left-1/2 -translate-x-1/2 z-50"></div>
            </div>
          </div>
        </div>
      )}

      {/* Map Image Lightbox Modal */}
      {mapLightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn"
          onClick={handleCloseMapLightbox}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            className="relative w-full max-w-7xl max-h-[90vh] bg-transparent rounded-3xl shadow-2xl overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseMapLightbox}
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

            {/* Full Size Map Image */}
            <div className="relative w-full h-full">
              <Image
                src="images/yas-riva/yas_riva_location_map.webp"
                alt="Location Map - Full Size"
                width={1920}
                height={1080}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                unoptimized
              />

              {/* Location Marker Overlay */}
              <div className="absolute top-[31%] left-[31%] z-10">
                <div className="relative w-12 h-16 md:w-16 md:h-20">
                  {/* Teardrop shape - circular top with pointed bottom */}
                  {/* <svg
                    viewBox="0 0 48 64"
                    className="w-full h-full drop-shadow-lg"
                  >
                    <path
                      d="M24 0 C10.745 0, 0 10.745, 0 24 C0 37.255, 24 64, 24 64 C24 64, 48 37.255, 48 24 C48 10.745, 37.255 0, 24 0 Z"
                      fill="#2296c4"
                      className="dark:fill-[#2a4a6c]"
                    />
                    <text
                      x="24"
                      y="32"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize="20"
                      fontWeight="bold"
                      fontFamily="Arial, sans-serif"
                    >
                      S
                    </text>
                  </svg> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles for Destinations Lightbox */}
      <style jsx global>{`
        .destinations-lightbox-swiper {
          padding-bottom: 0rem;
        }

        .destinations-lightbox-swiper .swiper-slide {
          height: auto;
        }

        .swiper-pagination-bullet-destinations {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }

        .swiper-pagination-bullet-active-destinations {
          background: rgba(255, 255, 255, 0.9);
          width: 32px;
          border-radius: 6px;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        .dark .swiper-pagination-bullet-destinations {
          background: rgba(255, 255, 255, 0.3);
        }

        .dark .swiper-pagination-bullet-active-destinations {
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
          formName="al-reem-island"
          pointName="get-in-touch"
          formType="location-form"
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
          thankYouPath="/reem-island/thank-you"
          colorCodeOne="#2296c4"
          colorCodeTwo="#0f1f2e"
          colorCodeThree="#2296c4"
          colorCodeBtnBg="#2296c4"
          colorCodeBtnText="#ffffff"
          colorCodeBtnBorder="#2296c4"
          colorCodeBtnHoverBg="#2296c4"
          colorCodeBtnHoverText="#ffffff"
          colorCodeBtnHoverBorder="#2296c4"
        />
      </Dialog>
    </section>
  );
}
