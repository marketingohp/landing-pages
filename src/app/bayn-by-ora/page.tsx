import BaynByOraPage from "@/components/BaynByOra";
import type { Metadata } from "next";
import "../../components/BaynByOra/style.css";
export const metadata: Metadata = {
  title: " Bayn By Ora  ",
  description:
    "At Bayn By Ora, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Ghantoot",

  openGraph: {
    title: "Bayn By Ora Ghantoot",
    description:
      "At Bayn By Ora, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Ghantoot",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayn By Ora Ghantoot",
    description:
      "At Bayn By Ora, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Ghantoot",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

// test comment

export default function BaynByOra() {
  return <BaynByOraPage />;
}
