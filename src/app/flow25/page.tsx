import "../../components/Flow25/style.css";
import type { Metadata } from "next";
import Flow25Page from "@/components/Flow25";
export const metadata: Metadata = {
  title: " Flow 25  ",
  description:
    "At Flow 25, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Yas Island",

  openGraph: {
    title: "Flow 25 Yas Island",
    description:
      "At Flow 25, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Yas Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow 25 Yas Island",
    description:
      "At Flow 25, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Yas Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function Flow25() {
  return <Flow25Page />;
}
