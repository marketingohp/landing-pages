import "../../components/SobhaCity/style.css";
import type { Metadata } from "next";
import SobhaCity from "@/components/SobhaCity";
export const metadata: Metadata = {
  title: "Sobha City Abu Dhabi | Luxury Villas & Apartments Near Yas Island",
  description: "Sobha City is a premium freehold community in Abu Dhabi by Sobha Realty, offering luxury apartments, townhouses, and villas with vast green spaces, 20km of trails, and prime connectivity to Yas Island.",
  keywords: [
  "Sobha City Phase 1 Abu Dhabi",
  "Sobha Realty projects Abu Dhabi",
  "luxury villas Abu Dhabi Yas Island",
  "Abu Dhabi freehold communities",
  "apartments near Yas Island",
  "off plan properties Abu Dhabi",
  "Sobha City Al Bahiya",
  "townhouses and villas Abu Dhabi"
],
};

export default function SobhaCityPage() {
  return <SobhaCity />;
}
