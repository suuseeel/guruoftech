import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { AboutKeyVisual } from "@/components/about-key-visual";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "About Us",
  description:
    brandText("Guru of Tech is a full-stack software development company committed to reliable, trustworthy engineering.", brand),
  };
}

const stats = [
  { value: "6", label: "Core Services" },
  { value: "35+", label: "Technologies Used" },
  { value: "9", label: "Industries Served" },
  { value: "4-Step", label: "Delivery Process" },
];

const overviewStats = [
  { value: "2,531", label: "Projects Finished" },
  { value: "15+", label: "Years Experience" },
  { value: "280", label: "Happy Clients" },
  { value: "3,587", label: "Recognitions" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "Exceed expectations on every engagement by delivering top-notch development solutions — respecting budget and timeline constraints without cutting corners.",
  },
  {
    icon: Compass,
    title: "Our Vision",
    desc: "Be a benchmark for dependability, creativity, and tenacity — building software that makes people's work simpler, better, and safer.",
  },
  {
    icon: ShieldCheck,
    title: "How We Operate",
    desc: "Strict data confidentiality, senior engineers on every project, and a stack chosen for the problem rather than the trend.",
  },
  {
    icon: Users,
    title: "Who We Work With",
    desc: "Startups scoping their first MVP, and established teams offshoring or nearshoring parts of their roadmap.",
  },
];

export default async function AboutPage() {
  const brand = await getRequestBrand();
  return (
    <>
    <style>{css}</style>
      <section className="about-section">
  {/* Background */}
  <div className="about-bg">
    <div className="about-glow glow-1" />
    <div className="about-glow glow-2" />
    <div className="about-glow glow-3" />

    <div className="about-grid" />

    {/* <div className="about-wave wave-1" />
    <div className="about-wave wave-2" />
    <div className="about-wave wave-3" />
    <div className="about-wave wave-4" /> */}

    <div className="about-orbit orbit-1">
      <span />
    </div>

    <div className="about-orbit orbit-2">
      <span />
    </div>

    <div className="about-orbit orbit-3">
      <span />
    </div>

    <div className="about-globe">
      <div className="globe-dot-field" />
      <div className="globe-line line-a" />
      <div className="globe-line line-b" />
      <div className="globe-line line-c" />
    </div>

    <div className="texture-dots" />
  </div>

  {/* Content */}
  <div className="about-content">
    <div className="about-label">
      ABOUT US
    </div>

    <h2>
      A software partner, not just a
      <br />
      vendor
    </h2>

    <p>
      {brandText(
        "Guru of Tech is a globally recognized software development company based in Noida, India — building web platforms, mobile apps, and AI-driven products for businesses across the globe.",
        brand,
      )}
    </p>
  </div>
</section>

      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <h2 className="text-h2 text-center mt-4 font-semibold tracking-tight">
            Meet challenges and foster a collaborative environment with
            innovative IT solutions
          </h2>
        </Reveal>

        <div className="mt-12 gap-10 ">
          <Reveal className="space-y-5 text-body-sm text-muted">
            <p>
              GuruOfTech was founded with the goal of producing cutting-edge
              technological solutions. The firm is founded by a group of
              enthusiastic IT specialists with the goal of overthrowing the
              status quo and developing advanced IT solutions. One of the top IT
              companies, it offers goods and services in web development, mobile
              application development, software development, IT consulting, web
              designing, migration engineering, and much more all under one
              roof.
            </p>
            <p>
              We embrace cutting-edge technology that improves the functioning
              and effectiveness of your business. We use advanced technology to
              increase your company&apos;s functioning and productivity.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-center lg:gap-16">
          <Reveal delay={0.05} className="space-y-4">
            <h3 className="text-h4 font-semibold">
              The key to moving your business into new horizons
            </h3>
            <div className="space-y-5 text-body-sm text-muted">
              <p>
                We assist your company&apos;s operational requirements to run more
                smoothly with our inventive, unique IT solutions. Customization is
                important to us, and we always work to provide cutting-edge
                solutions that are specifically tailored to your company&apos;s
                requirements. We provide our services to clients located abroad
                across several countries. Our affordable, tailored services
                provide value to your company and improve your digital persona. We
                believe that your company&apos;s expansion is a logical extension
                of our efforts.
              </p>
              <p>
                When you partner with us, we&apos;ll show you how to find
                solutions that can advance your company. Every step of the way, we
                collaborate with our clients to fully grasp their specific
                demands. We also keep you informed, so you are aware of the
                progress of the job. Long-term partnerships are important to us,
                and we&apos;ll go above and beyond to keep you satisfied.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <AboutKeyVisual />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <dl className="grid grid-cols-2 gap-6 rounded-2xl border border-border bg-surface sm:grid-cols-4 p-6">
            {overviewStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dd className="text-2xl font-semibold text-accent sm:text-3xl">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-caption text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <div className="rounded-2xl border border-border bg-accent-soft/60 p-6">
            <h3 className="text-h4 font-semibold">Our Objective</h3>
            <p className="mt-3 max-w-3xl text-body-sm text-muted">
              We provide prospective software products that employ deft and
              efficient service delivery strategies. We have made effective
              choices that have made it possible for us to quickly and easily
              envisage the goals of our clientele. We make sure to develop a
              useful plan for utilizing the existing technical resources with
              adequate efficiency. With a knowledgeable staff of technology
              experts, we provide specialized software solutions for companies
              across a range of sizes and industries.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <item.icon className="h-5 w-5" />
                </span>
                <h2 className="text-h4 mt-4 font-semibold">{item.title}</h2>
                <p className="mt-2 text-body-sm text-muted">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface-muted/50">
        <div className="section mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Advanced solutions, plainly delivered"
            description="We incorporate blockchain, AR/VR, and AI where they genuinely solve a problem — not because it makes a good headline. Every engagement starts with your goals, not our tech wishlist."
          />
        </div>
      </section>
    </>
  );
}


const css = `
/* =========================================
   ABOUT SECTION
========================================= */

.about-section {
  position: relative;
  min-height: 520px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  background:
    radial-gradient(
      circle at 50% -20%,
      color-mix(in srgb, var(--accent) 20%, transparent),
      transparent 45%
    ),
    radial-gradient(
      circle at 90% 80%,
      color-mix(in srgb, var(--accent-2) 18%, transparent),
      transparent 35%
    ),
    radial-gradient(
      circle at 5% 70%,
      color-mix(in srgb, var(--accent) 12%, transparent),
      transparent 30%
    ),
    var(--background);
}


/* =========================================
   BACKGROUND WRAPPER
========================================= */

.about-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}


/* =========================================
   SOFT GLOW BLOBS
========================================= */

.about-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(35px);
  opacity: 0.45;
}

.glow-1 {
  width: 180px;
  height: 180px;

  left: -50px;
  top: 100px;

  background:
    radial-gradient(
      circle,
      color-mix(in srgb, var(--accent) 45%, transparent),
      transparent
    );

  animation: floatGlow1 8s ease-in-out infinite;
}

.glow-2 {
  width: 260px;
  height: 260px;

  right: -100px;
  bottom: 40px;

  background:
    radial-gradient(
      circle,
      color-mix(in srgb, var(--accent-2) 30%, transparent),
      transparent
    );

  animation: floatGlow2 10s ease-in-out infinite;
}

.glow-3 {
  width: 140px;
  height: 140px;

  left: 40%;
  top: -80px;

  background:
    radial-gradient(
      circle,
      color-mix(in srgb, var(--accent) 25%, transparent),
      transparent
    );

  filter: blur(45px);
}


/* =========================================
   DOT GRID
========================================= */

.about-grid {
  position: absolute;
  inset: 0;

  background-image:
    radial-gradient(
      color-mix(in srgb, var(--accent) 22%, transparent) 1px,
      transparent 1px
    );

  background-size: 26px 26px;

  mask-image:
    radial-gradient(
      ellipse at center,
      black 0%,
      transparent 70%
    );

  opacity: 0.35;
}


/* =========================================
   CURVED WAVES
========================================= */

.about-wave {
  position: absolute;

  width: 150%;
  height: 300px;

  left: -25%;

  border-radius: 50%;

  transform-origin: center;

  pointer-events: none;
}


/* Main blue wave */

.wave-1 {
  bottom: -170px;

  border-top: 2px solid color-mix(in srgb, var(--accent) 35%, transparent);

  background:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--accent) 13%, transparent),
      transparent
    );

  transform:
    rotate(-5deg)
    scaleX(1.15);
}


/* Neutral wave — blends into the section's own background */

.wave-2 {
  bottom: -130px;

  border-top: 1px solid var(--border);

  transform:
    rotate(3deg)
    scaleX(1.2);
}


/* Thin cyan line */

.wave-3 {
  bottom: -80px;

  height: 260px;

  border-top: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);

  transform:
    rotate(-8deg)
    scaleX(1.2);
}


/* Another subtle wave */

.wave-4 {
  bottom: -210px;

  height: 350px;

  border-top: 1px solid color-mix(in srgb, var(--accent-2) 22%, transparent);

  background:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--accent-2) 8%, transparent),
      transparent
    );

  transform:
    rotate(7deg)
    scaleX(1.3);
}


/* =========================================
   ORBIT LINES
========================================= */

.about-orbit {
  position: absolute;

  width: 900px;
  height: 250px;

  left: 50%;
  top: 50%;

  border: 1px solid color-mix(in srgb, var(--accent) 18%, transparent);

  border-radius: 50%;

  transform-origin: center;
}

.orbit-1 {
  transform:
    translate(-50%, -50%)
    rotate(-17deg);
}

.orbit-2 {
  width: 1100px;
  height: 330px;

  transform:
    translate(-50%, -50%)
    rotate(18deg);

  border-color: color-mix(in srgb, var(--accent) 12%, transparent);
}

.orbit-3 {
  width: 1250px;
  height: 420px;

  transform:
    translate(-50%, -50%)
    rotate(-30deg);

  border-color: color-mix(in srgb, var(--accent-2) 10%, transparent);
}


/* Orbit glowing points */

.about-orbit span {
  position: absolute;

  width: 9px;
  height: 9px;

  border-radius: 50%;

  background: #ffffff;

  box-shadow:
    0 0 8px color-mix(in srgb, var(--accent) 90%, transparent),
    0 0 22px color-mix(in srgb, var(--accent) 65%, transparent);

  left: 25%;
  top: -4px;
}


/* =========================================
   GLOBE
========================================= */

.about-globe {
  position: absolute;

  width: 480px;
  height: 480px;

  right: -80px;
  top: 50%;

  transform: translateY(-50%);

  border-radius: 50%;

  background:
    radial-gradient(
      circle at 35% 30%,
      rgba(255,255,255,0.9),
      color-mix(in srgb, var(--accent) 30%, transparent) 35%,
      color-mix(in srgb, var(--accent) 8%, transparent) 65%,
      transparent 72%
    );

  opacity: 0.75;

  box-shadow:
    inset 0 0 80px color-mix(in srgb, var(--accent) 15%, transparent),
    0 0 80px color-mix(in srgb, var(--accent) 10%, transparent);
}


/* Globe dotted texture */

.globe-dot-field {
  position: absolute;
  inset: 0;

  border-radius: 50%;

  background-image:
    radial-gradient(
      color-mix(in srgb, var(--accent) 42%, transparent) 1.4px,
      transparent 1.4px
    );

  background-size: 9px 9px;

  mask-image:
    radial-gradient(
      ellipse at 45% 50%,
      black 0%,
      black 55%,
      transparent 75%
    );

  opacity: 0.75;
}


/* Globe longitude */

.globe-line {
  position: absolute;

  inset: 7% 28%;

  border-left: 1px solid color-mix(in srgb, var(--accent) 22%, transparent);
  border-right: 1px solid color-mix(in srgb, var(--accent) 22%, transparent);

  border-radius: 50%;
}

.line-a {
  transform: rotate(25deg);
}

.line-b {
  transform: rotate(-25deg);
}

.line-c {
  inset: 28% 7%;

  border-left: none;
  border-right: none;

  border-top: 1px solid color-mix(in srgb, var(--accent) 18%, transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--accent) 18%, transparent);
}


/* =========================================
   RANDOM TEXTURE DOTS
========================================= */

.texture-dots {
  position: absolute;

  inset: 0;

  background-image:
    radial-gradient(
      circle,
      color-mix(in srgb, var(--accent) 16%, transparent) 1px,
      transparent 1.5px
    );

  background-size: 42px 42px;

  opacity: 0.22;

  mask-image:
    linear-gradient(
      to bottom,
      transparent,
      black 30%,
      black 70%,
      transparent
    );
}


/* =========================================
   CONTENT
========================================= */

.about-content {
  position: relative;
  z-index: 10;

  width: min(1100px, 90%);

  text-align: center;

  margin-top: -10px;
}


/* =========================================
   LABEL
========================================= */

.about-label {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  padding: 14px 34px;

  border: 1.5px solid var(--accent);

  border-radius: 999px;

  color: var(--accent);

  font-size: 16px;

  font-weight: 500;

  letter-spacing: 7px;

  background:
    color-mix(in srgb, var(--surface) 55%, transparent);

  backdrop-filter: blur(12px);

  box-shadow:
    0 0 25px color-mix(in srgb, var(--accent) 8%, transparent);
}


/* =========================================
   HEADING
========================================= */

.about-content h2 {
  margin: 35px auto 25px;

  max-width: 1100px;

  color: var(--foreground);

  font-size: clamp(
    48px,
    5.3vw,
    82px
  );

  line-height: 0.98;

  letter-spacing: -4px;

  font-weight: 750;
}


/* =========================================
   DESCRIPTION
========================================= */

.about-content p {
  max-width: 950px;

  margin: 0 auto;

  color: var(--muted);

  font-size: 21px;

  line-height: 1.65;

  letter-spacing: -0.2px;
}


/* =========================================
   ANIMATIONS
========================================= */

@keyframes floatGlow1 {

  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(35px, -20px);
  }
}


@keyframes floatGlow2 {

  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(-30px, -25px);
  }
}


/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 768px) {

  .about-section {
    min-height: 650px;
  }

  .about-content {
    width: 90%;
  }

  .about-label {
    padding: 11px 23px;

    font-size: 12px;

    letter-spacing: 5px;
  }

  .about-content h2 {
    font-size: 45px;

    letter-spacing: -2.5px;

    line-height: 1.02;
  }

  .about-content p {
    font-size: 17px;

    line-height: 1.55;
  }

  .about-globe {
    width: 330px;
    height: 330px;

    right: -160px;

    opacity: 0.35;
  }

  .about-orbit {
    width: 700px;
  }

}


@media (max-width: 480px) {

  .about-section {
    min-height: 620px;
  }

  .about-content h2 {
    font-size: 38px;
  }

  .about-content p {
    font-size: 16px;
  }

  .about-grid {
    opacity: 0.4;
  }

  .about-globe {
    right: -200px;
    top: 25%;
  }
}
`