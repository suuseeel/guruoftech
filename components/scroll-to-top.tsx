"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/*
 * The header sits above <main>, so Next.js scrolls a new page's first
 * element to the top of the viewport, which hides the top of the page by
 * the header's height. On every route change we reset to 0 instead.
 * Hash links (e.g. /ai#rag-development) are left alone so they still
 * jump to their target.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return;
    const reset = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    reset();
    const id = window.requestAnimationFrame(reset);
    const t = window.setTimeout(reset, 120);
    return () => {
      window.cancelAnimationFrame(id);
      window.clearTimeout(t);
    };
  }, [pathname]);

  return null;
}
