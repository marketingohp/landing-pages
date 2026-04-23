"use client";

import Header from "./OneResidences/Header";
import OneResidencesHero from "./OneResidences/OneResidencesHero";
import WaterfrontLiving from "./OneResidences/WaterfrontLiving";
import EnlightenmentSection from "./OneResidences/EnlightenmentSection";
import WindowToWonder from "./OneResidences/WindowToWonder";
import HotelStyleLiving from "./OneResidences/HotelStyleLiving";
import InteriorCarousel from "./OneResidences/InteriorCarousel";
import DiscoverSection from "./OneResidences/DiscoverSection";
import CareAndGrace from "./OneResidences/CareAndGrace";
import DreamsAndDesign from "./OneResidences/DreamsAndDesign";
import Footer from "./OneResidences/Footer";
import HeroKeywords from "./OneResidences/HeroKeywords";
import PropertySearchForm from "../components/common/PropertySearchForm";
import PaymentOptions from "./OneResidences/PaymentOptions";
import PaymentOptionsTwo from "./OneResidences/PaymentOptionsTwo";
import { useEffect } from "react";
import { pushToDataLayer } from "@/utils/gtag";
import BottomFooter from "./common/BottomFooter";
export default function OneResidencesPage() {
  useEffect(() => {
    pushToDataLayer({
      event: "page_view",
      label: "One Residences Page",
      value: "One Residences Page View",
    });
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />

        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="one-residences"
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
          />
        </div>
        {/* <OneResidencesHero /> */}
      </div>
      <WaterfrontLiving />
      {/* <EnlightenmentSection />  */}
      {/* <WindowToWonder />  */}
      <HotelStyleLiving />
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
        <BottomFooter developerName="One Residences" />
      </div>
    </div>
  );
}
