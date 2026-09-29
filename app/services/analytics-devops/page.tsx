import type { Metadata } from "next";
import { Cloud, Database, GitBranch } from "lucide-react";
import { HeroBanner } from "@/components/industry/hero";
import { OfferAccordion } from "@/components/industry/interactive";
import { toClientOfferings } from "@/components/industry/serialize";
import { BodyDropcap, CtaPanel, StatsCircles } from "@/components/industry/sections";
import { ServiceArt } from "@/components/service/art";
import { RelatedLinks, WhyStrip } from "@/components/service/blocks";
import { servicesMeta, whyPoints } from "@/components/service/data";

export const metadata: Metadata = {
  title: "Analytics & DevOps",
  description:
    "An Analytics and DevOps service provider to aid your successful transformations — big data, DevOps consulting, AWS, Azure, and Google Cloud.",
};

const offerings = [
  {
    icon: Database,
    title: "Big Data Consulting & Management",
    desc: "Our big data specialists have the knowledge and practical experience to guide you through the constantly evolving big data landscape.",
  },
  {
    icon: GitBranch,
    title: "DevOps Consulting",
    desc: "We automate workflows and deliver the highest-quality products through quick iterations using our DevOps consulting services and agile practices.",
  },
  {
    icon: Cloud,
    title: "Amazon AWS",
    desc: "Make use of AWS to choose the platform for your web apps, programming language, operating system, and other services you need.",
  },
  {
    icon: Cloud,
    title: "Azure",
    desc: "We provide IaaS (Infrastructure as a Service) and PaaS (Product as a Service) for DevOps, the Internet of Things, ML, AI, security, analytics.",
  },
  {
    icon: Cloud,
    title: "Google Cloud Platform",
    desc: "You can create, release, and scale applications, websites, and services using the Google Cloud Platform on the same infrastructure as Google.",
  },
];

const paragraphs = [
  "We assist organizations in bridging data gaps, gaining unmatched insight into operations, and facilitating essential data-driven activities through the creation of BI strategies, designs, and optimized BI architectures. With our cutting-edge dashboard & analytics solutions, you can improve corporate performance, hasten decision-making, reduce risks, and efficiently optimize costs.",
  "We offer a DevOps as a Service solution that combines teamwork, monitoring, tool-chain pipelines, automation, and cloud adoption to boost productivity, reduce time to market, and improve quality. Our team's years of expertise allow for quick application onboarding by automating the whole delivery process and supporting continuous integration and development across the top cloud platforms.",
  "Our experts have created engaging and user-friendly applications that have benefited a variety of business types and sizes.",
  "A DevOps implementation plan can assist you in building a simplified software delivery pipeline and ensuring the ongoing release of high-quality software by helping you choose the appropriate tools and develop the appropriate channels.",
];

export default function AnalyticsDevopsPage() {
  return (
    <>
      <HeroBanner
        name="Analytics & DevOps"
        title="An Analytics and DevOps Service Provider to Aid Your Successful Transformations!"
        intro="Bridge data gaps, gain insight into operations, and ship faster with BI strategy, DevOps as a Service, and cloud adoption."
        art={<ServiceArt kind="analytics" />}
        chips={["Big Data", "DevOps", "AWS", "Azure", "Google Cloud"]}
      />
      <BodyDropcap paragraphs={paragraphs} />
      <OfferAccordion
        offerings={toClientOfferings(offerings)}
        heading="Employ a DevOps Consulting Firm to Create an Automation and Agility Culture!"
      />
      <StatsCircles />
      <WhyStrip title="What Makes Us Your Best Choice for Analytics and DevOps Services?" points={whyPoints} />
      <CtaPanel title="Ready to modernise your pipeline?" />
      <RelatedLinks heading="More services" items={servicesMeta.filter((s) => s.slug !== "analytics-devops").slice(0, 3)} />
    </>
  );
}
