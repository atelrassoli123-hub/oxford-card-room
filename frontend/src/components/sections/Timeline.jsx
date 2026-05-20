import React, { useState } from "react";
import Reveal from "@/components/Reveal";

const WEEKS = [
  {
    week: 1,
    date: "Wk I",
    title: "Freshers' Welcome",
    sub: "Open Tables · All Levels",
    detail: "The Card Room opens. Meet the committee, take your seat at the Beginners' Table, and play your first hand of Oxford poker. No experience necessary.",
    flagship: false,
  },
  {
    week: 2,
    date: "Wk II",
    title: "Members' Night",
    sub: "All Three Tables",
    detail: "Our weekly evening settles into its rhythm — Beginners', Casual, and Competitive tables running simultaneously.",
    flagship: false,
  },
  {
    week: 3,
    date: "Wk III",
    title: "Lecture I",
    sub: "Poker Fundamentals",
    detail: "Open lecture covering hand rankings, position, pot odds, and basic decision-making. Recommended for all new members.",
    flagship: false,
  },
  {
    week: 4,
    date: "Wk IV",
    title: "The Knockout Night",
    sub: "★ Flagship · Boxing & Poker",
    detail: "Our signature event. Three sanctioned boxing bouts, a friendly book on each fighter, and a four-table poker tournament running alongside. Open to all members and their guests.",
    flagship: true,
  },
  {
    week: 5,
    date: "Wk V",
    title: "Lecture II",
    sub: "Tournament Play",
    detail: "Practical session on tournament structure, push/fold strategy, and ICM basics. Priority booking for Competitive Table members.",
    flagship: false,
  },
  {
    week: 6,
    date: "Wk VI",
    title: "Members' Night",
    sub: "Mid-Term Evening",
    detail: "Extra Beginners' tables available on request. A good week to bring a guest.",
    flagship: false,
  },
  {
    week: 7,
    date: "Wk VII",
    title: "Lecture III",
    sub: "Game Theory & Poker",
    detail: "Co-hosted with the Oxford Mathematical Society. A light-touch exploration of Nash equilibria, bluff frequencies, and solver theory. Open to all.",
    flagship: false,
  },
  {
    week: 8,
    date: "Wk VIII",
    title: "The Card Room Trophy",
    sub: "★ Flagship · Term Championship",
    detail: "The term closes. A friendly championship open to members from all three tables — engraved trophy, winner decided on the night. A proper Oxford send-off.",
    flagship: true,
  },
];

export default function Timeline() {
  const [hover, setHover] = useState(null);

  return (
    <section
      id="timeline"
      data-testid="timeline-section"
      className="relative py-24 lg:py-40 bg-[#08090f] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(198,167,106,0.025),transparent)]" />
      <div className="absolute inset-0 grain opacity-20 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <Reveal as="div" className="lg:col-span-5">
            <p className="font-body text-[9px] uppercase tracking-[0.55em] text-[#C6A76A] mb-8">
              :03 — Michaelmas Term Card
            </p>
            <h2
              className="font-display text-[#F0EAD6] leading-[0.95] tracking-tight font-bold"
              style={{ fontSize: "clamp(40px, 6vw, 78px)" }}
            >
              Michaelmas<br />
              <span className="italic font-normal text-[#C6A76A]">Term Card.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={130} className="lg:col-span-5 lg:col-start-8 lg:pt-2 flex items-end">
            <p className="font-body text-[#F0EAD6]/60 text-base md:text-lg leading-relaxed">
              Eight weeks. One season. A members' evening every week,
              a lecture every fortnight, and two flagship nights bookending
              the term. Everything is open to members at every level.
            </p>
          </Reveal>
        </div>

        {/* ── Desktop: alternating timeline (odd left, even right, one per row) ── */}
        <div className="hidden lg:block relative">

          {/* Central spine */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(198,167,106,0.32) 6%, rgba(198,167,106,0.32) 94%, transparent)" }}
          />

          <div className="grid grid-cols-2">
            {WEEKS.map((w, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={w.week}
                  style={{ gridColumn: isLeft ? "1" : "2", gridRow: i + 1 }}
                  className={`py-3 ${isLeft ? "pr-10" : "pl-10"}`}
                >
                  <Reveal delay={i * 50} as="div">
                    <div
                      data-testid={`timeline-week-${w.week}`}
                      className="relative cursor-default group"
                      onMouseEnter={() => setHover(w.week)}
                      onMouseLeave={() => setHover(null)}
                    >
                      <div
                        className={`relative px-6 py-5 transition-all duration-300 ${
                          w.flagship
                            ? "border border-[#C6A76A]/50 bg-[#0c0d16] rounded group-hover:border-[#C6A76A]/80 group-hover:shadow-[0_0_20px_rgba(198,167,106,0.12)]"
                            : "border border-[#F0EAD6]/[0.12] bg-[#050816] rounded group-hover:border-[#F0EAD6]/30"
                        }`}
                      >
                        <p className={`font-body text-[8px] uppercase tracking-[0.5em] mb-2 ${w.flagship ? "text-[#C6A76A]" : "text-[#F0EAD6]/25"}`}>
                          {w.flagship ? "★ Flagship · " : ""}{w.date}
                        </p>
                        <h3 className={`font-display font-bold tracking-tight leading-tight text-lg ${w.flagship ? "text-[#C6A76A]" : "text-[#F0EAD6]/85"}`}>
                          {w.title}
                        </h3>
                        <p className="font-body text-[10px] text-[#F0EAD6]/30 mt-1 uppercase tracking-[0.3em]">
                          {w.sub}
                        </p>
                        <div className={`overflow-hidden transition-all duration-500 ${hover === w.week ? "max-h-32 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                          <p className="font-body text-[#F0EAD6]/65 text-[13px] leading-relaxed border-t border-[#F0EAD6]/[0.12] pt-4">
                            {w.detail}
                          </p>
                        </div>
                      </div>

                      {/* Dot node at the spine edge */}
                      <div
                        data-testid={`timeline-node-${w.week}`}
                        className={`absolute top-1/2 -translate-y-1/2 z-10 ${isLeft ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"}`}
                      >
                        <div className={`transition-all duration-300 ${
                          w.flagship
                            ? "w-2.5 h-2.5 bg-[#C6A76A] shadow-[0_0_12px_3px_rgba(198,167,106,0.45)] rotate-45"
                            : "w-1.5 h-1.5 bg-[#08090f] border border-[#C6A76A]/45 rounded-full"
                        } ${hover === w.week ? "scale-150" : ""}`} />
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile: simple list ──────────────────────────── */}
        <div className="lg:hidden space-y-3">
          {WEEKS.map((w) => (
            <Reveal key={`mob-${w.week}`} delay={w.week * 40} as="div">
              <div
                data-testid={`timeline-mobile-week-${w.week}`}
                className={`px-6 py-5 border ${
                  w.flagship
                    ? "border-[#C6A76A]/40 bg-[#0c0d16]"
                    : "border-[#F0EAD6]/[0.07] bg-[#050816]"
                }`}
              >
                <p
                  className={`font-body text-[8px] uppercase tracking-[0.5em] mb-1.5 ${
                    w.flagship ? "text-[#C6A76A]" : "text-[#F0EAD6]/25"
                  }`}
                >
                  {w.flagship ? "★ Flagship · " : ""}{w.date}
                </p>
                <h3
                  className={`font-display font-bold tracking-tight text-lg leading-tight mb-1 ${
                    w.flagship ? "text-[#C6A76A]" : "text-[#F0EAD6]/70"
                  }`}
                >
                  {w.title}
                </h3>
                <p className="font-body text-[10px] text-[#F0EAD6]/30 uppercase tracking-[0.3em] mb-3">
                  {w.sub}
                </p>
                <p className="font-body text-[#F0EAD6]/35 text-[13px] leading-relaxed">
                  {w.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Term footer note */}
        <Reveal delay={200}>
          <div className="mt-16 flex items-center gap-6">
            <div className="flex-1 h-px bg-[#F0EAD6]/[0.05]" />
            <p className="font-body text-[9px] uppercase tracking-[0.5em] text-[#F0EAD6]/20 whitespace-nowrap">
              Michaelmas Term · Eight Weeks · Oxford University
            </p>
            <div className="flex-1 h-px bg-[#F0EAD6]/[0.05]" />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
