"use client";

import { useState, type FC } from "react";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  p: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ p }) => {
  const [hov, setHov] = useState(false);
  const sc = p.status === "OPERATIONAL" ? "#00FFD1" : "#FF9500";

  const links = [
    p.repo   ? { label: "GitHub",   url: p.repo   } : null,
    p.mirror ? { label: "Codeberg", url: p.mirror } : null,
  ].filter(Boolean) as { label: string; url: string }[];

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="
        relative flex h-full flex-col overflow-hidden transition-all
        duration-200
      "
      style={{
        background: hov ? p.accent + "08" : "rgba(5,15,26,0.85)",
        border: `1px solid ${hov ? p.accent : "#0D2A44"}`,
        padding: 28,
        gap: 16,
        cursor: "none",
        boxShadow: hov ? `0 0 20px ${p.accent}22` : "none",
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center" style={{ gap: 10 }}>
          <span style={{ fontSize: 22 }}>{p.emoji}</span>
          <span className="font-mono" style={{ fontSize: 10, color: "#4A7A9B", letterSpacing: 2 }}>{p.id}</span>
        </div>
        <div className="flex items-center" style={{ gap: 6 }}>
          <div className="rounded-full" style={{ width: 6, height: 6, background: sc, boxShadow: `0 0 6px ${sc}` }} />
          <span className="font-mono" style={{ fontSize: 9, color: sc, letterSpacing: 2 }}>{p.status}</span>
        </div>
      </div>

      <h3
        className="transition-colors duration-200"
        style={{ fontWeight: 700, fontSize: 17, color: hov ? p.accent : "#C8E8FF", letterSpacing: 1 }}
      >
        {p.title}
      </h3>

      <p className="flex-1 font-mono" style={{ fontSize: 12, color: "#4A7A9B", lineHeight: 1.75 }}>
        {p.desc}
      </p>

      <div className="flex flex-wrap" style={{ gap: 6 }}>
        {p.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono"
            style={{ fontSize: 10, color: p.accent, border: `1px solid ${p.accent}55`, padding: "2px 10px", background: p.accent + "0A" }}
          >
            {tag}
          </span>
        ))}
      </div>

      {links.length > 0 && (
        <div className="flex" style={{ gap: 16, paddingTop: 12, borderTop: "1px solid #0D2A44" }}>
          {links.map(({ label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="font-mono no-underline transition-colors duration-150"
              style={{ fontSize: 10, color: "#4A7A9B", letterSpacing: 1.5 }}
              onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = "#00FFD1"; }}
              onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = "#4A7A9B"; }}
            >
              {`↗ ${label}`}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
