"use client";

import CareAndGrace from "./BashayerResidences/CareAndGrace";
import DiscoverSection from "./BashayerResidences/DiscoverSection";
import EnlightenmentSection from "./BashayerResidences/EnlightenmentSection";
import Footer from "./BashayerResidences/Footer";
import Header from "./BashayerResidences/Header";
import HeroKeywords from "./BashayerResidences/HeroKeywords";
import InteriorCarousel from "./BashayerResidences/InteriorCarousel";
import PaymentOptionsTwo from "./BashayerResidences/PaymentOptionsTwo";
import WaterfrontLiving from "./BashayerResidences/WaterfrontLiving";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";

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
            requiredFields={["firstName", "lastName", "phoneNumber", "email"]}
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
