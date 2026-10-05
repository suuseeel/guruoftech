import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { Reveal } from "@/components/reveal";
import { CtaPanel } from "@/components/industry/sections";
import { Arch } from "@/components/team/person";
import { depts, team, type Dept } from "@/components/team/data";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "Team",
  description: brandText("Meet the people behind Guru of Tech — developers, designers, managers and leadership.", brand),
  };
}

const podParts = [
  { n: "01", title: "A lead engineer", text: "One senior person accountable for how the thing is built." },
  { n: "02", title: "The disciplines your project needs", text: "Only the roles the work actually calls for." },
  { n: "03", title: "One delivery contact", text: "The same people from kickoff to launch, not a different name every sprint." },
];

const by = (d: Dept) => team.filter((p) => p.dept === d);
const dept = (d: Dept) => depts.find((x) => x.id === d)!;

/* Big outlined department word with a count, sitting behind the heading. */
function Heading({ d }: { d: Dept }) {
  const info = dept(d);
  return (
    <div className="relative">
      <span
        aria-hidden
        className="pointer-events-none block select-none text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-[0.9] tracking-tight text-transparent"
        style={{ WebkitTextStroke: `1.5px color-mix(in srgb, ${info.color} 55%, transparent)` }}
      >
        {info.label}
      </span>
      <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h2 className="text-h3 font-semibold text-white">{info.label}</h2>
        <span className="text-caption font-semibold tabular-nums" style={{ color: info.color }}>
          {by(d).length} {by(d).length === 1 ? "person" : "people"}
        </span>
      </div>
      <p className="mt-1 max-w-md text-body-sm text-white/60">{info.blurb}</p>
    </div>
  );
}

export default function TeamPage() {
  const lead = by("leadership");
  const rest: Dept[] = ["design", "growth"];

  return (
    <>
      <section className="section-hero relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-accent-2/15 blur-[110px]" />
        <div className="relative grid items-end gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow-badge">Team</span>
            <h1 className="mt-4 text-h1 font-semibold tracking-tight">
              The people behind <span className="text-accent">delivery</span>
            </h1>
            <p className="mt-4 max-w-xl text-body-lg text-muted">
              Every project is staffed by a small, senior pod rather than a rotating cast. Meet the {team.length} people
              across {depts.length} teams who make it work.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="flex flex-wrap gap-2 lg:justify-end">
              {depts.map((d) => (
                <li key={d.id}>
                  <a
                    href={`#team-${d.id}`}
                    className="flex items-center gap-2 rounded-full border border-border bg-surface py-2 pl-3 pr-4 text-sm font-medium transition-colors hover:text-foreground"
                  >
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: d.color }} />
                    {d.label}
                    <span className="text-caption tabular-nums text-muted">{by(d.id).length}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* the stage */}
      <section className="section mx-auto max-w-[92rem] px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#070d22] px-5 py-16 text-white ring-1 ring-white/10 sm:rounded-[3rem] sm:px-10 lg:px-16 lg:py-24">
          <div className="pointer-events-none absolute -left-32 top-0 h-[32rem] w-[32rem] rounded-full bg-accent/25 blur-[140px]" />
          <div className="pointer-events-none absolute -right-32 top-1/3 h-[32rem] w-[32rem] rounded-full bg-accent-2/20 blur-[140px]" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "linear-gradient(to bottom, black, transparent 40%, transparent 70%, black)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent 40%, transparent 70%, black)",
            }}
          />

          <div className="relative space-y-24 lg:space-y-32">
            {/* leadership: one big portrait beside a statement */}
            <section id="team-leadership" className="scroll-mt-40">
              <Reveal>
                <Heading d="leadership" />
              </Reveal>
              <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
                {lead.map((p) => (
                  <Reveal key={p.id}>
                    <div className="mx-auto w-full max-w-[20rem] lg:max-w-none">
                      <Arch p={p} size="lg" />
                    </div>
                  </Reveal>
                ))}
                <Reveal delay={0.1}>
                  <p className="text-[clamp(1.4rem,2.6vw,2.2rem)] font-medium leading-snug text-white/90">
                    “{lead[0]?.does}”
                  </p>
                  <p className="mt-4 text-body-sm text-white/50">— {lead[0]?.role}</p>
                </Reveal>
              </div>
            </section>

            {/* management */}
            <section id="team-management" className="scroll-mt-40">
              <Reveal>
                <Heading d="management" />
              </Reveal>
              <div className="mx-auto mt-12 grid max-w-[16rem] grid-cols-1 gap-y-14 sm:max-w-3xl sm:grid-cols-3 sm:gap-x-8 lg:max-w-4xl lg:gap-x-14">
                {by("management").map((p, i) => (
                  <Reveal key={p.id} delay={i * 0.06} className={i === 1 ? "sm:mt-12" : ""}>
                    <Arch p={p} />
                  </Reveal>
                ))}
              </div>
            </section>

            {/* engineering: two wavy rows */}
            <section id="team-engineering" className="scroll-mt-40">
              <Reveal>
                <Heading d="engineering" />
              </Reveal>
              <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-14 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
                {by("engineering").map((p, i) => (
                  <Reveal key={p.id} delay={(i % 5) * 0.05} className={i % 2 === 1 ? "lg:mt-14" : ""}>
                    <Arch p={p} />
                  </Reveal>
                ))}
              </div>
            </section>

            {/* design + growth side by side */}
            <div className="grid gap-20 lg:grid-cols-2 lg:gap-16">
              {rest.map((d) => (
                <section key={d} id={`team-${d}`} className="scroll-mt-40">
                  <Reveal>
                    <Heading d={d} />
                  </Reveal>
                  <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-14 lg:gap-x-8">
                    {by(d).map((p, i) => (
                      <Reveal key={p.id} delay={i * 0.06} className={i === 1 ? "mt-10" : ""}>
                        <Arch p={p} />
                      </Reveal>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-muted/50">
        <div className="section mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-accent">How we staff a project</span>
            <h2 className="text-h2 mt-4 font-semibold tracking-tight">A pod, not a pool</h2>
            <p className="mt-4 text-body-lg text-muted">
              You get a lead engineer, the disciplines your project actually needs, and one delivery contact.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {podParts.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.06}>
                <div className="border-t-2 border-accent pt-5">
                  <span className="text-[3.5rem] font-bold leading-none text-accent/20">{p.n}</span>
                  <h3 className="text-h4 mt-2 font-semibold">{p.title}</h3>
                  <p className="mt-2 text-body-sm text-muted">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaPanel title="Want to know who'd work on your project?" />
    </>
  );
}
