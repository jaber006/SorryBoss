import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { generateCertificatePDF } from "@/lib/certificate";
import { sendCertificateEmail } from "@/lib/email";

export async function POST(
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

    // Send email
    await sendCertificateEmail({
      to: consultation.email,
      firstName: consultation.firstName,
      verificationCode: cert.verificationCode,
      pdfBuffer,
      leaveType: consultation.leaveType,
    });

    // Update certificate record
    await prisma.certificate.update({
      where: { id: cert.id },
      data: {
        emailedAt: new Date(),
        emailedTo: consultation.email,
      },
    });

    // Audit log
    await prisma.auditLog.create({
      data: {
        action: "certificate.email_resent",
        entityType: "Certificate",
        entityId: cert.id,
        performedBy: "pharmacist",
        details: JSON.stringify({
          consultationId: id,
          emailedTo: consultation.email,
        }),
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend email error:", error);
    return NextResponse.json(
      { error: "Failed to resend email" },
      { status: 500 }
    );
  }
}
