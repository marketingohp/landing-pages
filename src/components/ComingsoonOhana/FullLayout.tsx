"use client";

import PropertySearchForm from "../common/PropertySearchForm";
import Header from "./Header";
import { useLanguage } from "@/contexts/ComingsoonOhana/LanguageContext";

export default function FullLayout() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      
      <section id="discover-more" className="contact-component">
        <div className="contact-container">
          <div className="block-left">
            <div className="contact-wrap">
              <div className="text-wrap is-contact">
                <div className="main-text-wrap is-white">
                  <h2 className="heading-1">
                    Be <span className="margin-span">part</span>{" "}
                    <span className="margin-span">of</span>
                    <br />
                    what <span className="text-span-2">'</span>s{" "}
                    <span className="margin-span">next</span>
                  </h2>
                </div>
                <div className="medium-text-wrap is-white max-w">
                  <div className="heading-2">
                    Register to be among the first to receive exclusive updates
                    about the <span className="light-italic is-xl">Branded Residences</span> by{" "}
                    <span className="light-italic is-xl">Ohana Development</span>.
                  </div>
                </div>
              </div>
              <div className="form-component">
                <PropertySearchForm
                  formName="coming-soon-ohana"
                  pointName="get-in-touch"
                  formType="banner-form"
                  viewType="banner"
                  visibleFields={[
                    "firstName",
                    "lastName",
                    "email",
                    "phoneNumber",
                    "hearAboutUs",
                  ]}
                  requiredFields={["firstName", "lastName", "phoneNumber","email"]}
                  redirectToThankYou={true}
                  thankYouPath="/comingsoon-ohana/thank-you"
                  className="Form ohana-form"
                />
              </div>
            </div>
          </div>

          <div className="block-right">
            <div className="contact-block is-white">
              <div className="contact-row">
                <div className="text-block-2">Location</div>
                <div className="contact-text">
                  <div className="contact-link is-text">
                    Yas Canal
                    <br />
                    Abu Dhabi, UAE
                  </div>
                </div>
              </div>
              <div className="contact-row">
                <div className="text-block-2">Contact Us</div>
                <div className="contact-text">
                  <a href="tel:800600600" className="contact-link">
                    800 600 600
                  </a>{" "}
                  (within the UAE)
                  <br />
                  <a href="tel:+971800600600" className="contact-link">
                    +971 800 600 600
                  </a>{" "}
                  (from abroad)
                  <br />
                  <a
                    href="mailto:info@ohana.ae?subject=Ohana%20Development%20-%20Yas%20Canal%20%7C%20Request%20information"
                    className="contact-link"
                  >
                    info@ohana.ae
                  </a>
                </div>
              </div>
              <div className="contact-row is-social">
                <a
                  rel="nofollow"
                  href="https://www.facebook.com/ohanadvpt"
                  target="_blank"
                  className="social-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
                  </svg>
                </a>
                <a
                  rel="nofollow"
                  href="https://twitter.com/ohana_dvpt"
                  target="_blank"
                  className="social-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  rel="nofollow"
                  href="https://www.instagram.com/ohana_development/?hl=en"
                  target="_blank"
                  className="social-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8" />
                    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m6.5-9.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" />
                  </svg>
                </a>
                <a
                  rel="nofollow"
                  href="https://www.linkedin.com/company/ohana-developement/"
                  target="_blank"
                  className="social-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="4.983" cy="5.009" r="2.188" />
                    <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="background-container-section">
          <div className="blue-hover-2"></div>
          <div className="gradient-hover"></div>
          <img
            src="https://cdn.prod.website-files.com/6953e1cc8ce6f26a3cb13814/6953e1cc8ce6f26a3cb138d1_red-background.webp"
            alt=""
            className="fit-cover"
          />
        </div>
      </section>

      <footer className="footer-component">
        <div className="disclaimer-text">
          All graphic and textual materials are purely illustrative and do not
          constitute a contractual obligation. Ohana Development© All Rights
          Reserved. 2026
        </div>
      </footer>
    </>
  );
}
