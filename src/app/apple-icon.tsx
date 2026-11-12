import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff" }}>
        <svg width="140" height="140" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="24" fill="none" stroke="#13202f" strokeWidth="5" />
          <path d="M15 33c4.5 0 5.5-11 10-11s5.5 20 10 20 5.5-15 10-15 3.5 6 5 6" fill="none" stroke="#d97706" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="49.5" cy="14.5" r="7" fill="#d97706" stroke="#ffffff" strokeWidth="3.5" />
        </svg>
      </div>
    ),
    size,
  );
}
