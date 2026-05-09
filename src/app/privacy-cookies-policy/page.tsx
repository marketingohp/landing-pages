import PrivacyPolicyPage from "@/components/PrivacyPolicy";
import type { Metadata } from "next";
import "../../components/PrivacyPolicy/style.css";
export const metadata: Metadata = {
  title: "PrivacyPolicy Abu Dhabi Properties ",
  description: "",
};

export default function OneResidence() {
  return <PrivacyPolicyPage />;
}
