"use client";

import type { CSSProperties, FC } from "react";
import type { Translation } from "@/types/portfolio";
import { useTranslations } from "next-intl";
import SectionLabel from "./ui/section-label";
import Reveal from "./ui/reveal";

interface StackSectionProps {
  t: Translation;
}

interface StackGroupJson {
  id: string;
  label: string;
  items: string[];
}

const orbitron: CSSProperties = { fontFamily: "'Orbitron',sans-serif" };
const mono: CSSProperties = { fontFamily: "'Share Tech Mono',monospace" };

const StackSection: FC<StackSectionProps> = ({ t }) => {
  const intl = useTranslations("portfolio");
  const groups = intl.raw("stack") as StackGroupJson[];

  return (
    <section
      id="stack"
      className="relative"
      style={{ background: "rgba(5,15,26,0.6)", padding: "90px clamp(16px,4vw,48px)", zIndex: 2 }}
    >
      <div className="mx-auto" style={{ maxWidth: 1100 }}>
        <SectionLabel mod={t.stackMod} sys={t.stackSys} title={t.stackTitle} sub={t.stackSub} />
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "40px 48px" }}
        >
          {groups.map((g, gi) => (
            <Reveal key={g.id} delay={gi * 60}>
              <div>
                <div
                  className="flex justify-between items-center"
                  style={{ marginBottom: 14, paddingBottom: 10, borderBottom: "1px solid #0D2A44" }}
                >
                  <h3 style={{ ...orbitron, fontSize: 11, fontWeight: 700, color: "#C8E8FF", letterSpacing: 1.5 }}>
                    {g.label}
                  </h3>
                  <span style={{ ...mono, fontSize: 9, color: "#00FFD155", letterSpacing: 2 }}>{g.id}</span>
                </div>
                <ul className="list-none flex flex-col" style={{ gap: 7 }}>
                  {g.items.map((item) => (
                    <li key={item} className="flex items-center" style={{ gap: 8, fontSize: 12, color: "#4A7A9B" }}>
                      <span style={{ color: "#00FFD133", fontSize: 8 }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackSection;