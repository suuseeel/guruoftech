const nodes = [
  { x: 60, y: 60, r: 3, cls: "animate-particle-a" },
  { x: 220, y: 40, r: 2, cls: "animate-particle-b" },
  { x: 340, y: 110, r: 2.5, cls: "animate-particle-c" },
  { x: 120, y: 170, r: 2, cls: "animate-particle-b" },
  { x: 300, y: 210, r: 3, cls: "animate-particle-a" },
  { x: 40, y: 240, r: 2, cls: "animate-particle-c" },
];

const edges = [
  [0, 1], [1, 2], [0, 3], [3, 4], [1, 4], [3, 5],
];

export function NetworkBackground({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 380 280"
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-70 ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <g className="text-border" stroke="currentColor" strokeWidth="1">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            opacity={0.6}
          />
        ))}
      </g>
      <g className="text-accent" fill="currentColor">
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={n.r} className={n.cls} opacity={0.7} />
        ))}
      </g>
    </svg>
  );
}
