"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { AlertCircle, Lock, CheckCircle } from "lucide-react";

// Load Stripe outside of component to avoid recreating on every render
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface PaymentFormProps {
  clientSecret: string;
  consultationId: string;
  amount: number;
  onSuccess: () => void;
  onError: (error: string) => void;
}

function CheckoutForm({ consultationId, amount, onSuccess, onError }: Omit<PaymentFormProps, "clientSecret">) {
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
    } else if (paymentIntent && paymentIntent.status === "requires_capture") {
      // Payment authorized successfully (manual capture mode)
      onSuccess();
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      onSuccess();
    } else {
      setMessage("Something went wrong");
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-6 rounded-2xl bg-white border border-black/10">
        <div className="flex items-center gap-2 mb-4 text-sm text-[#6B6560]">
          <Lock className="w-4 h-4" />
          Secure payment powered by Stripe
        </div>
        
        <PaymentElement 
          options={{
            layout: "tabs",
            defaultValues: {
              billingDetails: {
                address: {
                  country: "AU",
                },
              },
            },
          }}
        />
      </div>

      {message && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          {message}
        </div>
      )}

      <div className="p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3 text-green-800">
        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div className="text-sm">
          <strong>No charge yet.</strong> Your card will only be charged ${(amount / 100).toFixed(2)} if our pharmacist issues a certificate. 
          If they can&apos;t issue one, you pay nothing.
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-semibold bg-[#E8B931] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
            Authorize ${(amount / 100).toFixed(2)}
          </>
        )}
      </button>
    </form>
  );
}

export default function PaymentForm({ clientSecret, consultationId, amount, onSuccess, onError }: PaymentFormProps) {
  const appearance = {
    theme: "stripe" as const,
    variables: {
      colorPrimary: "#1A1A1A",
      colorBackground: "#ffffff",
      colorText: "#1A1A1A",
      colorDanger: "#dc2626",
      fontFamily: "system-ui, sans-serif",
      spacingUnit: "4px",
      borderRadius: "12px",
    },
    rules: {
      ".Input": {
        border: "1px solid rgba(0,0,0,0.1)",
        padding: "12px 16px",
      },
      ".Input:focus": {
        border: "1px solid #1A1A1A",
        boxShadow: "0 0 0 2px rgba(26,26,26,0.1)",
      },
      ".Label": {
        fontWeight: "500",
        marginBottom: "8px",
      },
    },
  };

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance,
      }}
    >
      <CheckoutForm
        consultationId={consultationId}
        amount={amount}
        onSuccess={onSuccess}
        onError={onError}
      />
    </Elements>
  );
}
