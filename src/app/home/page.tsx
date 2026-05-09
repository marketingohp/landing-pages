import HomeViewPage from "@/components/HomeView";
import type { Metadata } from "next";
import "../../components/OneResidences/style.css";
export const metadata: Metadata = {
  title: "Discover New Properties in Abu Dhabi",
  description: "Apartments, villas & townhouses in prime locations",

  openGraph: {
    title: "Discover New Properties in Abu Dhabi",
    description: "Apartments, villas & townhouses in prime locations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover New Properties in Abu Dhabi",
    description: "Apartments, villas & townhouses in prime locations",
  },
};

export default function HomePage() {
  return <HomeViewPage />;
}
