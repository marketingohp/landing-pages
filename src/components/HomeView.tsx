"use client";

import { pushToDataLayer } from "@/utils/gtag";
import { useEffect } from "react";
import BottomFooter from "./common/BottomFooter";
import Footer from "./HomeView/Footer";
import Header from "./HomeView/Header";
import HeroKeywords from "./HomeView/HeroKeywords";
export default function HomeViewPage() {
  useEffect(() => {
    pushToDataLayer({
      event: "page_view",
      label: "Home View Page",
      value: "Discover New Properties in Abu Dhabi",
    });
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      <div id="home">
        <HeroKeywords />
      </div>

      <section
        className="relative py-20 lg:py-10 bg-[#f5f5f0] dark:bg-[#1a1a1a]"
        style={{ paddingBottom: 0, paddingTop: 80 }}
      >
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="text-center pb-20">
            <h2
              className="text-2xl md:text-4xl lg:text-4xl text-[#1a3a5c] dark:text-white mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Explore a selection of new residential projects across Abu Dhabi.
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-[#1a3a5c] dark:text-gray-300 text-4xl py-2">
              <p className="custom-mobile-display-style1">
                Compare prices, locations, and layouts in one place.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4 text-[#4a6fa5] dark:text-gray-300 text-lg py-4">
              <p>
                What We Offer <br />
                New off-plan & ready properties
                <br />
                Apartments, villas & townhouses
                <br />
                Prime areas across Abu Dhabi
                <br />
                Flexible payment plans
                <br />
                Register your interest for priority access to new Abu Dhabi
                properties.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div id="contact-us">
        <Footer />
      </div>
      <div className="bottom-footer">
        <BottomFooter developerName="Abu Dhabi Properties" />
      </div>
    </div>
  );
}
