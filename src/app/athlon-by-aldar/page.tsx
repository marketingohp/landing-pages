import AthlonByAldarPage from "@/components/AthlonByAldar";
import type { Metadata } from "next";
import "../../components/MagentaTower/style.css";
export const metadata: Metadata = {
  title: "Athlon by Aldar",
  description:
    "Athlon by Aldar is a new residential project located in Dubailand. It is a project that is being developed by Aldar  Dubailand Investment Authority.",

  openGraph: {
    title: "Athlon by Aldar",
    description:
      "Athlon by Aldar is a new residential project located in Dubailand. It is a project that is being developed by Aldar Dubailand Investment Authority.",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athlon by Aldar",
    description:
      "Athlon by Aldar is a new residential project located in Dubailand. It is a project that is being developed by the Dubailand Investment Authority.",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function AthlonByAldar() {
  return <AthlonByAldarPage />;
}
