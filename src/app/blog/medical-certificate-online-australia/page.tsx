import Link from "next/link";
import { ArrowLeft, Clock, DollarSign, Shield, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Medical Certificate Online in Australia (2026) | SorryBoss",
  description: "Get a medical certificate online in Australia in minutes. Phone consult with AHPRA pharmacist, certificate emailed instantly. $13.99, only charged if issued.",
  keywords: "medical certificate online, online medical certificate australia, sick certificate online, telehealth medical certificate, get medical certificate fast",
  openGraph: {
    title: "Get a Medical Certificate Online in Australia (2026)",
    description: "Skip the waiting room. Get a medical certificate online in 5 minutes from an AHPRA-registered pharmacist.",
    type: "article",
    publishedTime: "2026-02-13",
  },
};

export default function MedicalCertificateOnlinePage() {
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
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-[#6B6560] hover:text-[#1A1A1A] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-[#6B6560] mb-4">
              <time>13 February 2026</time>
              <span>•</span>
              <span>5 min read</span>
            </div>
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              How to Get a Medical Certificate Online in Australia (2026)
            </h1>
            <p className="text-xl text-[#6B6560] leading-relaxed">
              Woke up sick and need a medical certificate for work? You don&apos;t need to drag yourself to a waiting room. Here&apos;s how to get a legitimate medical certificate online in minutes.
            </p>
          </header>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-xl p-4 border border-black/5 text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 text-[#E8B931]" />
              <div className="text-2xl font-semibold">5 min</div>
              <div className="text-sm text-[#6B6560]">Total time</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-black/5 text-center">
              <DollarSign className="w-6 h-6 mx-auto mb-2 text-[#3D8B37]" />
              <div className="text-2xl font-semibold">$13.99</div>
              <div className="text-sm text-[#6B6560]">Flat fee</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-black/5 text-center">
              <Shield className="w-6 h-6 mx-auto mb-2 text-[#3D8B37]" />
              <div className="text-2xl font-semibold">AHPRA</div>
              <div className="text-sm text-[#6B6560]">Registered</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-black/5 text-center">
              <Phone className="w-6 h-6 mx-auto mb-2 text-[#E8B931]" />
              <div className="text-2xl font-semibold">Phone</div>
              <div className="text-sm text-[#6B6560]">From bed</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Your Options for Getting a Medical Certificate Online</h2>
            
            <p>In Australia, you have several options for getting a medical certificate without visiting a clinic in person:</p>

            <h3>1. Telehealth GP Services</h3>
            <p>
              Services like Instant Consult, Qoctor, and 13SICK offer video consultations with doctors. These typically cost $40-80 and require a 15-30 minute video call. Good for when you need a prescription or have a more complex condition.
            </p>

            <h3>2. Pharmacist Certificate Services (Fastest)</h3>
            <p>
              Under the Fair Work Act 2009, registered pharmacists can issue medical certificates for personal leave and carer&apos;s leave. Services like <strong>SorryBoss</strong> offer phone consultations with AHPRA-registered pharmacists — no video required, certificate emailed in minutes.
            </p>

            <h3>3. After-Hours Doctor Home Visits</h3>
            <p>
              Services like 13SICK can send a doctor to your home. This is the most expensive option ($60-120) and wait times can be 1-3 hours. Best for when you actually need medical treatment, not just a certificate.
            </p>

            <div className="bg-[#F0FDF4] border border-[#3D8B37]/20 rounded-xl p-6 my-8">
              <h3 className="text-[#3D8B37] mt-0">Best for Speed: Pharmacist Certificates</h3>
              <p className="mb-0">
                If you just need a certificate for 1-2 days of personal leave or carer&apos;s leave, a pharmacist certificate is the fastest and most affordable option. Phone consultation takes 5 minutes, and the certificate is emailed immediately.
              </p>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>How to Get a Medical Certificate on SorryBoss</h2>
            
            <p>Here&apos;s the step-by-step process:</p>

            <ol>
              <li>
                <strong>Go to sorryboss.com.au and click &quot;Get Your Cert&quot;</strong><br />
                Fill in your details: name, date of birth, phone number, and symptoms. This takes about 2 minutes.
              </li>
              <li>
                <strong>Choose your preferred call time</strong><br />
                Select when you&apos;d like the pharmacist to call you. Can be immediately or within a few hours.
              </li>
              <li>
                <strong>Complete payment authorization</strong><br />
                Your card is authorized for $13.99 but <em>only charged if a certificate is issued</em>. No cert = no charge.
              </li>
              <li>
                <strong>Receive your phone call</strong><br />
                Our AHPRA-registered pharmacist calls you for a quick assessment. No video — stay in bed, no need to look presentable.
              </li>
              <li>
                <strong>Certificate emailed instantly</strong><br />
                If the pharmacist assesses you as unfit for work, your Absence from Work Certificate is emailed immediately as a PDF.
              </li>
            </ol>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Is an Online Medical Certificate Legitimate?</h2>
            
            <p>Yes — as long as it&apos;s from a registered health practitioner. Under section 107(3) of the Fair Work Act 2009:</p>

            <blockquote className="border-l-4 border-[#E8B931] bg-white p-4 my-6 italic text-[#6B6560]">
              A certificate from a registered health practitioner constitutes evidence that the employee was entitled to personal leave or carer&apos;s leave.
            </blockquote>

            <p>
              This includes certificates from registered pharmacists, doctors, nurses, and other AHPRA-registered practitioners — whether issued in person or via telehealth.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>When to Choose Each Option</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-3 pr-4">Situation</th>
                    <th className="text-left py-3">Best Option</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Cold/flu, need 1-2 days off</td>
                    <td className="py-3 text-[#3D8B37] font-medium">Pharmacist certificate</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Need a prescription</td>
                    <td className="py-3">Telehealth GP</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Serious symptoms</td>
                    <td className="py-3">GP or emergency</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Need 3+ days off</td>
                    <td className="py-3">GP visit</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">WorkCover claim</td>
                    <td className="py-3">GP visit</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Carer&apos;s leave for family member</td>
                    <td className="py-3 text-[#3D8B37] font-medium">Pharmacist certificate</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Common Questions</h2>

            <h3>Do I need a Medicare card?</h3>
            <p>
              Not for pharmacist certificates. Since it&apos;s not a Medicare-subsidised service, you don&apos;t need your Medicare details.
            </p>

            <h3>Can I get a certificate on weekends?</h3>
            <p>
              Yes — SorryBoss operates 7 days a week. No need to wait until Monday.
            </p>

            <h3>What if the pharmacist can&apos;t issue a certificate?</h3>
            <p>
              If the pharmacist assesses that a certificate isn&apos;t appropriate (e.g., symptoms require a doctor), you won&apos;t be charged. They&apos;ll recommend you see a GP instead.
            </p>

            <h3>How quickly will I receive the certificate?</h3>
            <p>
              The PDF is emailed within seconds of the call ending. You can forward it to your employer immediately.
            </p>

            {/* CTA */}
            <div className="bg-[#1A1A1A] text-[#FDF8EE] rounded-2xl p-8 my-12 text-center">
              <h3 
                className="text-2xl md:text-3xl font-normal mb-4 mt-0"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Get your certificate in 5 minutes
              </h3>
              <p className="text-[#FDF8EE]/70 mb-6">
                Phone consult from bed. AHPRA pharmacist. $13.99 — only if issued.
              </p>
              <Link 
                href="/book" 
                className="inline-flex items-center gap-2 bg-[#E8B931] text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FDF8EE] transition-colors"
              >
                Get Your Certificate →
              </Link>
            </div>
          </div>

          <footer className="mt-12 pt-8 border-t border-black/10">
            <p className="text-[#6B6560] text-sm">
              Last updated: 13 February 2026
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
