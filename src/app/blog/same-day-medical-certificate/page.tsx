import Link from "next/link";
import { ArrowLeft, Clock, Zap, Phone, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Same Day Medical Certificate: How to Get One Fast | SorryBoss",
  description: "Need a medical certificate today? Get a same-day sick certificate in minutes via phone consult. No waiting room, no video, certificate emailed instantly.",
  keywords: ["same day medical certificate", "urgent sick certificate", "medical certificate today", "fast medical certificate", "instant sick note"],
  alternates: {
    canonical: "https://sorryboss.com.au/blog/same-day-medical-certificate",
  },
  openGraph: {
    title: "Same Day Medical Certificate: How to Get One Fast",
    description: "Sick and need a certificate urgently? Here's how to get one in minutes.",
    type: "article",
    publishedTime: "2025-02-13",
    url: "https://sorryboss.com.au/blog/same-day-medical-certificate",
  },
};

export default function SameDayMedicalCertificatePage() {
  return (
    <main className="min-h-screen bg-[#FDF8EE]">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between bg-[#FDF8EE]/85 backdrop-blur-xl border-b border-black/5">
        <Link href="/" className="flex items-center gap-2 text-[#1A1A1A] no-underline" style={{ fontFamily: "'Instrument Serif', serif" }}>
          <span className="w-2.5 h-2.5 bg-[#E8B931] rounded-full" />
          <span className="text-2xl md:text-[28px]">SorryBoss</span>
        </Link>
        <Link href="/book" className="bg-[#1A1A1A] text-[#FDF8EE] px-5 md:px-7 py-3 rounded-full text-sm md:text-[15px] font-semibold tracking-tight hover:bg-[#E8B931] hover:text-[#1A1A1A] hover:-translate-y-0.5 transition-all duration-300">
          Get Your Cert →
        </Link>
      </nav>

      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#6B6560] hover:text-[#1A1A1A] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-[#6B6560] mb-4">
              <time>13 February 2026</time>
              <span>•</span>
              <span>3 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
              How to Get a Same-Day Medical Certificate (Fast)
            </h1>
            <p className="text-xl text-[#6B6560] leading-relaxed">
              Woke up sick and need a medical certificate for work today? You don&apos;t need to spend hours at a clinic. Here&apos;s how to get one in minutes.
            </p>
          </header>

          {/* Urgency Banner */}
          <div className="bg-[#E8B931] text-[#1A1A1A] rounded-2xl p-6 mb-10 flex items-center gap-4">
            <Zap className="w-10 h-10 flex-shrink-0" />
            <div>
              <p className="font-semibold text-lg mb-1">In a hurry?</p>
              <p className="text-sm mb-0">Skip to the <a href="#fastest-option" className="underline font-medium">fastest option</a> — certificate in 5 minutes.</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Your Options for a Same-Day Certificate</h2>
            
            <p>When you need a medical certificate today, you have three main options:</p>

            <div className="space-y-4 my-8">
              <div className="bg-white rounded-xl p-6 border-2 border-[#3D8B37]" id="fastest-option">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#3D8B37] text-white text-xs font-bold px-2 py-1 rounded">FASTEST</span>
                  <h3 className="font-semibold m-0">Option 1: Pharmacist Certificate Online</h3>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <Clock className="w-5 h-5 mx-auto mb-1 text-[#3D8B37]" />
                    <div className="text-sm font-semibold">5 mins</div>
                    <div className="text-xs text-[#6B6560]">Total time</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">$13.99</div>
                    <div className="text-xs text-[#6B6560]">If issued</div>
                  </div>
                  <div>
                    <Phone className="w-5 h-5 mx-auto mb-1 text-[#3D8B37]" />
                    <div className="text-sm font-semibold">Phone</div>
                    <div className="text-xs text-[#6B6560]">From bed</div>
                  </div>
                </div>
                <p className="text-[#6B6560] text-sm mb-4">
                  AHPRA-registered pharmacist calls you for a quick assessment. Certificate emailed instantly as a PDF. No video needed — stay in bed.
                </p>
                <Link href="/book" className="inline-flex items-center gap-2 bg-[#3D8B37] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2d6b29] transition-colors">
                  Get Certificate Now →
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 border border-black/5">
                <h3 className="font-semibold mb-3 mt-0">Option 2: Telehealth GP</h3>
                <div className="grid grid-cols-3 gap-4 mb-4 text-center text-sm">
                  <div>
                    <div className="font-semibold">15-30 mins</div>
                    <div className="text-xs text-[#6B6560]">Consult time</div>
                  </div>
                  <div>
                    <div className="font-semibold">$40-80</div>
                    <div className="text-xs text-[#6B6560]">Cost</div>
                  </div>
                  <div>
                    <div className="font-semibold">Video</div>
                    <div className="text-xs text-[#6B6560]">Required</div>
                  </div>
                </div>
                <p className="text-[#6B6560] text-sm mb-0">
                  Video call with a GP. Good if you also need a prescription or have a complex condition. Services include Instant Consult, Qoctor, 13SICK.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-black/5">
                <h3 className="font-semibold mb-3 mt-0">Option 3: Walk-in Clinic or GP</h3>
                <div className="grid grid-cols-3 gap-4 mb-4 text-center text-sm">
                  <div>
                    <div className="font-semibold">1-3 hours</div>
                    <div className="text-xs text-[#6B6560]">Including wait</div>
                  </div>
                  <div>
                    <div className="font-semibold">$40-80+</div>
                    <div className="text-xs text-[#6B6560]">Or bulk billed</div>
                  </div>
                  <div>
                    <div className="font-semibold">In-person</div>
                    <div className="text-xs text-[#6B6560]">Travel required</div>
                  </div>
                </div>
                <p className="text-[#6B6560] text-sm mb-0">
                  Traditional option. May be bulk billed at some clinics. Long wait times, especially on Mondays and after public holidays.
                </p>
              </div>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>How the 5-Minute Process Works</h2>

            <div className="space-y-4 my-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-semibold mb-1">Book online (2 minutes)</p>
                  <p className="text-[#6B6560] text-sm mb-0">Enter your details, symptoms, and when you&apos;d like the pharmacist to call.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-semibold mb-1">Phone consultation (3-5 minutes)</p>
                  <p className="text-[#6B6560] text-sm mb-0">Our pharmacist calls you for a quick assessment. No video — answer from bed in your pyjamas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#3D8B37] text-white flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Certificate emailed (instant)</p>
                  <p className="text-[#6B6560] text-sm mb-0">If appropriate, your Absence from Work Certificate is emailed as a PDF immediately.</p>
                </div>
              </div>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>What If I Need the Certificate Backdated?</h2>

            <p><strong>Certificates cannot be backdated.</strong> All legitimate medical certificates are dated for the day of consultation. If you were sick yesterday but didn&apos;t get a certificate, you have two options:</p>

            <ol>
              <li>Get a certificate today and explain to your employer you&apos;re still unwell</li>
              <li>Provide a statutory declaration for the previous day</li>
            </ol>

            <p>This is why it&apos;s best to get a certificate on the day you call in sick — even if it&apos;s a quick 5-minute phone consult.</p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Is a Pharmacist Certificate Valid?</h2>

            <p><strong>Yes.</strong> Under section 107(3) of the Fair Work Act 2009, certificates from any registered health practitioner — including AHPRA-registered pharmacists — are valid evidence for personal leave and carer&apos;s leave.</p>

            <p>Pharmacist certificates are legally equivalent to GP certificates for this purpose.</p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>When to See a GP Instead</h2>

            <p>A pharmacist certificate is ideal for common, short-term illness. See a GP if you:</p>
            <ul>
              <li>Need more than 2 days off</li>
              <li>Need a prescription</li>
              <li>Have severe or worsening symptoms</li>
              <li>Need a WorkCover or insurance certificate</li>
              <li>Have a chronic condition that needs management</li>
            </ul>

            {/* CTA */}
            <div className="bg-[#1A1A1A] text-[#FDF8EE] rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl md:text-3xl font-normal mb-4 mt-0" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Get your certificate in 5 minutes
              </h3>
              <p className="text-[#FDF8EE]/70 mb-6">
                Phone consult from bed. AHPRA pharmacist. $13.99 — only if issued.
              </p>
              <Link href="/book" className="inline-flex items-center gap-2 bg-[#E8B931] text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FDF8EE] transition-colors">
                Get Certificate Now →
              </Link>
            </div>
          </div>

          <footer className="mt-12 pt-8 border-t border-black/10">
            <p className="text-[#6B6560] text-sm">Last updated: 13 February 2026</p>
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
