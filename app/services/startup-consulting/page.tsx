import type { Metadata } from "next";
import { Bot, Glasses, Radio, Sparkles } from "lucide-react";
import { HeroSplit } from "@/components/industry/hero";
import { BodyLead, CtaPanel, OfferStagger, StatsOutline } from "@/components/industry/sections";
import { ServiceArt } from "@/components/service/art";
import { RelatedLinks, WhyChecklist } from "@/components/service/blocks";
import { servicesMeta, whyPoints } from "@/components/service/data";

export const metadata: Metadata = {
  title: "Startup Consulting",
  description:
    "Startup consulting to develop a cost-effective, easy-to-manage scalable business — AI/ML, RPA, IoT, and VR/AR.",
};

const offerings = [
  {
    icon: Sparkles,
    title: "ML (Machine Learning) or AI (Artificial Intelligence)",
    desc: "Our expertise can develop solutions for intelligent business workflows, which will increase operational effectiveness and need less human effort. We have extensive experience creating AI & ML solutions to automate and grow your existing business.",
  },
  {
    icon: Bot,
    title: "RPA (Robotic Process Automation)",
    desc: "Our team of RPA consultants uses automation and cutting-edge technology to grow your enterprises. We accomplish this by allowing your team to concentrate on what matters most by offering you industry-leading knowledge, technology, and implementation assistance.",
  },
  {
    icon: Radio,
    title: "Internet of Things (IoT)",
    desc: "We are experts in IoT for businesses, industries, and consumers. We assist organizations in maximizing the potential of connected devices through the design of IoT architecture, platform development, backend engineering, and analytics configuration.",
  },
  {
    icon: Glasses,
    title: "VR/AR Development",
    desc: "Our AR & VR solutions are industry-specific and serve immersive experiences for clients. We put into practice 2D/3D projections, navigation, and AR-powered events and training sessions for businesses and users around the world.",
  },
];

const paragraphs = [
  "With our Startup Consulting Services, GuruOfTech has helped startups all around the world become more successful. We are a full-service startup consulting company devoted to assisting entrepreneurs in the planning and design of software products, as well as the establishment of a profitable business model.",
  "We have a team of Startup Consulting specialists who are proficient in a variety of technologies & approaches. Our startup experts are knowledgeable about cutting-edge technologies that are essential to new businesses.",
];

export default function StartupPage() {
  return (
    <>
      <HeroSplit
        route
        name="Startup Consulting"
        title="Startup Consulting"
        intro="We aim to develop a cost-effective, easy-to-manage scalable business that fits your needs."
        art={<ServiceArt kind="startup" />}
      />
      <OfferStagger offerings={offerings} />
      <BodyLead paragraphs={paragraphs} />
      <StatsOutline />
      <WhyChecklist title="What Makes Us Your Best Choice for Startup Consulting?" points={whyPoints} />
      <CtaPanel title="Got a startup idea?" />
      <RelatedLinks heading="More services" items={servicesMeta.filter((s) => s.slug !== "startup-consulting").slice(0, 3)} />
    </>
  );
}
