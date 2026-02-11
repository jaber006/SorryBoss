import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const consultation = await prisma.consultation.update({
      where: { id },
      data: {
        status: "in_progress",
        callStartedAt: new Date(),
      },
    });

    await prisma.auditLog.create({
      data: {
        action: "call.started",
        entityType: "Consultation",
        entityId: id,
        performedBy: "pharmacist", // TODO: Get from auth
        details: JSON.stringify({ startedAt: new Date().toISOString() }),
      },
    });

    return NextResponse.json({ success: true, consultation });
  } catch (error) {
    console.error("Start call error:", error);
    return NextResponse.json(
      { error: "Failed to start call" },
      { status: 500 }
    );
  }
}
