import "../../components/OgamiByAldar/style.css";
import type { Metadata } from "next";
import OgamiByAldar from "@/components/OgamiByAldar";
export const metadata: Metadata = {
  title: "Ogami Water Chalets Ras El Hekma | Coastal Chalets On Egypt’s North Coast",
  description: "Discover Ogami Water Chalets in Ras El Hekma featuring swimmable lagoons, beachfront living, wellness spaces, and 2 & 3 bedroom coastal homes inspired by Mediterranean and Japanese design.",
  keywords: [
  "Ogami Water Chalets",
  "Ogami Ras El Hekma",
  "North Coast Chalets Egypt",
  "Ras El Hekma Chalets",
  "Ogami North Coast",
  "Water Chalets Egypt",
  "Luxury Chalets Ras El Hekma",
  "SODIC Ogami"
],
};

export default function OgamiByAldarPage() {
  return <OgamiByAldar />;
}
