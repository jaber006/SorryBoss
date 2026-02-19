import Link from "next/link";
import { ArrowLeft, Heart, FileText, Clock, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Get a Carer's Leave Certificate in Australia | SorryBoss",
  description: "Need time off to care for a sick family member? Learn how to get a carer's leave certificate online. Pharmacist-issued, Fair Work compliant, $13.99.",
  keywords: ["carers leave certificate", "carer's leave", "caring for sick family member", "carers leave australia", "carers certificate"],
  alternates: {
    canonical: "https://sorryboss.com.au/blog/carers-leave-certificate",
  },
  openGraph: {
    title: "How to Get a Carer's Leave Certificate in Australia",
    description: "Take time off to care for a sick family member. Get a Fair Work compliant certificate in minutes.",
    type: "article",
    publishedTime: "2025-02-13",
    url: "https://sorryboss.com.au/blog/carers-leave-certificate",
  },
};

export default function CarersLeaveCertificatePage() {
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
              <span>4 min read</span>
            </div>
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              How to Get a Carer&apos;s Leave Certificate in Australia
            </h1>
            <p className="text-xl text-[#6B6560] leading-relaxed">
              When a family member is sick, you shouldn&apos;t have to choose between caring for them and keeping your job. Here&apos;s how to get a carer&apos;s leave certificate quickly and legally.
            </p>
          </header>

          {/* What is Carer's Leave */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-black/5 mb-8">
            <div className="flex items-start gap-4">
              <Heart className="w-8 h-8 text-[#E8B931] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-2 mt-0" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  What is Carer&apos;s Leave?
                </h2>
                <p className="text-[#6B6560] mb-0">
                  Carer&apos;s leave (also called compassionate leave for illness) allows you to take paid time off work to care for an immediate family member or household member who is sick, injured, or experiencing an unexpected emergency.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Who Can You Take Carer&apos;s Leave For?</h2>
            
            <p>Under the Fair Work Act 2009, you can take carer&apos;s leave to care for:</p>
            
            <ul>
              <li><strong>Immediate family:</strong> Spouse, de facto partner, child, parent, grandparent, grandchild, sibling</li>
              <li><strong>Household members:</strong> Anyone who lives with you</li>
            </ul>

            <p>The person you&apos;re caring for must have an illness, injury, or unexpected emergency that requires your care and support.</p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>How Much Carer&apos;s Leave Are You Entitled To?</h2>
            
            <p>Full-time and part-time employees get <strong>10 days of paid personal/carer&apos;s leave per year</strong>. This is the same pool of leave used for your own sick leave.</p>

            <div className="bg-[#FDF8EE] border-l-4 border-[#E8B931] p-4 my-6">
              <p className="mb-0 text-[#6B6560]">
                <strong>Note:</strong> Casual employees don&apos;t get paid carer&apos;s leave, but they can take 2 days of unpaid carer&apos;s leave per occasion.
              </p>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Do You Need a Certificate for Carer&apos;s Leave?</h2>
            
            <p>
              Your employer can request evidence that you needed to take carer&apos;s leave. Under section 107 of the Fair Work Act, acceptable evidence includes:
            </p>

            <ul>
              <li>A medical certificate or statutory declaration</li>
              <li>Documentation from a registered health practitioner</li>
            </ul>

            <p>
              <strong>Important:</strong> The certificate is about YOUR need to provide care — not necessarily a full medical assessment of the person you&apos;re caring for.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>How to Get a Carer&apos;s Leave Certificate Online</h2>
            
            <div className="grid gap-4 my-8">
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-black/5">
                <div className="w-8 h-8 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-semibold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold mb-1 mt-0">Book a phone consultation</h3>
                  <p className="text-[#6B6560] mb-0 text-sm">Select &quot;Carer&apos;s Leave&quot; when booking. Provide details about who you&apos;re caring for and their relationship to you.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-black/5">
                <div className="w-8 h-8 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-semibold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold mb-1 mt-0">Quick phone assessment</h3>
                  <p className="text-[#6B6560] mb-0 text-sm">Our pharmacist will ask about the situation and confirm that care is required.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-black/5">
                <div className="w-8 h-8 rounded-full bg-[#3D8B37] text-white flex items-center justify-center flex-shrink-0"><CheckCircle className="w-5 h-5" /></div>
                <div>
                  <h3 className="font-semibold mb-1 mt-0">Certificate emailed instantly</h3>
                  <p className="text-[#6B6560] mb-0 text-sm">Your Carer&apos;s Leave Certificate is emailed as a PDF, stating you needed time off to care for a family member.</p>
                </div>
              </div>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>What Does a Carer&apos;s Leave Certificate Include?</h2>
            
            <p>The certificate will state:</p>
            <ul>
              <li>Your name (the person taking leave)</li>
              <li>That you required time off to care for an immediate family/household member</li>
              <li>The relationship (e.g., &quot;child&quot;, &quot;parent&quot;, &quot;spouse&quot;)</li>
              <li>The dates of leave</li>
              <li>The pharmacist&apos;s AHPRA registration number</li>
            </ul>

            <p>
              <strong>Privacy note:</strong> The certificate does not include detailed medical information about the person you&apos;re caring for. It simply confirms that care was required.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Example Situations for Carer&apos;s Leave</h2>

            <div className="space-y-4 my-6">
              <div className="bg-white rounded-lg p-4 border border-black/5">
                <p className="mb-1"><strong>👶 Child with gastro</strong></p>
                <p className="text-[#6B6560] text-sm mb-0">Your child woke up with vomiting and can&apos;t go to daycare. You need to stay home to care for them.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-black/5">
                <p className="mb-1"><strong>👵 Elderly parent unwell</strong></p>
                <p className="text-[#6B6560] text-sm mb-0">Your mum has a bad flu and needs someone to bring medication and check on her.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-black/5">
                <p className="mb-1"><strong>💑 Partner recovering from surgery</strong></p>
                <p className="text-[#6B6560] text-sm mb-0">Your partner had minor surgery and needs assistance at home for a day or two.</p>
              </div>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Carer&apos;s Leave vs Personal Leave</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-3 pr-4">Type</th>
                    <th className="text-left py-3 pr-4">When to use</th>
                    <th className="text-left py-3">Who&apos;s sick</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Personal leave</td>
                    <td className="py-3 pr-4">You&apos;re unwell</td>
                    <td className="py-3">You</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Carer&apos;s leave</td>
                    <td className="py-3 pr-4">Family member needs care</td>
                    <td className="py-3">Family/household member</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>Both come from the same pool of 10 days per year for full-time employees.</p>

            {/* CTA */}
            <div className="bg-[#1A1A1A] text-[#FDF8EE] rounded-2xl p-8 my-12 text-center">
              <h3 
                className="text-2xl md:text-3xl font-normal mb-4 mt-0"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Need to care for a loved one?
              </h3>
              <p className="text-[#FDF8EE]/70 mb-6">
                Get a carer&apos;s leave certificate in minutes. $13.99 — only charged if issued.
              </p>
              <Link 
                href="/book/carer" 
                className="inline-flex items-center gap-2 bg-[#E8B931] text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FDF8EE] transition-colors"
              >
                Get Carer&apos;s Leave Certificate →
              </Link>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>FAQs</h2>

            <h3>Can my employer refuse carer&apos;s leave?</h3>
            <p>
              No — if you have leave available and provide appropriate evidence, your employer cannot refuse your carer&apos;s leave request.
            </p>

            <h3>Do I need to provide details about my family member&apos;s illness?</h3>
            <p>
              No. You only need to provide evidence that you required time off to provide care. The specific medical details are private.
            </p>

            <h3>What if I run out of paid carer&apos;s leave?</h3>
            <p>
              You can request unpaid carer&apos;s leave. Full-time and part-time employees can take up to 2 days of unpaid carer&apos;s leave per occasion if they&apos;ve exhausted their paid leave.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Related Articles</h2>
            <ul>
              <li><Link href="/blog/sick-leave-rights-australia" className="text-[#3D8B37] hover:underline">Sick Leave Rights in Australia: Complete Guide</Link></li>
              <li><Link href="/blog/can-pharmacist-write-medical-certificate" className="text-[#3D8B37] hover:underline">Can a Pharmacist Write a Medical Certificate?</Link></li>
              <li><Link href="/blog/absence-from-work-certificate" className="text-[#3D8B37] hover:underline">Absence from Work Certificate vs Medical Certificate</Link></li>
              <li><Link href="/blog/do-i-need-medical-certificate-for-one-day" className="text-[#3D8B37] hover:underline">Do I Need a Medical Certificate for 1 Day Off?</Link></li>
            </ul>
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
