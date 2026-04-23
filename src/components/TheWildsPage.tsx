"use client";

import Header from "./TheWilds/Header";
import OneResidencesHero from "./TheWilds/OneResidencesHero";
import WaterfrontLiving from "./TheWilds/WaterfrontLiving";
import EnlightenmentSection from "./TheWilds/EnlightenmentSection";
import WindowToWonder from "./TheWilds/WindowToWonder";
import HotelStyleLiving from "./TheWilds/HotelStyleLiving";
import InteriorCarousel from "./TheWilds/InteriorCarousel";
import DiscoverSection from "./TheWilds/DiscoverSection";
import CareAndGrace from "./TheWilds/CareAndGrace";
import DreamsAndDesign from "./TheWilds/DreamsAndDesign";
import Footer from "./TheWilds/Footer";
import HeroKeywords from "./TheWilds/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./TheWilds/PaymentOptions";
import PaymentOptionsTwo from "./TheWilds/PaymentOptionsTwo";
import PropertySearchFormThree from "./common/PropertySearchFormThree";
import BottomFooter from "./common/BottomFooter";

export default function TheWildsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchFormThree
            formName="thewilds-aldar"
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
            thankYouPath="/thewilds-aldar/thank-you"
            colorCodeOne="#ebe8dd"
            colorCodeTwo="#766c0d"
            colorCodeThree="#766c0d"
            colorCodeBtnBg="#766c0d"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#766c0d"
            colorCodeBtnHoverBg="#766c0d"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#766c0d"
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
        <BottomFooter developerName="Aldar Properties" />
      </div>
    </div>
  );
}
