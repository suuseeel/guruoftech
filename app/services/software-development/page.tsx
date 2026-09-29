import type { Metadata } from "next";
import { Boxes, Building2, Bug, Globe, Lightbulb, MapPin, PenTool, RefreshCw, Rocket } from "lucide-react";
import { HeroEditorial } from "@/components/industry/hero";
import { CtaBar, StatsStrip } from "@/components/industry/sections";
import { ServiceArt } from "@/components/service/art";
import { OfferDense, ProcessFive, RelatedLinks, WhyChecklist } from "@/components/service/blocks";
import { hireSteps, servicesMeta, whyPoints } from "@/components/service/data";

export const metadata: Metadata = {
  title: "Software Development",
  description:
    "Our software development services assist organizations in turning their business ideas into reality by building and designing software.",
};

const offerings = [
  {
    icon: Globe,
    title: "Offshore Software Development",
    desc: "As a recognized and experienced offshore development company, we give you access to the best experts who excel at working with a wide range of development technologies, programming languages, tools, and frameworks.",
  },
  {
    icon: Lightbulb,
    title: "Software Consulting",
    desc: "We can automate processes and streamline customer service to increase overall productivity for your business. We ensure that you are entirely focused on your business objectives by removing the IT barriers preventing the growth of your company.",
  },
  {
    icon: Rocket,
    title: "Startup Consulting",
    desc: "We are a full-service startup consulting firm committed to helping business owners develop successful business plans and software product plans.",
  },
  {
    icon: PenTool,
    title: "Product UI UX Design",
    desc: "We guarantee that each of our numerous UI solutions is tailored to your specific audience and upholds client values. In this way, you can be sure that the objectives of your business have a strong foundation for fulfillment.",
  },
  {
    icon: Bug,
    title: "Software Testing",
    desc: "Our top-tier software testing services are both high-quality and reasonably priced. We have helped clients from a number of sectors create top-notch mobile applications with the help of our assurance service.",
  },
  {
    icon: Boxes,
    title: "Product Development",
    desc: "Do you find it challenging to expand the product development team in order to meet the rapidly growing demand for your product? We can help you put together a more concentrated or larger product development team.",
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    desc: "Our digital transformation solutions can help you fill in any gaps in your strategy and invest in the greatest open technologies to advance your digital strategy. We use the right digital transformation technology to modernize the customer experience.",
  },
  {
    icon: Building2,
    title: "Enterprise Software Development",
    desc: "Looking for an enterprise-level software development team? Dedicated to quality control and short turn-around times, our software developers ensure that you receive results that really matter!",
  },
  {
    icon: MapPin,
    title: "Nearshore Software Development",
    desc: "We work together with our clients on all aspects of nearshoring, from creating a work environment that works for your team to offering project management services that hasten your time to market.",
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <HeroEditorial
        label="Service"
        name="Software Development"
        index="01"
        title="We offer Software Development Services To Meet All Your Business Needs!"
        intro="Our software development services assist organizations in turning their business ideas into reality by building and designing software."
        art={<ServiceArt kind="dev" />}
      />
      <OfferDense offerings={offerings} heading="Nine ways we can plug into your product" />
      <StatsStrip />
      <WhyChecklist title="What Makes Us Your Best Choice for Software Development Services?" points={whyPoints} />
      <ProcessFive title="Steps for hiring our software developers" steps={hireSteps} />
      <CtaBar title="Have a software idea to build?" />
      <RelatedLinks heading="More services" items={servicesMeta.filter((s) => s.slug !== "software-development").slice(0, 3)} />
    </>
  );
}
