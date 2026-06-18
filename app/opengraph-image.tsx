import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dynamically generated social card (Open Graph + Twitter share this file).
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#08080b",
          backgroundImage:
            "radial-gradient(900px circle at 80% -10%, rgba(94,234,212,0.18), transparent 60%), radial-gradient(700px circle at 0% 110%, rgba(129,140,248,0.16), transparent 55%)",
          color: "#ededf0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#5eead4",
              color: "#04211e",
              borderRadius: 16,
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            VJ
          </div>
          <div style={{ fontSize: 26, color: "#94949e" }}>{site.location}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 40, fontWeight: 600, color: "#5eead4" }}>{site.role}</div>
          <div style={{ fontSize: 28, color: "#94949e", maxWidth: 940, lineHeight: 1.4 }}>
            Scalable web apps · high-performance REST APIs · data-intensive pipelines.
          </div>
        </div>

        <div style={{ display: "flex", gap: 28, fontSize: 24, color: "#94949e" }}>
          <span>Node.js</span>
          <span>·</span>
          <span>React</span>
          <span>·</span>
          <span>Python</span>
          <span>·</span>
          <span>Django</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
