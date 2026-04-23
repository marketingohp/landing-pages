import "../../components/ReemHillsByModon/style.css";
import type { Metadata } from "next";
import ReemHillsByModon from "@/components/ReemHillsByModon";
export const metadata: Metadata = {
  title: "Reem Hills | Luxury Gated Community in Abu Dhabi",
  description:
    "Discover Reem Hills in Abu Dhabi, a gated community offering luxury living with landscaped surroundings, beaches, and canal views. A balanced lifestyle with premium amenities and secure environment.",
  keywords: [
    "Reem Hills Abu Dhabi",
    "Reem Hills property for sale",
    "gated community Abu Dhabi",
    "luxury property Reem Island",
    "Reem Hills Modon",
  ],
};

export default function ReemHillsByModonPage() {
  return <ReemHillsByModon />;
}
