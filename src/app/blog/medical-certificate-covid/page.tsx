import Link from "next/link";
import { ArrowLeft, Check, AlertCircle, Shield, Phone, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Certificate for COVID in Australia: Do You Still Need One? | SorryBoss",
  description: "Do you need a medical certificate for COVID sick leave in 2025? Learn the current rules, when your employer can require evidence, and how to get a certificate quickly.",
  keywords: ["medical certificate for covid", "covid sick leave certificate", "covid medical certificate australia", "covid certificate for work", "coronavirus sick note"],
  alternates: {
    canonical: "https://sorryboss.com.au/blog/medical-certificate-covid",
  },
  openGraph: {
    title: "Medical Certificate for COVID in Australia: Do You Still Need One?",
    description: "COVID is now treated like any other illness. Learn when you need a certificate and how to get one fast.",
    type: "article",
    publishedTime: "2025-02-22",
    url: "https://sorryboss.com.au/blog/medical-certificate-covid",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need a medical certificate for COVID in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "COVID is now treated like any other illness in Australia. Whether you need a certificate depends on your workplace policy and how long you're off, not on the specific illness. Most employers can request evidence for absences longer than 1-2 days."
      }
    },
    {
      "@type": "Question",
      "name": "Can a pharmacist issue a medical certificate for COVID?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Under the Fair Work Act 2009, AHPRA-registered pharmacists can issue Absence from Work Certificates for COVID symptoms just like any other illness. At SorryBoss, we can certify you for 1-2 days of COVID-related illness via a 5-minute phone consultation."
      }
    },
    {
      "@type": "Question",
      "name": "How long should I stay home with COVID?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Current Australian health advice recommends staying home until your symptoms significantly improve and you've been fever-free for 24 hours without medication. There's no longer a mandatory isolation period, but most people need 3-7 days to recover."
      }
    },
    {
      "@type": "Question",
      "name": "Can my employer refuse a medical certificate for COVID?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Under the Fair Work Act, employers must accept medical certificates from any registered health practitioner, including pharmacists. A COVID-related certificate is treated the same as any other sick leave certificate."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a positive COVID test to get a medical certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A medical certificate for sick leave is based on your symptoms and unfitness for work, not a diagnosis. You don't need a positive test — your practitioner will certify based on your reported symptoms and their assessment."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Medical Certificate for COVID in Australia: Do You Still Need One?",
  "description": "Complete guide to COVID medical certificates in 2025, including current rules, isolation guidance, and how to get a certificate quickly.",
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
    "@id": "https://sorryboss.com.au/blog/medical-certificate-covid"
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
      "name": "Medical Certificate for COVID",
      "item": "https://sorryboss.com.au/blog/medical-certificate-covid"
    }
  ]
};

export default function MedicalCertificateCovidPage() {
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
            <span className="text-[#1A1A1A]">Medical Certificate for COVID</span>
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
              Medical Certificate for COVID in Australia: Do You Still Need One?
            </h1>
            <p className="text-xl text-[#6B6560] leading-relaxed">
              COVID rules have changed significantly since the pandemic. Here&apos;s what you need to know about <strong className="text-[#1A1A1A]">COVID sick leave certificates</strong> in 2025 — including when you need one and how to get it fast.
            </p>
          </header>

          {/* Quick Answer Box */}
          <div className="bg-[#F0FDF4] border border-[#3D8B37]/20 rounded-2xl p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold mb-4 mt-0 flex items-center gap-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
              <Check className="w-6 h-6 text-[#3D8B37]" />
              The Short Answer
            </h2>
            <p className="text-[#1A1A1A] mb-4">
              <strong>COVID is now treated like any other illness.</strong> There are no special COVID-specific certificate requirements. Whether you need a medical certificate depends on your workplace policy and how long you&apos;re off work — the same as if you had the flu.
            </p>
            <p className="text-[#1A1A1A] mb-0">
              <strong>Yes, pharmacists can certify COVID symptoms.</strong> At <Link href="/" className="text-[#3D8B37] hover:underline">SorryBoss</Link>, we can issue an Absence from Work Certificate for COVID-related illness via a 5-minute phone consultation.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              Remember the COVID pandemic era when everything was different? Special isolation rules, pandemic leave, and endless confusion about what certificates you needed? Those days are largely behind us.
            </p>
            <p>
              In 2025, COVID-19 is treated like any other respiratory illness in Australia. The special rules have ended, but the illness itself hasn&apos;t gone away — and you can still get quite sick from it. This guide explains what you need to know about <strong>COVID medical certificates</strong> under current rules.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>How COVID Is Treated Now</h2>
            
            <p>
              Since October 2022, mandatory COVID isolation requirements have ended in all Australian states and territories. COVID is now managed the same way as other respiratory illnesses like the flu:
            </p>
            
            <ul>
              <li><strong>No mandatory isolation period:</strong> There&apos;s no legal requirement to isolate for a specific number of days</li>
              <li><strong>Symptom-based approach:</strong> Stay home while symptomatic, return when feeling better</li>
              <li><strong>Standard sick leave:</strong> Use your regular personal leave entitlements</li>
              <li><strong>Normal evidence rules:</strong> Same medical certificate requirements as any illness</li>
            </ul>

            <div className="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-2xl p-6 my-6">
              <h3 className="text-lg font-semibold mb-3 mt-0 flex items-center gap-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
                <AlertCircle className="w-5 h-5 text-[#F59E0B]" />
                Health Advice vs Legal Requirements
              </h3>
              <p className="text-[#1A1A1A] mb-0">
                While there&apos;s no <em>legal</em> requirement to isolate, health authorities still <em>recommend</em> staying home until symptoms significantly improve and you&apos;ve been fever-free for 24 hours without medication. This is about protecting others, not legal compliance.
              </p>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>When Do You Need a Medical Certificate for COVID?</h2>

            <p>
              The rules for COVID certificates are now identical to any other illness. Under the <em>Fair Work Act 2009</em>, your employer can request &quot;evidence that would satisfy a reasonable person&quot; for sick leave claims.
            </p>

            <p>
              In practice, this usually means:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white rounded-xl p-5 border border-black/5">
                <h3 className="font-semibold text-base mb-2 mt-0 text-[#3D8B37]">1-2 Days Off</h3>
                <p className="text-sm text-[#6B6560] mb-0">
                  Many employers don&apos;t require a certificate for brief absences. Check your workplace policy or employment agreement.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-black/5">
                <h3 className="font-semibold text-base mb-2 mt-0 text-[#E8B931]">3+ Days Off</h3>
                <p className="text-sm text-[#6B6560] mb-0">
                  Most employers will request a medical certificate. This is standard practice and within their rights under the Fair Work Act.
                </p>
              </div>
            </div>

            <p>
              Some workplaces have specific policies requiring certificates from day one, while others may be more flexible. Check your employment contract or workplace policy to understand your specific requirements.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Can a Pharmacist Issue a COVID Certificate?</h2>

            <p>
              <strong>Yes, absolutely.</strong> Under section 107(3) of the <em>Fair Work Act 2009</em>, AHPRA-registered pharmacists can issue medical certificates (Absence from Work Certificates) for any condition within their scope — including COVID-19.
            </p>

            <p>
              COVID symptoms that pharmacists can certify include:
            </p>

            <ul>
              <li>Fever and chills</li>
              <li>Cough and sore throat</li>
              <li>Fatigue and body aches</li>
              <li>Headache</li>
              <li>Congestion and runny nose</li>
              <li>Nausea and loss of appetite</li>
              <li>General unwellness</li>
            </ul>

            <p>
              At <Link href="/" className="text-[#3D8B37] hover:underline">SorryBoss</Link>, our pharmacist can issue a certificate for 1-2 days of COVID-related illness. If you need longer (which is common with COVID), you&apos;ll need a GP certificate — but we can help you bridge that initial gap.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Do I Need a Positive COVID Test?</h2>

            <p>
              <strong>No.</strong> Medical certificates for sick leave are based on your symptoms and unfitness for work, not on a specific diagnosis. You don&apos;t need to provide proof of a positive test to get a certificate.
            </p>

            <p>
              This is actually the same as any illness — when you get a certificate for the flu, no one asks for a lab-confirmed influenza test. The practitioner certifies that you are unfit for work due to illness; the specific pathogen is secondary.
            </p>

            <div className="bg-white border border-black/10 rounded-2xl p-6 my-6">
              <h3 className="text-lg font-semibold mb-3 mt-0" style={{ fontFamily: "'Instrument Serif', serif" }}>
                What the Certificate Says
              </h3>
              <p className="text-[#6B6560] mb-0">
                An Absence from Work Certificate from SorryBoss will state that you were assessed and found unfit for work due to illness. It won&apos;t necessarily specify &quot;COVID-19&quot; — it may say &quot;respiratory illness&quot; or &quot;viral illness&quot; depending on your symptoms. This is normal and doesn&apos;t affect the certificate&apos;s validity.
              </p>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>How Long Should You Stay Home with COVID?</h2>

            <p>
              While there&apos;s no mandatory isolation period, health guidance suggests:
            </p>

            <ul>
              <li><strong>Stay home</strong> until symptoms significantly improve</li>
              <li><strong>Be fever-free</strong> for 24 hours without medication before returning</li>
              <li><strong>Wear a mask</strong> around others for 7-10 days if you must go out while symptomatic</li>
              <li><strong>Avoid high-risk settings</strong> (hospitals, aged care) while infectious</li>
            </ul>

            <p>
              Most people with COVID feel significantly better within 3-7 days, though fatigue can linger for longer. Listen to your body — returning to work too early often leads to prolonged illness or relapse.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Getting a COVID Certificate from SorryBoss</h2>

            <p>
              Here&apos;s how to get a certificate when you have COVID symptoms:
            </p>

            <div className="space-y-4 my-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>1</div>
                <div>
                  <p className="font-semibold mb-1">Book Online</p>
                  <p className="text-[#6B6560] text-sm mb-0">Visit <Link href="/book" className="text-[#3D8B37] hover:underline">sorryboss.com.au/book</Link> and describe your COVID symptoms.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>2</div>
                <div>
                  <p className="font-semibold mb-1">Phone Consultation</p>
                  <p className="text-[#6B6560] text-sm mb-0">Our pharmacist calls you for a quick assessment. No video needed — rest your voice if you have a sore throat.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3D8B37] text-white flex items-center justify-center font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>3</div>
                <div>
                  <p className="font-semibold mb-1">Certificate Issued</p>
                  <p className="text-[#6B6560] text-sm mb-0">Your Absence from Work Certificate is emailed as a PDF. Forward it to your employer.</p>
                </div>
              </div>
            </div>

            <p>
              The whole process takes about 5 minutes, and you can do it from bed without looking at a screen. Perfect for when you&apos;re feeling terrible with COVID.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>What If I Need More Than 2 Days Off?</h2>

            <p>
              COVID often requires more than 2 days of recovery. Here are your options:
            </p>

            <ul>
              <li><strong>Get initial coverage with SorryBoss:</strong> Our pharmacist can certify 1-2 days immediately</li>
              <li><strong>See a GP for extended leave:</strong> Book a telehealth appointment for days 3+ if needed</li>
              <li><strong>Talk to your employer:</strong> Some employers may be flexible about multiple short certificates</li>
            </ul>

            <p>
              Many people get a SorryBoss certificate for the first day or two, then see a GP if they&apos;re still unwell. This gives you immediate coverage while you assess how your illness is progressing.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Your Employer&apos;s Rights and Obligations</h2>

            <p>
              Understanding your employer&apos;s position helps avoid conflicts:
            </p>

            <h3>What employers CAN do:</h3>
            <ul>
              <li>Request evidence (medical certificate) for sick leave</li>
              <li>Ask you to stay home while symptomatic (WHS obligations)</li>
              <li>Require a return-to-work clearance for some industries (healthcare, aged care)</li>
            </ul>

            <h3>What employers CANNOT do:</h3>
            <ul>
              <li>Refuse to accept a legitimate certificate from an AHPRA-registered practitioner</li>
              <li>Demand a specific type of test result</li>
              <li>Require more evidence than &quot;would satisfy a reasonable person&quot;</li>
              <li>Penalise you for taking legitimate sick leave</li>
            </ul>

            <p>
              If your employer questions a pharmacist certificate, you can direct them to section 107(3) of the <em>Fair Work Act 2009</em>, which explicitly allows certificates from &quot;registered health practitioners&quot; — a category that includes pharmacists.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>High-Risk Workplace Considerations</h2>

            <p>
              Some workplaces have additional requirements for infectious illness:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white rounded-xl p-4 border border-black/5">
                <Shield className="w-6 h-6 text-[#3D8B37] mb-2" />
                <h3 className="font-semibold text-base mb-2 mt-0">Healthcare Settings</h3>
                <p className="text-sm text-[#6B6560] mb-0">Hospitals and clinics may require negative tests or longer exclusion periods to protect vulnerable patients.</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-black/5">
                <Shield className="w-6 h-6 text-[#3D8B37] mb-2" />
                <h3 className="font-semibold text-base mb-2 mt-0">Aged Care</h3>
                <p className="text-sm text-[#6B6560] mb-0">Residential aged care facilities may have specific COVID protocols for staff returning to work.</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-black/5">
                <Shield className="w-6 h-6 text-[#3D8B37] mb-2" />
                <h3 className="font-semibold text-base mb-2 mt-0">Disability Care</h3>
                <p className="text-sm text-[#6B6560] mb-0">NDIS providers may have additional requirements for workers with COVID symptoms.</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-black/5">
                <Shield className="w-6 h-6 text-[#3D8B37] mb-2" />
                <h3 className="font-semibold text-base mb-2 mt-0">Food Handling</h3>
                <p className="text-sm text-[#6B6560] mb-0">Food service workers may need to be symptom-free before returning due to food safety regulations.</p>
              </div>
            </div>

            <p>
              If you work in a high-risk setting, check your workplace policy for any additional requirements beyond a standard medical certificate.
            </p>

            {/* CTA Box */}
            <div className="bg-[#1A1A1A] text-[#FDF8EE] rounded-2xl p-8 my-12 text-center">
              <h3 
                className="text-2xl md:text-3xl font-normal mb-4 mt-0"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Got COVID? Get a certificate in 5 minutes
              </h3>
              <p className="text-[#FDF8EE]/70 mb-6">
                Phone consultation from bed. No video required. $24.95 — only if issued.
              </p>
              <Link 
                href="/book" 
                className="inline-flex items-center gap-2 bg-[#E8B931] text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FDF8EE] transition-colors"
              >
                Get Your Certificate →
              </Link>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Frequently Asked Questions</h2>

            <h3>Do I need a medical certificate for COVID in 2025?</h3>
            <p>
              COVID is now treated like any other illness in Australia. Whether you need a certificate depends on your workplace policy and how long you&apos;re off, not on the specific illness. Most employers can request evidence for absences longer than 1-2 days.
            </p>

            <h3>Can a pharmacist issue a medical certificate for COVID?</h3>
            <p>
              Yes. Under the Fair Work Act 2009, AHPRA-registered pharmacists can issue Absence from Work Certificates for COVID symptoms just like any other illness. At <Link href="/" className="text-[#3D8B37] hover:underline">SorryBoss</Link>, we can certify you for 1-2 days of COVID-related illness via a 5-minute phone consultation.
            </p>

            <h3>How long should I stay home with COVID?</h3>
            <p>
              Current Australian health advice recommends staying home until your symptoms significantly improve and you&apos;ve been fever-free for 24 hours without medication. There&apos;s no longer a mandatory isolation period, but most people need 3-7 days to recover.
            </p>

            <h3>Can my employer refuse a medical certificate for COVID?</h3>
            <p>
              No. Under the Fair Work Act, employers must accept medical certificates from any registered health practitioner, including pharmacists. A COVID-related certificate is treated the same as any other sick leave certificate.
            </p>

            <h3>Do I need a positive COVID test to get a medical certificate?</h3>
            <p>
              No. A medical certificate for sick leave is based on your symptoms and unfitness for work, not a diagnosis. You don&apos;t need a positive test — your practitioner will certify based on your reported symptoms and their assessment.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Related Articles</h2>
            <ul>
              <li><Link href="/blog/can-pharmacist-write-medical-certificate" className="text-[#3D8B37] hover:underline">Can a Pharmacist Write a Medical Certificate in Australia?</Link></li>
              <li><Link href="/blog/same-day-medical-certificate" className="text-[#3D8B37] hover:underline">How to Get a Same-Day Medical Certificate (Fast)</Link></li>
              <li><Link href="/blog/sick-leave-rights-australia" className="text-[#3D8B37] hover:underline">Sick Leave Rights in Australia: Complete Guide</Link></li>
              <li><Link href="/blog/do-i-need-medical-certificate-for-one-day" className="text-[#3D8B37] hover:underline">Do I Need a Medical Certificate for 1 Day Off Sick?</Link></li>
              <li><Link href="/blog/medical-certificate-online-australia" className="text-[#3D8B37] hover:underline">How to Get a Medical Certificate Online in Australia</Link></li>
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
