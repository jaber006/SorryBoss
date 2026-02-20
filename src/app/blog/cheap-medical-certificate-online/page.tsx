import Link from "next/link";
import { ArrowLeft, Check, DollarSign, Clock, Shield, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cheapest Medical Certificate Online Australia 2025 | SorryBoss",
  description: "Compare medical certificate costs in Australia. From free bulk-billed GP visits to $80+ telehealth, find out where SorryBoss fits at $24.95 with a 5-minute phone consultation.",
  keywords: ["cheap medical certificate online", "$10 medical certificate", "cheap medical certificate australia", "cheapest medical certificate", "affordable medical certificate online", "low cost sick certificate"],
  alternates: {
    canonical: "https://sorryboss.com.au/blog/cheap-medical-certificate-online",
  },
  openGraph: {
    title: "Cheapest Medical Certificate Online Australia 2025",
    description: "Compare medical certificate costs in Australia. Find the most affordable way to get a legitimate sick certificate fast.",
    type: "article",
    publishedTime: "2025-02-22",
    url: "https://sorryboss.com.au/blog/cheap-medical-certificate-online",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the cheapest way to get a medical certificate in Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cheapest option is a bulk-billed GP visit ($0), but wait times can be 1-3+ hours. For speed and convenience, SorryBoss offers pharmacist certificates for $24.95 with a 5-minute phone consultation — the best value when you factor in time saved."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a $10 medical certificate online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Very few legitimate services offer medical certificates for $10 or less. Most online services charge $20-80. SorryBoss offers certificates at $24.95, which is among the most affordable legitimate options that includes a proper phone consultation with an AHPRA-registered pharmacist."
      }
    },
    {
      "@type": "Question",
      "name": "Why do medical certificate costs vary so much?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Costs vary based on the type of practitioner (GP vs pharmacist), consultation method (in-person vs telehealth vs phone), Medicare rebates, and practice overheads. GP visits without bulk billing can cost $60-120, while pharmacist phone consultations are typically $15-30."
      }
    },
    {
      "@type": "Question",
      "name": "Is a cheap medical certificate still valid?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, as long as it's issued by an AHPRA-registered health practitioner. Under the Fair Work Act 2009, certificates from pharmacists are just as legally valid as those from GPs. Price doesn't affect legitimacy."
      }
    },
    {
      "@type": "Question",
      "name": "How much does SorryBoss charge for a medical certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SorryBoss charges $24.95 for an Absence from Work Certificate issued by an AHPRA-registered pharmacist. This includes a phone consultation, and you only pay if the certificate is issued — no cert, no charge."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cheapest Medical Certificate Online Australia 2025",
  "description": "Complete price comparison of medical certificate options in Australia, from bulk-billed GP visits to telehealth to pharmacist services like SorryBoss.",
  "author": {
    "@type": "Organization",
    "name": "SorryBoss"
  },
  "publisher": {
    "@type": "Organization",
    "name": "SorryBoss",
    "logo": {
      "@type": "ImageObject",
      "url": "https://sorryboss.com.au/logo.png"
    }
  },
  "datePublished": "2025-02-22",
  "dateModified": "2025-02-22",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://sorryboss.com.au/blog/cheap-medical-certificate-online"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://sorryboss.com.au"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://sorryboss.com.au/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Cheapest Medical Certificate Online",
      "item": "https://sorryboss.com.au/blog/cheap-medical-certificate-online"
    }
  ]
};

export default function CheapMedicalCertificateOnlinePage() {
  return (
    <main className="min-h-screen bg-[#FDF8EE]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between bg-[#FDF8EE]/85 backdrop-blur-xl border-b border-black/5">
        <Link href="/" className="flex items-center gap-2 text-[#1A1A1A] no-underline" style={{ fontFamily: "'Instrument Serif', serif" }}>
          <span className="w-2.5 h-2.5 bg-[#E8B931] rounded-full" />
          <span className="text-2xl md:text-[28px]">SorryBoss</span>
        </Link>
        <Link 
          href="/book" 
          className="bg-[#1A1A1A] text-[#FDF8EE] px-5 md:px-7 py-3 rounded-full text-sm md:text-[15px] font-semibold tracking-tight hover:bg-[#E8B931] hover:text-[#1A1A1A] hover:-translate-y-0.5 transition-all duration-300"
        >
          Get Your Cert →
        </Link>
      </nav>

      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#6B6560] mb-8">
            <Link href="/" className="hover:text-[#1A1A1A]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#1A1A1A]">Blog</Link>
            <span>/</span>
            <span className="text-[#1A1A1A]">Cheap Medical Certificate Online</span>
          </nav>

          {/* Back link */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-[#6B6560] hover:text-[#1A1A1A] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-[#6B6560] mb-4">
              <time dateTime="2025-02-22">22 February 2025</time>
              <span>•</span>
              <span>8 min read</span>
            </div>
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Cheapest Medical Certificate Online Australia 2025
            </h1>
            <p className="text-xl text-[#6B6560] leading-relaxed">
              Looking for an <strong className="text-[#1A1A1A]">affordable medical certificate</strong>? We compare all your options — from free bulk-billed GP visits to premium telehealth services — and show you where to find the best value.
            </p>
          </header>

          {/* Quick Answer Box */}
          <div className="bg-[#F0FDF4] border border-[#3D8B37]/20 rounded-2xl p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold mb-4 mt-0 flex items-center gap-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
              <DollarSign className="w-6 h-6 text-[#3D8B37]" />
              The Bottom Line
            </h2>
            <p className="text-[#1A1A1A] mb-4">
              <strong>Cheapest overall:</strong> Bulk-billed GP visit ($0) — but expect 1-3+ hour wait times.
            </p>
            <p className="text-[#1A1A1A] mb-4">
              <strong>Best value for speed:</strong> <Link href="/" className="text-[#3D8B37] hover:underline">SorryBoss</Link> pharmacist certificate ($24.95) — 5-minute phone consultation, certificate emailed instantly.
            </p>
            <p className="text-[#1A1A1A] mb-0">
              When you factor in time, travel, and convenience, a $24.95 phone consultation is often cheaper than a &quot;free&quot; visit that costs you half a day.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              Let&apos;s be honest: when you&apos;re sick, the last thing you want to worry about is how much a medical certificate will cost. Unfortunately, prices in Australia vary wildly — from $0 to over $150 depending on where and how you get one.
            </p>
            <p>
              This guide breaks down all your options so you can make an informed choice. We&apos;ll look at the true cost of each option (including your time), and help you find the <strong>cheapest medical certificate</strong> that still meets your needs.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Medical Certificate Cost Comparison 2025</h2>
            
            <p>
              Here&apos;s a comprehensive breakdown of what you can expect to pay for a medical certificate in Australia:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-3 pr-4">Option</th>
                    <th className="text-left py-3 pr-4">Cost</th>
                    <th className="text-left py-3 pr-4">Wait Time</th>
                    <th className="text-left py-3">Convenience</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Bulk-billed GP</td>
                    <td className="py-3 pr-4 font-semibold text-[#3D8B37]">$0</td>
                    <td className="py-3 pr-4">1-3+ hours</td>
                    <td className="py-3 text-[#6B6560]">Must leave home, wait in clinic</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Private GP (no Medicare)</td>
                    <td className="py-3 pr-4">$60–120</td>
                    <td className="py-3 pr-4">15-60 mins</td>
                    <td className="py-3 text-[#6B6560]">Must leave home</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Telehealth GP (video)</td>
                    <td className="py-3 pr-4">$35–80</td>
                    <td className="py-3 pr-4">15-45 mins</td>
                    <td className="py-3 text-[#6B6560]">Need device with camera</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">After-hours doctor</td>
                    <td className="py-3 pr-4">$80–150+</td>
                    <td className="py-3 pr-4">1-2+ hours</td>
                    <td className="py-3 text-[#6B6560]">Home visit available</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Walk-in pharmacy</td>
                    <td className="py-3 pr-4">$15–30</td>
                    <td className="py-3 pr-4">10-30 mins</td>
                    <td className="py-3 text-[#6B6560]">Must leave home</td>
                  </tr>
                  <tr className="bg-[#F0FDF4]">
                    <td className="py-3 pr-4 font-semibold">SorryBoss (phone)</td>
                    <td className="py-3 pr-4 font-semibold text-[#3D8B37]">$24.95</td>
                    <td className="py-3 pr-4 font-semibold text-[#3D8B37]">5 minutes</td>
                    <td className="py-3 text-[#3D8B37]">Phone from bed, no video</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Understanding the True Cost</h2>

            <p>
              When comparing medical certificate costs, many people only look at the dollar amount. But the <strong>true cost</strong> includes:
            </p>

            <ul>
              <li><strong>Your time:</strong> A 2-hour wait at a bulk-billed clinic isn&apos;t really &quot;free&quot; if you value your time</li>
              <li><strong>Travel costs:</strong> Petrol, parking, or public transport to get to a clinic</li>
              <li><strong>Exposure risk:</strong> Sitting in a waiting room full of sick people when you&apos;re already unwell</li>
              <li><strong>Energy expenditure:</strong> Dragging yourself out of bed when you&apos;re genuinely sick</li>
            </ul>

            <p>
              When you factor in these hidden costs, a $24.95 phone consultation from bed often makes more economic sense than a &quot;free&quot; bulk-billed visit that takes half your day.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Option 1: Bulk-Billed GP ($0)</h2>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-[#F0FDF4] rounded-xl p-4 border border-[#3D8B37]/20">
                <h3 className="font-semibold text-base mb-2 mt-0 text-[#3D8B37]">Pros</h3>
                <ul className="text-sm text-[#6B6560] mb-0 space-y-1">
                  <li>• No out-of-pocket cost</li>
                  <li>• Can address other health concerns</li>
                  <li>• Prescriptions if needed</li>
                  <li>• Covers longer absences</li>
                </ul>
              </div>
              <div className="bg-[#FEF2F2] rounded-xl p-4 border border-[#EF4444]/20">
                <h3 className="font-semibold text-base mb-2 mt-0 text-[#EF4444]">Cons</h3>
                <ul className="text-sm text-[#6B6560] mb-0 space-y-1">
                  <li>• Long wait times (often 1-3+ hours)</li>
                  <li>• Must leave home while sick</li>
                  <li>• Bulk-billing GPs increasingly rare</li>
                  <li>• Risk of catching something worse</li>
                </ul>
              </div>
            </div>

            <p>
              Bulk-billed GP visits are becoming harder to find in Australia, especially in metropolitan areas. Many clinics have moved to private billing or mixed billing models. If you do find one, expect significant wait times.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Option 2: Telehealth GP ($35-80)</h2>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-[#F0FDF4] rounded-xl p-4 border border-[#3D8B37]/20">
                <h3 className="font-semibold text-base mb-2 mt-0 text-[#3D8B37]">Pros</h3>
                <ul className="text-sm text-[#6B6560] mb-0 space-y-1">
                  <li>• No travel required</li>
                  <li>• Generally shorter waits</li>
                  <li>• Can issue prescriptions</li>
                  <li>• Full GP consultation</li>
                </ul>
              </div>
              <div className="bg-[#FEF2F2] rounded-xl p-4 border border-[#EF4444]/20">
                <h3 className="font-semibold text-base mb-2 mt-0 text-[#EF4444]">Cons</h3>
                <ul className="text-sm text-[#6B6560] mb-0 space-y-1">
                  <li>• More expensive ($35-80+)</li>
                  <li>• Need device with camera</li>
                  <li>• Video call required (can&apos;t hide in bed)</li>
                  <li>• May still wait for available slot</li>
                </ul>
              </div>
            </div>

            <p>
              Telehealth is a good middle ground for those who want a GP consultation without leaving home. However, the requirement for video calling means you need to be somewhat presentable, which isn&apos;t ideal when you&apos;re genuinely unwell.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Option 3: Pharmacist Certificate ($15-30)</h2>

            <p>
              Many people don&apos;t realise that pharmacists can issue medical certificates (called Absence from Work Certificates) under the <em>Fair Work Act 2009</em>. This is often the most affordable option for simple, short-term illnesses.
            </p>

            <h3>Walk-in Pharmacy</h3>
            <p>
              You can visit a community pharmacy in person and request a certificate. Prices typically range from $15-30, and the process takes 10-30 minutes depending on how busy they are.
            </p>

            <h3>Phone Consultation (SorryBoss)</h3>
            <p>
              Services like <Link href="/" className="text-[#3D8B37] hover:underline">SorryBoss</Link> offer pharmacist consultations via phone. At $24.95, you get:
            </p>

            <ul>
              <li>A quick phone consultation (no video required)</li>
              <li>Certificate emailed as PDF within minutes</li>
              <li>AHPRA-registered pharmacist verification</li>
              <li>No need to leave bed or get dressed</li>
              <li>&quot;No cert, no charge&quot; guarantee</li>
            </ul>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Can I Get a $10 Medical Certificate?</h2>

            <p>
              You might see search results promising &quot;$10 medical certificates&quot; or even cheaper. Here&apos;s the reality:
            </p>

            <ul>
              <li><strong>Very few legitimate services</strong> offer certificates this cheap</li>
              <li><strong>Extremely low prices</strong> may indicate corners being cut on the consultation process</li>
              <li><strong>Quality matters:</strong> A certificate that looks suspicious may cause issues with your employer</li>
              <li><strong>AHPRA requirements:</strong> Registered practitioners have minimum standards they must meet</li>
            </ul>

            <p>
              At $24.95, <Link href="/" className="text-[#3D8B37] hover:underline">SorryBoss</Link> is among the most affordable <em>legitimate</em> options. We conduct a proper phone consultation with an AHPRA-registered pharmacist — not an automated form or AI chatbot.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Why Choose SorryBoss?</h2>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white rounded-xl p-5 border border-black/5">
                <Zap className="w-8 h-8 text-[#E8B931] mb-3" />
                <h3 className="font-semibold text-base mb-2 mt-0">Fast</h3>
                <p className="text-sm text-[#6B6560] mb-0">5-minute phone consultation. Certificate emailed instantly after approval.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-black/5">
                <DollarSign className="w-8 h-8 text-[#3D8B37] mb-3" />
                <h3 className="font-semibold text-base mb-2 mt-0">Affordable</h3>
                <p className="text-sm text-[#6B6560] mb-0">$24.95 flat fee. No hidden costs. Only pay if certificate is issued.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-black/5">
                <Shield className="w-8 h-8 text-[#3D8B37] mb-3" />
                <h3 className="font-semibold text-base mb-2 mt-0">Legitimate</h3>
                <p className="text-sm text-[#6B6560] mb-0">AHPRA-registered pharmacist. Legally valid under Fair Work Act.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-black/5">
                <Clock className="w-8 h-8 text-[#E8B931] mb-3" />
                <h3 className="font-semibold text-base mb-2 mt-0">Convenient</h3>
                <p className="text-sm text-[#6B6560] mb-0">Phone call from bed. No video required. No travel needed.</p>
              </div>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>When to Pay More for a GP</h2>

            <p>
              While pharmacist certificates are great for simple situations, there are times when paying more for a GP makes sense:
            </p>

            <ul>
              <li><strong>You need more than 2 days off:</strong> Pharmacist certificates typically cover 1-2 days</li>
              <li><strong>You need a prescription:</strong> Pharmacists can&apos;t prescribe most medications</li>
              <li><strong>Your symptoms are severe:</strong> Chest pain, difficulty breathing, high fever, etc.</li>
              <li><strong>You have a chronic condition:</strong> Ongoing management requires a doctor</li>
              <li><strong>You need a WorkCover certificate:</strong> Work injuries require GP documentation</li>
              <li><strong>Insurance claim:</strong> Some insurers require GP certificates specifically</li>
            </ul>

            <p>
              For a simple cold, gastro, headache, or general unwellness that will resolve in a day or two, a pharmacist certificate is perfectly appropriate — and much more affordable.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>How to Get the Cheapest Medical Certificate</h2>

            <p>
              Based on our analysis, here&apos;s how to minimise your costs:
            </p>

            <div className="space-y-4 my-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>1</div>
                <div>
                  <p className="font-semibold mb-1">Assess Your Situation</p>
                  <p className="text-[#6B6560] text-sm mb-0">Simple illness, 1-2 days off? → Pharmacist certificate. Complex situation? → GP.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>2</div>
                <div>
                  <p className="font-semibold mb-1">Consider Your Time</p>
                  <p className="text-[#6B6560] text-sm mb-0">Factor in wait times and travel. A 2-hour wait for a &quot;free&quot; cert may not be worth it.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3D8B37] text-white flex items-center justify-center font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>3</div>
                <div>
                  <p className="font-semibold mb-1">Use SorryBoss</p>
                  <p className="text-[#6B6560] text-sm mb-0">$24.95, 5 minutes, from bed. Best value when time matters.</p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-[#1A1A1A] text-[#FDF8EE] rounded-2xl p-8 my-12 text-center">
              <h3 
                className="text-2xl md:text-3xl font-normal mb-4 mt-0"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Get a certificate in 5 minutes
              </h3>
              <p className="text-[#FDF8EE]/70 mb-6">
                Phone consultation from bed. $24.95 — only if issued. No video required.
              </p>
              <Link 
                href="/book" 
                className="inline-flex items-center gap-2 bg-[#E8B931] text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FDF8EE] transition-colors"
              >
                Get Your Certificate →
              </Link>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Frequently Asked Questions</h2>

            <h3>What is the cheapest way to get a medical certificate in Australia?</h3>
            <p>
              The cheapest option is a bulk-billed GP visit ($0), but wait times can be 1-3+ hours. For speed and convenience, SorryBoss offers pharmacist certificates for $24.95 with a 5-minute phone consultation — the best value when you factor in time saved.
            </p>

            <h3>Can I get a $10 medical certificate online?</h3>
            <p>
              Very few legitimate services offer medical certificates for $10 or less. Most online services charge $20-80. <Link href="/" className="text-[#3D8B37] hover:underline">SorryBoss</Link> offers certificates at $24.95, which is among the most affordable legitimate options that includes a proper phone consultation with an AHPRA-registered pharmacist.
            </p>

            <h3>Why do medical certificate costs vary so much?</h3>
            <p>
              Costs vary based on the type of practitioner (GP vs pharmacist), consultation method (in-person vs telehealth vs phone), Medicare rebates, and practice overheads. GP visits without bulk billing can cost $60-120, while pharmacist phone consultations are typically $15-30.
            </p>

            <h3>Is a cheap medical certificate still valid?</h3>
            <p>
              Yes, as long as it&apos;s issued by an AHPRA-registered health practitioner. Under the Fair Work Act 2009, certificates from pharmacists are just as legally valid as those from GPs. Price doesn&apos;t affect legitimacy.
            </p>

            <h3>How much does SorryBoss charge for a medical certificate?</h3>
            <p>
              SorryBoss charges $24.95 for an Absence from Work Certificate issued by an AHPRA-registered pharmacist. This includes a phone consultation, and you only pay if the certificate is issued — no cert, no charge.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Related Articles</h2>
            <ul>
              <li><Link href="/blog/sick-leave-certificate-cost" className="text-[#3D8B37] hover:underline">Sick Leave Certificate Cost Australia 2025: Complete Price Guide</Link></li>
              <li><Link href="/blog/can-pharmacist-write-medical-certificate" className="text-[#3D8B37] hover:underline">Can a Pharmacist Write a Medical Certificate in Australia?</Link></li>
              <li><Link href="/blog/medical-certificate-online-australia" className="text-[#3D8B37] hover:underline">How to Get a Medical Certificate Online in Australia</Link></li>
              <li><Link href="/blog/same-day-medical-certificate" className="text-[#3D8B37] hover:underline">How to Get a Same-Day Medical Certificate (Fast)</Link></li>
              <li><Link href="/blog/medical-certificate-without-seeing-doctor" className="text-[#3D8B37] hover:underline">How to Get a Medical Certificate Without Seeing a Doctor</Link></li>
            </ul>

          </div>

          {/* Author/Date */}
          <footer className="mt-12 pt-8 border-t border-black/10">
            <p className="text-[#6B6560] text-sm">
              Last updated: 22 February 2025 · Written by the SorryBoss team
            </p>
          </footer>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-[#FDF8EE]/60 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p>© {new Date().getFullYear()} SorryBoss. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
