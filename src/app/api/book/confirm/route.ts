import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import Stripe from "stripe";
import { sendBookingConfirmationEmail } from "@/lib/email";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-01-28.clover",
});

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Missing session_id" },
        { status: 400 }
      );
    }

    // Retrieve the checkout session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session.metadata?.consultationId) {
      return NextResponse.json(
        { error: "Invalid session" },
        { status: 400 }
      );
    }

    // Get consultation details
    const consultation = await prisma.consultation.findUnique({
      where: { id: session.metadata.consultationId },
      select: {
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        preferredCallTime: true,
        leaveType: true,
      },
    });

    if (!consultation) {
      return NextResponse.json(
        { error: "Consultation not found" },
        { status: 404 }
      );
    }

    // Update consultation status if payment successful
    if (session.payment_status === "paid" || session.payment_intent) {
      await prisma.consultation.update({
        where: { id: session.metadata.consultationId },
        data: {
          status: "scheduled",
          paymentStatus: "authorized",
          stripePaymentIntentId: session.payment_intent as string,
        },
      });

      // Create audit log
      await prisma.auditLog.create({
        data: {
          action: "payment.authorized",
          entityType: "Consultation",
          entityId: session.metadata.consultationId,
          performedBy: "stripe",
          details: JSON.stringify({ 
            sessionId,
            paymentIntent: session.payment_intent,
          }),
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
    }

    return NextResponse.json({
      firstName: consultation.firstName,
      email: consultation.email,
      phone: consultation.phone,
      preferredCallTime: consultation.preferredCallTime.toISOString(),
      leaveType: consultation.leaveType,
    });
  } catch (error) {
    console.error("Confirm error:", error);
    return NextResponse.json(
      { error: "Failed to confirm booking" },
      { status: 500 }
    );
  }
}
