import type { LucideIcon } from "lucide-react";

export type Offering = { icon: LucideIcon; title: string; desc: string };

export type Step = { icon?: LucideIcon; title: string; items?: string[] };
