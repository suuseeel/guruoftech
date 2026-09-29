"use client";

import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";

type NavGroup = { id: string; title: string; color: string; count: number };

/* Pill bar under the header: jumps between categories and follows the scroll. */
export function AiSubnav({ groups, icons }: { groups: NavGroup[]; icons: Record<string, React.ReactNode> }) {
  const [active, setActive] = useState(groups[0].id);

  useEffect(() => {
    const els = groups.map((g) => document.getElementById(`group-${g.id}`)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id.replace("group-", ""));
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [groups]);

  useEffect(() => {
    document.getElementById(`subnav-${active}`)?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [active]);

  return (
    <nav aria-label="AI categories" className="sticky top-[9.5rem] z-30 border-y border-border bg-background/85 backdrop-blur-md">
      <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 [scrollbar-width:none] lg:px-8 [&::-webkit-scrollbar]:hidden">
        {groups.map((g) => {
          const on = g.id === active;
          return (
            <li key={g.id} className="shrink-0">
              <a
                id={`subnav-${g.id}`}
                href={`#group-${g.id}`}
                aria-current={on ? "true" : undefined}
                style={{ "--c": g.color } as React.CSSProperties}
                className={`flex items-center gap-2 rounded-full border py-1.5 pl-1.5 pr-4 text-sm font-medium transition-colors ${
                  on
                    ? "border-[var(--c)] bg-[color-mix(in_srgb,var(--c)_12%,transparent)] text-foreground"
                    : "border-border bg-surface text-muted hover:text-foreground"
                }`}
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full text-white"
                  style={{ background: g.color }}
                >
                  {icons[g.id]}
                </span>
                {g.title}
                <span className="text-caption tabular-nums text-muted">{g.count}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/* When a menu link like /ai#rag-development is used, briefly ring the target card. */
export function HashFocus() {
  useEffect(() => {
    let timer: number | undefined;
    const apply = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id || id.startsWith("group-")) return;
      const el = document.getElementById(id);
      if (!el) return;
      document.querySelectorAll(".ai-flash").forEach((n) => n.classList.remove("ai-flash"));
      el.classList.add("ai-flash");
      window.clearTimeout(timer);
      timer = window.setTimeout(() => el.classList.remove("ai-flash"), 3000);
    };
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href*='/ai#'], a[href^='#']");
      if (a) window.setTimeout(apply, 250);
    };
    window.addEventListener("hashchange", apply);
    window.addEventListener("popstate", apply);
    document.addEventListener("click", onClick);
    const first = window.setTimeout(apply, 500);
    return () => {
      window.removeEventListener("hashchange", apply);
      window.removeEventListener("popstate", apply);
      document.removeEventListener("click", onClick);
      window.clearTimeout(first);
      window.clearTimeout(timer);
    };
  }, []);
  return null;
}

export type { LucideIcon };
