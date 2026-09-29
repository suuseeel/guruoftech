// "use client";

// import React from "react";
// import "./TechnologyDNA.css";
// import { useEffect, useLayoutEffect, useRef, useState } from "react";


// import {
//   Monitor,
//   Server,
//   Cloud,
//   ShoppingCart,
//   Sparkles,
//   Bot,
//   ChevronRight,
// } from "lucide-react";

// import {
//   SiReact,
//   SiNextdotjs,
//   SiFlutter,
//   SiDotnet,
//   SiNodedotjs,
//   SiPhp,
//   SiLaravel,
//   SiPython,
//   SiDjango,
//   SiPostgresql,
//   SiFirebase,
//   SiShopify,
//   SiWordpress,
//   SiDocker,
//   SiClaude,
//   SiGooglegemini,
//   SiHuggingface,
//   SiLangchain,
//   SiTensorflow,
//   SiPytorch,
//   SiN8N,
// } from "react-icons/si";

// import { RiOpenaiFill } from "react-icons/ri";

// import {
//   FaAws,
//   FaMagento,
//   FaJava,
// } from "react-icons/fa6";

// /* =========================================================
//    TYPES
// ========================================================= */

// type IconComponent = React.ComponentType<{
//   className?: string;
//   style?: React.CSSProperties;
// }>;

// type TechnologyItem = {
//   name: string;
//   Icon: IconComponent;
//   color?: string;
// };

// type TechnologyCategory =
//   | "llm"
//   | "ai"
//   | "backend"
//   | "commerce"
//   | "cloud"
//   | "webMobile";

// type TechnologyData = Record<
//   TechnologyCategory,
//   TechnologyItem[]
// >;

// /* =========================================================
//    TECHNOLOGY DATA
// ========================================================= */

// const tech: TechnologyData = {
//   /* ---------------- AI & LLM ---------------- */

//   llm: [
//     { name: "OpenAI", Icon: RiOpenaiFill, color: "#10A37F" },
//     { name: "Claude", Icon: SiClaude, color: "#D97757" },
//     { name: "Gemini", Icon: SiGooglegemini, color: "var(--tdna-c-gemini)" },
//     { name: "Hugging Face", Icon: SiHuggingface, color: "var(--tdna-c-hf)" },
//   ],

//   /* ---------------- AI, ML & AUTOMATION ---------------- */

//   ai: [
//     { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
//     { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
//     { name: "LangChain", Icon: SiLangchain, color: "var(--tdna-c-langchain)" },
//     { name: "n8n", Icon: SiN8N, color: "#EA4B71" },
//   ],

//   /* ---------------- BACKEND ---------------- */

//   backend: [
//     { name: ".NET", Icon: SiDotnet, color: "#512BD4" },
//     { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
//     { name: "PHP", Icon: SiPhp, color: "#8892BF" },
//     { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
//     { name: "Python", Icon: SiPython, color: "#3776AB" },
//     { name: "Django", Icon: SiDjango, color: "#44B78B" },
//     { name: "Java", Icon: FaJava, color: "#F89820" },
//   ],

//   /* ---------------- COMMERCE ---------------- */

//   commerce: [
//     { name: "Shopify", Icon: SiShopify, color: "#95BF47" },
//     { name: "Magento", Icon: FaMagento, color: "#EE672F" },
//     { name: "WordPress", Icon: SiWordpress, color: "#21A0D2" },
//   ],

//   /* ---------------- DATA & CLOUD ---------------- */

//   cloud: [
//     { name: "AWS", Icon: FaAws, color: "#FF9900" },
//     { name: "Docker", Icon: SiDocker, color: "#2496ED" },
//     { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
//     { name: "Firebase", Icon: SiFirebase, color: "var(--tdna-c-firebase)" },
//   ],

//   /* ---------------- WEB & MOBILE ---------------- */

//   webMobile: [
//     { name: "React", Icon: SiReact, color: "#61DAFB" },
//     { name: "Next.js", Icon: SiNextdotjs, color: "var(--tdna-c-next)" },
//     { name: "Flutter", Icon: SiFlutter, color: "#54C5F8" },
//     { name: "React Native", Icon: SiReact, color: "#61DAFB" },
//   ],
// };

// /* =========================================================
//    TECHNOLOGY ITEMS
// ========================================================= */

// function TechnologyItems({
//   items,
// }: {
//   items: TechnologyItem[];
// }) {
//   return (
//     <div className="tdna-items">
//       {items.map((tech) => {
//         const Icon = tech.Icon;

//         return (
//           <div
//             className="tdna-item"
//             key={tech.name}
//           >
//             <div className="tdna-item-icon">
//               <Icon
//                 style={
//                   tech.color
//                     ? {
//                         color: tech.color,
//                       }
//                     : undefined
//                 }
//               />
//             </div>

//             <span>{tech.name}</span>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// /* =========================================================
//    TECH CARD
// ========================================================= */

// interface TechCardProps {
//   className: string;
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   items: TechnologyItem[];
// }

// function TechCard({
//   className,
//   icon,
//   title,
//   description,
//   items,
// }: TechCardProps) {
//   return (
//     <article
//       className={`tdna-card ${className}`}
//     >
//       <div className="tdna-card-top">

//         <div className="tdna-card-heading">

//           <div className="tdna-card-icon">
//             {icon}
//           </div>

//           <div className="tdna-card-copy">
//             <h3>{title}</h3>

//             <p>
//               {description}
//             </p>
//           </div>

//         </div>

//         <button
//           type="button"
//           className="tdna-card-arrow"
//           aria-label={`Explore ${title}`}
//         >
//           <ChevronRight />
//         </button>

//       </div>

//       <TechnologyItems
//         items={items}
//       />
//     </article>
//   );
// }

// /* =========================================================
//    SVG NETWORK
// ========================================================= */

// function Network() {
//   return (
//     <svg
//       className="tdna-network"
//       viewBox="0 0 1536 560"
//       preserveAspectRatio="none"
//       aria-hidden="true"
//     >
//       {/* CENTER TOP */}
// {/* 
//       <path
//         className="network-line"
//         d="M768 0 L768 130"
//       /> */}

//       {/* CENTER BOTTOM */}

//       {/* <path
//         className="network-line"
//         d="M768 430 L768 560"
//       /> */}

//       {/* WEB */}

//       <path
//         className="network-line"
//         d="
//           M768 270
//           C620 170
//           700 75
//           550 15
//           L575 05
//         "
//       />

//           <path
//         className="network-flow"
//        d="
//           M768 270
//           C620 170
//           700 75
//           550 15
//           L575 05
//         "
//       />

//          <circle
//         className="network-node"
//         cx="635"
//         cy="70"
//         r="5"
//       />

//       {/* MOBILE */}

//       <path
//         className="network-line"
//         d="
//           M768 270
//           C816 270
//           836 205
//           886 205
//           L965 205
//         "
//       />

//       {/* BACKEND */}

//       <path
//         className="network-line"
//         d="
//           M768 280
//           C690 280
//           635 280
//           545 280
//           L475 280
//         "
//       />

//       {/* DATA */}

//       <path
//         className="network-line"
//         d="
//           M768 280
//           C846 280
//           900 280
//           990 280
//           L1060 280
//         "
//       />

//       {/* COMMERCE */}

//       <path
//         className="network-line"
//         d="
//           M768 300
//           C720 300
//           695 365
//           645 365
//           L580 365
//         "
//       />

//       {/* AI */}

//       <path
//         className="network-line"
//         d="
//           M768 300
//           C816 300
//           840 365
//           890 365
//           L955 365
//         "
//       />

//       {/* ANIMATED FLOWS */}

//       {/* <path
//         className="network-flow"
//         d="M768 0 L768 130"
//       /> */}

  

//       <path
//         className="network-flow"
//         d="
//           M768 270
//           C816 270
//           836 205
//           886 205
//           L965 205
//         "
//       />

//       <path
//         className="network-flow"
//         d="
//           M768 300
//           C720 300
//           695 365
//           645 365
//           L580 365
//         "
//       />

//       <path
//         className="network-flow"
//         d="
//           M768 300
//           C816 300
//           840 365
//           890 365
//           L955 365
//         "
//       />

//       {/* NODES */}

//       {/* <circle
//         className="network-node"
//         cx="768"
//         cy="0"
//         r="5"
//       /> */}

   

//       <circle
//         className="network-node"
//         cx="965"
//         cy="205"
//         r="5"
//       />

//       <circle
//         className="network-node"
//         cx="475"
//         cy="280"
//         r="5"
//       />

//       {/* <circle
//         className="network-node"
//         cx="1060"
//         cy="280"
//         r="5"
//       /> */}

//       <circle
//         className="network-node"
//         cx="580"
//         cy="365"
//         r="5"
//       />

//       <circle
//         className="network-node"
//         cx="955"
//         cy="365"
//         r="5"
//       />

//       {/* <circle
//         className="network-node"
//         cx="768"
//         cy="560"
//         r="5"
//       /> */}

//       {/* CENTER PULSE */}

//       <circle
//         className="network-pulse"
//         cx="768"
//         cy="285"
//         r="10"
//       />
//     </svg>
//   );
// }

// /* =========================================================
//    CENTER CORE
// ========================================================= */

// function CenterCore() {
//   return (
//     <div className="tdna-core">

//       <div
//         className="tdna-orbit orbit-a"
//       />

//       <div
//         className="tdna-orbit orbit-b"
//       />

//       <div
//         className="tdna-orbit orbit-c"
//       />

//       <div
//         className="orbit-light light-1"
//       />

//       <div
//         className="orbit-light light-2"
//       />

//       <div
//         className="orbit-light light-3"
//       />

//       <div
//         className="orbit-light light-4"
//       />

//       <div className="tdna-core-circle">

//         <div className="tdna-g-logo">
//           G
//         </div>

//         <div className="tdna-core-name">
//           GuruOfTech
//         </div>

//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    DIGITAL GLOBE
// ========================================================= */

// function DigitalGlobe() {
//   return (
//     <div
//       className="tdna-globe"
//       aria-hidden="true"
//     >
//       <div className="globe-surface">

//         {Array.from({
//           length: 12,
//         }).map((_, index) => (
//           <span
//             key={`v-${index}`}
//             className="globe-v"
//             style={{
//               transform:
//                 `rotateY(${index * 15}deg)`,
//             }}
//           />
//         ))}

//         {Array.from({
//           length: 8,
//         }).map((_, index) => (
//           <span
//             key={`h-${index}`}
//             className="globe-h"
//             style={{
//               top:
//                 `${8 + index * 12}%`,
//             }}
//           />
//         ))}

//         {Array.from({
//           length: 30,
//         }).map((_, index) => (
//           <i
//             key={`p-${index}`}
//             className="globe-particle"
//             style={
//               {
//                 "--gx":
//                   `${(index * 37) % 100}%`,
//                 "--gy":
//                   `${(index * 61) % 100}%`,
//                 "--gd":
//                   `${(index * 17) % 4}s`,
//               } as React.CSSProperties
//             }
//           />
//         ))}

//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    TRUSTED TECHNOLOGIES
// ========================================================= */

// const trusted: TechnologyItem[] = [
//   {
//     name: "React",
//     Icon: SiReact,
//     color: "#61DAFB",
//   },
//   {
//     name: "Next.js",
//     Icon: SiNextdotjs,
//     color: "#FFFFFF",
//   },
//   {
//     name: "Flutter",
//     Icon: SiFlutter,
//     color: "#54C5F8",
//   },
//   {
//     name: ".NET",
//     Icon: SiDotnet,
//     color: "#512BD4",
//   },
//   {
//     name: "Node.js",
//     Icon: SiNodedotjs,
//     color: "#5FA04E",
//   },
//   {
//     name: "Python",
//     Icon: SiPython,
//     color: "#3776AB",
//   },
//   {
//     name: "AWS",
//     Icon: FaAws,
//     color: "#FF9900",
//   },
//   {
//     name: "PostgreSQL",
//     Icon: SiPostgresql,
//     color: "#4169E1",
//   },
//   {
//     name: "Firebase",
//     Icon: SiFirebase,
//     color: "#FFCA28",
//   },
//   {
//     name: "Shopify",
//     Icon: SiShopify,
//     color: "#95BF47",
//   },
//   {
//     name: "WordPress",
//     Icon: SiWordpress,
//     color: "#21A0D2",
//   },
//   {
//     name: "Laravel",
//     Icon: SiLaravel,
//     color: "#FF2D20",
//   },
// ];

// /* =========================================================
//    MAIN COMPONENT
// ========================================================= */

// export default function TechnologyDNA() {

//    const useIsoLayoutEffect =
//   typeof window !== "undefined" ? useLayoutEffect : useEffect;
//   return (
//     <section className="technology-dna">

//       {/* BACKGROUND */}

//       <div className="tdna-bg-grid" />

//       <div className="tdna-noise" />

//       <div className="tdna-blue-glow glow-center" />

//       <div className="tdna-blue-glow glow-left" />

//       <div className="tdna-blue-glow glow-right" />

//       {/* PARTICLES */}

//       <div className="tdna-stars">

//         {Array.from({
//           length: 60,
//         }).map((_, index) => (
//           <span
//             key={index}
//             style={
//               {
//                 "--sx":
//                   `${(index * 37) % 100}%`,
//                 "--sy":
//                   `${(index * 61) % 100}%`,
//                 "--sd":
//                   `${(index * 17) % 6}s`,
//               } as React.CSSProperties
//             }
//           />
//         ))}

//       </div>

//       {/* TOP DECORATION */}

//       <div
//         className="top-tech-shape shape-one"
//       />

//       <div
//         className="top-tech-shape shape-two"
//       />

//       {/* HANDWRITING */}

//       <div className="tdna-handwriting">
//         Ideas
//         <br />
//         Technology
//         <br />
//         Impact
//       </div>

//       <div className="tdna-page">

//         {/* =================================================
//             HEADER
//         ================================================= */}

//         <header className="tdna-header">

//           <div className="tdna-badge">
//             AI-READY TECHNOLOGY ECOSYSTEM
//           </div>

//           <h2>
//             Technology{" "}
//             <span>DNA</span>
//           </h2>

//           <p>
//             An engineering stack with AI and LLM tooling
//             at its core, built around the way modern
//             products are created.
//           </p>

//         </header>

//         {/* =================================================
//             TECHNOLOGY STAGE
//         ================================================= */}

//         <div className="tdna-stage">

//           <Network />

//           <CenterCore />

//           {/* TOP LEFT — AI & LLM */}

//           <TechCard
//             className="card-slot-top-left"
//             icon={<Bot />}
//             title="AI & LLM"
//             description="Models and APIs we build with"
//             items={tech.llm}
//           />

//           {/* TOP RIGHT — AI, ML & AUTOMATION */}

//           <TechCard
//             className="card-slot-top-right"
//             icon={<Sparkles />}
//             title="AI, ML & Automation"
//             description="Intelligent solutions for tomorrow"
//             items={tech.ai}
//           />

//           {/* MIDDLE LEFT — BACKEND */}

//           <TechCard
//             className="card-slot-mid-left"
//             icon={<Server />}
//             title="Backend"
//             description="Powerful & scalable systems"
//             items={tech.backend}
//           />

//            {/* BOTTOM LEFT — DATA & CLOUD */}

//           <TechCard
//             className="card-slot-mid-right"
//             icon={<Cloud />}
//             title="Data & Cloud"
//             description="Reliable and secure infrastructure"
//             items={tech.cloud}
//           />

//           {/* MIDDLE RIGHT — COMMERCE */}

//           <TechCard
//             className="card-slot-bottom-left"
//             icon={<ShoppingCart />}
//             title="Commerce & CMS"
//             description="Build. Sell. Grow."
//             items={tech.commerce}
//           />

//           {/* BOTTOM RIGHT — WEB & MOBILE */}

//           <TechCard
//             className="card-slot-bottom-right"
//             icon={<Monitor />}
//             title="Web & Mobile"
//             description="Apps for every screen"
//             items={tech.webMobile}
//           />

//         </div>

//         {/* GLOBE */}

//         <DigitalGlobe />

//         {/* LEFT DECORATIVE TEXT */}

//         <div className="build-text">
//           BUILD
//           <br />
//           INNOVATE
//           <br />
//           SCALE →
//         </div>

//         {/* =================================================
//             STATS
//         ================================================= */}

//         <div className="tdna-stats">

//           <div>
//             <strong>6</strong>
//             <span>
//               Core Services
//             </span>
//           </div>

//           <div>
//             <strong>35+</strong>
//             <span>
//               Technologies Used
//             </span>
//           </div>

//           <div>
//             <strong>9</strong>
//             <span>
//               Industries Served
//             </span>
//           </div>

//           <div>
//             <strong>4-Step</strong>
//             <span>
//               Delivery Process
//             </span>
//           </div>

//         </div>

//         {/* BOTTOM */}

//         <div className="tdna-bottom-line">
//           <span />

//           AI · CLOUD · SCALE — BUILT WITH THE RIGHT TOOLS.

//           <span />
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./TechnologyDNA.css";

import {
  Monitor,
  Server,
  Cloud,
  ShoppingCart,
  Sparkles,
  Bot,
  ChevronRight,
} from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiDotnet,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiFirebase,
  SiShopify,
  SiWordpress,
  SiDocker,
  SiClaude,
  SiGooglegemini,
  SiHuggingface,
  SiLangchain,
  SiTensorflow,
  SiPytorch,
  SiN8N,
} from "react-icons/si";

import { RiOpenaiFill } from "react-icons/ri";
import { FaAws, FaMagento, FaJava } from "react-icons/fa6";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* =========================================================
   TYPES
========================================================= */

type IconComponent = React.ComponentType<{
  className?: string;
  style?: React.CSSProperties;
}>;

type TechnologyItem = {
  name: string;
  Icon: IconComponent;
  color?: string;
};

type TechnologyCategory =
  | "llm"
  | "ai"
  | "backend"
  | "commerce"
  | "cloud"
  | "webMobile";

type TechnologyData = Record<TechnologyCategory, TechnologyItem[]>;

type NetworkPath = { id: string; d: string; x: number; y: number };

/* =========================================================
   TECHNOLOGY DATA
========================================================= */

const tech: TechnologyData = {
  llm: [
    { name: "OpenAI", Icon: RiOpenaiFill, color: "#10A37F" },
    { name: "Claude", Icon: SiClaude, color: "#D97757" },
    { name: "Gemini", Icon: SiGooglegemini, color: "var(--tdna-c-gemini)" },
    { name: "Hugging Face", Icon: SiHuggingface, color: "var(--tdna-c-hf)" },
  ],

  ai: [
    { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
    { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
    { name: "LangChain", Icon: SiLangchain, color: "var(--tdna-c-langchain)" },
    { name: "n8n", Icon: SiN8N, color: "#EA4B71" },
  ],

  backend: [
    { name: ".NET", Icon: SiDotnet, color: "var(--tdna-c-dotnet)" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
    { name: "PHP", Icon: SiPhp, color: "#8892BF" },
    { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
    { name: "Python", Icon: SiPython, color: "#3776AB" },
    { name: "Django", Icon: SiDjango, color: "#44B78B" },
    { name: "Java", Icon: FaJava, color: "#F89820" },
  ],

  commerce: [
    { name: "Shopify", Icon: SiShopify, color: "#95BF47" },
    { name: "Magento", Icon: FaMagento, color: "#EE672F" },
    { name: "WordPress", Icon: SiWordpress, color: "#21A0D2" },
  ],

  cloud: [
    { name: "AWS", Icon: FaAws, color: "#FF9900" },
    { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
    { name: "Firebase", Icon: SiFirebase, color: "var(--tdna-c-firebase)" },
  ],

  webMobile: [
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", Icon: SiNextdotjs, color: "var(--tdna-c-next)" },
    { name: "Flutter", Icon: SiFlutter, color: "#54C5F8" },
    { name: "React Native", Icon: SiReact, color: "#61DAFB" },
  ],
};

/* =========================================================
   TECHNOLOGY ITEMS
========================================================= */

function TechnologyItems({ items }: { items: TechnologyItem[] }) {
  return (
    <div className="tdna-items">
      {items.map((item) => {
        const Icon = item.Icon;

        return (
          <div className="tdna-item" key={item.name}>
            <div className="tdna-item-icon">
              <Icon style={item.color ? { color: item.color } : undefined} />
            </div>

            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
}

/* =========================================================
   TECH CARD
========================================================= */

interface TechCardProps {
  id: string;
  className: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  items: TechnologyItem[];
}

function TechCard({
  id,
  className,
  icon,
  title,
  description,
  items,
}: TechCardProps) {
  return (
    <article data-node={id} className={`tdna-card ${className}`}>
      <div className="tdna-card-top">
        <div className="tdna-card-heading">
          <div className="tdna-card-icon">{icon}</div>

          <div className="tdna-card-copy">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>

        <button
          type="button"
          className="tdna-card-arrow"
          aria-label={`Explore ${title}`}
        >
          <ChevronRight />
        </button>
      </div>

      <TechnologyItems items={items} />
    </article>
  );
}

/* =========================================================
   SVG NETWORK  (only draws, measuring happens in parent)
========================================================= */

function Network({
  size,
  paths,
}: {
  size: { w: number; h: number };
  paths: NetworkPath[];
}) {
  if (!size.w || !size.h) return null;

  return (
    <svg
      className="tdna-network"
      width={size.w}
      height={size.h}
      viewBox={`0 0 ${size.w} ${size.h}`}
      aria-hidden="true"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 6,
        pointerEvents: "none",
        overflow: "visible",
      }}
    >
      {paths.map((p) => (
        <g key={p.id}>
          <path className="network-line" d={p.d} />
          <path className="network-flow" d={p.d} />
          <circle className="network-node" cx={p.x} cy={p.y} r="5" />
        </g>
      ))}

      <circle
        className="network-pulse"
        cx={size.w / 2}
        cy={size.h / 2}
        r="10"
      />
    </svg>
  );
}

/* =========================================================
   CENTER CORE
========================================================= */

function CenterCore() {
  return (
    <div className="tdna-core" style={{ zIndex: 7 }}>
      <div className="tdna-orbit orbit-a" />
      <div className="tdna-orbit orbit-b" />
      <div className="tdna-orbit orbit-c" />

      <div className="tdna-core-circle">
        <div className="tdna-g-logo">G</div>
        <div className="tdna-core-name">GuruOfTech</div>
      </div>
    </div>
  );
}

/* =========================================================
   DIGITAL GLOBE
========================================================= */

function DigitalGlobe() {
  return (
    <div className="tdna-globe" aria-hidden="true">
      <div className="globe-surface">
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={`v-${index}`}
            className="globe-v"
            style={{ transform: `rotateY(${index * 15}deg)` }}
          />
        ))}

        {Array.from({ length: 8 }).map((_, index) => (
          <span
            key={`h-${index}`}
            className="globe-h"
            style={{ top: `${8 + index * 12}%` }}
          />
        ))}

        {Array.from({ length: 30 }).map((_, index) => (
          <i
            key={`p-${index}`}
            className="globe-particle"
            style={
              {
                "--gx": `${(index * 37) % 100}%`,
                "--gy": `${(index * 61) % 100}%`,
                "--gd": `${(index * 17) % 4}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TechnologyDNA() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [paths, setPaths] = useState<NetworkPath[]>([]);

  // runs in the PARENT, so stageRef.current is already attached
  useIsoLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const measure = () => {
      const w = stage.clientWidth;
      const h = stage.clientHeight;

      const cx = w / 2;
      const cy = h / 2;

      const next: NetworkPath[] = [];

      stage.querySelectorAll<HTMLElement>("[data-node]").forEach((card) => {
        // offset* ignores hover transforms, so paths never jump
        const left = card.offsetLeft;
        const width = card.offsetWidth;
        const right = left + width;
        const isLeftSide = left + width / 2 < cx;

        // edge of the card that faces the core
        const x = isLeftSide ? right : left;
        const y = card.offsetTop + card.offsetHeight / 2;

        const mx = cx + (x - cx) * 0.5;

        next.push({
          id: card.dataset.node as string,
          d: `M${cx} ${cy} C${mx} ${cy} ${mx} ${y} ${x} ${y}`,
          x,
          y,
        });
      });

      setSize({ w, h });
      setPaths(next);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(stage);
    stage.querySelectorAll("[data-node]").forEach((el) => ro.observe(el));

    if (document.fonts?.ready) {
      document.fonts.ready.then(measure).catch(() => {});
    }

    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section className="technology-dna">
      {/* BACKGROUND */}
      <div className="tdna-bg-grid" />
      <div className="tdna-noise" />
      <div className="tdna-blue-glow glow-center" />
      <div className="tdna-blue-glow glow-left" />
      <div className="tdna-blue-glow glow-right" />

      {/* PARTICLES */}
      <div className="tdna-stars">
        {Array.from({ length: 60 }).map((_, index) => (
          <span
            key={index}
            style={
              {
                "--sx": `${(index * 37) % 100}%`,
                "--sy": `${(index * 61) % 100}%`,
                "--sd": `${(index * 17) % 6}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* TOP DECORATION */}
      <div className="top-tech-shape shape-one" />
      <div className="top-tech-shape shape-two" />

      {/* HANDWRITING */}
      <div className="tdna-handwriting">
        Ideas
        <br />
        Technology
        <br />
        Impact
      </div>

      <div className="tdna-page">
        {/* HEADER */}
        <header className="tdna-header">
          <div className="tdna-badge">AI-READY TECHNOLOGY ECOSYSTEM</div>

          <h2>
            Technology <span>DNA</span>
          </h2>

          <p>
            An engineering stack with AI and LLM tooling at its core, built
            around the way modern products are created.
          </p>
        </header>

        {/* STAGE */}
        <div className="tdna-stage" ref={stageRef}>
          <Network size={size} paths={paths} />

          <CenterCore />

          <TechCard
            id="llm"
            className="card-slot-top-left"
            icon={<Bot />}
            title="AI & LLM"
            description="Models and APIs we build with"
            items={tech.llm}
          />

          <TechCard
            id="ai"
            className="card-slot-top-right"
            icon={<Sparkles />}
            title="AI, ML & Automation"
            description="Intelligent solutions for tomorrow"
            items={tech.ai}
          />

          <TechCard
            id="backend"
            className="card-slot-mid-left"
            icon={<Server />}
            title="Backend"
            description="Powerful & scalable systems"
            items={tech.backend}
          />

          <TechCard
            id="cloud"
            className="card-slot-mid-right"
            icon={<Cloud />}
            title="Data & Cloud"
            description="Reliable and secure infrastructure"
            items={tech.cloud}
          />

          <TechCard
            id="commerce"
            className="card-slot-bottom-left"
            icon={<ShoppingCart />}
            title="Commerce & CMS"
            description="Build. Sell. Grow."
            items={tech.commerce}
          />

          <TechCard
            id="webMobile"
            className="card-slot-bottom-right"
            icon={<Monitor />}
            title="Web & Mobile"
            description="Apps for every screen"
            items={tech.webMobile}
          />
        </div>

        {/* GLOBE */}
        <DigitalGlobe />

        {/* LEFT DECORATIVE TEXT */}
        <div className="build-text">
          BUILD
          <br />
          INNOVATE
          <br />
          SCALE →
        </div>

        {/* STATS */}
        <div className="tdna-stats">
          <div>
            <strong>6</strong>
            <span>Core Services</span>
          </div>

          <div>
            <strong>35+</strong>
            <span>Technologies Used</span>
          </div>

          <div>
            <strong>9</strong>
            <span>Industries Served</span>
          </div>

          <div>
            <strong>4-Step</strong>
            <span>Delivery Process</span>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="tdna-bottom-line">
          <span />
          AI · CLOUD · SCALE — BUILT WITH THE RIGHT TOOLS.
          <span />
        </div>
      </div>
    </section>
  );
}