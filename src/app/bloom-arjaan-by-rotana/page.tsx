import BloomArjaanByRotanaPage from "@/components/BloomArjaanByRotana";
import type { Metadata } from "next";
import "../../components/BloomArjaanByRotana/style.css";
export const metadata: Metadata = {
  title: " Bloom Arjaan by Rotana Masdar City",
  description:
    "At Bloom Arjaan by Rotana, every moment is crafted between elegant city vibes and calm sea horizons. Located in the heart of Al Reem Island",
};
export default function BloomArjaanByRotana() {
  return <BloomArjaanByRotanaPage />;
}
