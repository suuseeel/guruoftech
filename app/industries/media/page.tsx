import type { Metadata } from "next";
import { Contact, Lightbulb, Lock, Mic, Music, Newspaper, Video, Wrench } from "lucide-react";
import { HeroOrbit } from "@/components/industry/hero";
import {
  BodyTwoCol,
  CtaImage,
  OfferStagger,
  ProcessLabelsStrip,
  RelatedIndustries,
  StatsCircles,
} from "@/components/industry/sections";

export const metadata: Metadata = {
  title: "Media & Entertainment",
  description:
    "GuruOfTech builds web, mobile and software applications for multimedia content distribution and live streaming — music, video, news aggregation and podcasting.",
};

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

export default function MediaPage() {
  return (
    <>
      <HeroOrbit {...copy} />
      <BodyTwoCol paragraphs={copy.paragraphs} />
      <OfferStagger offerings={offerings} />
      <StatsCircles />
      <ProcessLabelsStrip title="Our Process" steps={steps} />
      <CtaImage title="Building a media or entertainment product?" image={copy.image} />
      <RelatedIndustries current="media" />
    </>
  );
}
