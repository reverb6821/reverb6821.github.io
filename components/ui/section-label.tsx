"use client";

import type { FC } from "react";

interface SectionLabelProps {
  mod: string;
  sys: string;
  title: string;
  sub?: string;
}

const SectionLabel: FC<SectionLabelProps> = ({ mod, sys, title, sub }) => (
  <div className="mb-12">
    <div className="flex justify-between mb-2">
      <span className="font-mono" style={{ fontSize: 10, color: "#4A7A9B", letterSpacing: 3 }}>
        {mod}
      </span>
      <span className="font-mono" style={{ fontSize: 10, color: "#4A7A9B", letterSpacing: 3 }}>
        {sys}
      </span>
    </div>
    <h2
      className="mb-3"
      style={{ fontWeight: 900, fontSize: "clamp(22px,3vw,38px)", color: "#C8E8FF", letterSpacing: 1 }}
    >
      {title}
    </h2>
    {sub && (
      <p
        className="max-w-xl"
        style={{ fontFamily: "monospace", fontSize: 13, color: "#4A7A9B", lineHeight: 1.7 }}
      >
        {sub}
      </p>
    )}
  </div>
);

export default SectionLabel;
