import type { Metadata } from "next";
import { FileText, LayoutTemplate, Store, Wrench } from "lucide-react";
import { HeroBanner } from "@/components/industry/hero";
import { BodyCard, CtaPanel, OfferBento } from "@/components/industry/sections";
import { TechCloud } from "@/components/service/art";
import { ProcessFive, RelatedLinks, TechTiles } from "@/components/service/blocks";
import { hireSteps, techMeta } from "@/components/service/data";

export const metadata: Metadata = {
  title: "CMS Development",
  description:
    "Hire CMS developers for custom content management systems on Sitecore, WordPress, Joomla, and Drupal.",
};

const offerings = [
  { icon: FileText, title: "CMS Development", desc: "Our team of committed CMS developers is skilled in creating distinctive and feature-rich sites that help you easily build an online presence for various industry verticals." },
  { icon: LayoutTemplate, title: "Drupal Development", desc: "Hire CMS programmers with expertise in creating scalable, affordable Drupal solutions that work flawlessly across devices." },
  { icon: Store, title: "Sitecore Development", desc: "Employ CMS programmers with expertise in creating scalable, affordable Sitecore sites that function flawlessly on all devices." },
  { icon: Wrench, title: "Joomla Development", desc: "In order to meet the specific requirements of your company, our CMS developers offer bespoke CMS development services." },
];

const me = techMeta.find((t) => t.slug === "cms")!;

export default function CmsPage() {
  return (
    <>
      <HeroBanner
        name="CMS"
        title="Hire CMS Developers"
        intro="We provide exceptional solutions by making the most of important online technologies. Our offshore web developers at GuruOfTech create both simple and complex websites and apps using cutting-edge web technology."
        art={<TechCloud names={me.items} hub={FileText} />}
        chips={me.items}
      />
      <BodyCard
        paragraphs={[
          "We offer a team of committed CMS developers skilled in creating distinctive, feature-rich sites across various industry verticals. We specialize in dedicated CMS developers with 5+ years of experience, available on hourly or full-time bases for commercial-quality, large-scale development projects.",
          "We produce custom content management systems using cutting-edge technologies including Sitecore, WordPress, Joomla, and Drupal, delivered on schedule by experienced offshore developers.",
        ]}
      />
      <OfferBento offerings={offerings} />
      <TechTiles heading="Content platforms we build on" items={me.items} cols="lg:grid-cols-4" />
      <ProcessFive title="GuruOfTech steps for hiring CMS developers" steps={hireSteps} />
      <CtaPanel title="Need CMS developers?" />
      <RelatedLinks heading="More technologies" items={techMeta.filter((t) => t.slug !== "cms").slice(0, 3)} />
    </>
  );
}
