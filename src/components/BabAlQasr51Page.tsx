"use client";

import Header from "./BabAlQasr51Page/Header";
import OneResidencesHero from "./BabAlQasr51Page/OneResidencesHero";
import WaterfrontLiving from "./BabAlQasr51Page/WaterfrontLiving";
import EnlightenmentSection from "./BabAlQasr51Page/EnlightenmentSection";
import WindowToWonder from "./BabAlQasr51Page/WindowToWonder";
import HotelStyleLiving from "./BabAlQasr51Page/HotelStyleLiving";
import InteriorCarousel from "./BabAlQasr51Page/InteriorCarousel";
import DiscoverSection from "./BabAlQasr51Page/DiscoverSection";
import CareAndGrace from "./BabAlQasr51Page/CareAndGrace";
import DreamsAndDesign from "./BabAlQasr51Page/DreamsAndDesign";
import Footer from "./BabAlQasr51Page/Footer";
import HeroKeywords from "./BabAlQasr51Page/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./BabAlQasr51Page/PaymentOptions";
import PaymentOptionsTwo from "./BabAlQasr51Page/PaymentOptionsTwo";
import BottomFooter from "./common/BottomFooter";
import PaymentSection from "./BabAlQasr51Page/PaymentSection";

// test comment

export default function BabAlQasr51Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="bab-al-qasr-51"
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
            thankYouPath="/bab-al-qasr-51/thank-you"
            colorCodeOne="#ebe8dd"
            colorCodeTwo="#6c492b"
            colorCodeThree="#6c492b"
            colorCodeBtnBg="#6c492b"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#6c492b"
            colorCodeBtnHoverBg="#6c492b"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#6c492b"
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
      <PaymentSection />
      <div id="contact-us">
        <Footer />
      </div>
      <div className="bottom-footer">
        <BottomFooter developerName="Burtville" />
      </div>
    </div>
  );
}
