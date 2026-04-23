"use client";

import Header from "./BabAlQasr28/Header";
import OneResidencesHero from "./BabAlQasr28/OneResidencesHero";
import WaterfrontLiving from "./BabAlQasr28/WaterfrontLiving";
import EnlightenmentSection from "./BabAlQasr28/EnlightenmentSection";
import WindowToWonder from "./BabAlQasr28/WindowToWonder";
import HotelStyleLiving from "./BabAlQasr28/HotelStyleLiving";
import InteriorCarousel from "./BabAlQasr28/InteriorCarousel";
import DiscoverSection from "./BabAlQasr28/DiscoverSection";
import CareAndGrace from "./BabAlQasr28/CareAndGrace";
import DreamsAndDesign from "./BabAlQasr28/DreamsAndDesign";
import Footer from "./BabAlQasr28/Footer";
import HeroKeywords from "./BabAlQasr28/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./BabAlQasr28/PaymentOptions";
import PaymentOptionsTwo from "./BabAlQasr28/PaymentOptionsTwo";
import BottomFooter from "./common/BottomFooter";

export default function BabAlQasr28Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="bab-al-qasr-royal-28"
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
            thankYouPath="/bab-al-qasr-royal-28/thank-you"
            colorCodeOne="#ebe8dd"
            colorCodeTwo="#6c492b"
            colorCodeThree="#6c492b"
            colorCodeBtnBg="#6c492b"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#6c492b"
            colorCodeBtnHoverBg="#6c492b"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#6c492b"
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
        <BottomFooter developerName="Burtville" />
      </div>
    </div>
  );
}
