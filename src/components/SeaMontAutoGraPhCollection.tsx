"use client";

import Header from "./SeamontAutographCollectionResidences/Header";
import OneResidencesHero from "./SeamontAutographCollectionResidences/OneResidencesHero";
import WaterfrontLiving from "./SeamontAutographCollectionResidences/WaterfrontLiving";
import EnlightenmentSection from "./SeamontAutographCollectionResidences/EnlightenmentSection";
import WindowToWonder from "./SeamontAutographCollectionResidences/WindowToWonder";
import HotelStyleLiving from "./SeamontAutographCollectionResidences/HotelStyleLiving";
import InteriorCarousel from "./SeamontAutographCollectionResidences/InteriorCarousel";
import DiscoverSection from "./SeamontAutographCollectionResidences/DiscoverSection";
import CareAndGrace from "./SeamontAutographCollectionResidences/CareAndGrace";
import DreamsAndDesign from "./SeamontAutographCollectionResidences/DreamsAndDesign";
import Footer from "./SeamontAutographCollectionResidences/Footer";
import HeroKeywords from "./SeamontAutographCollectionResidences/HeroKeywords";
import PropertySearchForm from "./common/PropertySearchForm";
import PaymentOptions from "./SeamontAutographCollectionResidences/PaymentOptions";
import PaymentOptionsTwo from "./SeamontAutographCollectionResidences/PaymentOptionsTwo";
import BottomFooter from "./common/BottomFooter";
import PropertySearchFormThree from "./common/PropertySearchFormThree";
export default function SeaMontAutoGraPhCollectionPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          {/* <PropertySearchForm
            formName="seamont-autograph-collection-residences"
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
            thankYouPath="/seamont-autograph-collection-residences/thank-you"
            colorCodeOne="#0f1f2e"
            colorCodeTwo="#0f1f2e"
            colorCodeThree="#0f1f2e"
            colorCodeBtnBg="#0f1f2e"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#0f1f2e"
            colorCodeBtnHoverBg="#0f1f2e"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#0f1f2e"
          /> */}
          <PropertySearchFormThree
            formName="seamont-autograph-collection-residences"
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
            thankYouPath="/seamont-autograph-collection-residences/thank-you"
            colorCodeOne="#001a38"
            colorCodeTwo="#001a38"
            colorCodeThree="#001a38"
            colorCodeBtnBg="#001a38"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#001a38"
            colorCodeBtnHoverBg="#001a38"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#001a38"
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
      <div id="bottom-footer">
        <BottomFooter developerName="SAAS" />
      </div>
    </div>
  );
}
