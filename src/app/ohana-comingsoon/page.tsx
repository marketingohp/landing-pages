import OhanaComingSoonPage from "@/components/OhanaComingSoon";
import type { Metadata } from "next";
import "../../components/OhanaComingSoon/style.css";
export const metadata: Metadata = {
  title: " Coming Soon Ohana",
  description:
    "At Coming Soon Ohana every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Ohana Island",

  openGraph: {
    title: "Coming Soon Ohana",
    description:
      "At Coming Soon Ohana every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Ohana Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coming Soon Ohana",
    description:
      "At Coming Soon Ohana every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Ohana Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function OhanaComingSoon() {
  return <OhanaComingSoonPage />;
}
