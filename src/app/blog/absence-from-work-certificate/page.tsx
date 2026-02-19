import Link from "next/link";
import { ArrowLeft, FileText, Scale, Check, HelpCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Absence from Work Certificate vs Medical Certificate: What's the Difference? | SorryBoss",
  description: "What's the difference between an Absence from Work Certificate and a Medical Certificate? Under Australian law, both are valid for sick leave. Learn which one you need.",
  keywords: ["absence from work certificate", "medical certificate vs absence from work certificate", "pharmacist certificate", "sick certificate australia", "fair work act certificate", "absence certificate"],
  alternates: {
    canonical: "https://sorryboss.com.au/blog/absence-from-work-certificate",
  },
  openGraph: {
    title: "Absence from Work Certificate vs Medical Certificate",
    description: "Under Australian law, both certificates are valid for sick leave. Here's everything you need to know.",
    type: "article",
    publishedTime: "2025-02-21",
    url: "https://sorryboss.com.au/blog/absence-from-work-certificate",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an Absence from Work Certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Absence from Work Certificate is a document issued by a registered health practitioner (such as a pharmacist) certifying that you are unfit for work. It's legally valid under the Fair Work Act 2009 as evidence for personal leave and carer's leave, just like a medical certificate from a GP."
      }
    },
    {
      "@type": "Question",
      "name": "Is an Absence from Work Certificate the same as a Medical Certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For practical purposes, yes. Both documents certify that you were unfit for work and both are valid evidence under section 107(3) of the Fair Work Act 2009. The main difference is terminology — 'medical certificate' is traditionally used for GP-issued documents, while 'Absence from Work Certificate' is the term often used by pharmacists."
      }
    },
    {
      "@type": "Question",
      "name": "Will my employer accept an Absence from Work Certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Under the Fair Work Act, employers must accept certificates from any registered health practitioner as valid evidence of illness. This includes pharmacist-issued Absence from Work Certificates. If your employer questions it, you can point them to section 107(3) of the Fair Work Act 2009."
      }
    },
    {
      "@type": "Question",
      "name": "Who can issue an Absence from Work Certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Any registered health practitioner can issue an Absence from Work Certificate. Under the Health Practitioner Regulation National Law, this includes GPs, pharmacists, nurses, dentists, physiotherapists, psychologists, and other AHPRA-registered practitioners."
      }
    },
    {
      "@type": "Question",
      "name": "How much does an Absence from Work Certificate cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Through pharmacist services like SorryBoss, an Absence from Work Certificate costs $13.99. This compares to $40-80 for a standard GP visit or $80-120 for after-hours GP visits."
      }
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Absence from Work Certificate vs Medical Certificate: What's the Difference?",
  "description": "Complete guide to understanding Absence from Work Certificates and how they compare to traditional GP medical certificates.",
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
    "@id": "https://sorryboss.com.au/blog/absence-from-work-certificate"
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
      "name": "Absence from Work Certificate",
      "item": "https://sorryboss.com.au/blog/absence-from-work-certificate"
    }
  ]
};

export default function AbsenceFromWorkCertificatePage() {
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
            <span className="text-[#1A1A1A]">Absence from Work Certificate</span>
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
              <span>8 min read</span>
            </div>
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Absence from Work Certificate vs Medical Certificate: What&apos;s the Difference?
            </h1>
            <p className="text-xl text-[#6B6560] leading-relaxed">
              You&apos;ve heard of medical certificates. But what about an &quot;Absence from Work Certificate&quot;? Are they the same thing? Will your employer accept one? <strong className="text-[#1A1A1A]">Here&apos;s the definitive answer.</strong>
            </p>
          </header>

          {/* Quick Answer */}
          <div className="bg-[#F0FDF4] border border-[#3D8B37]/20 rounded-2xl p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold mb-4 mt-0 flex items-center gap-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
              <Check className="w-6 h-6 text-[#3D8B37]" />
              The Short Answer
            </h2>
            <p className="text-[#1A1A1A] mb-4">
              <strong>For all practical purposes, they&apos;re the same.</strong> Both an Absence from Work Certificate and a Medical Certificate are valid evidence of illness under the Fair Work Act 2009. The difference is mainly in terminology and who issues them.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-sm mb-2 mt-0">Medical Certificate</h3>
                <p className="text-sm text-[#6B6560] mb-0">Usually issued by GPs and other doctors</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-sm mb-2 mt-0">Absence from Work Certificate</h3>
                <p className="text-sm text-[#6B6560] mb-0">Usually issued by pharmacists</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              If you&apos;ve used a pharmacist certificate service or visited a pharmacy for a sick certificate, you may have noticed it&apos;s called an &quot;Absence from Work Certificate&quot; rather than a &quot;Medical Certificate.&quot; This naming difference has caused confusion for many Australians.
            </p>
            <p>
              In this comprehensive guide, we&apos;ll explain exactly what an Absence from Work Certificate is, how it compares to a traditional medical certificate, and why both are equally valid under Australian law.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>What Is an Absence from Work Certificate?</h2>

            <p>
              An <strong>Absence from Work Certificate</strong> is a document issued by a registered health practitioner that certifies you are unfit to work due to illness or injury. It typically includes:
            </p>
            <ul>
              <li>Your name and date of birth</li>
              <li>The date(s) you are certified as unfit for work</li>
              <li>A statement that you were assessed and found unfit for your usual occupation</li>
              <li>The practitioner&apos;s name and registration number</li>
              <li>The date of issue</li>
            </ul>
            <p>
              The term &quot;Absence from Work Certificate&quot; is commonly used by pharmacists because it more accurately describes what they&apos;re certifying: that you&apos;re too unwell to attend work. It&apos;s the same practical function as a medical certificate, just with different terminology.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>What Is a Medical Certificate?</h2>

            <p>
              A <strong>Medical Certificate</strong> is traditionally the term used for certificates issued by doctors (GPs, specialists, etc.). It certifies the same thing: that you have been assessed by a health professional and found to be unfit for work.
            </p>
            <p>
              The content is essentially the same as an Absence from Work Certificate. The main difference is:
            </p>
            <ul>
              <li><strong>Issued by:</strong> Typically a medical doctor (GP)</li>
              <li><strong>Terminology:</strong> Often called &quot;Medical Certificate&quot; or &quot;Sick Certificate&quot;</li>
              <li><strong>Scope:</strong> Can cover longer periods and more complex conditions</li>
            </ul>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>The Legal Position: Fair Work Act 2009</h2>

            <p>
              This is the crucial part. The <em>Fair Work Act 2009</em> — Australia&apos;s primary employment legislation — doesn&apos;t distinguish between types of certificates. Section 107 states that an employee must provide evidence of illness if requested by an employer, and specifies acceptable evidence as:
            </p>

            <blockquote className="border-l-4 border-[#E8B931] bg-white p-6 my-6 italic text-[#6B6560]">
              &quot;A medical certificate, or... a statutory declaration... from a registered health practitioner.&quot;
              <footer className="text-sm mt-2 not-italic">— Fair Work Act 2009, Section 107(3)</footer>
            </blockquote>

            <p>
              The key term is <strong>&quot;registered health practitioner.&quot;</strong> Under the <em>Health Practitioner Regulation National Law</em>, this includes:
            </p>
            <ul>
              <li>Medical practitioners (doctors)</li>
              <li><strong>Pharmacists</strong></li>
              <li>Nurses and midwives</li>
              <li>Dentists</li>
              <li>Physiotherapists</li>
              <li>Psychologists</li>
              <li>And 9 other registered health professions</li>
            </ul>
            <p>
              Since pharmacists are registered health practitioners, certificates they issue are <strong>legally equivalent</strong> to certificates from doctors for the purposes of personal leave and carer&apos;s leave.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Side-by-Side Comparison</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-3 pr-4">Aspect</th>
                    <th className="text-left py-3 pr-4">Absence from Work Certificate</th>
                    <th className="text-left py-3">Medical Certificate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Issued by</td>
                    <td className="py-3 pr-4">Pharmacist (typically)</td>
                    <td className="py-3">GP/Doctor</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Legal validity</td>
                    <td className="py-3 pr-4 text-[#3D8B37]">✓ Valid under Fair Work Act</td>
                    <td className="py-3 text-[#3D8B37]">✓ Valid under Fair Work Act</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Personal leave</td>
                    <td className="py-3 pr-4 text-[#3D8B37]">✓ Yes</td>
                    <td className="py-3 text-[#3D8B37]">✓ Yes</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Carer&apos;s leave</td>
                    <td className="py-3 pr-4 text-[#3D8B37]">✓ Yes</td>
                    <td className="py-3 text-[#3D8B37]">✓ Yes</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Typical duration</td>
                    <td className="py-3 pr-4">1-2 days</td>
                    <td className="py-3">Any duration</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Conditions covered</td>
                    <td className="py-3 pr-4">Common, minor illness</td>
                    <td className="py-3">Any condition</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Cost</td>
                    <td className="py-3 pr-4 text-[#3D8B37]">$13.99 (SorryBoss)</td>
                    <td className="py-3">$40-120</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Time to get</td>
                    <td className="py-3 pr-4 text-[#3D8B37]">5 minutes</td>
                    <td className="py-3">1-3 hours</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">WorkCover claims</td>
                    <td className="py-3 pr-4">✗ Not typically accepted</td>
                    <td className="py-3 text-[#3D8B37]">✓ Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Why Do Pharmacists Use Different Terminology?</h2>

            <p>
              The term &quot;medical certificate&quot; has traditionally been associated with doctors, and using it for pharmacist-issued documents could cause confusion or suggest pharmacists are practising medicine (which they&apos;re not).
            </p>
            <p>
              &quot;Absence from Work Certificate&quot; is more precise about what&apos;s being certified: that you&apos;re unfit to attend work due to a health condition. It avoids any implication of medical diagnosis while still fulfilling the legal requirements for sick leave evidence.
            </p>
            <p>
              Some pharmacies also use terms like:
            </p>
            <ul>
              <li>Pharmacist Certificate</li>
              <li>Sick Certificate</li>
              <li>Health Practitioner Certificate</li>
            </ul>
            <p>
              All of these serve the same function and are equally valid under the Fair Work Act.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>What Does an Absence from Work Certificate Look Like?</h2>

            <p>
              An Absence from Work Certificate from <Link href="/" className="text-[#3D8B37] hover:underline">sorryboss.com.au</Link> includes:
            </p>

            <div className="bg-white border border-black/10 rounded-xl p-6 my-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-[#E8B931]" />
                <h3 className="font-semibold mt-0 mb-0">Certificate Contents</h3>
              </div>
              <ul className="space-y-2 mb-0">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3D8B37]" />
                  <span>Patient name and date of birth</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3D8B37]" />
                  <span>Date(s) certified as unfit for work</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3D8B37]" />
                  <span>Statement of assessment by registered pharmacist</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3D8B37]" />
                  <span>Pharmacist&apos;s name and AHPRA registration number</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3D8B37]" />
                  <span>Unique certificate verification code</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3D8B37]" />
                  <span>Date and time of issue</span>
                </li>
              </ul>
            </div>

            <p>
              The certificate does <strong>not</strong> include:
            </p>
            <ul>
              <li>Your specific diagnosis or condition</li>
              <li>Details of your symptoms</li>
              <li>Any personal health information beyond what&apos;s necessary</li>
            </ul>
            <p>
              This protects your privacy while providing your employer with the evidence they need.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Will My Employer Accept an Absence from Work Certificate?</h2>

            <p>
              <strong>Yes, they must.</strong> Under the Fair Work Act, employers are required to accept certificates from any registered health practitioner. The law doesn&apos;t give employers the right to demand a certificate specifically from a GP.
            </p>
            <p>
              If your employer questions an Absence from Work Certificate:
            </p>
            <ol>
              <li><strong>Point to the Fair Work Act</strong> — Section 107(3) explicitly accepts certificates from registered health practitioners</li>
              <li><strong>Show the AHPRA number</strong> — The certificate includes the pharmacist&apos;s registration number, which can be verified on the AHPRA website</li>
              <li><strong>Use the verification code</strong> — SorryBoss certificates include a code employers can use to verify authenticity</li>
              <li><strong>Contact Fair Work</strong> — The Fair Work Ombudsman can clarify the law to your employer</li>
            </ol>

            <div className="bg-[#F0FDF4] border border-[#3D8B37]/20 rounded-xl p-6 my-6">
              <h3 className="flex items-center gap-2 mt-0 text-[#3D8B37]">
                <Scale className="w-5 h-5" />
                Know Your Rights
              </h3>
              <p className="mb-0 text-[#6B6560]">
                If an employer refuses to accept a valid Absence from Work Certificate from a registered health practitioner, they may be in breach of the Fair Work Act. You can seek advice from the Fair Work Ombudsman (13 13 94).
              </p>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>When Should You Get Each Type?</h2>

            <h3>Get an Absence from Work Certificate (Pharmacist) when:</h3>
            <ul>
              <li>You have a common illness (cold, flu, gastro, headache)</li>
              <li>You need 1-2 days off work</li>
              <li>You want a quick, affordable certificate</li>
              <li>You don&apos;t need a prescription</li>
              <li>You want to avoid the waiting room</li>
            </ul>

            <h3>Get a Medical Certificate (GP) when:</h3>
            <ul>
              <li>You need more than 2 days off</li>
              <li>You need a prescription</li>
              <li>You have a complex or serious condition</li>
              <li>You need WorkCover documentation</li>
              <li>You need a specialist referral</li>
              <li>Your symptoms are severe or worsening</li>
            </ul>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Getting an Absence from Work Certificate from SorryBoss</h2>

            <p>
              Here&apos;s how to get an Absence from Work Certificate in 5 minutes:
            </p>

            <div className="space-y-4 my-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-semibold mb-1">Book Online</p>
                  <p className="text-[#6B6560] text-sm mb-0">Visit <Link href="/book" className="text-[#3D8B37] hover:underline">sorryboss.com.au/book</Link> and enter your details and symptoms.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-semibold mb-1">Phone Consultation</p>
                  <p className="text-[#6B6560] text-sm mb-0">An AHPRA-registered pharmacist calls you for a quick assessment (3-5 minutes). No video needed.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3D8B37] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-semibold mb-1">Certificate Emailed</p>
                  <p className="text-[#6B6560] text-sm mb-0">If appropriate, your Absence from Work Certificate is emailed immediately as a PDF.</p>
                </div>
              </div>
            </div>

            <p>
              <strong>Cost:</strong> $13.99 — and you only pay if a certificate is issued. No cert, no charge.
            </p>

            {/* CTA Box */}
            <div className="bg-[#1A1A1A] text-[#FDF8EE] rounded-2xl p-8 my-12 text-center">
              <h3 
                className="text-2xl md:text-3xl font-normal mb-4 mt-0"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Need an Absence from Work Certificate?
              </h3>
              <p className="text-[#FDF8EE]/70 mb-6">
                Get one in 5 minutes. Phone consult from bed. $13.99 — only if issued.
              </p>
              <Link 
                href="/book" 
                className="inline-flex items-center gap-2 bg-[#E8B931] text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FDF8EE] transition-colors"
              >
                Get Your Certificate →
              </Link>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Frequently Asked Questions</h2>

            <h3>What is an Absence from Work Certificate?</h3>
            <p>
              An Absence from Work Certificate is a document issued by a registered health practitioner (such as a pharmacist) certifying that you are unfit for work. It&apos;s legally valid under the Fair Work Act 2009 as evidence for personal leave and carer&apos;s leave, just like a medical certificate from a GP.
            </p>

            <h3>Is an Absence from Work Certificate the same as a Medical Certificate?</h3>
            <p>
              For practical purposes, yes. Both documents certify that you were unfit for work and both are valid evidence under section 107(3) of the Fair Work Act 2009. The main difference is terminology — &quot;medical certificate&quot; is traditionally used for GP-issued documents, while &quot;Absence from Work Certificate&quot; is the term often used by pharmacists.
            </p>

            <h3>Will my employer accept an Absence from Work Certificate?</h3>
            <p>
              Yes. Under the Fair Work Act, employers must accept certificates from any registered health practitioner as valid evidence of illness. This includes pharmacist-issued Absence from Work Certificates. If your employer questions it, you can point them to section 107(3) of the Fair Work Act 2009.
            </p>

            <h3>Who can issue an Absence from Work Certificate?</h3>
            <p>
              Any registered health practitioner can issue an Absence from Work Certificate. Under the Health Practitioner Regulation National Law, this includes GPs, pharmacists, nurses, dentists, physiotherapists, psychologists, and other AHPRA-registered practitioners.
            </p>

            <h3>How much does an Absence from Work Certificate cost?</h3>
            <p>
              Through pharmacist services like <Link href="/" className="text-[#3D8B37] hover:underline">sorryboss.com.au</Link>, an Absence from Work Certificate costs $13.99. This compares to $40-80 for a standard GP visit or $80-120 for after-hours GP visits.
            </p>

            <h3>Can I use an Absence from Work Certificate for carer&apos;s leave?</h3>
            <p>
              Yes. Absence from Work Certificates can be issued for carer&apos;s leave when you need to care for a sick family or household member. Read our guide on <Link href="/blog/carers-leave-certificate" className="text-[#3D8B37] hover:underline">how to get a carer&apos;s leave certificate</Link>.
            </p>

            <h3>What&apos;s the difference between an Absence from Work Certificate and a Statutory Declaration?</h3>
            <p>
              Both are valid evidence of illness under the Fair Work Act. An Absence from Work Certificate comes from a registered health practitioner who has assessed you. A statutory declaration is a legal statement you make yourself, declaring you were unfit for work — it doesn&apos;t require a health professional but does require an authorised witness (JP, lawyer, etc.).
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Related Articles</h2>
            <ul>
              <li><Link href="/blog/can-pharmacist-write-medical-certificate" className="text-[#3D8B37] hover:underline">Can a Pharmacist Write a Medical Certificate?</Link></li>
              <li><Link href="/blog/pharmacist-sick-certificate-australia" className="text-[#3D8B37] hover:underline">Can a Pharmacist Issue a Sick Certificate in Australia?</Link></li>
              <li><Link href="/blog/sick-leave-certificate-cost" className="text-[#3D8B37] hover:underline">Sick Leave Certificate Cost in Australia</Link></li>
              <li><Link href="/blog/medical-certificate-online-australia" className="text-[#3D8B37] hover:underline">How to Get a Medical Certificate Online</Link></li>
              <li><Link href="/blog/sick-leave-rights-australia" className="text-[#3D8B37] hover:underline">Sick Leave Rights in Australia</Link></li>
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
