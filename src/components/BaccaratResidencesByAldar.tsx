"use client";

import Header from "./BaccaratResidencesByAldar/Header";
import OneResidencesHero from "./BaccaratResidencesByAldar/OneResidencesHero";
import WaterfrontLiving from "./BaccaratResidencesByAldar/WaterfrontLiving";
import EnlightenmentSection from "./BaccaratResidencesByAldar/EnlightenmentSection";
import WindowToWonder from "./BaccaratResidencesByAldar/WindowToWonder";
import HotelStyleLiving from "./BaccaratResidencesByAldar/HotelStyleLiving";
import InteriorCarousel from "./BaccaratResidencesByAldar/InteriorCarousel";
import DiscoverSection from "./BaccaratResidencesByAldar/DiscoverSection";
import CareAndGrace from "./BaccaratResidencesByAldar/CareAndGrace";
import DreamsAndDesign from "./BaccaratResidencesByAldar/DreamsAndDesign";
import Footer from "./BaccaratResidencesByAldar/Footer";
import HeroKeywords from "./BaccaratResidencesByAldar/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./BaccaratResidencesByAldar/PaymentOptions";
import PaymentOptionsTwo from "./BaccaratResidencesByAldar/PaymentOptionsTwo";
import { useEffect } from "react";
import { pushToDataLayer } from "@/utils/gtag";
import BottomFooter from "./common/BottomFooter";

export default function BaccaratResidencesByAldar() {
  useEffect(() => {
    pushToDataLayer({
      event: "page_view",
      label: "Baccarat By Aldar Page",
      value: "Baccarat By Aldar Page View",
    });
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="baccarat-residences-by-aldar"
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
            thankYouPath="/baccarat-residences-by-aldar/thank-you"
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
      </div>
      <WaterfrontLiving />
      <EnlightenmentSection />
      <div id="gallery">
        <InteriorCarousel />
      </div>
      <div id="location">
        <DiscoverSection />
      </div>
      <div id="amenities">
        <CareAndGrace />
      </div>
      {/* <div id="payment-options-two">
        <PaymentOptionsTwo />
      </div> */}
      <div id="contact-us">
        <Footer />
      </div>
      <div className="bottom-footer">
        <BottomFooter developerName="Aldar" />
      </div>
    </div>
  );
}
