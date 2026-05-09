"use client";

import CareAndGrace from "./TheWildsByAldar/CareAndGrace";
import DiscoverSection from "./TheWildsByAldar/DiscoverSection";
import EnlightenmentSection from "./TheWildsByAldar/EnlightenmentSection";
import Footer from "./TheWildsByAldar/Footer";
import Header from "./TheWildsByAldar/Header";
import HeroKeywords from "./TheWildsByAldar/HeroKeywords";
import InteriorCarousel from "./TheWildsByAldar/InteriorCarousel";
import PaymentOptionsTwo from "./TheWildsByAldar/PaymentOptionsTwo";
import WaterfrontLiving from "./TheWildsByAldar/WaterfrontLiving";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";

export default function TheWildsByAldarPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="the-wilds-by-aldar"
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
            thankYouPath="the-wilds-by-aldar/thank-you"
            colorCodeOne="#ebe8dd"
            colorCodeTwo="#766c0d"
            colorCodeThree="#766c0d"
            colorCodeBtnBg="#766c0d"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#766c0d"
            colorCodeBtnHoverBg="#766c0d"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#766c0d"
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
        <BottomFooter developerName="Aldar Properties" />
      </div>
    </div>
  );
}
