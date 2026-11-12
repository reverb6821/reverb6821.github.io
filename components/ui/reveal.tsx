"use client";

import { useEffect, useRef, useState, type FC, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

const Reveal: FC<RevealProps> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setVis(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(20px)",
        transition:
          "opacity 300ms var(--ease-out-quint), transform 300ms var(--ease-out-quint)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
