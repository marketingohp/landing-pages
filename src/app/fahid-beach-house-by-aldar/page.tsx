import FahidBeachHouseByAldar from "@/components/FahidBeachHouseByAldar";
import type { Metadata } from "next";
import "../../components/FahidBeachHouseByAldar/style.css";
export const metadata: Metadata = {
  title: "The Beach House Fahid by Aldar | Waterfront Apartments Abu Dhabi",
  description:
    "The Beach House Fahid by Aldar is a premium waterfront residential project on Fahid Island, Abu Dhabi, offering modern apartments with beach access, Italian finishes, and strong investment potential near Yas and Saadiyat Islands.",
  keywords: [
    "The Beach House Fahid Aldar",
    "Fahid Island Abu Dhabi property",
    "waterfront apartments Abu Dhabi",
    "Aldar projects Abu Dhabi",
    "Abu Dhabi off plan projects",
  ],
};

export default function FahidBeachHouseByAldarPage() {
  return <FahidBeachHouseByAldar />;
}
