import React from "react";
import { Flourish } from "@/components/Ornaments";

const WEEKS = [
  { week: 1, title: "Freshers' Welcome & Open Tables", detail: "Meet the committee, try a hand at the Beginners' Table. No experience needed.", flagship: false },
  { week: 2, title: "Members' Night · All Tables", detail: "Our weekly evening — Beginners', Casual and Competitive running side by side.", flagship: false },
  { week: 3, title: "Lecture I — Poker Basics", detail: "Open lecture for new players: hand rankings, position, and decision-making.", flagship: false },
  { week: 4, title: "The Knockout Night", detail: "Flagship boxing-and-poker evening. Three sanctioned bouts, friendly book on each fighter, four-table tournament. Open to everyone.", flagship: true },
  { week: 5, title: "Lecture II — Tournament Play", detail: "Practical session for anyone interested in the tournament format.", flagship: false },
  { week: 6, title: "Members' Night · All Tables", detail: "Mid-term evening with extra Beginners' tables on request.", flagship: false },
  { week: 7, title: "Lecture III — Game Theory & Poker", detail: "Co-hosted with the Oxford Mathematical Society. Light-touch maths, open to all.", flagship: false },
  { week: 8, title: "The Card Room Trophy", detail: "Term-closing championship. Friendly format, engraved trophy, winner from any of the three tables.", flagship: true },
];

/**
 * Serpentine timeline — 8 nodes on a hand-drawn curve that snakes
 * left-to-right while moving down the page.
 *
 * Node positions are placed on a 100×800 viewBox so the SVG path
 * and the absolutely-positioned event cards line up exactly.
 */
const VIEW_W = 100;
const VIEW_H = 620;

// More spaced-out serpentine
const NODES = [
  { x: 10, y: 50 },
  { x: 32, y: 130 },
  { x: 56, y: 210 },
  { x: 80, y: 295 },
  { x: 58, y: 380 },
  { x: 34, y: 460 },
  { x: 56, y: 540 },
  { x: 82, y: 600 },
];

// Smooth cubic Bezier through the nodes
function buildPath(pts) {
  if (!pts.length) return "";
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i];
    const p1 = pts[i + 1];
    const dx = (p1.x - p0.x) * 0.5;
    const c1x = p0.x + dx;
    const c1y = p0.y;
    const c2x = p1.x - dx;
    const c2y = p1.y;
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p1.x} ${p1.y}`;
  }
  return d;
}

export default function Timeline() {
  const pathD = buildPath(NODES);

  return (
    <section
      id="timeline"
      data-testid="timeline-section"
      className="relative py-20 lg:py-24 bg-[#0F1B33] overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-5">
            <p className="font-body text-[10px] uppercase tracking-[0.45em] text-[#C8A662] mb-4">
              03 — Michaelmas Term 2027
            </p>
            <Flourish className="w-32 h-4" color="#C8A662" />
            <h2 className="mt-8 font-display text-4xl md:text-5xl lg:text-6xl text-[#F5EFDE] leading-[0.98] tracking-tight font-bold">
              Eight weeks.
              <br />
              <span className="italic text-[#C8A662] font-normal">One season.</span>            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
            <p className="font-body text-[#F5EFDE]/80 text-base md:text-lg leading-relaxed">
              The whole season at a glance — eight weeks of Michaelmas Term 2027.
              A members' night every week, a lecture every fortnight, and two
              flagship evenings bookending the term. Everything is open to
              members at any level.
            </p>
          </div>
        </div>

        {/* Serpentine timeline — spaced-out, fixed visual height */}
        <div
          className="relative mx-auto"
          style={{ maxWidth: "1100px", height: "1020px" }}
          data-testid="timeline-rail-container"
        >
          {/* SVG curve (decorative, fills the same coordinate space as cards) */}
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="timeline-curve" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C8A662" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#C8A662" stopOpacity="1" />
                <stop offset="100%" stopColor="#C8A662" stopOpacity="0.75" />
              </linearGradient>
            </defs>
            <path
              d={pathD}
              fill="none"
              stroke="url(#timeline-curve)"
              strokeWidth="0.6"
              strokeDasharray="0.8 1.2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ strokeWidth: 1.5 }}
            />
          </svg>

          {/* Nodes + cards */}
          <div className="relative w-full h-full">
            {NODES.map((node, i) => {
              const w = WEEKS[i];
              const placeRight = node.x < 50;
              const leftPct = placeRight ? node.x + 6 : node.x - 32;
              return (
                <React.Fragment key={w.week}>
                  {/* Diamond node */}
                  <div
                    data-testid={`timeline-node-${w.week}`}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rotate-45 z-10 ${
                      w.flagship
                        ? "w-5 h-5 bg-[#C8A662] shadow-[0_0_22px_rgba(200,166,98,0.7)] ring-2 ring-[#0E0E10]"
                        : "w-3.5 h-3.5 bg-[#C8A662] ring-1 ring-[#0F1B33]/60"
                    }`}
                    style={{
                      left: `${node.x}%`,
                      top: `${(node.y / VIEW_H) * 100}%`,
                    }}
                  />

                  {/* Week label */}
                  <div
                    className="absolute z-10 select-none pointer-events-none"
                    style={{
                      left: `${node.x}%`,
                      top: `${(node.y / VIEW_H) * 100}%`,
                      transform: `translate(${placeRight ? "-150%" : "50%"}, -50%)`,
                    }}
                  >
                    <span
                      className={`font-display tracking-tight font-bold ${
                        w.flagship ? "text-[#C8A662] text-2xl md:text-3xl drop-shadow-[0_0_8px_rgba(200,166,98,0.5)]" : "text-[#F5EFDE]/60 text-xl md:text-2xl"
                      }`}
                    >
                      {String(w.week).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Card with holographic hover description */}
                  <div
                    data-testid={`timeline-week-${w.week}`}
                    className="absolute z-20 group/event"
                    style={{
                      left: `${leftPct}%`,
                      top: `${(node.y / VIEW_H) * 100}%`,
                      transform: "translateY(-50%)",
                      width: "26%",
                      minWidth: "230px",
                    }}
                  >
                    <div
                      className={`relative px-4 py-3 border-2 transition-all duration-300 cursor-default group-hover/event:-translate-y-0.5 ${
                        w.flagship
                          ? "bg-[#0A0A0A] border-[#C8A662] text-[#F5EFDE] shadow-[0_0_24px_rgba(200,166,98,0.25)]"
                          : "bg-[#F5EFDE] border-[#C8A662]/40 hover:border-[#C8A662]"
                      }`}
                    >
                      <div
                        className={`font-body text-[9px] uppercase tracking-[0.32em] mb-1 ${
                          w.flagship ? "text-[#C8A662]" : "text-[#0F1B33]/70"
                        }`}
                      >
                        {w.flagship ? "★ Flagship · Week " : "Week "}
                        {String(w.week).padStart(2, "0")}
                      </div>
                      <h3
                        className={`font-display leading-tight tracking-tight font-bold ${
                          w.flagship
                            ? "text-base md:text-lg text-[#C8A662]"
                            : "text-sm md:text-base text-[#0F1B33]"
                        }`}
                      >
                        {w.title}
                      </h3>
                    </div>

                    {/* Holographic description — pops to the side (outward from the curve) */}
                    <div
                      data-testid={`timeline-holo-${w.week}`}
                      className={`pointer-events-none absolute z-30 opacity-0 group-hover/event:opacity-100 transition-all duration-300 ${
                        placeRight
                          ? "left-full ml-4 -translate-x-2 group-hover/event:translate-x-0"
                          : "right-full mr-4 translate-x-2 group-hover/event:translate-x-0"
                      }`}
                      style={{
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "300px",
                      }}
                    >
                      {/* Connector pin */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 holo-surface ${
                          placeRight ? "-left-1.5" : "-right-1.5"
                        }`}
                      />
                      <div className="relative holo-surface rounded-sm px-5 py-4">
                        <div className="holo-edge rounded-sm" />
                        <div className="relative">
                          <div className="font-body text-[9px] uppercase tracking-[0.36em] text-[#0F1B33] mb-2">
                            {w.flagship ? "★ Flagship Event" : `Week ${String(w.week).padStart(2, "0")} · Michaelmas`}
                          </div>
                          <p className="font-display text-[#0F1B33] text-[15px] leading-snug font-bold mb-2">
                            {w.title}
                          </p>
                          <p className="font-body text-[#1B2845]/85 text-[13px] leading-relaxed">
                            {w.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Mobile fallback list */}
        <div className="lg:hidden mt-12 space-y-6">
          {WEEKS.map((w) => (
            <div
              key={`mobile-${w.week}`}
              data-testid={`timeline-mobile-week-${w.week}`}
              className={`p-5 border-2 ${
                w.flagship
                  ? "bg-[#0A0A0A] border-[#C8A662] text-[#F5EFDE]"
                  : "bg-[#F5EFDE] border-[#C8A662]/40"
              }`}
            >
              <div
                className={`font-body text-[10px] uppercase tracking-[0.3em] mb-1 ${
                  w.flagship ? "text-[#C8A662]" : "text-[#0F1B33]/70"
                }`}
              >
                {w.flagship ? "★ Flagship · Week " : "Week "}
                {String(w.week).padStart(2, "0")}
              </div>
              <h3
                className={`font-display leading-tight font-bold ${
                  w.flagship ? "text-xl text-[#C8A662]" : "text-lg text-[#0F1B33]"
                }`}
              >
                {w.title}
              </h3>
              <p
                className={`font-body text-[13px] leading-relaxed mt-1.5 ${
                  w.flagship ? "text-[#F5EFDE]/85" : "text-[#2a3550]"
                }`}
              >
                {w.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
