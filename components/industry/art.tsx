import type { CSSProperties, ReactNode } from "react";
import {
  BookOpen, Calendar, Check, Gauge, GraduationCap, HeartPulse, Headphones, Landmark, Lock, MapPin, Music,
  Package, Plane, Play, ShieldCheck, Shirt, ShoppingBag, ShoppingCart, Stethoscope, Tag, Truck, Tv, Watch, Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/*
 * Soft, product-style illustrations for each industry: small UI mock-ups
 * (a patient card, a boarding pass, a shipment timeline…) drawn in muted
 * tints of the site's accent. Everything is sized in container units (cqw)
 * so the same scene scales from a 60px thumbnail to a 350px hero.
 */

const u = (n: number) => `${n}cqw`;

function Panel({
  x, y, w, h, children, tint = false, className = "",
}: { x: number; y: number; w: number; h: number; children?: ReactNode; tint?: boolean; className?: string }) {
  const style: CSSProperties = { left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%`, borderRadius: u(3), padding: u(3.2) };
  return (
    <div
      style={style}
      className={`absolute overflow-hidden border border-border shadow-[0_2cqw_5cqw_-3cqw_rgba(30,41,90,0.18)] ${
        tint ? "bg-accent-soft" : "bg-surface"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Soft({ icon: Icon, x, y, s, className = "" }: { icon: LucideIcon; x: number; y: number; s: number; className?: string }) {
  return (
    <span
      style={{ left: `${x}%`, top: `${y}%`, width: `${s}%`, height: `${s}%`, borderRadius: u(3) }}
      className={`absolute flex items-center justify-center border border-border bg-surface text-accent/80 shadow-[0_1.5cqw_4cqw_-2cqw_rgba(30,41,90,0.2)] ${className}`}
    >
      <Icon style={{ width: "52%", height: "52%" }} strokeWidth={1.6} />
    </span>
  );
}

const Text = ({ children, size = 3, strong = false, muted = false }: { children: ReactNode; size?: number; strong?: boolean; muted?: boolean }) => (
  <span
    style={{ fontSize: u(size), lineHeight: 1.25 }}
    className={`block whitespace-nowrap ${strong ? "font-semibold text-foreground/85" : muted ? "text-muted" : "text-foreground/70"}`}
  >
    {children}
  </span>
);

const Bar = ({ w, soft = false }: { w: number; soft?: boolean }) => (
  <span style={{ width: `${w}%`, height: u(1.6) }} className={`block rounded-full ${soft ? "bg-accent/30" : "bg-border"}`} />
);

const Chip = ({ children }: { children: ReactNode }) => (
  <span
    style={{ fontSize: u(2.6), padding: `${u(0.9)} ${u(2.2)}` }}
    className="inline-block whitespace-nowrap rounded-full bg-accent-soft text-accent/90"
  >
    {children}
  </span>
);

const Dot = ({ children }: { children?: ReactNode }) => (
  <span style={{ width: u(7), height: u(7) }} className="flex shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent/80">
    {children}
  </span>
);

const scenes: Record<string, ReactNode> = {
  healthcare: (
    <>
      <Panel x={5} y={9} w={72} h={58}>
        <div className="flex items-center gap-[2.6cqw]">
          <Dot><Stethoscope style={{ width: u(4), height: u(4) }} /></Dot>
          <div><Text size={3.4} strong>Anna Rao</Text><Text size={2.6} muted>Check-up · 10:30</Text></div>
        </div>
        <svg viewBox="0 0 120 34" style={{ marginTop: u(3), height: u(12), width: "100%" }} className="text-accent/70">
          <polyline points="0,20 24,20 32,7 40,30 48,13 56,20 120,20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="flex items-end justify-between" style={{ marginTop: u(1) }}>
          <div><Text size={7} strong>72</Text><Text size={2.4} muted>bpm · resting</Text></div>
          <div className="space-y-[1.4cqw]" style={{ width: "42%" }}><Bar w={100} /><Bar w={70} soft /></div>
        </div>
      </Panel>
      <Panel x={46} y={64} w={48} h={27} tint>
        <Text size={2.6} muted>Next visit</Text>
        <Text size={3.4} strong>Thu, 14 · 09:00</Text>
        <div className="flex gap-[1.6cqw]" style={{ marginTop: u(2) }}>{[0, 1, 2, 3, 4].map((i) => <span key={i} style={{ width: u(3.4), height: u(3.4) }} className={`rounded-full ${i === 2 ? "bg-accent/60" : "bg-accent/20"}`} />)}</div>
      </Panel>
      <Soft icon={HeartPulse} x={78} y={5} s={17} />
      <Soft icon={Calendar} x={4} y={71} s={15} />
      <Soft icon={ShieldCheck} x={30} y={80} s={13} />
    </>
  ),

  automotive: (
    <>
      <Panel x={5} y={9} w={74} h={56}>
        <svg viewBox="0 0 160 70" style={{ width: "100%", height: u(28) }} className="text-accent">
          <path d="M8 52 L14 38 Q18 30 28 28 L52 24 Q62 12 78 12 L104 12 Q118 12 128 26 L146 32 Q154 36 154 46 L154 52 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.55" strokeWidth="2" strokeLinejoin="round" />
          <path d="M60 26 L74 16 L100 16 L116 27 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
          <circle cx="42" cy="54" r="10" fill="white" stroke="currentColor" strokeOpacity="0.55" strokeWidth="2.5" />
          <circle cx="122" cy="54" r="10" fill="white" stroke="currentColor" strokeOpacity="0.55" strokeWidth="2.5" />
        </svg>
        <div className="flex items-center justify-between" style={{ marginTop: u(1.5) }}>
          <div><Text size={3.4} strong>Sedan LX</Text><Text size={2.6} muted>In stock · 2024</Text></div>
          <div className="flex gap-[1.4cqw]"><Chip>Auto</Chip><Chip>5 seats</Chip></div>
        </div>
      </Panel>
      <Panel x={46} y={64} w={48} h={27} tint>
        <Text size={2.6} muted>Service booking</Text>
        <Text size={3.4} strong>Sat · 10:00</Text>
        <div style={{ marginTop: u(2) }}><Chip>Oil & brake check</Chip></div>
      </Panel>
      <Soft icon={Wrench} x={80} y={5} s={16} />
      <Soft icon={Gauge} x={4} y={72} s={15} />
    </>
  ),

  fintech: (
    <>
      <Panel x={5} y={7} w={62} h={34} tint className="!bg-accent/12">
        <span style={{ width: u(8), height: u(6), borderRadius: u(1.2) }} className="block bg-accent/35" />
        <Text size={3.6} strong>•••• 4242</Text>
        <Text size={2.4} muted>Debit · valid 08/28</Text>
      </Panel>
      <Panel x={16} y={40} w={78} h={52}>
        {[["Salary", "+ 2,400", true], ["Rent", "− 900", false], ["Groceries", "− 86", false]].map(([n, a, up]) => (
          <div key={n as string} className="flex items-center justify-between" style={{ marginBottom: u(2.2) }}>
            <div className="flex items-center gap-[2cqw]"><Dot /><Text size={3}>{n}</Text></div>
            <Text size={3} strong>{a}</Text>
          </div>
        ))}
        <svg viewBox="0 0 120 26" style={{ width: "100%", height: u(9) }} className="text-accent/60">
          <polyline points="0,20 20,15 40,17 60,9 80,12 100,5 120,7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </Panel>
      <Soft icon={Lock} x={76} y={4} s={16} />
    </>
  ),

  retail: (
    <>
      <Panel x={5} y={8} w={68} h={76}>
        <div className="flex items-center justify-between" style={{ marginBottom: u(3) }}>
          <Text size={3.2} strong>New arrivals</Text>
          <span className="flex gap-[1cqw]">{[0, 1, 2].map((i) => <span key={i} style={{ width: u(1.6), height: u(1.6) }} className="rounded-full bg-border" />)}</span>
        </div>
        <div className="grid grid-cols-2" style={{ gap: u(2.4) }}>
          {[Shirt, Watch, Headphones, ShoppingBag].map((I, i) => (
            <div key={i}>
              <div style={{ height: u(17), borderRadius: u(2) }} className="flex items-center justify-center bg-accent-soft text-accent/60">
                <I style={{ width: u(8), height: u(8) }} strokeWidth={1.4} />
              </div>
              <div style={{ marginTop: u(1.6) }} className="space-y-[1cqw]"><Bar w={70} /><Bar w={38} soft /></div>
            </div>
          ))}
        </div>
      </Panel>
      <Soft icon={ShoppingCart} x={68} y={62} s={24} />
      <span style={{ left: "87%", top: "60%", width: u(6), height: u(6), fontSize: u(3) }} className="absolute flex items-center justify-center rounded-full bg-accent/70 font-semibold text-white">3</span>
      <Soft icon={Tag} x={76} y={8} s={16} />
    </>
  ),

  education: (
    <>
      <Panel x={5} y={9} w={74} h={60}>
        <div style={{ height: u(21), borderRadius: u(2) }} className="relative flex items-center justify-center bg-accent-soft">
          <span style={{ width: u(10), height: u(10) }} className="flex items-center justify-center rounded-full bg-surface text-accent/80 shadow-sm"><Play style={{ width: u(4), height: u(4) }} /></span>
          <span style={{ height: u(1.4) }} className="absolute inset-x-[3cqw] bottom-[2cqw] rounded-full bg-accent/15"><span className="block h-full w-2/5 rounded-full bg-accent/50" /></span>
        </div>
        {["Intro to algebra", "Solving equations"].map((l, i) => (
          <div key={l} className="flex items-center gap-[2cqw]" style={{ marginTop: u(2.6) }}>
            <Dot>{i === 0 && <Check style={{ width: u(3.4), height: u(3.4) }} />}</Dot><Text size={3}>{l}</Text>
          </div>
        ))}
      </Panel>
      <Panel x={58} y={62} w={36} h={30} tint>
        <div className="flex items-center gap-[2.4cqw]">
          <span style={{ width: u(11), height: u(11), background: "conic-gradient(color-mix(in srgb, var(--accent) 60%, transparent) 0 68%, color-mix(in srgb, var(--accent) 15%, transparent) 68% 100%)", mask: "radial-gradient(circle, transparent 55%, black 57%)", WebkitMask: "radial-gradient(circle, transparent 55%, black 57%)" }} className="block rounded-full" />
          <div><Text size={4.4} strong>68%</Text><Text size={2.4} muted>Course</Text></div>
        </div>
      </Panel>
      <Soft icon={GraduationCap} x={80} y={5} s={16} />
      <Soft icon={BookOpen} x={4} y={74} s={14} />
    </>
  ),

  travel: (
    <>
      <Panel x={5} y={7} w={72} h={36}>
        <div className="flex items-center justify-between">
          <div><Text size={5} strong>DEL</Text><Text size={2.4} muted>Delhi</Text></div>
          <Plane style={{ width: u(6), height: u(6) }} className="text-accent/70" strokeWidth={1.5} />
          <div className="text-right"><Text size={5} strong>LHR</Text><Text size={2.4} muted>London</Text></div>
        </div>
        <span style={{ margin: `${u(2.4)} 0` }} className="block border-t border-dashed border-border" />
        <div className="flex justify-between"><Text size={2.6} muted>Gate 12</Text><Text size={2.6} muted>Seat 14A</Text></div>
      </Panel>
      <Panel x={22} y={47} w={72} h={44} tint>
        <svg viewBox="0 0 120 60" style={{ width: "100%", height: "100%" }} className="text-accent/60">
          <path d="M8 48 C 30 20, 52 52, 74 28 S 104 14, 112 10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2 5" strokeLinecap="round" />
          <circle cx="8" cy="48" r="4" fill="currentColor" /><circle cx="112" cy="10" r="4" fill="currentColor" fillOpacity="0.5" />
        </svg>
      </Panel>
      <Soft icon={MapPin} x={4} y={60} s={16} />
      <Soft icon={Plane} x={80} y={4} s={15} />
    </>
  ),

  banking: (
    <>
      <Panel x={5} y={8} w={72} h={36}>
        <div className="flex items-start justify-between">
          <div><Text size={2.6} muted>Total balance</Text><Text size={6.4} strong>12,480.00</Text></div>
          <Landmark style={{ width: u(8), height: u(8) }} className="text-accent/60" strokeWidth={1.4} />
        </div>
        <div style={{ marginTop: u(3) }} className="space-y-[1.4cqw]"><Bar w={85} soft /><Bar w={55} /></div>
      </Panel>
      <Panel x={18} y={48} w={76} h={44} tint>
        {["Savings", "Current account", "Statement · May"].map((l) => (
          <div key={l} className="flex items-center gap-[2cqw]" style={{ marginBottom: u(2.4) }}><Dot /><Text size={3}>{l}</Text></div>
        ))}
      </Panel>
      <Soft icon={ShieldCheck} x={80} y={4} s={15} />
      <Soft icon={Lock} x={4} y={62} s={14} />
    </>
  ),

  logistics: (
    <>
      <Panel x={5} y={8} w={90} h={50} tint>
        <svg viewBox="0 0 160 70" style={{ width: "100%", height: "100%" }} className="text-accent/55">
          <path d="M10 56 H 62 C 84 56, 84 24, 108 24 H 148" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 6" strokeLinecap="round" />
          <circle cx="10" cy="56" r="4.5" fill="currentColor" /><circle cx="148" cy="24" r="4.5" fill="currentColor" fillOpacity="0.5" />
        </svg>
      </Panel>
      <Soft icon={Truck} x={40} y={22} s={20} />
      <Panel x={5} y={62} w={62} h={30}>
        <div className="flex items-center justify-between" style={{ marginBottom: u(2) }}>
          {["Packed", "Shipped", "Delivered"].map((l, i) => <Text key={l} size={2.6} muted={i > 1}>{l}</Text>)}
        </div>
        <div className="relative flex items-center justify-between">
          <span style={{ height: u(0.8) }} className="absolute inset-x-0 rounded-full bg-border" />
          {[0, 1, 2].map((i) => <span key={i} style={{ width: u(3.6), height: u(3.6) }} className={`relative rounded-full ${i < 2 ? "bg-accent/60" : "bg-border"}`} />)}
        </div>
      </Panel>
      <Soft icon={Package} x={72} y={66} s={20} />
    </>
  ),

  media: (
    <>
      <Panel x={5} y={9} w={74} h={50}>
        <div style={{ height: "100%", borderRadius: u(2) }} className="relative flex items-center justify-center bg-accent-soft">
          <span style={{ width: u(11), height: u(11) }} className="flex items-center justify-center rounded-full bg-surface text-accent/80 shadow-sm"><Play style={{ width: u(4.6), height: u(4.6) }} /></span>
          <span style={{ height: u(1.4) }} className="absolute inset-x-[3cqw] bottom-[2.4cqw] rounded-full bg-accent/15"><span className="block h-full w-1/3 rounded-full bg-accent/50" /></span>
        </div>
      </Panel>
      <div className="absolute flex" style={{ left: "5%", top: "64%", gap: u(2.4) }}>
        {[0, 1, 2].map((i) => <span key={i} style={{ width: u(15), height: u(12), borderRadius: u(2) }} className="block border border-border bg-surface shadow-sm"><span className="block h-full w-full rounded-[inherit] bg-accent-soft/70" /></span>)}
      </div>
      <Panel x={60} y={70} w={34} h={20} tint>
        <div className="flex h-full items-end justify-between">{[40, 75, 55, 90, 50, 70].map((h, i) => <span key={i} style={{ width: u(2.4), height: `${h}%` }} className="rounded-full bg-accent/45" />)}</div>
      </Panel>
      <Soft icon={Tv} x={80} y={5} s={15} />
      <Soft icon={Music} x={80} y={38} s={13} />
    </>
  ),
};

const alias: Record<string, string> = {
  "retail-ecommerce": "retail",
  Healthcare: "healthcare", Automotive: "automotive", Fintech: "fintech", FinTech: "fintech", "Retail & eCommerce": "retail",
  Education: "education", "Education & eLearning": "education", "Travel & Tourism": "travel",
  "Banking & Financial Services": "banking", Logistics: "logistics", "Logistics & Transportation": "logistics",
  "Media & Entertainment": "media",
};

export function IndustryArt({ slug, className = "" }: { slug: string; className?: string }) {
  const key = alias[slug] ?? slug.toLowerCase();
  return (
    <div
      aria-hidden
      style={{ containerType: "inline-size" }}
      className={`relative mx-auto aspect-square w-full max-w-[22rem] ${className}`}
    >
      <div className="pointer-events-none absolute inset-[10%] rounded-full bg-accent/[0.07] blur-3xl" />
      {scenes[key] ?? null}
    </div>
  );
}
