import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      leaveType,
      firstName,
      lastName,
      email,
      phone,
      dateOfBirth,
      careRecipientName,
      careRelationship,
      symptoms,
      symptomDetails,
      symptomStartDate,
      daysRequested,
      preferredCallTime,
    } = body;

    // Validate required fields
    if (!leaveType || !firstName || !lastName || !email || !phone || !dateOfBirth || !symptoms || !preferredCallTime) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create consultation record
    const consultation = await prisma.consultation.create({
      data: {
        leaveType,
        firstName,
        lastName,
        email,
        phone,
        dateOfBirth: new Date(dateOfBirth),
        careRecipientName: careRecipientName || null,
        careRelationship: careRelationship || null,
        symptoms: JSON.stringify(symptoms),
        symptomDetails: symptomDetails || null,
        symptomStartDate: new Date(symptomStartDate),
        daysRequested: daysRequested || 1,
        preferredCallTime: new Date(preferredCallTime),
        termsAcceptedAt: new Date(),
        status: "pending",
        paymentStatus: "pending",
        amountCents: 2495,
      },
    });

    // Create audit log
    await prisma.auditLog.create({
      data: {
        action: "consultation.created",
        entityType: "Consultation",
        entityId: consultation.id,
        performedBy: "customer",
        details: JSON.stringify({ email, leaveType }),
      },
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "aud",
            product_data: {
              name: leaveType === "carer" 
                ? "Carer's Leave Certificate Consultation" 
                : "Personal Leave Certificate Consultation",
              description: "Phone consultation with AHPRA-registered pharmacist. You will only be charged if a certificate is issued.",
            },
            unit_amount: 2495, // $24.95 in cents
          },
          quantity: 1,
        },
      ],
      payment_intent_data: {
        capture_method: "manual", // Authorize only, capture later when cert is issued
        metadata: {
          consultationId: consultation.id,
        },
      },
      metadata: {
        consultationId: consultation.id,
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/book/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/book/${leaveType}?cancelled=true`,
    });

    // Update consultation with payment intent
    await prisma.consultation.update({
      where: { id: consultation.id },
      data: {
        stripePaymentIntentId: session.payment_intent as string,
        paymentStatus: "authorized",
      },
    });

    return NextResponse.json({
      consultationId: consultation.id,
      checkoutUrl: session.url,
    });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
