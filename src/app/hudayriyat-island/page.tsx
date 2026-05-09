import OneResidencePage from "@/components/HudayriaytIsland";
import type { Metadata } from "next";
import "../../components/HudayriyatIsland/style.css";
export const metadata: Metadata = {
  title: " Hudayriyat Island  ",
  description:
    "At Hudayriyat Island, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Masdar City",

  openGraph: {
    title: "Hudayriyat Islands Masdar City",
    description:
      "At Hudayriyat Island, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Masdar City",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hudayriyat Islands Masdar City",
    description:
      "At Hudayriyat Island, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Masdar City",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function HudayriaytIsland() {
  return <OneResidencePage />;
}
