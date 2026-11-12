import type { ProjectStatus } from "@/types/portfolio";

// ─── Socials ──────────────────────────────────────────────────────────────────

export const SOCIALS = {
  linkedin: "https://linkedin.com/in/reverb6821",
  github:   "https://github.com/reverb6821",
  codeberg: "https://codeberg.org/reverb6821",
} as const;

// ─── Nav ──────────────────────────────────────────────────────────────────────

export const NAV = [
  "stack",
  "progetti",
  "contatti",
] as const;

export type NavItem = (typeof NAV)[number];

// ─── Projects meta ────────────────────────────────────────────────────────────
// desc is localised — lives in messages/{it,en}.json under portfolio.projects[].desc

export interface ProjectMeta {
  id: string;
  emoji: string;
  title: string;
  tags: string[];
  accent: string;
  status: ProjectStatus;
  repo: string | undefined;
  mirror: string | undefined;
}

export const PROJECTS_META: ProjectMeta[] = [
  {
    id: "SYS-01", emoji: "⚡", title: "autoclose-taggerplus",
    tags: ["TypeScript", "VS Code API"],
    accent: "#FF4500", status: "STABLE",
    repo:   "https://github.com/reverb6821/autoclose-taggerplus-extensions",
    mirror: undefined,
  },
  {
    id: "SYS-02", emoji: "✂️", title: "cosmo-snippet",
    tags: ["TypeScript", "VS Code API"],
    accent: "#00FFD1", status: "STABLE",
    repo:   "https://github.com/reverb6821/cosmo-snippet",
    mirror: undefined,
  },
  {
    id: "SYS-03", emoji: "🧩", title: "andromeda",
    tags: ["Web Components", "Lit", "CSS", "Turborepo"],
    accent: "#0066FF", status: "OPERATIONAL",
    repo:   "https://github.com/reverb6821/andromeda",
    mirror: undefined,
  },
  {
    id: "SYS-04", emoji: "🛰️", title: "Portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Canvas API"],
    accent: "#7B61FF", status: "STABLE",
    repo:   "https://github.com/reverb6821/reverb6821.github.io",
    mirror: undefined,
  },
  {
    id: "SYS-05", emoji: "🌌", title: "Nebula",
    tags: ["System monitoring", "CPU & network", "Thermals", "Services & daemons", "Docker"],
    accent: "#0066FF", status: "STABLE",
    repo:   "https://github.com/reverb6821/nebula",
    mirror: undefined,
  },
];
