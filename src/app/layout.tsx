import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "SorryBoss — Sick Cert in Minutes | Australian Pharmacist Certificates",
  description: "Too sick for work? Get an Absence from Work Certificate from an Australian registered pharmacist. No waiting rooms. No $80 GP fees. Phone consult from bed.",
  keywords: ["sick certificate", "medical certificate", "absence from work", "pharmacist certificate", "Australia"],
  openGraph: {
    title: "SorryBoss — Sick Cert in Minutes",
    description: "Get an Absence from Work Certificate from an Australian registered pharmacist. Phone consult from bed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
