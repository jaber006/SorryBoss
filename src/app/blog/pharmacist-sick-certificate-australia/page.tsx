import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Can a Pharmacist Issue a Sick Certificate in Australia? | SorryBoss",
  description: "Yes, pharmacists can legally issue medical certificates in Australia under the Fair Work Act 2009. Learn how it works, what conditions apply, and how to get one online.",
  keywords: "pharmacist sick certificate, medical certificate online, sick note australia, fair work act medical certificate, absence from work certificate",
  openGraph: {
    title: "Can a Pharmacist Issue a Sick Certificate in Australia?",
    description: "Yes, pharmacists can legally issue medical certificates under the Fair Work Act 2009. Here's everything you need to know.",
    type: "article",
    publishedTime: "2026-02-13",
  },
};

export default function PharmacistSickCertificatePage() {
  return (
    <main className="min-h-screen bg-[#FDF8EE]">
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
              <time>13 February 2026</time>
              <span>•</span>
              <span>4 min read</span>
            </div>
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Can a Pharmacist Issue a Sick Certificate in Australia?
            </h1>
            <p className="text-xl text-[#6B6560] leading-relaxed">
              Short answer: <strong className="text-[#1A1A1A]">Yes.</strong> Pharmacists are legally authorised to issue medical certificates for personal leave and carer&apos;s leave under Australian law.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-black/5 mb-8">
              <h2 className="text-xl font-semibold mb-3 mt-0" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Key Takeaways
              </h2>
              <ul className="space-y-2 text-[#6B6560] mb-0">
                <li>✓ Pharmacist certificates are valid under the Fair Work Act 2009</li>
                <li>✓ They can be used for personal leave and carer&apos;s leave</li>
                <li>✓ No need to see a GP for common illnesses</li>
                <li>✓ Usually faster and cheaper than a doctor&apos;s visit</li>
              </ul>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>The Legal Basis</h2>
            <p>
              Section 107(3) of the <em>Fair Work Act 2009</em> (Cth) explicitly states that an employee can provide evidence of illness from a &quot;registered health practitioner&quot; — and this includes pharmacists registered with AHPRA (Australian Health Practitioner Regulation Agency).
            </p>
            <p>
              The relevant section reads:
            </p>
            <blockquote className="border-l-4 border-[#E8B931] bg-[#FDF8EE] p-4 my-6 italic text-[#6B6560]">
              &quot;A document from a registered health practitioner... is evidence that the employee is entitled to personal/carer&apos;s leave.&quot;
            </blockquote>
            <p>
              Pharmacists have been registered health practitioners under Australian law since 2010 when pharmacy was included in the National Registration and Accreditation Scheme.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>What Can a Pharmacist Certify?</h2>
            <p>
              Pharmacists can issue an <strong>Absence from Work Certificate</strong> for common, self-limiting conditions such as:
            </p>
            <ul>
              <li>Cold and flu symptoms</li>
              <li>Headaches and migraines</li>
              <li>Gastro and stomach upsets</li>
              <li>Minor aches and pains</li>
              <li>Fatigue and general unwellness</li>
              <li>Menstrual pain</li>
            </ul>
            <p>
              The certificate typically covers 1-2 days of leave, which is appropriate for most minor illnesses that don&apos;t require ongoing medical treatment.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>When Should You See a Doctor Instead?</h2>
            <p>
              Pharmacist certificates are ideal for short-term, minor illness. You should see a GP if:
            </p>
            <ul>
              <li>You need more than 2 days off work</li>
              <li>You have a chronic or serious condition</li>
              <li>You need a prescription medication</li>
              <li>Your symptoms are severe or worsening</li>
              <li>You need a WorkCover or insurance certificate</li>
            </ul>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Will My Employer Accept It?</h2>
            <p>
              Under the Fair Work Act, employers must accept certificates from any registered health practitioner — including pharmacists. The law doesn&apos;t distinguish between a certificate from a GP and one from a pharmacist.
            </p>
            <p>
              That said, some employers may not be familiar with pharmacist-issued certificates. If questioned, you can point them to:
            </p>
            <ul>
              <li>Section 107(3) of the Fair Work Act 2009</li>
              <li>The AHPRA registration number on the certificate</li>
              <li>The verification link on the certificate</li>
            </ul>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Pharmacist vs GP: Cost Comparison</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-3 pr-4">Option</th>
                    <th className="text-left py-3 pr-4">Typical Cost</th>
                    <th className="text-left py-3">Wait Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Emergency GP visit</td>
                    <td className="py-3 pr-4">$80–120</td>
                    <td className="py-3">1–3 hours</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Telehealth GP</td>
                    <td className="py-3 pr-4">$40–60</td>
                    <td className="py-3">30–60 mins</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">After-hours doctor</td>
                    <td className="py-3 pr-4">$60–95</td>
                    <td className="py-3">1–2 hours</td>
                  </tr>
                  <tr className="bg-[#F0FDF4]">
                    <td className="py-3 pr-4 font-semibold">SorryBoss (Pharmacist)</td>
                    <td className="py-3 pr-4 font-semibold text-[#3D8B37]">$13.99</td>
                    <td className="py-3 font-semibold text-[#3D8B37]">5 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>How to Get a Pharmacist Sick Certificate Online</h2>
            <p>
              With services like SorryBoss, you can get a pharmacist-issued certificate without leaving your bed:
            </p>
            <ol>
              <li><strong>Book online</strong> — Fill in your details and symptoms (2 minutes)</li>
              <li><strong>Phone consultation</strong> — Our pharmacist calls you for a quick assessment (5 minutes)</li>
              <li><strong>Certificate emailed</strong> — If appropriate, your certificate is sent instantly</li>
            </ol>
            <p>
              You only pay if a certificate is issued. No cert = no charge.
            </p>

            {/* CTA Box */}
            <div className="bg-[#1A1A1A] text-[#FDF8EE] rounded-2xl p-8 my-12 text-center">
              <h3 
                className="text-2xl md:text-3xl font-normal mb-4 mt-0"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Need a sick certificate now?
              </h3>
              <p className="text-[#FDF8EE]/70 mb-6">
                Get an AHPRA-registered pharmacist certificate in minutes. $13.99, only if issued.
              </p>
              <Link 
                href="/book" 
                className="inline-flex items-center gap-2 bg-[#E8B931] text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FDF8EE] transition-colors"
              >
                Get Your Certificate →
              </Link>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Frequently Asked Questions</h2>
            
            <h3>Is a pharmacist certificate the same as a medical certificate?</h3>
            <p>
              For the purposes of personal leave and carer&apos;s leave under the Fair Work Act, yes. Both are evidence of illness from a registered health practitioner.
            </p>

            <h3>Can I use this for WorkCover claims?</h3>
            <p>
              No. WorkCover and insurance claims typically require a certificate from a doctor. Pharmacist certificates are for standard personal/carer&apos;s leave only.
            </p>

            <h3>How long is the certificate valid for?</h3>
            <p>
              Pharmacist certificates typically cover 1-2 days. If you need longer, you should see a GP.
            </p>

            <h3>Do I need to provide my Medicare details?</h3>
            <p>
              No. Pharmacist consultations for sick certificates don&apos;t go through Medicare, which is why they can be faster and more affordable.
            </p>
          </div>

          {/* Author/Date */}
          <footer className="mt-12 pt-8 border-t border-black/10">
            <p className="text-[#6B6560] text-sm">
              Last updated: 13 February 2026 · Written by the SorryBoss team
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
