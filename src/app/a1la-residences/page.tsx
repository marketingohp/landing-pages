import "../../components/A1LAResidences/style.css";
import type { Metadata } from "next";
import A1LAResidencesPage from "@/components/A1LAResidences";
export const metadata: Metadata = {
  title: "A1LA Residence Al Reem Island – Prices & Payment Plan",
  description:
    " Explore A1LA (Aila) Residence by Object 1 on Al Reem Island — modern apartments for sale, price info, payment plans and off-plan investment opportunity.",
    keywords: ["A1LA Residence by Object 1", "A1La Residence Al Reem Island", "A1LA Residence price", "Reem Island off-plan apartments","Apartments for sale in Al Reem Island"],
};

export default function TheWildsResidences() {
  return <A1LAResidencesPage /> ;
}