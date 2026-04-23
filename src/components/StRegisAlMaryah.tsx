"use client";

import Header from "./StRegisAlMaryah/Header";
import OneResidencesHero from "./StRegisAlMaryah/OneResidencesHero";
import WaterfrontLiving from "./StRegisAlMaryah/WaterfrontLiving";
import EnlightenmentSection from "./StRegisAlMaryah/EnlightenmentSection";
import WindowToWonder from "./StRegisAlMaryah/WindowToWonder";
import HotelStyleLiving from "./StRegisAlMaryah/HotelStyleLiving";
import InteriorCarousel from "./StRegisAlMaryah/InteriorCarousel";
import DiscoverSection from "./StRegisAlMaryah/DiscoverSection";
import CareAndGrace from "./StRegisAlMaryah/CareAndGrace";
import DreamsAndDesign from "./StRegisAlMaryah/DreamsAndDesign";
import Footer from "./StRegisAlMaryah/Footer";
import HeroKeywords from "./StRegisAlMaryah/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./StRegisAlMaryah/PaymentOptions";
import PaymentOptionsTwo from "./StRegisAlMaryah/PaymentOptionsTwo";
import BottomFooter from "./common/BottomFooter";

export default function StRegisAlMaryahPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="st-regis-al-maryah"
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
            thankYouPath="/st-regis-al-maryah/thank-you"
            colorCodeOne="#064851"
            colorCodeTwo="#064851"
            colorCodeThree="#064851"
            colorCodeBtnBg="#064851"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#064851"
            colorCodeBtnHoverBg="#064851"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#064851"
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
      <div id="bottom-footer">
        <BottomFooter developerName="SAAS" />
      </div>
    </div>
  );
}
