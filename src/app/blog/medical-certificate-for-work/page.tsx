import Link from "next/link";
import { ArrowLeft, Check, Scale, Shield, Clock, FileText, AlertCircle, Building } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Certificate for Work: Everything Australian Employees Need to Know | SorryBoss",
  description: "Complete guide to medical certificates for work in Australia. Learn when you need one, who can issue it, your rights under the Fair Work Act, and how to get a certificate fast.",
  keywords: ["medical certificate for work", "sick certificate for work", "work medical certificate", "medical certificate australia", "sick leave certificate work"],
  alternates: {
    canonical: "https://sorryboss.com.au/blog/medical-certificate-for-work",
  },
  openGraph: {
    title: "Medical Certificate for Work: Everything Australian Employees Need to Know",
    description: "Complete guide to medical certificates for work in Australia — when you need one, who can issue it, and how to get one fast.",
    type: "article",
    publishedTime: "2025-02-22",
    url: "https://sorryboss.com.au/blog/medical-certificate-for-work",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When do I need a medical certificate for work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the Fair Work Act 2009, your employer can request evidence of illness if you take personal leave. Whether a certificate is required depends on your workplace policy — some require it from day one, others only after 2+ days. Check your employment contract or enterprise agreement for specific requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Who can issue a medical certificate for work in Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under the Fair Work Act, any AHPRA-registered health practitioner can issue a medical certificate. This includes doctors (GPs), pharmacists, nurses, dentists, physiotherapists, and other registered practitioners. Pharmacist certificates are just as legally valid as GP certificates for sick leave purposes."
      }
    },
    {
      "@type": "Question",
      "name": "Can my employer refuse to accept my medical certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your certificate is from an AHPRA-registered health practitioner and covers the dates of your absence, your employer generally cannot refuse it. The Fair Work Act requires employers to accept certificates from registered health practitioners. If your employer refuses, you may have grounds for a Fair Work complaint."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get a medical certificate for work quickly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The fastest option is a phone consultation with a pharmacist through services like SorryBoss. You can get a certificate in about 5 minutes without leaving bed, for $24.95. Alternatively, telehealth GP services typically take 15-60 minutes, while walk-in clinics may require 1-3+ hours of waiting."
      }
    },
    {
      "@type": "Question",
      "name": "Do casual workers need medical certificates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Casual employees don't receive paid sick leave under the Fair Work Act, so they typically don't need to provide medical certificates. However, some employers may still request evidence if a casual worker needs to explain an absence. Check your workplace policy."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Medical Certificate for Work: Everything Australian Employees Need to Know",
  "description": "Complete guide to medical certificates for work in Australia, including when you need one, who can issue it, your legal rights, and how to get one quickly.",
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
    "@id": "https://sorryboss.com.au/blog/medical-certificate-for-work"
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
      "name": "Medical Certificate for Work",
      "item": "https://sorryboss.com.au/blog/medical-certificate-for-work"
    }
  ]
};

export default function MedicalCertificateForWorkPage() {
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
            <span className="text-[#1A1A1A]">Medical Certificate for Work</span>
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
              <span>10 min read</span>
            </div>
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Medical Certificate for Work: Everything Australian Employees Need to Know
            </h1>
            <p className="text-xl text-[#6B6560] leading-relaxed">
              The complete guide to <strong className="text-[#1A1A1A]">medical certificates for work</strong> in Australia — when you need one, who can issue it, your rights under the Fair Work Act, and how to get one in minutes when you&apos;re unwell.
            </p>
          </header>

          {/* Quick Answer Box */}
          <div className="bg-[#F0FDF4] border border-[#3D8B37]/20 rounded-2xl p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold mb-4 mt-0 flex items-center gap-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
              <Check className="w-6 h-6 text-[#3D8B37]" />
              Key Points
            </h2>
            <ul className="text-[#1A1A1A] mb-0 space-y-2">
              <li><strong>When needed:</strong> Depends on your workplace policy — typically for absences of 2+ days, or sometimes from day one</li>
              <li><strong>Who can issue:</strong> Any AHPRA-registered health practitioner (GPs, pharmacists, nurses, etc.)</li>
              <li><strong>Fastest option:</strong> Phone consultation with a pharmacist — 5 minutes, $24.95 at <Link href="/" className="text-[#3D8B37] hover:underline">SorryBoss</Link></li>
              <li><strong>Your rights:</strong> Employers must accept certificates from registered health practitioners under the Fair Work Act</li>
            </ul>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              Whether you&apos;ve woken up with the flu, are dealing with a migraine, or need to care for a sick family member, understanding medical certificates for work is essential for every Australian employee.
            </p>
            <p>
              This comprehensive guide covers everything you need to know: when certificates are required, who can issue them, your legal rights, and how to get one quickly without dragging yourself to a crowded waiting room.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Understanding Medical Certificates for Work</h2>
            
            <p>
              A <strong>medical certificate for work</strong> (also called a sick certificate or Absence from Work Certificate) is an official document from a health practitioner confirming that you were/are unfit for work due to illness or injury.
            </p>
            
            <p>
              Under Australian law, specifically the <em>Fair Work Act 2009</em>, employers can request evidence when employees take personal leave (sick leave) or carer&apos;s leave. A medical certificate is one form of acceptable evidence.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>When Do You Need a Medical Certificate?</h2>

            <p>
              The Fair Work Act doesn&apos;t specify exactly when a certificate is required — it allows employers to request &quot;evidence that would satisfy a reasonable person.&quot; In practice, this means:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white rounded-xl p-5 border border-black/5">
                <h3 className="font-semibold text-base mb-2 mt-0">Common Workplace Policies</h3>
                <ul className="text-sm text-[#6B6560] mb-0 space-y-2">
                  <li>• Certificate required after 2+ consecutive days</li>
                  <li>• Certificate required for single days before/after weekends or public holidays</li>
                  <li>• Certificate required from day one</li>
                  <li>• Certificate required only for extended absences</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-black/5">
                <h3 className="font-semibold text-base mb-2 mt-0">Where to Find Your Policy</h3>
                <ul className="text-sm text-[#6B6560] mb-0 space-y-2">
                  <li>• Employment contract</li>
                  <li>• Enterprise agreement</li>
                  <li>• Workplace policy documents</li>
                  <li>• Employee handbook</li>
                  <li>• HR intranet or portal</li>
                </ul>
              </div>
            </div>

            <p>
              If you&apos;re unsure about your workplace requirements, check your employment contract or ask HR. When in doubt, getting a certificate is always the safer option.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Who Can Issue a Medical Certificate?</h2>

            <p>
              This is where many Australians are surprised. The Fair Work Act doesn&apos;t limit medical certificates to doctors. Section 107(3) allows certificates from any &quot;registered health practitioner&quot; — defined under the <em>Health Practitioner Regulation National Law</em>.
            </p>

            <p>
              <strong>AHPRA-registered practitioners who can issue medical certificates include:</strong>
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <div className="bg-white rounded-xl p-4 border border-black/5">
                <h3 className="font-semibold text-base mb-2 mt-0">Most Common</h3>
                <ul className="text-sm text-[#6B6560] mb-0 space-y-1">
                  <li>• General Practitioners (GPs)</li>
                  <li>• Pharmacists</li>
                  <li>• Registered Nurses</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-4 border border-black/5">
                <h3 className="font-semibold text-base mb-2 mt-0">Specialists</h3>
                <ul className="text-sm text-[#6B6560] mb-0 space-y-1">
                  <li>• Medical Specialists</li>
                  <li>• Psychologists</li>
                  <li>• Dentists</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-4 border border-black/5">
                <h3 className="font-semibold text-base mb-2 mt-0">Allied Health</h3>
                <ul className="text-sm text-[#6B6560] mb-0 space-y-1">
                  <li>• Physiotherapists</li>
                  <li>• Chiropractors</li>
                  <li>• Occupational Therapists</li>
                </ul>
              </div>
            </div>

            <p>
              <strong>Key point:</strong> A certificate from a pharmacist is legally equivalent to a GP certificate for sick leave purposes. This is why services like <Link href="/" className="text-[#3D8B37] hover:underline">SorryBoss</Link> exist — offering fast, affordable pharmacist consultations for simple sick leave certificates.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Your Rights Under the Fair Work Act</h2>

            <p>
              Understanding your legal rights helps you navigate workplace sick leave confidently:
            </p>

            <div className="bg-white border border-black/10 rounded-2xl p-6 my-6">
              <h3 className="text-lg font-semibold mb-4 mt-0 flex items-center gap-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
                <Scale className="w-5 h-5 text-[#3D8B37]" />
                Employee Rights
              </h3>
              <ul className="text-[#1A1A1A] mb-0 space-y-3">
                <li><strong>Paid personal leave:</strong> Full-time and part-time employees are entitled to 10 days of paid personal/carer&apos;s leave per year</li>
                <li><strong>Leave accumulation:</strong> Unused sick leave rolls over year to year</li>
                <li><strong>Choice of practitioner:</strong> You can get a certificate from any AHPRA-registered health practitioner</li>
                <li><strong>Privacy:</strong> Certificates don&apos;t need to disclose your specific diagnosis</li>
                <li><strong>No unreasonable requests:</strong> Employers can&apos;t request evidence that would be unreasonable in the circumstances</li>
              </ul>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-6 my-6">
              <h3 className="text-lg font-semibold mb-4 mt-0 flex items-center gap-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
                <Building className="w-5 h-5 text-[#E8B931]" />
                Employer Rights
              </h3>
              <ul className="text-[#1A1A1A] mb-0 space-y-3">
                <li><strong>Request evidence:</strong> Employers can ask for evidence of illness</li>
                <li><strong>Set reasonable policies:</strong> Workplaces can establish certificate requirements</li>
                <li><strong>Verify certificates:</strong> Employers may contact the issuing practitioner to verify authenticity</li>
                <li><strong>Require timely notification:</strong> Employers can require you to notify them of absence as soon as practical</li>
              </ul>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>What Should a Medical Certificate Include?</h2>

            <p>
              A valid medical certificate for work should contain:
            </p>

            <ul>
              <li><strong>Your full name</strong> (matching your employment records)</li>
              <li><strong>Date of consultation</strong></li>
              <li><strong>Period of unfitness</strong> (specific dates you&apos;re certified as unwell)</li>
              <li><strong>Statement of unfitness</strong> (that you were unfit for work)</li>
              <li><strong>Practitioner details</strong> (name, registration number, signature)</li>
              <li><strong>Practice details</strong> (name, address, contact information)</li>
            </ul>

            <p>
              <strong>What it doesn&apos;t need:</strong> Your specific diagnosis. Certificates typically state &quot;unfit for work due to medical condition&quot; or similar — your employer isn&apos;t entitled to know the details of your illness.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Options for Getting a Medical Certificate</h2>

            <p>
              Here&apos;s a comparison of your options when you need a certificate for work:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-3 pr-4">Option</th>
                    <th className="text-left py-3 pr-4">Cost</th>
                    <th className="text-left py-3 pr-4">Time</th>
                    <th className="text-left py-3">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Bulk-billed GP</td>
                    <td className="py-3 pr-4 text-[#3D8B37] font-semibold">$0</td>
                    <td className="py-3 pr-4">1-3+ hours</td>
                    <td className="py-3 text-[#6B6560]">No urgency, need GP advice</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Private GP</td>
                    <td className="py-3 pr-4">$60-120</td>
                    <td className="py-3 pr-4">30-60 mins</td>
                    <td className="py-3 text-[#6B6560]">Need prescription/complex care</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Telehealth GP</td>
                    <td className="py-3 pr-4">$35-80</td>
                    <td className="py-3 pr-4">15-60 mins</td>
                    <td className="py-3 text-[#6B6560]">Can&apos;t leave home, need GP</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Walk-in Pharmacy</td>
                    <td className="py-3 pr-4">$15-30</td>
                    <td className="py-3 pr-4">15-30 mins</td>
                    <td className="py-3 text-[#6B6560]">Quick, local option</td>
                  </tr>
                  <tr className="bg-[#F0FDF4]">
                    <td className="py-3 pr-4 font-semibold">SorryBoss (Phone)</td>
                    <td className="py-3 pr-4 font-semibold text-[#3D8B37]">$24.95</td>
                    <td className="py-3 pr-4 font-semibold text-[#3D8B37]">5 minutes</td>
                    <td className="py-3 text-[#3D8B37]">Fast, from bed, simple illness</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>How to Get a Certificate Fast (Without Leaving Bed)</h2>

            <p>
              When you&apos;re unwell, the fastest way to get a medical certificate for work is through a phone consultation. Here&apos;s how <Link href="/" className="text-[#3D8B37] hover:underline">SorryBoss</Link> works:
            </p>

            <div className="space-y-4 my-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>1</div>
                <div>
                  <p className="font-semibold mb-1">Book Online (2 minutes)</p>
                  <p className="text-[#6B6560] text-sm mb-0">Visit <Link href="/book" className="text-[#3D8B37] hover:underline">sorryboss.com.au/book</Link>, enter your details and symptoms.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>2</div>
                <div>
                  <p className="font-semibold mb-1">Phone Consultation (3-5 minutes)</p>
                  <p className="text-[#6B6560] text-sm mb-0">Our AHPRA-registered pharmacist calls you. No video — answer from bed in your pyjamas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3D8B37] text-white flex items-center justify-center font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>3</div>
                <div>
                  <p className="font-semibold mb-1">Certificate Emailed (Instant)</p>
                  <p className="text-[#6B6560] text-sm mb-0">Your Absence from Work Certificate is emailed as a PDF. Forward to HR/your boss.</p>
                </div>
              </div>
            </div>

            <p>
              Total time: about 5 minutes. Total effort: answering a phone call. And you only pay $24.95 if a certificate is issued — if we can&apos;t help, you don&apos;t pay.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Common Workplace Scenarios</h2>

            <h3>Scenario 1: Single Day Off</h3>
            <p>
              For a single sick day, many workplaces don&apos;t require a certificate. However, some do — especially for days adjacent to weekends or holidays. Check your policy, or get a certificate to be safe.
            </p>
            <p>
              <strong>Read more:</strong> <Link href="/blog/do-i-need-medical-certificate-for-one-day" className="text-[#3D8B37] hover:underline">Do I Need a Medical Certificate for 1 Day Off Sick?</Link>
            </p>

            <h3>Scenario 2: Multiple Days Off</h3>
            <p>
              Most workplaces require a certificate for absences of 2+ days. A pharmacist certificate can cover 1-2 days; for longer absences, you&apos;ll likely need a GP assessment.
            </p>

            <h3>Scenario 3: Carer&apos;s Leave</h3>
            <p>
              If you need time off to care for a sick family member, you can use your personal leave balance. Certificates can cover carer&apos;s leave too.
            </p>
            <p>
              <strong>Read more:</strong> <Link href="/blog/carers-leave-certificate" className="text-[#3D8B37] hover:underline">How to Get a Carer&apos;s Leave Certificate</Link>
            </p>

            <h3>Scenario 4: Mental Health Day</h3>
            <p>
              Mental health is treated the same as physical health under Australian law. You&apos;re entitled to take personal leave for mental health reasons, and can get a certificate for it.
            </p>
            <p>
              <strong>Read more:</strong> <Link href="/blog/medical-certificate-mental-health-day" className="text-[#3D8B37] hover:underline">Medical Certificate for Mental Health Day</Link>
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>What If My Employer Questions My Certificate?</h2>

            <p>
              If your employer questions or refuses your certificate, here&apos;s what to do:
            </p>

            <ol>
              <li><strong>Check it&apos;s valid:</strong> Ensure the certificate is from an AHPRA-registered practitioner and covers the correct dates</li>
              <li><strong>Cite the law:</strong> Point your employer to section 107(3) of the Fair Work Act 2009, which allows certificates from registered health practitioners</li>
              <li><strong>Provide AHPRA details:</strong> The certificate includes the practitioner&apos;s AHPRA registration number, which can be verified</li>
              <li><strong>Document everything:</strong> Keep records of your communications</li>
              <li><strong>Contact Fair Work:</strong> If your employer continues to refuse a legitimate certificate, contact the Fair Work Ombudsman (13 13 94)</li>
            </ol>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Special Cases</h2>

            <h3>Casual Employees</h3>
            <p>
              Casual workers don&apos;t receive paid sick leave under the National Employment Standards. You generally don&apos;t need a certificate if you&apos;re not claiming paid leave, but some employers may still request evidence. Check your workplace policy.
            </p>

            <h3>Probation Period</h3>
            <p>
              During probation, you still accrue sick leave and have the same entitlements. However, taking excessive leave during probation may affect your standing — a certificate demonstrates your absence was genuine.
            </p>

            <h3>WorkCover Claims</h3>
            <p>
              If your illness or injury is work-related, you&apos;ll need specific WorkCover documentation, usually from a GP. Pharmacist certificates aren&apos;t typically accepted for workers&apos; compensation claims.
            </p>

            {/* CTA Box */}
            <div className="bg-[#1A1A1A] text-[#FDF8EE] rounded-2xl p-8 my-12 text-center">
              <h3 
                className="text-2xl md:text-3xl font-normal mb-4 mt-0"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Need a certificate for work?
              </h3>
              <p className="text-[#FDF8EE]/70 mb-6">
                Get an Absence from Work Certificate in 5 minutes. Phone consultation from bed. $24.95 — only if issued.
              </p>
              <Link 
                href="/book" 
                className="inline-flex items-center gap-2 bg-[#E8B931] text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FDF8EE] transition-colors"
              >
                Get Your Certificate →
              </Link>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Key Takeaways</h2>

            <div className="bg-[#F0FDF4] border border-[#3D8B37]/20 rounded-2xl p-6 my-6">
              <ul className="text-[#1A1A1A] mb-0 space-y-3">
                <li><strong>Check your policy:</strong> Certificate requirements vary by workplace — know yours</li>
                <li><strong>Multiple options:</strong> GPs, pharmacists, nurses, and other practitioners can all issue valid certificates</li>
                <li><strong>Know your rights:</strong> Employers must accept certificates from AHPRA-registered practitioners</li>
                <li><strong>Fast options exist:</strong> Phone consultations mean you don&apos;t have to leave bed when you&apos;re sick</li>
                <li><strong>Privacy protected:</strong> Certificates don&apos;t need to disclose your specific diagnosis</li>
              </ul>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Frequently Asked Questions</h2>

            <h3>When do I need a medical certificate for work?</h3>
            <p>
              Under the Fair Work Act 2009, your employer can request evidence of illness if you take personal leave. Whether a certificate is required depends on your workplace policy — some require it from day one, others only after 2+ days. Check your employment contract or enterprise agreement for specific requirements.
            </p>

            <h3>Who can issue a medical certificate for work in Australia?</h3>
            <p>
              Under the Fair Work Act, any AHPRA-registered health practitioner can issue a medical certificate. This includes doctors (GPs), pharmacists, nurses, dentists, physiotherapists, and other registered practitioners. Pharmacist certificates are just as legally valid as GP certificates for sick leave purposes.
            </p>

            <h3>Can my employer refuse to accept my medical certificate?</h3>
            <p>
              If your certificate is from an AHPRA-registered health practitioner and covers the dates of your absence, your employer generally cannot refuse it. The Fair Work Act requires employers to accept certificates from registered health practitioners. If your employer refuses, you may have grounds for a Fair Work complaint.
            </p>

            <h3>How do I get a medical certificate for work quickly?</h3>
            <p>
              The fastest option is a phone consultation with a pharmacist through services like <Link href="/" className="text-[#3D8B37] hover:underline">SorryBoss</Link>. You can get a certificate in about 5 minutes without leaving bed, for $24.95. Alternatively, telehealth GP services typically take 15-60 minutes, while walk-in clinics may require 1-3+ hours of waiting.
            </p>

            <h3>Do casual workers need medical certificates?</h3>
            <p>
              Casual employees don&apos;t receive paid sick leave under the Fair Work Act, so they typically don&apos;t need to provide medical certificates. However, some employers may still request evidence if a casual worker needs to explain an absence. Check your workplace policy.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Related Articles</h2>
            <ul>
              <li><Link href="/blog/can-pharmacist-write-medical-certificate" className="text-[#3D8B37] hover:underline">Can a Pharmacist Write a Medical Certificate in Australia?</Link></li>
              <li><Link href="/blog/sick-leave-rights-australia" className="text-[#3D8B37] hover:underline">Sick Leave Rights in Australia: Complete Guide</Link></li>
              <li><Link href="/blog/do-i-need-medical-certificate-for-one-day" className="text-[#3D8B37] hover:underline">Do I Need a Medical Certificate for 1 Day Off Sick?</Link></li>
              <li><Link href="/blog/same-day-medical-certificate" className="text-[#3D8B37] hover:underline">How to Get a Same-Day Medical Certificate (Fast)</Link></li>
              <li><Link href="/blog/cheap-medical-certificate-online" className="text-[#3D8B37] hover:underline">Cheapest Medical Certificate Online Australia 2025</Link></li>
              <li><Link href="/blog/absence-from-work-certificate" className="text-[#3D8B37] hover:underline">Absence from Work Certificate vs Medical Certificate</Link></li>
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
