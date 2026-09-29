import type { Metadata } from "next";
import { Layers } from "lucide-react";
import { HeroEditorial } from "@/components/industry/hero";
import { BodyCard, CtaPanel } from "@/components/industry/sections";
import { TechCloud } from "@/components/service/art";
import { ProcessFive, RelatedLinks, TechDuo, TechTiles } from "@/components/service/blocks";
import { hireSteps, techMeta } from "@/components/service/data";

export const metadata: Metadata = {
  title: "Frontend Development",
  description:
    "Hire React, Angular, Vue.js and HTML/CSS developers to build powerful, user-friendly interfaces on the most modern web frameworks.",
};

const me = techMeta.find((t) => t.slug === "frontend")!;

export default function FrontendPage() {
  return (
    <>
      <HeroEditorial
        label="Technology"
        name="Frontend"
        index="02"
        title="Hire Frontend Developers"
        intro="Our offshore programmers have successfully completed various frontend projects. We focus on the most modern web frameworks to create powerful, user-friendly solutions for our customers — from healthcare and real estate to enterprise."
        art={<TechCloud names={me.items} hub={Layers} />}
      />
      <TechDuo
        groups={[
          {
            title: "React",
            icon: "React",
            blurb:
              "You can count on us from requirements gathering through post-release support. Our React specialists are proficient across all ReactJS versions from 0.3.0 to current releases, using JavaScript, Redux, ES6, Git, and JSX.",
            cards: [
              { title: "React Custom Web App Development", desc: "Hire React developers that can deliver projects swiftly and offer dependable assistance for ongoing projects." },
              { title: "React UI/UX Development", desc: "By utilizing UI/UX frameworks to their full potential, we aim to deliver a fantastic user experience on all devices." },
              { title: "ReactJS Plugin Development", desc: "Hire dedicated React JS app developers from GuruOfTech that can provide unique plugins that will increase functionality." },
              { title: "QA & Testing", desc: "When you employ our devoted testers, we make sure that your project is completely tested and complies with all specifications." },
            ],
          },
          {
            title: "Angular",
            icon: "Angular",
            blurb:
              "We offer customized, cost-effective AngularJS development using Agile cycles and improved UX design, creating cutting-edge digital products with user-friendly features and perfect functionality.",
            cards: [
              { title: "Angular Single-page App Development", desc: "We have skilled Angular developers who can work with you to quickly and easily create an effective and strong SPA." },
              { title: "AngularJS Plug-in Creation", desc: "Our team of skilled AngularJS developers can create bespoke plug-ins to meet your unique requirements." },
              { title: "Platform Migration & Re-Engineering Services", desc: "For a better user experience, our remote Angular engineers can help you re-engineer and migrate your current projects to Angular." },
              { title: "Enterprise Angular Web Apps", desc: "For major businesses, our offshore Angular developers create scalable, dependable, and secure online apps." },
            ],
          },
        ]}
      />
      <BodyCard
        paragraphs={[
          "Our development approach incorporates TypeScript for cross-platform applications, plus Redux, async-await patterns, and reusable components to enhance security, performance, and reliability. We also assist with migrating existing applications.",
        ]}
      />
      <TechTiles heading="Frontend technologies" items={me.items} cols="lg:grid-cols-6" />
      <ProcessFive title="GuruOfTech steps for hiring frontend developers" steps={hireSteps} />
      <CtaPanel title="Need frontend developers?" />
      <RelatedLinks heading="More technologies" items={techMeta.filter((t) => t.slug !== "frontend").slice(0, 3)} />
    </>
  );
}
