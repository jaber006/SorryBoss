"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Clock, Phone, Mail } from "lucide-react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const consultationId = searchParams.get("consultation_id");
  const [booking, setBooking] = useState<{
    firstName: string;
    preferredCallTime: string;
    email: string;
    phone: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      // Stripe Checkout flow
      fetch(`/api/book/confirm?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) setBooking(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else if (consultationId) {
      // PaymentIntent flow (embedded form)
      fetch(`/api/book/confirm-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ consultationId }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) setBooking(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [sessionId, consultationId]);

  const formatDateTime = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-AU", {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-16 text-center">
      <div className="w-20 h-20 bg-[#3D8B37]/10 rounded-full flex items-center justify-center mx-auto mb-8">
        <CheckCircle className="w-10 h-10 text-[#3D8B37]" />
      </div>

      <h1 
        className="text-3xl md:text-4xl font-normal tracking-tight mb-4"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Booking confirmed!
      </h1>

      {loading ? (
        <p className="text-[#6B6560]">Loading your booking details...</p>
      ) : booking ? (
        <>
          <p className="text-[#6B6560] text-lg mb-10">
            Thanks {booking.firstName}! Your consultation has been scheduled.
          </p>

          <div className="bg-white rounded-2xl p-8 border border-black/10 text-left space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E8B931]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#E8B931]" />
              </div>
              <div>
                <p className="text-sm text-[#6B6560] mb-1">Your call is scheduled for</p>
                <p className="text-lg font-semibold">{formatDateTime(booking.preferredCallTime)}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E8B931]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#E8B931]" />
              </div>
              <div>
                <p className="text-sm text-[#6B6560] mb-1">We&apos;ll call you on</p>
                <p className="text-lg font-semibold">{booking.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E8B931]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#E8B931]" />
              </div>
              <div>
                <p className="text-sm text-[#6B6560] mb-1">Certificate will be sent to</p>
                <p className="text-lg font-semibold">{booking.email}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-[#E8B931]/10 border border-[#E8B931]/20 text-left">
            <h4 className="font-semibold mb-3">What happens next?</h4>
            <ul className="text-sm text-[#6B6560] space-y-2">
              <li>✓ A pharmacist will call you at your scheduled time</li>
              <li>✓ The call takes about 3–5 minutes</li>
              <li>✓ If approved, your certificate is emailed immediately</li>
              <li>✓ You&apos;ll only be charged if a certificate is issued</li>
            </ul>
          </div>

          <p className="text-sm text-[#6B6560] mt-8">
            Make sure your phone is on and ready to receive calls. If you miss the call, we&apos;ll try again once.
          </p>
        </>
      ) : (
        <p className="text-[#6B6560]">
          Your booking has been confirmed. Check your email for details.
        </p>
      )}

      <Link
        href="/"
        className="inline-block mt-10 px-8 py-4 rounded-full text-lg font-semibold bg-[#1A1A1A] text-white hover:bg-[#E8B931] hover:text-[#1A1A1A] transition-all duration-300"
      >
        Back to home
      </Link>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#FDF8EE]">
      {/* Nav */}
      <nav className="px-6 md:px-10 py-5 flex items-center justify-between border-b border-black/5">
        <Link href="/" className="flex items-center gap-2 text-[#1A1A1A] no-underline" style={{ fontFamily: "'Instrument Serif', serif" }}>
          <span className="w-2.5 h-2.5 bg-[#E8B931] rounded-full" />
          <span className="text-2xl">SorryBoss</span>
        </Link>
      </nav>

      <Suspense fallback={
        <div className="max-w-xl mx-auto px-6 py-16 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse" />
          <p className="text-[#6B6560]">Loading...</p>
        </div>
      }>
        <SuccessContent />
      </Suspense>
    </main>
  );
}
