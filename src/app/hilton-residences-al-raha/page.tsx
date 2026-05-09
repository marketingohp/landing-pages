import HiltonResidencesAlRahaPage from "@/components/HiltonResidencesAlRaha";
import type { Metadata } from "next";
import "../../components/HiltonResidencesAlRaha/style.css";
export const metadata: Metadata = {
  title:
    "Hilton Residences Al Raha Beach Abu Dhabi | Branded Waterfront Living",
  description:
    "Hilton Residences Al Raha Beach Abu Dhabi offers premium branded apartments, townhouses, and penthouses with sea views, refined interiors, and a flexible 40/60 payment plan in a prime waterfront location.",
  keywords: [
    "Hilton Residences Al Raha Beach",
    "Hilton branded residences Abu Dhabi",
    "Al Raha Beach properties",
    "waterfront apartments Abu Dhabi",
    "luxury residences Abu Dhabi",
    "Abu Dhabi branded real estate",
    "Emirates Developments projects",
    "off plan Abu Dhabi waterfront",
  ],
};

export default function HiltonResidencesAlRaha() {
  return <HiltonResidencesAlRahaPage />;
}
