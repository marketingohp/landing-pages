import TheWildsPage from "@/components/TheWildsPage";
import type { Metadata } from "next";
import "../../components/TheWilds/style.css";
export const metadata: Metadata = {
  title: " The Wilds by Aldar",
  description:
    "The Dubai Investment Authority is building a new housing project called The Wilds in Dubai",
};

export default function TheWilds() {
  return <TheWildsPage />;
}
