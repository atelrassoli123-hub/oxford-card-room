import React from "react";
import { Spade, Heart, Diamond, Club } from "lucide-react";
import { Flourish } from "@/components/Ornaments";
import Reveal from "@/components/Reveal";

const TABLES = [
  {
    icon: Spade,
    title: "Beginners' Table",
    body: "For anyone new to poker. A friendly dealer walks you through the rules, hand rankings and basic strategy as you play. No buy-in, just turn up.",
  },
  {
    icon: Heart,
    title: "Casual Table",
    body: "Low-stakes social cash. £5 friendly buy-in, no pressure, plenty of conversation. The most popular table on a Wednesday night.",
  },
  {
    icon: Diamond,
    title: "Competitive Table",
    body: "For more experienced players who want a deeper cash game. £20 buy-in, deep stacks, and the occasional staked session. Tight, but always good-natured.",
  },
  {
    icon: Club,
    title: "Flagship Nights",
    body: "Our two big termly events — the Knockout Night and the Card Room Trophy. Open to every member regardless of table. Friendly format, engraved trophy on the line.",
  },
];

const HOUSE_RULES = [
  "We play No-Limit Texas Hold'em as the standard format.",
  "Dealers and committee members are happy to explain any rule mid-hand.",
  "One player to a hand. Verbal declarations are binding.",
  "Phones face-down at the table, please — it keeps the game friendly.",
  "Dress code is smart-casual; black tie only on the flagship night.",
];

export default function Format() {
  return (
    <section
      id="format"
      data-testid="format-section"
      className="relative py-24 lg:py-36 bg-[#F5EFDE] overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <Reveal as="div" className="lg:col-span-5">
            <p className="font-body text-[10px] uppercase tracking-[0.45em] text-[#9A1F2C] mb-4">
              02 — Format & Tables
            </p>
            <Flourish className="w-32 h-4" color="#C8A662" />
            <h2 className="mt-8 font-display text-4xl md:text-5xl lg:text-6xl text-[#0F1B33] leading-[0.98] tracking-tight font-bold">
              A table for
              <br />
              <span className="italic text-[#C8A662] font-normal">every level.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={120} className="lg:col-span-7 lg:pt-4">
            <p className="font-body text-[#2a3550] text-base md:text-lg leading-relaxed">
              Every members' night runs three tables side by side — so whether
              you've never played a hand or you've been at it for years,
              there's somewhere to sit. Switch tables as you get more
              comfortable. The dealers are members of the committee and
              happy to teach.
            </p>
          </Reveal>
        </div>

        {/* Four equal cards in a 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1B2845]/15">
          {TABLES.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                data-testid={`format-card-${r.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="bg-[#F5EFDE] p-8 lg:p-12 group hover:bg-[#EFE7CF] transition-colors duration-500 flex flex-col"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-14 h-14 border border-[#C8A662] flex items-center justify-center group-hover:bg-[#0F1B33] group-hover:border-[#0F1B33] transition-all duration-500">
                    <Icon size={22} strokeWidth={1.2} className="text-[#0F1B33] group-hover:text-[#C8A662] transition-colors duration-500" />
                  </div>                  <div>
                    <h3 className="font-display text-2xl lg:text-3xl text-[#0F1B33] mb-3 tracking-tight font-bold">
                      {r.title}
                    </h3>
                    <p className="font-body text-[#2a3550] text-[15px] leading-relaxed">
                      {r.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* House rules */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <p className="font-body text-[10px] uppercase tracking-[0.45em] text-[#9A1F2C]/80 mb-3">
              A Few House Rules
            </p>
            <h3 className="font-display text-3xl text-[#0F1B33] leading-tight tracking-tight font-bold">
              Keep it friendly, keep it fair.
            </h3>
          </div>
          <div className="lg:col-span-8">
            <ul className="divide-y divide-[#1B2845]/15 border-y border-[#1B2845]/15">
              {HOUSE_RULES.map((e, i) => (
                <li
                  key={i}
                  data-testid={`etiquette-rule-${i}`}
                  className="py-5 flex items-start gap-6 group"
                >
                  <span className="font-display text-2xl text-[#C8A662] group-hover:text-[#0F1B33] transition-colors w-10 shrink-0 font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body text-[#1B2845] text-base md:text-lg leading-relaxed">
                    {e}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
