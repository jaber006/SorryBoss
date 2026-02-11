import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") || "";
    const dob = searchParams.get("dob");

    if (!query && !dob) {
      return NextResponse.json({ consultations: [] });
    }

    // Build where clause
    const where: any = {
      OR: [],
    };

    if (query) {
      where.OR.push(
        { firstName: { contains: query, mode: "insensitive" } },
        { lastName: { contains: query, mode: "insensitive" } },
        { email: { contains: query, mode: "insensitive" } },
        { phone: { contains: query } }
      );
    }

    if (dob) {
      // Parse date and search
      const dobDate = new Date(dob);
      if (!isNaN(dobDate.getTime())) {
        where.OR.push({ dateOfBirth: dobDate });
      }
    }

    // If no valid search criteria
    if (where.OR.length === 0) {
      return NextResponse.json({ consultations: [] });
    }

    const consultations = await prisma.consultation.findMany({
      where,
      include: {
        certificate: true,
      },
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    return NextResponse.json({ consultations });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { error: "Search failed" },
      { status: 500 }
    );
  }
}
