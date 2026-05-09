"use client";

import CareAndGrace from "./YasRivaResidences/CareAndGrace";
import DiscoverSection from "./YasRivaResidences/DiscoverSection";
import Footer from "./YasRivaResidences/Footer";
import Header from "./YasRivaResidences/Header";
import HeroKeywords from "./YasRivaResidences/HeroKeywords";
import InteriorCarousel from "./YasRivaResidences/InteriorCarousel";
import PaymentOptionsTwo from "./YasRivaResidences/PaymentOptionsTwo";
import WaterfrontLiving from "./YasRivaResidences/WaterfrontLiving";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";

export default function YasRivaResidencesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="yas-riva-residences"
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
            thankYouPath="/yas-riva-residences/thank-you"
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
        <BottomFooter developerName="Aldar Properties" />
      </div>
    </div>
  );
}
