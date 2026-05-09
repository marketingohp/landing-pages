"use client";

import CareAndGrace from "./TheRowSaadiyat/CareAndGrace";
import DiscoverSection from "./TheRowSaadiyat/DiscoverSection";
import EnlightenmentSection from "./TheRowSaadiyat/EnlightenmentSection";
import Footer from "./TheRowSaadiyat/Footer";
import Header from "./TheRowSaadiyat/Header";
import HeroKeywords from "./TheRowSaadiyat/HeroKeywords";
import InteriorCarousel from "./TheRowSaadiyat/InteriorCarousel";
import PaymentOptionsTwo from "./TheRowSaadiyat/PaymentOptionsTwo";
import WaterfrontLiving from "./TheRowSaadiyat/WaterfrontLiving";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";

export default function TheRowSaadiyatPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="the-row-saadiyat"
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
            thankYouPath="/the-row-saadiyat/thank-you"
            colorCodeOne="#00392a"
            colorCodeTwo="#00392a"
            colorCodeThree="#00392a"
            colorCodeBtnBg="#00392a"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#00392a"
            colorCodeBtnHoverBg="#00392a"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#00392a"
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
