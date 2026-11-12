"use client";

import type { FC } from "react";
import type { Translation } from "@/types/portfolio";
import { useTranslations } from "next-intl";
import { PROJECTS_META } from "@/lib/data";
import type { Project } from "@/types/portfolio";
import SectionLabel from "./ui/section-label";
import Reveal from "./ui/reveal";
import ProjectCard from "./project-card";

interface ProjectsSectionProps {
  t: Translation;
}

interface ProjectJson {
  id: string;
  desc: string;
}

const ProjectsSection: FC<ProjectsSectionProps> = ({ t }) => {
  const intl = useTranslations("portfolio");
  const projJson = intl.raw("projects") as ProjectJson[];

  const projects: Project[] = PROJECTS_META.map((meta) => {
    const json = projJson.find((p) => p.id === meta.id);
    return { ...meta, desc: json?.desc ?? "" };
  });

  return (
    <section
      id="progetti"
      className="relative"
      style={{ background: "rgba(5,15,26,0.6)", padding: "90px clamp(16px,4vw,48px)", zIndex: 2 }}
    >
      <div className="mx-auto" style={{ maxWidth: 1100 }}>
        <SectionLabel mod={t.projMod} sys={t.projSys} title={t.projTitle} sub={t.projSub} />
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}
        >
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
