"use client";

import { useLanguage } from "@/contexts/ComingsoonOhana/LanguageContext";
import CountdownTimer from "./CountdownTimer";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const { t } = useLanguage();

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#discover-more");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Set target date for countdown (example: 6 months from now)
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 6);

  return (
    <header className="header-hero">
      <div className="header-top">
        <div className="header-lang-selector">
          <LanguageSelector isScrolled={false} />
        </div>
      </div>

      <div className="header-container">
        <a
          href="https://www.ohana.ae/"
          title="Ohana Development"
          className="logo-hero"
        >
          <img
            src="https://cdn.prod.website-files.com/6953e1cc8ce6f26a3cb13814/6953e1cc8ce6f26a3cb138c3_Ohana-logo.svg"
            alt="Ohana Development"
            className="logo-img"
          />
        </a>

        <div className="counter-wrapper">
          <div className="medium-text-wrap is-white is-align-center">
            <div className="button-text is-xl-gradient">
              <br />
              BRANDED RESIDENCES
              <br />
              COMING SOON
              <br />
            </div>
            <div className="heading-2">
              Yas Canal, Abu Dhabi
              <br />
            </div>
          </div>
          <div className="counter-component">
            <CountdownTimer targetDate={targetDate.toISOString()} />
          </div>
        </div>

        <div className="medium-text-wrap is-white is-hero">
          <h1 className="heading-2">
            A new waterfront destination is taking shape on{" "}
            <span className="light-italic">Yas Canal.</span> Surrounded by
            world-class leisure, sport, and cultural landmarks, where living
            well becomes the{" "}
            <span className="light-italic">ultimate expression of luxury</span>.
          </h1>
          <a
            href="#discover-more"
            className="scroll"
            onClick={handleScrollClick}
          >
            <div className="button-text">discover more</div>
            <div className="scroll-line"></div>
            <div className="scroll-arrow">↓</div>
          </a>
        </div>
      </div>

      <div className="background-container">
        <div className="blue-hover"></div>
        <video
          className="hero-video-desktop"
          autoPlay
          loop
          muted
          playsInline
          poster="https://cdn.prod.website-files.com/694910ea1b4f90e05529ebb8%2F69494a52078d7f4b12711c93_smoke-colors-bg_loop_poster.0000000.jpg"
        >
          <source
            src="https://cdn.prod.website-files.com/6953e1cc8ce6f26a3cb13814/6953e1cc8ce6f26a3cb138d3_smoke-colors-bg_loop_mp4.mp4"
            type="video/mp4"
          />
        </video>
        <video
          className="hero-video-mobile"
          autoPlay
          loop
          muted
          playsInline
          poster="https://cdn.prod.website-files.com/694910ea1b4f90e05529ebb8%2F69495cc63ab78e97235dbacc_smoke-bg-mobile_loop_poster.0000000.jpg"
        >
          <source
            src="https://cdn.prod.website-files.com/6953e1cc8ce6f26a3cb13814/6953e1cc8ce6f26a3cb138d4_smoke-bg-mobile_loop_mp4.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </header>
  );
}
