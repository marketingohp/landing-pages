"use client";

import Header from "./RotanaResidencesAlReem/Header";
import OneResidencesHero from "./RotanaResidencesAlReem/OneResidencesHero";
import WaterfrontLiving from "./RotanaResidencesAlReem/WaterfrontLiving";
import EnlightenmentSection from "./RotanaResidencesAlReem/EnlightenmentSection";
import WindowToWonder from "./RotanaResidencesAlReem/WindowToWonder";
import HotelStyleLiving from "./RotanaResidencesAlReem/HotelStyleLiving";
import InteriorCarousel from "./RotanaResidencesAlReem/InteriorCarousel";
import DiscoverSection from "./RotanaResidencesAlReem/DiscoverSection";
import CareAndGrace from "./RotanaResidencesAlReem/CareAndGrace";
import DreamsAndDesign from "./RotanaResidencesAlReem/DreamsAndDesign";
import Footer from "./RotanaResidencesAlReem/Footer";
import HeroKeywords from "./RotanaResidencesAlReem/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./RotanaResidencesAlReem/PaymentOptions";
import PaymentOptionsTwo from "./RotanaResidencesAlReem/PaymentOptionsTwo";
import BottomFooter from "./common/BottomFooter";

export default function RotanaResidencesAlReemPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="rotana-residences-at-al-reem-island"
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
            thankYouPath="/rotana-residences-at-al-reem-island/thank-you"
            colorCodeOne="#213b65"
            colorCodeTwo="#213b65"
            colorCodeThree="#213b65"
            colorCodeBtnBg="#213b65"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#213b65"
            colorCodeBtnHoverBg="#213b65"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#213b65"
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
        <BottomFooter developerName="Royal Development Holding" />
      </div>
    </div>
  );
}
