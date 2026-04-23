"use client";

import Header from "./FahidBeachHouseByAldar/Header";
import OneResidencesHero from "./FahidBeachHouseByAldar/OneResidencesHero";
import WaterfrontLiving from "./FahidBeachHouseByAldar/WaterfrontLiving";
import EnlightenmentSection from "./FahidBeachHouseByAldar/EnlightenmentSection";
import WindowToWonder from "./FahidBeachHouseByAldar/WindowToWonder";
import HotelStyleLiving from "./FahidBeachHouseByAldar/HotelStyleLiving";
import InteriorCarousel from "./FahidBeachHouseByAldar/InteriorCarousel";
import DiscoverSection from "./FahidBeachHouseByAldar/DiscoverSection";
import CareAndGrace from "./FahidBeachHouseByAldar/CareAndGrace";
import DreamsAndDesign from "./FahidBeachHouseByAldar/DreamsAndDesign";
import Footer from "./FahidBeachHouseByAldar/Footer";
import HeroKeywords from "./FahidBeachHouseByAldar/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./FahidBeachHouseByAldar/PaymentOptions";
import PaymentOptionsTwo from "./FahidBeachHouseByAldar/PaymentOptionsTwo";
import { useEffect } from "react";
import { pushToDataLayer } from "@/utils/gtag";
import BottomFooter from "./common/BottomFooter";

export default function WimbledonBridgeHouseByAldar() {
  useEffect(() => {
    pushToDataLayer({
      event: "page_view",
      label: "Fahid Beach House By Aldar Page",
      value: "Fahid Beach House By Aldar Page View",
    });
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="fahid-beach-house-by-aldar"
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
            thankYouPath="/fahid-beach-house-by-aldar/thank-you"
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
