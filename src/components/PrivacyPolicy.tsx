"use client";

import Header from "./PrivacyPolicy/Header";

import Footer from "./PrivacyPolicy/Footer";
import BottomFooter from "./common/BottomFooter";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* <Header /> */}
      <div id="home">
        {/* <OneResidencesHero /> */}

        <section className="privacySection">
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
            }}
          >
            <div className="upperContainer">
              <Link href="/">
                <img
                  src="/images/home-view/logo.webp"
                  width={100}
                  height={100}
                  style={{ width: "400px" }}
                  alt="one residences"
                />
              </Link>
            </div>
            <div className={"contentContainer"}>
              <h1>Privacy Policy</h1>
              <p>
                At Abu Dhabi Properties, accessible from abudhabiproperties.ae,
                the privacy of our visitors is a top priority. This Privacy
                Policy outlines the types of information collected and recorded
                by Abu Dhabi Properties and how we use it.
              </p>

              <p>
                If you have additional questions or need more information about
                our Privacy Policy, please feel free to contact us via email at
                info@abudhabi-properties.net
              </p>

              <p>
                <strong>LOG FILES</strong>
              </p>
              <p>
                Abu Dhabi Properties follows a standard procedure of using log
                files, which is common among website hosting corporations and
                part of website hosting services analytics. Log files collect
                information such as IP addresses, browser type, ISP, date and
                time stamp, referring/exit pages, and possibly the number of
                clicks.
              </p>

              <p>
                <strong>COOKIES AND WEB BEACONS</strong>
              </p>
              <p>
                Like many other websites, Abu Dhabi Properties uses cookies to
                store information, including visitors’ preferences and the pages
                on the website that the visitor accessed.
              </p>

              <p>
                <strong>PRIVACY POLICIES</strong>
              </p>
              <p>
                Third-party ad servers or ad networks use technologies like
                cookies, JavaScript, or Web Beacons in their advertisements. Abu
                Dhabi Properties has no access to or control over these cookies.
              </p>

              <p>
                <strong>THIRD PARTY PRIVACY POLICIES</strong>
              </p>
              <p>
                Abu Dhabi Properties’ Privacy Policy does not apply to other
                advertisers or websites.
              </p>

              <p>
                <strong>CHILDREN’S INFORMATION</strong>
              </p>
              <p>
                Abu Dhabi Properties does not knowingly collect any Personal
                Identifiable Information from children under the age of 13.
              </p>

              <p>
                <strong>ONLINE PRIVACY POLICY ONLY</strong>
              </p>
              <p>This Privacy Policy applies only to our online activities.</p>

              <p>
                <strong>UAE ONLINE PRIVACY PROTECTION ACT</strong>
              </p>
              <p>
                The law requires websites collecting Personally Identifiable
                Information from UAE consumers to publish a privacy policy.
              </p>

              <p>Abu Dhabi Properties</p>
              <p>Email: info@abudhabi-properties.net</p>
              <p>Address: Reem Island, Abu Dhabi - UAE Dhabi, UAE</p>
            </div>
          </div>
        </section>
      </div>

      <div id="contact-us">
        <BottomFooter developerName="Abu Dhabi Properties" />
      </div>
    </div>
  );
}
