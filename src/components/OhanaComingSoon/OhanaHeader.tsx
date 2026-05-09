import React, { useEffect, useRef, useState } from "react";
import PropertySearchForm from "../common/PropertySearchForm";
import OhanaTimer from "./OhanaTimer";
//const video = "/video/ohana.mp4";
const video =
  "https://cdn.prod.website-files.com/6953e1cc8ce6f26a3cb13814/6953e1cc8ce6f26a3cb138d3_smoke-colors-bg_loop_mp4.mp4";
const OhanaHeader = () => {
  const [open, setOpen] = React.useState(false);
  const [amenitiesModalOpen, setAmenitiesModalOpen] = useState(false);
  const [selectedAmenityIndex, setSelectedAmenityIndex] = useState(0);
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

        <video
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
        </video>
        <div className="HeaderContent">
          <img
            src="https://cdn.prod.website-files.com/6953e1cc8ce6f26a3cb13814/6953e1cc8ce6f26a3cb138c3_Ohana-logo.svg"
            height={140}
            width={200}
            alt="ohana"
            style={{ margin: "auto" }}
          />
          <div className="HeaderContent1">
            <h2>
              Branded Residences <br />
              Comming Soon
            </h2>

            <p style={{ color: "white" }}>EOI now open</p>
            <p>Yas Canal, Abu Dhabi</p>
          </div>
          <OhanaTimer />
        </div>
      </div>

      <div className="Header2">
        <div className="detailText">
          <p style={{ textAlign: "center", color: "#ffffff" }}>
            A new waterfront destination is taking shape on Yas Canal.
            Surrounded by world-class leisure, sport, and cultural landmarks,
            where living well becomes the ultimate expression of luxury.
          </p>
          <h3 className="DiscoverMore"> Discover More </h3>

          {/* <button
              onClick={handleClickOpen}
              className="bg-[#001340] dark:bg-[#2a4a6c] text-white px-8 py-4 rounded uppercase tracking-wider font-sans font-semibold hover:bg-[#001340]/90 dark:hover:bg-[#2a4a6c]/90 transition-colors relative z-20"
            >
              {"Discover More"}
            </button> */}

          <div className="arrow_container">
            {/* <RiArrowDownDoubleFill className={"arrow"} />  */}
          </div>
        </div>

        <h2>
          Be Part of <br /> Whats Next
        </h2>
        <div className="Heading2">
          <p>
            Register to be among the first to receive exclusive updates about
            <br /> the
            <span style={{ fontSize: "20px" }}>Branded Residences by</span>
            <span style={{ fontSize: "20px" }}> Ohana Development.</span>
          </p>
        </div>
        <div className="formContainer">
          {/* <ContactForm1 /> */}

          <PropertySearchForm
            formName="ohana-coming-soon"
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
            thankYouPath="/ohana/thank-you"
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
    </>
  );
};

export default OhanaHeader;
