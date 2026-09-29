import type { ReactNode } from "react";
import type { Offering } from "./types";

export type ClientOffering = { iconNode: ReactNode; title: string; desc: string };

/* Icon components can't cross the server→client boundary; rendered elements can. */
export function toClientOfferings(offerings: Offering[]): ClientOffering[] {
  return offerings.map((o) => ({ iconNode: <o.icon />, title: o.title, desc: o.desc }));
}
