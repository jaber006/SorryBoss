import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SorryBoss",
  description: "SorryBoss privacy policy. Learn how we collect, use, and protect your personal and health information when you use our pharmacist certificate service.",
  alternates: {
    canonical: "https://sorryboss.com.au/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: February 2026</p>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            When you use SorryBoss, we collect:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Personal information:</strong> Name, email, phone number, date of birth</li>
            <li><strong>Health information:</strong> Symptoms, duration of illness, and consultation notes</li>
            <li><strong>Payment information:</strong> Processed securely by Stripe (we don't store card details)</li>
            <li><strong>Usage data:</strong> How you interact with our website</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide pharmacist consultations and issue certificates</li>
            <li>Process payments and send receipts</li>
            <li>Send your certificate via email</li>
            <li>Verify certificates when requested by employers (limited information only)</li>
            <li>Comply with legal and regulatory requirements</li>
            <li>Improve our services</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Certificate Verification</h2>
          <p className="mb-4">
            When an employer verifies a certificate, they only see:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Patient name</li>
            <li>Certificate type (personal leave or carer's leave)</li>
            <li>Valid dates</li>
            <li>Issuing pharmacist details</li>
          </ul>
          <p className="mb-4">
            <strong>We never share:</strong> Your specific symptoms, health conditions, phone number, 
            email, or any other personal details with employers.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Storage & Security</h2>
          <p className="mb-4">
            Your data is stored securely using industry-standard encryption. We use:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>SSL/TLS encryption for all data transmission</li>
            <li>Secure cloud infrastructure (Vercel, Supabase)</li>
            <li>PCI-compliant payment processing (Stripe)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Retention</h2>
          <p className="mb-4">
            We retain your consultation records for 7 years as required by Australian health 
            record-keeping requirements. You may request deletion of non-essential data at any time.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
          <p className="mb-4">
            Under Australian privacy law, you have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion (where legally permitted)</li>
            <li>Complain to the Office of the Australian Information Commissioner (OAIC)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Third Parties</h2>
          <p className="mb-4">
            We share data with trusted service providers:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Stripe:</strong> Payment processing</li>
            <li><strong>Resend:</strong> Email delivery</li>
            <li><strong>Supabase:</strong> Database hosting</li>
            <li><strong>Vercel:</strong> Website hosting</li>
          </ul>
          <p className="mb-4">
            These providers are contractually bound to protect your data.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Cookies</h2>
          <p className="mb-4">
            We use essential cookies only for website functionality. We do not use tracking 
            cookies or share data with advertisers.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
          <p className="mb-4">
            For privacy inquiries or to exercise your rights, contact us at:{" "}
            <a href="mailto:privacy@sorryboss.com.au" className="text-[#3D8B37] underline">
              privacy@sorryboss.com.au
            </a>
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this policy from time to time. Significant changes will be notified 
            via email or website notice.
          </p>
        </div>
      </div>
    </main>
  );
}
