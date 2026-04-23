import "../../components/StRegisAlMaryah/style.css";
import type { Metadata } from "next";
import StRegisAlMaryahPage from "@/components/StRegisAlMaryah";
export const metadata: Metadata = {
  title: " St.Regis Al Maryah Island ",
  description:
    "At St.Regis Al Maryah every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Maryah Island",

  openGraph: {
    title: "St.Regis Al Maryah, Al Maryah Island",
    description:
      "At St.Regis Al Maryah, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Maryah Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "St.Regis Al Maryah, Al Maryah Island",
    description:
      "At St.Regis Al Maryah, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Maryah Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function StRegisAlMaryah() {
  return <StRegisAlMaryahPage />;
}
