import type { Metadata } from "next";
import { Accessibility, Cog, ListChecks, ShieldCheck } from "lucide-react";
import { HeroOrbit } from "@/components/industry/hero";
import { BodyTwoCol, CtaBar, OfferNumerals, StatsTiles } from "@/components/industry/sections";
import { ServiceArt } from "@/components/service/art";
import { RelatedLinks, WhyCards } from "@/components/service/blocks";
import { servicesMeta, whyPoints } from "@/components/service/data";

export const metadata: Metadata = {
  title: "Software Testing",
  description:
    "Control the product lifecycle and product quality with high-quality project execution through quality assurance and testing.",
};

const offerings = [
  {
    icon: ShieldCheck,
    title: "Security Testing",
    desc: "Our security testing services are designed to assist our clients in achieving all requirements, so they can satisfy consumer demands for safety in a time when cybercrime is more pervasive than ever in the field of developing mobile apps.",
  },
  {
    icon: Cog,
    title: "Automated Testing",
    desc: "As the top provider of automated testing services for mobile applications, we guarantee long-term success for both enterprises and small businesses.",
  },
  {
    icon: Accessibility,
    title: "Accessibility Testing",
    desc: "Our testers evaluate a product's usability among users with various disabilities while it is still in the product development stage. They make certain that mobile and web applications are usable by everyone, including those who have visual impairments or other physical or mental disabilities.",
  },
  {
    icon: ListChecks,
    title: "Functional Testing",
    desc: "Our devoted team of testers works relentlessly to spot mistakes and other potential issues with a system while concentrating on evaluating the functioning of a system or component. They confirm and guarantee that a system complies with its criteria.",
  },
];

const paragraphs = [
  "We are a premier provider of software testing services, offering premium and cost-effective testing solutions. Our approach ensures the development of high-quality applications with strong user adoption rates. Our team validates every aspect of mobile app testing within allocated timeframes and budgets, using skilled professionals.",
  "We have assisted clients across various industries in producing high-quality mobile applications through our assurance services. We provide comprehensive software application testing covering functional tests, load tests, and performance operations.",
];

export default function TestingPage() {
  return (
    <>
      <HeroOrbit
        name="Software Testing"
        title="Software Testing"
        intro="Control the product lifecycle, the stages of development, and accurate product quality information with high-quality project execution through quality assurance and testing."
        art={<ServiceArt kind="testing" />}
      />
      <BodyTwoCol paragraphs={paragraphs} />
      <OfferNumerals offerings={offerings} />
      <StatsTiles />
      <WhyCards title="What Makes Us Your Best Choice for Software Testing Services?" points={whyPoints} />
      <CtaBar title="Want your product tested properly?" />
      <RelatedLinks heading="More services" items={servicesMeta.filter((s) => s.slug !== "software-testing").slice(0, 3)} />
    </>
  );
}
