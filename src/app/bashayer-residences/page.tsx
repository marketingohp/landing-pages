import BashayerResidencesPage from "@/components/BashayerResidences";
import type { Metadata } from "next";
import "../../components/BashayerResidences/style.css";
export const metadata: Metadata = {
  title: " Bashayer Residences  ",
  description:
    "At Bashayer Residences, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Hudayriyat Island",

  openGraph: {
    title: "Bashayer Residencess Hudayriyat Island",
    description:
      "At Bashayer Residences, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Hudayriyat Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bashayer Residencess Hudayriyat Island",
    description:
      "At Bashayer Residences, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Hudayriyat Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function FayHills() {
  return <BashayerResidencesPage />;
}
