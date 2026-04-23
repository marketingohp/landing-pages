"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/radissonResidences/LanguageContext";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
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
  ref: React.Ref<unknown>
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
      time: "5 MINUTES",
      icon: "/images/location_nearby/ALREEM-Dawntaon.webp",
      destination: "Downtown Reem Island",
    },
    {
      time: "7 MINUTES",
      icon: "/images/location_nearby/Al-Maryah-Island.webp",
      destination: "Maryah Island",
    },
    {
      time: "22 MINUTES",
      icon: "/images/location_nearby/Saadiyat-Beach-Club.webp",
      destination: "Saadiyat Beach Club",
    },
    // Row 2
    {
      time: "30 MINUTES",
      icon: "/images/location_nearby/Yas_Island.webp",
      destination: "Yas Island",
    },
    {
      time: "20 MINUTES",
      icon: "/images/location_nearby/Louvre_Abu_Dhabi.webp",
      destination: "Louvre Abu Dhabi",
    },
    {
      time: "25 MINUTES",
      icon: "/images/location_nearby/Abu_Dhabi_International_Airport.webp",
      destination: "Abu Dhabi International Airport",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[#f5f5f0] dark:bg-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1a3a5c] dark:text-white mb-4 sm:mb-6 md:mb-8"
            style={{ fontFamily: "var(--font-playfair), serif" }}
            dangerouslySetInnerHTML={{ __html: t("royal.discover.title") }}
          ></h2>
          <p className="text-base sm:text-lg text-[#4a6fa5] dark:text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2">
            {t("royal.discover.desc")}
          </p>
        </div>

        {/* Two Column Layout: Destinations Grid + Map */}
        <div className="max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Left Section: Destinations Grid (2x3) */}
            <div className="order-2 lg:order-1">
              {/* Mobile: Two Column Grid Layout */}
              <div className="grid grid-cols-2 sm:hidden gap-4">
                {destinations.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center cursor-pointer"
                    onClick={() => handleDestinationClick(index)}
                  >
                    {/* Icon Circle */}
                    <div className="w-32 h-32 mb-2 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center shadow-md overflow-hidden hover:scale-110 transition-transform duration-300">
                      <img
                        src={item.icon}
                        alt={item.destination}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                    {/* Time */}

                    {/* Destination */}
                    <div className="text-[#1a3a5c] dark:text-white font-bold text-xs mb-0.5">
                      {item.destination}
                    </div>
                    <div className="text-[#4a6fa5] dark:text-gray-400 text-[10px] leading-tight">
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: Grid Layout (2 columns on tablet, 3 on desktop) */}
              <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {destinations.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center cursor-pointer"
                    onClick={() => handleDestinationClick(index)}
                  >
                    {/* Icon Circle */}
                    <div className="w-20 h-20 md:w-24 md:h-24 mb-3 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center shadow-md overflow-hidden hover:scale-110 transition-transform duration-300">
                      <img
                        src={item.icon}
                        alt={item.destination}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                    {/* Time */}

                    {/* Destination */}
                    <div className="text-[#1a3a5c] dark:text-white font-bold text-sm md:text-base mb-1">
                      {item.destination}
                    </div>
                    <div className="text-[#4a6fa5] dark:text-gray-400 text-xs md:text-sm leading-tight px-1">
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section: Map with Location Marker and Inset */}
            <div className="order-1 lg:order-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg">
                {/* Title */}
                {/* <h3 className="text-[#1a3a5c] dark:text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-5 md:mb-6 uppercase tracking-wide text-center lg:text-left leading-tight sm:leading-normal">
                  PRIME WATERFRONT PLOT IN REEM ISLAND - ABU DHABI
                </h3> */}

                {/* Map Container with Connection Line */}
                <div className="relative mb-3 sm:mb-4">
                  <div
                    className="relative aspect-video rounded-lg overflow-hidden bg-[#1a3a5c] dark:bg-[#2a4a6c] cursor-pointer hover:opacity-90 transition-opacity duration-300"
                    onClick={handleMapImageClick}
                  >
                    <Image
                      src="images/radission-residences/location_map_radisson_residences.webp"
                      alt="Location Map"
                      fill
                      className="object-cover"
                      unoptimized
                    />

                    {/* Location Marker (Blue teardrop with "S") */}
                    <div className="absolute top-[31%] left-[31%] z-10">
                      <div className="relative w-9 h-12 sm:w-10 sm:h-14 md:w-12 md:h-16">
                        {/* Teardrop shape - circular top with pointed bottom */}
                        {/* <svg
                          viewBox="0 0 48 64"
                          className="w-full h-full drop-shadow-lg"
                        >
                          <path
                            d="M24 0 C10.745 0, 0 10.745, 0 24 C0 37.255, 24 64, 24 64 C24 64, 48 37.255, 48 24 C48 10.745, 37.255 0, 24 0 Z"
                            fill="#1a3a5c"
                            className="dark:fill-[#2a4a6c]"
                          />
                          <text
                            x="24"
                            y="32"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="white"
                            fontSize="16"
                            fontWeight="bold"
                            fontFamily="Arial, sans-serif"
                          >
                            S
                          </text>
                        </svg> */}
                      </div>
                    </div>
                  </div>

                  {/* Connection line from marker to inset (only on desktop) */}
                  <div
                    className="hidden lg:block absolute top-[45%] right-0 w-1/3 h-0.5 bg-white/70"
                    style={{ zIndex: 5 }}
                  ></div>
                </div>

                {/* Inset Architectural Rendering */}
                <div className="relative mt-3 sm:mt-4">
                  {/* <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 mb-2 sm:mb-3 shadow-md">
                    <Image
                      src="images/one-residences/one_residences_3.webp"
                      alt="One Residences"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div> */}
                  {/* Label with connection line continuation */}
                  <div className="relative">
                    <div className="hidden lg:block absolute -top-3 right-0 w-1/3 h-0.5 bg-white/70"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className="text-center">
          <button
            onClick={handleClickOpen}
            className="bg-[#1a3a5c] dark:bg-[#2a4a6c] text-white px-8 py-4 rounded uppercase tracking-wider font-sans font-semibold hover:bg-[#1a3a5c]/90 dark:hover:bg-[#2a4a6c]/90 transition-colors"
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
            className="relative w-full max-w-5xl bg-transparent rounded-2xl shadow-2xl overflow-hidden animate-scaleIn"
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
            <div className="relative">
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
                      {/* Full Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src={destination.icon}
                          alt={destination.destination}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>

                      {/* Black Gradient from Bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0"></div>

                      {/* Time and Destination at Bottom Center */}
                      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 md:px-8 pb-20 md:pb-24 text-center">
                        {/* Time Badge */}
                        <div className="mb-3">
                          <div className="inline-block bg-gray-800/80 dark:bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                            <div className="text-xl md:text-2xl lg:text-3xl text-white font-semibold tracking-wider">
                              {destination.time}
                            </div>
                          </div>
                        </div>
                        {/* Destination Title */}
                        <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-tight drop-shadow-lg">
                          {destination.destination}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="swiper-button-prev-destinations absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center bg-gray-800/70 dark:bg-gray-900/70 backdrop-blur-sm border border-white/20 hover:bg-gray-700/70 dark:hover:bg-gray-800/70 rounded-full transition-all duration-300 shadow-lg cursor-pointer">
                <svg
                  className="w-6 h-6 text-white drop-shadow-lg"
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
              <div className="swiper-button-next-destinations absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center bg-gray-800/70 dark:bg-gray-900/70 backdrop-blur-sm border border-white/20 hover:bg-gray-700/70 dark:hover:bg-gray-800/70 rounded-full transition-all duration-300 shadow-lg cursor-pointer">
                <svg
                  className="w-6 h-6 text-white drop-shadow-lg"
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

              {/* Custom Pagination - Bottom Center */}
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
                src="images/radission-residences/location_map_radisson_residences.webp"
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
                      fill="#1a3a5c"
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

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
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
          formName="radisson-residences"
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
          requiredFields={["firstName", "lastName", "phoneNumber","email"]}
          viewType="image"
          // downloadBrochure={true}
          // brochureUrl="/images/radisson-residences/Radisson_Residences_Brochure.pdf"
          thankYouPath="/radisson-residences/thank-you"
          redirectToThankYou={true}
        />
      </Dialog>
    </section>
  );
}
