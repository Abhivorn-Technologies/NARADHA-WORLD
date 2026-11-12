import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#13202f", color: "#ffffff", padding: "72px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <svg width="84" height="84" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="24" fill="none" stroke="#ffffff" strokeWidth="5" />
            <path d="M15 33c4.5 0 5.5-11 10-11s5.5 20 10 20 5.5-15 10-15 3.5 6 5 6" fill="none" stroke="#d97706" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="49.5" cy="14.5" r="7" fill="#d97706" stroke="#13202f" strokeWidth="3.5" />
          </svg>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, letterSpacing: "0.06em" }}>
            NARADHA<span style={{ color: "#f0a14a", marginLeft: 12 }}>WORLD</span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>{site.tagline}</div>
        <div style={{ display: "flex", fontSize: 28, color: "rgba(255,255,255,0.75)" }}>WhatsApp replies · AI agent · Telugu AI calls · Bookings</div>
      </div>
    ),
    size,
  );
}
