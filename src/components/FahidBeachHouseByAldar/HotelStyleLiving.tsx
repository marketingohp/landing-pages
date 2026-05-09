"use client";

import { useLanguage } from "@/contexts/fahidBeachHouseByAldar/LanguageContext";

import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import PropertySearchForm from "../common/PropertySearchForm";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function HotelStyleLiving() {
  const { t } = useLanguage();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section
      className="py-20 lg:py-32 bg-[#f5f5f0] dark:bg-[#1a1a1a]"
      style={{ paddingTop: 0 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-2xl md:text-4xl lg:text-5xl text-[#5f602c] dark:text-white mb-8"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {t("royal.hotel.title")}
          </h2>
          <p className="text-lg text-[#5f602c] dark:text-gray-300 mb-8 leading-relaxed">
            {t("royal.hotel.desc")}
          </p>
          <button
            onClick={handleClickOpen}
            className="bg-[#5f602c] dark:bg-[#2a4a6c] text-white px-8 py-4 rounded uppercase tracking-wider font-sans font-semibold hover:bg-[#5f602c]/90 dark:hover:bg-[#2a4a6c]/90 transition-colors"
          >
            {t("royal.hotel.explore")}
          </button>
        </div>
      </div>
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
          formName="bayn-by-ora"
          pointName="get-in-touch"
          formType="short-about-form"
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
          // brochureUrl="/images/bayn-by-ora/Yas_Riva_Residences_Brochure.pdf"
          redirectToThankYou={true}
          thankYouPath="/bayn-by-ora/thank-you"
          colorCodeOne="#5f602c"
          colorCodeTwo="#0f1f2e"
          colorCodeThree="#5f602c"
          colorCodeBtnBg="#5f602c"
          colorCodeBtnText="#ffffff"
          colorCodeBtnBorder="#5f602c"
          colorCodeBtnHoverBg="#5f602c"
          colorCodeBtnHoverText="#ffffff"
          colorCodeBtnHoverBorder="#5f602c"
        />
      </Dialog>
    </section>
  );
}
