"use client";

import CareAndGrace from "./BabAlQasr51Page/CareAndGrace";
import DiscoverSection from "./BabAlQasr51Page/DiscoverSection";
import EnlightenmentSection from "./BabAlQasr51Page/EnlightenmentSection";
import Footer from "./BabAlQasr51Page/Footer";
import Header from "./BabAlQasr51Page/Header";
import HeroKeywords from "./BabAlQasr51Page/HeroKeywords";
import InteriorCarousel from "./BabAlQasr51Page/InteriorCarousel";
import PaymentSection from "./BabAlQasr51Page/PaymentSection";
import WaterfrontLiving from "./BabAlQasr51Page/WaterfrontLiving";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";

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
