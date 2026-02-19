import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carer's Leave Certificate | Certificate to Care for Family | SorryBoss",
  description: "Get a carer's leave certificate when you need to care for a sick family member. Phone consultation with AHPRA pharmacist. $13.99 — no cert, no charge.",
  keywords: ["carers leave certificate", "carer certificate australia", "caring for sick family member", "fair work carers leave"],
  alternates: {
    canonical: "https://sorryboss.com.au/book/carer",
  },
  openGraph: {
    title: "Carer's Leave Certificate | SorryBoss",
    description: "Need to care for a sick family member? Get a carer's leave certificate in 5 minutes. $13.99.",
    url: "https://sorryboss.com.au/book/carer",
    type: "website",
  },
};

export default function CarerBookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
