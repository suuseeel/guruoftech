import type { Metadata } from "next";
import { Contact, Headphones, Lightbulb, Lock, Plug, Repeat, Route, Smartphone, Wrench, MessagesSquare } from "lucide-react";
import { HeroSplit } from "@/components/industry/hero";
import {
  AIOpportunities,
  BodyCard,
  CtaPanel,
  OfferStagger,
  ProcessLabelsRow,
  RelatedIndustries,
  ScenarioCard,
  StatsTiles,
} from "@/components/industry/sections";

export const metadata: Metadata = {
  title: "Travel & Tourism",
  description:
    "User-friendly travel web and app solution development — custom apps, third-party integration, consulting and migration.",
};

const offerings = [
  { icon: Smartphone, title: "Custom App Development", desc: "With the help of a skilled team that develops travel apps, you can change the way your business is seen by providing consumers with a rich user experience." },
  { icon: Plug, title: "Third-party Integration", desc: "By integrating third-party tools and apps into your travel solutions through a quick and efficient deployment procedure, you may increase your company's capabilities." },
  { icon: MessagesSquare, title: "Consulting", desc: "Consult a resource that possesses the expertise and experience necessary to transform your project concept into a complete travel solution." },
  { icon: Repeat, title: "Migration", desc: "By offering enhanced travel app solutions to your consumers through a seamless migration procedure, you may establish yourself as a leader." },
];

const steps = [
  { icon: Lock, title: "Conceptualization" },
  { icon: Lightbulb, title: "Visualization" },
  { icon: Wrench, title: "Creation" },
  { icon: Contact, title: "Deployment" },
];

const copy = {
  name: "Travel & Tourism",
  image: "/homepage/Travel_3D.png",
  title: "Enhance Your Travel Business With Our IT Technology",
  intro:
    "Our user-friendly travel web and app solution development services will help you grow your business by providing a more progressive user experience.",
  paragraphs: [
    "Modern travelers expect businesses to use technology, preferring digital communication and mobile solutions for booking trips and vacations.",
    "GuruOfTech is a premier travel app development company that doesn't just promise results but ensures quality delivery. We help agencies modernize their offerings through web and mobile applications that showcase travel packages — from local adventures to international trips.",
  ],
};

const aiOpportunities = [
  { icon: Route, title: "Itinerary recommendations", desc: "Suggest add-ons and activities based on a traveler's actual trip details, not a generic upsell list." },
  { icon: Headphones, title: "Support ticket triage", desc: "Route travel-disruption queries — cancellations, rebooking — to the right queue automatically, instead of a first-come-first-served inbox." },
  { icon: Plug, title: "Dynamic pricing", desc: "Adjust pricing based on demand and availability signals in real time, rather than a fixed seasonal calendar." },
];

export default function TravelPage() {
  return (
    <>
      <HeroSplit {...copy} reverse />
      <BodyCard paragraphs={copy.paragraphs} />
      <OfferStagger offerings={offerings} />
      <AIOpportunities
        title="Where AI fits into travel software"
        desc="These are the features that matter most once the booking engine itself is working."
        items={aiOpportunities}
      />
      <ScenarioCard
        title="Separating urgent from routine during a disruption"
        scenario="A booking platform's support queue got flooded every time a route was disrupted. An AI triage step separates 'needs a human right now' from 'can wait for a batched update,' so an urgent rebooking doesn't sit behind routine questions in the same queue."
      />
      <StatsTiles />
      <ProcessLabelsRow title="The Process Supporting Your Needs" steps={steps} />
      <CtaPanel title="Building a travel product?" />
      <RelatedIndustries current="travel" />
    </>
  );
}
