"use client";

import Header from "./WadeeM/Header";
import OneResidencesHero from "./WadeeM/OneResidencesHero";
import WaterfrontLiving from "./WadeeM/WaterfrontLiving";
import EnlightenmentSection from "./WadeeM/EnlightenmentSection";
import WindowToWonder from "./WadeeM/WindowToWonder";
import HotelStyleLiving from "./WadeeM/HotelStyleLiving";
import InteriorCarousel from "./WadeeM/InteriorCarousel";
import DiscoverSection from "./WadeeM/DiscoverSection";
import CareAndGrace from "./WadeeM/CareAndGrace";
import DreamsAndDesign from "./WadeeM/DreamsAndDesign";
import Footer from "./WadeeM/Footer";
import HeroKeywords from "./WadeeM/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./WadeeM/PaymentOptions";
import PaymentOptionsTwo from "./WadeeM/PaymentOptionsTwo";
import BottomFooter from "./common/BottomFooter";

export default function WadeemPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="wadeem"
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
            thankYouPath="/wadeem/thank-you"
            colorCodeOne="#475e4c"
            colorCodeTwo="#0f1f2e"
            colorCodeThree="#475e4c"
            colorCodeBtnBg="#475e4c"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#475e4c"
            colorCodeBtnHoverBg="#475e4c"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#475e4c"
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
        <BottomFooter developerName="Modon" />
      </div>
    </div>
  );
}
