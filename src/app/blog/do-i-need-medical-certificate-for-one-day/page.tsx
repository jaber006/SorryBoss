import Link from "next/link";
import { ArrowLeft, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Do I Need a Medical Certificate for 1 Day Off Sick? | SorryBoss",
  description: "When does your employer need a medical certificate? Learn the rules around sick leave evidence in Australia and when you can self-certify.",
  keywords: "medical certificate one day, sick note for 1 day, do i need doctors note, sick leave evidence australia, single day sick leave",
  openGraph: {
    title: "Do I Need a Medical Certificate for 1 Day Off Sick?",
    description: "When your employer can (and can't) ask for a medical certificate in Australia.",
    type: "article",
  },
};

export default function OneDayMedicalCertificatePage() {
  return (
    <main className="min-h-screen bg-[#FDF8EE]">
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
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#6B6560] hover:text-[#1A1A1A] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-[#6B6560] mb-4">
              <time>13 February 2026</time>
              <span>•</span>
              <span>4 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Do I Need a Medical Certificate for 1 Day Off Sick?
            </h1>
            <p className="text-xl text-[#6B6560] leading-relaxed">
              You woke up feeling terrible and need to call in sick. But do you actually need a medical certificate for just one day? Here&apos;s what Australian law says.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            {/* Quick Answer */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-black/5 mb-8">
              <h2 className="text-xl font-semibold mb-4 mt-0 flex items-center gap-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
                <AlertCircle className="w-6 h-6 text-[#E8B931]" />
                The Short Answer
              </h2>
              <p className="text-[#6B6560] mb-4">
                <strong>It depends on your employer&apos;s policy.</strong> Under the Fair Work Act, employers <em>can</em> request evidence for any period of sick leave — including a single day. However, many employers only require certificates for absences of 2+ days.
              </p>
              <p className="text-[#6B6560] mb-0">
                Check your employment contract, enterprise agreement, or company policy to know what applies to you.
              </p>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>What Does the Fair Work Act Say?</h2>
            
            <p>Section 107 of the Fair Work Act 2009 states that an employer may require an employee to provide &quot;evidence that would satisfy a reasonable person&quot; that the leave was taken for a genuine reason.</p>
            
            <p>This means:</p>
            <ul>
              <li>Employers <strong>can</strong> ask for evidence for any sick leave</li>
              <li>The evidence must be &quot;reasonable&quot; — a medical certificate or statutory declaration</li>
              <li>The law doesn&apos;t set a minimum number of days before evidence is required</li>
            </ul>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>When Do Most Employers Require a Certificate?</h2>

            <p>In practice, most Australian workplaces follow these common patterns:</p>

            <div className="space-y-4 my-6">
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-black/5">
                <CheckCircle className="w-6 h-6 text-[#3D8B37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">1-2 days: Often no certificate needed</p>
                  <p className="text-[#6B6560] text-sm mb-0">Many employers allow self-certification for short absences. You just notify your manager.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-black/5">
                <AlertCircle className="w-6 h-6 text-[#E8B931] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">2-3+ days: Certificate usually required</p>
                  <p className="text-[#6B6560] text-sm mb-0">Most enterprise agreements and company policies require a certificate for absences of 2 or more consecutive days.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-black/5">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">Pattern of absences: Certificate may be required</p>
                  <p className="text-[#6B6560] text-sm mb-0">If you frequently call in sick on Mondays/Fridays or before holidays, your employer may start requiring certificates for any absence.</p>
                </div>
              </div>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>When Your Employer CAN Require a Certificate for 1 Day</h2>

            <p>Your employer can require a medical certificate for a single day off if:</p>
            <ul>
              <li>Your employment contract or enterprise agreement specifies it</li>
              <li>It&apos;s part of a documented company policy</li>
              <li>There&apos;s a pattern of suspicious absences</li>
              <li>They have reasonable grounds to doubt the genuineness of your absence</li>
            </ul>

            <div className="bg-[#FEF2F2] border-l-4 border-red-400 p-4 my-6">
              <p className="mb-0 text-[#6B6560]">
                <strong>Warning:</strong> If your employer asks for a certificate and you don&apos;t provide one, they may not be required to pay you for that sick day.
              </p>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>How to Get a Certificate Quickly for 1 Day</h2>

            <p>If you need a certificate but don&apos;t want to spend hours at a clinic for a minor illness, you have options:</p>

            <ol>
              <li><strong>Pharmacist certificate (fastest):</strong> Services like SorryBoss offer phone consultations with AHPRA-registered pharmacists. 5 minutes, $24.95, certificate emailed instantly.</li>
              <li><strong>Telehealth GP:</strong> Video call with a doctor. 15-30 minutes, $40-80.</li>
              <li><strong>In-person GP:</strong> Traditional clinic visit. 1-3 hours including wait time, $40-80+ (may be bulk-billed).</li>
            </ol>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Can I Write a Statutory Declaration Instead?</h2>

            <p>Yes — the Fair Work Act accepts a statutory declaration as evidence of illness. However:</p>
            <ul>
              <li>You need to find a witness (JP, pharmacist, lawyer, etc.)</li>
              <li>It&apos;s a legal document — false statements are a crime</li>
              <li>Many employers prefer medical certificates anyway</li>
            </ul>
            <p>For most people, getting a quick medical certificate is easier than organising a statutory declaration.</p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Tips for Calling in Sick</h2>

            <ul>
              <li><strong>Notify early:</strong> Contact your employer as soon as possible, ideally before your shift starts</li>
              <li><strong>Follow the process:</strong> Use whatever method your workplace requires (phone, email, app)</li>
              <li><strong>Keep it simple:</strong> You don&apos;t need to share detailed medical information</li>
              <li><strong>Get a certificate if in doubt:</strong> Better to have one and not need it than vice versa</li>
            </ul>

            {/* CTA */}
            <div className="bg-[#1A1A1A] text-[#FDF8EE] rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl md:text-3xl font-normal mb-4 mt-0" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Need a certificate? Get one in 5 minutes
              </h3>
              <p className="text-[#FDF8EE]/70 mb-6">
                Phone consult from bed. AHPRA pharmacist. $24.95 — only charged if issued.
              </p>
              <Link href="/book" className="inline-flex items-center gap-2 bg-[#E8B931] text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FDF8EE] transition-colors">
                Get Your Certificate →
              </Link>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Summary</h2>

            <ul>
              <li>Employers <em>can</em> legally ask for a certificate for 1 day off sick</li>
              <li>Most employers only require certificates for 2+ days (check your policy)</li>
              <li>If asked for a certificate, it&apos;s easier to get one than to argue about it</li>
              <li>Pharmacist certificates are the fastest and cheapest option</li>
            </ul>
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
