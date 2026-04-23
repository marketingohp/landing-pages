"use client";

import Header from "./OhanaMonchesterYas/Header";
import OneResidencesHero from "./OhanaMonchesterYas/OneResidencesHero";
import WaterfrontLiving from "./OhanaMonchesterYas/WaterfrontLiving";
import EnlightenmentSection from "./OhanaMonchesterYas/EnlightenmentSection";
import WindowToWonder from "./OhanaMonchesterYas/WindowToWonder";
import HotelStyleLiving from "./OhanaMonchesterYas/HotelStyleLiving";
import InteriorCarousel from "./OhanaMonchesterYas/InteriorCarousel";
import DiscoverSection from "./OhanaMonchesterYas/DiscoverSection";
import CareAndGrace from "./OhanaMonchesterYas/CareAndGrace";
import DreamsAndDesign from "./OhanaMonchesterYas/DreamsAndDesign";
import Footer from "./OhanaMonchesterYas/Footer";
import HeroKeywords from "./OhanaMonchesterYas/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./OhanaMonchesterYas/PaymentOptions";
import PaymentOptionsTwo from "./OhanaMonchesterYas/PaymentOptionsTwo";
import PropertySearchFormThree from "./common/PropertySearchFormThree";
import BottomFooter from "./common/BottomFooter";

export default function OhanaMonchesterYasPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchFormThree
            formName="manchester-city-yas-residences-by-ohana"
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
            thankYouPath="/manchester-city-yas-residences-by-ohana/thank-you"
            colorCodeOne="#001340"
            colorCodeTwo="#001340"
            colorCodeThree="#001340"
            colorCodeBtnBg="#001340"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#001340"
            colorCodeBtnHoverBg="#001340"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#001340"
          />
        </div>
        {/* <OneResidencesHero /> */}
      </div>
      <WaterfrontLiving />
      {/* <EnlightenmentSection /> */}
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
        <BottomFooter developerName="Ohana" />
      </div>
    </div>
  );
}
