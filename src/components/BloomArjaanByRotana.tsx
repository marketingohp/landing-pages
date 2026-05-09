"use client";

import CareAndGrace from "./BloomArjaanByRotana/CareAndGrace";
import DiscoverSection from "./BloomArjaanByRotana/DiscoverSection";
import EnlightenmentSection from "./BloomArjaanByRotana/EnlightenmentSection";
import Footer from "./BloomArjaanByRotana/Footer";
import Header from "./BloomArjaanByRotana/Header";
import HeroKeywords from "./BloomArjaanByRotana/HeroKeywords";
import InteriorCarousel from "./BloomArjaanByRotana/InteriorCarousel";
import PaymentOptionsTwo from "./BloomArjaanByRotana/PaymentOptionsTwo";
import WaterfrontLiving from "./BloomArjaanByRotana/WaterfrontLiving";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";

export default function BloomArjaanByRotanaPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="bloom-arjaan-by-rotana"
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
            thankYouPath="/bloom-arjaan-by-rotana/thank-you"
          />
        </div>
        {/* <OneResidencesHero /> */}
      </div>
      <WaterfrontLiving />
      <EnlightenmentSection />
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
        <BottomFooter developerName="Bloom" />
      </div>
    </div>
  );
}
