"use client";

import { pushToDataLayer } from "@/utils/gtag";
import { useEffect } from "react";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";
import CareAndGrace from "./RadiantBridgesByRadiant/CareAndGrace";
import DiscoverSection from "./RadiantBridgesByRadiant/DiscoverSection";
import EnlightenmentSection from "./RadiantBridgesByRadiant/EnlightenmentSection";
import Footer from "./RadiantBridgesByRadiant/Footer";
import Header from "./RadiantBridgesByRadiant/Header";
import HeroKeywords from "./RadiantBridgesByRadiant/HeroKeywords";
import InteriorCarousel from "./RadiantBridgesByRadiant/InteriorCarousel";
import WaterfrontLiving from "./RadiantBridgesByRadiant/WaterfrontLiving";

export default function WimbledonBridgeHouseByAldar() {
  useEffect(() => {
    pushToDataLayer({
      event: "page_view",
      label: "Radiant Bridges By Radiant Page",
      value: "Radiant Bridges By Radiant Page View",
    });
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="radiant-bridges-by-radiant"
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
            thankYouPath="/radiant-bridges-by-radiant/thank-you"
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
