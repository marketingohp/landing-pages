"use client";

import Header from "./TheWildsResidences/Header";
import OneResidencesHero from "./TheWildsResidences/OneResidencesHero";
import WaterfrontLiving from "./TheWildsResidences/WaterfrontLiving";
import EnlightenmentSection from "./TheWildsResidences/EnlightenmentSection";
import WindowToWonder from "./TheWildsResidences/WindowToWonder";
import HotelStyleLiving from "./TheWildsResidences/HotelStyleLiving";
import InteriorCarousel from "./TheWildsResidences/InteriorCarousel";
import DiscoverSection from "./TheWildsResidences/DiscoverSection";
import CareAndGrace from "./TheWildsResidences/CareAndGrace";
import DreamsAndDesign from "./TheWildsResidences/DreamsAndDesign";
import Footer from "./TheWildsResidences/Footer";
import HeroKeywords from "./TheWildsResidences/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./TheWildsResidences/PaymentOptions";
import PaymentOptionsTwo from "./TheWildsResidences/PaymentOptionsTwo";
import PropertySearchFormThree from "./common/PropertySearchFormThree";
import BottomFooter from "./common/BottomFooter";

export default function TheWildsResidencesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchFormThree
            formName="the-wilds-residences"
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
            thankYouPath="/the-wilds-residences/thank-you"
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
