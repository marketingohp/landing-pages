"use client";

import Header from "./FayHills/Header";
import OneResidencesHero from "./FayHills/OneResidencesHero";
import WaterfrontLiving from "./FayHills/WaterfrontLiving";
import EnlightenmentSection from "./FayHills/EnlightenmentSection";
import WindowToWonder from "./FayHills/WindowToWonder";
import HotelStyleLiving from "./FayHills/HotelStyleLiving";
import InteriorCarousel from "./FayHills/InteriorCarousel";
import DiscoverSection from "./FayHills/DiscoverSection";
import CareAndGrace from "./FayHills/CareAndGrace";
import DreamsAndDesign from "./FayHills/DreamsAndDesign";
import Footer from "./FayHills/Footer";
import HeroKeywords from "./FayHills/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./FayHills/PaymentOptions";
import PaymentOptionsTwo from "./FayHills/PaymentOptionsTwo";
import BottomFooter from "./common/BottomFooter";

export default function FayHillsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="fay-hills"
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
            thankYouPath="/fay-hills/thank-you"
            colorCodeOne="#5f602c"
            colorCodeTwo="#0f1f2e"
            colorCodeThree="#5f602c"
            colorCodeBtnBg="#5f602c"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#5f602c"
            colorCodeBtnHoverBg="#5f602c"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#5f602c"
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
    </div>
  );
}
