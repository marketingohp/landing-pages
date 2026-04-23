"use client";

import Image from "next/image";

// Simple SVG Icon Components
const CubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const ColorSwatchIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const CogIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const OfficeBuildingIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const InboxIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
  </svg>
);

const TruckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
  </svg>
);


const services = [
  {
    title: "Shopping & Retail",
    desc: "The Galleria Al Reem",
    icon: CubeIcon,
    image: "/images/al-reem-island/shopping-retail.png",
  },
  {
    title: "Education",
    desc: "Sorbonne university",
    icon: ColorSwatchIcon,
    image: "/images/al-reem-island/Education.png",
  },
  {
    title: "Healthcare",
    desc: "Cleveland Clinic Abu Dhabi",
    icon: CogIcon,
    image: "/images/al-reem-island/Healthcare.png",
  },
  {
    title: "Leisure & Entertainment",
    desc: "Waterfront promenades and parks Cafes, restaurants, and luxury lounges",
    icon: OfficeBuildingIcon,
    image: "/images/al-reem-island/Leisure-Entertainment.png",
  },
  {
    title: "Transportation",
    desc: "Easy access to Abu Dhabi Corniche",
    icon: InboxIcon,
    image: "/images/al-reem-island/Transportation.png",
  },
  {
    title: "Business & Finance",
    desc: "Near Abu Dhabi Global Market (ADGM)",
    icon: TruckIcon,
    image: "/images/al-reem-island/Business-Finance.png",
  },
];

export default function NearBySection() {
  return (
    <section className="relative bgColorOne py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Main Heading */}
        <h2 className="text-3xl playfair-display-regular md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-6 lg:mb-8 leading-tight"
          style={{ color: "#2296c4" }}

        >
         Nearby Facilities
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-10 text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-5">
                {/* <div className="w-14 h-14 flex items-center justify-center rounded-md bg-white shadow-md"> */}
                  {/* <item.icon className="text-[#4cc3ff] text-3xl w-8 h-8" /> */}
                  <Image src={item.image} alt={item.title} width={100} height={100} className="w-30 h-30" />
                {/* </div> */}
              </div>

              {/* Title */}
              <h3 className="text-2xl playfair-display-regular font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-lg montserrat-regular leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Link */}
              {/* <a
                href="#"
                className="inline-flex items-center text-[#4cc3ff] font-semibold text-sm group"
              >
                Learn More
                <span className="ml-2 transform transition group-hover:translate-x-1">
                  →
                </span>
              </a> */}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative dots */}
      <div className="hidden lg:block absolute right-10 top-24">
        <Dots />
      </div>
      <div className="hidden lg:block absolute left-10 bottom-24">
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

