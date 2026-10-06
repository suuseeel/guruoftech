import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { Reveal } from "@/components/reveal";
import { CtaPanel } from "@/components/industry/sections";
import { Arch } from "@/components/team/person";
import { team } from "@/components/team/data";

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

export default function TeamPage() {
  return (
    <>
      <section style={{paddingBottom:"0px"}} className="section-hero relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-accent-2/15 blur-[110px]" />
        <Reveal className="relative max-w-2xl">
          <span className="eyebrow-badge">Team</span>
          <h1 className="mt-4 text-h2 font-semibold tracking-tight">
            The people behind <span className="text-accent">delivery</span>
          </h1>
          <p className="mt-4 max-w-xl text-body-lg text-muted">
            Every project is staffed by a small, senior pod rather than a rotating cast. Meet the {team.length} people
            who make it work.
          </p>
        </Reveal>
      </section>

      {/* the stage */}
      <section className="section mx-auto max-w-[92rem] px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#f7f7f8] px-5 py-16 text-foreground ring-1 ring-border sm:rounded-[3rem] sm:px-10 lg:px-16 lg:py-24">
          <div className="pointer-events-none absolute -left-32 top-0 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[140px]" />
          <div className="pointer-events-none absolute -right-32 top-1/3 h-[32rem] w-[32rem] rounded-full bg-accent-2/15 blur-[140px]" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage: "radial-gradient(rgba(11,18,32,0.08) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "linear-gradient(to bottom, black, transparent 40%, transparent 70%, black)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent 40%, transparent 70%, black)",
            }}
          />

          <div className="relative grid grid-cols-2 gap-x-6 gap-y-16 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-10">
            {team.map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 0.06}>
                <Arch p={p} />
              </Reveal>
            ))}
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
