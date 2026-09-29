"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function StatCounter({ value }: { value: string }) {
  const match = value.match(/\d+/);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const displayRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(wrapperRef, { once: true, margin: "-60px" });

  const target = match ? parseInt(match[0], 10) : null;
  const prefix = target !== null ? value.slice(0, match!.index) : "";
  const suffix = target !== null ? value.slice(match!.index! + match![0].length) : "";

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1.4, bounce: 0 });

  useEffect(() => {
    if (inView && target !== null) motionVal.set(target);
  }, [inView, target, motionVal]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (displayRef.current) displayRef.current.textContent = Math.round(v).toString();
    });
  }, [spring]);

  if (target === null) {
    return <span ref={wrapperRef}>{value}</span>;
  }

  return (
    <span ref={wrapperRef}>
      {prefix}
      <span ref={displayRef}>0</span>
      {suffix}
    </span>
  );
}
