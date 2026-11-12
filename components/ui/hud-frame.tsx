"use client";

import type { CSSProperties, FC, ReactNode } from "react";

interface HudFrameProps {
  children: ReactNode;
  color?: string;
  size?: number;
  style?: CSSProperties;
}

const HudFrame: FC<HudFrameProps> = ({
  children,
  color = "#00FFD133",
  size = 14,
  style = {},
}) => {
  const b: CSSProperties = { position: "absolute", width: size, height: size };
  const s: CSSProperties = { border: `1px solid ${color}` };
  return (
    <div className="relative" style={style}>
      <div className="absolute" style={{ ...b, top: 0, left: 0, borderRight: "none", borderBottom: "none", ...s }} />
      <div className="absolute" style={{ ...b, top: 0, right: 0, borderLeft: "none", borderBottom: "none", ...s }} />
      <div className="absolute" style={{ ...b, bottom: 0, left: 0, borderRight: "none", borderTop: "none", ...s }} />
      <div className="absolute" style={{ ...b, bottom: 0, right: 0, borderLeft: "none", borderTop: "none", ...s }} />
      {children}
    </div>
  );
};

export default HudFrame;
