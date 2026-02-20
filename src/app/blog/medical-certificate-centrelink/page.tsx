import Link from "next/link";
import { ArrowLeft, AlertTriangle, Check, Info, FileText, Building } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Certificate for Centrelink: What You Need to Know | SorryBoss",
  description: "Learn about Centrelink medical certificate requirements in Australia. Find out what type of certificate you need, who can issue it, and when a pharmacist certificate may or may not be accepted.",
  keywords: ["medical certificate for centrelink", "centrelink medical certificate requirements", "centrelink sick certificate", "centrelink medical exemption", "services australia medical certificate"],
  alternates: {
    canonical: "https://sorryboss.com.au/blog/medical-certificate-centrelink",
  },
  openGraph: {
    title: "Medical Certificate for Centrelink: What You Need to Know",
    description: "Understand Centrelink's medical certificate requirements, including what they accept and when you need a GP certificate specifically.",
    type: "article",
    publishedTime: "2025-02-22",
    url: "https://sorryboss.com.au/blog/medical-certificate-centrelink",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Centrelink accept pharmacist medical certificates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the purpose. For employer sick leave (to prove you were sick during a Centrelink reporting period), a pharmacist certificate may be sufficient. However, for medical exemptions from mutual obligations or longer-term incapacity, Centrelink typically requires certificates from doctors or specific Centrelink forms completed by a GP."
      }
    },
    {
      "@type": "Question",
      "name": "What medical certificate does Centrelink require?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Centrelink has specific forms for different purposes: SU415 for temporary incapacity exemption, SU684 for Employment Services Assessment, and standard medical certificates for short-term illness. Requirements vary depending on whether you need a short-term exemption or longer-term medical assessment."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a pharmacist certificate to report sick days to Centrelink?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you're reporting that you were sick during your employment and have a pharmacist certificate from your employer, Centrelink may accept this as part of your employment record. However, for direct medical exemptions from Centrelink mutual obligations, you typically need documentation from a doctor."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get a medical exemption from Centrelink mutual obligations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a temporary medical exemption (up to 13 weeks), you'll need a medical certificate or Centrelink medical form completed by a doctor. Contact Centrelink first to understand exactly what they need, as requirements can vary based on your payment type and circumstances."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Centrelink medical certificate form number?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The main forms are SU415 (Medical Certificate - Temporary Incapacity) for short-term exemptions and SU684 (Employment Services Assessment) for longer-term capacity assessments. Your doctor can also write a standard medical certificate for brief illnesses."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Medical Certificate for Centrelink: What You Need to Know",
  "description": "Complete guide to Centrelink medical certificate requirements, including what type of certificate you need, who can issue it, and when pharmacist certificates are accepted.",
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
    "@id": "https://sorryboss.com.au/blog/medical-certificate-centrelink"
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
      "name": "Medical Certificate for Centrelink",
      "item": "https://sorryboss.com.au/blog/medical-certificate-centrelink"
    }
  ]
};

export default function MedicalCertificateCentrelinkPage() {
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
            <span className="text-[#1A1A1A]">Medical Certificate for Centrelink</span>
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
              Medical Certificate for Centrelink: What You Need to Know
            </h1>
            <p className="text-xl text-[#6B6560] leading-relaxed">
              Dealing with Centrelink and need a medical certificate? Here&apos;s everything you need to know about <strong className="text-[#1A1A1A]">Centrelink medical certificate requirements</strong> — including when pharmacist certificates work and when you need a GP.
            </p>
          </header>

          {/* Important Notice Box */}
          <div className="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-2xl p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold mb-4 mt-0 flex items-center gap-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
              <AlertTriangle className="w-6 h-6 text-[#F59E0B]" />
              Important: Centrelink Has Specific Requirements
            </h2>
            <p className="text-[#1A1A1A] mb-4">
              <strong>Centrelink&apos;s requirements differ from standard employer sick leave.</strong> While pharmacist certificates are legally valid for employer sick leave under the Fair Work Act, Centrelink often requires specific forms or GP certificates for medical exemptions.
            </p>
            <p className="text-[#1A1A1A] mb-0">
              <strong>Always check with Centrelink first</strong> about what documentation they need for your specific situation. This guide provides general information, but Centrelink requirements can vary.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              Navigating Centrelink&apos;s medical certificate requirements can be confusing. Different situations require different documentation, and what works for your employer may not work for Centrelink.
            </p>
            <p>
              This guide breaks down the various scenarios where you might need a medical certificate for Centrelink, what type of certificate is required, and where <Link href="/" className="text-[#3D8B37] hover:underline">SorryBoss</Link> can — and can&apos;t — help.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Understanding Centrelink vs Employer Requirements</h2>
            
            <p>
              First, it&apos;s important to understand the difference:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-[#F0FDF4] rounded-xl p-5 border border-[#3D8B37]/20">
                <h3 className="font-semibold text-base mb-2 mt-0 flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#3D8B37]" />
                  Employer Sick Leave
                </h3>
                <p className="text-sm text-[#6B6560] mb-0">
                  Under the <em>Fair Work Act 2009</em>, employers must accept certificates from any AHPRA-registered health practitioner — including pharmacists. <strong>SorryBoss certificates are fully valid here.</strong>
                </p>
              </div>
              <div className="bg-[#FEF3C7] rounded-xl p-5 border border-[#F59E0B]/20">
                <h3 className="font-semibold text-base mb-2 mt-0 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#F59E0B]" />
                  Centrelink Requirements
                </h3>
                <p className="text-sm text-[#6B6560] mb-0">
                  Centrelink (Services Australia) sets its own rules for what medical evidence it accepts. These often require specific Centrelink forms or GP certificates. <strong>Check with Centrelink first.</strong>
                </p>
              </div>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Common Centrelink Medical Certificate Scenarios</h2>

            <h3>1. Temporary Incapacity Exemption (Mutual Obligations)</h3>
            
            <p>
              If you receive JobSeeker Payment and can&apos;t meet your mutual obligations due to illness, you may need a medical exemption. This typically requires:
            </p>

            <ul>
              <li><strong>Form SU415</strong> (Medical Certificate - Temporary Incapacity) completed by a doctor</li>
              <li><strong>Standard GP certificate</strong> stating your incapacity period</li>
              <li>Documentation showing you&apos;re unable to work or look for work</li>
            </ul>

            <div className="bg-[#FEF2F2] border border-[#EF4444]/20 rounded-xl p-4 my-4">
              <p className="text-sm text-[#991B1B] mb-0">
                <strong>⚠️ Pharmacist certificates are generally NOT accepted</strong> for mutual obligation exemptions. Centrelink typically requires GP documentation for these assessments.
              </p>
            </div>

            <h3>2. Reporting Sick Days While Working</h3>
            
            <p>
              If you&apos;re on JobSeeker or Youth Allowance and working part-time, you may need to report sick days you took from work. In this case:
            </p>

            <ul>
              <li>The certificate is primarily for your <em>employer</em></li>
              <li>You&apos;re reporting it to Centrelink as part of your employment record</li>
              <li>A pharmacist certificate that your employer accepted should be sufficient for this purpose</li>
            </ul>

            <div className="bg-[#F0FDF4] border border-[#3D8B37]/20 rounded-xl p-4 my-4">
              <p className="text-sm text-[#166534] mb-0">
                <strong>✓ A SorryBoss certificate may work here</strong> because you&apos;re providing it to your employer (who must accept it under Fair Work Act), and simply reporting that fact to Centrelink.
              </p>
            </div>

            <h3>3. Disability Support Pension (DSP) Applications</h3>
            
            <p>
              DSP applications require comprehensive medical evidence, including:
            </p>

            <ul>
              <li>Detailed medical reports from treating doctors</li>
              <li>Specialist assessments where relevant</li>
              <li>Evidence of treatment history</li>
              <li>Government Medical Officer (GMO) assessment in many cases</li>
            </ul>

            <div className="bg-[#FEF2F2] border border-[#EF4444]/20 rounded-xl p-4 my-4">
              <p className="text-sm text-[#991B1B] mb-0">
                <strong>⚠️ Pharmacist certificates are NOT appropriate</strong> for DSP applications. These require extensive GP and specialist documentation.
              </p>
            </div>

            <h3>4. Carer Payment/Allowance Medical Requirements</h3>
            
            <p>
              If you&apos;re applying for Carer Payment or Carer Allowance, you&apos;ll typically need:
            </p>

            <ul>
              <li>Medical reports about the person you&apos;re caring for</li>
              <li>Specific Centrelink medical forms (SA332a, SA333TDR, etc.)</li>
              <li>Treating doctor documentation</li>
            </ul>

            <div className="bg-[#FEF2F2] border border-[#EF4444]/20 rounded-xl p-4 my-4">
              <p className="text-sm text-[#991B1B] mb-0">
                <strong>⚠️ Pharmacist certificates are NOT appropriate</strong> for carer payment applications. These require GP/specialist documentation.
              </p>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Centrelink Medical Certificate Forms</h2>

            <p>
              Centrelink uses specific forms for different purposes. Here are the main ones:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-3 pr-4">Form Number</th>
                    <th className="text-left py-3 pr-4">Name</th>
                    <th className="text-left py-3">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-mono text-sm">SU415</td>
                    <td className="py-3 pr-4">Medical Certificate - Temporary Incapacity</td>
                    <td className="py-3 text-[#6B6560]">Short-term exemption from mutual obligations</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-mono text-sm">SU684</td>
                    <td className="py-3 pr-4">Employment Services Assessment</td>
                    <td className="py-3 text-[#6B6560]">Longer-term capacity assessment</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-mono text-sm">SA332a</td>
                    <td className="py-3 pr-4">Medical Report (Carer Payment)</td>
                    <td className="py-3 text-[#6B6560]">Care receiver medical assessment</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-mono text-sm">SA479</td>
                    <td className="py-3 pr-4">Medical Evidence</td>
                    <td className="py-3 text-[#6B6560]">General medical evidence form</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              These forms must be completed by a doctor (GP or specialist). They&apos;re not something a pharmacist can complete.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>When Can SorryBoss Help?</h2>

            <p>
              To be completely transparent, here&apos;s where our service fits in:
            </p>

            <div className="bg-[#F0FDF4] border border-[#3D8B37]/20 rounded-2xl p-6 my-6">
              <h3 className="text-lg font-semibold mb-4 mt-0" style={{ fontFamily: "'Instrument Serif', serif" }}>
                ✓ SorryBoss CAN Help With:
              </h3>
              <ul className="text-[#1A1A1A] mb-0 space-y-2">
                <li><strong>Employer sick leave certificates:</strong> If you&apos;re working while receiving Centrelink payments and need a certificate for your employer</li>
                <li><strong>Documentation of illness:</strong> As supporting evidence that you were unwell (though Centrelink may still require additional GP documentation)</li>
                <li><strong>Quick, affordable sick certificates:</strong> When you genuinely need time off work and need evidence for your employer</li>
              </ul>
            </div>

            <div className="bg-[#FEF2F2] border border-[#EF4444]/20 rounded-2xl p-6 my-6">
              <h3 className="text-lg font-semibold mb-4 mt-0" style={{ fontFamily: "'Instrument Serif', serif" }}>
                ✗ SorryBoss CANNOT Help With:
              </h3>
              <ul className="text-[#1A1A1A] mb-0 space-y-2">
                <li><strong>Centrelink-specific medical forms:</strong> SU415, SU684, SA332a, etc. must be completed by a doctor</li>
                <li><strong>Mutual obligation exemptions:</strong> These typically require GP assessment</li>
                <li><strong>DSP applications:</strong> Require comprehensive GP/specialist documentation</li>
                <li><strong>Carer payment medical requirements:</strong> Require GP assessment of the care receiver</li>
                <li><strong>Extended incapacity periods:</strong> Pharmacist certificates typically cover 1-2 days only</li>
              </ul>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Getting the Right Certificate for Centrelink</h2>

            <p>
              Here&apos;s our recommended approach:
            </p>

            <div className="space-y-4 my-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>1</div>
                <div>
                  <p className="font-semibold mb-1">Contact Centrelink First</p>
                  <p className="text-[#6B6560] text-sm mb-0">Call 13 28 50 or check your MyGov to understand exactly what documentation they need for your specific situation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>2</div>
                <div>
                  <p className="font-semibold mb-1">Check If Specific Forms Are Needed</p>
                  <p className="text-[#6B6560] text-sm mb-0">If Centrelink mentions form numbers (SU415, etc.), you&apos;ll need to see a GP who can complete those forms.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>3</div>
                <div>
                  <p className="font-semibold mb-1">For Employer Certificates</p>
                  <p className="text-[#6B6560] text-sm mb-0">If you just need a certificate for your employer (which you&apos;re then reporting to Centrelink), SorryBoss can help.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3D8B37] text-white flex items-center justify-center font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>4</div>
                <div>
                  <p className="font-semibold mb-1">Keep Records</p>
                  <p className="text-[#6B6560] text-sm mb-0">Whatever certificate you get, keep copies. Centrelink may ask for evidence later.</p>
                </div>
              </div>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Accessing Bulk-Billed GP Services</h2>

            <p>
              If you&apos;re on Centrelink payments and need a GP certificate, cost may be a concern. Here are some options:
            </p>

            <ul>
              <li><strong>Bulk-billing clinics:</strong> Search for bulk-billing GPs in your area — you&apos;ll pay nothing out of pocket</li>
              <li><strong>Community health centres:</strong> Many offer free or low-cost GP services</li>
              <li><strong>Aboriginal Medical Services:</strong> If you&apos;re Indigenous, these provide comprehensive healthcare</li>
              <li><strong>Telehealth services:</strong> Some bulk-bill video consultations with GPs</li>
            </ul>

            <p>
              If you hold a Health Care Card (most Centrelink recipients do), many clinics will prioritise bulk-billing for you.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Key Takeaways</h2>

            <div className="bg-white border border-black/10 rounded-2xl p-6 my-6">
              <ul className="text-[#1A1A1A] mb-0 space-y-3">
                <li><strong>Centrelink has its own rules</strong> that differ from standard employer requirements</li>
                <li><strong>Always check with Centrelink first</strong> about what documentation they need</li>
                <li><strong>Pharmacist certificates</strong> are valid for employers but may not be accepted by Centrelink for exemptions</li>
                <li><strong>Specific Centrelink forms</strong> (SU415, etc.) must be completed by a doctor</li>
                <li><strong>SorryBoss can help</strong> with employer certificates, but not Centrelink-specific medical forms</li>
              </ul>
            </div>

            {/* CTA Box */}
            <div className="bg-[#1A1A1A] text-[#FDF8EE] rounded-2xl p-8 my-12 text-center">
              <h3 
                className="text-2xl md:text-3xl font-normal mb-4 mt-0"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Need a certificate for your employer?
              </h3>
              <p className="text-[#FDF8EE]/70 mb-6">
                If you need a sick leave certificate for work (not a Centrelink exemption), we can help. 5-minute phone consultation, $24.95.
              </p>
              <Link 
                href="/book" 
                className="inline-flex items-center gap-2 bg-[#E8B931] text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FDF8EE] transition-colors"
              >
                Get Your Certificate →
              </Link>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Frequently Asked Questions</h2>

            <h3>Does Centrelink accept pharmacist medical certificates?</h3>
            <p>
              It depends on the purpose. For employer sick leave (to prove you were sick during a Centrelink reporting period), a pharmacist certificate may be sufficient. However, for medical exemptions from mutual obligations or longer-term incapacity, Centrelink typically requires certificates from doctors or specific Centrelink forms completed by a GP.
            </p>

            <h3>What medical certificate does Centrelink require?</h3>
            <p>
              Centrelink has specific forms for different purposes: SU415 for temporary incapacity exemption, SU684 for Employment Services Assessment, and standard medical certificates for short-term illness. Requirements vary depending on whether you need a short-term exemption or longer-term medical assessment.
            </p>

            <h3>Can I use a pharmacist certificate to report sick days to Centrelink?</h3>
            <p>
              If you&apos;re reporting that you were sick during your employment and have a pharmacist certificate from your employer, Centrelink may accept this as part of your employment record. However, for direct medical exemptions from Centrelink mutual obligations, you typically need documentation from a doctor.
            </p>

            <h3>How do I get a medical exemption from Centrelink mutual obligations?</h3>
            <p>
              For a temporary medical exemption (up to 13 weeks), you&apos;ll need a medical certificate or Centrelink medical form completed by a doctor. Contact Centrelink first to understand exactly what they need, as requirements can vary based on your payment type and circumstances.
            </p>

            <h3>What is the Centrelink medical certificate form number?</h3>
            <p>
              The main forms are SU415 (Medical Certificate - Temporary Incapacity) for short-term exemptions and SU684 (Employment Services Assessment) for longer-term capacity assessments. Your doctor can also write a standard medical certificate for brief illnesses.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Related Articles</h2>
            <ul>
              <li><Link href="/blog/can-pharmacist-write-medical-certificate" className="text-[#3D8B37] hover:underline">Can a Pharmacist Write a Medical Certificate in Australia?</Link></li>
              <li><Link href="/blog/sick-leave-rights-australia" className="text-[#3D8B37] hover:underline">Sick Leave Rights in Australia: Complete Guide</Link></li>
              <li><Link href="/blog/medical-certificate-for-work" className="text-[#3D8B37] hover:underline">Medical Certificate for Work: Everything Australian Employees Need to Know</Link></li>
              <li><Link href="/blog/cheap-medical-certificate-online" className="text-[#3D8B37] hover:underline">Cheapest Medical Certificate Online Australia 2025</Link></li>
              <li><Link href="/blog/do-i-need-medical-certificate-for-one-day" className="text-[#3D8B37] hover:underline">Do I Need a Medical Certificate for 1 Day Off Sick?</Link></li>
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
