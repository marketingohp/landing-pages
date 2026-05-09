import OhanaMonchesterYasPage from "@/components/OhanaMonchesterYas";
import type { Metadata } from "next";
import "../../components/OhanaMonchesterYas/style.css";
export const metadata: Metadata = {
  title: "Manchester City Yas Residences By Ohana",
  description:
    "Manchester City Yas Residences By Ohana Development is a new residential project located in Yas Island. It is a project that is being developed by the Yas Island Investment Authority.",

  openGraph: {
    title: "Ohana",
    description:
      "Manchester City Yas Residences By Ohana Development is a new residential project located in Yas Island. It is a project that is being developed by the Yas Island Investment Authority.",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manchester City Yas Residences by Ohana Development",
    description:
      "Manchester City Yas Residences By Ohana is a new residential project located in Yas Island. It is a project that is being developed by the Yas Island Investment Authority.",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function OhanaMonchesterYas() {
  return <OhanaMonchesterYasPage />;
}
