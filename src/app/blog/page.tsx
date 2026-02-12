import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | SorryBoss",
  description: "Learn about sick leave rights, medical certificates, and workplace health in Australia.",
};

const posts = [
  {
    slug: "pharmacist-sick-certificate-australia",
    title: "Can a Pharmacist Issue a Sick Certificate in Australia?",
    excerpt: "Yes — and it's completely legal under the Fair Work Act. Here's everything you need to know about pharmacist-issued medical certificates.",
    date: "2026-02-13",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
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

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 
            className="text-4xl md:text-5xl font-normal mb-4"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Blog
          </h1>
          <p className="text-[#6B6560] text-lg mb-12">
            Guides and insights about sick leave, medical certificates, and your rights at work.
          </p>

          <div className="space-y-8">
            {posts.map((post) => (
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
                  <h2 
                    className="text-xl md:text-2xl font-normal mb-3 group-hover:text-[#3D8B37] transition-colors"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-[#6B6560] mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-[#1A1A1A] font-medium group-hover:text-[#3D8B37] transition-colors">
                    Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </article>
              </Link>
            ))}
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
