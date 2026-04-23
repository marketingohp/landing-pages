import "../../components/OpenDayBurtville/style.css";
import type { Metadata } from "next";
import ComingsoonOhanaPage from "@/components/ComingsoonOhana";
import OhanaComingSoonPage from "@/components/OhanaComingSoon";
import OpenHousePage from "@/components/OpenDayBabAlQasr";
export const metadata: Metadata = {
  title: " Open Day Ohana",
  description:
    "At Open Day Ohana every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Ohana Island",

  openGraph: {
    title: "Open Day Ohana",
    description:
      "At Open Day Ohana every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Ohana Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Day Ohana",
    description:
      "At Open Day Ohana every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Ohana Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function OpenHouse() {
  return <OpenHousePage />;
}
