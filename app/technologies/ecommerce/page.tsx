import type { Metadata } from "next";
import { Clock, GraduationCap, Sparkles, Zap } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { HeroSplit } from "@/components/industry/hero";
import { BodyNumbered, CtaBar, OfferNumerals } from "@/components/industry/sections";
import { TechCloud } from "@/components/service/art";
import { ProcessFive, RelatedLinks, TechTiles } from "@/components/service/blocks";
import { hireSteps, techMeta } from "@/components/service/data";

export const metadata: Metadata = {
  title: "eCommerce Platforms",
  description:
    "Hire Magento, Shopify and WooCommerce developers to build eCommerce websites tailored to your business needs.",
};

const offerings = [
  { icon: GraduationCap, title: "Knowledgeable Magento Developers", desc: "When it comes to building eCommerce websites that are viable in the market, our knowledgeable Magento developers are always prepared to turn any ideas into reality." },
  { icon: Sparkles, title: "Acceptant of New Technologies", desc: "The most recent technology advances are of particular interest to our Magento developers. They will put into practice the knowledge they get through webinars." },
  { icon: Zap, title: "Fast Developer Onboarding", desc: "If our Magento developer passes the interview stages, they will be able to join the client's technical staff or start working for them within 24 hours." },
  { icon: Clock, title: "Round-a-clock Mobility", desc: "Our Magento developers are available at all times and locations to construct reputable, high-quality apps for our customers' businesses." },
];

const paragraphs = [
  "When seeking to construct viable eCommerce platforms, you get knowledgeable developers prepared to actualize business concepts while managing essential development procedures.",
  "Our Magento professionals maintain current awareness of technological innovations through ongoing education, reflecting our commitment to delivering superior business support.",
  "Qualified developers can integrate into your team rapidly — within 24 hours following interview clearance — with consultation support ensuring adherence to project schedules.",
  "Our development team provides continuous availability across all time zones to deliver robust, quality applications supporting business expansion in digital commerce environments.",
  "We assist e-retailers in developing customer-centered transformation strategies by deploying skilled Magento developers at economical rates, using contemporary methodologies and industry standards for custom theme development.",
];

const me = techMeta.find((t) => t.slug === "ecommerce")!;

export default function EcommerceTechPage() {
  return (
    <>
      <HeroSplit
        reverse
        name="eCommerce"
        title="Hire eCommerce Developers"
        intro="We are a reputable development company that uses Magento services to create eCommerce websites. Our team of committed developers has the expertise to create eCommerce websites that are tailored to the needs of the client's business."
        art={<TechCloud names={me.items} hub={ShoppingBag} />}
      />
      <TechTiles heading="Platforms we build on" items={me.items} cols="lg:grid-cols-3" />
      <OfferNumerals offerings={offerings} />
      <BodyNumbered paragraphs={paragraphs} />
      <ProcessFive title="GuruOfTech steps for hiring eCommerce developers" steps={hireSteps} />
      <CtaBar title="Need eCommerce developers?" />
      <RelatedLinks heading="More technologies" items={techMeta.filter((t) => t.slug !== "ecommerce").slice(0, 3)} />
    </>
  );
}
