"use client";

import CareAndGrace from "./Flow25/CareAndGrace";
import DiscoverSection from "./Flow25/DiscoverSection";
import EnlightenmentSection from "./Flow25/EnlightenmentSection";
import Footer from "./Flow25/Footer";
import Header from "./Flow25/Header";
import HeroKeywords from "./Flow25/HeroKeywords";
import InteriorCarousel from "./Flow25/InteriorCarousel";
import PaymentOptionsTwo from "./Flow25/PaymentOptionsTwo";
import WaterfrontLiving from "./Flow25/WaterfrontLiving";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";

export default function Flow25Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="flow25"
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
            thankYouPath="/flow25/thank-you"
            colorCodeOne="#3c3c3b"
            colorCodeTwo="#0f1f2e"
            colorCodeThree="#3c3c3b"
            colorCodeBtnBg="#3c3c3b"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#3c3c3b"
            colorCodeBtnHoverBg="#3c3c3b"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#3c3c3b"
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
        <BottomFooter developerName="GAF Properties" />
      </div>
    </div>
  );
}
