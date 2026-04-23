"use client";

import Header from "./BaynByOra/Header";
import OneResidencesHero from "./BaynByOra/OneResidencesHero";
import WaterfrontLiving from "./BaynByOra/WaterfrontLiving";
import EnlightenmentSection from "./BaynByOra/EnlightenmentSection";
import WindowToWonder from "./BaynByOra/WindowToWonder";
import HotelStyleLiving from "./BaynByOra/HotelStyleLiving";
import InteriorCarousel from "./BaynByOra/InteriorCarousel";
import DiscoverSection from "./BaynByOra/DiscoverSection";
import CareAndGrace from "./BaynByOra/CareAndGrace";
import DreamsAndDesign from "./BaynByOra/DreamsAndDesign";
import Footer from "./BaynByOra/Footer";
import HeroKeywords from "./BaynByOra/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./BaynByOra/PaymentOptions";
import PaymentOptionsTwo from "./BaynByOra/PaymentOptionsTwo";
import { useEffect } from "react";
import { pushToDataLayer } from "@/utils/gtag";
import BottomFooter from "./common/BottomFooter";

export default function BaynByOraPage() {
  useEffect(() => {
    pushToDataLayer({
      event: "page_view",
      label: "Bayn By Ora Page",
      value: "Bayn By Ora Page View",
    });
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="bayn-by-ora"
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
            requiredFields={["firstName", "lastName", "phoneNumber","email"]}
            viewType="banner"
            redirectToThankYou={true}
            thankYouPath="/bayn-by-ora/thank-you"
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
        <BottomFooter developerName="Ora" />
      </div>
    </div>
  );
}
