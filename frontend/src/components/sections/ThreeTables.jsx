import React, { useState } from "react";
import Reveal from "@/components/Reveal";

const TABLES = [
  {
    id: "beginners",
    index: "01",
    name: "Beginners'",
    subtitle: "Table",
    tagline: "Your first hand. Not your last.",
    description:
      "Never played before? Good. The Beginners' Table is designed around you. A committee member sits with you for the first hour, walking through hand rankings, position, and basic strategy in real time. Buy-ins are minimal. Nerves are expected. By the end of the evening you'll have played a full session of real poker — and you'll already be planning your next one.",
    details: [
      "Guided first hour with committee",
      "£5 buy-in, re-buys welcome",
      "Hand-by-hand Q&A welcome",
      "Beginners' Lecture Series included",
    ],
    atmosphere: "Warm. Patient. Genuinely welcoming.",
    img: "https://images.unsplash.com/photo-1541278107931-e006523892df?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&q=80&w=700",
    accent: "#C6A76A",
    bgFrom: "rgba(198,167,106,0.06)",
    bgTo:   "rgba(198,167,106,0.01)",
    numberOpacity: "text-[#C6A76A]/[0.04]",
    borderIdle:  "border-[#F0EAD6]/[0.07]",
    borderHover: "hover:border-[#C6A76A]/25",
    labelColor:  "text-[#C6A76A]",
  },
  {
    id: "casual",
    index: "02",
    name: "Casual",
    subtitle: "Table",
    tagline: "The evening you come back for.",
    description:
      "The social heart of the Card Room. You know the basics, you've found your style, and you're here for good company and a fair game. The Casual Table runs at a comfortable pace — enough competition to keep it interesting, enough levity to keep it enjoyable. Most members spend at least part of every evening here, regardless of their experience.",
    details: [
      "Mid-stakes: £10–£20 buy-in",
      "Mixed experience levels",
      "Part of every members' night",
      "No application required",
    ],
    atmosphere: "Convivial. Competitive. Comfortable.",
    img: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&q=80&w=700",
    accent: "#8fa8c8",
    bgFrom: "rgba(143,168,200,0.05)",
    bgTo:   "rgba(143,168,200,0.01)",
    numberOpacity: "text-[#8fa8c8]/[0.04]",
    borderIdle:  "border-[#F0EAD6]/[0.07]",
    borderHover: "hover:border-[#8fa8c8]/25",
    labelColor:  "text-[#8fa8c8]",
  },
  {
    id: "competitive",
    index: "03",
    name: "Competitive",
    subtitle: "Table",
    tagline: "Where the game gets serious.",
    description:
      "Reserved for players who want to be tested. The Competitive Table runs tighter — higher buy-ins, longer sessions, and an expectation of focused play. It feeds directly into The Card Room Trophy at the end of term. If you've been playing for a while and you want a game that matches your ambition, this is your table. Jump Trading's support makes the stakes meaningful.",
    details: [
      "£30–£50 buy-in",
      "Feeds into the Card Room Trophy",
      "Advanced Lecture Series priority",
      "Jump Trading underwritten",
    ],
    atmosphere: "Focused. Rigorous. Rewarding.",
    img: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&q=80&w=700",
    accent: "#9a3545",
    bgFrom: "rgba(154,53,69,0.06)",
    bgTo:   "rgba(154,53,69,0.01)",
    numberOpacity: "text-[#9a3545]/[0.05]",
    borderIdle:  "border-[#F0EAD6]/[0.07]",
    borderHover: "hover:border-[#9a3545]/25",
    labelColor:  "text-[#C6A76A]",
  },
];

export default function ThreeTables() {
  const [active, setActive] = useState(1); // Casual open by default

  return (
    <section
      id="tables"
      data-testid="tables-section"
      className="relative py-24 lg:py-40 bg-[#050816] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(198,167,106,0.025),transparent)]" />
      <div className="absolute inset-0 grain opacity-20 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <Reveal as="div" className="lg:col-span-5">
            <p className="font-body text-[9px] uppercase tracking-[0.55em] text-[#C6A76A] mb-8">
              :02 — Three Kinds of Evening
            </p>
            <h2
              className="font-display text-[#F0EAD6] leading-[0.95] tracking-tight font-bold"
              style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
            >
              Three tables.
              <br />
              <span className="italic font-normal text-[#C6A76A]">One evening.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={130} className="lg:col-span-5 lg:col-start-8 lg:pt-4 flex items-end">
            <p className="font-body text-[#F0EAD6]/60 text-base md:text-lg leading-relaxed">
              The Oxford Card Room runs all three tables simultaneously on
              every members' night. Find the level that fits — or move between
              them as you grow. There's no hierarchy; only the game you want to play.
            </p>
          </Reveal>
        </div>

        {/* Table selector — desktop: three columns */}
        <div className="hidden lg:grid grid-cols-3 gap-px bg-[#F0EAD6]/[0.04] mb-px">
          {TABLES.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              data-testid={`table-tab-${t.id}`}
              className={`text-left px-8 py-6 transition-all duration-300 ${
                active === i
                  ? "bg-[#0c1022]"
                  : "bg-[#050816] hover:bg-[#080b18]"
              }`}
            >
              <span
                className={`font-body text-[8px] uppercase tracking-[0.5em] transition-colors ${
                  active === i ? t.labelColor : "text-[#F0EAD6]/25"
                }`}
              >
                :{t.index}
              </span>
              <p
                className={`font-display text-2xl font-bold tracking-tight mt-1 transition-colors ${
                  active === i ? "text-[#F0EAD6]" : "text-[#F0EAD6]/40"
                }`}
              >
                {t.name}
                <span className="font-normal italic"> {t.subtitle}</span>
              </p>
            </button>
          ))}
        </div>

        {/* Active panel — desktop */}
        <div className="hidden lg:block">
          {TABLES.map((t, i) => (
            <div
              key={t.id}
              data-testid={`table-panel-${t.id}`}
              className={`transition-all duration-500 ${
                active === i
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 pointer-events-none absolute"
              }`}
              style={{ position: active === i ? "relative" : "absolute", width: "100%" }}
            >
              <div
                className="relative border border-[#F0EAD6]/[0.12] rounded-lg overflow-hidden"
                style={{
                  background: `radial-gradient(ellipse 60% 80% at 80% 50%, ${t.bgFrom}, transparent), #08090f`,
                }}
              >
                {/* Big background number */}
                <div
                  aria-hidden="true"
                  className={`absolute right-8 top-1/2 -translate-y-1/2 font-display font-bold leading-none select-none pointer-events-none ${t.numberOpacity}`}
                  style={{ fontSize: "clamp(180px, 22vw, 280px)" }}
                >
                  {t.index}
                </div>

                <div className="relative grid grid-cols-12 gap-0">
                  {/* Left: main content */}
                  <div className="col-span-7 p-12 lg:p-16">
                    <p
                      className="font-body text-[9px] uppercase tracking-[0.55em] mb-6"
                      style={{ color: t.accent }}
                    >
                      :{t.index} — {t.name} {t.subtitle}
                    </p>
                    <h3
                      className="font-display text-[#F0EAD6] font-bold tracking-tight leading-[0.95] mb-4"
                      style={{ fontSize: "clamp(36px, 4vw, 58px)" }}
                    >
                      {t.name}
                      <br />
                      <span className="italic font-normal" style={{ color: t.accent }}>
                        {t.subtitle}
                      </span>
                    </h3>
                    <p
                      className="font-display italic text-lg mb-8"
                      style={{ color: `${t.accent}99` }}
                    >
                      "{t.tagline}"
                    </p>
                    <p className="font-body text-[#F0EAD6]/65 text-base leading-[1.9] max-w-xl mb-10">
                      {t.description}
                    </p>
                    <p
                      className="font-body text-[9px] uppercase tracking-[0.5em]"
                      style={{ color: `${t.accent}60` }}
                    >
                      :{t.atmosphere}
                    </p>
                  </div>

                  {/* Right: themed image with details overlay */}
                  <div
                    className="col-span-5 relative overflow-hidden border-l"
                    style={{ borderColor: `${t.accent}15`, minHeight: "420px" }}
                  >
                    <img
                      src={t.img}
                      alt={t.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ filter: "grayscale(0.4) contrast(1.08)", transform: "scale(1.04)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/70 to-[#050816]/25" />
                    <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 100% 55% at 50% 100%, ${t.bgFrom}, transparent)` }} />
                    <div className="relative z-10 flex flex-col justify-end h-full p-12 lg:p-16">
                      <p className="font-body text-[9px] uppercase tracking-[0.5em] text-[#F0EAD6]/30 mb-8">
                        :What to expect
                      </p>
                      <ul className="space-y-5">
                        {t.details.map((d, di) => (
                          <li key={di} className="flex items-start gap-4">
                            <span
                              className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full"
                              style={{ background: t.accent }}
                            />
                            <span className="font-body text-[#F0EAD6]/85 text-sm leading-relaxed">
                              {d}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-12 pt-8" style={{ borderTop: `1px solid ${t.accent}18` }}>
                        <a
                          href="#newsletter"
                          className="inline-flex items-center gap-3 font-body text-[9px] uppercase tracking-[0.45em] transition-colors"
                          style={{ color: `${t.accent}80` }}
                          onMouseEnter={e => e.currentTarget.style.color = t.accent}
                          onMouseLeave={e => e.currentTarget.style.color = `${t.accent}80`}
                        >
                          Join to reserve your seat
                          <span className="inline-block w-4 h-px bg-current" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: stacked accordion */}
        <div className="lg:hidden space-y-px">
          {TABLES.map((t, i) => (
            <div
              key={t.id}
              data-testid={`table-accordion-${t.id}`}
              className="border border-[#F0EAD6]/[0.07] overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-6 flex items-center justify-between"
                onClick={() => setActive(active === i ? -1 : i)}
              >
                <div>
                  <span
                    className="font-body text-[8px] uppercase tracking-[0.5em]"
                    style={{ color: t.accent }}
                  >
                    :{t.index}
                  </span>
                  <p className="font-display text-xl font-bold text-[#F0EAD6] tracking-tight mt-0.5">
                    {t.name}
                    <span className="italic font-normal"> {t.subtitle}</span>
                  </p>
                </div>
                <span
                  className="font-body text-lg text-[#F0EAD6]/30 transition-transform duration-300"
                  style={{ transform: active === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>

              <div
                className="table-panel-content"
                style={{ display: active === i ? "block" : "none" }}
              >
                <div className="px-6 pb-8 border-t border-[#F0EAD6]/[0.05]">
                  <div className="relative h-36 mt-5 mb-5 overflow-hidden">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ filter: "grayscale(0.5) contrast(1.06)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050816]/75" />
                  </div>
                  <p
                    className="font-display italic text-base mb-4"
                    style={{ color: `${t.accent}80` }}
                  >
                    "{t.tagline}"
                  </p>
                  <p className="font-body text-[#F0EAD6]/45 text-sm leading-relaxed mb-6">
                    {t.description}
                  </p>
                  <ul className="space-y-3">
                    {t.details.map((d, di) => (
                      <li key={di} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full"
                          style={{ background: t.accent }}
                        />
                        <span className="font-body text-[#F0EAD6]/40 text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                  <p
                    className="font-body text-[9px] uppercase tracking-[0.45em] mt-6"
                    style={{ color: `${t.accent}50` }}
                  >
                    :{t.atmosphere}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
