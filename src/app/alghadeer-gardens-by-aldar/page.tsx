import "../../components/AlghadeerGardensByAldar/style.css";
import type { Metadata } from "next";
import AlghadeerGardensByAldar from "@/components/AlghadeerGardensByAldar";
export const metadata: Metadata = {
  title: "Al Ghadeer Gardens | Modern Living Between Abu Dhabi & Dubai",
  description: "Perfectly positioned on the border of Dubai and Abu Dhabi. Al Ghadeer Gardens offers sustainable living near Expo City & DWC. Luxury villas with private gardens.",
  keywords: [
  "Al Ghadeer Gardens Aldar",
  "Al Ghadeer Phase 2 Abu Dhabi",
  "Aldar Al Ghadeer villas",
  "Al Ghadeer Gardens ROI",
  "Al Ghadeer for sale"
],
};

export default function AlghadeerGardensByAldarPage() {
  return <AlghadeerGardensByAldar />;
}
