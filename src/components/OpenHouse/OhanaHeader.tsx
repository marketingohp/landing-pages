import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropertySearchFormFour from "../common/PropertySearchFormFour";
import OhanaTimer from "./OhanaTimer";
import useCountdown from "./useCountdown";
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
    <>
      <div className="VideoContainer">
        {/* Desktop Video  */}
        <Image
          src="/images/openhouse/ohana-banner-1.jpg"
          alt=""
          width={1000}
          height={1000}
          className="desktop"
        />
        <Image
          src="/images/openhouse/banner-mobile.webp"
          alt=""
          width={1000}
          height={1000}
          className="mobilee"
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
        <div className="HeaderContent">
          <div className="HeaderContent1">
            <div
              className="header-logos-row__item"
              style={{ marginBottom: "20px" }}
            >
              <img
                src="/images/ohana/ohana_logo.svg"
                alt="ohana"
                width={200}
                height={100}
              />
            </div>
            <h2>Join the Ohana Development</h2>

            <div className="header-logos-row">
              <div className="header-logos-row__item">
                <h3 style={{ color: "white", paddingTop: "0px" }}>
                  <span className="spanDay">Open Day</span> in Abu Dhabi
                </h3>
              </div>
            </div>

            <p>Mon, 23 & Thu, 24 Feb 2026</p>
            <p>8PM - 12AM</p>
          </div>

          <OhanaTimer
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
          <br />
          <br />

          {/* <img
            src="/images/openhouse/basic_location.svg"
            height={140}
            width={160}
            alt="ohana"
            style={{ margin: "auto" }}
          /> */}
        </div>
      </div>

      <div className="Header2">
        <div className="detailText">
          <p
            style={{ fontSize: "20px", paddingTop: "20px", fontWeight: "400" }}
          >
            Ohana Sales Center - Landmark Tower, Abu Dhabi
          </p>
          <p style={{ textAlign: "center", color: "#ffffff" }}>
            On 23rd to 24th Febuary 2026, Open Home Properties invites you to an
            exclusive Open Day event in collaboration with Ohana. Join us at
            Ohana Sales Center - Landmark Tower, Abu Dhabi, for a unique
            opportunity to explore some of Abu Dhabi’s most
            <b style={{ fontSize: "26px", fontWeight: "600" }}>
              &nbsp; Exclusive branded &nbsp;
            </b>
            real estate offerings
          </p>

          <button
            onClick={handleClickOpen}
            className=" dark:bg-[#2a4a6c] text-[#e2cf9b] px-8 py-4 rounded uppercase tracking-wider font-sans font-semibold hover:bg-[#001340]/90 dark:hover:bg-[#2a4a6c]/90 transition-colors relative z-20"
          >
            {"One Day, Unlimited Opportunities"}
          </button>
          <br />
          <br />

          <p>
            Explore ohana's most in-demand projects with exclusive offers
            curated by ohana to help you secure the right property with
            confidence
          </p>

          {/* <h3 className="DiscoverMore"> One Day, Unlimited Opportunities</h3> */}

          <div className="arrow_container">
            {/* <RiArrowDownDoubleFill className={"arrow"} />  */}
          </div>
        </div>

        {/* <h2>
          Be Part of <br /> Whats Next
        </h2> */}
        <div className="Heading2">
          {/* <p>
            Explore ohana's most in-demand projects with exclusive offers
            curated by ohana to help you secure the right property with
            confidence
          </p> */}
        </div>
        <div className="formContainer">
          {/* <ContactForm1 /> */}

          <PropertySearchFormFour
            formName="open-day"
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
            thankYouPath="/open-day/thank-you"
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
          formName="open-day"
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
          thankYouPath="/open-day/thank-you"
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
    </>
  );
};

export default OhanaHeader;
