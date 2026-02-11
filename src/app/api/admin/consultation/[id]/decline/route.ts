import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-01-28.clover",
});

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { reason, notes } = body;

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

    // Cancel/refund the payment
    if (consultation.stripePaymentIntentId) {
      try {
        await stripe.paymentIntents.cancel(consultation.stripePaymentIntentId);
      } catch (cancelError) {
        console.error("Payment cancel failed:", cancelError);
        // If cancel fails, try to refund
        try {
          await stripe.refunds.create({
            payment_intent: consultation.stripePaymentIntentId,
          });
        } catch (refundError) {
          console.error("Refund failed:", refundError);
        }
      }
    }

    // Update consultation
    await prisma.consultation.update({
      where: { id },
      data: {
        status: "declined",
        paymentStatus: "refunded",
        declineReason: reason,
        pharmacistNotes: notes,
        callEndedAt: new Date(),
      },
    });

    // Audit log
    await prisma.auditLog.create({
      data: {
        action: "consultation.declined",
        entityType: "Consultation",
        entityId: id,
        performedBy: "pharmacist",
        details: JSON.stringify({ reason }),
      },
    });

    // TODO: Send email to customer about decline/refund

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Decline consultation error:", error);
    return NextResponse.json(
      { error: "Failed to decline consultation" },
      { status: 500 }
    );
  }
}
