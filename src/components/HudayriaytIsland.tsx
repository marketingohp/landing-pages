"use client";

import Header from "./HudayriyatIsland/Header";
import OneResidencesHero from "./HudayriyatIsland/OneResidencesHero";
import WaterfrontLiving from "./HudayriyatIsland/WaterfrontLiving";
import EnlightenmentSection from "./HudayriyatIsland/EnlightenmentSection";
import WindowToWonder from "./HudayriyatIsland/WindowToWonder";
import HotelStyleLiving from "./HudayriyatIsland/HotelStyleLiving";
import InteriorCarousel from "./HudayriyatIsland/InteriorCarousel";
import DiscoverSection from "./HudayriyatIsland/DiscoverSection";
import CareAndGrace from "./HudayriyatIsland/CareAndGrace";
import DreamsAndDesign from "./HudayriyatIsland/DreamsAndDesign";
import Footer from "./HudayriyatIsland/Footer";
import HeroKeywords from "./HudayriyatIsland/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./HudayriyatIsland/PaymentOptions";
import PaymentOptionsTwo from "./HudayriyatIsland/PaymentOptionsTwo";
import BottomFooter from "./common/BottomFooter";

export default function HudayriyatIslandPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="hudayriyat-island"
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
            thankYouPath="/hudayriyat-island/thank-you"
            colorCodeOne="#04352b"
            colorCodeTwo="#0f1f2e"
            colorCodeThree="#04352b"
            colorCodeBtnBg="#04352b"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#04352b"
            colorCodeBtnHoverBg="#04352b"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#04352b"
          />
        </div>
        {/* <OneResidencesHero /> */}
      </div>
      <WaterfrontLiving />
      {/* <EnlightenmentSection />  */}
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
