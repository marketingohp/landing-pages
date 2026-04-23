import "../../components/SeamontAutographCollectionResidences/style.css";
import type { Metadata } from "next";
import SeaMontAutoGraPhCollectionPage from "@/components/SeaMontAutoGraPhCollection";
export const metadata: Metadata = {
  title: " Seamont Autograph Collection Residences ",
  description:
    "At Seamont Autograph Collection Residences every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",

  openGraph: {
    title: "Seamont Autograph Collection Residences Al Reem Island",
    description:
      "At Seamont Autograph Collection Residences every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seamont Autograph Collection Residences Al Reem Island",
    description:
      "At Seamont Autograph Collection Residences every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function SeamontAutographCollectionResidences() {
  return <SeaMontAutoGraPhCollectionPage />;
}
