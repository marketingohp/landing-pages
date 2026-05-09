"use client";
import { useState } from "react";

type DiscountBoxProps = {
  percent: number;
  isActive?: boolean;
  onClick?: () => void;
};

const DiscountBox = ({ percent, isActive, onClick }: DiscountBoxProps) => {
  return (
    <div className="w-full group">
      <div
        onClick={onClick}
        className={`w-full text-center p-4 border-2 cursor-pointer hover:underline
        ${isActive ? "bg-[#6C492B] text-white underline" : "border-[#6C492B] bg-transparent"}`}
      >
        Discount {percent}%
      </div>
    </div>
  );
};

const PaymentSection = () => {
  const offers = [
    {
      id: 1,
      percent: 10,
      content: "Down payment 10% (1% monthly till handover)",
    },
    {
      id: 2,
      percent: 15,
      content: "Down payment 15% (1% monthly till handover)",
    },
    {
      id: 3,
      percent: 20,
      content: "Down payment 20% (1% monthly till handover)",
    },
  ];

  const defaultOfferId = 3;

  const [selectedOffer, setSelectedOffer] = useState<number | null>(null);

  const selected = offers.find(
    (offer) =>
      offer.id === selectedOffer ||
      (selectedOffer == null && offer.id == defaultOfferId),
  );

  return (
    <section id="payment-options" className="py-30 bg-[#F5F5F0]">
      <div className="w-full p-4 sm:w-[50%] sm:p-0 mx-auto flex flex-col gap-3">
        {/* heading */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 px-7 bg-[#6C492B]">
          <h2 className="text-white text-2xl">Payment Plan</h2>
          <p className="text-[#FEE7D4]">Flexible down payment structure</p>
        </div>

        {/* boxes */}
        <div className="w-full flex flex-col sm:flex-row gap-3">
          {offers.map((offer) => (
            <DiscountBox
              key={offer.id}
              percent={offer.percent}
              isActive={
                selectedOffer === offer.id ||
                (selectedOffer == null && offer.id == defaultOfferId)
              }
              onClick={() => setSelectedOffer(offer.id)}
            />
          ))}
        </div>

        {/* dynamic content */}
        {selected && <div className="p-4 border">{selected.content}</div>}
      </div>
    </section>
  );
};

export default PaymentSection;
