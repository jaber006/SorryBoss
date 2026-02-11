import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const status = request.nextUrl.searchParams.get("status") || "all";

    const where = status === "all" 
      ? {} 
      : { status };

    const consultations = await prisma.consultation.findMany({
      where,
      orderBy: [
        { preferredCallTime: "asc" },
        { createdAt: "desc" },
      ],
      select: {
        id: true,
        createdAt: true,
        leaveType: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        dateOfBirth: true,
        symptoms: true,
        preferredCallTime: true,
        status: true,
        paymentStatus: true,
        careRecipientName: true,
        careRelationship: true,
        certificate: {
          select: {
            id: true,
            verificationCode: true,
          },
        },
      },
    });

    return NextResponse.json({ consultations });
  } catch (error) {
    console.error("Admin consultations error:", error);
    return NextResponse.json(
      { error: "Failed to fetch consultations" },
      { status: 500 }
    );
  }
}
