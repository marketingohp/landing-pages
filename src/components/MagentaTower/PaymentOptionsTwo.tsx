"use client";
import Image from "next/image";

export default function PaymentOptionsTwo() {
  return (
    <section className="py-20 lg:py-32 bg-[#1a1a1a] dark:bg-[#0a0a0a] relative">
      <div className="absolute inset-0 opacity-20 dark:opacity-20">
        <Image
          src="/images/hilton-residences-al-raha/Hilton_Al_Raha_Project_Overview-17.jpg"
          alt="Footer Background"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="text-6xl md:text-4xl lg:text-4xl text-[#ffffff] dark:text-white mb-8"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "4rem",
            }}
          >
            Payment Plan
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Section - Featured Payment Plan */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div
              className="text-white text-5xl md:text-6xl lg:text-7xl mb-2 font-mobile-payment-plan1 "
              style={{
                fontFamily: "SavoyeLET",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "7rem",
              }}
            >
              Flexible
            </div>
            <div
              className="text-[#ffffff] dark:text-[#b29679] text-7xl md:text-8xl lg:text-9xl font-bold mb-4 font-mobile-payment-plan2"
              style={{ fontFamily: "GFS Didot, serif" }}
            >
              60/40
            </div>
            <div
              className="text-white dark:text-[#5f4931] text-xl md:text-2xl lg:text-3xl tracking-wider  font-mobile-payment-plan3"
              style={{ fontFamily: "Abril Fatface, serif", fontSize: "3.5rem" }}
            >
              Payment Plan
            </div>
          </div>

          {/* Right Section - Payment Schedule Table */}
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden">
              <table className="w-full text-white border-collapse">
                <thead>
                  <tr>
                    <th
                      className=" text-center pb-5 font-semibold text-sm md:text-base tracking-wider border-b border-[#ffffff]/50 text-[#ffffff] dark:text-[#ffffff]"
                      style={{ fontFamily: "Arial, sans-serif" }}
                    >
                      Down Payment
                    </th>
                    <th
                      className=" text-center pb-5 font-semibold text-sm md:text-base tracking-wider border-b border-[#ffffff]/50 text-[#ffffff] dark:text-[#d4af37]"
                      style={{ fontFamily: "Arial, sans-serif" }}
                    >
                      Durring Installments
                    </th>
                    <th
                      className=" text-center pb-5 font-semibold text-sm md:text-base tracking-wider border-b border-[#ffffff]/50 text-[#ffffff] dark:text-[#d4af37]"
                      style={{ fontFamily: "Arial, sans-serif" }}
                    >
                      On Handover
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  <tr className="border-b border-[#ffffff]/30">
                    <td
                      className=" text-center px-4 md:px-6 py-4 text-sm md:text-base"
                      style={{ fontFamily: "Arial, sans-serif" }}
                    >
                      5%
                      <br />
                    </td>
                    <td
                      className=" text-center px-4 md:px-6 py-4 text-sm md:text-base"
                      style={{ fontFamily: "Arial, sans-serif" }}
                    >
                      55%
                      <br />
                    </td>
                    <td
                      className=" text-center px-4 md:px-6 py-4 text-sm md:text-base"
                      style={{ fontFamily: "Arial, sans-serif" }}
                    >
                      40%
                      <br />
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr>
                    <td
                      className=" text-center px-4 md:px-6 py-4 text-sm md:text-base"
                      style={{ fontFamily: "Arial, sans-serif" }}
                    ></td>
                  </tr>
                </tbody>
              </table>
              {/* <p className="pb-5 font-semibold text-sm md:text-base tracking-wider border-[#d4af37]/50 text-[#ffffff] dark:text-[#d4af37]">
                Mansions Limited Offer 4% DLD Waver
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
