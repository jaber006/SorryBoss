import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendBookingConfirmationEmail, sendAdminNotificationEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const { consultationId } = await request.json();

    if (!consultationId) {
      return NextResponse.json(
        { error: "Missing consultationId" },
        { status: 400 }
      );
    }

    // Get consultation details
    const consultation = await prisma.consultation.findUnique({
      where: { id: consultationId },
    });

    if (!consultation) {
      return NextResponse.json(
        { error: "Consultation not found" },
        { status: 404 }
      );
    }

    // Check if already processed (avoid duplicate emails)
    if (consultation.status === "scheduled" && consultation.paymentStatus === "authorized") {
      // Already processed, just return the data
      return NextResponse.json({
        firstName: consultation.firstName,
        email: consultation.email,
        phone: consultation.phone,
        preferredCallTime: consultation.preferredCallTime.toISOString(),
        leaveType: consultation.leaveType,
      });
    }

    // Update consultation status
    await prisma.consultation.update({
      where: { id: consultationId },
      data: {
        status: "scheduled",
        paymentStatus: "authorized",
      },
    });

    // Create audit log
    await prisma.auditLog.create({
      data: {
        action: "payment.authorized",
        entityType: "Consultation",
        entityId: consultationId,
        performedBy: "payment_form",
        details: JSON.stringify({ consultationId }),
      },
    });

    // Send booking confirmation email
    try {
      await sendBookingConfirmationEmail({
        to: consultation.email,
        firstName: consultation.firstName,
        phone: consultation.phone,
        preferredCallTime: consultation.preferredCallTime,
        leaveType: consultation.leaveType,
      });
    } catch (emailError) {
      console.error("Booking confirmation email failed:", emailError);
      // Don't fail the request if email fails
    }

    // Send admin notification email
    try {
      await sendAdminNotificationEmail({
        firstName: consultation.firstName,
        lastName: consultation.lastName,
        phone: consultation.phone,
        email: consultation.email,
        preferredCallTime: consultation.preferredCallTime,
        leaveType: consultation.leaveType,
        symptoms: consultation.symptoms,
      });
    } catch (emailError) {
      console.error("Admin notification email failed:", emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      firstName: consultation.firstName,
      email: consultation.email,
      phone: consultation.phone,
      preferredCallTime: consultation.preferredCallTime.toISOString(),
      leaveType: consultation.leaveType,
    });
  } catch (error) {
    console.error("Confirm payment error:", error);
    return NextResponse.json(
      { error: "Failed to confirm booking" },
      { status: 500 }
    );
  }
}
