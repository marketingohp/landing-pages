"use client";

import CareAndGrace from "./FourSeasons/CareAndGrace";
import DiscoverSection from "./FourSeasons/DiscoverSection";
import Footer from "./FourSeasons/Footer";
import Header from "./FourSeasons/Header";
import HeroKeywords from "./FourSeasons/HeroKeywords";
import InteriorCarousel from "./FourSeasons/InteriorCarousel";
import PaymentOptionsTwo from "./FourSeasons/PaymentOptionsTwo";
import WaterfrontLiving from "./FourSeasons/WaterfrontLiving";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";

export default function FourSeasonsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="four-seasons"
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
            thankYouPath="/four-seasons/thank-you"
            colorCodeOne="#ad8a63"
            colorCodeTwo="#0f1f2e"
            colorCodeThree="#ad8a63"
            colorCodeBtnBg="#ad8a63"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#ad8a63"
            colorCodeBtnHoverBg="#ad8a63"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#ad8a63"
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
        <BottomFooter developerName="Al Ain Properties" />
      </div>
    </div>
  );
}
