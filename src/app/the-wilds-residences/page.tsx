import "../../components/TheWildsResidences/style.css";
import type { Metadata } from "next";
import TheWildsResidencesPage from "@/components/TheWildsResidences";

export const metadata: Metadata = {
  title: "The Wilds Residences by Aldar – Nature-Inspired Apartments in Dubai",
  description:
    "Discover The Wilds Residences by Aldar in Dubailand, Dubai. Nature-inspired 1–3BR apartments near Global Village with green parks, premium amenities and flexible payment plan.",
  keywords: [
    "The Wilds Residences by Aldar",
    "Apartments for sale Dubailand Dubai",
    "Nature inspired apartments Dubai",
    "Apartments near Global Village Dubai",
    "off plan apartments Dubailand",
    "apartments near Al Barari Dubai",
  ],
};

export default function TheWildsResidences() {
  return <TheWildsResidencesPage />;
}
