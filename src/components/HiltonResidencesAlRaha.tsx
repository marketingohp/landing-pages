"use client";

import CareAndGrace from "./HiltonResidencesAlRaha/CareAndGrace";
import DiscoverSection from "./HiltonResidencesAlRaha/DiscoverSection";
import EnlightenmentSection from "./HiltonResidencesAlRaha/EnlightenmentSection";
import Footer from "./HiltonResidencesAlRaha/Footer";
import Header from "./HiltonResidencesAlRaha/Header";
import HeroKeywords from "./HiltonResidencesAlRaha/HeroKeywords";
import InteriorCarousel from "./HiltonResidencesAlRaha/InteriorCarousel";
import PaymentOptionsTwo from "./HiltonResidencesAlRaha/PaymentOptionsTwo";
import WaterfrontLiving from "./HiltonResidencesAlRaha/WaterfrontLiving";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";

export default function HiltonResidencesAlRahaPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="hilton-residences-al-raha"
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
            thankYouPath="/hilton-residences-al-raha/thank-you"
            colorCodeOne="#ebe8dd"
            colorCodeTwo="#533d21"
            colorCodeThree="#533d21"
            colorCodeBtnBg="#533d21"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#533d21"
            colorCodeBtnHoverBg="#533d21"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#533d21"
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
        <BottomFooter developerName="Emirates Developments" />
      </div>
    </div>
  );
}
