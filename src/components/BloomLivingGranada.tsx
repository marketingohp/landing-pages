"use client";

import Header from "./BloomLivingGranada/Header";
import OneResidencesHero from "./BloomLivingGranada/OneResidencesHero";
import WaterfrontLiving from "./BloomLivingGranada/WaterfrontLiving";
import EnlightenmentSection from "./BloomLivingGranada/EnlightenmentSection";
import WindowToWonder from "./BloomLivingGranada/WindowToWonder";
import HotelStyleLiving from "./BloomLivingGranada/HotelStyleLiving";
import InteriorCarousel from "./BloomLivingGranada/InteriorCarousel";
import DiscoverSection from "./BloomLivingGranada/DiscoverSection";
import CareAndGrace from "./BloomLivingGranada/CareAndGrace";
import DreamsAndDesign from "./BloomLivingGranada/DreamsAndDesign";
import Footer from "./BloomLivingGranada/Footer";
import HeroKeywords from "./BloomLivingGranada/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./BloomLivingGranada/PaymentOptions";
import PaymentOptionsTwo from "./BloomLivingGranada/PaymentOptionsTwo";
import { useEffect } from "react";
import { pushToDataLayer } from "@/utils/gtag";
import BottomFooter from "./common/BottomFooter";

export default function BloomLivingGranada() {
  useEffect(() => {
    pushToDataLayer({
      event: "page_view",
      label: "Bloom Living Granada Page",
      value: "Bloom Living Granada Page View",
    });
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="bloom-living-granada"
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
            thankYouPath="/bloom-living-granada/thank-you"
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
        <BottomFooter developerName="Bloom Properties" />
      </div>
    </div>
  );
}
