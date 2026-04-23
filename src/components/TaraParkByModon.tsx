"use client";

import Header from "./TaraParkByModon/Header";
import OneResidencesHero from "./TaraParkByModon/OneResidencesHero";
import WaterfrontLiving from "./TaraParkByModon/WaterfrontLiving";
import EnlightenmentSection from "./TaraParkByModon/EnlightenmentSection";
import WindowToWonder from "./TaraParkByModon/WindowToWonder";
import HotelStyleLiving from "./TaraParkByModon/HotelStyleLiving";
import InteriorCarousel from "./TaraParkByModon/InteriorCarousel";
import DiscoverSection from "./TaraParkByModon/DiscoverSection";
import CareAndGrace from "./TaraParkByModon/CareAndGrace";
import DreamsAndDesign from "./TaraParkByModon/DreamsAndDesign";
import Footer from "./TaraParkByModon/Footer";
import HeroKeywords from "./TaraParkByModon/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./TaraParkByModon/PaymentOptions";
import PaymentOptionsTwo from "./TaraParkByModon/PaymentOptionsTwo";
import { useEffect } from "react";
import { pushToDataLayer } from "@/utils/gtag";
import BottomFooter from "./common/BottomFooter";

export default function TaraBarkByModon() {
  useEffect(() => {
    pushToDataLayer({
      event: "page_view",
      label: "Tara Park By Modon Page",
      value: "Tara Park By Modon Page View",
    });
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="tara-park-by-modon"
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
            thankYouPath="/tara-park-by-modon/thank-you"
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
      <div id="payment-options-two">
        <PaymentOptionsTwo />
      </div>
      <div id="contact-us">
        <Footer />
      </div>
      <div className="bottom-footer">
        <BottomFooter developerName="Modon" />
      </div>
    </div>
  );
}
