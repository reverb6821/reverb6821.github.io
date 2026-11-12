"use client";

import { useEffect, useState, type FC } from "react";

interface TypeWriterProps {
  strings: string[];
  speed?: number;
  pause?: number;
}

const TypeWriter: FC<TypeWriterProps> = ({ strings, speed = 75, pause = 2000 }) => {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const cur = strings[idx % strings.length];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= cur.length) {
      timer = setTimeout(() => {
        setDisplay(cur.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timer = setTimeout(() => {
        setDisplay(cur.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % strings.length);
    }

    return () => clearTimeout(timer);
  }, [charIdx, deleting, idx, strings, speed, pause]);

  return (
    <span>
      {display}
      <span style={{ color: "#00FFD1", animation: "blink 1s step-end infinite" }}>█</span>
    </span>
  );
};

export default TypeWriter;
