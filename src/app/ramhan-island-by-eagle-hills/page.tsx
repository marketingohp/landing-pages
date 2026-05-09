import RamhanIslandByEagleills from "@/components/RamhanIslandByEagleills";
import type { Metadata } from "next";
import "../../components/RamhanIslandByEagleills/style.css";
export const metadata: Metadata = {
  title:
    "Ramhan Island Abu Dhabi | Natural Island Luxury Villas by Eagle Hills",
  description:
    "Ramhan Island by Eagle Hills is a 4M sqm natural island in Abu Dhabi offering ultra-luxury 3–7BR beachfront villas with private beaches, infinity pools, marina, luxury hotels, and a vibrant waterfront promenade. Experience exclusive island living near Yas and Saadiyat.",
  keywords: [
    "Ramhan Island Abu Dhabi",
    "Ramhan Island villas",
    "Eagle Hills Ramhan Island",
    "private beach villas UAE",
    "Ramhan Island project details",
  ],
};

export default function RamhanIslandByEagleillsPage() {
  return <RamhanIslandByEagleills />;
}
