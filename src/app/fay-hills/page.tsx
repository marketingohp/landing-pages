import OneResidencePage from "@/components/FayHills";
import type { Metadata } from "next";
import "../../components/FayHills/style.css";
export const metadata: Metadata = {
  title: " Fay Hills  ",
  description:
    "At Fay Hills, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Masdar City",

  openGraph: {
    title: "Fay Hillss Masdar City",
    description:
      "At Fay Hills, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Masdar City",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fay Hillss Masdar City",
    description:
      "At Fay Hills, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Masdar City",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function FayHills() {
  return <OneResidencePage />;
}
