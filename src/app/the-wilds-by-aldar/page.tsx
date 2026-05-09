import TheWildsByAldarPage from "@/components/TheWildsByAldar";
import type { Metadata } from "next";
import "../../components/TheWildsByAldar/style.css";
export const metadata: Metadata = {
  title: " The Wilds ",
  description:
    "The Wilds is a new residential project located in Abu Dhabi. It is a project that is being developed by the Abu Dhabi Investment Authority.",

  openGraph: {
    title: "The Wilds",
    description:
      "The Wilds is a new residential project located in Abu Dhabi. It is a project that is being developed by the Abu Dhabi Investment Authority.",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wilds",
    description:
      "The Wilds is a new residential project located in Abu Dhabi. It is a project that is being developed by the Abu Dhabi Investment Authority.",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function TheWildsByAldar() {
  return <TheWildsByAldarPage />;
}
