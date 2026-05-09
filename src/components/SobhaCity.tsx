"use client";

import { pushToDataLayer } from "@/utils/gtag";
import { useEffect } from "react";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";
import CareAndGrace from "./SobhaCity/CareAndGrace";
import DiscoverSection from "./SobhaCity/DiscoverSection";
import EnlightenmentSection from "./SobhaCity/EnlightenmentSection";
import Footer from "./SobhaCity/Footer";
import Header from "./SobhaCity/Header";
import HeroKeywords from "./SobhaCity/HeroKeywords";
import InteriorCarousel from "./SobhaCity/InteriorCarousel";
import PaymentOptionsTwo from "./SobhaCity/PaymentOptionsTwo";
import WaterfrontLiving from "./SobhaCity/WaterfrontLiving";

export default function WimbledonBridgeHouseByAldar() {
  useEffect(() => {
    pushToDataLayer({
      event: "page_view",
      label: "Sobha City Page",
      value: "Sobha City Page View",
    });
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="sobha-city"
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
            thankYouPath="/sobha-city/thank-you"
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
        <BottomFooter developerName="Sobha Reality" />
      </div>
    </div>
  );
}
