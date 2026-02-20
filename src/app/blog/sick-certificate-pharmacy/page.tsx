import Link from "next/link";
import { ArrowLeft, Check, Phone, Clock, Home, MapPin, Scale } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting a Sick Certificate from a Pharmacy in Australia | SorryBoss",
  description: "Can you get a sick certificate from a pharmacy? Yes! Learn how pharmacy sick certificates work in Australia, walk-in vs phone options, and why you don't need to drag yourself to a chemist.",
  keywords: ["sick certificate pharmacy", "sick certificate chemist", "sick certificate chemist warehouse", "pharmacy medical certificate", "pharmacist sick note australia"],
  alternates: {
    canonical: "https://sorryboss.com.au/blog/sick-certificate-pharmacy",
  },
  openGraph: {
    title: "Getting a Sick Certificate from a Pharmacy in Australia",
    description: "Learn how to get a sick certificate from a pharmacy in Australia. Walk-in or phone consultation — no need to drag yourself out when you're unwell.",
    type: "article",
    publishedTime: "2025-02-22",
    url: "https://sorryboss.com.au/blog/sick-certificate-pharmacy",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I get a sick certificate from a pharmacy in Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! AHPRA-registered pharmacists can issue Absence from Work Certificates (sick certificates) under the Fair Work Act 2009. You can get one from a walk-in pharmacy or through phone consultation services like SorryBoss."
      }
    },
    {
      "@type": "Question",
      "name": "Can Chemist Warehouse give me a sick certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some Chemist Warehouse locations may offer sick certificates, but it depends on the individual pharmacy and pharmacist. Not all pharmacies advertise this service. A more reliable option is dedicated services like SorryBoss that specifically offer pharmacist sick certificates via phone."
      }
    },
    {
      "@type": "Question",
      "name": "Is a pharmacy sick certificate valid for work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Under section 107(3) of the Fair Work Act 2009, certificates from AHPRA-registered pharmacists are legally valid evidence of illness. Employers must accept them the same as GP certificates."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a pharmacy sick certificate cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Walk-in pharmacy certificates typically cost $15-30. Phone consultation services like SorryBoss charge $24.95. This is generally cheaper than GP visits ($60-120) or telehealth ($35-80)."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a sick certificate over the phone from a pharmacist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Services like SorryBoss offer pharmacist consultations via phone. You don't need to leave bed — just answer a quick phone call and your certificate is emailed as a PDF. The whole process takes about 5 minutes."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Getting a Sick Certificate from a Pharmacy in Australia",
  "description": "Complete guide to getting a sick certificate from a pharmacy in Australia, including walk-in pharmacies, phone consultations, and why pharmacist certificates are legally valid.",
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
    "@id": "https://sorryboss.com.au/blog/sick-certificate-pharmacy"
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
      "name": "Sick Certificate from Pharmacy",
      "item": "https://sorryboss.com.au/blog/sick-certificate-pharmacy"
    }
  ]
};

export default function SickCertificatePharmacyPage() {
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
            <span className="text-[#1A1A1A]">Sick Certificate from Pharmacy</span>
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
              <span>7 min read</span>
            </div>
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Getting a Sick Certificate from a Pharmacy in Australia
            </h1>
            <p className="text-xl text-[#6B6560] leading-relaxed">
              You don&apos;t need to drag yourself to a GP when you&apos;re unwell. Here&apos;s everything you need to know about getting a <strong className="text-[#1A1A1A]">sick certificate from a pharmacy</strong> — including a better option that doesn&apos;t require leaving bed.
            </p>
          </header>

          {/* Quick Answer Box */}
          <div className="bg-[#F0FDF4] border border-[#3D8B37]/20 rounded-2xl p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold mb-4 mt-0 flex items-center gap-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
              <Check className="w-6 h-6 text-[#3D8B37]" />
              The Short Answer
            </h2>
            <p className="text-[#1A1A1A] mb-4">
              <strong>Yes, pharmacists can issue sick certificates in Australia.</strong> Under the Fair Work Act 2009, AHPRA-registered pharmacists can issue Absence from Work Certificates that employers must accept.
            </p>
            <p className="text-[#1A1A1A] mb-0">
              <strong>But you don&apos;t need to go to a pharmacy in person.</strong> Services like <Link href="/" className="text-[#3D8B37] hover:underline">SorryBoss</Link> offer pharmacist consultations via phone — get your certificate in 5 minutes without leaving bed.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              When you&apos;re sick, the last thing you want to do is get dressed, drive to a pharmacy, and stand in a queue. Yet many Australians don&apos;t realise they have options beyond dragging themselves out when they need a sick certificate.
            </p>
            <p>
              In this guide, we&apos;ll cover how pharmacy sick certificates work in Australia, the difference between walk-in and phone consultations, and why <Link href="/" className="text-[#3D8B37] hover:underline">SorryBoss</Link> might be the better choice when you&apos;re genuinely unwell.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Can Pharmacists Issue Sick Certificates?</h2>
            
            <p>
              <strong>Absolutely yes.</strong> Since the introduction of the <em>Health Practitioner Regulation National Law</em> in 2010, pharmacists registered with AHPRA (Australian Health Practitioner Regulation Agency) have been classified as &quot;registered health practitioners.&quot;
            </p>
            
            <p>
              Under section 107(3) of the <em>Fair Work Act 2009</em>, employees can provide evidence of illness through:
            </p>
            
            <blockquote className="border-l-4 border-[#E8B931] bg-white p-6 my-6 italic text-[#6B6560]">
              &quot;A medical certificate from a registered health practitioner&quot;
              <footer className="text-sm mt-2 not-italic">— Fair Work Act 2009, Section 107(3)</footer>
            </blockquote>

            <p>
              This means a certificate from an AHPRA-registered pharmacist is legally equivalent to a GP certificate for sick leave purposes. Your employer must accept it.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Walk-In Pharmacy vs Phone Consultation</h2>

            <p>
              When it comes to getting a sick certificate from a pharmacist, you have two main options:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-white rounded-xl p-5 border border-black/5">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-6 h-6 text-[#E8B931]" />
                  <h3 className="font-semibold text-base mb-0 mt-0">Walk-In Pharmacy</h3>
                </div>
                <ul className="text-sm text-[#6B6560] mb-4 space-y-2">
                  <li>• Visit your local pharmacy</li>
                  <li>• Speak to the pharmacist</li>
                  <li>• Certificate printed on the spot</li>
                  <li>• Typically $15-30</li>
                </ul>
                <p className="text-sm text-[#991B1B] mb-0 font-medium">
                  ⚠️ Requires leaving home while sick
                </p>
              </div>
              <div className="bg-[#F0FDF4] rounded-xl p-5 border border-[#3D8B37]/20">
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="w-6 h-6 text-[#3D8B37]" />
                  <h3 className="font-semibold text-base mb-0 mt-0">Phone Consultation (SorryBoss)</h3>
                </div>
                <ul className="text-sm text-[#6B6560] mb-4 space-y-2">
                  <li>• Book online in 2 minutes</li>
                  <li>• Pharmacist calls you</li>
                  <li>• Certificate emailed as PDF</li>
                  <li>• $24.95 (only if issued)</li>
                </ul>
                <p className="text-sm text-[#166534] mb-0 font-medium">
                  ✓ Stay in bed the entire time
                </p>
              </div>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Can I Get a Sick Certificate from Chemist Warehouse?</h2>

            <p>
              This is a common question. The answer is: <strong>it depends.</strong>
            </p>

            <p>
              Chemist Warehouse pharmacists are AHPRA-registered, so they legally <em>can</em> issue sick certificates. However:
            </p>

            <ul>
              <li><strong>Not all locations offer this service:</strong> It depends on the individual pharmacy and pharmacist</li>
              <li><strong>It&apos;s not widely advertised:</strong> Most people go to Chemist Warehouse for medication, not certificates</li>
              <li><strong>Availability varies:</strong> Busy pharmacists may not have time for consultations</li>
              <li><strong>You&apos;ll need to ask:</strong> Call ahead to check if they offer sick certificates</li>
            </ul>

            <p>
              If you&apos;re unwell and need a reliable option without the uncertainty of calling around, services like <Link href="/" className="text-[#3D8B37] hover:underline">SorryBoss</Link> are purpose-built for sick certificates.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Why Phone Consultation is Better When You&apos;re Sick</h2>

            <p>
              Think about what it actually means to go to a pharmacy when you&apos;re unwell:
            </p>

            <div className="bg-white border border-black/10 rounded-2xl p-6 my-6">
              <h3 className="text-lg font-semibold mb-3 mt-0" style={{ fontFamily: "'Instrument Serif', serif" }}>
                The Walk-In Experience
              </h3>
              <ol className="text-[#6B6560] mb-0 space-y-2">
                <li>1. Drag yourself out of bed</li>
                <li>2. Get dressed (or at least presentable)</li>
                <li>3. Drive or take transport to the pharmacy</li>
                <li>4. Potentially wait in a queue</li>
                <li>5. Explain your symptoms at a public counter</li>
                <li>6. Pay and get your certificate</li>
                <li>7. Travel home</li>
                <li>8. Finally rest</li>
              </ol>
            </div>

            <div className="bg-[#F0FDF4] border border-[#3D8B37]/20 rounded-2xl p-6 my-6">
              <h3 className="text-lg font-semibold mb-3 mt-0" style={{ fontFamily: "'Instrument Serif', serif" }}>
                The SorryBoss Experience
              </h3>
              <ol className="text-[#166534] mb-0 space-y-2">
                <li>1. Book online from bed (2 minutes)</li>
                <li>2. Answer phone call from pharmacist (3-5 minutes)</li>
                <li>3. Certificate emailed to you</li>
                <li>4. Forward to employer</li>
                <li>5. Continue resting</li>
              </ol>
            </div>

            <p>
              When you&apos;re genuinely unwell — especially with something like gastro, a bad flu, or a migraine — the last thing you should be doing is going out in public. It&apos;s bad for you (delays recovery) and bad for others (spreads illness).
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>What Conditions Can a Pharmacy Certify?</h2>

            <p>
              Pharmacists can issue sick certificates for common, short-term conditions including:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white rounded-xl p-4 border border-black/5">
                <h3 className="font-semibold text-base mb-2 mt-0">Respiratory</h3>
                <ul className="text-sm text-[#6B6560] mb-0 space-y-1">
                  <li>• Cold and flu</li>
                  <li>• Sore throat</li>
                  <li>• Cough</li>
                  <li>• Sinus issues</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-4 border border-black/5">
                <h3 className="font-semibold text-base mb-2 mt-0">Gastrointestinal</h3>
                <ul className="text-sm text-[#6B6560] mb-0 space-y-1">
                  <li>• Gastro / stomach bug</li>
                  <li>• Nausea and vomiting</li>
                  <li>• Diarrhoea</li>
                  <li>• Food poisoning</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-4 border border-black/5">
                <h3 className="font-semibold text-base mb-2 mt-0">Pain</h3>
                <ul className="text-sm text-[#6B6560] mb-0 space-y-1">
                  <li>• Headache / migraine</li>
                  <li>• Body aches</li>
                  <li>• Menstrual pain</li>
                  <li>• Back pain</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-4 border border-black/5">
                <h3 className="font-semibold text-base mb-2 mt-0">General</h3>
                <ul className="text-sm text-[#6B6560] mb-0 space-y-1">
                  <li>• Fatigue</li>
                  <li>• General unwellness</li>
                  <li>• Fever</li>
                  <li>• Allergies</li>
                </ul>
              </div>
            </div>

            <p>
              Pharmacist certificates typically cover <strong>1-2 days</strong>. If you need longer, you should see a GP.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>How to Get a Sick Certificate from SorryBoss</h2>

            <p>
              Here&apos;s exactly how the process works:
            </p>

            <div className="space-y-4 my-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>1</div>
                <div>
                  <p className="font-semibold mb-1">Book Online</p>
                  <p className="text-[#6B6560] text-sm mb-0">Visit <Link href="/book" className="text-[#3D8B37] hover:underline">sorryboss.com.au/book</Link>. Enter your details and briefly describe your symptoms. Takes about 2 minutes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>2</div>
                <div>
                  <p className="font-semibold mb-1">Phone Consultation</p>
                  <p className="text-[#6B6560] text-sm mb-0">Our AHPRA-registered pharmacist calls you at your chosen time. No video required — answer from bed, no need to look presentable.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>3</div>
                <div>
                  <p className="font-semibold mb-1">Quick Assessment</p>
                  <p className="text-[#6B6560] text-sm mb-0">The pharmacist asks about your symptoms and assesses whether you&apos;re unfit for work. Takes 3-5 minutes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3D8B37] text-white flex items-center justify-center font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>4</div>
                <div>
                  <p className="font-semibold mb-1">Certificate Emailed</p>
                  <p className="text-[#6B6560] text-sm mb-0">Your Absence from Work Certificate is emailed as a PDF. Forward it to your employer and continue resting.</p>
                </div>
              </div>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Cost Comparison: Pharmacy Options</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-3 pr-4">Option</th>
                    <th className="text-left py-3 pr-4">Cost</th>
                    <th className="text-left py-3 pr-4">Time Required</th>
                    <th className="text-left py-3">Leave Home?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Walk-in Pharmacy</td>
                    <td className="py-3 pr-4">$15-30</td>
                    <td className="py-3 pr-4">30-60 mins total</td>
                    <td className="py-3 text-[#991B1B]">Yes</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Chemist Warehouse</td>
                    <td className="py-3 pr-4">~$20</td>
                    <td className="py-3 pr-4">30-60 mins total</td>
                    <td className="py-3 text-[#991B1B]">Yes</td>
                  </tr>
                  <tr className="bg-[#F0FDF4]">
                    <td className="py-3 pr-4 font-semibold">SorryBoss (Phone)</td>
                    <td className="py-3 pr-4 font-semibold text-[#3D8B37]">$24.95</td>
                    <td className="py-3 pr-4 font-semibold text-[#3D8B37]">5 minutes</td>
                    <td className="py-3 text-[#166534] font-semibold">No</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The small price difference between walk-in and phone consultation is well worth it when you consider: no travel time, no exposure to others, no queuing, and no need to be presentable.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Will My Employer Accept a Pharmacy Certificate?</h2>

            <p>
              <strong>Yes — they legally must.</strong> Under the Fair Work Act 2009, employers are required to accept certificates from any AHPRA-registered health practitioner. This includes pharmacists.
            </p>

            <p>
              Your SorryBoss certificate includes:
            </p>

            <ul>
              <li>Your full name and date of birth</li>
              <li>The date(s) you&apos;re certified as unfit for work</li>
              <li>The pharmacist&apos;s name and AHPRA registration number</li>
              <li>A unique verification code</li>
            </ul>

            <p>
              If your employer questions the certificate, you can direct them to section 107(3) of the Fair Work Act 2009 and point out that pharmacists are registered health practitioners under Australian law.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>When Should You See a GP Instead?</h2>

            <p>
              Pharmacist certificates are ideal for short-term, minor illness. See a GP if:
            </p>

            <ul>
              <li>You need more than 2 days off work</li>
              <li>You need a prescription medication</li>
              <li>Your symptoms are severe or worsening</li>
              <li>You have a chronic condition that needs management</li>
              <li>You need a WorkCover or insurance certificate</li>
            </ul>

            <p>
              At SorryBoss, if our pharmacist determines that your situation is beyond our scope, we&apos;ll tell you — and you won&apos;t be charged. That&apos;s our &quot;no cert, no charge&quot; guarantee.
            </p>

            {/* CTA Box */}
            <div className="bg-[#1A1A1A] text-[#FDF8EE] rounded-2xl p-8 my-12 text-center">
              <h3 
                className="text-2xl md:text-3xl font-normal mb-4 mt-0"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Skip the pharmacy queue
              </h3>
              <p className="text-[#FDF8EE]/70 mb-6">
                Get a sick certificate in 5 minutes without leaving bed. Phone consultation, $24.95 — only if issued.
              </p>
              <Link 
                href="/book" 
                className="inline-flex items-center gap-2 bg-[#E8B931] text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FDF8EE] transition-colors"
              >
                Get Your Certificate →
              </Link>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Frequently Asked Questions</h2>

            <h3>Can I get a sick certificate from a pharmacy in Australia?</h3>
            <p>
              Yes! AHPRA-registered pharmacists can issue Absence from Work Certificates (sick certificates) under the Fair Work Act 2009. You can get one from a walk-in pharmacy or through phone consultation services like <Link href="/" className="text-[#3D8B37] hover:underline">SorryBoss</Link>.
            </p>

            <h3>Can Chemist Warehouse give me a sick certificate?</h3>
            <p>
              Some Chemist Warehouse locations may offer sick certificates, but it depends on the individual pharmacy and pharmacist. Not all pharmacies advertise this service. A more reliable option is dedicated services like SorryBoss that specifically offer pharmacist sick certificates via phone.
            </p>

            <h3>Is a pharmacy sick certificate valid for work?</h3>
            <p>
              Yes. Under section 107(3) of the Fair Work Act 2009, certificates from AHPRA-registered pharmacists are legally valid evidence of illness. Employers must accept them the same as GP certificates.
            </p>

            <h3>How much does a pharmacy sick certificate cost?</h3>
            <p>
              Walk-in pharmacy certificates typically cost $15-30. Phone consultation services like SorryBoss charge $24.95. This is generally cheaper than GP visits ($60-120) or telehealth ($35-80).
            </p>

            <h3>Can I get a sick certificate over the phone from a pharmacist?</h3>
            <p>
              Yes! Services like SorryBoss offer pharmacist consultations via phone. You don&apos;t need to leave bed — just answer a quick phone call and your certificate is emailed as a PDF. The whole process takes about 5 minutes.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Related Articles</h2>
            <ul>
              <li><Link href="/blog/can-pharmacist-write-medical-certificate" className="text-[#3D8B37] hover:underline">Can a Pharmacist Write a Medical Certificate in Australia?</Link></li>
              <li><Link href="/blog/pharmacist-sick-certificate-australia" className="text-[#3D8B37] hover:underline">Can a Pharmacist Issue a Sick Certificate in Australia?</Link></li>
              <li><Link href="/blog/medical-certificate-online-australia" className="text-[#3D8B37] hover:underline">How to Get a Medical Certificate Online in Australia</Link></li>
              <li><Link href="/blog/same-day-medical-certificate" className="text-[#3D8B37] hover:underline">How to Get a Same-Day Medical Certificate (Fast)</Link></li>
              <li><Link href="/blog/cheap-medical-certificate-online" className="text-[#3D8B37] hover:underline">Cheapest Medical Certificate Online Australia 2025</Link></li>
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
