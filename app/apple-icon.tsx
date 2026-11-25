import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0D0D0C" }}>
        <span style={{ fontSize: 88, fontWeight: 700, color: "#ECEAE3", letterSpacing: -4 }}>JK</span>
        <span style={{ width: 16, height: 16, borderRadius: 8, background: "#1DB882", marginLeft: 6, marginTop: 40 }} />
      </div>
    ),
    { ...size },
  );
}
