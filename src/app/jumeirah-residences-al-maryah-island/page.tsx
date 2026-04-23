import "../../components/JumeirahResidencesAlMaryahIsland/style.css";
import type { Metadata } from "next";
import JumeirahResidencesPage from "@/components/JumeirahResidencesAlMaryahIsland";
export const metadata: Metadata = {
  title: "Jumeirah Residences Al Maryah Island",
  description:
    "At Jumeirah Residences Al Maryah Island, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Maryah Island",

  openGraph: {
    title: "Jumeirah Residences Al Maryah Island",
    description:
      "At Jumeirah Residences Al Maryah Island, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Maryah Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jumeirah Residences Al Maryah Island",
    description:
      "At Jumeirah Residences Al Maryah Island, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Maryah Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function JumeirahResidencesAlMaryahIsland() {
  return <JumeirahResidencesPage /> ;
}
