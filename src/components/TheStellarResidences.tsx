"use client";

import Header from "./TheStellarResidences/Header";
import OneResidencesHero from "./TheStellarResidences/OneResidencesHero";
import WaterfrontLiving from "./TheStellarResidences/WaterfrontLiving";
import EnlightenmentSection from "./TheStellarResidences/EnlightenmentSection";
import WindowToWonder from "./TheStellarResidences/WindowToWonder";
import HotelStyleLiving from "./TheStellarResidences/HotelStyleLiving";
import InteriorCarousel from "./TheStellarResidences/InteriorCarousel";
import DiscoverSection from "./TheStellarResidences/DiscoverSection";
import CareAndGrace from "./TheStellarResidences/CareAndGrace";
import DreamsAndDesign from "./TheStellarResidences/DreamsAndDesign";
import Footer from "./TheStellarResidences/Footer";
import HeroKeywords from "./TheStellarResidences/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./TheStellarResidences/PaymentOptions";
import PaymentOptionsTwo from "./TheStellarResidences/PaymentOptionsTwo";
import { useEffect } from "react";
import { pushToDataLayer } from "@/utils/gtag";
import BottomFooter from "./common/BottomFooter";

export default function TheStellarResidences() {
  useEffect(() => {
    pushToDataLayer({
      event: "page_view",
      label: "The Stellar Residneces By Emirates Developments Page",
      value: "The Stellar Residneces By Emirates Developments Page View",
    });
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="the-stellar-residences"
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
            thankYouPath="/the-stellar-residences/thank-you"
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
      <div id="gallery">
        <InteriorCarousel />
      </div>
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
        <BottomFooter developerName="Emirates Development" />
      </div>
    </div>
  );
}
