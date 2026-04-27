import React, { useState, useRef, useEffect } from "react";
import OhanaTimer from "./OhanaTimer";
import useCountdown from "./useCountdown";
import PropertySearchForm from "../common/PropertySearchForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Dialog from "@mui/material/Dialog";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import PropertySearchFormFour from "../common/PropertySearchFormFour";
import Image from "next/image";
//const video = "/video/ohana.mp4";

const video =
  "https://cdn.prod.website-files.com/6953e1cc8ce6f26a3cb13814/6953e1cc8ce6f26a3cb138d3_smoke-colors-bg_loop_mp4.mp4";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OhanaHeader = () => {
  const [open, setOpen] = React.useState(false);
  const [destinationsModalOpen, setDestinationsModalOpen] = useState(false);
  const [selectedDestinationIndex, setSelectedDestinationIndex] = useState(0);
  const [mapLightboxOpen, setMapLightboxOpen] = useState(false);

  const [days, hours, minutes, seconds] = useCountdown("2026-02-23T20:00:00");

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
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // Ensure video plays on mount and handle autoplay policies
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Autoplay was prevented, try to play on user interaction
          console.log("Autoplay prevented:", error);
        });
      }
    }
  }, []);

  return (
    <div id="open-day-burtville">
      <div className={`relative VideoContainer`}>
        <div className="absolute z-1 bg-black/20 inset-0 w-full h-full"></div>
        {/* Desktop Video  */}
        <Image
          src="/images/open-day-burtville/babalqasr_bkg_desktop.jpeg"
          alt=""
          width={1000}
          height={1000}
          className="desktop min-h-dvh"
        />
        <Image
          src="/images/open-day-burtville/babalqasr_bkg.jpeg"
          alt=""
          width={1000}
          height={1000}
          className="mobilee min-h-dvh"
        />
        {/* <video
          ref={videoRef}
          width={"100%"}
          height={"auto"}
          muted
          autoPlay
          playsInline
          loop
          preload="auto"
          className="DektopVideo"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className="HeaderContent w-full h-full flex justify-center items-center">
          <div className="HeaderContent1 w-full flex flex-col justify-center">
            <div className="w-full flex flex-row gap-4 justify-center items-center mb-10">
              <img
                src="/images/open-day-burtville/oh_logo.png"
                alt="ohana"
                className="w-30 h-auto sm:w-50"
              />
              <div className="block w-px h-20 sm:h-30 mr-3 bg-white"></div>
              <img
                src="/images/open-day-burtville/burtville_logo.png"
                alt="ohana"
                className="w-20 h-auto sm:w-30"
              />
            </div>
            <h2>Your Are Invited</h2>

            <div className="header-logos-row">
              <div className="">
                <h3 style={{ color: "white", paddingTop: "0px" }}>
                  <span className="text-5xl sm:text-7xl">Open Day</span>
                </h3>
                <h3 className="text-2xl sm:text-4xl">
                  Exploring BURTVILLE'S Latest projects
                  <br />
                  in partnership with OPEN HOME
                </h3>
              </div>
            </div>

            {/* date and time */}
            <div className="w-fit-content mx-auto mt-10 flex flex-col justify-center items-center leading-[0.9]">
              <h2>April</h2>
              <div className="flex flex-col sm:flex-row gap-5 items-center">
                <div className="border-t-2 border-b-2 border-white w-50 px-3 py-3 h-fit text-5xl font-bold">
                  10 AM
                </div>
                <h2 id="date" className="w-60 font-bold">
                  25-26
                </h2>
                <div className="border-t-2 border-b-2 border-white w-50 px-3 py-3 h-fit text-5xl font-bold">
                  06 PM
                </div>
              </div>
              <h2>2026</h2>
            </div>
            {/* <p>April, 25 & Thu, 26 Feb 2026</p>
            <p>10AM - 06PM</p> */}
          </div>

          {/* <OhanaTimer
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
          <br />
          <br /> */}

          {/* <img
            src="/images/openhouse/basic_location.svg"
            height={140}
            width={160}
            alt="ohana"
            style={{ margin: "auto" }}
          /> */}
        </div>
      </div>

      <div className="Header2 -mt-40 z-50 pt-15">
        <p className="font-medium text-2xl px-4">
          Bab Al Qasr Hotel, Corniche West Abu Dhabi
          <br />
          Sales Center, 9th & 10th Floors
        </p>

        {/* <h2>
          Be Part of <br /> Whats Next
        </h2> */}
        <div className="formContainer mx-4 sm:w-[50%] sm:mx-auto">
          {/* <ContactForm1 /> */}

          <PropertySearchFormFour
            formName="open-day-burtville"
            pointName="get-in-touch"
            formType="footer-form"
            visibleFields={[
              "firstName",
              "lastName",
              "email",
              "phoneNumber",
              "unitType",
              "bedrooms",
              "budget",
            ]}
            requiredFields={["firstName", "lastName", "phoneNumber", "email"]}
            viewType="banner"
            redirectToThankYou={true}
            thankYouPath="/open-day-burtville/thank-you"
            colorCodeOne="#001340"
            colorCodeTwo="#001340;"
            colorCodeThree="#001340;"
            colorCodeBtnBg="#001340;"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#001340;"
            colorCodeBtnHoverBg="#001340;"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#001340;"
          />
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
        <PropertySearchFormFour
          formName="open-day-burtville"
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
          thankYouPath="/open-day-burtville/thank-you"
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
    </div>
  );
};

export default OhanaHeader;
