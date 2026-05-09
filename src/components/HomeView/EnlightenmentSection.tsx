"use client";

import { useLanguage } from "@/contexts/oneResidences/LanguageContext";
import Image from "next/image";
import { useState } from "react";

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
      style={{ paddingBottom: "0" }}
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
            {!isPlaying ? (
              <>
                <Image
                  src="images/one-residences/one_residences_7.webp"
                  alt="Video Preview"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 dark:bg-black/50">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 bg-white/90 dark:bg-white/80 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-white transition-colors"
                  >
                    <svg
                      className="w-10 h-10 text-[#1a3a5c] dark:text-[#1a3a5c] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-sans uppercase tracking-wider">
                    One Residences
                  </p>
                </div>
              </>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Seamont Residences"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>

        <div className="text-center">
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
          formName="one-residences"
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
          requiredFields={["firstName", "lastName", "phoneNumber", "email"]}
          viewType="image"
          // downloadBrochure={true}
          // brochureUrl="/images/one-residences/one-residences-brochure.pdf"
          redirectToThankYou={true}
        />
      </Dialog>
    </section>
  );
}
