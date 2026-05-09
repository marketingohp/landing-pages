"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

interface CounterStat {
  value: number;
  label: string;
  suffix?: string;
  description?: string;
}

interface CounterSectionProps {
  backgroundImage?: string;
  title?: string;
  description?: string;
  stats?: CounterStat[];
  optionalText?: string;
}

const steps = [
  { id: "01", title: "Step One", icon: "🏠" },
  { id: "02", title: "Step Two", icon: "📄" },
  { id: "03", title: "Step Three", icon: "🔄" },
  { id: "04", title: "Step Four", icon: "⚙️" },
  { id: "05", title: "Step Five", icon: "✅" },
];

export default function CounterSection({
  backgroundImage = "/images/reem-island/Al-Reem-Island-01.webp",
  title = "Trusted By Thousands To Buy And Sell With Confidence",
  description = "With over 1500 happy clients, 2500+ properties sold, and 100+ active projects, Open Home Properties brings more than 10 years of real estate expertise to help you achieve your property goals. Book your free, no-obligation market appraisal today - virtual appointments available for your convenience.",
  stats = [
    { value: 40000, label: "Happy Clients", suffix: "+" },
    { value: 2500, label: "Properties Sold", suffix: "+" },
    { value: 100, label: "Projects", suffix: "+" },
    { value: 10, label: "Years Experience", suffix: "+" },
    {
      value: 85,
      label: "Global investor base from nationalities",
      suffix: "+",
    },
  ],
  optionalText = "Global investor base from 85+ nationalities",
}: CounterSectionProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative bgColorOne w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0a] two-bg-left-right"
      style={{ paddingTop: 180, paddingBottom: 80 }}
    >
      {/* Background Image */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div> */}

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 lg:px-8 py-12 lg:py-16">
        <div
          className="container-fluid mx-auto max-w-6xl"
          style={
            {
              // width: "100%",
            }
          }
        >
          {/* Main Heading */}
          <h2
            className="text-3xl playfair-display-regular md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6 lg:mb-8 leading-tight"
            style={{ color: "#2296c4" }}
          >
            {title}
          </h2>

          {/* Descriptive Paragraph */}
          <p className="text-sm montserrat-regular md:text-base lg:text-lg text-center max-w-7xl mx-auto mb-12 lg:mb-16 leading-relaxed text-gray-700 dark:text-gray-300 mb-100">
            {description}
          </p>

          {/* Statistics Grid - Card Design */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-10  mx-auto middle-text-main counter-section-wrapper">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`step-card step-card-${index} flex flex-col items-center justify-center bg-white rounded-lg border border-gray-200 shadow-sm p-6 lg:p-8 relative`}
              >
                {/* <div className="relative w-32 h-32 lg:w-36 lg:h-36 flex items-center justify-center mb-4"> */}
                <div className="w-full flex flex-col items-center justify-center">
                  <div className="step-circle">
                    <div
                      className={`text-center-circle text-center-circle-${index}`}
                    >
                      {hasAnimated ? (
                        <>
                          <CountUp
                            start={0}
                            end={stat.value}
                            duration={2.5}
                            separator=","
                            decimals={0}
                          />
                          {stat.suffix && (
                            <div className="text-4xl lg:text-4xl">
                              {stat.suffix}
                            </div>
                          )}
                        </>
                      ) : (
                        `0${stat.suffix || ""}`
                      )}
                    </div>
                  </div>
                  <div className="step-content text-center middle-text w-full flex items-center justify-center">
                    {/* <h4 className="text-2xl playfair-display-regular">{stat.label}</h4> */}
                    <p
                      className="text-sm montserrat-regula text-center w-full"
                      style={{ fontWeight: 900 }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/*stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white rounded-lg border border-gray-200 shadow-sm p-6 lg:p-8 relative"
              >
                <div className="relative w-32 h-32 lg:w-36 lg:h-36 flex items-center justify-center mb-4">
                 
                  <div
                    className="absolute inset-0 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "#2296c4",
                    }}
                  >
                    <div className="text-center">
                      <div className="text-3xl lg:text-3xl font-bold text-white leading-none">
                        {hasAnimated ? (
                          <>
                            <CountUp
                              start={0}
                              end={stat.value}
                              duration={2.5}
                              separator=","
                              decimals={0}
                            />
                            {stat.suffix && (
                              <span className="text-2xl lg:text-3xl">{stat.suffix}</span>
                            )}
                          </>
                        ) : (
                          `0${stat.suffix || ""}`
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-300 mb-4" />

                <p className="text-sm montserrat-regular lg:text-base text-gray-700 text-center leading-relaxed mb-6 flex-1">
                  {stat.description || stat.label}
                </p>

                 <button
                  className="w-full py-3 px-6 rounded-md text-white font-semibold uppercase tracking-wider text-sm transition-all duration-200 hover:opacity-90"
                  style={{
                    background: "linear-gradient(to right, #2296c4, #1a7ba3)",
                  }}
                >
                  READ MORE
                </button> 
              </div>
            ))*/}
          </div>

          {/* <p className="text-sm md:text-base font-bold lg:text-lg text-center max-w-4xl mx-auto mb-12 lg:mb-16 leading-relaxed mt-12 text-gray-700 dark:text-gray-300">
            {optionalText}
          </p> */}
        </div>
      </div>
      {/* Decorative dots */}
      <div className="hidden lg:block absolute right-0 top-86">
        <Dots />
      </div>
      <div className="hidden lg:block absolute right-30 top-86">
        <Dots />
      </div>
      <div className="hidden lg:block absolute left-0 bottom-90">
        <Dots />
      </div>
      <div className="hidden lg:block absolute left-30 bottom-90">
        <Dots />
      </div>
    </section>
  );
}

/* Dotted Pattern */
function Dots() {
  return (
    <div className="grid grid-cols-6 gap-3">
      {Array.from({ length: 36 }).map((_, i) => (
        <span
          key={i}
          className="w-2 h-2 border border-[#4cc3ff] rounded-full opacity-70"
        />
      ))}
    </div>
  );
}
