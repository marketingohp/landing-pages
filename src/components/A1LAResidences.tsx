"use client";

import CareAndGrace from "./A1LAResidences/CareAndGrace";
import DiscoverSection from "./A1LAResidences/DiscoverSection";
import EnlightenmentSection from "./A1LAResidences/EnlightenmentSection";
import Footer from "./A1LAResidences/Footer";
import Header from "./A1LAResidences/Header";
import HeroKeywords from "./A1LAResidences/HeroKeywords";
import InteriorCarousel from "./A1LAResidences/InteriorCarousel";
import PaymentOptionsTwo from "./A1LAResidences/PaymentOptionsTwo";
import WaterfrontLiving from "./A1LAResidences/WaterfrontLiving";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";

export default function A1LAResidencesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="a1la-residences"
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
            thankYouPath="a1la-residences/thank-you"
            colorCodeOne="#ebe8dd"
            colorCodeTwo="#a77b55"
            colorCodeThree="#a77b55"
            colorCodeBtnBg="#a77b55"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#a77b55"
            colorCodeBtnHoverBg="#a77b55"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#a77b55"
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
        <BottomFooter developerName="Object 1 Properties" />
      </div>
    </div>
  );
}
