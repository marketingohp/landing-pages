import OpenHousePage from "@/components/OpenDayBabAlQasr";
import type { Metadata } from "next";
import "../../components/OpenDayBurtville/style.css";
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
