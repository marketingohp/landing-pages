"use client";
import Image from "next/image";

export default function PaymentOptions() {
  return (
    <section className="py-20 lg:py-32 bg-[#5f602c] dark:bg-[#0f1f2e] relative">
      <div className="absolute inset-0 opacity-20 dark:opacity-20">
        <Image
          src="/images/one-residences/one_residences_2.webp"
          alt="Footer Background"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Payment Plan Table */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#2a3a4a] dark:bg-[#1a2a3a] rounded-lg overflow-hidden border border-green-100/6">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b-0 border-white-500">
                    <th className="px-6 py-4 text-left font-bold text-sm uppercase tracking-wider border-r-2 border-white-500">
                      Down Payment
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-sm uppercase tracking-wider border-r-2 border-white-500">
                      Milestone
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-sm uppercase tracking-wider">
                      Handover
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  <tr className="border-b-0 border-white-500/30">
                    <td className="px-6 py-4 border-r-2 border-white-500 relative">
                      <div className="flex items-center gap-2">
                        <span className="">10%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-r-2 border-white-500">
                      40% over 24 monthly installments
                    </td>
                    <td className="px-6 py-4">50%</td>
                  </tr>
                  {/* Row 2 */}
                  <tr>
                    <td className="px-6 py-4 border-r-2 border-white-500 relative">
                      <div className="flex items-center gap-2">
                        <span className="">10%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-r-2 border-white-500">
                      40% across 8 installments
                    </td>
                    <td className="px-6 py-4">50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Side - Title */}
          <div
            className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left"
            style={{ margin: "0 auto" }}
          >
            <div
              className="text-white text-4xl md:text-5xl lg:text-6xl mb-4"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontStyle: "italic",
              }}
            >
              Flexible
            </div>
            <div
              className="text-white text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
              style={{ fontFamily: "Brandon, sans-serif" }}
            >
              50 | 50
            </div>
            <div
              className="text-white text-xl md:text-2xl lg:text-3xl uppercase tracking-wider"
              style={{ fontFamily: "Brandon, sans-serif" }}
            >
              Payment Plan
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
