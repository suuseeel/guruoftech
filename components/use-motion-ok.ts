"use client";

import { useEffect, useState } from "react";

export function useMotionOk() {
  const [motionOk, setMotionOk] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reads a browser media query, unavailable during render
    setMotionOk(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return motionOk;
}
