"use client";

import React, { useEffect, useRef } from "react";

/**
 * ProductsShowcase
 * A self-contained "What We Build" products ecosystem section.
 * - No external CSS framework or icon library required (plain inline SVG + a scoped <style> block).
 * - Center orb connects to each product card with a live-computed dashed line + numbered node.
 * - Orb has two slowly-rotating orbit rings, each carrying a small glowing dot ("planet" motion).
 * - Fully responsive: 3-column orbit layout on desktop, 2-column on tablet, single column on mobile.
 *
 * Usage:
 *   <ProductsShowcase />                       // uses the default 8 products
 *   <ProductsShowcase products={myProducts} />  // pass your own array, same shape as defaultProducts
 */

const icons = {
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
  ),
  cart: (
    <>
      <circle cx="9" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.5 3h2l2.6 12.4a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 2-1.6L22 7H6" />
    </>
  ),
  truck: (
    <>
      <path d="M14 18V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h1" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.6a1 1 0 0 0-.3-.7l-2.9-2.9a1 1 0 0 0-.7-.3H14" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  cap: (
    <>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
    </>
  ),
  card: (
    <>
      <rect x="2" y="5" width="16" height="12" rx="2" />
      <path d="M22 8v8" />
      <path d="M6 9h6M6 13h4" />
    </>
  ),
  plane: (
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-1 .1-1.3.5l-.4.6c-.4.5-.2 1.3.4 1.6L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.6 5.5c.3.6 1.1.8 1.6.4l.6-.4c.4-.3.6-.8.5-1.3Z" />
  ),
  play: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <path d="m10.5 9.5 4 2.5-4 2.5Z" fill="#bcd2ff" stroke="none" />
    </>
  ),
  car: (
    <path d="M5 17h14M5 17a2 2 0 1 0 4 0M15 17a2 2 0 1 0 4 0M5 17 4 8h16l-1 9M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
  ),
};

function Icon({ name } : { name: keyof typeof icons }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#bcd2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[name] || null}
    </svg>
  );
}

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const defaultProducts = [
  {
    id: "reknown",
    title: "Reknown",
    description: "A digital solution developed for Reknown.",
    tags: ["Web Development"],
    icon: "heart",
  },

  {
    id: "rare",
    title: "Rare",
    description: "A digital solution developed for Rare.",
    tags: ["Web Development"],
    icon: "cart",
  },

  {
    id: "soul",
    title: "Soul",
    description: "A digital solution developed for Soul.",
    tags: ["Web Development"],
    icon: "heart",
  },

  {
    id: "msi",
    title: "MSI",
    description: "A digital solution developed for MSI.",
    tags: ["Web Development"],
    icon: "card",
  },

  {
    id: "sarvva",
    title: "Sarvva",
    description: "A digital solution developed for Sarvva.",
    tags: ["Web Development"],
    icon: "heart",
  },

  {
    id: "360",
    title: "360",
    description: "A digital solution developed for 360.",
    tags: ["Web Development"],
    icon: "car",
  },

  {
    id: "lotus",
    title: "Lotus",
    description: "A digital solution developed for Lotus.",
    tags: ["Web Development"],
    icon: "heart",
  },

  {
    id: "gm",
    title: "GM",
    description: "A digital solution developed for GM.",
    tags: ["Web Development"],
    icon: "truck",
  },

  {
    id: "untitled",
    title: "Untitled",
    description: "A digital solution developed for Untitled.",
    tags: ["Web Development"],
    icon: "play",
  },
] satisfies Array<{
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: keyof typeof icons;
}>;

export default function ProductsShowcase({
  eyebrow = "OUR PRODUCTS",
  title = "What We Build",
  products = defaultProducts,
}) {
  const ecosystemRef = useRef<HTMLDivElement | null>(null);
  const orbRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const cardRefs = useRef<HTMLElement[]>([]);

  const registerCard = (el: HTMLElement | null) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };

  useEffect(() => {
    const eco = ecosystemRef.current;
    const orb = orbRef.current;
    const svg = svgRef.current;
    if (!eco || !orb || !svg) return;
    const ecoElement = eco;
    const orbElement = orb;
    const svgElement = svg;

    const SVGNS = "http://www.w3.org/2000/svg";

    function draw() {
      while (svgElement.firstChild) svgElement.removeChild(svgElement.firstChild);
      if (window.innerWidth < 1024) return; // connectors only in the desktop orbit layout

      const ecoRect = ecoElement.getBoundingClientRect();
      svgElement.setAttribute("width", String(ecoRect.width));
      svgElement.setAttribute("height", String(ecoRect.height));
      svgElement.setAttribute("viewBox", `0 0 ${ecoRect.width} ${ecoRect.height}`);

      const orbRect = orbElement.getBoundingClientRect();
      const ocx = orbRect.left + orbRect.width / 2 - ecoRect.left;
      const ocy = orbRect.top + orbRect.height / 2 - ecoRect.top;
      const orbR = Math.min(orbRect.width, orbRect.height) * 0.5;

      cardRefs.current.forEach((card, idx) => {
        const r = card.getBoundingClientRect();
        const ccx = r.left + r.width / 2 - ecoRect.left;
        const ccy = r.top + r.height / 2 - ecoRect.top;

        const dx = ccx - ocx, dy = ccy - ocy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const ux = dx / dist, uy = dy / dist;

        const x1 = ocx + ux * orbR, y1 = ocy + uy * orbR;
        const edgePad = Math.min(r.width, r.height) / 2 + 6;
        const x2 = ccx - ux * edgePad, y2 = ccy - uy * edgePad;

        const line = document.createElementNS(SVGNS, "line");
        line.setAttribute("class", "pw-spoke");
        line.setAttribute("x1", String(x1)); line.setAttribute("y1", String(y1));
        line.setAttribute("x2", String(x2)); line.setAttribute("y2", String(y2));
        svgElement.appendChild(line);

        const t = 0.42;
        const nx = x1 + (x2 - x1) * t, ny = y1 + (y2 - y1) * t;
        const g = document.createElementNS(SVGNS, "g");
        const node = document.createElementNS(SVGNS, "circle");
        node.setAttribute("class", "pw-node");
        node.setAttribute("cx", String(nx)); node.setAttribute("cy", String(ny)); node.setAttribute("r", "9");
        const dot = document.createElementNS(SVGNS, "circle");
        dot.setAttribute("class", "pw-node-dot");
        dot.setAttribute("cx", String(nx)); dot.setAttribute("cy", String(ny)); dot.setAttribute("r", "2.6");
        const label = document.createElementNS(SVGNS, "text");
        label.setAttribute("class", "pw-node-label");
        label.setAttribute("x", String(nx)); label.setAttribute("y", String(ny - 14));
        label.setAttribute("text-anchor", "middle");
        label.textContent = String(idx + 1).padStart(2, "0");
        g.appendChild(node); g.appendChild(dot); g.appendChild(label);
        svgElement.appendChild(g);
      });
    }

    draw();
    const t1 = setTimeout(draw, 60);
    const t2 = setTimeout(draw, 900);

    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    const onResize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(draw, 150); };
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, [products]);

  return (
    <div className="pw-root">
      <style>{css}</style>

      <div className="pw-stars" aria-hidden="true">
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${(i * 47) % 100}%`,
              top: `${20 + ((i * 31) % 70)}%`,
              animationDuration: `${10 + ((i * 13) % 14)}s`,
              animationDelay: `${(i * 17) % 10}s`,
            }}
          />
        ))}
      </div>

      <main className="pw-wrap">
        <section className="pw-hero">
          <span className="pw-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="10" width="16" height="10" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
            {eyebrow}
          </span>
          <h1 className="pw-title">{title}</h1>
        </section>

        <section className="pw-ecosystem" ref={ecosystemRef}>
          <svg className="pw-orbit-bg" ref={svgRef} aria-hidden="true" />

          <div className="pw-grid">
            {products.slice(0, 4).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} registerCard={registerCard} />
            ))}

            <div className="pw-orb-cell">
              <div className="pw-orbit-ring r1"><span className="pw-orbit-dot" /></div>
              <div className="pw-orbit-ring r2"><span className="pw-orbit-dot" /></div>
              <div className="pw-orb" ref={orbRef}>
                <h2 className="p-4">Our<br />Products</h2>
              </div>
            </div>

            {products.slice(4, 8).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i + 4} registerCard={registerCard} />
            ))}
          </div>
        </section>

        <footer className="pw-footer">
          <div className="pw-brand">
            <span className="pw-lock">
              <svg viewBox="0 0 24 24" fill="none" stroke="#bcd2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="10" width="16" height="10" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              </svg>
            </span>
            <div>Technology for<br />a better tomorrow</div>
          </div>
          <div className="pw-tri">— PEOPLE × PRODUCTS × PROGRESS</div>
        </footer>
      </main>
    </div>
  );
}

function ProductCard({
  product,
  index,
  registerCard,
}: {
  product: (typeof defaultProducts)[number];
  index: number;
  registerCard: (element: HTMLElement | null) => void;
}) {
  return (
    <article
      className="pw-card"
      ref={registerCard}
      style={{ "--d": `${0.4 + index * 0.06}s` } as React.CSSProperties}
    >
      <div className="pw-card-body">
        {/* <span className="pw-card-index">{String(index + 1).padStart(2, "0")}</span> */}

        {/* <div className="pw-icon"><Icon name={product.icon} /></div> */}
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="pw-tags">
          {product.tags.map((t) => (
            <span className="pw-tag" key={t}>{t}</span>
          ))}
          <span className="pw-go"><ArrowIcon /></span>
        </div>
      </div>
    </article>
  );
}

const css = `
.pw-root{
  --bg-0:#05070f;
  --card:rgba(15,23,48,0.96);
  --card-border:rgba(126,163,255,0.16);
  --card-border-hover:rgba(140,180,255,0.4);
  --text-0:#f3f6ff;
  --text-1:#aab4d4;
  --text-2:#71799e;
  --blue-2:#6ea8ff;
  --blue-3:#8fb8ff;
  --cyan:#5fd4ff;
  --pill-bg:rgba(70,100,180,0.18);
  --pill-border:rgba(120,155,255,0.28);
  --radius-card:20px;
  --radius-pill:999px;
  --shadow-card:0 20px 50px -20px rgba(0,10,40,0.7);
  --ease:cubic-bezier(.16,.84,.44,1);
  position:relative;
  background:
    radial-gradient(ellipse 900px 600px at 18% 8%, rgba(60,90,200,0.20), transparent 60%),
    radial-gradient(ellipse 900px 700px at 85% 90%, rgba(50,80,190,0.16), transparent 60%),
    radial-gradient(ellipse 1400px 900px at 50% 38%, rgba(45,70,160,0.22), transparent 65%),
    var(--bg-0);
  color:var(--text-0);
  font-family:'Segoe UI', Inter, ui-sans-serif, system-ui, -apple-system, Helvetica, Arial, sans-serif;
  overflow-x:hidden;
}
.pw-root *{ box-sizing:border-box; }
@media (prefers-reduced-motion: reduce){
  .pw-root *, .pw-root *::before, .pw-root *::after{
    animation-duration:0.001ms !important;
    animation-iteration-count:1 !important;
    transition-duration:0.001ms !important;
  }
}
.pw-stars{ position:absolute; inset:0; pointer-events:none; z-index:0; overflow:hidden; }
.pw-stars span{
  position:absolute; width:3px; height:3px; border-radius:50%;
  background:rgba(150,180,255,0.55);
  box-shadow:0 0 6px 1px rgba(120,160,255,0.5);
  animation:pw-drift linear infinite;
}
@keyframes pw-drift{
  0%{ transform:translateY(0); opacity:0; }
  10%{ opacity:1; }
  90%{ opacity:1; }
  100%{ transform:translateY(-120px) translateX(20px); opacity:0; }
}
.pw-wrap{ position:relative; z-index:1; max-width:1280px; margin:0 auto; padding:var(--sec-y) 24px; }
@media (min-width:1024px){
  .pw-wrap{ padding:var(--sec-y) 32px; }
}

.pw-hero{ text-align:center; max-width:760px; margin:0 auto; }
.pw-badge{
  display:inline-flex; align-items:center; gap:8px;
  padding:9px 20px 9px 16px; border-radius:var(--radius-pill);
  background:linear-gradient(180deg, rgba(70,105,210,0.35), rgba(40,60,140,0.22));
  border:1px solid rgba(130,165,255,0.4);
  font-size:12px; letter-spacing:.14em; font-weight:700; color:var(--blue-3);
  box-shadow:0 0 24px -6px rgba(90,130,255,0.6);
  opacity:0; transform:translateY(14px); animation:pw-rise .7s var(--ease) forwards;
}
.pw-badge svg{ width:14px; height:14px; }
.pw-title{
   font-size:
    clamp(45px, 3rem, 74px); line-height:1.05; font-weight:800;
  margin:22px 0 6px; letter-spacing:-0.02em; color:var(--text-0);
  opacity:0; transform:translateY(16px); animation:pw-rise .7s var(--ease) .12s forwards;
}
@keyframes pw-rise{ to{ opacity:1; transform:translateY(0); } }

.pw-ecosystem{ position:relative; margin-top:56px; }
.pw-orbit-bg{ position:absolute; inset:0; width:100%; height:100%; pointer-events:none; z-index:0; overflow:visible; }
.pw-spoke{ stroke:rgba(120,160,255,0.5); stroke-width:1.4; stroke-dasharray:3 7; fill:none; animation:pw-dash 6s linear infinite; }
@keyframes pw-dash{ to{ stroke-dashoffset:-40; } }
.pw-node{ fill:#0c1430; stroke:rgba(140,175,255,0.75); stroke-width:1.4; }
.pw-node-dot{ fill:#8fb8ff; animation:pw-node-pulse 2.6s ease-in-out infinite; }
@keyframes pw-node-pulse{ 0%,100%{ opacity:.5; } 50%{ opacity:1; } }
.pw-node-label{ font-size:9px; font-weight:700; fill:#c3d3ff; }

.pw-grid{
  position:relative; z-index:1; display:grid;
  grid-template-columns:repeat(3, minmax(0,1fr));
  align-items:center; gap:78px 56px; max-width:1040px; margin:0 auto;
}

/* =========================================================
   PRODUCT CARD
   Structure: .pw-card (outer frame, holds the rotating border)
     > ::before  — oversized conic-gradient layer, clipped by the
                   frame's own border-radius + overflow:hidden down
                   to a thin ring. Bright near its "head", fading to
                   nothing by its "tail" — a running border that
                   reads as thick-to-thin, chasing around the card.
     > .pw-card-body — the real content, offset by the frame's
                   padding (the ring's thickness) with its own
                   opaque background, so only the ring shows through.
========================================================= */
.pw-card{
  position:relative; border-radius:var(--radius-card);
  padding:1.5px; /* ring thickness */
  overflow:hidden;
  opacity:0; transform:translateY(22px) scale(.97);
  animation:pw-card-in .6s var(--ease) forwards; animation-delay:var(--d,0s);
  transition:transform .35s var(--ease);
  max-width:320px; width:100%; justify-self:center;
}
@keyframes pw-card-in{ to{ opacity:1; transform:translateY(0) scale(1); } }
/* The running border is two layers rotating in perfect lockstep —
   a crisp thin line plus a softer, blurred, angularly-wider halo
   just behind it. Together they read as one shape: a bright,
   thick "head" that tapers down to a thin, fading tail — a snake
   chasing around the edge, not just a dot fading in place.
   Both use the exact same fixed duration (no per-card variation)
   so every card's snake stays at the same position at the same
   time, all moving together. */
.pw-card::before,
.pw-card::after{
  content:""; position:absolute; inset:-60%; z-index:0;
  animation:pw-border-spin 6s linear infinite;
}
.pw-card::before{
  background:conic-gradient(
    from 0deg,
    var(--blue-3) 0deg,
    var(--blue-2) 8deg,
    color-mix(in srgb, var(--blue-2) 45%, transparent) 34deg,
    color-mix(in srgb, var(--blue-2) 12%, transparent) 74deg,
    transparent 112deg,
    transparent 360deg
  );
}
.pw-card::after{
  background:conic-gradient(
    from 0deg,
    color-mix(in srgb, var(--blue-3) 80%, transparent) 0deg,
    color-mix(in srgb, var(--blue-2) 45%, transparent) 24deg,
    transparent 95deg,
    transparent 360deg
  );
  filter:blur(9px);
}
@keyframes pw-border-spin{ to{ transform:rotate(360deg); } }
.pw-card:hover{ transform:translateY(-6px); }
.pw-card:hover::before,
.pw-card:hover::after{ animation-duration:2.5s; }
.pw-card-body{
  position:relative; z-index:1; height:100%;
  background:var(--card); border:1px solid var(--card-border);
  border-radius:calc(var(--radius-card) - 1.5px); padding:18px;
  backdrop-filter:blur(18px); -webkit-backdrop-filter:blur(18px);
  box-shadow:var(--shadow-card); display:flex; flex-direction:column; gap:9px;
  transition:border-color .3s var(--ease), box-shadow .35s var(--ease);
}
.pw-card:hover .pw-card-body{
  border-color:var(--card-border-hover);
  box-shadow:0 26px 60px -18px rgba(60,110,255,0.35), var(--shadow-card);
}
.pw-card-index{
  position:absolute; top:14px; right:16px;
  font-size:11px; font-weight:700; letter-spacing:.04em;
  color:var(--text-2); opacity:.55;
}
.pw-icon{
  width:42px; height:42px; border-radius:12px; display:flex; align-items:center; justify-content:center;
  background:linear-gradient(150deg, rgba(90,130,255,0.35), rgba(40,60,140,0.25));
  border:1px solid rgba(140,175,255,0.35); box-shadow:0 0 22px -8px rgba(90,140,255,0.7); flex-shrink:0;
  transition:transform .35s var(--ease);
}
.pw-card:hover .pw-icon{ transform:scale(1.06) rotate(-2deg); }
.pw-icon svg{ width:21px; height:21px; }
.pw-card h3{ font-size:15.5px; margin:0; font-weight:700; letter-spacing:-.01em; padding-right:22px; }
.pw-card p{ font-size:12px; line-height:1.5; color:var(--text-1); margin:0; flex:1; }
.pw-tags{ display:flex; flex-wrap:wrap; gap:6px; align-items:center; margin-top:2px; }
.pw-tag{
  font-size:10px; font-weight:600; color:var(--blue-3);
  background:var(--pill-bg); border:1px solid var(--pill-border); padding:4px 9px; border-radius:var(--radius-pill);
}
.pw-go{
  margin-left:auto; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center;
  flex-shrink:0; background:linear-gradient(135deg,#4d7fff,#3f6bf0);
  box-shadow:0 0 16px -4px rgba(80,120,255,0.8); transition:transform .3s var(--ease);
}
.pw-card:hover .pw-go{ transform:translateX(3px); }
.pw-go svg{ width:12px; height:12px; }

.pw-orb-cell{ display:flex; align-items:center; justify-content:center; position:relative; z-index:1; max-width:220px; margin:0 auto; }
.pw-orbit-ring{
  position:absolute; top:50%; left:50%; border-radius:50%;
  border:1px solid rgba(110,150,255,0.22); pointer-events:none; transform:translate(-50%,-50%);
}
.pw-orbit-ring.r1{ width:158%; height:158%; animation:pw-spin 22s linear infinite; }
.pw-orbit-ring.r2{ width:210%; height:210%; border-style:dashed; border-color:rgba(110,150,255,0.16); animation:pw-spin-rev 34s linear infinite; }
.pw-orbit-dot{
  position:absolute; top:-4px; left:50%; width:7px; height:7px; border-radius:50%; transform:translateX(-50%);
  background:#a9c8ff; box-shadow:0 0 12px 3px rgba(120,165,255,0.85);
}
@keyframes pw-spin{ to{ transform:translate(-50%,-50%) rotate(360deg); } }
@keyframes pw-spin-rev{ to{ transform:translate(-50%,-50%) rotate(-360deg); } }
@media (max-width:1023px){ .pw-orbit-ring{ display:none; } }

.pw-orb{
  position:relative; width:100%; aspect-ratio:1/1; max-width:190px; border-radius:50%;
  display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;
  background:
    radial-gradient(circle at 30% 26%, rgba(170,205,255,0.65), transparent 42%),
    radial-gradient(circle at 68% 72%, rgba(70,100,230,0.6), transparent 55%),
    radial-gradient(circle at 50% 50%, #33509e 0%, #101a3f 72%);
  box-shadow:0 0 0 1px rgba(140,175,255,0.25), 0 0 70px 6px rgba(70,110,255,0.45), inset 0 0 60px rgba(180,210,255,0.25);
  animation:pw-orb-pulse 5s ease-in-out infinite;
}
@keyframes pw-orb-pulse{
  0%,100%{ box-shadow:0 0 0 1px rgba(140,175,255,0.25), 0 0 70px 6px rgba(70,110,255,0.45), inset 0 0 60px rgba(180,210,255,0.25); }
  50%{ box-shadow:0 0 0 1px rgba(140,175,255,0.4), 0 0 100px 16px rgba(70,110,255,0.65), inset 0 0 70px rgba(180,210,255,0.35); }
}
.pw-orb-eyebrow{ font-size:8px; letter-spacing:.14em; color:#c3d3ff; opacity:.75; font-weight:700; margin-bottom:4px; }
.pw-orb h2{ font-size:clamp(17px,2vw,20px); margin:0; font-weight:800; color:#fff; line-height:1.1; }
.pw-orb-sub{ font-size:8.5px; letter-spacing:.05em; color:#c3d3ff; margin-top:7px; opacity:.85; }

.pw-footer{
  display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;
  margin-top:60px; padding-top:26px; border-top:1px solid rgba(120,150,255,0.1);
  font-size:12.5px; color:var(--text-2);
}
.pw-brand{ display:flex; align-items:center; gap:12px; }
.pw-lock{
  width:34px; height:34px; border-radius:50%; border:1px solid rgba(140,175,255,0.4);
  display:flex; align-items:center; justify-content:center; background:rgba(70,100,200,0.15);
}
.pw-lock svg{ width:15px; height:15px; }
.pw-brand div{ line-height:1.45; }
.pw-tri{ letter-spacing:.14em; font-weight:600; }

@media (max-width:1023px){
  .pw-grid{ grid-template-columns:1fr 1fr; }
  .pw-orb-cell{ grid-column:1/-1; order:-1; margin-bottom:8px; }
  .pw-orb{ max-width:170px; }
}
@media (max-width:640px){
  .pw-grid{ grid-template-columns:1fr; gap:16px; }
  .pw-footer{ justify-content:center; text-align:center; }
}

/* =========================================================
   LIGHT THEME
   Everything above is the dark look (this component's original
   default). The app toggles themes by adding/removing a "dark"
   class on <html> (see components/theme-toggle.tsx) — so light
   mode is simply "html without that class". Re-pointing the
   custom properties on .pw-root covers every rule that already
   reads them; the rules below handle the handful that use a
   literal color instead of a variable.
========================================================= */
html:not(.dark) .pw-root{
  --bg-0:#f7f9fc;
  --card:rgba(255,255,255,0.97);
  --card-border:rgba(47,93,245,0.18);
  --card-border-hover:rgba(47,93,245,0.5);
  --text-0:#0b1220;
  --text-1:#5b6b82;
  --text-2:#5b6b82;
  --blue-2:#2f5df5;
  --blue-3:#1a3fd6;
  --pill-bg:rgba(47,93,245,0.08);
  --pill-border:rgba(47,93,245,0.22);
  --shadow-card:0 20px 50px -20px rgba(30,60,140,0.18);
  background:
    radial-gradient(ellipse 900px 600px at 18% 8%, rgba(47,93,245,0.10), transparent 60%),
    radial-gradient(ellipse 900px 700px at 85% 90%, rgba(109,92,240,0.08), transparent 60%),
    radial-gradient(ellipse 1400px 900px at 50% 38%, rgba(47,93,245,0.08), transparent 65%),
    var(--bg-0);
}
html:not(.dark) .pw-stars span{
  background:rgba(47,93,245,0.55);
  box-shadow:0 0 6px 1px rgba(47,93,245,0.35);
}
html:not(.dark) .pw-badge{
  background:linear-gradient(180deg, rgba(255,255,255,0.9), rgba(232,237,255,0.75));
  border-color:rgba(47,93,245,0.35);
  box-shadow:0 0 20px -6px rgba(47,93,245,0.25);
}
html:not(.dark) .pw-spoke{ stroke:rgba(47,93,245,0.45); }
html:not(.dark) .pw-node{ fill:#ffffff; stroke:rgba(47,93,245,0.55); }
html:not(.dark) .pw-node-dot{ fill:#2f5df5; }
html:not(.dark) .pw-node-label{ fill:#1a3fd6; }
html:not(.dark) .pw-icon{
  background:linear-gradient(150deg, rgba(47,93,245,0.14), rgba(109,92,240,0.1));
  border-color:rgba(47,93,245,0.3);
  box-shadow:0 0 16px -8px rgba(47,93,245,0.5);
}
html:not(.dark) .pw-icon svg{ stroke:#2f5df5; }
html:not(.dark) .pw-orbit-ring{ border-color:rgba(47,93,245,0.28); }
html:not(.dark) .pw-orbit-ring.r2{ border-color:rgba(47,93,245,0.2); }
html:not(.dark) .pw-orbit-dot{
  background:#2f5df5;
  box-shadow:0 0 12px 3px rgba(47,93,245,0.55);
}
html:not(.dark) .pw-lock{
  border-color:rgba(47,93,245,0.35);
  background:rgba(47,93,245,0.08);
}
html:not(.dark) .pw-lock svg{ stroke:#2f5df5; }
html:not(.dark) .pw-footer{ border-top-color:rgba(47,93,245,0.15); }
`;