import ShobaProjectinYasGatewayPage from "@/components/ShobaProjectinYasGateway";
import type { Metadata } from "next";
import "../../components/ShobaProjectYas/style.css";
export const metadata: Metadata = {
  title: " Shoba Project in Yas  ",
  description:
    "At Shoba Project in Yas, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Yas Island",

  openGraph: {
    title: "Shoba Project in Yas  Island",
    description:
      "At Shoba Project in Yas, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Yas Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoba Project in Yas Island",
    description:
      "At Shoba Project in Yas, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Yas Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function ShobaProjectYas() {
  return <ShobaProjectinYasGatewayPage />;
}
