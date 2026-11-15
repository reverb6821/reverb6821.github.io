"use client";

import { useTranslations } from "next-intl";
import type { IntroLine, Translation } from "@/types/portfolio";

import { usePortfolio } from "@/hooks/use-portfolio";
import { useBoot } from "@/hooks/use-boot";

import SpaceCanvas from "@/components/space-canvas";
import NavBar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import StackSection from "@/components/stack-section";
import ProjectsSection from "@/components/projects-section";
import ContactFooter from "@/components/contact-footer";
import BootIntro from "@/components/boot-intro";
import ScrollIntro from "@/components/scroll-intro";

export default function Home() {
  const intl = useTranslations("portfolio");

  // Build the Translation object that child components expect.
  // This keeps the section components decoupled from next-intl internals.
  const t: Translation = {
    nav: intl.raw("nav") as string[],
    navLabels: intl.raw("navLabels") as Record<string, string>,
    skipLink: intl("skipLink"),
    status: intl("status"),
    unitLine: intl("unitLine"),
    typewriter: intl.raw("typewriter") as string[],
    heroBio1: intl.raw("heroBio1") as [string, string, string],
    heroBio2: intl.raw("heroBio2") as [string, string, string],
    heroBtn: intl("heroBtn"),
    heroScroll: intl("heroScroll"),
    stackMod: intl("stackMod"),
    stackSys: intl("stackSys"),
    stackTitle: intl("stackTitle"),
    stackSub: intl("stackSub"),
    expMod: intl("expMod"),
    expSys: intl("expSys"),
    expTitle: intl("expTitle"),
    expSub: intl("expSub"),
    projMod: intl("projMod"),
    projSys: intl("projSys"),
    projTitle: intl("projTitle"),
    projSub: intl("projSub"),
    eduMod: intl("eduMod"),
    eduSys: intl("eduSys"),
    eduTitle: intl("eduTitle"),
    eduSub: intl("eduSub"),
    eduCard1Title: intl("eduCard1Title"),
    contactMod: intl("contactMod"),
    location: intl("location"),
    copyright: intl("copyright"),
    linkedin: intl("linkedin"),
    github: intl("github"),
    codeberg: intl("codeberg"),
    recentCourses: intl("recentCourses"),
    bootAria: intl("bootAria"),
    bootProgress: intl("bootProgress"),
    bootSkip: intl("bootSkip"),
    bootLines: intl.raw("bootLines") as IntroLine[],
    introAria: intl("introAria"),
    introEyebrow: intl("introEyebrow"),
    introHint: intl("introHint"),
    introLabel: intl("introLabel"),
    introLocked: intl("introLocked"),
    introOpen: intl("introOpen"),
    introLines: intl.raw("introLines") as IntroLine[],
  };

  const {
    scrolled,
    cursor, cursorHover, reduceCursorFx,
    activeSection,
    mobileOpen, setMobileOpen, drawerRef, drawerH,
    scrollTo,
  } = usePortfolio();
  const { booting, finishBoot } = useBoot();

  return (
    <div
      className="min-h-screen overflow-x-clip custom-cursor-root"
      style={{
        background: "#020810",
        color: "#C8E8FF",
        fontFamily: "'Share Tech Mono',monospace",
        cursor: "none",
      }}
    >
      {/* ── Accessibility skip link ── */}
      <a href="#home" className="skip-link">{t.skipLink}</a>

      {/* ── Boot intro (una volta per sessione, saltabile) ── */}
      {booting && <BootIntro t={t} onDone={finishBoot} />}

      {/* ── Custom cursor (desktop / non-touch only) ── */}
      {!reduceCursorFx && (
        <>
          <div
            className="fixed pointer-events-none"
            style={{
              left: 0, top: 0, width: 24, height: 24, zIndex: 9999,
              transform: `translate3d(${cursor.x - 12}px,${cursor.y - 12}px,0)`,
              willChange: "transform",
            }}
          >
            <div
              className="rounded-full transition-transform duration-100"
              style={{
                width: 24, height: 24,
                border: "1px solid #00FFD1",
                transform: cursorHover ? "scale(1.9)" : "scale(1)",
                boxShadow: "0 0 8px #00FFD155",
              }}
            />
          </div>
          <div
            className="fixed rounded-full pointer-events-none"
            style={{
              left: 0, top: 0, width: 4, height: 4,
              background: "#00FFD1", zIndex: 9999,
              transform: `translate3d(${cursor.x - 2}px,${cursor.y - 2}px,0)`,
              willChange: "transform",
            }}
          />
        </>
      )}

      {/* ── Animated space background ── */}
      <SpaceCanvas />

      {/* ── HUD grid overlay ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          backgroundImage:
            "linear-gradient(rgba(0,102,255,0.03) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(0,102,255,0.03) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Corner HUD brackets ── */}
      {(
        [
          { top: 12, left: 12, borderLeft: "1px solid #00FFD133", borderTop: "1px solid #00FFD133" },
          { top: 12, right: 12, borderRight: "1px solid #00FFD133", borderTop: "1px solid #00FFD133" },
          { bottom: 12, left: 12, borderLeft: "1px solid #00FFD133", borderBottom: "1px solid #00FFD133" },
          { bottom: 12, right: 12, borderRight: "1px solid #00FFD133", borderBottom: "1px solid #00FFD133" },
        ] as React.CSSProperties[]
      ).map((s, i) => (
        <div key={i} className="fixed pointer-events-none" style={{ ...s, width: 20, height: 20, zIndex: 4 }} />
      ))}

      {/* ── Navigation ── */}
      <NavBar
        t={t}
        scrolled={scrolled}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        drawerRef={drawerRef}
        drawerH={drawerH}
        activeSection={activeSection}
        scrollTo={scrollTo}
      />

      {/* ── Page sections ── */}
      <ScrollIntro t={t} />
      <HeroSection t={t} scrollTo={scrollTo} />
      <StackSection t={t} />
      <ProjectsSection t={t} />
      <ContactFooter t={t} />
    </div>
  );
}