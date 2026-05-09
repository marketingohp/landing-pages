"use client";

import CareAndGrace from "./AthlonByAldar/CareAndGrace";
import DiscoverSection from "./AthlonByAldar/DiscoverSection";
import EnlightenmentSection from "./AthlonByAldar/EnlightenmentSection";
import Footer from "./AthlonByAldar/Footer";
import Header from "./AthlonByAldar/Header";
import HeroKeywords from "./AthlonByAldar/HeroKeywords";
import InteriorCarousel from "./AthlonByAldar/InteriorCarousel";
import PaymentOptionsTwo from "./AthlonByAldar/PaymentOptionsTwo";
import WaterfrontLiving from "./AthlonByAldar/WaterfrontLiving";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";

export default function AthlonByAldarPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="athlon-by-aldar"
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
            thankYouPath="/athlon-by-aldar/thank-you"
            colorCodeOne="#ebe8dd"
            colorCodeTwo="#642d5b"
            colorCodeThree="#642d5b"
            colorCodeBtnBg="#642d5b"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#642d5b"
            colorCodeBtnHoverBg="#642d5b"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#642d5b"
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
        <style jsx>{`
          .classAddFooter {
            background-color: #0000003b !important;
          }
        `}</style>
        <Footer />
      </div>
      <div id="bottom-footer">
        <BottomFooter developerName="Aldar Properties" />
      </div>
    </div>
  );
}
