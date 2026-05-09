import MagentaTowerPage from "@/components/MagentaTower";
import type { Metadata } from "next";
import "../../components/MagentaTower/style.css";
export const metadata: Metadata = {
  title: "Magenta Tower",
  description:
    "Magenta Tower is a new residential project located in Dubailand. It is a project that is being developed by the Dubailand Investment Authority.",

  openGraph: {
    title: "Magenta Tower",
    description:
      "Magenta Tower is a new residential project located in Dubailand. It is a project that is being developed by the Dubailand Investment Authority.",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magenta Tower",
    description:
      "Magenta Tower is a new residential project located in Dubailand. It is a project that is being developed by the Dubailand Investment Authority.",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function MagentaTower() {
  return <MagentaTowerPage />;
}
