import "../../components/TheRowSaadiyat/style.css";
import type { Metadata } from "next";
import WadeemPage from "@/components/Wadeem";
import TheRowSaadiyatPage from "@/components/TheRowSaadiyat";
export const metadata: Metadata = {
  title: " The Row Saadiyat ",
  description:
    "At The Row Saadiyat every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Saadiyat Island",

  openGraph: {
    title: "The Row Saadiyat at Saadiyat Island",
    description:
      "At The Row Saadiyat every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Saadiyat Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Row Saadiyat at Saadiyat Island",
    description:
      "At The Row Saadiyat every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Saadiyat Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function TheRowSaadiyat() {
  return <TheRowSaadiyatPage />;
}
