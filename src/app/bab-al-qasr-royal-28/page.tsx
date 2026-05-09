import BabAlQasr28Page from "@/components/BabAlQasr28";
import type { Metadata } from "next";
import "../../components/BabAlQasr28/style.css";
export const metadata: Metadata = {
  title: " Bab Al Qasr Royal Residence 28 ",
  description:
    "At Bab Al Qasr Royal Residence 28 every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",

  openGraph: {
    title: "Bab Al Qasr Royal Residence 28 at Al Reem Island",
    description:
      "At Bab Al Qasr Royal Residence 28 every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bab Al Qasr Royal Residence 28 at Al Reem Island",
    description:
      "At Bab Al Qasr Royal Residence 28 every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function BabAlQasr28() {
  return <BabAlQasr28Page />;
}
