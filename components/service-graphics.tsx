"use client";

import { useMotionOk } from "@/components/use-motion-ok";

const wrap = "h-24 w-full text-accent";

export function ArchitectureGraphic() {
  return (
    <svg viewBox="0 0 200 100" className={wrap} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="1.5" className="text-border" opacity={0.8}>
        <rect x="20" y="15" width="40" height="24" rx="4" />
        <rect x="140" y="15" width="40" height="24" rx="4" />
        <rect x="80" y="60" width="40" height="24" rx="4" />
      </g>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M60,27 L80,27 L80,60" className="animate-dash-draw" style={{ ["--dash-length" as string]: 90 }} />
        <path d="M140,27 L120,27 L120,60" className="animate-dash-draw" style={{ ["--dash-length" as string]: 90 }} />
      </g>
      <g fill="currentColor">
        <circle cx="40" cy="27" r="3" />
        <circle cx="160" cy="27" r="3" />
        <circle cx="100" cy="72" r="3" />
      </g>
    </svg>
  );
}

export function CartFlowGraphic() {
  const motionOk = useMotionOk();
  const path = "M20,70 C60,20 140,20 178,70";
  return (
    <svg viewBox="0 0 200 100" className={wrap} fill="none" aria-hidden>
      <path d={path} stroke="currentColor" className="text-border" strokeWidth="1.5" strokeDasharray="4 5" opacity={0.7} />
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14,32 h10 l8,34 h60 l10,-24 h-70" />
        <circle cx="34" cy="76" r="4" fill="currentColor" stroke="none" />
        <circle cx="82" cy="76" r="4" fill="currentColor" stroke="none" />
      </g>
      {motionOk && (
        <circle r="3.5" fill="currentColor">
          <animateMotion dur="3s" repeatCount="indefinite" path={path} />
        </circle>
      )}
    </svg>
  );
}

export function DeviceGraphic() {
  return (
    <svg viewBox="0 0 200 100" className={wrap} fill="none" aria-hidden>
      <rect x="75" y="8" width="50" height="84" rx="8" stroke="currentColor" strokeWidth="1.5" className="text-border" />
      <rect x="82" y="20" width="15" height="15" rx="3" fill="currentColor" opacity={0.85} className="animate-pulse-glow" />
      <rect x="102" y="20" width="15" height="15" rx="3" fill="currentColor" opacity={0.5} />
      <rect x="82" y="40" width="15" height="15" rx="3" fill="currentColor" opacity={0.5} />
      <rect x="102" y="40" width="15" height="15" rx="3" fill="currentColor" opacity={0.85} className="animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <rect x="82" y="60" width="35" height="8" rx="4" fill="currentColor" opacity={0.35} />
    </svg>
  );
}

export function PipelineGraphic() {
  const motionOk = useMotionOk();
  const path = "M20,50 L100,50 L180,50";
  return (
    <svg viewBox="0 0 200 100" className={wrap} fill="none" aria-hidden>
      <path d={path} stroke="currentColor" className="text-border" strokeWidth="1.5" />
      {[20, 100, 180].map((x) => (
        <circle key={x} cx={x} cy={50} r="6" fill="currentColor" opacity={0.85} />
      ))}
      <text x="20" y="72" textAnchor="middle" fontSize="9" fill="currentColor" opacity={0.6}>Build</text>
      <text x="100" y="72" textAnchor="middle" fontSize="9" fill="currentColor" opacity={0.6}>Test</text>
      <text x="180" y="72" textAnchor="middle" fontSize="9" fill="currentColor" opacity={0.6}>Deploy</text>
      {motionOk && (
        <circle r="4" fill="currentColor">
          <animateMotion dur="2.6s" repeatCount="indefinite" path={path} />
        </circle>
      )}
    </svg>
  );
}

export function ChecklistGraphic() {
  return (
    <svg viewBox="0 0 200 100" className={wrap} fill="none" aria-hidden>
      {[22, 50, 78].map((y, i) => (
        <g key={y}>
          <rect x="20" y={y - 8} width="16" height="16" rx="4" stroke="currentColor" className="text-border" strokeWidth="1.5" />
          <path
            d={`M24,${y} l4,4 l8,-8`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-dash-draw"
            style={{ ["--dash-length" as string]: 20, animationDelay: `${i * 0.3 + 0.2}s` }}
          />
          <rect x="48" y={y - 4} width={120 - i * 20} height="8" rx="4" fill="currentColor" opacity={0.25} />
        </g>
      ))}
    </svg>
  );
}

export function RoadmapGraphic() {
  return (
    <svg viewBox="0 0 200 100" className={wrap} fill="none" aria-hidden>
      <path d="M15,80 Q60,80 80,50 T150,25 L182,18" stroke="currentColor" className="text-border" strokeWidth="1.5" strokeDasharray="3 5" />
      <circle cx="15" cy="80" r="4" fill="currentColor" opacity={0.6} />
      <circle cx="95" cy="46" r="4" fill="currentColor" opacity={0.75} />
      <circle cx="150" cy="25" r="5" fill="currentColor" className="animate-node-pulse" />
    </svg>
  );
}
