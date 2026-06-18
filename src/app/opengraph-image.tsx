import { ImageResponse } from "next/og";

import { SITE } from "@/lib/constants";

// next/og re-exports the @vercel/og ImageResponse. This file-based convention
// auto-populates og:image and twitter:image for every route.
export const alt = `${SITE.name}, ${SITE.role} in ${SITE.location}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 28% 22%, #15181b, #070808 62%)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#5ff7d2",
          }}
        >
          {SITE.role}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          {SITE.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 40,
            lineHeight: 1.3,
            color: "#9aa0a6",
            maxWidth: 920,
          }}
        >
          I build websites that help businesses get found and contacted.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 64,
            fontSize: 28,
            color: "#6b7176",
          }}
        >
          jaskarnnijjar.com
        </div>
      </div>
    ),
    { ...size },
  );
}
