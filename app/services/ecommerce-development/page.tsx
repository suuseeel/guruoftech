import type { Metadata } from "next";
import { Blocks, Plug, ScanSearch, ShoppingBag } from "lucide-react";
import { HeroStage } from "@/components/industry/hero";
import { BodyPullQuote, CtaPanel, OfferBento, StatsGradient } from "@/components/industry/sections";
import { ServiceArt } from "@/components/service/art";
import { AlsoCovers, RelatedLinks, WhyNumerals } from "@/components/service/blocks";
import { servicesMeta, whyPoints } from "@/components/service/data";

export const metadata: Metadata = {
  title: "eCommerce Development",
  description:
    "Bespoke eCommerce development services for various business models, without being tied to specific eCommerce platforms.",
};

const offerings = [
  {
    icon: ScanSearch,
    title: "eCommerce Audit",
    desc: "We examine eCommerce websites and infrastructure for code flaws, security holes, performance problems, and UX problems. After identifying problems, we prioritize them and develop plans for fixing them.",
  },
  {
    icon: Plug,
    title: "eCommerce Integrations",
    desc: "In order to connect different systems and enable automated data exchange, we bolster our expertise in eCommerce store development with API-based integration services.",
  },
  {
    icon: Blocks,
    title: "Custom eCommerce Development",
    desc: "Decoupling architectures allow us to achieve greater functional flexibility. We are also skilled in cutting-edge technologies that may help distinguish your brands, such as voice recognition or 3D modeling.",
  },
  {
    icon: ShoppingBag,
    title: "Platform-Based eCommerce Development",
    desc: "If your needs, fortunately, align with an eCommerce platform's functionality, we make the most of it and, if necessary, build unique features from scratch.",
  },
];

const paragraphs = [
  "eCommerce website design and development services create superior shopping experiences for modern consumers. Our eCommerce developers deliver custom storefronts and back-office digital solutions. With rising consumer expectations and advancing technology, we build complex eCommerce solutions using cutting-edge technologies including AR, AI, IoT, and blockchain to enhance customer experiences.",
  "We create websites that elegantly present products to encourage purchases, while also providing software for back-office eCommerce operations beyond storefront design.",
];

export default function EcommercePage() {
  return (
    <>
      <HeroStage
        name="eCommerce Development"
        title="eCommerce Development"
        intro="We provide bespoke eCommerce development services for various business models and avoid being tied to specific eCommerce platforms."
        art={<ServiceArt kind="commerce" />}
        chips={offerings.map((o) => o.title.replace(" Development", ""))}
      />
      <BodyPullQuote paragraphs={paragraphs} />
      <OfferBento offerings={offerings} />
      <AlsoCovers
        label="Also covers"
        items={["eCommerce Consulting", "B2B eCommerce", "B2C eCommerce", "Supply Chain Automation", "Online Order Management"]}
      />
      <WhyNumerals title="What Makes Us Your Best Choice for eCommerce Development?" points={whyPoints} />
      <StatsGradient />
      <CtaPanel title="Ready to build your online store?" />
      <RelatedLinks heading="More services" items={servicesMeta.filter((s) => s.slug !== "ecommerce-development").slice(1, 4)} />
    </>
  );
}
