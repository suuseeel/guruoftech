import type { Metadata } from "next";
import { FileCode2, Plug, RefreshCw, Server, Settings2 } from "lucide-react";
import { HeroSplit } from "@/components/industry/hero";
import { BodyLead, CtaBar, OfferRows } from "@/components/industry/sections";
import { TechCloud } from "@/components/service/art";
import { ProcessFive, RelatedLinks, TechTiles } from "@/components/service/blocks";
import { hireSteps, techMeta } from "@/components/service/data";

export const metadata: Metadata = {
  title: "Backend Development",
  description:
    "Hire backend developers with expertise across PHP, Laravel, .NET, Python, Java, Node.js and more — custom solutions from conception to implementation.",
};

const offerings = [
  {
    icon: Settings2,
    title: "Custom Backend Solutions",
    desc: "Tailored backend solutions built specifically for your business requirements, delivering rapid implementation at reasonable costs.",
  },
  {
    icon: RefreshCw,
    title: "Backend Refactoring",
    desc: "Our teams restructure your solution architecture while preserving frontend systems, ensuring seamless operation without incurring any technical costs.",
  },
  {
    icon: Plug,
    title: "API Integration Services",
    desc: "Dependable API development & integration services enabling application customization and data analysis aligned with your project needs.",
  },
  {
    icon: FileCode2,
    title: "Web Application Backend Development",
    desc: "We help you develop robust backends for web applications, leveraging the most recent technological advancements while managing costs.",
  },
];

const me = techMeta.find((t) => t.slug === "backend")!;

export default function BackendPage() {
  return (
    <>
      <HeroSplit
        name="Backend"
        title="Hire Backend Developers"
        intro="Our talented backend developers possess expertise across various tools and technologies. We offer backend development solutions tailored to your needs, moving ideas from conception to implementation quickly, accurately, and affordably."
        art={<TechCloud names={me.items} hub={Server} />}
      />
      <BodyLead
        paragraphs={[
          "We address the challenges of outdated backend solutions with an enterprise-grade backend development solution, with expertise in Laravel, Django, Node, PHP, and Python.",
        ]}
      />
      <TechTiles heading="Backend technologies we hire out" items={me.items} cols="lg:grid-cols-5" />
      <OfferRows offerings={offerings} />
      <ProcessFive title="GuruOfTech steps for hiring backend developers" steps={hireSteps} />
      <CtaBar title="Need backend developers?" />
      <RelatedLinks heading="More technologies" items={techMeta.filter((t) => t.slug !== "backend").slice(0, 3)} />
    </>
  );
}
