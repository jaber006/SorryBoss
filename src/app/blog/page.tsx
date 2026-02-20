import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Certificate Blog | Sick Leave Guides Australia | SorryBoss",
  description: "Expert guides on medical certificates, sick leave rights, and workplace health in Australia. Learn about pharmacist certificates, Fair Work Act requirements, and how to get a certificate online.",
  keywords: ["medical certificate australia", "sick leave rights", "pharmacist certificate", "absence from work certificate", "fair work act sick leave"],
  alternates: {
    canonical: "https://sorryboss.com.au/blog",
  },
  openGraph: {
    title: "Medical Certificate Blog | SorryBoss",
    description: "Expert guides on medical certificates, sick leave rights, and workplace health in Australia.",
    url: "https://sorryboss.com.au/blog",
    type: "website",
  },
};

const posts = [
  // NEW SEO POSTS (2025-02-22)
  {
    slug: "medical-certificate-for-work",
    title: "Medical Certificate for Work: Everything Australian Employees Need to Know",
    excerpt: "Complete guide to medical certificates for work — when you need one, who can issue it, your Fair Work Act rights, and how to get one in 5 minutes.",
    date: "2025-02-22",
    readTime: "10 min read",
    featured: true,
  },
  {
    slug: "medical-certificate-backdated",
    title: "Can You Get a Medical Certificate Backdated in Australia?",
    excerpt: "Need a certificate for yesterday? Learn the rules around backdated medical certificates and when SorryBoss can help.",
    date: "2025-02-22",
    readTime: "7 min read",
    featured: true,
  },
  {
    slug: "cheap-medical-certificate-online",
    title: "Cheapest Medical Certificate Online Australia 2025",
    excerpt: "Compare medical certificate costs in Australia. From $0 bulk-billed GP to $24.95 pharmacist phone consultation — find the best value.",
    date: "2025-02-22",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "sick-certificate-pharmacy",
    title: "Getting a Sick Certificate from a Pharmacy in Australia",
    excerpt: "Yes, pharmacists can issue sick certificates! Learn about walk-in pharmacy vs phone consultations and why you don't need to leave bed.",
    date: "2025-02-22",
    readTime: "7 min read",
  },
  {
    slug: "medical-certificate-covid",
    title: "Medical Certificate for COVID in Australia: Do You Still Need One?",
    excerpt: "COVID is now treated like any other illness. Learn when you need a certificate, how to get one, and current isolation guidance.",
    date: "2025-02-22",
    readTime: "7 min read",
  },
  {
    slug: "medical-certificate-centrelink",
    title: "Medical Certificate for Centrelink: What You Need to Know",
    excerpt: "Centrelink has specific requirements different from employer sick leave. Learn what they accept and when you need a GP certificate.",
    date: "2025-02-22",
    readTime: "8 min read",
  },
  // EXISTING POSTS (2025-02-21)
  {
    slug: "can-pharmacist-write-medical-certificate",
    title: "Can a Pharmacist Write a Medical Certificate in Australia?",
    excerpt: "Yes — pharmacists can legally write medical certificates under the Fair Work Act 2009. Here's everything you need to know about pharmacist-issued certificates.",
    date: "2025-02-21",
    readTime: "8 min read",
  },
  {
    slug: "medical-certificate-mental-health-day",
    title: "Medical Certificate for Mental Health Day Australia: Complete Guide",
    excerpt: "Can you get a medical certificate for a mental health day? Yes — mental health is treated the same as physical illness under Australian law.",
    date: "2025-02-21",
    readTime: "9 min read",
  },
  {
    slug: "medical-certificate-without-seeing-doctor",
    title: "How to Get a Medical Certificate Without Seeing a Doctor in Australia",
    excerpt: "You don't need to see a GP for a medical certificate. Pharmacists, telehealth, and phone consultations can issue valid certificates. Here's how.",
    date: "2025-02-21",
    readTime: "8 min read",
  },
  {
    slug: "sick-leave-certificate-cost",
    title: "Sick Leave Certificate Cost Australia 2025: Complete Price Guide",
    excerpt: "Medical certificate costs range from $0 to $150+. Compare GP vs pharmacist certificates and find the most affordable option at $24.95.",
    date: "2025-02-21",
    readTime: "7 min read",
  },
  {
    slug: "absence-from-work-certificate",
    title: "Absence from Work Certificate vs Medical Certificate: What's the Difference?",
    excerpt: "Both certificates are valid for sick leave under Australian law. Learn the difference and which one you need.",
    date: "2025-02-21",
    readTime: "8 min read",
  },
  // ORIGINAL POSTS
  {
    slug: "same-day-medical-certificate",
    title: "How to Get a Same-Day Medical Certificate (Fast)",
    excerpt: "Need a medical certificate today? Here's how to get one in 5 minutes — no waiting room, certificate emailed instantly.",
    date: "2025-02-13",
    readTime: "3 min read",
  },
  {
    slug: "medical-certificate-online-australia",
    title: "How to Get a Medical Certificate Online in Australia (2025)",
    excerpt: "Skip the waiting room. Get a medical certificate online in 5 minutes from an AHPRA-registered pharmacist. Here's how.",
    date: "2025-02-13",
    readTime: "5 min read",
  },
  {
    slug: "do-i-need-medical-certificate-for-one-day",
    title: "Do I Need a Medical Certificate for 1 Day Off Sick?",
    excerpt: "When does your employer need a certificate? Learn the rules around sick leave evidence in Australia.",
    date: "2025-02-13",
    readTime: "4 min read",
  },
  {
    slug: "sick-leave-rights-australia",
    title: "Sick Leave Rights in Australia: Complete Guide (2025)",
    excerpt: "Everything you need to know — how many days, casual entitlements, and what evidence your employer can request.",
    date: "2025-02-13",
    readTime: "6 min read",
  },
  {
    slug: "pharmacist-sick-certificate-australia",
    title: "Can a Pharmacist Issue a Sick Certificate in Australia?",
    excerpt: "Yes — and it's completely legal under the Fair Work Act. Here's everything you need to know about pharmacist-issued medical certificates.",
    date: "2025-02-13",
    readTime: "4 min read",
  },
  {
    slug: "carers-leave-certificate",
    title: "How to Get a Carer's Leave Certificate in Australia",
    excerpt: "Need time off to care for a sick family member? Learn how to get a carer's leave certificate quickly and legally.",
    date: "2025-02-13",
    readTime: "4 min read",
  },
];

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
    }
  ]
};

export default function BlogPage() {
  const featuredPosts = posts.filter(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <main className="min-h-screen bg-[#FDF8EE]">
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

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#6B6560] mb-8">
            <Link href="/" className="hover:text-[#1A1A1A]">Home</Link>
            <span>/</span>
            <span className="text-[#1A1A1A]">Blog</span>
          </nav>

          <h1 
            className="text-4xl md:text-5xl font-normal mb-4"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Medical Certificate Guides
          </h1>
          <p className="text-[#6B6560] text-lg mb-12 max-w-2xl">
            Expert guides about sick leave, medical certificates, and your workplace rights in Australia. Everything you need to know about getting a certificate and your entitlements under the Fair Work Act.
          </p>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#E8B931] mb-6">
                Featured Guides
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Link 
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block group"
                  >
                    <article className="bg-white rounded-2xl p-6 border border-[#E8B931]/30 hover:border-[#E8B931] hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                      <div className="flex items-center gap-2 text-xs text-[#6B6560] mb-3">
                        <span className="bg-[#E8B931]/20 text-[#92400E] px-2 py-0.5 rounded-full font-medium">New</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 
                        className="text-lg font-normal mb-3 group-hover:text-[#3D8B37] transition-colors flex-grow"
                        style={{ fontFamily: "'Instrument Serif', serif" }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-sm text-[#6B6560] mb-4 line-clamp-2">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-1 text-sm text-[#1A1A1A] font-medium group-hover:text-[#3D8B37] transition-colors">
                        Read more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All Posts */}
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#6B6560] mb-6">
            All Guides
          </h2>
          <div className="space-y-6">
            {regularPosts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="bg-white rounded-2xl p-6 md:p-8 border border-black/5 hover:border-[#E8B931]/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 text-sm text-[#6B6560] mb-3">
                    <time>{new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 
                    className="text-xl md:text-2xl font-normal mb-3 group-hover:text-[#3D8B37] transition-colors"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-[#6B6560] mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-[#1A1A1A] font-medium group-hover:text-[#3D8B37] transition-colors">
                    Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </article>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-[#1A1A1A] text-[#FDF8EE] rounded-2xl p-8 md:p-12 text-center">
            <h2 
              className="text-2xl md:text-3xl font-normal mb-4"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Need a medical certificate now?
            </h2>
            <p className="text-[#FDF8EE]/70 mb-6 max-w-lg mx-auto">
              Get an Absence from Work Certificate from an AHPRA-registered pharmacist in 5 minutes. $24.95 — only if issued.
            </p>
            <Link 
              href="/book" 
              className="inline-flex items-center gap-2 bg-[#E8B931] text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FDF8EE] transition-colors"
            >
              Get Your Certificate →
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-[#FDF8EE]/60 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p>© {new Date().getFullYear()} SorryBoss. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
