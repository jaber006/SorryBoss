import Link from "next/link";

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: February 2026</p>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Service Description</h2>
          <p className="mb-4">
            SorryBoss provides pharmacist consultations and medical certificates for personal leave 
            and carer's leave in accordance with the Fair Work Act 2009 (Cth). Our service connects 
            you with AHPRA-registered pharmacists who can assess your condition via telephone consultation.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Eligibility</h2>
          <p className="mb-4">
            To use our service, you must:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Be at least 18 years of age</li>
            <li>Be located in Australia at the time of consultation</li>
            <li>Provide accurate and truthful information about your condition</li>
            <li>Have a valid Australian phone number for the consultation call</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Medical Certificates</h2>
          <p className="mb-4">
            Certificates issued by SorryBoss are valid evidence of illness under section 107(3) of 
            the Fair Work Act 2009. However:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Certificates are limited to a maximum of 2 consecutive days</li>
            <li>Our pharmacists may decline to issue a certificate if clinically inappropriate</li>
            <li>This service does not replace ongoing medical care from your GP</li>
            <li>If symptoms persist or worsen, you should seek medical attention</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Payment</h2>
          <p className="mb-4">
            Payment is collected at the time of booking but is only charged if a certificate is issued. 
            If our pharmacist is unable to issue a certificate, you will receive a full refund.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Refund Policy</h2>
          <p className="mb-4">
            Full refunds are provided if:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Our pharmacist declines to issue a certificate</li>
            <li>We are unable to complete the consultation within 24 hours of your booking</li>
            <li>Technical issues prevent the consultation from occurring</li>
          </ul>
          <p className="mb-4">
            Refunds are not available once a certificate has been issued.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Privacy</h2>
          <p className="mb-4">
            Your health information is handled in accordance with our{" "}
            <Link href="/privacy" className="text-[#3D8B37] underline">Privacy Policy</Link> and 
            Australian privacy laws. We do not share your personal health information with employers.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="mb-4">
            SorryBoss provides a telehealth consultation service. We are not liable for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Decisions made by your employer regarding leave</li>
            <li>Medical conditions that require in-person examination</li>
            <li>Any delay in receiving your certificate due to circumstances beyond our control</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact</h2>
          <p className="mb-4">
            For questions about these terms, contact us at{" "}
            <a href="mailto:support@sorryboss.com.au" className="text-[#3D8B37] underline">
              support@sorryboss.com.au
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
