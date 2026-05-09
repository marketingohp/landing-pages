import RadiantBridgesByRadiant from "@/components/RadiantBridgesByRadiant";
import type { Metadata } from "next";
import "../../components/RadiantBridgesByRadiant/style.css";
export const metadata: Metadata = {
  title:
    "Radiant Bridges Reem Island | Canal View Apartments & Offices | 5% Down Payment",
  description:
    "Explore Radiant Bridges on Al Reem Island, a premium canal-view mixed-use development featuring apartments, Grade-A offices, and retail spaces. Studios to 3BR duplexes with 5% down payment and flexible 50/50 plan in a prime location near Reem Mall and Al Maryah Island.",
  keywords: [
    "Radiant Bridges Reem Island",
    "canal view apartments Reem Island",
    "Radiant Bridges price",
    "new launch reem island",
    "Reem Island property investment",
    "apartments and offices in Reem Island for sale",
  ],
};

export default function RadiantBridgesByRadiantPage() {
  return <RadiantBridgesByRadiant />;
}
