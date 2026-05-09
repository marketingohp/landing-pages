"use client";

import { useLanguage } from "@/contexts/AlreemIsland/LanguageContext";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import React, { useState } from "react";
import PropertySearchForm from "../common/PropertySearchForm";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function HeroKeywords() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const firstImage = "/images/al-reem-island/Al-Reem-Island-01.webp";

  return (
    <section
      style={{}}
      className="hero-keywords-banner relative bgColorTwo mt-25 pb-5 flex items-center justify-center overflow-hidden dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Image */}
      <div
        className="relative w-full overflow-hidden hero-banner-container rounded-[20px]"
        style={{ margin: "0px 20px", height: "70vh" }}
      >
        <img
          src={firstImage}
          alt="Al Reem Island"
          className="w-full h-full object-cover hero-banner-image rounded-[20px]"
        />
        {/* <Image
          src={firstImage}
          alt="Al Reem Island"
          fill
          className="object-cover rounded-[20px]"
          priority
        /> */}

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent hero-banner-overlay rounded-[20px]" />

        {/* Text Content Overlay - Center */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 md:px-10 lg:px-12 hero-banner-content">
          <div className="max-w-2xl text-center hero-banner-text-wrapper">
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-4xl md:text-7xl lg:text-7xl xl:text-7xl font-bold text-white playfair-display-regular hero-banner-title leading-tight">
              Al Reem Island
            </h1>

            {/* Description */}
            <p className="text-sm pb-5 sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl montserrat-regular mx-auto hero-banner-description">
              Imagine waking up to endless sea views, living in beautifully
              designed apartments, penthouses, and waterfront villas crafted for
              tranquility and elegance.
              <br />
              <strong>Al Reem Island</strong> is where urban luxury flows
              seamlessly with coastal serenity.
            </p>

            {/* Call-to-Action Button */}
            <button
              className="bg-[#2296c4] montserrat-regular hover:bg-[#1a7a9e] text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl hero-banner-button"
              onClick={handleClickOpen}
            >
              Explore Properties
            </button>
          </div>
        </div>
      </div>

      {/* Dialog with PropertySearchForm */}
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
          formType="explore-properties-form"
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
