import type { Metadata } from "next";
import { Layers3, Layout, Palette, Plug, Server } from "lucide-react";
import { HeroOrbit } from "@/components/industry/hero";
import { BodyTwoCol, CtaPanel } from "@/components/industry/sections";
import { TechCloud } from "@/components/service/art";
import { AlsoCovers, ProcessFive, RelatedLinks, TechTiles } from "@/components/service/blocks";
import { OfferZigzag } from "@/components/service/blocks";
import { hireSteps, techMeta } from "@/components/service/data";

export const metadata: Metadata = {
  title: "Full Stack Development",
  description:
    "Power your business web application to meet and exceed business goals with full stack development services.",
};

const offerings = [
  { icon: Layout, title: "Frontend Development", desc: "Move forward with teams of professional full-stack developers that possess knowledge of all the newest front-end technologies and who exude clarity and intuition to create custom tech assets." },
  { icon: Server, title: "Backend Development", desc: "Deploy teams working on the backend of your web application to produce a product that satisfies the highest requirements, with airtight security, speed, stability, and years of expertise." },
  { icon: Plug, title: "APIs Development", desc: "Our specialists build custom APIs for seamless integration with various intermediaries to increase project value." },
  { icon: Palette, title: "Engaging Design UI UX", desc: "Make user experiences more appealing, dynamic, and delightful by using rich design components, coordinated color theory, and an exceptionally attractive overall visual language." },
];

const stack = ["Angular", "React", "Vue.js", "PHP", ".NET", "Laravel", "Symfony", "Python", "Java", "Django", "Spring / Hibernate", "Node.js"];

export default function FullStackPage() {
  return (
    <>
      <HeroOrbit
        name="Full Stack"
        title="Hire Full Stack Developers"
        intro="Power your business web application to meet and exceed business goals with our Full Stack development services."
        art={<TechCloud names={["MEAN", "MERN", "Angular", "React", "Vue.js", "Node.js", "Laravel", "Python"]} hub={Layers3} />}
      />
      <BodyTwoCol
        paragraphs={[
          "We bring complete full-stack expertise across multiple technology layers. Our approach combines professional teams with knowledge of current front-end frameworks and robust backend systems.",
          "Frontend: Angular, React, Vue. Backend: PHP, .NET, Laravel, Symfony, Python, Java, Django, Spring/Hibernate, Node.js.",
        ]}
      />
      <OfferZigzag offerings={offerings} />
      <AlsoCovers
        label="Specializations"
        items={[
          "Enterprise-Grade Website Development",
          "Full Stack Support & Maintenance",
          "ERP Development",
          "E-commerce Solutions",
          "Custom Web Applications",
          "Integration, Porting, Migration",
        ]}
      />
      <TechTiles heading="The full stack, layer by layer" items={stack} cols="lg:grid-cols-6" />
      <ProcessFive title="GuruOfTech steps for hiring full stack developers" steps={hireSteps} />
      <CtaPanel title="Need full stack developers?" />
      <RelatedLinks heading="More technologies" items={techMeta.filter((t) => t.slug !== "full-stack").slice(0, 3)} />
    </>
  );
}
