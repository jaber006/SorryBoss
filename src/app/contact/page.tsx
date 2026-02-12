import Link from "next/link";
import { Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDF8EE]">
      {/* Nav */}
      <nav className="bg-[#1A1A1A] text-white px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white no-underline" style={{ fontFamily: "'Instrument Serif', serif" }}>
            <span className="w-2.5 h-2.5 bg-[#E8B931] rounded-full" />
            <span className="text-xl">SorryBoss</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-12">We're here to help. Reach out anytime.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="w-12 h-12 bg-[#E8B931]/10 rounded-xl flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-[#E8B931]" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Email Support</h2>
            <p className="text-gray-600 mb-4">
              For general enquiries, booking issues, or questions about your certificate.
            </p>
            <a 
              href="mailto:support@sorryboss.com.au" 
              className="text-[#3D8B37] font-medium hover:underline"
            >
              support@sorryboss.com.au
            </a>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="w-12 h-12 bg-[#E8B931]/10 rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-[#E8B931]" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Response Time</h2>
            <p className="text-gray-600 mb-4">
              We aim to respond to all enquiries within 24 hours during business days.
            </p>
            <p className="text-gray-500 text-sm">
              Mon–Fri: 8am – 8pm AEDT<br />
              Sat–Sun: 9am – 5pm AEDT
            </p>
          </div>
        </div>

        <div className="mt-12 bg-[#1A1A1A] text-white rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium">I haven't received my certificate</p>
              <p className="text-white/70 text-sm mt-1">
                Check your spam/junk folder first. If it's not there, email us with your booking details and we'll resend it.
              </p>
            </div>
            <div>
              <p className="font-medium">Can I change my call time?</p>
              <p className="text-white/70 text-sm mt-1">
                Email us as soon as possible with your preferred new time and we'll do our best to accommodate.
              </p>
            </div>
            <div>
              <p className="font-medium">I need to speak to someone urgently</p>
              <p className="text-white/70 text-sm mt-1">
                If you're experiencing a medical emergency, please call 000. We're not an emergency service.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            For privacy-related enquiries, please email{" "}
            <a href="mailto:privacy@sorryboss.com.au" className="text-[#3D8B37] hover:underline">
              privacy@sorryboss.com.au
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
