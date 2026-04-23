import "../../components/YasParkPlaceByAldar/style.css";
import type { Metadata } from "next";
import YasParkPlaceByAldar from "@/components/YasParkPlaceByAldar";
export const metadata: Metadata = {
  title: "Yas Park Place by Aldar | Apartments for Sale on Yas Island Abu Dhabi",
  description: "Discover Yas Park Place by Aldar on Yas Island, Abu Dhabi. Modern studio to 3BR apartments near Yas Park, Yas Mall and Ferrari World with premium amenities and payment plan.",
  keywords: [
  "Yas Park Place by Aldar",
  "Yas Park Place Aldar apartments",
  "apartments for sale Yas Island Abu Dhabi",
  "off plan apartments Yas Island",
  "Aldar apartments Yas Island",
  "Yas Island property investment"
],
};

export default function YasParkPlaceByAldarPage() {
  return <YasParkPlaceByAldar />;
}
