"use client";

import { pushToDataLayer } from "@/utils/gtag";
import { useEffect } from "react";
import CareAndGrace from "./BaynByOra/CareAndGrace";
import DiscoverSection from "./BaynByOra/DiscoverSection";
import EnlightenmentSection from "./BaynByOra/EnlightenmentSection";
import Footer from "./BaynByOra/Footer";
import Header from "./BaynByOra/Header";
import HeroKeywords from "./BaynByOra/HeroKeywords";
import InteriorCarousel from "./BaynByOra/InteriorCarousel";
import PaymentOptionsTwo from "./BaynByOra/PaymentOptionsTwo";
import WaterfrontLiving from "./BaynByOra/WaterfrontLiving";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";

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
            requiredFields={["firstName", "lastName", "phoneNumber", "email"]}
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
