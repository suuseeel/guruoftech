import type { Metadata } from "next";
import { Code2, Compass, Contact, Lightbulb, Lock, Rocket, Wrench, Workflow } from "lucide-react";
import { HeroSplit } from "@/components/industry/hero";
import {
  BodyNumbered,
  CtaPanel,
  OfferRoute,
  ProcessLabelsPills,
  RelatedIndustries,
  StatsStrip,
} from "@/components/industry/sections";

export const metadata: Metadata = {
  title: "Logistics & Transportation",
  description:
    "GuruOfTech builds IT solutions for integrated logistics and transport — discovery, MVP development, migration and application development.",
};

const offerings = [
  {
    icon: Compass,
    title: "Discovery",
    desc: "Utilizing thorough documentation, analytical validation, and parameterized testing processes, explore the possibilities of your logistics app idea.",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    desc: "Adopt a smart product development strategy by producing an MVP that includes the essential features and functions built in less time and money",
  },
  {
    icon: Workflow,
    title: "Migration",
    desc: "Utilize technology advancements to improve the technical architecture of your logistics mobile application.",
  },
  {
    icon: Code2,
    title: "Application Development",
    desc: "After the design, our app developers guarantee a complete application of their expertise into a technologically advanced application that stands out distinctively among a varied user base.",
  },
];

const steps = [
  { icon: Lock, title: "Conceptualization" },
  { icon: Lightbulb, title: "Visualization" },
  { icon: Contact, title: "Deployment" },
  { icon: Wrench, title: "Management Goals" },
];

const copy = {
  name: "Logistics & Transportation",
  image: "/homepage/Logistics_3D.png",
  title:
    "IT Solutions for Integrated Logistics & Transport to Serve Customers and Grow The Business",
  intro:
    "We are utilizing next-generation technology to provide a wonderful client experience through logical logistics and transportation IT solutions.",
  paragraphs: [
    "The transportation and logistics sector experiences rapid growth and prosperity. The industry observes daily massive transportation of people and packages by air, sea, and land from one place to another. Logistics IT development services greatly simplify corporate processes.",
    "Innovative app development is in high demand and has a significant influence on the logistics industry. The organization benefits from GuruOfTech's logistics and transportation IT development process with cost-effective transportation, fuel management, compliance, location monitoring systems, and a reduction in vehicle investment risks, which boosts productivity and efficiency.",
    "We give real-time insight, increased productivity, and delivery benchmarks through our web design and development for transport & logistics warehouse services.",
    "In order to compete with the tough and growing logistics competition, fleet management processes have been incorporated into logistics app development.",
  ],
};

export default function LogisticsPage() {
  return (
    <>
      <HeroSplit {...copy} route />
      <BodyNumbered paragraphs={copy.paragraphs} />
      <OfferRoute offerings={offerings} />
      <StatsStrip />
      <ProcessLabelsPills title="Our Process" steps={steps} />
      <CtaPanel title="Building a logistics product?" />
      <RelatedIndustries current="logistics" />
    </>
  );
}
