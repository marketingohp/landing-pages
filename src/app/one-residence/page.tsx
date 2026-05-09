import OneResidencePage from "@/components/OneResidences";
import type { Metadata } from "next";
import "../../components/OneResidences/style.css";
export const metadata: Metadata = {
  title: "One Residences Al Reem Island",
  description:
    "At ONE Residence, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",

  openGraph: {
    title: "One Residences Al Reem Island",
    description:
      "At ONE Residence, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Residences Al Reem Island",
    description:
      "At ONE Residence, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function OneResidence() {
  return <OneResidencePage />;
}
