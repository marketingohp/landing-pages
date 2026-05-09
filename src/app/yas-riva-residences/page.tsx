import YasRivaResidencesPage from "@/components/YasRivaResidences";
import type { Metadata } from "next";
import "../../components/YasRivaResidences/style.css";
export const metadata: Metadata = {
  title: " Yas Riva Residences  ",
  description:
    "At Yas Riva Residences, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Yas Island",

  openGraph: {
    title: "Yas Riva Residencess Yas Island",
    description:
      "At Yas Riva Residences, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Yas Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yas Riva Residencess Yas Island",
    description:
      "At Yas Riva Residences, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Yas Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function YasRivaResidences() {
  return <YasRivaResidencesPage />;
}
