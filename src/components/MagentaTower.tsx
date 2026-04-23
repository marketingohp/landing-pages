"use client";

import Header from "./MagentaTower/Header";
import OneResidencesHero from "./MagentaTower/OneResidencesHero";
import WaterfrontLiving from "./MagentaTower/WaterfrontLiving";
import EnlightenmentSection from "./MagentaTower/EnlightenmentSection";
import WindowToWonder from "./MagentaTower/WindowToWonder";
import HotelStyleLiving from "./MagentaTower/HotelStyleLiving";
import InteriorCarousel from "./MagentaTower/InteriorCarousel";
import DiscoverSection from "./MagentaTower/DiscoverSection";
import CareAndGrace from "./MagentaTower/CareAndGrace";
import DreamsAndDesign from "./MagentaTower/DreamsAndDesign";
import Footer from "./MagentaTower/Footer";
import HeroKeywords from "./MagentaTower/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./MagentaTower/PaymentOptions";
import PaymentOptionsTwo from "./MagentaTower/PaymentOptionsTwo";
import PropertySearchFormThree from "./common/PropertySearchFormThree";
import BottomFooter from "./common/BottomFooter";

export default function MagentaTowerPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchFormThree
            formName="magenta-tower"
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
            thankYouPath="magenta-tower/thank-you"
            colorCodeOne="#ebe8dd"
            colorCodeTwo="#642d5b"
            colorCodeThree="#642d5b"
            colorCodeBtnBg="#642d5b"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#642d5b"
            colorCodeBtnHoverBg="#642d5b"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#642d5b"
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
        <style jsx>{`
          .classAddFooter {
            background-color: #0000003b !important;
          }
        `}</style>
        <Footer />
      </div>
      <div className="bottom-footer">
        <BottomFooter developerName="Aldar Properties" />
      </div>
    </div>
  );
}
