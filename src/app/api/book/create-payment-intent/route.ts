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

    // Create Payment Intent (authorize only, capture later)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2495, // $24.95 in cents
      currency: "aud",
      capture_method: "manual", // Authorize only, capture when cert is issued
      receipt_email: email,
      metadata: {
        consultationId: consultation.id,
        leaveType,
        customerName: `${firstName} ${lastName}`,
      },
      description: leaveType === "carer" 
        ? "Carer's Leave Certificate Consultation" 
        : "Personal Leave Certificate Consultation",
    });

    // Update consultation with payment intent
    await prisma.consultation.update({
      where: { id: consultation.id },
      data: {
        stripePaymentIntentId: paymentIntent.id,
      },
    });

    return NextResponse.json({
      consultationId: consultation.id,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Payment intent error:", error);
    return NextResponse.json(
      { error: "Failed to create payment" },
      { status: 500 }
    );
  }
}
