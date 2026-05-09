"use client";

import CareAndGrace from "./RadiantWave/CareAndGrace";
import DiscoverSection from "./RadiantWave/DiscoverSection";
import Footer from "./RadiantWave/Footer";
import Header from "./RadiantWave/Header";
import HeroKeywords from "./RadiantWave/HeroKeywords";
import InteriorCarousel from "./RadiantWave/InteriorCarousel";
import PaymentOptionsTwo from "./RadiantWave/PaymentOptionsTwo";
import WaterfrontLiving from "./RadiantWave/WaterfrontLiving";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";

export default function RadiantWavePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="radiant-wave"
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
            requiredFields={["firstName", "lastName", "phoneNumber", "email"]}
            viewType="banner"
            redirectToThankYou={true}
            thankYouPath="/radiant-wave/thank-you"
            colorCodeOne="#0c1a2a"
            colorCodeTwo="#0f1f2e"
            colorCodeThree="#0c1a2a"
            colorCodeBtnBg="#0c1a2a"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#0c1a2a"
            colorCodeBtnHoverBg="#0c1a2a;"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#0c1a2a;"
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
        <style jsx>{`
          .classAddFooter {
            background-color: #0000003b !important;
          }
        `}</style>
        <Footer />
      </div>
      <div className="bottom-footer">
        <BottomFooter developerName="Radiant Real Estate" />
      </div>
    </div>
  );
}
