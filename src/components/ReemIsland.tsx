"use client";

import DiscoverSection from "./ReemIsland/DiscoverSection";
import Footer from "./ReemIsland/Footer";
import Header from "./ReemIsland/Header";
import HeroKeywords from "./ReemIsland/HeroKeywords";
import InteriorCarousel from "./ReemIsland/InteriorCarousel";
import WaterfrontLiving from "./ReemIsland/WaterfrontLiving";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";

export default function ReemIslandPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="al-reem-island"
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
            thankYouPath="/reem-island/thank-you"
            colorCodeOne="#2296c4"
            colorCodeTwo="#0f1f2e"
            colorCodeThree="#2296c4"
            colorCodeBtnBg="#2296c4"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#2296c4"
            colorCodeBtnHoverBg="#2296c4"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#2296c4"
          />
        </div>
        {/* <ProjectHero />  */}
      </div>
      <WaterfrontLiving />
      {/* <EnlightenmentSection />  */}
      {/* <WindowToWonder /> */}
      {/* <HotelStyleLiving />  */}
      <div id="gallery">
        <InteriorCarousel />
      </div>
      <div id="location">
        <DiscoverSection />
      </div>
      {/* <div id="amenities">
        <CareAndGrace />
      </div> */}
      {/* <DreamsAndDesign />  */}
      {/* <div id="payment-options">
        <PaymentOptions />
      </div> */}
      {/* <div id="payment-options-two">
        <PaymentOptionsTwo />
      </div> */}
      <div id="contact-us">
        <Footer />
      </div>
      <div className="bottom-footer">
        <BottomFooter developerName="Aldar Properties" />
      </div>
    </div>
  );
}
