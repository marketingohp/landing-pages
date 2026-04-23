"use client";

import Header from "./BashayerResidences/Header";
import OneResidencesHero from "./BashayerResidences/OneResidencesHero";
import WaterfrontLiving from "./BashayerResidences/WaterfrontLiving";
import EnlightenmentSection from "./BashayerResidences/EnlightenmentSection";
import WindowToWonder from "./BashayerResidences/WindowToWonder";
import HotelStyleLiving from "./BashayerResidences/HotelStyleLiving";
import InteriorCarousel from "./BashayerResidences/InteriorCarousel";
import DiscoverSection from "./BashayerResidences/DiscoverSection";
import CareAndGrace from "./BashayerResidences/CareAndGrace";
import DreamsAndDesign from "./BashayerResidences/DreamsAndDesign";
import Footer from "./BashayerResidences/Footer";
import HeroKeywords from "./BashayerResidences/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./BashayerResidences/PaymentOptions";
import PaymentOptionsTwo from "./BashayerResidences/PaymentOptionsTwo";
import BottomFooter from "./common/BottomFooter";

export default function BashayerResidencesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="bashayer-residences"
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
            thankYouPath="/bashayer-residences/thank-you"
            colorCodeOne="#ebe8dd"
            colorCodeTwo="#0f1f2e"
            colorCodeThree="#3f4973"
            colorCodeBtnBg="#3f4973"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#ebe8dd"
            colorCodeBtnHoverBg="#ebe8dd"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#3f4973"
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
        <BottomFooter developerName="Modon" />
      </div>
    </div>
  );
}
