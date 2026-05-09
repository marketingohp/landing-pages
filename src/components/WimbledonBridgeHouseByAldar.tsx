"use client";

import { pushToDataLayer } from "@/utils/gtag";
import { useEffect } from "react";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";
import CareAndGrace from "./WimbledonBridgeHouseByAldar/CareAndGrace";
import DiscoverSection from "./WimbledonBridgeHouseByAldar/DiscoverSection";
import EnlightenmentSection from "./WimbledonBridgeHouseByAldar/EnlightenmentSection";
import Footer from "./WimbledonBridgeHouseByAldar/Footer";
import Header from "./WimbledonBridgeHouseByAldar/Header";
import HeroKeywords from "./WimbledonBridgeHouseByAldar/HeroKeywords";
import InteriorCarousel from "./WimbledonBridgeHouseByAldar/InteriorCarousel";
import PaymentOptionsTwo from "./WimbledonBridgeHouseByAldar/PaymentOptionsTwo";
import WaterfrontLiving from "./WimbledonBridgeHouseByAldar/WaterfrontLiving";

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
