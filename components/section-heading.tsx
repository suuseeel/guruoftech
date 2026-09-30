import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="eyebrow-badge">
          {eyebrow}
        </span>
      )}
      <h2 className="text-h2 mt-4 font-semibold tracking-tight">{title}</h2>
      {description && <p className="text-body-lg mt-4 text-muted">{description}</p>}
    </Reveal>
  );
}

export function SectionHeadingLeft({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}>
      {eyebrow && (
        <span className="eyebrow-badge">
          {eyebrow}
        </span>
      )}
      <h2 className="text-h2 mt-4 font-semibold tracking-tight">{title}</h2>
      {description && <p className="text-body-lg mt-4 text-muted">{description}</p>}
    </Reveal>
  );
}
