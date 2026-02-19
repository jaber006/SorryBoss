import Link from "next/link";
import { ArrowLeft, Phone, Clock, DollarSign, Check, Zap, Video, Building } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Get a Medical Certificate Without Seeing a Doctor in Australia | SorryBoss",
  description: "You don't need to see a GP for a medical certificate in Australia. Pharmacists, telehealth services, and phone consultations can issue valid certificates. Get one in 5 minutes for $13.99.",
  keywords: ["medical certificate without seeing doctor", "medical certificate without doctor", "get medical certificate online", "sick certificate without gp", "medical certificate phone", "telehealth medical certificate australia"],
  alternates: {
    canonical: "https://sorryboss.com.au/blog/medical-certificate-without-seeing-doctor",
  },
  openGraph: {
    title: "How to Get a Medical Certificate Without Seeing a Doctor",
    description: "Skip the waiting room. Here are all the ways to get a valid medical certificate in Australia without seeing a GP in person.",
    type: "article",
    publishedTime: "2025-02-21",
    url: "https://sorryboss.com.au/blog/medical-certificate-without-seeing-doctor",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I get a medical certificate without seeing a doctor in Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Under the Fair Work Act 2009, medical certificates can come from any 'registered health practitioner' — not just doctors. This includes pharmacists, who can issue valid Absence from Work Certificates via phone consultation. No in-person appointment or video call required."
      }
    },
    {
      "@type": "Question",
      "name": "Is a medical certificate from a pharmacist valid for work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Pharmacists registered with AHPRA are classified as registered health practitioners under Australian law. Certificates they issue are legally valid evidence for personal leave and carer's leave under section 107(3) of the Fair Work Act 2009."
      }
    },
    {
      "@type": "Question",
      "name": "How can I get a medical certificate from home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can get a medical certificate from home via: 1) Pharmacist phone consultation services like SorryBoss ($13.99, 5 minutes), 2) Telehealth GP video consultations ($40-80, 15-30 minutes), or 3) Some apps and online services. Pharmacist certificates only require a phone call — no video needed."
      }
    },
    {
      "@type": "Question",
      "name": "What's the fastest way to get a medical certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The fastest option is a pharmacist phone consultation. Services like SorryBoss take about 5 minutes total — 2 minutes to book online, 3-5 minutes for the phone call, and your certificate is emailed instantly. No waiting room, no video call, no appointment delays."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a medical certificate over the phone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Pharmacists can conduct consultations and issue certificates over the phone. Some telehealth GP services also offer phone consultations (though many require video). Phone-based pharmacist services like SorryBoss are specifically designed for quick, convenient certificates."
      }
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Get a Medical Certificate Without Seeing a Doctor in Australia",
  "description": "Complete guide to getting valid medical certificates in Australia without an in-person doctor visit.",
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
    "@id": "https://sorryboss.com.au/blog/medical-certificate-without-seeing-doctor"
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
      "name": "Medical Certificate Without Seeing Doctor",
      "item": "https://sorryboss.com.au/blog/medical-certificate-without-seeing-doctor"
    }
  ]
};

export default function MedicalCertificateWithoutDoctorPage() {
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
            <span className="text-[#1A1A1A]">Medical Certificate Without Doctor</span>
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
              How to Get a Medical Certificate Without Seeing a Doctor in Australia
            </h1>
            <p className="text-xl text-[#6B6560] leading-relaxed">
              You&apos;re sick, you need a medical certificate, but the thought of dragging yourself to a GP clinic is unbearable. Good news: <strong className="text-[#1A1A1A]">you don&apos;t have to see a doctor in person to get a valid certificate.</strong>
            </p>
          </header>

          {/* Quick Options Box */}
          <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 mb-10">
            <h2 className="text-xl font-semibold mb-6 mt-0" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Your Options at a Glance
            </h2>
            <div className="space-y-4">
              {/* Option 1 */}
              <div className="flex items-start gap-4 p-4 bg-[#F0FDF4] rounded-xl border border-[#3D8B37]/20">
                <div className="w-10 h-10 rounded-full bg-[#3D8B37] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold bg-[#3D8B37] text-white px-2 py-0.5 rounded">FASTEST</span>
                    <h3 className="font-semibold text-base m-0">Pharmacist Phone Consult</h3>
                  </div>
                  <p className="text-sm text-[#6B6560] mb-2">Phone call from bed. No video. Certificate emailed.</p>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-[#3D8B37]" /> 5 mins</span>
                    <span className="flex items-center gap-1"><DollarSign className="w-4 h-4 text-[#3D8B37]" /> $13.99</span>
                  </div>
                </div>
              </div>

              {/* Option 2 */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-black/10">
                <div className="w-10 h-10 rounded-full bg-[#E8B931]/20 flex items-center justify-center flex-shrink-0">
                  <Video className="w-5 h-5 text-[#E8B931]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base m-0 mb-1">Telehealth GP (Video)</h3>
                  <p className="text-sm text-[#6B6560] mb-2">Video call with a doctor. Good if you need a prescription.</p>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-[#6B6560]" /> 15-30 mins</span>
                    <span className="flex items-center gap-1"><DollarSign className="w-4 h-4 text-[#6B6560]" /> $40-80</span>
                  </div>
                </div>
              </div>

              {/* Option 3 */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-black/10">
                <div className="w-10 h-10 rounded-full bg-[#E8B931]/20 flex items-center justify-center flex-shrink-0">
                  <Building className="w-5 h-5 text-[#6B6560]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base m-0 mb-1">Walk-in GP Clinic</h3>
                  <p className="text-sm text-[#6B6560] mb-2">Traditional option. Long waits but may be bulk billed.</p>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-[#6B6560]" /> 1-3 hours</span>
                    <span className="flex items-center gap-1"><DollarSign className="w-4 h-4 text-[#6B6560]" /> $0-120</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              Many Australians don&apos;t realize that &quot;medical certificate&quot; doesn&apos;t have to mean &quot;certificate from a doctor.&quot; Under Australian law, any <strong>registered health practitioner</strong> can issue valid evidence of illness — and that includes pharmacists.
            </p>
            <p>
              In this guide, we&apos;ll explore all the ways you can get a medical certificate without seeing a doctor in person, compare the options, and help you choose the best one for your situation.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Why You Might Want to Skip the Doctor</h2>

            <p>
              Let&apos;s be honest — when you&apos;re sick, the last thing you want to do is:
            </p>
            <ul>
              <li>Get dressed and travel to a clinic</li>
              <li>Sit in a waiting room for 1-3 hours</li>
              <li>Potentially catch something else from other sick patients</li>
              <li>Pay $60-120 for a 5-minute appointment</li>
              <li>Go home exhausted when you should be resting</li>
            </ul>
            <p>
              For a simple cold, gastro, or headache, this process is overkill. You know you&apos;re sick. Your employer knows you&apos;re sick. You just need the paperwork to make it official.
            </p>
            <p>
              Fortunately, Australian law recognizes this reality and provides alternatives.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>The Legal Basis: Who Can Issue Medical Certificates?</h2>

            <p>
              The <em>Fair Work Act 2009</em> is the key legislation governing sick leave evidence in Australia. Section 107(3) specifies that acceptable evidence includes:
            </p>

            <blockquote className="border-l-4 border-[#E8B931] bg-white p-6 my-6 italic text-[#6B6560]">
              &quot;A medical certificate, or... a statutory declaration made by the employee... from a registered health practitioner.&quot;
              <footer className="text-sm mt-2 not-italic">— Fair Work Act 2009, Section 107(3)</footer>
            </blockquote>

            <p>
              The term <strong>&quot;registered health practitioner&quot;</strong> is defined by the <em>Health Practitioner Regulation National Law</em> and includes:
            </p>
            <ul>
              <li>Medical practitioners (GPs, specialists)</li>
              <li><strong>Pharmacists</strong></li>
              <li>Nurses and midwives</li>
              <li>Dentists</li>
              <li>Physiotherapists</li>
              <li>Psychologists</li>
              <li>And many others registered with AHPRA</li>
            </ul>
            <p>
              This means a certificate from an AHPRA-registered pharmacist is <strong>legally equivalent</strong> to a certificate from a GP for the purposes of personal leave and carer&apos;s leave.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Option 1: Pharmacist Phone Consultation (Fastest)</h2>

            <p>
              The quickest way to get a medical certificate without seeing a doctor is through a pharmacist phone consultation service like <Link href="/" className="text-[#3D8B37] hover:underline">sorryboss.com.au</Link>.
            </p>

            <div className="bg-[#F0FDF4] border border-[#3D8B37]/20 rounded-xl p-6 my-6">
              <h3 className="flex items-center gap-2 mt-0 text-[#3D8B37]">
                <Zap className="w-5 h-5" />
                How It Works
              </h3>
              <ol className="mb-0">
                <li><strong>Book online (2 minutes)</strong> — Enter your details and symptoms at <Link href="/book" className="text-[#3D8B37] hover:underline">sorryboss.com.au/book</Link></li>
                <li><strong>Receive a phone call (3-5 minutes)</strong> — An AHPRA-registered pharmacist calls you for a quick assessment</li>
                <li><strong>Get your certificate (instant)</strong> — Certificate emailed as a PDF immediately after the call</li>
              </ol>
            </div>

            <h3>Advantages:</h3>
            <ul>
              <li><Check className="w-4 h-4 inline text-[#3D8B37]" /> <strong>No video required</strong> — Just answer your phone</li>
              <li><Check className="w-4 h-4 inline text-[#3D8B37]" /> <strong>Stay in bed</strong> — No need to look presentable</li>
              <li><Check className="w-4 h-4 inline text-[#3D8B37]" /> <strong>5 minutes total</strong> — Fastest option available</li>
              <li><Check className="w-4 h-4 inline text-[#3D8B37]" /> <strong>$13.99</strong> — Cheapest option</li>
              <li><Check className="w-4 h-4 inline text-[#3D8B37]" /> <strong>No cert, no charge</strong> — Only pay if certificate is issued</li>
            </ul>

            <h3>Best For:</h3>
            <ul>
              <li>Common illnesses (cold, flu, gastro, headache)</li>
              <li>1-2 days off work</li>
              <li>When you don&apos;t need a prescription</li>
              <li>Same-day certificates</li>
            </ul>

            <h3>Limitations:</h3>
            <ul>
              <li>Maximum 2 days coverage</li>
              <li>Can&apos;t prescribe medications</li>
              <li>Not suitable for WorkCover or insurance claims</li>
            </ul>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Option 2: Telehealth GP (Video Consultation)</h2>

            <p>
              If you need to actually see a doctor but don&apos;t want to leave home, telehealth GP services offer video consultations. Services include:
            </p>
            <ul>
              <li>Instant Consult</li>
              <li>Qoctor</li>
              <li>13SICK National Home Doctor</li>
              <li>Many regular GP clinics now offer telehealth</li>
            </ul>

            <h3>Advantages:</h3>
            <ul>
              <li>Full GP consultation</li>
              <li>Can prescribe medications</li>
              <li>Can issue longer certificates</li>
              <li>May be bulk billed</li>
            </ul>

            <h3>Disadvantages:</h3>
            <ul>
              <li>Requires video call (need to be somewhat presentable)</li>
              <li>15-60 minute wait times</li>
              <li>$40-80 if not bulk billed</li>
              <li>Need a quiet, well-lit space</li>
            </ul>

            <h3>Best For:</h3>
            <ul>
              <li>When you need a prescription</li>
              <li>Longer absences (3+ days)</li>
              <li>When you want to discuss your condition in detail</li>
              <li>Complex or ongoing health issues</li>
            </ul>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Option 3: Statutory Declaration</h2>

            <p>
              The Fair Work Act also allows a <strong>statutory declaration</strong> as evidence of illness. This is a legal document where you declare, under penalty of perjury, that you were unfit for work.
            </p>

            <h3>How to Make a Statutory Declaration:</h3>
            <ol>
              <li>Download a statutory declaration form from your state/territory government</li>
              <li>Write a statement declaring you were unfit for work and why</li>
              <li>Sign the declaration in front of an authorised witness (JP, lawyer, pharmacist, etc.)</li>
              <li>Submit to your employer</li>
            </ol>

            <h3>Advantages:</h3>
            <ul>
              <li>Can be free (if you find a JP)</li>
              <li>Doesn&apos;t require a health professional</li>
            </ul>

            <h3>Disadvantages:</h3>
            <ul>
              <li>Requires finding and visiting an authorised witness</li>
              <li>Some employers prefer medical certificates</li>
              <li>You&apos;re making a legal declaration — must be truthful</li>
              <li>Can be more hassle than getting a certificate</li>
            </ul>

            <p>
              In practice, most people find it easier to get a pharmacist certificate than to organise a statutory declaration.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Comparing Your Options</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-3 pr-4">Option</th>
                    <th className="text-left py-3 pr-4">Time</th>
                    <th className="text-left py-3 pr-4">Cost</th>
                    <th className="text-left py-3 pr-4">Requires</th>
                    <th className="text-left py-3">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/5 bg-[#F0FDF4]">
                    <td className="py-3 pr-4 font-medium">Pharmacist (SorryBoss)</td>
                    <td className="py-3 pr-4">5 mins</td>
                    <td className="py-3 pr-4">$13.99</td>
                    <td className="py-3 pr-4">Phone call</td>
                    <td className="py-3">Quick 1-2 day cert</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Telehealth GP</td>
                    <td className="py-3 pr-4">15-60 mins</td>
                    <td className="py-3 pr-4">$40-80</td>
                    <td className="py-3 pr-4">Video call</td>
                    <td className="py-3">Prescriptions, longer cert</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Walk-in Clinic</td>
                    <td className="py-3 pr-4">1-3 hours</td>
                    <td className="py-3 pr-4">$0-120</td>
                    <td className="py-3 pr-4">In-person visit</td>
                    <td className="py-3">Bulk billing, complex issues</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Statutory Declaration</td>
                    <td className="py-3 pr-4">30+ mins</td>
                    <td className="py-3 pr-4">Free-$50</td>
                    <td className="py-3 pr-4">Visit to witness</td>
                    <td className="py-3">Alternative evidence</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>What If My Employer Only Accepts Doctor&apos;s Certificates?</h2>

            <p>
              Some employers mistakenly believe they can require certificates specifically from doctors. This is <strong>not correct under the Fair Work Act</strong>.
            </p>
            <p>
              If your employer questions a pharmacist certificate, you can:
            </p>
            <ol>
              <li><strong>Point to Section 107(3) of the Fair Work Act 2009</strong> — This explicitly accepts certificates from any registered health practitioner</li>
              <li><strong>Show the AHPRA registration number</strong> — All pharmacist certificates include this for verification</li>
              <li><strong>Contact Fair Work</strong> — The Fair Work Ombudsman can clarify the law to your employer</li>
            </ol>
            <p>
              That said, if your workplace policy specifically requires a GP certificate (not just any medical certificate), check whether this is in your employment contract or enterprise agreement. Even then, such policies may not override the Fair Work Act.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>When You Should See a Doctor</h2>

            <p>
              While pharmacist certificates are great for common, short-term illness, there are times when you should see a GP:
            </p>
            <ul>
              <li><strong>You need more than 2 days off</strong> — Pharmacist certificates are limited to 1-2 days</li>
              <li><strong>You need medication</strong> — Pharmacists can recommend OTC products but can&apos;t prescribe most medications</li>
              <li><strong>Your symptoms are severe or worsening</strong> — This may indicate something more serious</li>
              <li><strong>You have a chronic condition</strong> — Ongoing management should involve a GP</li>
              <li><strong>You need WorkCover or insurance documentation</strong> — These usually require a doctor</li>
              <li><strong>You&apos;re pregnant</strong> — Pregnancy-related leave requires a GP or obstetrician</li>
            </ul>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Step-by-Step: Getting a Certificate via SorryBoss</h2>

            <p>
              Here&apos;s exactly how to get a medical certificate without seeing a doctor using <Link href="/" className="text-[#3D8B37] hover:underline">sorryboss.com.au</Link>:
            </p>

            <div className="space-y-6 my-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center text-xl font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>1</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 mt-0">Visit sorryboss.com.au/book</h3>
                  <p className="text-[#6B6560] mb-0">Go to our <Link href="/book" className="text-[#3D8B37] hover:underline">booking page</Link> and select whether you need personal leave (you&apos;re sick) or carer&apos;s leave (caring for someone else).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center text-xl font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>2</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 mt-0">Enter Your Details</h3>
                  <p className="text-[#6B6560] mb-0">Fill in your name, contact details, and describe your symptoms. Select when you&apos;d like the pharmacist to call you.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center text-xl font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>3</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 mt-0">Payment</h3>
                  <p className="text-[#6B6560] mb-0">Enter your payment details. You&apos;ll only be charged $13.99 if a certificate is issued. No cert = no charge.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center text-xl font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>4</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 mt-0">Phone Consultation</h3>
                  <p className="text-[#6B6560] mb-0">Our AHPRA-registered pharmacist calls you at your chosen time. The call takes 3-5 minutes. No video — answer from bed.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#3D8B37] text-white flex items-center justify-center text-xl font-bold flex-shrink-0" style={{ fontFamily: "'Instrument Serif', serif" }}>5</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 mt-0">Certificate Emailed</h3>
                  <p className="text-[#6B6560] mb-0">If the pharmacist assesses you as unfit for work, your Absence from Work Certificate is emailed immediately as a PDF. Forward it to your employer.</p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-[#1A1A1A] text-[#FDF8EE] rounded-2xl p-8 my-12 text-center">
              <h3 
                className="text-2xl md:text-3xl font-normal mb-4 mt-0"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Skip the doctor&apos;s waiting room
              </h3>
              <p className="text-[#FDF8EE]/70 mb-6">
                Get a valid medical certificate in 5 minutes. Phone consult from bed. $13.99 — only if issued.
              </p>
              <Link 
                href="/book" 
                className="inline-flex items-center gap-2 bg-[#E8B931] text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FDF8EE] transition-colors"
              >
                Get Your Certificate →
              </Link>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Frequently Asked Questions</h2>

            <h3>Can I get a medical certificate without seeing a doctor in Australia?</h3>
            <p>
              Yes. Under the Fair Work Act 2009, medical certificates can come from any &quot;registered health practitioner&quot; — not just doctors. This includes pharmacists, who can issue valid Absence from Work Certificates via phone consultation. No in-person appointment or video call required.
            </p>

            <h3>Is a medical certificate from a pharmacist valid for work?</h3>
            <p>
              Yes. Pharmacists registered with AHPRA are classified as registered health practitioners under Australian law. Certificates they issue are legally valid evidence for personal leave and carer&apos;s leave under section 107(3) of the Fair Work Act 2009.
            </p>

            <h3>How can I get a medical certificate from home?</h3>
            <p>
              You can get a medical certificate from home via: 1) Pharmacist phone consultation services like SorryBoss ($13.99, 5 minutes), 2) Telehealth GP video consultations ($40-80, 15-30 minutes), or 3) Some apps and online services. Pharmacist certificates only require a phone call — no video needed.
            </p>

            <h3>What&apos;s the fastest way to get a medical certificate?</h3>
            <p>
              The fastest option is a pharmacist phone consultation. Services like <Link href="/" className="text-[#3D8B37] hover:underline">sorryboss.com.au</Link> take about 5 minutes total — 2 minutes to book online, 3-5 minutes for the phone call, and your certificate is emailed instantly. No waiting room, no video call, no appointment delays.
            </p>

            <h3>Can I get a medical certificate over the phone?</h3>
            <p>
              Yes. Pharmacists can conduct consultations and issue certificates over the phone. Some telehealth GP services also offer phone consultations (though many require video). Phone-based pharmacist services like SorryBoss are specifically designed for quick, convenient certificates.
            </p>

            <h3>Is it legal to get a medical certificate without being examined in person?</h3>
            <p>
              Yes. There is no legal requirement in Australia for medical certificates to be issued following an in-person examination. Phone and video consultations are valid methods of assessment for issuing certificates.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Related Articles</h2>
            <ul>
              <li><Link href="/blog/can-pharmacist-write-medical-certificate" className="text-[#3D8B37] hover:underline">Can a Pharmacist Write a Medical Certificate?</Link></li>
              <li><Link href="/blog/same-day-medical-certificate" className="text-[#3D8B37] hover:underline">How to Get a Same-Day Medical Certificate</Link></li>
              <li><Link href="/blog/medical-certificate-online-australia" className="text-[#3D8B37] hover:underline">How to Get a Medical Certificate Online in Australia</Link></li>
              <li><Link href="/blog/sick-leave-certificate-cost" className="text-[#3D8B37] hover:underline">Sick Leave Certificate Cost in Australia</Link></li>
              <li><Link href="/blog/do-i-need-medical-certificate-for-one-day" className="text-[#3D8B37] hover:underline">Do I Need a Medical Certificate for 1 Day Off?</Link></li>
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
