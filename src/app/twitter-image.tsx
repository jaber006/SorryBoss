import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "SorryBoss - Sick Certificate in Minutes";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 60px",
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-2px",
            }}
          >
            SorryBoss
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 36,
            color: "#94a3b8",
            marginBottom: 40,
            textAlign: "center",
          }}
        >
          Sick Certificate in Minutes
        </div>

        {/* Features */}
        <div
          style={{
            display: "flex",
            gap: 40,
            marginTop: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#ffffff",
            }}
          >
            <span style={{ fontSize: 48 }}>📱</span>
            <span style={{ fontSize: 20, color: "#94a3b8" }}>Phone Consult</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#ffffff",
            }}
          >
            <span style={{ fontSize: 48 }}>⚡</span>
            <span style={{ fontSize: 20, color: "#94a3b8" }}>Instant Cert</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#ffffff",
            }}
          >
            <span style={{ fontSize: 48 }}>💰</span>
            <span style={{ fontSize: 20, color: "#94a3b8" }}>$24.95</span>
          </div>
        </div>

        {/* Bottom text */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 24,
            color: "#64748b",
          }}
        >
          AHPRA Registered Pharmacist • Fair Work Compliant
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
