import type { Metadata } from "next";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | Mask'd",
  description:
    "How Mask'd Studio collects, uses, and protects the personal information you share with us.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
