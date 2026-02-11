"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, AlertCircle, CheckCircle } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import PaymentForm to avoid SSR issues with Stripe
const PaymentForm = dynamic(() => import("@/components/PaymentForm"), {
  ssr: false,
  loading: () => (
    <div className="grid lg:grid-cols-5 gap-8 animate-pulse">
      <div className="lg:col-span-3 space-y-6">
        <div className="bg-white rounded-2xl border border-black/5 p-6">
          <div className="h-8 bg-gray-100 rounded-lg w-1/3 mb-6"></div>
          <div className="space-y-4">
            <div className="h-12 bg-gray-100 rounded-xl"></div>
            <div className="h-12 bg-gray-100 rounded-xl"></div>
            <div className="h-12 bg-gray-100 rounded-xl"></div>
          </div>
        </div>
        <div className="h-16 bg-[#E8B931]/20 rounded-2xl"></div>
      </div>
      <div className="lg:col-span-2">
        <div className="bg-white rounded-2xl border border-black/5 p-6 space-y-4">
          <div className="h-6 bg-gray-100 rounded w-1/2"></div>
          <div className="h-20 bg-gray-50 rounded-xl"></div>
          <div className="h-20 bg-gray-50 rounded-xl"></div>
        </div>
      </div>
    </div>
  ),
});

const SYMPTOMS = [
  "Cold / Flu symptoms",
  "Headache / Migraine",
  "Fever",
  "Gastro / Stomach upset",
  "Fatigue / Exhaustion",
  "Body aches / Pain",
  "Sore throat",
  "Cough",
  "Nausea / Vomiting",
  "Other",
];

const TIME_SLOTS = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00",
];

export default function PersonalBookingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1); // 1: Details, 2: Symptoms, 3: Time, 4: Payment
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Payment state
  const [clientSecret, setClientSecret] = useState("");
  const [consultationId, setConsultationId] = useState("");

  // Form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    selectedSymptoms: [] as string[],
    symptomDetails: "",
    symptomStartDate: "",
    daysRequested: 1,
    preferredDate: "",
    preferredTime: "",
    termsAccepted: false,
  });

  const updateForm = (field: string, value: string | number | boolean | string[]) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setError("");
  };

  const toggleSymptom = (symptom: string) => {
    const current = form.selectedSymptoms;
    if (current.includes(symptom)) {
      updateForm("selectedSymptoms", current.filter(s => s !== symptom));
    } else {
      updateForm("selectedSymptoms", [...current, symptom]);
    }
  };

  const validateStep1 = () => {
    if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.dateOfBirth) {
      setError("Please fill in all required fields");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!/^(\+?61|0)[2-9]\d{8}$/.test(form.phone.replace(/\s/g, ""))) {
      setError("Please enter a valid Australian phone number");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (form.selectedSymptoms.length === 0) {
      setError("Please select at least one symptom");
      return false;
    }
    if (!form.symptomStartDate) {
      setError("Please tell us when your symptoms started");
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    if (!form.preferredDate || !form.preferredTime) {
      setError("Please select a date and time for your call");
      return false;
    }
    if (!form.termsAccepted) {
      setError("Please accept the terms and conditions");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleProceedToPayment = async () => {
    if (!validateStep3()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/book/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leaveType: "personal",
          ...form,
          symptoms: form.selectedSymptoms,
          preferredCallTime: `${form.preferredDate}T${form.preferredTime}:00`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setClientSecret(data.clientSecret);
      setConsultationId(data.consultationId);
      setStep(4);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = () => {
    router.push(`/book/success?consultation_id=${consultationId}`);
  };

  const handlePaymentError = (errorMessage: string) => {
    setError(errorMessage);
  };

  // Get today's date as minimum for booking
  const today = new Date();
  const minDate = today.toISOString().split("T")[0];

  // Get date 7 days from now as maximum
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 7);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  return (
    <main className="min-h-screen bg-[#FDF8EE]">
      {/* Nav */}
      <nav className="px-6 md:px-10 py-5 flex items-center justify-between border-b border-black/5">
        <Link href="/" className="flex items-center gap-2 text-[#1A1A1A] no-underline" style={{ fontFamily: "'Instrument Serif', serif" }}>
          <span className="w-2.5 h-2.5 bg-[#E8B931] rounded-full" />
          <span className="text-2xl">SorryBoss</span>
        </Link>
        <Link href="/book" className="flex items-center gap-2 text-sm text-[#6B6560] hover:text-[#1A1A1A] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </nav>

      <div className={`mx-auto px-6 py-16 ${step === 4 ? 'max-w-5xl' : 'max-w-2xl'}`}>
        {/* Progress */}
        <div className="flex items-center gap-2 mb-12 overflow-x-auto">
          {["Type", "Details", "Symptoms", "Time", "Payment"].map((stepName, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                i < step ? 'bg-[#3D8B37] text-white' :
                i === step ? 'bg-[#1A1A1A] text-white' : 
                'bg-black/5 text-[#6B6560]'
              }`}>
                {i < step ? "✓" : i + 1}
              </div>
              <span className={`text-sm hidden sm:block ${i === step ? 'font-medium' : 'text-[#6B6560]'}`}>{stepName}</span>
              {i < 4 && <div className="w-4 sm:w-8 h-px bg-black/10" />}
            </div>
          ))}
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            {error}
          </div>
        )}

        {/* Step 1: Personal Details */}
        {step === 1 && (
          <div>
            <h1 className="text-3xl md:text-4xl font-normal tracking-tight mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Your details
            </h1>
            <p className="text-[#6B6560] mb-10">
              We need some basic information to create your certificate.
            </p>

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First name *</label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(e) => updateForm("firstName", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#1A1A1A] focus:ring-2 focus:ring-[#1A1A1A]/10 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last name *</label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(e) => updateForm("lastName", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#1A1A1A] focus:ring-2 focus:ring-[#1A1A1A]/10 outline-none transition-all"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email address *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateForm("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#1A1A1A] focus:ring-2 focus:ring-[#1A1A1A]/10 outline-none transition-all"
                  placeholder="john@example.com"
                />
                <p className="text-xs text-[#6B6560] mt-1">Your certificate will be sent here</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone number *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateForm("phone", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#1A1A1A] focus:ring-2 focus:ring-[#1A1A1A]/10 outline-none transition-all"
                  placeholder="0412 345 678"
                />
                <p className="text-xs text-[#6B6560] mt-1">The pharmacist will call you on this number</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Date of birth *</label>
                <input
                  type="date"
                  value={form.dateOfBirth}
                  onChange={(e) => updateForm("dateOfBirth", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#1A1A1A] focus:ring-2 focus:ring-[#1A1A1A]/10 outline-none transition-all"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Symptoms */}
        {step === 2 && (
          <div>
            <h1 className="text-3xl md:text-4xl font-normal tracking-tight mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>
              What&apos;s wrong?
            </h1>
            <p className="text-[#6B6560] mb-10">
              Select all symptoms that apply. This helps our pharmacist prepare for your call.
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3">Select your symptoms *</label>
                <div className="grid grid-cols-2 gap-2">
                  {SYMPTOMS.map((symptom) => (
                    <button
                      key={symptom}
                      onClick={() => toggleSymptom(symptom)}
                      className={`text-left px-4 py-3 rounded-xl border transition-all ${
                        form.selectedSymptoms.includes(symptom)
                          ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white'
                          : 'border-black/10 bg-white hover:border-black/20'
                      }`}
                    >
                      {symptom}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional details (optional)</label>
                <textarea
                  value={form.symptomDetails}
                  onChange={(e) => updateForm("symptomDetails", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#1A1A1A] focus:ring-2 focus:ring-[#1A1A1A]/10 outline-none transition-all resize-none"
                  rows={3}
                  placeholder="Any other details about how you're feeling..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">When did symptoms start? *</label>
                <input
                  type="date"
                  value={form.symptomStartDate}
                  onChange={(e) => updateForm("symptomStartDate", e.target.value)}
                  max={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#1A1A1A] focus:ring-2 focus:ring-[#1A1A1A]/10 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Days off needed</label>
                <div className="flex gap-2">
                  {[1, 2].map((days) => (
                    <button
                      key={days}
                      onClick={() => updateForm("daysRequested", days)}
                      className={`flex-1 px-4 py-3 rounded-xl border transition-all ${
                        form.daysRequested === days
                          ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white'
                          : 'border-black/10 bg-white hover:border-black/20'
                      }`}
                    >
                      {days} day{days > 1 ? 's' : ''}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-[#6B6560] mt-2">Pharmacist certificates typically cover 1–2 days. Longer periods may require a GP.</p>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Time Selection */}
        {step === 3 && (
          <div>
            <h1 className="text-3xl md:text-4xl font-normal tracking-tight mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>
              When should we call?
            </h1>
            <p className="text-[#6B6560] mb-10">
              Pick a time that works for you. The call takes about 3–5 minutes.
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Select date *
                </label>
                <input
                  type="date"
                  value={form.preferredDate}
                  onChange={(e) => updateForm("preferredDate", e.target.value)}
                  min={minDate}
                  max={maxDateStr}
                  className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#1A1A1A] focus:ring-2 focus:ring-[#1A1A1A]/10 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Select time *
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 max-h-64 overflow-y-auto p-1">
                  {TIME_SLOTS.map((time) => (
                    <button
                      key={time}
                      onClick={() => updateForm("preferredTime", time)}
                      className={`px-3 py-2 rounded-lg border text-sm transition-all ${
                        form.preferredTime === time
                          ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white'
                          : 'border-black/10 bg-white hover:border-black/20'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-[#6B6560] mt-2">Times shown in AEST/AEDT</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-black/10">
                <h4 className="font-semibold mb-4">Order summary</h4>
                <div className="flex justify-between items-center pb-4 border-b border-black/10">
                  <span className="text-[#6B6560]">Pharmacist consultation & certificate</span>
                  <span className="font-semibold">$24.95</span>
                </div>
                <p className="text-xs text-[#6B6560] mt-4">
                  You will only be charged if a certificate is issued. If our pharmacist cannot issue a certificate, you pay nothing.
                </p>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.termsAccepted}
                  onChange={(e) => updateForm("termsAccepted", e.target.checked)}
                  className="w-5 h-5 rounded border-black/20 mt-0.5"
                />
                <span className="text-sm text-[#6B6560]">
                  I agree to the{" "}
                  <Link href="/terms" className="underline hover:text-[#1A1A1A]">Terms of Service</Link>
                  {" "}and{" "}
                  <Link href="/privacy" className="underline hover:text-[#1A1A1A]">Privacy Policy</Link>.
                  I understand that a pharmacist consultation is not a substitute for medical advice.
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Step 4: Payment */}
        {step === 4 && clientSecret && (
          <div className="max-w-none -mx-6 px-6 lg:-mx-0 lg:px-0">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-normal tracking-tight mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Complete your booking
              </h1>
              <p className="text-[#6B6560]">
                Enter your payment details below. Your card won&apos;t be charged until your certificate is issued.
              </p>
            </div>

            <PaymentForm
              clientSecret={clientSecret}
              consultationId={consultationId}
              amount={2495}
              customerName={`${form.firstName} ${form.lastName}`}
              customerPhone={form.phone}
              appointmentDate={form.preferredDate}
              appointmentTime={form.preferredTime}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
            />
          </div>
        )}

        {/* Navigation Buttons */}
        {step < 4 && (
          <div className="mt-10 flex justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-[#6B6560] hover:text-[#1A1A1A] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold bg-[#1A1A1A] text-white hover:bg-[#E8B931] hover:text-[#1A1A1A] transition-all duration-300"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleProceedToPayment}
                disabled={loading}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold bg-[#E8B931] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : "Continue to Payment"}
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        )}

        {step === 4 && (
          <div className="mt-6">
            <button
              onClick={() => setStep(3)}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-[#6B6560] hover:text-[#1A1A1A] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to booking details
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
