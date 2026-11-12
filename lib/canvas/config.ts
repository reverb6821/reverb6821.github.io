import type { PlanetConfig } from "@/types/portfolio";
import { drawEarth, drawJupiter, drawMars, drawNeptune, drawSaturn } from "./planets";

export const PLANET_SECTIONS = [
  "home",
  "stack",
  "esperienza",
  "progetti",
  "formazione",
] as const;

export const PLANET_CONFIGS: PlanetConfig[] = [
  { speed: 0.32, xFrac: 0.82, r: 88, draw: drawJupiter },
  { speed: 0.28, xFrac: 0.10, r: 62, draw: drawSaturn  },
  { speed: 0.25, xFrac: 0.88, r: 44, draw: drawMars    },
  { speed: 0.22, xFrac: 0.13, r: 38, draw: drawNeptune },
  { speed: 0.20, xFrac: 0.80, r: 70, draw: drawEarth   },
];
