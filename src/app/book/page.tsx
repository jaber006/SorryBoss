"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, User, Users, Check } from "lucide-react";

type LeaveType = "personal" | "carer" | null;

export default function BookPage() {
  const [leaveType, setLeaveType] = useState<LeaveType>(null);

  return (
    <main className="min-h-screen bg-[#FDF8EE]">
      {/* Nav */}
      <nav className="px-6 md:px-10 py-5 flex items-center justify-between border-b border-black/5">
        <Link href="/" className="flex items-center gap-2 text-[#1A1A1A] no-underline" style={{ fontFamily: "'Instrument Serif', serif" }}>
          <span className="w-2.5 h-2.5 bg-[#E8B931] rounded-full" />
          <span className="text-2xl">SorryBoss</span>
        </Link>
        <Link href="/" className="flex items-center gap-2 text-sm text-[#6B6560] hover:text-[#1A1A1A] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Progress */}
        <div className="flex items-center gap-3 mb-12">
          {["Type", "Details", "Time", "Payment"].map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                i === 0 ? 'bg-[#1A1A1A] text-white' : 'bg-black/5 text-[#6B6560]'
              }`}>
                {i + 1}
              </div>
              <span className={`text-sm hidden sm:block ${i === 0 ? 'font-medium' : 'text-[#6B6560]'}`}>{step}</span>
              {i < 3 && <div className="w-8 h-px bg-black/10" />}
            </div>
          ))}
        </div>

        {/* Step 1: Choose Type */}
        <h1 
          className="text-3xl md:text-4xl font-normal tracking-tight mb-3"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          What type of certificate do you need?
        </h1>
        <p className="text-[#6B6560] mb-10">
          Select the type of leave you need a certificate for.
        </p>

        <div className="grid gap-4">
          <button
            onClick={() => setLeaveType("personal")}
            className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 ${
              leaveType === "personal" 
                ? 'border-[#1A1A1A] bg-white shadow-lg' 
                : 'border-black/10 bg-white hover:border-black/20 hover:shadow-md'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                leaveType === "personal" ? 'bg-[#E8B931]' : 'bg-black/5'
              }`}>
                <User className={`w-6 h-6 ${leaveType === "personal" ? 'text-[#1A1A1A]' : 'text-[#6B6560]'}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Personal Leave</h3>
                  {leaveType === "personal" && (
                    <div className="w-6 h-6 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <p className="text-[#6B6560] mt-1">I&apos;m unwell and can&apos;t work today</p>
                <p className="text-sm text-[#6B6560]/70 mt-2">For colds, flu, headaches, gastro, and other minor ailments</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setLeaveType("carer")}
            className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 ${
              leaveType === "carer" 
                ? 'border-[#1A1A1A] bg-white shadow-lg' 
                : 'border-black/10 bg-white hover:border-black/20 hover:shadow-md'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                leaveType === "carer" ? 'bg-[#E8B931]' : 'bg-black/5'
              }`}>
                <Users className={`w-6 h-6 ${leaveType === "carer" ? 'text-[#1A1A1A]' : 'text-[#6B6560]'}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Carer&apos;s Leave</h3>
                  {leaveType === "carer" && (
                    <div className="w-6 h-6 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <p className="text-[#6B6560] mt-1">I need to care for someone who is unwell</p>
                <p className="text-sm text-[#6B6560]/70 mt-2">For caring for a sick child, partner, parent, or household member</p>
              </div>
            </div>
          </button>
        </div>

        {/* Continue Button */}
        <div className="mt-10 flex justify-end">
          <Link
            href={leaveType ? `/book/${leaveType}` : "#"}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
              leaveType 
                ? 'bg-[#1A1A1A] text-white hover:bg-[#E8B931] hover:text-[#1A1A1A]' 
                : 'bg-black/10 text-black/30 cursor-not-allowed'
            }`}
            onClick={(e) => !leaveType && e.preventDefault()}
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Info */}
        <div className="mt-16 p-6 rounded-2xl bg-[#E8B931]/10 border border-[#E8B931]/20">
          <h4 className="font-semibold mb-2">What happens next?</h4>
          <ul className="text-sm text-[#6B6560] space-y-2">
            <li>• You&apos;ll fill in your details and symptoms</li>
            <li>• Choose a time for your pharmacist to call</li>
            <li>• Complete payment (only charged if certificate is issued)</li>
            <li>• Receive your call and get your certificate emailed</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
