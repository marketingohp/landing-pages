"use client";

import Header from "./WimbledonBridgeHouseByAldar/Header";
import OneResidencesHero from "./WimbledonBridgeHouseByAldar/OneResidencesHero";
import WaterfrontLiving from "./WimbledonBridgeHouseByAldar/WaterfrontLiving";
import EnlightenmentSection from "./WimbledonBridgeHouseByAldar/EnlightenmentSection";
import WindowToWonder from "./WimbledonBridgeHouseByAldar/WindowToWonder";
import HotelStyleLiving from "./WimbledonBridgeHouseByAldar/HotelStyleLiving";
import InteriorCarousel from "./WimbledonBridgeHouseByAldar/InteriorCarousel";
import DiscoverSection from "./WimbledonBridgeHouseByAldar/DiscoverSection";
import CareAndGrace from "./WimbledonBridgeHouseByAldar/CareAndGrace";
import DreamsAndDesign from "./WimbledonBridgeHouseByAldar/DreamsAndDesign";
import Footer from "./WimbledonBridgeHouseByAldar/Footer";
import HeroKeywords from "./WimbledonBridgeHouseByAldar/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./WimbledonBridgeHouseByAldar/PaymentOptions";
import PaymentOptionsTwo from "./WimbledonBridgeHouseByAldar/PaymentOptionsTwo";
import { useEffect } from "react";
import { pushToDataLayer } from "@/utils/gtag";
import BottomFooter from "./common/BottomFooter";

export default function WimbledonBridgeHouseByAldar() {
  useEffect(() => {
    pushToDataLayer({
      event: "page_view",
      label: "Wimbledon Bridge House Page",
      value: "Wimbledon Bridge House Page View",
    });
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="wimbledon-bridge-house-by-aldar"
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
            thankYouPath="/wimbledon-bridge-house-by-aldar/thank-you"
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
        <BottomFooter developerName="Aldar" />
      </div>
    </div>
  );
}
