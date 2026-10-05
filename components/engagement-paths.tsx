import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

type Path = {
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: ReactNode;
};

// Positions cards on a 6-col grid at lg: three across the top, two centered below.
const placement = [
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2 lg:col-start-2",
  "lg:col-span-2",
];

export function EngagementPaths({
  pill,
  title,
  description,
  paths,
}: {
  pill: string;
  title: ReactNode;
  description: string;
  paths: Path[];
}) {
  return (
    <section className="section relative mx-auto max-w-7xl px-6 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_55%_100%_at_50%_0%,var(--accent-soft),transparent)] opacity-70"
      />

      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-linear-to-r from-accent to-accent-2 p-px">
          <span className="block rounded-full bg-background px-5 py-1.5 text-sm font-medium text-foreground">
            {pill}
          </span>
        </span>
        <h2 className="mt-4 text-h2 text-balance font-semibold tracking-tight">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-muted">{description}</p>
      </Reveal>

      <div className="mt-12 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-6">
        {paths.map((path, i) => (
          <Reveal
            key={path.title}
            delay={i * 0.05}
            className={`h-full ${placement[i] ?? "lg:col-span-2"} ${
              i === paths.length - 1 && paths.length % 2 === 1
                ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-md lg:mx-0 lg:max-w-none"
                : ""
            }`}
          >
            <Link
              href={path.href}
              className="group relative flex h-full flex-col items-center rounded-3xl border border-border bg-surface px-6 pb-6 pt-12 text-center shadow-sm shadow-accent/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10"
            >
              <span className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-accent ring-[6px] ring-background transition-colors duration-300 group-hover:border-accent">
                {path.icon}
              </span>

              <h3 className="text-h4 font-semibold leading-snug">{path.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{path.description}</p>

              <span className="mt-auto w-full pt-6">
                <span className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors duration-300 group-hover:bg-accent-strong">
                  {path.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
