"use client";

import Header from "./JumeirahResidencesAlMaryahIsland/Header";
import OneResidencesHero from "./JumeirahResidencesAlMaryahIsland/OneResidencesHero";
import WaterfrontLiving from "./JumeirahResidencesAlMaryahIsland/WaterfrontLiving";
import EnlightenmentSection from "./JumeirahResidencesAlMaryahIsland/EnlightenmentSection";
import WindowToWonder from "./JumeirahResidencesAlMaryahIsland/WindowToWonder";
import HotelStyleLiving from "./JumeirahResidencesAlMaryahIsland/HotelStyleLiving";
import InteriorCarousel from "./JumeirahResidencesAlMaryahIsland/InteriorCarousel";
import DiscoverSection from "./JumeirahResidencesAlMaryahIsland/DiscoverSection";
import CareAndGrace from "./JumeirahResidencesAlMaryahIsland/CareAndGrace";
import DreamsAndDesign from "./JumeirahResidencesAlMaryahIsland/DreamsAndDesign";
import Footer from "./JumeirahResidencesAlMaryahIsland/Footer";
import HeroKeywords from "./JumeirahResidencesAlMaryahIsland/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./JumeirahResidencesAlMaryahIsland/PaymentOptions";
import PaymentOptionsTwo from "./JumeirahResidencesAlMaryahIsland/PaymentOptionsTwo";
import BottomFooter from "./common/BottomFooter";

export default function JumeirahResidencesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="jumeirah-residences-al-maryah-island"
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
            thankYouPath="/jumeirah-residences-al-maryah-island/thank-you"
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
        <BottomFooter developerName="Al Ain Developments" />
      </div>
    </div>
  );
}
