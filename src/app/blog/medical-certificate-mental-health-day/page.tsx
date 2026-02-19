import Link from "next/link";
import { ArrowLeft, Heart, Brain, Shield, Check, AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Certificate for Mental Health Day Australia: Complete Guide | SorryBoss",
  description: "Can you get a medical certificate for a mental health day in Australia? Yes — mental health is treated the same as physical illness under the Fair Work Act. Learn how to get one for $13.99.",
  keywords: ["medical certificate mental health day australia", "mental health day certificate", "sick leave mental health australia", "mental health sick leave", "stress leave certificate", "anxiety medical certificate"],
  alternates: {
    canonical: "https://sorryboss.com.au/blog/medical-certificate-mental-health-day",
  },
  openGraph: {
    title: "Medical Certificate for Mental Health Day Australia",
    description: "Yes, you can use sick leave for mental health in Australia. Here's how to get a certificate.",
    type: "article",
    publishedTime: "2025-02-21",
    url: "https://sorryboss.com.au/blog/medical-certificate-mental-health-day",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I get a medical certificate for a mental health day in Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Under Australian law, mental health is treated the same as physical health for sick leave purposes. The Fair Work Act 2009 allows personal leave for any illness, injury, or condition that makes you unfit for work — this explicitly includes mental health conditions like anxiety, depression, stress, and burnout."
      }
    },
    {
      "@type": "Question",
      "name": "Do I have to tell my employer my sick day is for mental health?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Medical certificates don't need to disclose your specific condition. A certificate simply states you were 'unfit for work' — it doesn't say why. Your employer cannot legally require you to disclose mental health details, and asking invasive questions could breach privacy laws."
      }
    },
    {
      "@type": "Question",
      "name": "Can a pharmacist issue a certificate for mental health?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, for short-term mental health days (1-2 days), a pharmacist can issue an Absence from Work Certificate. This is valid under the Fair Work Act 2009. For ongoing mental health conditions requiring more time off, you should see a GP or mental health professional."
      }
    },
    {
      "@type": "Question",
      "name": "How do I ask for a mental health day certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can be honest with the healthcare provider during your consultation. Say you're experiencing anxiety, stress, burnout, or mental fatigue. A good practitioner will understand and assess whether you're unfit for work. You don't need to justify yourself — mental health is health."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between a mental health day and stress leave?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A mental health day is typically a short break (1-2 days) taken using your personal leave entitlement. Stress leave usually refers to a longer period off work due to workplace-related stress, which may involve WorkCover or workers' compensation if the stress is work-caused. Both use personal leave, but stress leave often requires a GP assessment."
      }
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Medical Certificate for Mental Health Day Australia: Complete Guide",
  "description": "Everything you need to know about taking mental health days and getting medical certificates for mental health in Australia.",
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
    "@id": "https://sorryboss.com.au/blog/medical-certificate-mental-health-day"
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
      "name": "Medical Certificate for Mental Health Day",
      "item": "https://sorryboss.com.au/blog/medical-certificate-mental-health-day"
    }
  ]
};

export default function MentalHealthDayCertificatePage() {
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
            <span className="text-[#1A1A1A]">Mental Health Day Certificate</span>
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
              <span>9 min read</span>
            </div>
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Medical Certificate for Mental Health Day Australia: Complete Guide
            </h1>
            <p className="text-xl text-[#6B6560] leading-relaxed">
              <strong className="text-[#1A1A1A]">Yes, you can take a mental health day and get a medical certificate for it.</strong> In Australia, mental health is legally treated the same as physical health when it comes to sick leave. Here&apos;s everything you need to know.
            </p>
          </header>

          {/* Key Message Box */}
          <div className="bg-gradient-to-br from-[#E8B931]/10 to-[#3D8B37]/10 rounded-2xl p-6 md:p-8 mb-10 border border-[#E8B931]/20">
            <div className="flex items-start gap-4">
              <Heart className="w-8 h-8 text-[#E8B931] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-2 mt-0" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  Mental Health is Health
                </h2>
                <p className="text-[#6B6560] mb-0">
                  Under the Fair Work Act 2009, there is no distinction between physical and mental illness. If anxiety, depression, stress, or burnout makes you unfit for work, you&apos;re entitled to take personal leave — just like you would for a cold or stomach bug.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              We&apos;ve all had those days. Maybe you didn&apos;t sleep. Maybe anxiety has been building for weeks. Maybe you just feel mentally exhausted and can&apos;t face another day of meetings, emails, and deadlines. Whatever the reason, sometimes you need a mental health day — a chance to rest, reset, and recover.
            </p>
            <p>
              But can you actually get a medical certificate for a mental health day? Will your employer accept it? And do you have to tell anyone the real reason you&apos;re off?
            </p>
            <p>
              The short answer to all of this is: <strong>yes, you can get a certificate</strong>, <strong>yes, employers must accept it</strong>, and <strong>no, you don&apos;t have to disclose why</strong>. Let&apos;s break it down.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>The Law: Mental Health and Sick Leave</h2>

            <p>
              Australia&apos;s <em>Fair Work Act 2009</em> governs workplace entitlements, including personal leave (commonly called sick leave). Section 97 of the Act provides that employees can take personal leave when they are &quot;not fit for work because of a personal illness, or personal injury, affecting the employee.&quot;
            </p>
            <p>
              The key word here is <strong>&quot;illness&quot;</strong> — and the law makes no distinction between physical and mental illness. The Fair Work Ombudsman explicitly confirms that personal leave can be used for:
            </p>
            <ul>
              <li>Physical illness (cold, flu, gastro, etc.)</li>
              <li>Mental illness (depression, anxiety, etc.)</li>
              <li>Stress-related conditions</li>
              <li>Attending medical appointments</li>
            </ul>
            <p>
              This means if you&apos;re experiencing a mental health condition that makes you unfit for work — whether it&apos;s a diagnosed condition like anxiety or depression, or simply overwhelming stress or burnout — you have the same right to take sick leave as someone with the flu.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>What Counts as a &quot;Mental Health Day&quot;?</h2>

            <p>
              There&apos;s no legal definition of a &quot;mental health day,&quot; but in practice, it typically refers to taking a day (or two) off work to address mental wellbeing. This might be because:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white rounded-xl p-5 border border-black/5">
                <Brain className="w-6 h-6 text-[#E8B931] mb-3" />
                <h3 className="font-semibold text-base mb-2 mt-0">Acute Mental Health Issues</h3>
                <ul className="text-sm text-[#6B6560] mb-0 space-y-1">
                  <li>• Severe anxiety or panic attacks</li>
                  <li>• Depression symptoms</li>
                  <li>• Overwhelming stress</li>
                  <li>• Mental exhaustion</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-black/5">
                <Shield className="w-6 h-6 text-[#3D8B37] mb-3" />
                <h3 className="font-semibold text-base mb-2 mt-0">Preventative Mental Health</h3>
                <ul className="text-sm text-[#6B6560] mb-0 space-y-1">
                  <li>• Burnout prevention</li>
                  <li>• Stress management</li>
                  <li>• Emotional recovery</li>
                  <li>• General mental fatigue</li>
                </ul>
              </div>
            </div>

            <p>
              The important thing is that you genuinely need the time off. A medical certificate isn&apos;t a &quot;get out of work free&quot; card — it&apos;s documentation that a healthcare professional has assessed you as unfit for work due to a health condition.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Do I Need a Medical Certificate for a Mental Health Day?</h2>

            <p>
              This depends on your workplace policy. Under the Fair Work Act, employers can require &quot;reasonable evidence&quot; for sick leave, which typically means:
            </p>
            <ul>
              <li>A medical certificate from a registered health practitioner, or</li>
              <li>A statutory declaration</li>
            </ul>
            <p>
              Most employers require evidence for absences of <strong>two days or more</strong>, though some may request it for any absence, especially if there&apos;s a pattern of sick days (like always being sick on Mondays or Fridays).
            </p>
            <p>
              For a single mental health day, you might not need a certificate at all. Many employers accept a simple notification that you&apos;re unwell. Check your workplace policy or enterprise agreement.
            </p>
            <p>
              However, if you want the protection of having documentation, or your employer requires it, getting a certificate is straightforward — and it doesn&apos;t need to disclose that it&apos;s for mental health reasons.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>What Does the Certificate Say?</h2>

            <p>
              This is important: <strong>medical certificates don&apos;t need to state your diagnosis.</strong>
            </p>
            <p>
              A standard Absence from Work Certificate simply states that you were assessed by a registered health practitioner and found to be &quot;unfit for work&quot; for a specified period. It doesn&apos;t say <em>why</em> you&apos;re unfit for work.
            </p>
            <p>
              This means your employer won&apos;t know from the certificate whether you had a cold, a migraine, a stomach bug, or a mental health day. Your privacy is protected.
            </p>

            <blockquote className="border-l-4 border-[#E8B931] bg-white p-6 my-6 italic text-[#6B6560]">
              <p className="mb-2">&quot;The patient was assessed and found unfit for their usual occupation from [date] to [date].&quot;</p>
              <footer className="text-sm not-italic">— Typical certificate wording</footer>
            </blockquote>

            <p>
              Employers <strong>cannot</strong> legally demand to know your specific medical condition. If they do, this could breach workplace privacy laws and anti-discrimination laws.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Can a Pharmacist Issue a Mental Health Certificate?</h2>

            <p>
              <strong>Yes, for short-term mental health days (1-2 days).</strong>
            </p>
            <p>
              Under the Fair Work Act, certificates can come from any &quot;registered health practitioner,&quot; which includes AHPRA-registered pharmacists. Pharmacists can assess whether you&apos;re unfit for work due to symptoms like anxiety, stress, fatigue, or overwhelm, just as they can assess physical symptoms.
            </p>
            <p>
              Services like <Link href="/" className="text-[#3D8B37] hover:underline">sorryboss.com.au</Link> connect you with registered pharmacists for phone consultations. You can explain that you&apos;re experiencing mental fatigue, stress, or anxiety, and if the pharmacist assesses you as unfit for work, they&apos;ll issue a certificate — all for $13.99, and only if the certificate is issued.
            </p>

            <div className="bg-[#F0FDF4] border border-[#3D8B37]/20 rounded-xl p-6 my-6">
              <h3 className="flex items-center gap-2 mt-0 text-[#3D8B37]">
                <Check className="w-5 h-5" />
                When Pharmacist Certificates Work Well
              </h3>
              <ul className="mb-0 text-[#6B6560]">
                <li>Short-term mental health days (1-2 days)</li>
                <li>Stress, anxiety, or burnout symptoms</li>
                <li>When you need a certificate quickly</li>
                <li>When you don&apos;t need ongoing treatment</li>
              </ul>
            </div>

            <div className="bg-[#FEF3C7] border border-[#E8B931]/30 rounded-xl p-6 my-6">
              <h3 className="flex items-center gap-2 mt-0 text-[#92400E]">
                <AlertCircle className="w-5 h-5" />
                When You Should See a GP
              </h3>
              <ul className="mb-0 text-[#6B6560]">
                <li>You need more than 2 days off</li>
                <li>You have a diagnosed mental health condition</li>
                <li>You need medication or a Mental Health Care Plan</li>
                <li>Your symptoms are severe or worsening</li>
                <li>You need a WorkCover certificate</li>
              </ul>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>How to Get a Mental Health Day Certificate</h2>

            <p>
              Getting a certificate for a mental health day is the same process as getting one for any illness:
            </p>

            <div className="space-y-4 my-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-semibold mb-1">Choose a Healthcare Provider</p>
                  <p className="text-[#6B6560] text-sm mb-0">GP (in-person or telehealth), pharmacist service like <Link href="/book" className="text-[#3D8B37] hover:underline">SorryBoss</Link>, or psychologist (if you have one).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-semibold mb-1">Be Honest About Your Symptoms</p>
                  <p className="text-[#6B6560] text-sm mb-0">You can simply say you&apos;re experiencing stress, anxiety, mental fatigue, or burnout. You don&apos;t need to justify it or give extensive details.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8B931] text-[#1A1A1A] flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-semibold mb-1">Get Your Certificate</p>
                  <p className="text-[#6B6560] text-sm mb-0">If the practitioner assesses you as unfit for work, they&apos;ll issue a certificate. It will say &quot;unfit for work&quot; without disclosing the reason.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#3D8B37] text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <p className="font-semibold mb-1">Submit to Your Employer</p>
                  <p className="text-[#6B6560] text-sm mb-0">Email or upload the certificate as you would for any sick leave. You don&apos;t need to add an explanation.</p>
                </div>
              </div>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>What If My Employer Asks Why I Was Off?</h2>

            <p>
              You are <strong>not obligated</strong> to tell your employer why you were sick. You can simply say:
            </p>
            <ul>
              <li>&quot;I was unwell.&quot;</li>
              <li>&quot;I wasn&apos;t feeling well enough to work.&quot;</li>
              <li>&quot;I needed a health day.&quot;</li>
            </ul>
            <p>
              If your employer pushes for details, you can politely decline. Australian privacy laws protect your medical information, and the <em>Disability Discrimination Act 1992</em> prohibits discrimination based on mental health conditions.
            </p>
            <p>
              Some workplaces have supportive cultures where you can openly say &quot;I took a mental health day.&quot; But you&apos;re under no obligation to do so. The certificate provides the evidence required by law — nothing more is needed.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Mental Health Day vs Stress Leave: What&apos;s the Difference?</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-3 pr-4">Aspect</th>
                    <th className="text-left py-3 pr-4">Mental Health Day</th>
                    <th className="text-left py-3">Stress Leave</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Duration</td>
                    <td className="py-3 pr-4">1-2 days</td>
                    <td className="py-3">Days to weeks</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Purpose</td>
                    <td className="py-3 pr-4">Recovery, reset</td>
                    <td className="py-3">Treatment, recovery</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Leave Type</td>
                    <td className="py-3 pr-4">Personal leave</td>
                    <td className="py-3">Personal leave or WorkCover</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Certificate From</td>
                    <td className="py-3 pr-4">Pharmacist or GP</td>
                    <td className="py-3">GP or psychiatrist</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4 font-medium">Treatment</td>
                    <td className="py-3 pr-4">Rest, self-care</td>
                    <td className="py-3">Often professional help</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              If your stress is <strong>caused by work</strong> (workplace bullying, unrealistic workload, harassment), you may be entitled to workers&apos; compensation rather than using your personal leave. This requires a different process involving WorkCover and typically needs a GP or psychiatrist certificate.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Taking Care of Yourself</h2>

            <p>
              Taking a mental health day isn&apos;t weakness — it&apos;s maintenance. Just as you&apos;d stay home with a fever, staying home when your mental health is suffering is the responsible thing to do.
            </p>
            <p>
              Here are some ways to make the most of a mental health day:
            </p>
            <ul>
              <li><strong>Rest</strong> — Sleep in, nap, let your body and mind recover</li>
              <li><strong>Disconnect</strong> — Stay off work emails and Slack</li>
              <li><strong>Move</strong> — Even a short walk can help</li>
              <li><strong>Connect</strong> — Talk to someone you trust</li>
              <li><strong>Seek help if needed</strong> — If one day isn&apos;t enough, consider seeing a GP</li>
            </ul>

            <div className="bg-[#F5F5F5] rounded-xl p-6 my-6">
              <h3 className="mt-0">If You&apos;re Struggling</h3>
              <p className="mb-4">If you&apos;re experiencing ongoing mental health challenges, help is available:</p>
              <ul className="mb-0">
                <li><strong>Lifeline:</strong> 13 11 14 (24/7)</li>
                <li><strong>Beyond Blue:</strong> 1300 22 4636</li>
                <li><strong>Black Dog Institute:</strong> Resources at blackdoginstitute.org.au</li>
                <li><strong>Your GP:</strong> Can create a Mental Health Care Plan for subsidised sessions</li>
              </ul>
            </div>

            {/* CTA Box */}
            <div className="bg-[#1A1A1A] text-[#FDF8EE] rounded-2xl p-8 my-12 text-center">
              <h3 
                className="text-2xl md:text-3xl font-normal mb-4 mt-0"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Need a mental health day certificate?
              </h3>
              <p className="text-[#FDF8EE]/70 mb-6">
                Get a certificate in 5 minutes. Phone consult from bed. $13.99 — only if issued. No judgement.
              </p>
              <Link 
                href="/book" 
                className="inline-flex items-center gap-2 bg-[#E8B931] text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FDF8EE] transition-colors"
              >
                Get Your Certificate →
              </Link>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Frequently Asked Questions</h2>

            <h3>Can I get a medical certificate for a mental health day in Australia?</h3>
            <p>
              Yes. Under Australian law, mental health is treated the same as physical health for sick leave purposes. The Fair Work Act 2009 allows personal leave for any illness, injury, or condition that makes you unfit for work — this explicitly includes mental health conditions like anxiety, depression, stress, and burnout.
            </p>

            <h3>Do I have to tell my employer my sick day is for mental health?</h3>
            <p>
              No. Medical certificates don&apos;t need to disclose your specific condition. A certificate simply states you were &quot;unfit for work&quot; — it doesn&apos;t say why. Your employer cannot legally require you to disclose mental health details, and asking invasive questions could breach privacy laws.
            </p>

            <h3>Can a pharmacist issue a certificate for mental health?</h3>
            <p>
              Yes, for short-term mental health days (1-2 days), a pharmacist can issue an Absence from Work Certificate. This is valid under the Fair Work Act 2009. For ongoing mental health conditions requiring more time off, you should see a GP or mental health professional.
            </p>

            <h3>How do I ask for a mental health day certificate?</h3>
            <p>
              You can be honest with the healthcare provider during your consultation. Say you&apos;re experiencing anxiety, stress, burnout, or mental fatigue. A good practitioner will understand and assess whether you&apos;re unfit for work. You don&apos;t need to justify yourself — mental health is health.
            </p>

            <h3>What&apos;s the difference between a mental health day and stress leave?</h3>
            <p>
              A mental health day is typically a short break (1-2 days) taken using your personal leave entitlement. Stress leave usually refers to a longer period off work due to workplace-related stress, which may involve WorkCover or workers&apos; compensation if the stress is work-caused. Both use personal leave, but stress leave often requires a GP assessment.
            </p>

            <h3>How much does a mental health day certificate cost?</h3>
            <p>
              Through <Link href="/" className="text-[#3D8B37] hover:underline">sorryboss.com.au</Link>, a certificate costs $13.99 — and you only pay if the certificate is issued. GP certificates typically cost $40-80 unless bulk billed.
            </p>

            <h2 style={{ fontFamily: "'Instrument Serif', serif" }}>Related Articles</h2>
            <ul>
              <li><Link href="/blog/sick-leave-rights-australia" className="text-[#3D8B37] hover:underline">Sick Leave Rights in Australia: Complete Guide</Link></li>
              <li><Link href="/blog/do-i-need-medical-certificate-for-one-day" className="text-[#3D8B37] hover:underline">Do I Need a Medical Certificate for 1 Day Off?</Link></li>
              <li><Link href="/blog/medical-certificate-without-seeing-doctor" className="text-[#3D8B37] hover:underline">How to Get a Medical Certificate Without Seeing a Doctor</Link></li>
              <li><Link href="/blog/same-day-medical-certificate" className="text-[#3D8B37] hover:underline">How to Get a Same-Day Medical Certificate</Link></li>
              <li><Link href="/blog/can-pharmacist-write-medical-certificate" className="text-[#3D8B37] hover:underline">Can a Pharmacist Write a Medical Certificate?</Link></li>
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
