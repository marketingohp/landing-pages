"use client";

import CareAndGrace from "./RadissionResidences/CareAndGrace";
import DiscoverSection from "./RadissionResidences/DiscoverSection";
import FloorPlans from "./RadissionResidences/FloorPlans";
import Footer from "./RadissionResidences/Footer";
import Header from "./RadissionResidences/Header";
import HeroKeywords from "./RadissionResidences/HeroKeywords";
import InteriorCarousel from "./RadissionResidences/InteriorCarousel";
import PaymentOptionsTwo from "./RadissionResidences/PaymentOptionsTwo";
import WaterfrontLiving from "./RadissionResidences/WaterfrontLiving";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";

export default function RadissionResidencesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="radisson-residences"
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
            thankYouPath="/radisson-residences/thank-you"
          />
        </div>
        {/* <OneResidencesHero /> */}
      </div>
      <WaterfrontLiving />
      {/* <EnlightenmentSection />  */}
      {/* <WindowToWonder />  */}
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
      <div id="floor-plans">
        <FloorPlans />
      </div>
      {/*  */}

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
        <BottomFooter developerName="Royal Development Holding" />
      </div>
    </div>
  );
}
