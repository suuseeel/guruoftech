"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IndustryArt } from "@/components/industry/art";
import { ArrowUpRight, Check, Layers } from "lucide-react";

type Industry = {
  name: string;
  icon: ReactNode;
  blurb: string;
  examples: string[];
  stack: string[];
  /** Path or URL to a 3D illustration/render for this industry.
   *  e.g. "/images/industries/retail-3d.png"
   *  Leave undefined to show the glow-only fallback. */
  src?: string;
  /** Dedicated industry page this card links out to, e.g. "/industries/healthcare". */
  href: string;
};

export function IndustryExplorer({ industries }: { industries: Industry[] }) {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <div className="industry-explorer relative">
      {/* ambient glow blobs behind the whole block */}
      <div className="pointer-events-none absolute -top-24 left-0 h-72 w-72 rounded-full bg-accent/15 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-accent-2/15 blur-[110px]" />

      <div className="relative grid gap-6 lg:grid-cols-[300px_1fr]">
        {/* Sidebar list */}
        <div className="sidebar-scroll flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
          {industries.map((industry, i) => {
            const isActive = active === i;
            return (
              <button
                key={industry.name}
                type="button"
                onClick={() => setActive(i)}
                className={`sidebar-btn group relative flex shrink-0 items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all duration-200 lg:shrink ${
                  isActive
                    ? "sidebar-btn-active text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                    isActive
                      ? "bg-linear-to-br from-accent/30 to-accent-2/30 text-accent"
                      : "bg-surface-muted text-muted group-hover:text-foreground"
                  }`}
                >
                  {industry.icon}
                </span>
                <span className="whitespace-nowrap lg:whitespace-normal">
                  {industry.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detail card */}
        <div className="detail-card relative min-h-[320px] overflow-hidden rounded-2xl p-8">
          {/* subtle inner glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-2/20 blur-[100px]" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-accent/10 blur-[90px]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className=""
            >
              <div className="flex items-center gap-4">
                <span className="icon-badge flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-accent">
                  {current.icon}
                </span>
                <div>
                  <h3 className="text-h4 bg-linear-to-r from-accent via-accent-strong to-accent-2 bg-clip-text font-extrabold text-transparent">
                    {current.name}
                  </h3>
                  <p className="text-body-sm mt-2 max-w-lg text-muted">
                    {current.blurb}
                  </p>
                </div>
              </div>
              <div className="relative grid gap-10 lg:grid-cols-[1fr_420px] lg:gap-16">
                {/* left: text content */}
                <div>
                  <div className="mt-7 grid gap-6 border-t border-border pt-6 sm:grid-row-2">
                    <div>
                      <h4 className="text-caption flex items-center gap-1.5 font-semibold uppercase tracking-widest text-accent">
                        <Check className="h-3.5 w-3.5" />
                        Typical solutions
                      </h4>
                      <ul className="mt-3 space-y-2.5">
                        {current.examples.map((e) => (
                          <li
                            key={e}
                            className="text-body-sm flex items-start gap-2.5 text-foreground/85"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-linear-to-r from-accent to-accent-2" />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-caption flex items-center gap-1.5 font-semibold uppercase tracking-widest text-accent-2">
                        <Layers className="h-3.5 w-3.5" />
                        Relevant stack
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {current.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-border bg-surface-muted px-3 py-1 text-xs font-medium text-foreground/80"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* right: 3D illustration */}
                <div className="image-slot relative mx-auto flex w-full max-w-[17rem] items-center justify-center lg:max-w-none">
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-br from-accent/30 to-accent-2/30 blur-[60px]" />
                  <IndustryArt slug={current.name} className="max-w-[17rem]" />
                </div>
              </div>

              <div className="relative mt-8 flex flex-col items-start gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-body-sm max-w-md text-muted">
                  See the full picture on the dedicated {current.name} page — case studies,
                  engagement models, and how we scope a first project.
                </p>
                <Link
                  href={current.href}
                  className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-linear-to-r from-accent to-accent-2 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-accent/25 transition-transform hover:scale-[1.02]"
                >
                  Explore {current.name}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .industry-explorer {
          padding: 2rem;
          border-radius: 1.5rem;
          background-color: var(--panel);
          isolation: isolate;
        }
        .industry-explorer::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
          background-image: radial-gradient(
            color-mix(in srgb, var(--foreground) 6%, transparent) 1px,
            transparent 1px
          );
          background-size: 28px 28px;
          -webkit-mask-image: radial-gradient(
            circle at 50% 30%,
            black 40%,
            transparent 85%
          );
          mask-image: radial-gradient(
            circle at 50% 30%,
            black 40%,
            transparent 85%
          );
          z-index: -1;
        }

        .sidebar-scroll::-webkit-scrollbar {
          display: none;
        }
        .sidebar-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* no border anywhere on the sidebar buttons — gradient bg only when active */
        .sidebar-btn {
          background: transparent;
        }
        .sidebar-btn-active {
          background-image: linear-gradient(
            120deg,
            color-mix(in srgb, var(--accent) 16%, transparent),
            color-mix(in srgb, var(--accent-2) 4%, transparent)
          );
          box-shadow: 0 0 24px -6px
            color-mix(in srgb, var(--accent-2) 40%, transparent);
        }

        .detail-card {
          border: 1px solid transparent;
          background-image:
            linear-gradient(var(--surface), var(--surface)),
            linear-gradient(
              135deg,
              color-mix(in srgb, var(--accent) 55%, transparent),
              color-mix(in srgb, var(--accent-2) 55%, transparent) 45%,
              color-mix(in srgb, var(--accent) 15%, transparent)
            );
          background-origin: border-box;
          background-clip: padding-box, border-box;
          box-shadow: 0 0 60px -20px
            color-mix(in srgb, var(--accent-2) 35%, transparent);
        }

        .icon-badge {
          border: 1px solid transparent;
          background-image:
            linear-gradient(var(--surface-muted), var(--surface-muted)),
            linear-gradient(135deg, var(--accent), var(--accent-2));
          background-origin: border-box;
          background-clip: padding-box, border-box;
        }

        .image-fallback {
          border: 1px solid transparent;
          background-image:
            linear-gradient(var(--surface-muted), var(--surface-muted)),
            linear-gradient(135deg, var(--accent), var(--accent-2));
          background-origin: border-box;
          background-clip: padding-box, border-box;
        }
      `}</style>
    </div>
  );
}
