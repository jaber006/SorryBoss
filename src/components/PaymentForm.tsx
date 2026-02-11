"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { AlertCircle, Lock, Shield, CheckCircle2, CreditCard } from "lucide-react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface PaymentFormProps {
  clientSecret: string;
  consultationId: string;
  amount: number;
  customerName: string;
  customerPhone: string;
  appointmentDate: string;
  appointmentTime: string;
  onSuccess: () => void;
  onError: (error: string) => void;
}

function CheckoutForm({ 
  consultationId, 
  amount, 
  customerName,
  customerPhone,
  appointmentDate,
  appointmentTime,
  onSuccess, 
  onError 
}: Omit<PaymentFormProps, "clientSecret">) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setMessage("");

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/book/success?consultation_id=${consultationId}`,
      },
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message || "An error occurred");
      onError(error.message || "Payment failed");
      setIsProcessing(false);
    } else if (paymentIntent && (paymentIntent.status === "requires_capture" || paymentIntent.status === "succeeded")) {
      onSuccess();
    } else {
      setMessage("Something went wrong");
      setIsProcessing(false);
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' });
  };

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      {/* Payment Form - Left Side */}
      <div className="lg:col-span-3">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Card Section */}
          <div className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-[#1A1A1A] to-[#2D2D2D] flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-[#E8B931]" />
              <span className="font-medium text-white">Payment Method</span>
            </div>
            
            <div className="p-6">
              <PaymentElement 
                options={{
                  layout: {
                    type: "tabs",
                    defaultCollapsed: false,
                  },
                  defaultValues: {
                    billingDetails: {
                      name: customerName,
                      address: {
                        country: "AU",
                      },
                    },
                  },
                  business: {
                    name: "SorryBoss",
                  },
                }}
              />
            </div>
          </div>

          {message && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              {message}
            </div>
          )}

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 py-4 text-sm text-[#6B6560]">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>256-bit encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Secure checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>PCI compliant</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!stripe || isProcessing}
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl text-lg font-semibold bg-[#E8B931] text-[#1A1A1A] hover:bg-[#d4a82a] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#E8B931]/20"
          >
            {isProcessing ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </>
            ) : (
              <>
                <Lock className="w-5 h-5" />
                Authorize Payment
              </>
            )}
          </button>

          <p className="text-center text-sm text-[#6B6560]">
            By continuing, you agree to our Terms of Service
          </p>
        </form>
      </div>

      {/* Order Summary - Right Side */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden sticky top-8">
          <div className="px-6 py-4 bg-[#FDF8EE] border-b border-black/5">
            <h3 className="font-semibold text-[#1A1A1A]">Order Summary</h3>
          </div>
          
          <div className="p-6 space-y-6">
            {/* Service */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium text-[#1A1A1A]">Pharmacist Consultation</p>
                  <p className="text-sm text-[#6B6560]">Absence from Work Certificate</p>
                </div>
                <p className="font-semibold text-[#1A1A1A]">${(amount / 100).toFixed(2)}</p>
              </div>
            </div>

            <hr className="border-black/5" />

            {/* Appointment Details */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#3D8B37]/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#3D8B37]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1A1A1A]">Appointment Confirmed</p>
                  <p className="text-sm text-[#6B6560]">{formatDate(appointmentDate)}</p>
                  <p className="text-sm text-[#6B6560]">{appointmentTime} AEDT</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E8B931]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#E8B931]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1A1A1A]">We&apos;ll call you</p>
                  <p className="text-sm text-[#6B6560]">{customerPhone}</p>
                </div>
              </div>
            </div>

            <hr className="border-black/5" />

            {/* Total */}
            <div className="flex justify-between items-center">
              <span className="font-semibold text-[#1A1A1A]">Total</span>
              <span className="text-2xl font-bold text-[#1A1A1A]">${(amount / 100).toFixed(2)}</span>
            </div>

            {/* No charge notice */}
            <div className="p-4 rounded-xl bg-[#3D8B37]/5 border border-[#3D8B37]/20">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3D8B37] flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-[#3D8B37]">No charge yet</p>
                  <p className="text-[#6B6560] mt-1">
                    Your card is only charged if we issue a certificate. No cert = no charge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentForm({ 
  clientSecret, 
  consultationId, 
  amount,
  customerName,
  customerPhone,
  appointmentDate,
  appointmentTime, 
  onSuccess, 
  onError 
}: PaymentFormProps) {
  const appearance = {
    theme: "flat" as const,
    variables: {
      colorPrimary: "#1A1A1A",
      colorBackground: "#FAFAF9",
      colorText: "#1A1A1A",
      colorDanger: "#dc2626",
      fontFamily: "system-ui, -apple-system, sans-serif",
      fontSizeBase: "16px",
      spacingUnit: "4px",
      borderRadius: "12px",
      colorTextPlaceholder: "#9CA3AF",
    },
    rules: {
      ".Input": {
        border: "1px solid #E5E5E5",
        boxShadow: "none",
        padding: "14px 16px",
        backgroundColor: "#FAFAF9",
        transition: "border-color 0.2s, box-shadow 0.2s",
      },
      ".Input:hover": {
        border: "1px solid #D4D4D4",
      },
      ".Input:focus": {
        border: "1px solid #1A1A1A",
        boxShadow: "0 0 0 3px rgba(26,26,26,0.08)",
      },
      ".Input--invalid": {
        border: "1px solid #dc2626",
      },
      ".Label": {
        fontWeight: "500",
        fontSize: "14px",
        marginBottom: "8px",
        color: "#1A1A1A",
      },
      ".Tab": {
        border: "1px solid #E5E5E5",
        borderRadius: "12px",
        backgroundColor: "#FAFAF9",
        padding: "12px 16px",
      },
      ".Tab:hover": {
        border: "1px solid #D4D4D4",
        backgroundColor: "#F5F5F4",
      },
      ".Tab--selected": {
        border: "2px solid #1A1A1A",
        backgroundColor: "#FFFFFF",
      },
      ".TabIcon": {
        fill: "#1A1A1A",
      },
      ".TabLabel": {
        fontWeight: "500",
      },
      ".Error": {
        color: "#dc2626",
        fontSize: "14px",
        marginTop: "8px",
      },
    },
  };

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance,
        loader: "auto",
      }}
    >
      <CheckoutForm
        consultationId={consultationId}
        amount={amount}
        customerName={customerName}
        customerPhone={customerPhone}
        appointmentDate={appointmentDate}
        appointmentTime={appointmentTime}
        onSuccess={onSuccess}
        onError={onError}
      />
    </Elements>
  );
}
