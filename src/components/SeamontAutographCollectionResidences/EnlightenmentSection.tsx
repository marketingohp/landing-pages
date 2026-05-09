"use client";

import { useLanguage } from "@/contexts/seamonthAutoGraph/LanguageContext";
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
      style={{ paddingBottom: "40px", paddingTop: "0" }}
    >
      <div className="container mx-auto py-10 px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-2xl md:text-4xl lg:text-5xl text-[#001a38] dark:text-white mb-8"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {t("royal.enlightenment.title")}
          </h2>

          <p className="text-base sm:text-lg text-[#001a38] dark:text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2">
            {t("royal.enlightenment.desc")}
          </p>
        </div>

        {/* Video Player */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-[#001a38] dark:bg-[#2a4a6c]">
            <video
              width="1200"
              height="600"
              style={{ width: "100%", height: "100%" }}
              controls
              autoPlay
              loop
              poster="/images/seamont-autograph/seamont_autograph1.jpeg"
            >
              <source
                src="/images/seamont-autograph/Seamont_Collection.mp4"
                type="video/mp4"
              />
            </video>
            {/* <div
              style={{
                position: "absolute",
                zIndex: 100,
                top: "25%",
                left: "45%",
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
            >
              <Image src="" height={100} width={100} alt="name" />
              <svg
                fill="#ffffff"
                height="100px"
                width="100px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path d="M336.938,247.375l-117.333-85.333c-3.25-2.375-8.208-2.708-11.781-0.875c-3.573,1.813-6.49,5.49-6.49,9.5v170.667 c0,4.01,2.917,7.688,6.49,9.5c1.531,0.781,3.521,1.167,5.177,1.167c2.208,0,4.583-0.687,6.438-2.042l117.417-85.333 c2.761-2.01,4.438-5.208,4.438-8.625C341.292,252.583,339.698,249.385,336.938,247.375z M222.667,320.385V191.614L311.198,256 L222.667,320.385z"></path>{" "}
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M256,490.667 C126.604,490.667,21.333,385.396,21.333,256C21.333,126.604,126.604,21.333,256,21.333S490.667,126.604,490.667,256 C490.667,385.396,385.396,490.667,256,490.667z"></path>{" "}
                    </g>
                  </g>
                </g>
              </svg>
            </div> */}
          </div>
        </div>

        <div className="text-center">
          {/* <p className="text-base sm:text-lg text-[#001a38] dark:text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2">
            {t("royal.enlightenment.desc2")}
          </p> */}
          <button
            onClick={handleClickOpen}
            className="bg-[#001a38] dark:bg-[#2a4a6c] text-white px-8 py-4 rounded uppercase tracking-wider font-sans font-semibold hover:bg-[#001a38]/90 dark:hover:bg-[#2a4a6c]/90 transition-colors"
          >
            {t("form.register")}
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
          formName="seamont-autograph-collection-residences"
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
          // brochureUrl="/images/seamont-autograph-collection-residences/Yas_Riva_Residences_Brochure.pdf"
          redirectToThankYou={true}
          thankYouPath="/seamont-autograph-collection-residences/thank-you"
          colorCodeOne="#001a38"
          colorCodeTwo="#0f1f2e"
          colorCodeThree="#001a38"
          colorCodeBtnBg="#001a38"
          colorCodeBtnText="#ffffff"
          colorCodeBtnBorder="#001a38"
          colorCodeBtnHoverBg="#001a38"
          colorCodeBtnHoverText="#ffffff"
          colorCodeBtnHoverBorder="#001a38"
        />
      </Dialog>
    </section>
  );
}
