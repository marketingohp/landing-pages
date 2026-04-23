import "../../components/TheStellarResidences/style.css";
import type { Metadata } from "next";
import TheStellarResidences from "@/components/TheStellarResidences";
export const metadata: Metadata = {
  title:
    "STELLAR by Elie Saab Yas Island | Branded Luxury Residences Abu Dhabi",
  description:
    "Own a branded residence by Elie Saab on Yas Island. STELLAR offers luxury apartments, villas, and penthouses with sea views and world-class amenities in Abu Dhabi.",
  keywords: [
    "elie saab yas island",
    "stellar elie saab abu dhabi",
    "elie saab residences yas island",
    "branded residences yas island",
    "elie saab branded real estate uae",
  ],
};

export default function TheStellarResidencesPage() {
  return <TheStellarResidences />;
}
