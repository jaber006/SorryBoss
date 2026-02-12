import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import Stripe from "stripe";
import { generateCertificatePDF } from "@/lib/certificate";
import { sendCertificateEmail } from "@/lib/email";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-01-28.clover",
});

function generateVerificationCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { notes, daysToIssue } = body;

    // Get the consultation
    const consultation = await prisma.consultation.findUnique({
      where: { id },
    });

    if (!consultation) {
      return NextResponse.json(
        { error: "Consultation not found" },
        { status: 404 }
      );
    }

    if (consultation.status !== "in_progress") {
      return NextResponse.json(
        { error: "Consultation is not in progress" },
        { status: 400 }
      );
    }

    // Calculate certificate dates - always starts today (no backdating)
    const unfitFrom = new Date();
    unfitFrom.setHours(0, 0, 0, 0); // Start of today
    
    const unfitTo = new Date(unfitFrom);
    unfitTo.setDate(unfitTo.getDate() + (daysToIssue - 1)); // Add days (1 day = same day, 2 days = +1)
    
    // Ensure max 2 days
    const maxDays = 2;
    const actualDays = Math.min(daysToIssue, maxDays);

    // Generate verification code
    const verificationCode = generateVerificationCode();

    // Create certificate record
    const certificate = await prisma.certificate.create({
      data: {
        consultationId: id,
        verificationCode,
        leaveType: consultation.leaveType,
        patientName: `${consultation.firstName} ${consultation.lastName}`,
        dateOfBirth: consultation.dateOfBirth,
        careRecipientName: consultation.careRecipientName,
        careRelationship: consultation.careRelationship,
        unfitFrom,
        unfitTo,
        daysUnfit: actualDays,
        pharmacistName: process.env.PHARMACIST_NAME || "Registered Pharmacist",
        pharmacistAhpra: process.env.PHARMACIST_AHPRA || "PHA0000000000",
      },
    });

    // Update consultation
    await prisma.consultation.update({
      where: { id },
      data: {
        status: "completed",
        certificateId: certificate.id,
        callEndedAt: new Date(),
        pharmacistNotes: notes,
      },
    });

    // Capture the payment
    if (consultation.stripePaymentIntentId) {
      try {
        await stripe.paymentIntents.capture(consultation.stripePaymentIntentId);
        await prisma.consultation.update({
          where: { id },
          data: { paymentStatus: "captured" },
        });
      } catch (paymentError) {
        console.error("Payment capture failed:", paymentError);
        // Continue anyway - certificate is still issued
      }
    }

    // Generate PDF
    let pdfBuffer: Buffer | null = null;
    try {
      pdfBuffer = await generateCertificatePDF({
        verificationCode,
        patientName: `${consultation.firstName} ${consultation.lastName}`,
        dateOfBirth: consultation.dateOfBirth,
        leaveType: consultation.leaveType,
        careRecipientName: consultation.careRecipientName,
        careRelationship: consultation.careRelationship,
        unfitFrom,
        unfitTo,
        daysUnfit: actualDays,
        pharmacistName: process.env.PHARMACIST_NAME || "Registered Pharmacist",
        pharmacistAhpra: process.env.PHARMACIST_AHPRA || "PHA0000000000",
        issuedAt: new Date(),
      });
    } catch (pdfError) {
      console.error("PDF generation failed:", pdfError);
    }

    // Send email with certificate
    try {
      await sendCertificateEmail({
        to: consultation.email,
        firstName: consultation.firstName,
        verificationCode,
        pdfBuffer,
        leaveType: consultation.leaveType,
      });

      await prisma.certificate.update({
        where: { id: certificate.id },
        data: {
          emailedAt: new Date(),
          emailedTo: consultation.email,
        },
      });
    } catch (emailError) {
      console.error("Email send failed:", emailError);
    }

    // Audit log
    await prisma.auditLog.create({
      data: {
        action: "certificate.issued",
        entityType: "Certificate",
        entityId: certificate.id,
        performedBy: "pharmacist",
        details: JSON.stringify({
          consultationId: id,
          verificationCode,
          daysUnfit: actualDays,
        }),
      },
    });

    return NextResponse.json({
      success: true,
      certificateId: certificate.id,
      verificationCode,
    });
  } catch (error) {
    console.error("Issue certificate error:", error);
    return NextResponse.json(
      { error: "Failed to issue certificate" },
      { status: 500 }
    );
  }
}
