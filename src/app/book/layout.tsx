import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Certificate | Online Medical Certificate Australia | SorryBoss",
  description: "Book a phone consultation with an AHPRA-registered pharmacist. Get your Absence from Work Certificate in 5 minutes. $13.99 — no cert, no charge.",
  keywords: ["book medical certificate", "online sick certificate", "pharmacist certificate booking", "absence from work certificate"],
  alternates: {
    canonical: "https://sorryboss.com.au/book",
  },
  openGraph: {
    title: "Book Your Certificate | SorryBoss",
    description: "Get a medical certificate in 5 minutes. Phone consultation with AHPRA pharmacist. $13.99 — only if issued.",
    url: "https://sorryboss.com.au/book",
    type: "website",
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
