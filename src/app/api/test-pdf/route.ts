import { NextResponse } from "next/server";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export const runtime = "nodejs";

export async function GET() {
  try {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595, 842]);
    const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
    
    page.drawText("Test Certificate", {
      x: 50,
      y: 750,
      size: 24,
      font: helvetica,
      color: rgb(0, 0, 0),
    });
    
    page.drawText("This is a test PDF generated on Vercel", {
      x: 50,
      y: 700,
      size: 14,
      font: helvetica,
      color: rgb(0.4, 0.4, 0.4),
    });
    
    page.drawText(`Generated at: ${new Date().toISOString()}`, {
      x: 50,
      y: 650,
      size: 12,
      font: helvetica,
      color: rgb(0.6, 0.6, 0.6),
    });

    const pdfBytes = await pdfDoc.save();
    
    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="test.pdf"',
      },
    });
  } catch (error) {
    console.error("Test PDF error:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "PDF generation failed", details: errorMessage },
      { status: 500 }
    );
  }
}
