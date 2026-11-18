// ─── Domain types ─────────────────────────────────────────────────────────────

export type Lang = "it" | "en";

export interface Translation {
  nav: string[];
  navLabels: Record<string, string>;
  skipLink: string;
  status: string;
  unitLine: string;
  typewriter: string[];
  heroBio1: [string, string, string];
  heroBio2: [string, string, string];
  heroScroll: string;
  stackMod: string;
  stackSys: string;
  stackTitle: string;
  stackSub: string;
  projMod: string;
  projSys: string;
  projTitle: string;
  projSub: string;
  contactMod: string;
  location: string;
  copyright: string;
  linkedin: string;
  github: string;
  codeberg: string;
  recentCourses: string;
}

export interface StackGroup {
  id: string;
  label: string;
  items: string[];
}

export interface ExperienceEntry {
  id: string;
  period: string;
  location: string;
  role: string;
  company: string;
  active: boolean;
  items: string[];
}

export type ProjectStatus = "OPERATIONAL" | "STABLE";

export interface Project {
  id: string;
  emoji: string;
  title: string;
  desc: string;
  tags: string[];
  accent: string;
  status: ProjectStatus;
  repo: string | any;
  mirror: string | any;
}

export interface EducationEntry {
  year: string;
  title: string;
  desc: string;
}

// ─── Canvas types ─────────────────────────────────────────────────────────────

export interface Star {
  x: number;
  y: number;
  r: number;
  speed: number;
  phase: number;
  op: number;
}

export interface PlanetConfig {
  speed: number;
  xFrac: number;
  r: number;
  draw: (
    ctx: CanvasRenderingContext2D,
    px: number,
    py: number,
    r: number,
    t: number
  ) => void;
}

export type UfoPhase = "idle" | "appearing" | "flying" | "disappearing";

export interface UfoState {
  active: boolean;
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  r: number;
  opacity: number;
  phase: UfoPhase;
  nextAppear: number;
  lastT: number;
}

export interface IntroLine {
  text: string;
  status: string;
}

export interface Translation {
  // ...i campi che hai già...
  bootAria: string;
  bootProgress: string;
  bootSkip: string;
  bootLines: IntroLine[];
  introAria: string;
  introEyebrow: string;
  introHint: string;
  introLabel: string;
  introLocked: string;
  introOpen: string;
  introLines: IntroLine[];
}
