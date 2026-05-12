"use client";

import Header from "./AlghadeerGardensByAldar/Header";
import OneResidencesHero from "./AlghadeerGardensByAldar/OneResidencesHero";
import WaterfrontLiving from "./AlghadeerGardensByAldar/WaterfrontLiving";
import EnlightenmentSection from "./AlghadeerGardensByAldar/EnlightenmentSection";
import WindowToWonder from "./AlghadeerGardensByAldar/WindowToWonder";
import HotelStyleLiving from "./AlghadeerGardensByAldar/HotelStyleLiving";
import InteriorCarousel from "./AlghadeerGardensByAldar/InteriorCarousel";
import DiscoverSection from "./AlghadeerGardensByAldar/DiscoverSection";
import CareAndGrace from "./AlghadeerGardensByAldar/CareAndGrace";
import DreamsAndDesign from "./AlghadeerGardensByAldar/DreamsAndDesign";
import Footer from "./AlghadeerGardensByAldar/Footer";
import HeroKeywords from "./AlghadeerGardensByAldar/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./AlghadeerGardensByAldar/PaymentOptions";
import PaymentOptionsTwo from "./AlghadeerGardensByAldar/PaymentOptionsTwo";
import { useEffect } from "react";
import { pushToDataLayer } from "@/utils/gtag";
import BottomFooter from "./common/BottomFooter";

export default function AlghadeerGardensByAldar() {
  useEffect(() => {
    pushToDataLayer({
      event: "page_view",
      label: "Aghadeer Gardens By Aldar Page",
      value: "Aghadeer Gardens By Aldar Page View",
    });
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="alghadeer-gardens-by-aldar"
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
            thankYouPath="/alghadeer-gardens-by-aldar/thank-you"
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
