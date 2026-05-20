import React from "react";
import Reveal from "@/components/Reveal";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      data-testid="manifesto-section"
      className="relative py-28 lg:py-44 bg-[#F8F4EC] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(198,167,106,0.08),transparent)]" />
      <div className="absolute inset-0 grain opacity-15 pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-12">

        <Reveal>
          <p className="font-body text-[9px] uppercase tracking-[0.6em] text-[#C6A76A] mb-16 text-center">
            :Philosophy
          </p>
        </Reveal>

        <Reveal delay={100}>
          <blockquote className="text-center">
            <p
              className="font-display text-[#1C1814] leading-[1.05] tracking-tight font-bold"
              style={{ fontSize: "clamp(36px, 5.5vw, 76px)" }}
            >
              There is a particular kind of evening
              <br className="hidden md:block" />{" "}
              <span className="italic font-normal text-[#C6A76A]">at Oxford.</span>
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={200}>
          <div className="my-14 h-px bg-[#C6A76A]/25" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <Reveal delay={250}>
            <p className="font-body text-[#1C1814]/70 text-base md:text-lg leading-[1.8] tracking-wide">
              The kind where the conversation matters as much as the game.
              Where a first-year and a finalist sit at the same felt,
              bound not by year or subject but by the willingness to think
              under pressure — and the grace to lose well.
            </p>
          </Reveal>
          <Reveal delay={350}>
            <p className="font-body text-[#1C1814]/55 text-base leading-[1.8] tracking-wide">
              The Oxford Card Room was founded on a simple premise: that poker,
              played seriously and surrounded by interesting people, is one of
              the finest intellectual games a student society can offer.
              Not despite its complexity — because of it.
            </p>
          </Reveal>
        </div>

        <Reveal delay={450}>
          <div className="mt-20 flex flex-col items-center gap-6 text-center">
            <div className="w-px h-12 bg-[#C6A76A]/40" />
            <p
              className="font-display italic font-normal text-[#C6A76A]"
              style={{ fontSize: "clamp(22px, 3vw, 38px)" }}
            >
              "Play seriously. Think carefully.<br className="hidden md:block" /> Win or lose — with dignity."
            </p>
            <p className="font-body text-[9px] uppercase tracking-[0.5em] text-[#1C1814]/35">
              :The Oxford Card Room · Founding Principle
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
