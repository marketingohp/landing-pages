import "../../components/RadiantWave/style.css";
import type { Metadata } from "next";
import RadiantWavePage from "@/components/RadiantWave";
export const metadata: Metadata = {
  title: " Radiant Waves ",
  description:
    "At Radiant Wave, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",

  openGraph: {
    title: "Radiant Waves Al Reem Island",
    description:
      "At Radiant Wave, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radiant Waves Al Reem Island",
    description:
      "At Radiant Wave, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",
    images: ["/images/one-residences/one-residences-og-image.jpg"],
  },
};

export default function RadiantWave() {
  return <RadiantWavePage />;
}
