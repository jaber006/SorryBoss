import Link from "next/link";
import { ArrowLeft, DollarSign, Clock, Check, TrendingDown, AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sick Leave Certificate Cost Australia 2025: How Much Does a Medical Certificate Cost? | SorryBoss",
  description: "Medical certificate costs in Australia range from $0 (bulk billed) to $120+ (after-hours). Compare GP vs pharmacist certificates. Get a sick cert for $13.99 at SorryBoss.",
  keywords: ["sick leave certificate cost australia", "medical certificate cost", "how much does a medical certificate cost", "sick certificate price", "gp certificate cost", "cheap medical certificate australia"],
  alternates: {
    canonical: "https://sorryboss.com.au/blog/sick-leave-certificate-cost",
  },
  openGraph: {
    title: "Sick Leave Certificate Cost Australia 2025",
    description: "Complete guide to medical certificate costs in Australia. Compare all your options from $13.99 pharmacist certs to $120+ emergency GP visits.",
    type: "article",
    publishedTime: "2025-02-21",
    url: "https://sorryboss.com.au/blog/sick-leave-certificate-cost",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a medical certificate cost in Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medical certificate costs vary widely: $0 if bulk billed at a GP, $40-80 for a standard GP visit, $60-120 for after-hours or emergency clinics, $40-80 for telehealth GP, or $13.99 for a pharmacist certificate through services like SorryBoss."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cheapest way to get a medical certificate in Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cheapest option is a bulk-billed GP visit ($0), but these are increasingly rare and involve long wait times. The cheapest reliable option is a pharmacist certificate at $13.99 through services like SorryBoss, with certificates emailed in minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Are medical certificates free in Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some GP clinics offer bulk billing for standard consultations, meaning Medicare covers the cost and the certificate is effectively free. However, bulk billing is becoming less common, and many clinics charge gap fees even for Medicare-eligible patients."
      }
    },
    {
      "@type": "Question",
      "name": "Why are medical certificates so expensive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GP consultations are expensive because they're priced for comprehensive medical care, not just certificates. A standard consultation (with certificate) takes 10-15 minutes of a GP's time. Pharmacist certificates are cheaper because pharmacists can assess common illnesses quickly without the overhead of a full medical practice."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a medical certificate for $13.99?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. SorryBoss offers pharmacist-issued Absence from Work Certificates for $13.99. These are legally valid under the Fair Work Act 2009 for personal leave and carer's leave. You only pay if a certificate is issued."
      }
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Sick Leave Certificate Cost Australia 2025: Complete Price Guide",
  "description": "Comprehensive guide to medical certificate costs in Australia, comparing all options from bulk billing to pharmacist certificates.",
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
  "datePublished": "2025-02-21",
  "dateModified": "2025-02-21",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://sorryboss.com.au/blog/sick-leave-certificate-cost"
  }
};

// Breadcrumb Schema
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
      "name": "Sick Leave Certificate Cost",
      "item": "https://sorryboss.com.au/blog/sick-leave-certificate-cost"
    }
  ]
};

export default function SickLeaveCertificateCostPage() {
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
            <span className="text-[#1A1A1A]">Sick Leave Certificate Cost</span>
          </nav>

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
              <time dateTime="2025-02-21">21 February 2025</time>
              <span>•</span>
              <span>7 min read</span>
            </div>
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Sick Leave Certificate Cost Australia 2025: Complete Price Guide
            </h1>
            <p className="text-xl text-[#6B6560] leading-relaxed">
              How much should you pay for a medical certificate? The answer ranges from <strong className="text-[#1A1A1A]">$0 to $150+</strong> depending on where and how you get one. Here&apos;s a complete breakdown of costs and the most affordable options.
            </p>
          </header>

          {/* Price Comparison Summary */}
          <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold mb-6 mt-0 flex items-center gap-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
              <DollarSign className="w-6 h-6 text-[#E8B931]" />
              Quick Price Comparison
            </h2>
            <div className="space-y-3">
              {[
                { option: "Bulk-billed GP", cost: "$0", time: "1-3 hours wait", note: "Increasingly rare" },
                { option: "Standard GP visit", cost: "$40-80", time: "30-60 min wait", note: "Common option" },
                { option: "After-hours clinic", cost: "$80-120", time: "1-2 hour wait", note: "Weekends/evenings" },
                { option: "Emergency GP", cost: "$100-150", time: "Variable", note: "Same-day priority" },
                { option: "Telehealth GP", cost: "$40-80", time: "15-30 min wait", note: "Video call" },
                { option: "SorryBoss (Pharmacist)", cost: "$13.99", time: "5 minutes", note: "Phone call, fastest", highlight: true },
              ].map((row, i) => (
                <div 
                  key={i} 
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    row.highlight ? 'bg-[#F0FDF4] border border-[#3D8B37]/20' : 'bg-gray-50'
                  }`}
                >
                  <div>
                    <span className={`font-medium ${row.highlight ? 'text-[#3D8B37]' : ''}`}>{row.option}</span>
                    <span className="text-sm text-[#6B6560] ml-2">({row.note})</span>
                  </div>
                  <div className="text-right">
                    <span className={`font-semibold ${row.highlight ? 'text-[#3D8B37]' : ''}`}>{row.cost}</span>
                    <span className="text-sm text-[#6B6560] ml-2">{row.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              Getting a medical certificate shouldn&apos;t cost a fortune, but with rising healthcare costs and declining bulk billing, many Australians find themselves paying $80+ just to prove they&apos;re sick enough to miss work.
            </p>
            <p>
              This comprehensive guide breaks down all the costs associated with getting a sick certificate in Australia, compares your options, and reveals how to get a legally valid certificate for just $13.99.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>The Real Cost of a GP Visit for a Certificate</h2>

            <p>
              Let&apos;s break down what you&apos;re actually paying when you visit a GP for a medical certificate:
            </p>

            <h3>Standard GP Consultation: $40-80</h3>
            <p>
              A typical GP visit for a simple illness now costs between $40 and $80 out of pocket after any Medicare rebate. The Medicare rebate for a standard Level B consultation is about $41, but many GPs charge $80-120, leaving you with a significant gap.
            </p>

            <div className="bg-[#FEF3C7] border border-[#E8B931]/30 rounded-xl p-6 my-6">
              <h4 className="flex items-center gap-2 mt-0 text-[#92400E]">
                <TrendingDown className="w-5 h-5" />
                The Bulk Billing Crisis
              </h4>
              <p className="mb-0 text-[#6B6560]">
                Bulk billing rates have dropped significantly in recent years. Only about 30% of GP visits are now fully bulk billed, down from 80%+ a decade ago. This means most Australians pay out of pocket for GP visits.
              </p>
            </div>

            <h3>After-Hours and Emergency GP: $80-150</h3>
            <p>
              If you&apos;re sick on a weekend or after normal clinic hours, costs increase substantially:
            </p>
            <ul>
              <li><strong>Saturday GP visits:</strong> $80-100 typical</li>
              <li><strong>Sunday/public holiday:</strong> $100-130 typical</li>
              <li><strong>After-hours home visits:</strong> $100-200</li>
              <li><strong>Emergency/priority appointments:</strong> $120-150</li>
            </ul>

            <h3>Telehealth GP: $40-80</h3>
            <p>
              Telehealth consultations via video call typically cost similar to in-person visits, though some services offer slightly lower rates. Popular services include Instant Consult, Qoctor, and many regular GP practices now offering telehealth.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Why Pay $80+ When You Can Pay $13.99?</h2>

            <p>
              Here&apos;s what many Australians don&apos;t know: <strong>you don&apos;t need a GP certificate for sick leave.</strong>
            </p>
            <p>
              Under the <em>Fair Work Act 2009</em>, any &quot;registered health practitioner&quot; can issue a valid medical certificate for personal leave and carer&apos;s leave. This includes AHPRA-registered pharmacists.
            </p>
            <p>
              Services like <Link href="/" className="text-[#3D8B37] hover:underline">sorryboss.com.au</Link> connect you with registered pharmacists who can issue an Absence from Work Certificate via a quick phone consultation — <strong>for just $13.99</strong>.
            </p>

            <div className="bg-[#F0FDF4] border border-[#3D8B37]/20 rounded-xl p-6 my-6">
              <h4 className="flex items-center gap-2 mt-0 text-[#3D8B37]">
                <Check className="w-5 h-5" />
                Why Pharmacist Certificates Cost Less
              </h4>
              <ul className="mb-0">
                <li>Phone consultation (no premises overhead)</li>
                <li>Focused assessment (5 mins vs 15 mins)</li>
                <li>No Medicare billing complexity</li>
                <li>Designed for common, straightforward illness</li>
                <li>You only pay if a certificate is issued</li>
              </ul>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Detailed Cost Breakdown by Option</h2>

            <h3>Option 1: Bulk-Billed GP ($0)</h3>
            <p>
              <strong>Best for:</strong> If you can find one and don&apos;t mind waiting
            </p>
            <p>
              Some clinics still offer full bulk billing, meaning Medicare covers the entire cost. However:
            </p>
            <ul>
              <li>Increasingly rare, especially in cities</li>
              <li>Often very long wait times (2-4 hours)</li>
              <li>May require a Healthcare Card for bulk billing</li>
              <li>Difficult to get same-day appointments</li>
            </ul>

            <h3>Option 2: Standard GP Visit ($40-80 out of pocket)</h3>
            <p>
              <strong>Best for:</strong> When you need a prescription or have a complex condition
            </p>
            <p>
              The typical GP visit process:
            </p>
            <ol>
              <li>Book appointment (if available) or walk in</li>
              <li>Wait 30-60 minutes (or longer)</li>
              <li>5-10 minute consultation</li>
              <li>Pay $80-120 upfront, claim ~$41 back from Medicare</li>
              <li>Net cost: $40-80</li>
            </ol>

            <h3>Option 3: Telehealth GP ($40-80)</h3>
            <p>
              <strong>Best for:</strong> When you need a prescription and can&apos;t leave home
            </p>
            <p>
              Video consultations with a GP:
            </p>
            <ul>
              <li>Requires video call (need to be somewhat presentable)</li>
              <li>15-60 minute wait for appointment</li>
              <li>Can issue prescriptions and referrals</li>
              <li>May be bulk billed for some concession card holders</li>
            </ul>

            <h3>Option 4: Pharmacist Certificate ($13.99)</h3>
            <p>
              <strong>Best for:</strong> Quick 1-2 day certificates for common illness
            </p>
            <p>
              Via services like <Link href="/" className="text-[#3D8B37] hover:underline">sorryboss.com.au</Link>:
            </p>
            <ul>
              <li>Book online in 2 minutes</li>
              <li>Phone call (3-5 minutes) — no video</li>
              <li>Certificate emailed instantly</li>
              <li>Only charged if certificate is issued</li>
              <li>Valid under Fair Work Act</li>
            </ul>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>The Hidden Costs of GP Visits</h2>

            <p>
              The sticker price isn&apos;t the only cost. Consider:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-3 pr-4">Cost Factor</th>
                    <th className="text-left py-3 pr-4">GP Visit</th>
                    <th className="text-left py-3">Pharmacist (SorryBoss)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Consultation fee</td>
                    <td className="py-3 pr-4">$40-80</td>
                    <td className="py-3 text-[#3D8B37]">$13.99</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Travel costs (petrol/parking)</td>
                    <td className="py-3 pr-4">$5-20</td>
                    <td className="py-3 text-[#3D8B37]">$0</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Time (including wait)</td>
                    <td className="py-3 pr-4">1-3 hours</td>
                    <td className="py-3 text-[#3D8B37]">5 minutes</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Lost wages (if hourly)</td>
                    <td className="py-3 pr-4">$30-90</td>
                    <td className="py-3 text-[#3D8B37]">$0</td>
                  </tr>
                  <tr className="bg-[#F0FDF4]">
                    <td className="py-3 pr-4 font-semibold">True Total Cost</td>
                    <td className="py-3 pr-4 font-semibold">$75-190</td>
                    <td className="py-3 text-[#3D8B37] font-semibold">$13.99</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              When you factor in travel, waiting time, and potentially lost wages, a &quot;$60 GP visit&quot; can actually cost you $150+ in real terms.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>When Is a GP Visit Worth the Cost?</h2>

            <p>
              Despite the higher cost, there are times when seeing a GP is the right choice:
            </p>

            <ul>
              <li><strong>You need a prescription</strong> — Pharmacists can recommend OTC products but can&apos;t prescribe most medications</li>
              <li><strong>You need more than 2 days off</strong> — Pharmacist certificates typically cover 1-2 days maximum</li>
              <li><strong>Your symptoms are severe or unusual</strong> — This needs proper investigation</li>
              <li><strong>You have a chronic condition</strong> — Ongoing management should involve a GP</li>
              <li><strong>You need WorkCover documentation</strong> — Work injuries require a doctor&apos;s certificate</li>
              <li><strong>You need a specialist referral</strong> — Only GPs can write these</li>
            </ul>

            <p>
              For a simple cold, stomach bug, or headache that&apos;s keeping you home for a day or two? A pharmacist certificate is usually the most sensible option.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Medical Certificate Costs by State</h2>

            <p>
              Costs can vary by location. Here&apos;s a rough guide:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-3 pr-4">State</th>
                    <th className="text-left py-3 pr-4">Average GP Visit</th>
                    <th className="text-left py-3 pr-4">Bulk Billing Rate</th>
                    <th className="text-left py-3">After-Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">NSW (Sydney)</td>
                    <td className="py-3 pr-4">$80-100</td>
                    <td className="py-3 pr-4">~25%</td>
                    <td className="py-3">$100-140</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">VIC (Melbourne)</td>
                    <td className="py-3 pr-4">$70-90</td>
                    <td className="py-3 pr-4">~30%</td>
                    <td className="py-3">$90-130</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">QLD (Brisbane)</td>
                    <td className="py-3 pr-4">$60-80</td>
                    <td className="py-3 pr-4">~40%</td>
                    <td className="py-3">$80-120</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">WA (Perth)</td>
                    <td className="py-3 pr-4">$70-90</td>
                    <td className="py-3 pr-4">~35%</td>
                    <td className="py-3">$90-130</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">SA (Adelaide)</td>
                    <td className="py-3 pr-4">$60-80</td>
                    <td className="py-3 pr-4">~45%</td>
                    <td className="py-3">$80-120</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Regional Areas</td>
                    <td className="py-3 pr-4">$50-70</td>
                    <td className="py-3 pr-4">~55%</td>
                    <td className="py-3">$70-110</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              SorryBoss is the same price Australia-wide: <strong>$13.99</strong> for a pharmacist certificate, regardless of where you live.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Why Sick Certificates Shouldn&apos;t Cost This Much</h2>

            <p>
              Let&apos;s be honest: the current system doesn&apos;t make sense.
            </p>
            <p>
              You&apos;re sick. You know you&apos;re sick. Your employer knows you&apos;re sick when you call in. But because of workplace policies (and sometimes distrust), you need to pay $80, drag yourself to a waiting room for 2 hours, and sit among other sick people — just to get a piece of paper confirming what everyone already knows.
            </p>
            <p>
              At <Link href="/" className="text-[#3D8B37] hover:underline">sorryboss.com.au</Link>, we believe getting a sick certificate should be <strong>quick, affordable, and accessible</strong>. That&apos;s why we offer pharmacist certificates for $13.99 — the lowest price we can sustainably offer while maintaining quality consultations with registered health professionals.
            </p>

            {/* CTA Box */}
            <div className="bg-[#1A1A1A] text-[#FDF8EE] rounded-2xl p-8 my-12 text-center">
              <h3 
                className="text-2xl md:text-3xl font-normal mb-4 mt-0"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Get a sick certificate for $13.99
              </h3>
              <p className="text-[#FDF8EE]/70 mb-6">
                Phone consult from bed. Certificate emailed in minutes. Only pay if issued.
              </p>
              <Link 
                href="/book" 
                className="inline-flex items-center gap-2 bg-[#E8B931] text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FDF8EE] transition-colors"
              >
                Get Your Certificate →
              </Link>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Frequently Asked Questions</h2>

            <h3>How much does a medical certificate cost in Australia?</h3>
            <p>
              Medical certificate costs vary widely: $0 if bulk billed at a GP, $40-80 for a standard GP visit, $60-120 for after-hours or emergency clinics, $40-80 for telehealth GP, or $13.99 for a pharmacist certificate through services like SorryBoss.
            </p>

            <h3>What is the cheapest way to get a medical certificate in Australia?</h3>
            <p>
              The cheapest option is a bulk-billed GP visit ($0), but these are increasingly rare and involve long wait times. The cheapest reliable option is a pharmacist certificate at $13.99 through services like <Link href="/" className="text-[#3D8B37] hover:underline">sorryboss.com.au</Link>, with certificates emailed in minutes.
            </p>

            <h3>Are medical certificates free in Australia?</h3>
            <p>
              Some GP clinics offer bulk billing for standard consultations, meaning Medicare covers the cost and the certificate is effectively free. However, bulk billing is becoming less common, and many clinics charge gap fees even for Medicare-eligible patients.
            </p>

            <h3>Why are medical certificates so expensive?</h3>
            <p>
              GP consultations are expensive because they&apos;re priced for comprehensive medical care, not just certificates. A standard consultation (with certificate) takes 10-15 minutes of a GP&apos;s time. Pharmacist certificates are cheaper because pharmacists can assess common illnesses quickly without the overhead of a full medical practice.
            </p>

            <h3>Can I get a medical certificate for $13.99?</h3>
            <p>
              Yes. <Link href="/" className="text-[#3D8B37] hover:underline">SorryBoss</Link> offers pharmacist-issued Absence from Work Certificates for $13.99. These are legally valid under the Fair Work Act 2009 for personal leave and carer&apos;s leave. You only pay if a certificate is issued.
            </p>

            <h3>Is a $13.99 certificate as valid as a GP certificate?</h3>
            <p>
              Yes. Under section 107(3) of the Fair Work Act 2009, certificates from any registered health practitioner are valid evidence for sick leave. AHPRA-registered pharmacists are registered health practitioners. The law doesn&apos;t distinguish between GP and pharmacist certificates.
            </p>

            <h3>Do employers have to accept pharmacist certificates?</h3>
            <p>
              Yes. The Fair Work Act requires employers to accept certificates from any registered health practitioner. If your employer questions a pharmacist certificate, you can point them to section 107(3) of the Fair Work Act.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Related Articles</h2>
            <ul>
              <li><Link href="/blog/can-pharmacist-write-medical-certificate" className="text-[#3D8B37] hover:underline">Can a Pharmacist Write a Medical Certificate?</Link></li>
              <li><Link href="/blog/medical-certificate-without-seeing-doctor" className="text-[#3D8B37] hover:underline">How to Get a Medical Certificate Without Seeing a Doctor</Link></li>
              <li><Link href="/blog/same-day-medical-certificate" className="text-[#3D8B37] hover:underline">How to Get a Same-Day Medical Certificate</Link></li>
              <li><Link href="/blog/sick-leave-rights-australia" className="text-[#3D8B37] hover:underline">Sick Leave Rights in Australia</Link></li>
              <li><Link href="/blog/do-i-need-medical-certificate-for-one-day" className="text-[#3D8B37] hover:underline">Do I Need a Medical Certificate for 1 Day Off?</Link></li>
            </ul>
          </div>

          <footer className="mt-12 pt-8 border-t border-black/10">
            <p className="text-[#6B6560] text-sm">
              Last updated: 21 February 2025 · Written by the SorryBoss team
            </p>
          </footer>
        </div>
      </article>

      <footer className="bg-[#1A1A1A] text-[#FDF8EE]/60 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p>© {new Date().getFullYear()} SorryBoss. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
