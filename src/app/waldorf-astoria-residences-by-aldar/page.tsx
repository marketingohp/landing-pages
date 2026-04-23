import "../../components/WaldorfAstoriaResidencesByAldar/style.css";
import type { Metadata } from "next";
import WaldorfAstoriaResidencesByAldar from "@/components/WaldorfAstoriaResidencesByAldar";
export const metadata: Metadata = {
  title: "The Beach House waldorf by Aldar | Waterfront Apartments Abu Dhabi",
  description: "The Beach House waldorf by Aldar is a premium waterfront residential project on waldorf Island, Abu Dhabi, offering modern apartments with beach access, Italian finishes, and strong investment potential near Yas and Saadiyat Islands.",
  keywords: [
  "The Beach House waldorf Aldar",
  "waldorf Island Abu Dhabi property",
  "waterfront apartments Abu Dhabi",
  "Aldar projects Abu Dhabi",
  "Abu Dhabi off plan projects"
],
};

export default function WaldorfAstoriaResidencesByAldarPage() {
  return <WaldorfAstoriaResidencesByAldar />;
}
