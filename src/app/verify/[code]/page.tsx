import Link from "next/link";
import { prisma } from "@/lib/db";
import { CheckCircle, XCircle, Calendar, User, Users, Shield } from "lucide-react";

type Props = {
  params: Promise<{ code: string }>;
};

export default async function VerifyPage({ params }: Props) {
  const { code } = await params;

  const certificate = await prisma.certificate.findUnique({
    where: { verificationCode: code.toUpperCase() },
    include: {
      consultation: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
    },
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-AU", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-[#FDF8EE]">
      {/* Nav */}
      <nav className="px-6 md:px-10 py-5 flex items-center justify-between border-b border-black/5">
        <Link href="/" className="flex items-center gap-2 text-[#1A1A1A] no-underline" style={{ fontFamily: "'Instrument Serif', serif" }}>
          <span className="w-2.5 h-2.5 bg-[#E8B931] rounded-full" />
          <span className="text-2xl">SorryBoss</span>
        </Link>
      </nav>

      <div className="max-w-xl mx-auto px-6 py-16">
        {certificate ? (
          <>
            {/* Valid Certificate */}
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-[#3D8B37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-[#3D8B37]" />
              </div>
              <h1 
                className="text-3xl md:text-4xl font-normal tracking-tight mb-3"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Certificate Verified
              </h1>
              <p className="text-[#6B6560]">
                This is a valid Absence from Work Certificate issued by SorryBoss.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-black/10 overflow-hidden">
              {/* Header */}
              <div className="bg-[#1A1A1A] text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm">Verification Code</p>
                    <p className="text-xl font-mono font-bold tracking-wider">{certificate.verificationCode}</p>
                  </div>
                  <div className="w-12 h-12 bg-[#E8B931] rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 space-y-6">
                <div>
                  <p className="text-sm text-[#6B6560] mb-1">Certificate Type</p>
                  <div className="flex items-center gap-2">
                    {certificate.leaveType === "carer" ? (
                      <Users className="w-5 h-5 text-purple-600" />
                    ) : (
                      <User className="w-5 h-5 text-blue-600" />
                    )}
                    <p className="font-semibold">
                      {certificate.leaveType === "carer" ? "Carer's Leave Certificate" : "Personal Leave Certificate"}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-[#6B6560] mb-1">
                    {certificate.leaveType === "carer" ? "Carer Name" : "Patient Name"}
                  </p>
                  <p className="font-semibold text-lg">{certificate.patientName}</p>
                </div>

                {certificate.leaveType === "carer" && certificate.careRecipientName && (
                  <div>
                    <p className="text-sm text-[#6B6560] mb-1">Person Requiring Care</p>
                    <p className="font-semibold">{certificate.careRecipientName}</p>
                    <p className="text-sm text-[#6B6560]">Relationship: {certificate.careRelationship}</p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-[#6B6560] mb-1">Valid From</p>
                    <p className="font-semibold">{formatDate(certificate.unfitFrom)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6B6560] mb-1">Valid To</p>
                    <p className="font-semibold">{formatDate(certificate.unfitTo)}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-[#6B6560] mb-1">Duration</p>
                  <p className="font-semibold">{certificate.daysUnfit} day{certificate.daysUnfit > 1 ? "s" : ""}</p>
                </div>

                <hr className="border-black/10" />

                <div>
                  <p className="text-sm text-[#6B6560] mb-1">Issued By</p>
                  <p className="font-semibold">{certificate.pharmacistName}</p>
                  <p className="text-sm text-[#6B6560]">AHPRA: {certificate.pharmacistAhpra}</p>
                </div>

                <div>
                  <p className="text-sm text-[#6B6560] mb-1">Issue Date</p>
                  <p className="font-semibold">{formatDate(certificate.createdAt)}</p>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-[#6B6560] mt-8">
              This certificate was issued in accordance with the Fair Work Act 2009 (Cth) section 107(3).
            </p>
          </>
        ) : (
          <>
            {/* Invalid Certificate */}
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <XCircle className="w-10 h-10 text-red-500" />
              </div>
              <h1 
                className="text-3xl md:text-4xl font-normal tracking-tight mb-3"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Certificate Not Found
              </h1>
              <p className="text-[#6B6560] mb-8">
                We couldn&apos;t find a certificate with the code <strong className="font-mono">{code.toUpperCase()}</strong>.
              </p>
              <p className="text-sm text-[#6B6560]">
                Please check the code and try again. If you believe this is an error, contact us at support@sorryboss.com.au.
              </p>
            </div>
          </>
        )}

        <div className="text-center mt-12">
          <Link
            href="/"
            className="text-sm text-[#6B6560] hover:text-[#1A1A1A] transition-colors"
          >
            ← Back to SorryBoss
          </Link>
        </div>
      </div>
    </main>
  );
}
