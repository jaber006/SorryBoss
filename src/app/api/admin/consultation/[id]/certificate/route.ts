import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { generateCertificatePDF } from "@/lib/certificate";

// Force Node.js runtime for PDFKit compatibility
export const runtime = "nodejs";
export const maxDuration = 30;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Get the consultation with certificate
    const consultation = await prisma.consultation.findUnique({
      where: { id },
      include: { certificate: true },
    });

    if (!consultation) {
      return NextResponse.json(
        { error: "Consultation not found" },
        { status: 404 }
      );
    }

    if (!consultation.certificate) {
      return NextResponse.json(
        { error: "No certificate issued for this consultation" },
        { status: 404 }
      );
    }

    const cert = consultation.certificate;

    // Generate PDF
    const pdfBuffer = await generateCertificatePDF({
      verificationCode: cert.verificationCode,
      patientName: cert.patientName,
      dateOfBirth: cert.dateOfBirth,
      leaveType: cert.leaveType,
      careRecipientName: cert.careRecipientName,
      careRelationship: cert.careRelationship,
      unfitFrom: cert.unfitFrom,
      unfitTo: cert.unfitTo,
      daysUnfit: cert.daysUnfit,
      pharmacistName: cert.pharmacistName,
      pharmacistAhpra: cert.pharmacistAhpra,
      issuedAt: cert.createdAt,
    });

    // Return PDF
    return new NextResponse(new Uint8Array(pdfBuffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="certificate-${cert.verificationCode}.pdf"`,
      },
    });
  } catch (error) {
    console.error("Certificate download error:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : "";
    console.error("Error details:", { message: errorMessage, stack: errorStack });
    return NextResponse.json(
      { error: "Failed to generate certificate", details: errorMessage },
      { status: 500 }
    );
  }
}
