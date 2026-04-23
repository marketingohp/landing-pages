"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/oneResidences/LanguageContext";

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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EnlightenmentSection() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

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
      style={{ paddingTop: "40px" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-2xl md:text-4xl lg:text-5xl text-[#1a3a5c] dark:text-white mb-8"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {t("royal.enlightenment.title")}
          </h2>
        </div>

        {/* Video Player */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-[#1a3a5c] dark:bg-[#2a4a6c]">
            <video
              width="1200"
              height="600"
              style={{ width: "100%", height: "100%" }}
              controls
              autoPlay
            >
              <source
                src="/images/bloom-arjaan/boom-arjaan.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <div className="text-center py-10">
          <button
            onClick={handleClickOpen}
            className="bg-[#1a3a5c] dark:bg-[#2a4a6c] text-white px-8 py-4 rounded uppercase tracking-wider font-sans font-semibold hover:bg-[#1a3a5c]/90 dark:hover:bg-[#2a4a6c]/90 transition-colors"
          >
            {t("royal.enlightenment.viewGallery")}
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
          formName="bloom-arjaan-by-rotana"
          pointName="get-in-touch"
          formType="video-form"
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
          // brochureUrl="/images/bloom-arjaan/Bloom_Arjaan_Brochure.pdf"
          thankYouPath="/bloom-arjaan-by-rotana/thank-you"
          redirectToThankYou={true}
        />
      </Dialog>
    </section>
  );
}
