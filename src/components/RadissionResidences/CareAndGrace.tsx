"use client";

import { useLanguage } from "@/contexts/radissonResidences/LanguageContext";
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
    //setSelectedAmenityIndex(index);
    //setAmenitiesModalOpen(true);
  };

  const handleCloseAmenitiesModal = () => {
    setAmenitiesModalOpen(false);
  };

  const amenities = [
    {
      name: "Indoor Club Lounge",
      icon: "/images/radission-residences/amenities/1.webp",
    },
    {
      name: "Retail & F&B Shops",
      icon: "/images/radission-residences/amenities/2.webp",
    },
    {
      name: "Kid’s Pool",
      icon: "/images/radission-residences/amenities/3.webp",
    },
    {
      name: "Kids’ Splash Pads",
      icon: "/images/radission-residences/amenities/4.webp",
    },
    {
      name: "Outdoor Kids’ Play Area",
      icon: "/images/radission-residences/amenities/5.webp",
    },
    {
      name: "Outdoor Gaming Area",
      icon: "/images/radission-residences/amenities/6.webp",
    },
    {
      name: "BBQ Area",
      icon: "/images/radission-residences/amenities/7.webp",
    },
    {
      name: "Dog Park",
      icon: "/images/radission-residences/amenities/8.webp",
    },
    // {
    //   name: "Outdoor Kids Playground",
    //   icon: "/images/location_nearby/Outdoor_Kids_Playground.webp",
    // },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#f5f5f0] dark:bg-[#1a1a1a] relative">
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
            className="text-2xl md:text-4xl lg:text-4xl text-[#1a3a5c] dark:text-white mb-8"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {t("royal.care.title")}
          </h2>
          <p className="text-base sm:text-lg text-[#4a6fa5] dark:text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2">
            {t("royal.care.desc")}
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="text-center cursor-pointer"
              onClick={() => handleAmenityClick(index)}
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg text-4xl hover:scale-110 transition-transform duration-300">
                <img
                  src={amenity.icon}
                  width={200}
                  height={200}
                  alt={amenity.name}
                  className="rounded-full"
                />
              </div>
              <p className="text-[#1a3a5c] dark:text-gray-200 text-sm font-sans uppercase tracking-wider leading-tight font-bold">
                {amenity.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center relative z-20">
          <button
            onClick={handleClickOpen}
            className="bg-[#1a3a5c] dark:bg-[#2a4a6c] text-white px-8 py-4 rounded uppercase tracking-wider font-sans font-semibold hover:bg-[#1a3a5c]/90 dark:hover:bg-[#2a4a6c]/90 transition-colors relative z-20"
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
            className="relative w-full max-w-5xl bg-transparent rounded-2xl shadow-2xl overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseAmenitiesModal}
              className="absolute top-4 right-4 z-50 w-12 h-12 flex items-center justify-center bg-gray-800/70 dark:bg-gray-900/70 backdrop-blur-sm border border-white/20 hover:bg-gray-700/70 dark:hover:bg-gray-800/70 rounded-full transition-all duration-300 shadow-lg"
              aria-label="Close"
            >
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
                      {/* Full Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src={amenity.icon}
                          alt={amenity.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>

                      {/* Black Gradient from Bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0"></div>

                      {/* Amenity Name at Bottom Center */}
                      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 md:px-8 pb-20 md:pb-24 text-center">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-tight drop-shadow-lg">
                          {amenity.name}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center bg-gray-800/70 dark:bg-gray-900/70 backdrop-blur-sm border border-white/20 hover:bg-gray-700/70 dark:hover:bg-gray-800/70 rounded-full transition-all duration-300 shadow-lg cursor-pointer">
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
              <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center bg-gray-800/70 dark:bg-gray-900/70 backdrop-blur-sm border border-white/20 hover:bg-gray-700/70 dark:hover:bg-gray-800/70 rounded-full transition-all duration-300 shadow-lg cursor-pointer">
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

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
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
          formName="radisson-residences"
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
          // brochureUrl="/images/radisson-residences/Radisson_Residences_Brochure.pdf"
          redirectToThankYou={true}
          thankYouPath="/radisson-residences/thank-you"
        />
      </Dialog>
    </section>
  );
}
