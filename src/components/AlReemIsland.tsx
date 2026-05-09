"use client";

import CounterSection from "./AlReemIsland/CounterSection";
import Header from "./AlReemIsland/Header";
import HeroKeywords from "./AlReemIsland/HeroKeywords";
import InformationFooter from "./AlReemIsland/InformationFooter";
import InteriorCarousel from "./AlReemIsland/InteriorCarousel";
import NearBySection from "./AlReemIsland/NearBySection";
import NextLegacySection from "./AlReemIsland/NextLegacySection";
import ValueAddedSection from "./AlReemIsland/ValueAddedSection";
import PropertySearchForm from "./common/PropertySearchForm";

export default function AlReemIslandPage() {
  return (
    <div className="min-h-screen bgColorOne dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
        <div
          className="absolute bottom-0 mx-auto custom-form-container hero-search-form-container"
          style={{
            bottom: "60px",
            width: "90%",
            maxWidth: "1400px",
            zIndex: 1000,
            margin: "0 auto",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
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

      <CounterSection
        backgroundImage=""
        title="Why Al Reem Island Is a Top Real Estate Investment in Abu Dhabi?"
        description="With over 1500 happy clients, 2500+ properties sold, and 100+ active projects, Open Home Properties brings more than 10 years of real estate expertise to help you achieve your property goals. Book your free, no-obligation market appraisal today - virtual appointments available for your convenience."
        stats={[
          {
            value: 40000,
            label: "Residents living in a vibrant waterfront community",
            suffix: "+",
          },
          {
            value: 20,
            label:
              "Residential Developments ranging from apartments to luxury towers",
            suffix: "+",
          },
          { value: 10.7, label: "Annual capital growth", suffix: "%" },
          { value: 95, label: "Occupancy rate", suffix: "%" },
          {
            value: 85,
            label: "Global investor base from nationalities",
            suffix: "+",
          },
        ]}
        optionalText="Global investor base from 85+ nationalities"
      />

      <ValueAddedSection />

      {/* <WaterfrontLiving /> */}
      {/* <EnlightenmentSection />  */}
      {/* <WindowToWonder /> */}
      {/* <HotelStyleLiving />  */}
      <div id="gallery">
        <InteriorCarousel />
      </div>

      <div id="next-legacy-section">
        <NextLegacySection />
      </div>

      {/* <div id="location">
        <DiscoverSection />
      </div> */}
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

      <div id="near-by-section">
        <NearBySection />
      </div>

      <div id="contact-us">
        <InformationFooter />
      </div>
    </div>
  );
}
