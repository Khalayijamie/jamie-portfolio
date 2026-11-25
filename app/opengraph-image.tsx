import { ImageResponse } from "next/og";

export const alt = "Jamie Khalayi Nangulu — Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0D0D0C", padding: 80 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ width: 14, height: 14, borderRadius: 7, background: "#1DB882" }} />
          <span style={{ fontSize: 28, color: "#1DB882" }}>Product Designer · Nairobi, Kenya</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 96, fontWeight: 700, color: "#ECEAE3", letterSpacing: -3, lineHeight: 1.05 }}>Jamie Khalayi</span>
          <span style={{ fontSize: 96, fontWeight: 700, color: "#ECEAE3", letterSpacing: -3, lineHeight: 1.05 }}>Nangulu</span>
          <span style={{ fontSize: 34, color: "#7A776F", marginTop: 28 }}>Design that ships. I research, prototype and build.</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
