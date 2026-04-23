import "../../components/AlReemIsland/style.css";
import type { Metadata } from "next";
import AlReemIslandPage from "@/components/AlReemIsland";
export const metadata: Metadata = {
  title: " Al Reem Island  ",
  description:
    "At Al Reem Island, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",

  openGraph: {
    title: "Al Reem Island  Island",
    description:
      "At Al Reem Island, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Reem Island Island",
    description:
      "At Al Reem Island, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",
    images: ["/images/al-reem-island/al-reem-island-og-image.jpg"],
  },
};

export default function AlReemIsland() {
  return <AlReemIslandPage />;
}
