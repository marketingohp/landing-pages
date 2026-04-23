import "../../components/RotanaResidencesAlReem/style.css";
import type { Metadata } from "next";
import RotanaResidencesAlReemPage from "@/components/RotanaResidencesAlReem";
export const metadata: Metadata = {
  title: " Rotana Residences at Al Reem Island  ",
  description:
    "At Rotana Residences at Al Reem Island, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",

  openGraph: {
    title: "Rotana Residences at Al Reem Island ",
    description:
      "At Rotana Residences at Al Reem Island, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rotana Residences at Al Reem Island",
    description:
      "At Rotana Residences at Al Reem Island, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function RotanaResidencesAlReem() {
  return <RotanaResidencesAlReemPage />;
}
