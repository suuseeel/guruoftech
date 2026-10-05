"use client";

import { useState, type ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export type Project = {
  name: string;
  type: string;
  industry: string;
  description: string;
  stack: string[];
  icon: ReactNode;
};

function ProjectThumb({ icon }: { icon: ReactNode }) {
  return (
    <div className="relative h-32 overflow-hidden rounded-xl border border-border bg-surface-muted/60">
      {/* Browser-chrome mock, not a real screenshot — a stand-in frame */}
      <div className="flex items-center gap-1.5 border-b border-border/70 bg-background/60 px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-border" />
        <span className="h-1.5 w-1.5 rounded-full bg-border" />
        <span className="h-1.5 w-1.5 rounded-full bg-border" />
      </div>
      <div className="relative flex h-[calc(100%-29px)] items-center justify-center bg-linear-to-br from-accent-soft to-transparent">
        <div
          aria-hidden
          className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/15 blur-2xl transition-transform duration-500 group-hover:scale-125"
        />
        <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-accent shadow-sm">
          {icon}
        </span>
      </div>
    </div>
  );
}

export function ProjectShowcase({
  filters,
  projects,
}: {
  filters: string[];
  projects: Project[];
}) {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              active === f
                ? "border-accent bg-accent-soft text-accent"
                : "border-border bg-surface text-muted hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((project, i) => (
          <Reveal key={project.name} delay={(i % 4) * 0.05}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10">
              <span className="absolute right-3 top-3 z-10 text-xs font-semibold text-muted/60">
                {String(i + 1).padStart(2, "0")}
              </span>

              <ProjectThumb icon={project.icon} />

              <div className="mt-4 flex flex-1 flex-col">
                <span className="text-caption font-medium text-accent">{project.industry}</span>
                <h3 className="text-h4 mt-2 font-semibold">{project.name}</h3>
                <p className="text-body-sm mt-2 text-muted">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
