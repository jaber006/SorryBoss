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
  keywords: ["sick certificate", "medical certificate", "absence from work certificate", "pharmacist certificate", "Australia", "online medical certificate", "telehealth certificate", "Fair Work Act certificate"],
  authors: [{ name: "SorryBoss" }],
  creator: "SorryBoss",
  publisher: "SorryBoss",
  metadataBase: new URL("https://www.sorryboss.com.au"),
  alternates: {
    canonical: "https://www.sorryboss.com.au",
  },
  openGraph: {
    title: "SorryBoss — Sick Cert in Minutes",
    description: "Get an Absence from Work Certificate from an Australian registered pharmacist. Phone consult from bed. $13.99, no cert no charge.",
    url: "https://www.sorryboss.com.au",
    siteName: "SorryBoss",
    locale: "en_AU",
    type: "website",
    // Images auto-generated from opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "SorryBoss — Sick Cert in Minutes",
    description: "Get an Absence from Work Certificate from an Australian registered pharmacist. $13.99, no cert no charge.",
    // Images auto-generated from twitter-image.tsx
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when you set up Search Console
    // google: "your-google-verification-code",
  },
};

// JSON-LD Schema for rich snippets
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.sorryboss.com.au/#website",
      url: "https://www.sorryboss.com.au",
      name: "SorryBoss",
      description: "Online Absence from Work Certificates from Australian Registered Pharmacists",
      publisher: {
        "@id": "https://www.sorryboss.com.au/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.sorryboss.com.au/#organization",
      name: "SorryBoss",
      url: "https://www.sorryboss.com.au",
      logo: {
        "@type": "ImageObject",
        url: "https://www.sorryboss.com.au/logo.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+61429664266",
        contactType: "customer service",
        areaServed: "AU",
        availableLanguage: "English",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.sorryboss.com.au/#service",
      name: "Absence from Work Certificate",
      description: "Phone consultation with an AHPRA registered pharmacist to obtain a valid Absence from Work Certificate under the Fair Work Act 2009.",
      provider: {
        "@id": "https://www.sorryboss.com.au/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      offers: {
        "@type": "Offer",
        price: "13.99",
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.sorryboss.com.au/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is a pharmacist certificate actually legit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Under the Fair Work Act 2009, registered pharmacists are authorised to issue Absence from Work Certificates as valid evidence of illness for personal leave and carer's leave. Our certificates comply with section 107(3) of the Act.",
          },
        },
        {
          "@type": "Question",
          name: "Will my employer accept a pharmacist certificate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most employers accept pharmacist certificates — they're legally recognised under Fair Work. We recommend confirming with your employer beforehand. The certificate includes the pharmacist's AHPRA registration number for verification.",
          },
        },
        {
          "@type": "Question",
          name: "How long can the certificate cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pharmacist certificates typically cover 1–2 days for minor ailments like colds, headaches, gastro, and similar conditions. For longer absences or serious conditions, we'll refer you to a GP.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get a certificate for carer's leave?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. If you need to care for a sick family or household member, we can issue a carer's leave certificate. The unwell person should ideally be available to speak briefly during the call.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a sick certificate cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SorryBoss charges $13.99 for an Absence from Work Certificate. If our pharmacist can't issue you a certificate, you pay nothing — no cert, no charge guaranteed.",
          },
        },
      ],
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
