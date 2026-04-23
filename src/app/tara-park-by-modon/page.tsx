import "../../components/TaraParkByModon/style.css";
import type { Metadata } from "next";
import TaraParkByModon from "@/components/TaraParkByModon";
export const metadata: Metadata = {
  title: "Tara Park by Modon – Luxury Apartments for Sale | Al Reem Island",
  description:
    "Discover Tara Park by Modon on Al Reem Island, opposite Reem Mall in Abu Dhabi. Modern apartments, premium amenities, flexible payment plan, and strong investment potential.",
  keywords: [
    "Tara Park by Modon",
    "Tara by Modon Al Reem Island",
    "apartments opposite Reem Mall Abu Dhabi",
    "off plan apartments Reem Island Abu Dhabi ",
    "property for sale near Reem Mall",
    "investment property Reem Island Abu Dhabi",
  ],
};

export default function TaraBark() {
  return <TaraParkByModon />;
}
