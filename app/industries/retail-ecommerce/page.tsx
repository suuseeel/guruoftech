import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { Layers, Smartphone, Store, Users } from "lucide-react";
import { HeroStage } from "@/components/industry/hero";
import {
  BodyPullQuote,
  CtaPanel,
  OfferNumerals,
  ProcessChevrons,
  RelatedIndustries,
  StatsOutline,
} from "@/components/industry/sections";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "Retail & eCommerce",
  description:
    brandText("GuruOfTech builds personalized retail and eCommerce experiences — mCommerce, multichannel commerce, B2B/B2C marketplaces and online storefronts.", brand),
  };
}

const offerings = [
  {
    icon: Smartphone,
    title: "mCommerce",
    desc: "Create a strong, secure, and comprehensive mobile infrastructure that complies with the changing expectations of mobile consumers throughout the world to run basic to complex mCommerce operations.",
  },
  {
    icon: Layers,
    title: "Multichannel eCommerce",
    desc: "Remove data barriers among various sales channels. A tailored customer experience is combined with online commerce channels through omnichannel eCommerce.",
  },
  {
    icon: Users,
    title: "B2B and B2C Marketplace",
    desc: "Manage a corporate eCommerce network with a B2B marketplace to enable merchants, wholesalers, and third-party sellers to acquire and sell goods. Your company is connected to a pool of customers by our specialists who construct eCommerce marketplaces.",
  },
  {
    icon: Store,
    title: "Online Storefront",
    desc: "Merchants can designate a separate area for selling their goods or services that would exclusively emphasize their online presence, prompt product delivery, and committed company promotion.",
  },
];

const steps = [
  { step: "Step 1", title: "Conceptualization", items: ["Submit your thoughts", "Describe the attributes.", "Establish a spending limit."] },
  { step: "Step 2", title: "Visualization", items: ["Create a technological stack.", "Make a prototype", "Desire a plan of action"] },
  { step: "Step 3", title: "Creation", items: ["Create a user interface", "Include a database", "Code the features and functionalities."] },
  { step: "Step 4", title: "Deployment", items: ["Test", "Install", "Launch"] },
];

const copy = {
  name: "Retail & eCommerce",
  image: "/homepage/Retail_3D.png",
  title: "Retail Application Disruption for a Personalized Experience",
  intro:
    "Impress your consumers with customized shopping experiences designed around the items and information that they desire, using pricey retail software solutions.",
  paragraphs: [
    "Any type of small or large business may quadruple its earnings with an internet presence. This is the only alternative that will provide your company with a speedy and worldwide presence. With relatively little effort and, of course, in line with the changing demands of the client, retail and eCommerce are improving the return on investment. eCommerce shops are showcasing retail firms online and attracting customers from all over the world.",
    "Making it possible for customers to purchase online is the main goal when creating mobile apps for eCommerce companies. Along with great shopping, it is also designed to improve the client experience. The emergence of mobile apps affects people's lifestyles for the better. All you need to do is maintain consumer engagement all the time to raise standards of behavior and the way we conduct business. Whether they are looking at the clothing, the grocery store, or even their house appliances before they make a purchase, you may keep the desired clients more enthused.",
    "Creating intriguing deals, executing campaigns, and sending out real-time notifications are just a few examples. The mobile applications include a variety of choices to handle the various ranges, multilingual stores, currencies, and simpler check-in/checkouts.",
  ],
};

export default function RetailPage() {
  return (
    <>
      <HeroStage {...copy} chips={offerings.map((o) => o.title)} />
      <BodyPullQuote paragraphs={copy.paragraphs} />
      <OfferNumerals offerings={offerings} />
      <ProcessChevrons
        title="The Process Supporting Your Needs"
        desc="To achieve your goals, we employ an agile and strategic framework."
        steps={steps}
      />
      <StatsOutline />
      <CtaPanel title="Building a retail or eCommerce product?" />
      <RelatedIndustries current="retail-ecommerce" />
    </>
  );
}
