import "../../components/FourSeasons/style.css";
import type { Metadata } from "next";
import FourSeasonsPage from "@/components/FourSeasons";
export const metadata: Metadata = {
  title: "Four Seasons",
  description:
    "At Four Seasons, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Saadiyat Island",

  openGraph: {
    title: "Four Seasons at Saadiyat Island",
    description:
      "At Four Seasons, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Saadiyat Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Four Seasons Saadiyat Island",
    description:
      "At Four Seasons, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Saadiyat Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function FourSeasons() {
  return <FourSeasonsPage /> ;
}
