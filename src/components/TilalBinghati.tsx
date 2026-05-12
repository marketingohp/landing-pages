"use client";

import Header from "./TilalBinghati/Header";
import OneResidencesHero from "./TilalBinghati/OneResidencesHero";
import WaterfrontLiving from "./TilalBinghati/WaterfrontLiving";
import EnlightenmentSection from "./TilalBinghati/EnlightenmentSection";
import WindowToWonder from "./TilalBinghati/WindowToWonder";
import HotelStyleLiving from "./TilalBinghati/HotelStyleLiving";
import InteriorCarousel from "./TilalBinghati/InteriorCarousel";
import DiscoverSection from "./TilalBinghati/DiscoverSection";
import CareAndGrace from "./TilalBinghati/CareAndGrace";
import DreamsAndDesign from "./TilalBinghati/DreamsAndDesign";
import Footer from "./TilalBinghati/Footer";
import HeroKeywords from "./TilalBinghati/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./TilalBinghati/PaymentOptions";
import PaymentOptionsTwo from "./TilalBinghati/PaymentOptionsTwo";
import { useEffect } from "react";
import { pushToDataLayer } from "@/utils/gtag";
import BottomFooter from "./common/BottomFooter";

export default function TilalBinghati() {
  useEffect(() => {
    pushToDataLayer({
      event: "page_view",
      label: "Tilal Binghatti Page",
      value: "Tilal Binghatti Page View",
    });
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="tilal-binghatti"
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
            thankYouPath="/tilal-binghatti/thank-you"
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
        <BottomFooter developerName="Binghatti" />
      </div>
    </div>
  );
}
