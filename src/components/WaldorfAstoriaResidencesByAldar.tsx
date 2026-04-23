"use client";

import Header from "./WaldorfAstoriaResidencesByAldar/Header";
import OneResidencesHero from "./WaldorfAstoriaResidencesByAldar/OneResidencesHero";
import WaterfrontLiving from "./WaldorfAstoriaResidencesByAldar/WaterfrontLiving";
import EnlightenmentSection from "./WaldorfAstoriaResidencesByAldar/EnlightenmentSection";
import WindowToWonder from "./WaldorfAstoriaResidencesByAldar/WindowToWonder";
import HotelStyleLiving from "./WaldorfAstoriaResidencesByAldar/HotelStyleLiving";
import InteriorCarousel from "./WaldorfAstoriaResidencesByAldar/InteriorCarousel";
import DiscoverSection from "./WaldorfAstoriaResidencesByAldar/DiscoverSection";
import CareAndGrace from "./WaldorfAstoriaResidencesByAldar/CareAndGrace";
import DreamsAndDesign from "./WaldorfAstoriaResidencesByAldar/DreamsAndDesign";
import Footer from "./WaldorfAstoriaResidencesByAldar/Footer";
import HeroKeywords from "./WaldorfAstoriaResidencesByAldar/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./WaldorfAstoriaResidencesByAldar/PaymentOptions";
import PaymentOptionsTwo from "./WaldorfAstoriaResidencesByAldar/PaymentOptionsTwo";
import { useEffect } from "react";
import { pushToDataLayer } from "@/utils/gtag";
import BottomFooter from "./common/BottomFooter";

export default function WimbledonBridgeHouseByAldar() {
  useEffect(() => {
    pushToDataLayer({
      event: "page_view",
      label: "Waldorf Astoria Residences Page",
      value: "Waldorf Astoria Residences Page View",
    });
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="waldorf-astoria-residences-by-aldar"
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
            thankYouPath="/waldorf-astoria-residences-by-aldar/thank-you"
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
