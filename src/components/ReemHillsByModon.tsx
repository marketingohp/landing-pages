"use client";

import { pushToDataLayer } from "@/utils/gtag";
import { useEffect } from "react";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";
import CareAndGrace from "./ReemHillsByModon/CareAndGrace";
import DiscoverSection from "./ReemHillsByModon/DiscoverSection";
import EnlightenmentSection from "./ReemHillsByModon/EnlightenmentSection";
import Footer from "./ReemHillsByModon/Footer";
import Header from "./ReemHillsByModon/Header";
import HeroKeywords from "./ReemHillsByModon/HeroKeywords";
import InteriorCarousel from "./ReemHillsByModon/InteriorCarousel";
import PaymentOptionsTwo from "./ReemHillsByModon/PaymentOptionsTwo";
import WaterfrontLiving from "./ReemHillsByModon/WaterfrontLiving";

export default function ReemHillsByModon() {
  useEffect(() => {
    pushToDataLayer({
      event: "page_view",
      label: "Reem Hills By Modon Page",
      value: "Reem Hills By Modon Page View",
    });
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="reem-hills-by-modon"
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
            thankYouPath="/reem-hills-by-modon/thank-you"
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
