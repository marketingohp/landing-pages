import "../../components/WadeeM/style.css";
import type { Metadata } from "next";
import WadeemPage from "@/components/Wadeem";
export const metadata: Metadata = {
  title: " Wadeem Plots ",
  description:
    "At Wadeem Plots every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Hudayriyat Island",

  openGraph: {
    title: "Wadeem Plots Hudayriyat Island",
    description:
      "At Wadeem Plots every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Hudayriyat Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wadeem Plots Hudayriyat Island",
    description:
      "At Wadeem Plots every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Hudayriyat Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function WadeeM() {
  return <WadeemPage />;
}
