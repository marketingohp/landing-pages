import "../../components/CommingSoonReemIsland/style.css";
import type { Metadata } from "next";
import CommingSoonReemIslandPage from "@/components/CommingSoonReemIsland";
export const metadata: Metadata = {
  title: " Coming Soon Reem ",
  description:
    "At Coming Soon Reem every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Reem Island",

  openGraph: {
    title: "Coming Soon Reem Island",
    description:
      "At Coming Soon Reem every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Reem Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coming Soon Reem Island",
    description:
      "At Coming Soon Reem every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Reem Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function CommingSoonReemIsland() {
  return <CommingSoonReemIslandPage />;
}
