import React from "react";
import Reveal from "@/components/Reveal";

export default function Partners() {
  return (
    <section
      id="partners"
      data-testid="partners-section"
      className="relative py-24 lg:py-40 bg-[#08090f] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(198,167,106,0.03),transparent)]" />
      <div className="absolute inset-0 grain opacity-20 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <Reveal as="div" className="lg:col-span-5">
            <p className="font-body text-[9px] uppercase tracking-[0.55em] text-[#C6A76A] mb-8">
              :05 — Partners
            </p>
            <h2
              className="font-display text-[#F0EAD6] leading-[0.95] tracking-tight font-bold"
              style={{ fontSize: "clamp(40px, 6vw, 78px)" }}
            >
              In good<br />
              <span className="italic font-normal text-[#C6A76A]">company.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={130} className="lg:col-span-5 lg:col-start-8 lg:pt-2 flex items-end">
            <p className="font-body text-[#F0EAD6]/35 text-base leading-relaxed">
              We work with partners whose values align with ours — intellectual
              rigour, strategic thinking, and a belief that the best games are
              played by interesting people.
            </p>
          </Reveal>
        </div>

        {/* Headline sponsor card */}
        <Reveal>
          <div className="relative border border-[#C6A76A]/12 hover:border-[#C6A76A]/25 transition-colors duration-700 overflow-hidden group mb-px">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_50%,rgba(198,167,106,0.04),transparent)]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A76A]/25 to-transparent" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center">

              {/* Left content */}
              <div className="lg:col-span-7 p-10 md:p-14 lg:p-16">
                <p className="font-body text-[8px] uppercase tracking-[0.55em] text-[#C6A76A]/40 mb-8">
                  :Headline Sponsor · Michaelmas 2027
                </p>
                <div data-testid="sponsor-jump-trading-logo" className="mb-8">
                  <p
                    className="font-display text-[#F0EAD6] font-bold tracking-tight leading-[0.9]"
                    style={{ fontSize: "clamp(52px, 8vw, 100px)" }}
                  >
                    Jump
                    <span className="text-[#C6A76A] italic font-normal"> Trading</span>
                  </p>
                </div>
                <p className="font-body text-[#F0EAD6]/38 text-base leading-relaxed max-w-lg mb-10">
                  A global quantitative trading firm with a longstanding interest
                  in probability, game theory, and the strategic disciplines that
                  poker exemplifies. Jump Trading's sponsorship underwrites our
                  flagship evenings, the lecture series, and all member buy-in
                  subsidies for Michaelmas 2027.
                </p>
                <a
                  href="#newsletter"
                  data-testid="sponsor-inquire-button"
                  className="inline-flex items-center gap-4 px-6 py-3 border border-[#C6A76A]/22 hover:border-[#C6A76A]/60 hover:bg-[#C6A76A]/5 text-[#C6A76A]/60 hover:text-[#C6A76A] font-body text-[9px] uppercase tracking-[0.4em] transition-all duration-300"
                >
                  Sponsorship Enquiries
                  <span className="w-4 h-px bg-current" />
                </a>
              </div>

              {/* Right ornament */}
              <div className="lg:col-span-5 p-10 lg:p-16 border-t lg:border-t-0 lg:border-l border-[#C6A76A]/08">
                <div className="aspect-square border border-[#C6A76A]/08 flex items-center justify-center relative overflow-hidden group-hover:border-[#C6A76A]/15 transition-colors duration-700">
                  <span
                    className="absolute font-display font-bold text-[#C6A76A]/[0.04] leading-none select-none"
                    style={{ fontSize: "clamp(140px, 18vw, 220px)" }}
                  >
                    J
                  </span>
                  <div className="relative text-center">
                    <p className="font-display text-3xl text-[#F0EAD6]/60 font-bold tracking-tight">Jump</p>
                    <p className="font-body text-[8px] uppercase tracking-[0.5em] text-[#C6A76A]/35 mt-2">Trading</p>
                    <div className="mt-5 h-px w-10 mx-auto bg-[#C6A76A]/18" />
                    <p className="font-body text-[8px] uppercase tracking-[0.45em] text-[#F0EAD6]/18 mt-4">
                      Michaelmas · 2027
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

        {/* Sponsorship tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#F0EAD6]/[0.04]">
          {[
            { name: "Founding",  price: "Bespoke",     note: "Year-long headline partner across every event and communication touchpoint." },
            { name: "Termly",    price: "On Request",  note: "Sponsor a single Michaelmas, Hilary, or Trinity term and one flagship evening." },
            { name: "Event",     price: "On Request",  note: "Underwrite a specific lecture, the Knockout Night, or the Card Room Trophy." },
          ].map((t, i) => (
            <Reveal key={t.name} delay={i * 70} as="div">
              <div
                data-testid={`sponsor-tier-${t.name.toLowerCase()}`}
                className="bg-[#08090f] p-8 lg:p-10 hover:bg-[#0c0d18] transition-colors duration-300"
              >
                <div className="font-body text-[8px] uppercase tracking-[0.5em] text-[#C6A76A]/30 mb-5">:Tier</div>
                <h4 className="font-display text-2xl text-[#F0EAD6]/70 mb-2 font-bold">{t.name}</h4>
                <div className="font-body text-[#C6A76A]/40 text-sm mb-5 tracking-wide">{t.price}</div>
                <p className="font-body text-[#F0EAD6]/28 text-sm leading-relaxed">{t.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
