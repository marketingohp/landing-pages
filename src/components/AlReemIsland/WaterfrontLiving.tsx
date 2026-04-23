"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/reemIsland/LanguageContext";
import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import PropertySearchForm from "../common/PropertySearchForm";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function WaterfrontLiving() {
  const { t } = useLanguage();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const travelTimes = [
    // {
    //   time: "7 MINUTES",
    //   icon: "/images/location_nearby/Abu_Dhabi_Mall.webp",
    //   destination: "Abu Dhabi Mall",
    // },
    // {
    //   time: "3 MINUTES",
    //   icon: "/images/location_nearby/Reem_Central_Park.webp",
    //   destination: "Reem Central Park",
    // },
    // {
    //   time: "5 MINUTES",
    //   icon: "/images/location_nearby/galleria-mall.webp",
    //   destination: "Galleria Mall ",
    // },
    // {
    //   time: "3 MINUTES",
    //   icon: "/images/location_nearby/Boutik_Mall.webp",
    //   destination: "Boutik Mall ",
    // },
    // {
    //   time: "4 MINUTES",
    //   icon: "/images/location_nearby/Sorbonne_University.webp",
    //   destination: "Sorbonne University ",
    // },
    {
      time: "5 MINUTES",
      icon: "/images/location_nearby/Al_Maryah_Island.webp",
      destination: "Al Maryah Island ",
    },
    // {
    //   time: "12 MINUTES",
    //   icon: "/images/location_nearby/Abu_Dhabi_Corniche.webp",
    //   destination: "Abu Dhabi Corniche ",
    // },
    {
      time: "5 MINUTES",
      icon: "/images/location_nearby/Downtown_Reem_Island.webp",
      destination: "Downtown Reem Island",
    },
    {
      time: "15 MINUTES",
      icon: "/images/location_nearby/Louvre_Abu_Dhabi.webp",
      destination: "Louvre Abu Dhabi",
    },
    {
      time: "22 MINUTES",
      icon: "/images/location_nearby/Saadiyat_Beach_Club.webp",
      destination: "Saadiyat Beach Club",
    },
    {
      time: "25 MINUTES",
      icon: "/images/location_nearby/Abu_Dhabi_International_Airport.webp",
      destination: " Abu Dhabi International Airport",
    },
    {
      time: "30 MINUTES",
      icon: "/images/location_nearby/Yas_Island.webp",
      destination: "Yas Island",
    },
  ];

  return (
    <section
      className="relative py-20 lg:py-10 bg-[#f5f5f0] dark:bg-[#1a1a1a]"
      style={{ paddingBottom: 0, paddingTop: 180 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        {/* <Image
          src="images/one-residences/one_residences_3.webp"
          alt="Waterfront"
          fill
          className="object-cover"
          unoptimized
        /> */}
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="text-center mb-5">
          <h2
            className="text-2xl md:text-4xl lg:text-5xl text-[#2296c4] dark:text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
            dangerouslySetInnerHTML={{ __html: t("royal.waterfront.title") }}
          ></h2>

          <div className="max-w-8xl mx-auto space-y-4 text-[#2296c4] dark:text-gray-300 text-4xl py-2">
            <p
              className="custom-mobile-display-style1"
              dangerouslySetInnerHTML={{ __html: t("royal.waterfront.desc2") }}
            ></p>{" "}
          </div>
          <div className="max-w-5xl mx-auto space-y-4 text-[#2c57a3] dark:text-gray-300 text-lg py-4">
            <p
              dangerouslySetInnerHTML={{ __html: t("royal.waterfront.desc1") }}
            ></p>
          </div>
        </div>

        <div className="list-box-style1 mb-5">
          <div
            className=" rounded-lg p-6 md:p-8 overflow-x-auto relative"
            // style={{
            //   backgroundImage: `
            //     repeating-linear-gradient(
            //       45deg,
            //       transparent,
            //       transparent 10px,
            //       rgba(26, 58, 92, 0.03) 10px,
            //       rgba(26, 58, 92, 0.03) 20px
            //     ),
            //     repeating-linear-gradient(
            //       -45deg,
            //       transparent,
            //       transparent 10px,
            //       rgba(26, 58, 92, 0.02) 10px,
            //       rgba(26, 58, 92, 0.02) 20px
            //     )
            //   `,
            // }}
          >
            {/* Mobile: Vertical List Layout */}
            <div className="flex flex-col md:hidden space-y-4">
              {/* LOCATION */}
              <div className="px-4 py-3 text-center border-b border-[#2296c4] dark:border-gray-400 border-opacity-30">
                <div className="text-[#2c57a3] dark:text-white font-normal text-sm leading-relaxed">
                  <b>Price Growth:</b> Off-plan property prices have surged by
                  38% year-on-year (as of mid-2025), making it one of the
                  fastest-appreciating areas in Abu Dhabi.
                </div>
              </div>

              {/* HANDOVER */}
              {/* <div className="px-4 py-3 text-center border-b border-[#2296c4] dark:border-gray-400 border-opacity-30">
                <div className="text-[#2296c4] dark:text-white font-normal text-sm leading-relaxed">
                  HANDOVER: <br /> Q4 2029
                </div>
              </div> */}

              {/* 1 TO 3 BEDROOM APARTMENTS */}
              <div className="px-4 py-3 text-center border-b border-[#2296c4] dark:border-gray-400 border-opacity-30">
                <div className="text-[#2c57a3] dark:text-white font-normal text-sm leading-relaxed">
                  Enjoy rental yields of up <br />
                  to <b>8.7% </b>, among the highest in the UAE.
                </div>
              </div>

              {/* 4 BEDROOM DUPLEXES AND TOWNHOUSES */}
              <div className="px-4 py-3 text-center border-b border-[#2296c4] dark:border-gray-400 border-opacity-30">
                <div className="text-[#2c57a3] dark:text-white font-normal text-sm leading-relaxed">
                  <b> 100%</b> Freehold for <br />
                  All Nationalities
                </div>
              </div>

              {/* PART OF MARRIOTT'S AUTOGRAPH COLLECTION */}
              <div className="px-4 py-3 text-center">
                <div className="text-[#2c57a3] dark:text-white font-normal text-sm leading-relaxed">
                  New <b>Bridge</b> linking directly <br />
                  to <b>Saadiyat Cultural</b> District.
                </div>
              </div>
            </div>

            {/* Desktop: Horizontal Layout */}
            <div className="hidden md:flex md:flex-wrap md:items-center md:justify-center gap-0 min-w-max">
              {/* LOCATION */}
              <div className="flex-1 min-w-[200px] px-6 md:px-8 py-4 text-center">
                {/* <div className="text-[#2296c4] dark:text-white font-bold text-sm md:text-base mb-1 uppercase tracking-wide">
                  LOCATION:
                </div>
                <div className="text-[#2296c4] dark:text-white font-normal text-sm md:text-base leading-relaxed">
                  Al Reem ISLAND
                </div> */}
                <div className="text-[#2c57a3] dark:text-white font-normal text-sm md:text-base leading-relaxed">
                  <b> Price Growth:</b> Off-plan property <br />
                  prices have surged by 38% <br /> year-on-year (as of
                  mid-2025),
                  <br /> making it one of the fastest-appreciating areas in Abu
                  Dhabi.
                </div>
              </div>

              {/* Vertical Separator */}
              <div className="w-px h-20 bg-[#2296c4] dark:bg-gray-400 opacity-30"></div>

              {/* HANDOVER */}
              {/* <div className="flex-1 min-w-[200px] px-6 md:px-8 py-4 text-center">
               
                <div className="text-[#2296c4] dark:text-white font-normal text-sm md:text-base leading-relaxed">
                  HANDOVER: <br /> Q4 2029
                </div>
              </div> */}

              {/* Vertical Separator */}
              <div className="w-px h-20 bg-[#2296c4] dark:bg-gray-400 opacity-30"></div>

              {/* 1 TO 3 BEDROOM APARTMENTS */}
              <div className="flex-1 min-w-[200px] px-6 md:px-8 py-4 text-center">
                <div className="text-[#2c57a3] dark:text-white font-normal text-sm md:text-base leading-relaxed">
                  Enjoy rental yields of up <br />
                  to <b>8.7% </b>, among the highest in the UAE.
                </div>
              </div>

              {/* Vertical Separator */}
              <div className="w-px h-20 bg-[#2296c4] dark:bg-gray-400 opacity-30"></div>

              {/* 4 BEDROOM DUPLEXES AND TOWNHOUSES */}
              <div className="flex-1 min-w-[200px] px-6 md:px-8 py-4 text-center">
                {/* <div className="text-[#2296c4] dark:text-white font-bold text-sm md:text-base mb-1 uppercase tracking-wide">
                  By <br /> One Residences
                </div>
                <div className="text-[#2296c4] dark:text-white font-normal text-sm md:text-base"></div> */}
                <div className="text-[#2c57a3] dark:text-white font-normal text-sm md:text-base leading-relaxed">
                  <b> 100%</b> Freehold for <br />
                  All Nationalities
                </div>
              </div>

              {/* Vertical Separator */}
              <div className="w-px h-20 bg-[#2296c4] dark:bg-gray-400 opacity-30"></div>

              {/* PART OF MARRIOTT'S AUTOGRAPH COLLECTION */}
              <div className="flex-1 min-w-[200px] px-6 md:px-8 py-4 text-center">
                <div className="text-[#2c57a3] dark:text-white font-normal text-sm md:text-base leading-relaxed">
                  New <b>Bridge</b> linking directly <br />
                  to <b>Saadiyat Cultural</b> District.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Travel Times Icons */}
        {/* <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-12">
          {travelTimes.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center shadow-lg">
                <span className="text-2xl">
                  <img
                    src={item.icon}
                    width={100}
                    height={100}
                    alt=""
                    className="rounded-full"
                  />
                </span>
              </div>
              <div className="text-[#2296c4] dark:text-white font-bold text-lg mb-2">
                {item.time}
              </div>
              <div className="text-[#2296c4] dark:text-gray-400 text-sm">
                {item.destination}
              </div>
            </div>
          ))}
        </div> */}

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <button
            onClick={handleClickOpen}
            className="bg-[#2296c4] dark:bg-[#2a4a6c] text-white px-8 py-4 rounded uppercase tracking-wider font-sans font-semibold hover:bg-[#2296c4]/90 dark:hover:bg-[#2a4a6c]/90 transition-colors"
          >
            {t("royal.waterfront.explore")} 
          </button> */}
          {/* <button
            onClick={handleClickOpen}
            className="bg-[#2296c4] dark:bg-[#2a4a6c] text-white px-8 py-4 rounded uppercase tracking-wider font-sans font-semibold hover:bg-[#2296c4]/90 dark:hover:bg-[#2a4a6c]/90 transition-colors"
          >
            {t("royal.waterfront.brochure")}
          </button> */}

          <Modal
            open={open}
            onClose={handleClose}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",

              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <PropertySearchForm
              formName="al-reem-island"
              pointName="get-in-touch"
              formType="about-project-form"
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
          </Modal>
        </div>
      </div>
    </section>
  );
}
