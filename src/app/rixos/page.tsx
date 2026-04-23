import "../../components/RiXos/style.css";
import type { Metadata } from "next";
import RixosPage from "@/components/RiXos";
export const metadata: Metadata = {
  title: " Rixos Residences ",
  description:
    "At Rixos, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",

  openGraph: {
    title: "Rixos Al Reem Island",
    description:
      "At Rixos, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rixos Al Reem Island",
    description:
      "At Rixos, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function RiXos() {
  return <RixosPage /> ;
}
