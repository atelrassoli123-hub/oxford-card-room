import React from "react";
import Reveal from "@/components/Reveal";

export default function Partners() {
  return (
    <section
      id="partners"
      data-testid="partners-section"
      className="relative py-24 lg:py-36 bg-[#0A0E17] overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <Reveal as="div" className="lg:col-span-5">
            <p className="font-body text-[10px] uppercase tracking-[0.5em] text-[#C8A662] mb-6">
              :05 — Partners & Sponsorship
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#F5EFDE] leading-[0.95] tracking-tight font-bold">
              In good<br />
              <span className="italic font-normal text-[#C8A662]">company.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={120} className="lg:col-span-6 lg:col-start-7 lg:pt-6">
            <p className="font-body text-[#F5EFDE]/40 text-base md:text-lg leading-relaxed">
              We're lucky to work with partners who help us keep events
              affordable and well-run. For Michaelmas 2027 we're delighted to
              announce our headline partner.
            </p>
          </Reveal>
        </div>

        {/* Headline sponsor */}
        <Reveal>
          <div className="relative border border-[#C8A662]/15 hover:border-[#C8A662]/30 transition-colors duration-500 p-10 md:p-16 mb-px group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A662]/40 to-transparent" />
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#C8A662]/5 blur-3xl group-hover:bg-[#C8A662]/8 transition-colors" />

            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <p className="font-body text-[9px] uppercase tracking-[0.5em] text-[#C8A662]/50 mb-6">
                  :Confirmed Headline Sponsor
                </p>
                <div data-testid="sponsor-jump-trading-logo" className="mb-8">
                  <div className="font-display text-6xl md:text-7xl lg:text-8xl text-[#F5EFDE] tracking-tight leading-none font-bold">
                    Jump
                    <span className="text-[#C8A662] italic font-normal"> Trading</span>
                  </div>
                </div>
                <p className="font-body text-[#F5EFDE]/40 text-base md:text-lg leading-relaxed max-w-xl">
                  A global quantitative trading firm with a long-standing
                  interest in poker and game theory. Their support helps us run
                  flagship nights, the lecture series, and educational materials
                  for new players.
                </p>
                <a
                  href="#newsletter"
                  data-testid="sponsor-inquire-button"
                  className="inline-flex items-center gap-3 mt-8 px-7 py-3 border border-[#C8A662]/30 hover:border-[#C8A662] hover:bg-[#C8A662]/5 text-[#C8A662] font-body text-[10px] uppercase tracking-[0.35em] transition-all"
                >
                  Sponsorship Enquiries
                </a>
              </div>
              <div className="md:col-span-5">
                <div className="aspect-square border border-[#C8A662]/15 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="font-display text-[180px] md:text-[220px] text-[#C8A662]/5 leading-none select-none font-bold">
                      J
                    </div>
                  </div>
                  <div className="relative text-center px-8">
                    <div className="font-display text-3xl md:text-4xl text-[#F5EFDE]/80 tracking-tight font-bold">Jump</div>
                    <div className="font-body text-[9px] uppercase tracking-[0.45em] text-[#C8A662]/50 mt-2">Trading</div>
                    <div className="mt-6 h-px w-16 mx-auto bg-[#C8A662]/20" />
                    <div className="font-body text-[9px] uppercase tracking-[0.4em] text-[#F5EFDE]/25 mt-5">Michaelmas · 2027</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Sponsorship tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#F5EFDE]/5">
          {[
            { name: "Founding", price: "Bespoke", note: "Year-long headline partner across all events." },
            { name: "Termly", price: "On Request", note: "Sponsor a single term and one flagship evening." },
            { name: "Event", price: "On Request", note: "Underwrite a specific lecture or members' night." },
          ].map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div
                data-testid={`sponsor-tier-${t.name.toLowerCase()}`}
                className="bg-[#0A0E17] p-8 md:p-10 hover:bg-[#0F1520] transition-colors"
              >
                <div className="font-body text-[9px] uppercase tracking-[0.45em] text-[#C8A662]/40 mb-4">:Tier</div>
                <h4 className="font-display text-3xl text-[#F5EFDE]/80 mb-2 font-bold">{t.name}</h4>
                <div className="font-body text-[#F5EFDE]/30 text-sm mb-5">{t.price}</div>
                <p className="font-body text-[#F5EFDE]/35 text-[14px] leading-relaxed">{t.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
