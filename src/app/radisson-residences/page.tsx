import RadissionResidencesPage from "@/components/RadissionResidences";
import "../../components/RadissionResidences/style.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: " Radisson Residences Al Reem Island",
  description:
    "At Radisson Residence, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",
};
export default function RadissionResidences() {
  return <RadissionResidencesPage />;
}
