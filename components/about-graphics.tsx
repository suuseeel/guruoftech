const wrap = "h-14 w-full text-accent";

export function TeamGraphic() {
  const pts = [[20, 30], [50, 15], [80, 32], [35, 55], [65, 55]];
  const edges = [[0, 1], [1, 2], [0, 3], [1, 3], [1, 4], [2, 4]];
  return (
    <svg viewBox="0 0 100 70" className={wrap} fill="none" aria-hidden>
      <g stroke="currentColor" className="text-border" strokeWidth="1">
        {edges.map(([a, b], i) => (
          <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} />
        ))}
      </g>
      <g fill="currentColor">
        {pts.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 1 ? 4 : 3} opacity={0.85} />
        ))}
      </g>
    </svg>
  );
}

export function CaseStudyGraphic() {
  return (
    <svg viewBox="0 0 100 70" className={wrap} fill="none" aria-hidden>
      <rect x="12" y="10" width="76" height="50" rx="6" stroke="currentColor" className="text-border" strokeWidth="1.5" />
      <g fill="currentColor" opacity={0.8}>
        <rect x="24" y="38" width="8" height="14" rx="1.5" />
        <rect x="38" y="30" width="8" height="22" rx="1.5" />
        <rect x="52" y="20" width="8" height="32" rx="1.5" />
        <rect x="66" y="34" width="8" height="18" rx="1.5" />
      </g>
    </svg>
  );
}

export function CareerGraphic() {
  return (
    <svg viewBox="0 0 100 70" className={wrap} fill="none" aria-hidden>
      <path d="M10,55 L35,35 L55,45 L90,15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="55" r="3" fill="currentColor" opacity={0.6} />
      <circle cx="35" cy="35" r="3" fill="currentColor" opacity={0.75} />
      <circle cx="55" cy="45" r="3" fill="currentColor" opacity={0.75} />
      <circle cx="90" cy="15" r="4" fill="currentColor" className="animate-node-pulse" />
    </svg>
  );
}

export function BlogGraphic() {
  return (
    <svg viewBox="0 0 100 70" className={wrap} fill="none" aria-hidden>
      <rect x="18" y="10" width="64" height="50" rx="5" stroke="currentColor" className="text-border" strokeWidth="1.5" />
      <g fill="currentColor" opacity={0.7}>
        <rect x="28" y="22" width="44" height="4" rx="2" />
        <rect x="28" y="32" width="44" height="4" rx="2" opacity={0.5} />
        <rect x="28" y="42" width="28" height="4" rx="2" opacity={0.5} />
      </g>
    </svg>
  );
}
