"use client";

import CareAndGrace from "./ShobaProjectYas/CareAndGrace";
import DiscoverSection from "./ShobaProjectYas/DiscoverSection";
import Footer from "./ShobaProjectYas/Footer";
import Header from "./ShobaProjectYas/Header";
import HeroKeywords from "./ShobaProjectYas/HeroKeywords";
import InteriorCarousel from "./ShobaProjectYas/InteriorCarousel";
import PaymentOptionsTwo from "./ShobaProjectYas/PaymentOptionsTwo";
import WaterfrontLiving from "./ShobaProjectYas/WaterfrontLiving";
import BottomFooter from "./common/BottomFooter";
import PropertySearchForm from "./common/PropertySearchForm";

export default function ShobaProjectinYasGatewayPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div className="absolute bottom-0 left-0 w-full custom-form-container">
          <PropertySearchForm
            formName="shoba-project-in-yas-gateway"
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
            thankYouPath="/shoba-project-in-yas-gateway/thank-you"
            colorCodeOne="#04352b"
            colorCodeTwo="#0f1f2e"
            colorCodeThree="#04352b"
            colorCodeBtnBg="#04352b"
            colorCodeBtnText="#ffffff"
            colorCodeBtnBorder="#04352b"
            colorCodeBtnHoverBg="#04352b"
            colorCodeBtnHoverText="#ffffff"
            colorCodeBtnHoverBorder="#04352b"
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
        <BottomFooter developerName="Shoba" />
      </div>
    </div>
  );
}
