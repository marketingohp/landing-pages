"use client";

import Header from "./TheWildsByAldar/Header";
import OneResidencesHero from "./TheWildsByAldar/OneResidencesHero";
import WaterfrontLiving from "./TheWildsByAldar/WaterfrontLiving";
import EnlightenmentSection from "./TheWildsByAldar/EnlightenmentSection";
import WindowToWonder from "./TheWildsByAldar/WindowToWonder";
import HotelStyleLiving from "./TheWildsByAldar/HotelStyleLiving";
import InteriorCarousel from "./TheWildsByAldar/InteriorCarousel";
import DiscoverSection from "./TheWildsByAldar/DiscoverSection";
import CareAndGrace from "./TheWildsByAldar/CareAndGrace";
import DreamsAndDesign from "./TheWildsByAldar/DreamsAndDesign";
import Footer from "./TheWildsByAldar/Footer";
import HeroKeywords from "./TheWildsByAldar/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./TheWildsByAldar/PaymentOptions";
import PaymentOptionsTwo from "./TheWildsByAldar/PaymentOptionsTwo";
import PropertySearchFormThree from "./common/PropertySearchFormThree";
import BottomFooter from "./common/BottomFooter";

export default function TheWildsByAldarPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchFormThree
            formName="the-wilds-by-aldar"
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
            thankYouPath="the-wilds-by-aldar/thank-you"
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
