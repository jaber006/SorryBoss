import Link from "next/link";
import { ArrowLeft, Scale, Calendar, DollarSign, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sick Leave Rights in Australia: Complete Guide (2025) | SorryBoss",
  description: "Know your sick leave rights. How many days, do casuals get sick leave, can your boss deny it? Everything about personal leave under the Fair Work Act.",
  keywords: ["sick leave rights australia", "personal leave entitlements", "fair work act sick leave", "how many sick days australia", "casual sick leave"],
  alternates: {
    canonical: "https://www.sorryboss.com.au/blog/sick-leave-rights-australia",
  },
  openGraph: {
    title: "Sick Leave Rights in Australia: Complete Guide (2025)",
    description: "Everything you need to know about your sick leave entitlements under Australian law.",
    type: "article",
    publishedTime: "2025-02-13",
    url: "https://www.sorryboss.com.au/blog/sick-leave-rights-australia",
  },
};

export default function SickLeaveRightsPage() {
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
              <span>6 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Sick Leave Rights in Australia: The Complete Guide
            </h1>
            <p className="text-xl text-[#6B6560] leading-relaxed">
              Everything you need to know about your sick leave entitlements under Australian law — how many days you get, whether casuals are covered, and what evidence your employer can request.
            </p>
          </header>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-xl p-4 border border-black/5 text-center">
              <Calendar className="w-6 h-6 mx-auto mb-2 text-[#E8B931]" />
              <div className="text-2xl font-semibold">10 days</div>
              <div className="text-xs text-[#6B6560]">Per year (FT)</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-black/5 text-center">
              <DollarSign className="w-6 h-6 mx-auto mb-2 text-[#3D8B37]" />
              <div className="text-2xl font-semibold">Paid</div>
              <div className="text-xs text-[#6B6560]">At base rate</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-black/5 text-center">
              <Scale className="w-6 h-6 mx-auto mb-2 text-[#3D8B37]" />
              <div className="text-2xl font-semibold">Accrues</div>
              <div className="text-xs text-[#6B6560]">Year to year</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-black/5 text-center">
              <FileText className="w-6 h-6 mx-auto mb-2 text-[#E8B931]" />
              <div className="text-2xl font-semibold">Evidence</div>
              <div className="text-xs text-[#6B6560]">May be required</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>How Much Sick Leave Do You Get?</h2>
            
            <p>Under the National Employment Standards (NES), all permanent employees are entitled to <strong>10 days of paid personal/carer&apos;s leave per year</strong>.</p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-3 pr-4">Employment Type</th>
                    <th className="text-left py-3 pr-4">Paid Sick Leave</th>
                    <th className="text-left py-3">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Full-time</td>
                    <td className="py-3 pr-4">10 days/year</td>
                    <td className="py-3 text-[#6B6560]">Accrues progressively</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Part-time</td>
                    <td className="py-3 pr-4">Pro-rata (based on hours)</td>
                    <td className="py-3 text-[#6B6560]">E.g., 5 days if working 50%</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Casual</td>
                    <td className="py-3 pr-4">None (paid)</td>
                    <td className="py-3 text-[#6B6560]">2 days unpaid per occasion</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Does Sick Leave Roll Over?</h2>
            
            <p><strong>Yes.</strong> Unlike annual leave in some countries, unused sick leave accumulates year to year. There&apos;s no cap — if you don&apos;t use it, you keep it.</p>
            
            <p>However, accumulated sick leave is <strong>not paid out</strong> when you leave a job. Use it or lose it (when you resign).</p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>What Can You Use Sick Leave For?</h2>

            <p>Personal/carer&apos;s leave can be used when:</p>
            <ul>
              <li><strong>You&apos;re sick or injured</strong> — illness, injury, medical appointments</li>
              <li><strong>Caring for a family member</strong> — when an immediate family or household member is sick or has an emergency</li>
            </ul>

            <p>This includes:</p>
            <ul>
              <li>Physical illness (cold, flu, gastro, etc.)</li>
              <li>Mental health days</li>
              <li>Medical and dental appointments</li>
              <li>Recovering from surgery or medical procedures</li>
              <li>Caring for sick children, spouse, or parents</li>
            </ul>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Can Your Employer Refuse Sick Leave?</h2>

            <p><strong>No</strong> — if you&apos;re genuinely sick and provide evidence when requested, your employer cannot refuse your sick leave.</p>

            <p>However, they can:</p>
            <ul>
              <li>Request evidence (medical certificate or statutory declaration)</li>
              <li>Ask you to take unpaid leave if you&apos;ve exhausted your paid entitlement</li>
              <li>Require you to follow proper notification procedures</li>
            </ul>

            <div className="bg-[#F0FDF4] border border-[#3D8B37]/20 rounded-xl p-6 my-8">
              <h3 className="text-[#3D8B37] mt-0">Your Rights</h3>
              <p className="mb-0">
                If you have sick leave available and provide reasonable evidence, your employer <strong>must</strong> grant your leave request. Refusing is a breach of the Fair Work Act.
              </p>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>What Evidence Can Employers Request?</h2>

            <p>Under section 107 of the Fair Work Act, acceptable evidence includes:</p>
            <ul>
              <li><strong>Medical certificate</strong> — from a doctor, pharmacist, or other registered health practitioner</li>
              <li><strong>Statutory declaration</strong> — a legal statement declaring your illness</li>
            </ul>

            <p>Employers can request evidence for any period of absence, but most only require it for absences of 2+ days or where there&apos;s a pattern of suspicious absences.</p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>What About Casual Employees?</h2>

            <p>Casual employees don&apos;t get paid sick leave, but they do get:</p>
            <ul>
              <li><strong>2 days unpaid carer&apos;s leave</strong> per occasion</li>
              <li><strong>2 days unpaid compassionate leave</strong> per occasion</li>
              <li>The right to not be available for work when genuinely sick (no penalty)</li>
            </ul>

            <p>The trade-off is that casual employees receive a 25% loading on their hourly rate, which is intended to compensate for the lack of paid leave.</p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Mental Health Days</h2>

            <p><strong>Yes, you can use sick leave for mental health.</strong> The Fair Work Act doesn&apos;t distinguish between physical and mental illness. If you&apos;re experiencing:</p>
            <ul>
              <li>Anxiety or depression</li>
              <li>Burnout or exhaustion</li>
              <li>Stress-related symptoms</li>
              <li>Other mental health conditions</li>
            </ul>
            <p>You&apos;re entitled to take sick leave just as you would for a physical illness.</p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>How to Call in Sick</h2>

            <ol>
              <li><strong>Notify your employer as soon as possible</strong> — ideally before your shift</li>
              <li><strong>Use the right method</strong> — phone, email, or app as per your workplace policy</li>
              <li><strong>State that you&apos;re unwell</strong> — you don&apos;t need to give details</li>
              <li><strong>Indicate how long you expect to be off</strong> — even a rough estimate helps</li>
              <li><strong>Get a certificate if required</strong> — or if you&apos;ll be off 2+ days</li>
            </ol>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Getting a Medical Certificate Fast</h2>

            <p>If you need a certificate but don&apos;t want to sit in a waiting room while sick:</p>
            <ul>
              <li><strong>Pharmacist certificate (5 mins, $13.99):</strong> Phone consult, certificate emailed</li>
              <li><strong>Telehealth GP (15-30 mins, $40-80):</strong> Video call with a doctor</li>
              <li><strong>In-person GP (1-3 hours, $40-80+):</strong> Traditional clinic visit</li>
            </ul>

            {/* CTA */}
            <div className="bg-[#1A1A1A] text-[#FDF8EE] rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl md:text-3xl font-normal mb-4 mt-0" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Need a sick certificate?
              </h3>
              <p className="text-[#FDF8EE]/70 mb-6">
                Get one in 5 minutes. Phone consult with AHPRA pharmacist. $13.99 — only if issued.
              </p>
              <Link href="/book" className="inline-flex items-center gap-2 bg-[#E8B931] text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FDF8EE] transition-colors">
                Get Your Certificate →
              </Link>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Key Takeaways</h2>
            <ul>
              <li>Full-time employees get 10 days paid sick leave per year</li>
              <li>Part-time employees get pro-rata entitlements</li>
              <li>Casual employees get unpaid leave only (but have a 25% loading)</li>
              <li>Sick leave accumulates year to year but isn&apos;t paid out on termination</li>
              <li>Employers can request evidence but can&apos;t refuse genuine sick leave</li>
              <li>Mental health days count as sick leave</li>
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
