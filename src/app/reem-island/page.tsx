import "../../components/ReemIsland/style.css";
import type { Metadata } from "next";
import ReemIslandPage from "@/components/ReemIsland";
export const metadata: Metadata = {
  title: " Reem Island  ",
  description:
    "At Reem Island, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Reem Island",

  openGraph: {
    title: "Reem Island  Island",
    description:
      "At Reem Island, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Reem Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reem Island Island",
    description:
      "At Reem Island, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Reem Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function ReemIsland() {
  return <ReemIslandPage />;
}
