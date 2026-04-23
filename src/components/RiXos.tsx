"use client";

import Header from "./RiXos/Header";
import OneResidencesHero from "./RiXos/OneResidencesHero";
import WaterfrontLiving from "./RiXos/WaterfrontLiving";
import EnlightenmentSection from "./RiXos/EnlightenmentSection";
import WindowToWonder from "./RiXos/WindowToWonder";
import HotelStyleLiving from "./RiXos/HotelStyleLiving";
import InteriorCarousel from "./RiXos/InteriorCarousel";
import DiscoverSection from "./RiXos/DiscoverSection";
import CareAndGrace from "./RiXos/CareAndGrace";
import DreamsAndDesign from "./RiXos/DreamsAndDesign";
import Footer from "./RiXos/Footer";
import HeroKeywords from "./RiXos/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./RiXos/PaymentOptions";
import PaymentOptionsTwo from "./RiXos/PaymentOptionsTwo";
import BottomFooter from "./common/BottomFooter";

export default function RixosPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="rixos"
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
            thankYouPath="/rixos/thank-you"
            colorCodeOne="#5b4b3b"
            colorCodeTwo="#0f1f2e"
            colorCodeThree="#5b4b3b"
            colorCodeBtnBg="#5b4b3b"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#5b4b3b"
            colorCodeBtnHoverBg="#5b4b3b"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#5b4b3b"
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
        <BottomFooter developerName="East & West Property Development" />
      </div>
    </div>
  );
}
