import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Deepak Bhattarai — Software Engineer & AI/ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "radial-gradient(circle at 82% 18%, rgba(34,211,238,.2), transparent 28%), linear-gradient(135deg,#07090c 0%,#0a1017 100%)",
          color: "#f8fafc",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.03em" }}>DB</div>
          <div style={{ fontSize: 18, color: "#67e8f9", letterSpacing: "0.16em", textTransform: "uppercase" }}>
            London · Software Engineering · Applied AI
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 0.94, fontWeight: 800, letterSpacing: "-0.065em" }}>
            DEEPAK
          </div>
          <div style={{ fontSize: 92, lineHeight: 0.94, fontWeight: 800, letterSpacing: "-0.065em", color: "#6b7280" }}>
            BHATTARAI
          </div>
          <div style={{ marginTop: 30, fontSize: 28, color: "#cbd5e1" }}>
            Software Engineer × AI/ML Engineer
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, color: "#94a3b8" }}>
          <span>9+ years software engineering</span>
          <span>MSc Artificial Intelligence · Distinction</span>
        </div>
      </div>
    ),
    size
  );
}
