import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Leave Certificate | Sick Certificate Online | SorryBoss",
  description: "Get a personal leave certificate for when you're unwell. Phone consultation with an AHPRA-registered pharmacist. Certificate emailed in minutes. $13.99.",
  keywords: ["personal leave certificate", "sick certificate online", "medical certificate australia", "pharmacist sick certificate"],
  alternates: {
    canonical: "https://www.sorryboss.com.au/book/personal",
  },
  openGraph: {
    title: "Personal Leave Certificate | SorryBoss",
    description: "Unwell and need a certificate? Get one in 5 minutes via phone consultation. $13.99 — no cert, no charge.",
    url: "https://www.sorryboss.com.au/book/personal",
    type: "website",
  },
};

export default function PersonalBookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
