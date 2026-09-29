import type { ReactNode } from "react";
import {
  Activity,
  Bell,
  Bug,
  Check,
  Cloud,
  Code2,
  CreditCard,
  Cpu,
  Database,
  GitBranch,
  Lightbulb,
  MapPin,
  Percent,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { TechIcon } from "./tech-icons";

/* All artwork is decorative: pure CSS/SVG built from the site's colour tokens. */

export function Box({ className = "", children }: { className?: string; children?: ReactNode }) {
  return (
    <div className={`absolute rounded-2xl border border-border bg-surface shadow-xl ${className}`}>{children}</div>
  );
}

export function Badge({
  icon: Icon,
  className = "",
  tone = "light",
}: {
  icon: LucideIcon;
  className?: string;
  tone?: "light" | "brand";
}) {
  return (
    <span
      className={`absolute flex items-center justify-center rounded-2xl shadow-lg ${
        tone === "brand"
          ? "bg-linear-to-br from-accent to-accent-2 text-white"
          : "border border-border bg-surface text-accent"
      } ${className}`}
    >
      <Icon className="h-[52%] w-[52%]" />
    </span>
  );
}

export function WindowDots() {
  return (
    <div className="flex gap-1.5 border-b border-border px-3 py-2.5">
      <span className="h-2 w-2 rounded-full bg-accent/30" />
      <span className="h-2 w-2 rounded-full bg-accent-2/30" />
      <span className="h-2 w-2 rounded-full bg-border" />
    </div>
  );
}

export function Bar({ w, tone = "muted" }: { w: string; tone?: "muted" | "accent" | "accent2" }) {
  const c = tone === "accent" ? "bg-accent/60" : tone === "accent2" ? "bg-accent-2/60" : "bg-border";
  return <div className={`h-2 rounded-full ${c}`} style={{ width: w }} />;
}

function Phone({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={`absolute overflow-hidden rounded-[2rem] border-[5px] border-foreground/85 bg-surface shadow-2xl ${className}`}
    >
      <div className="absolute left-1/2 top-1.5 h-2 w-1/3 -translate-x-1/2 rounded-full bg-foreground/85" />
      <div className="h-full p-3 pt-6">{children}</div>
    </div>
  );
}

const scenes = {
  dev: (
    <>
      <Box className="left-[6%] top-[14%] h-[56%] w-[72%] overflow-hidden">
        <WindowDots />
        <div className="space-y-3 p-4">
          <Bar w="40%" tone="accent" />
          <Bar w="78%" />
          <div className="ml-6 space-y-3">
            <Bar w="55%" tone="accent2" />
            <Bar w="68%" />
            <Bar w="35%" tone="accent" />
          </div>
          <Bar w="60%" />
          <Bar w="30%" tone="accent2" />
        </div>
      </Box>
      <Box className="bottom-[8%] right-[3%] h-[30%] w-[52%] overflow-hidden !border-white/10 !bg-[#0a1024]">
        <div className="space-y-2.5 p-4">
          <div className="h-2 w-2/3 rounded-full bg-emerald-400/70" />
          <div className="h-2 w-1/2 rounded-full bg-sky-400/60" />
          <div className="h-2 w-3/4 rounded-full bg-white/20" />
          <div className="h-2 w-1/3 rounded-full bg-violet-400/60" />
        </div>
      </Box>
      <Badge icon={Code2} tone="brand" className="right-[6%] top-[6%] h-[18%] w-[18%]" />
      <Badge icon={GitBranch} className="bottom-[26%] left-[2%] h-[14%] w-[14%]" />
      <Badge icon={Cpu} className="right-[30%] top-[62%] h-[12%] w-[12%]" />
    </>
  ),
  commerce: (
    <>
      <Box className="left-[10%] top-[12%] h-[72%] w-[64%] overflow-hidden">
        <div className="flex h-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className={`flex-1 ${i % 2 ? "bg-surface-muted" : "bg-accent"}`} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 p-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="space-y-2">
              <div
                className={`aspect-[4/3] rounded-xl ${
                  i % 2 ? "bg-linear-to-br from-accent-2/40 to-accent/20" : "bg-linear-to-br from-accent/40 to-accent-2/20"
                }`}
              />
              <Bar w="70%" />
              <Bar w="40%" tone="accent" />
            </div>
          ))}
        </div>
      </Box>
      <Badge icon={ShoppingCart} tone="brand" className="bottom-[6%] right-[6%] h-[22%] w-[22%]" />
      <Badge icon={CreditCard} className="right-[4%] top-[18%] h-[16%] w-[16%]" />
      <Badge icon={Percent} className="bottom-[30%] left-[1%] h-[13%] w-[13%]" />
    </>
  ),
  mobile: (
    <>
      <Phone className="left-[8%] top-[10%] h-[78%] w-[38%] -rotate-6">
        <div className="space-y-2.5">
          <div className="h-16 rounded-xl bg-linear-to-br from-accent to-accent-2" />
          <Bar w="80%" />
          <Bar w="55%" tone="accent" />
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="h-14 rounded-lg bg-accent-soft" />
            <div className="h-14 rounded-lg bg-surface-muted" />
          </div>
          <Bar w="65%" />
        </div>
      </Phone>
      <Phone className="right-[8%] top-[16%] h-[74%] w-[38%] rotate-6">
        <div className="space-y-2.5">
          <Bar w="50%" tone="accent2" />
          <div className="h-24 rounded-xl bg-accent-soft" />
          <div className="flex gap-2">
            <div className="h-8 w-8 rounded-full bg-accent/50" />
            <div className="flex-1 space-y-1.5 pt-1">
              <Bar w="90%" />
              <Bar w="60%" />
            </div>
          </div>
          <div className="h-10 rounded-full bg-linear-to-r from-accent to-accent-2" />
        </div>
      </Phone>
      <Badge icon={Bell} tone="brand" className="left-[36%] top-[2%] h-[14%] w-[14%]" />
      <Badge icon={MapPin} className="bottom-[4%] left-[40%] h-[13%] w-[13%]" />
    </>
  ),
  analytics: (
    <>
      <Box className="left-[6%] top-[12%] h-[66%] w-[78%] overflow-hidden">
        <WindowDots />
        <div className="relative flex h-[calc(100%-2.25rem)] items-end gap-2 p-4 pt-8">
          {[34, 52, 40, 68, 55, 80, 62].map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}%` }}
              className={`flex-1 rounded-t-lg ${i === 5 ? "bg-linear-to-t from-accent to-accent-2" : "bg-accent/25"}`}
            />
          ))}
          <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-4 top-6 h-2/3 w-[calc(100%-2rem)] text-accent-2">
            <polyline points="0,30 16,22 32,26 48,14 64,18 80,6 100,10" fill="none" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        </div>
      </Box>
      <Box className="bottom-[6%] right-[4%] flex h-[26%] w-[34%] items-center justify-center">
        <div
          className="h-[68%] w-[68%] rounded-full"
          style={{
            background: "conic-gradient(var(--accent) 0 62%, var(--accent-2) 62% 84%, var(--border) 84% 100%)",
            mask: "radial-gradient(circle, transparent 52%, black 54%)",
            WebkitMask: "radial-gradient(circle, transparent 52%, black 54%)",
          }}
        />
      </Box>
      <Badge icon={Cloud} tone="brand" className="right-[4%] top-[4%] h-[18%] w-[18%]" />
      <Badge icon={Activity} className="bottom-[10%] left-[4%] h-[14%] w-[14%]" />
      <Badge icon={Database} className="left-[36%] top-[80%] h-[12%] w-[12%]" />
    </>
  ),
  testing: (
    <>
      <Box className="left-[8%] top-[14%] h-[66%] w-[70%] overflow-hidden">
        <WindowDots />
        <ul className="space-y-3.5 p-4">
          {[true, true, true, false].map((done, i) => (
            <li key={i} className="flex items-center gap-3">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                  done ? "bg-accent text-white" : "border-2 border-dashed border-accent/50"
                }`}
              >
                {done && <Check className="h-3.5 w-3.5" />}
              </span>
              <div className="flex-1 space-y-1.5">
                <Bar w={["80%", "65%", "72%", "55%"][i]} />
                <Bar w="38%" tone={done ? "accent" : "muted"} />
              </div>
            </li>
          ))}
        </ul>
      </Box>
      <Badge icon={ShieldCheck} tone="brand" className="bottom-[6%] right-[8%] h-[26%] w-[26%]" />
      <Badge icon={Bug} className="right-[4%] top-[10%] h-[16%] w-[16%]" />
      <Box className="bottom-[10%] left-[2%] flex h-[14%] w-[26%] items-center justify-center text-caption font-semibold text-accent">
        100%
      </Box>
    </>
  ),
  startup: (
    <>
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full text-accent/50">
        <path d="M60 340 C 120 260, 150 300, 210 210 S 300 110, 340 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 9" strokeLinecap="round" />
        {[
          [60, 340],
          [150, 275],
          [240, 175],
        ].map(([x, y]) => (
          <g key={x}>
            <circle cx={x} cy={y} r="12" fill="currentColor" opacity="0.25" />
            <circle cx={x} cy={y} r="5" fill="currentColor" />
          </g>
        ))}
      </svg>
      <Badge icon={Rocket} tone="brand" className="right-[8%] top-[4%] h-[30%] w-[30%] !rounded-[2rem]" />
      <Badge icon={Lightbulb} className="bottom-[8%] left-[6%] h-[16%] w-[16%]" />
      <Badge icon={TrendingUp} className="left-[36%] top-[52%] h-[15%] w-[15%]" />
      <Badge icon={Target} className="right-[22%] bottom-[12%] h-[14%] w-[14%]" />
      <Box className="left-[4%] top-[10%] h-[20%] w-[34%] p-3.5">
        <div className="space-y-2">
          <Bar w="70%" tone="accent" />
          <Bar w="50%" />
          <Bar w="35%" tone="accent2" />
        </div>
      </Box>
    </>
  ),
};

export type SceneKind = keyof typeof scenes;

export function ServiceArt({ kind, className = "" }: { kind: SceneKind; className?: string }) {
  return (
    <div aria-hidden className={`relative mx-auto aspect-square w-full max-w-[28rem] ${className}`}>
      {scenes[kind]}
    </div>
  );
}

/* Brand icons arranged on a ring around a hub — the "image" for technology pages. */
export function TechCloud({ names, hub, className = "" }: { names: string[]; hub: LucideIcon; className?: string }) {
  const Hub = hub;
  const list = names.slice(0, 9);
  return (
    <div aria-hidden className={`relative mx-auto aspect-square w-full max-w-[28rem] ${className}`}>
      <div className="absolute inset-[6%] rounded-full border border-dashed border-accent/30" />
      <div className="absolute inset-[27%] rounded-full border border-accent/20" />
      <div className="absolute left-1/2 top-1/2 flex h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-linear-to-br from-accent to-accent-2 text-white shadow-xl shadow-accent/30">
        <Hub className="h-1/2 w-1/2" />
      </div>
      {list.map((n, i) => {
        const a = (i / list.length) * Math.PI * 2 - Math.PI / 2;
        return (
          <span
            key={n}
            style={{ left: `${50 + 41 * Math.cos(a)}%`, top: `${50 + 41 * Math.sin(a)}%` }}
            className="absolute flex h-[17%] w-[17%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-border bg-surface text-foreground shadow-lg"
          >
            <TechIcon name={n} className="h-1/2 w-1/2" />
          </span>
        );
      })}
    </div>
  );
}
