"use client";

import Header from "./JoudResidenceByOneDevelopment/Header";
import OneResidencesHero from "./JoudResidenceByOneDevelopment/OneResidencesHero";
import WaterfrontLiving from "./JoudResidenceByOneDevelopment/WaterfrontLiving";
import EnlightenmentSection from "./JoudResidenceByOneDevelopment/EnlightenmentSection";
import WindowToWonder from "./JoudResidenceByOneDevelopment/WindowToWonder";
import HotelStyleLiving from "./JoudResidenceByOneDevelopment/HotelStyleLiving";
import InteriorCarousel from "./JoudResidenceByOneDevelopment/InteriorCarousel";
import DiscoverSection from "./JoudResidenceByOneDevelopment/DiscoverSection";
import CareAndGrace from "./JoudResidenceByOneDevelopment/CareAndGrace";
import DreamsAndDesign from "./JoudResidenceByOneDevelopment/DreamsAndDesign";
import Footer from "./JoudResidenceByOneDevelopment/Footer";
import HeroKeywords from "./JoudResidenceByOneDevelopment/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./JoudResidenceByOneDevelopment/PaymentOptions";
import PaymentOptionsTwo from "./JoudResidenceByOneDevelopment/PaymentOptionsTwo";
import { useEffect } from "react";
import { pushToDataLayer } from "@/utils/gtag";
import BottomFooter from "./common/BottomFooter";

export default function JoudResidenceByOneDevelopment() {
  useEffect(() => {
    pushToDataLayer({
      event: "page_view",
      label: "Joud Residence By One Development Page",
      value: "Joud Residence By One Development Page View",
    });
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="joud-residence-by-one-development"
            pointName="get-in-touch"
            formType="banner-form"
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
            thankYouPath="/joud-residence-by-one-development/thank-you"
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
        </div>
        {/* <OneResidencesHero /> */}
      </div>
      <WaterfrontLiving />
      <EnlightenmentSection />
      {/* <WindowToWonder /> */}
      {/* <HotelStyleLiving />  */}
      {/* <div id="gallery">
        <InteriorCarousel />
      </div> */}
      <div id="location">
        <DiscoverSection />
      </div>
      <div id="amenities">
        <CareAndGrace />
      </div>
      {/* <DreamsAndDesign />  */}
      {/* <div id="payment-options">
        <PaymentOptions />
      </div> */}
      <div id="payment-options-two">
        <PaymentOptionsTwo />
      </div>
      <div id="contact-us">
        <Footer />
      </div>
      <div className="bottom-footer">
        <BottomFooter developerName="One Development" />
      </div>
    </div>
  );
}
