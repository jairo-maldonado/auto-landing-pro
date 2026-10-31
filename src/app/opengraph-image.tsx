import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} | Taller mecánico en Santiago`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const highlights = [
  "Diagnóstico electrónico",
  "Mantenimiento preventivo",
  "Frenos y suspensión",
];

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
          background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 6,
            color: "#fb923c",
          }}
        >
          {siteConfig.address.toUpperCase()}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 38,
              color: "#d1d5db",
            }}
          >
            Cuidado experto y transparente para tu auto
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          {highlights.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                padding: "12px 20px",
                borderRadius: 999,
                border: "2px solid #fb923c",
                color: "#fdba74",
                fontSize: 24,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}