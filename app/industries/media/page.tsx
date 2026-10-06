import type { Metadata } from "next";
import { getRequestBrand } from "@/lib/brand-server";
import { brandText } from "@/lib/brand";
import { Contact, Lightbulb, Lock, Mic, MessageSquareWarning, Music, Newspaper, Tags, UserMinus, Video, Wrench } from "lucide-react";
import { HeroOrbit } from "@/components/industry/hero";
import {
  AIOpportunities,
  BodyTwoCol,
  CtaImage,
  OfferStagger,
  ProcessLabelsStrip,
  RelatedIndustries,
  ScenarioCard,
  StatsCircles,
} from "@/components/industry/sections";

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
  title: "Media & Entertainment",
  description:
    brandText("GuruOfTech builds web, mobile and software applications for multimedia content distribution and live streaming — music, video, news aggregation and podcasting.", brand),
  };
}

const offerings = [
  {
    icon: Music,
    title: "Music Streaming",
    desc: "Grow while listening to the melodies of your own music streaming app, created and produced by our skilled team of entertainment app developers.",
  },
  {
    icon: Video,
    title: "Video Streaming",
    desc: "By sharing your strategy with our business professionals developing user-interactive digital solutions, you can take advantage of the rapidly expanding market for video streaming applications.",
  },
  {
    icon: Newspaper,
    title: "News Aggregator",
    desc: "Assist users in accessing syndicated news content across different platforms through centralized digital spaces available through news aggregators.",
  },
  {
    icon: Mic,
    title: "Podcasting",
    desc: "By using a user-friendly program that allows for interactive content creation, sharing, and customization, you can spread the word.",
  },
];

const steps = [
  { icon: Lock, title: "Conceptualization" },
  { icon: Lightbulb, title: "Visualization" },
  { icon: Contact, title: "Deployment" },
  { icon: Wrench, title: "Management Goals" },
];

const copy = {
  name: "Media & Entertainment",
  image: "/homepage/Media_3D.png",
  title:
    "For Effective Multimedia Content Distribution, Web, Mobile, and Software Applications Involving Live Streaming",
  intro:
    "GuruOfTech offers a range of services to guarantee the flow of media assets, including mobile apps, subscription management platforms, social networking tools, and a cutting-edge web portal.",
  paragraphs: [
    "The media and entertainment sector is greatly profiting from technology and mobile app solutions. As we can see, there are several social media sites that provide us with news on the entertainment sector. The sectors involved in it may better understand public expectations by using the entertainment and media mobile app solutions to connect with their followers, the general public, and the public's reactions.",
    "Public figures, gaming companies, publishers, and the music business need to become involved with mobile applications if they want to gain more from the rising demand. People can appreciate and watch their supporters' thanks to seamless contact with prominent personalities. The creation of entertainment mobile apps also makes it simple and affordable to promote movies and music CDs.",
  ],
};

const aiOpportunities = [
  { icon: Tags, title: "Content tagging", desc: "Auto-tag video and audio for search and recommendations, instead of a manual metadata backlog." },
  { icon: UserMinus, title: "Churn prediction", desc: "Flag subscribers likely to cancel based on viewing drop-off, early enough for a win-back offer to actually land." },
  { icon: MessageSquareWarning, title: "Automated content moderation", desc: "Pre-screen user-generated comments and uploads, so the moderation team reviews the edge cases instead of everything." },
];

export default function MediaPage() {
  return (
    <>
      <HeroOrbit {...copy} />
      <BodyTwoCol paragraphs={copy.paragraphs} />
      <OfferStagger offerings={offerings} />
      <AIOpportunities
        title="Where AI fits into media & entertainment software"
        desc="Beyond the streaming and content platforms above, these are the features that protect retention and moderation workload."
        items={aiOpportunities}
      />
      <ScenarioCard
        title="Catching cancellations two weeks out"
        scenario="A streaming platform only found out about cancellations after they happened. A churn-risk model built on viewing drop-off patterns flags at-risk subscribers two weeks out — early enough for a win-back offer to actually land before they cancel."
      />
      <StatsCircles />
      <ProcessLabelsStrip title="Our Process" steps={steps} />
      <CtaImage title="Building a media or entertainment product?" image={copy.image} />
      <RelatedIndustries current="media" />
    </>
  );
}
