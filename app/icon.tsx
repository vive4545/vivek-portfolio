import { ImageResponse } from "next/og";

// Generated favicon — a monogram tile. No binary asset to maintain.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#5eead4",
          color: "#04211e",
          fontSize: 19,
          fontWeight: 700,
          fontFamily: "monospace",
          borderRadius: 7,
        }}
      >
        VJ
      </div>
    ),
    { ...size },
  );
}
