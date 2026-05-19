import React from "react";
import { Flourish } from "@/components/Ornaments";
import Reveal from "@/components/Reveal";

export default function Partners() {
  return (
    <section
      id="partners"
      data-testid="partners-section"
      className="relative py-24 lg:py-36 bg-[#0F1B33] overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <Reveal as="div" className="lg:col-span-5">
            <p className="font-body text-[10px] uppercase tracking-[0.45em] text-[#C8A662] mb-4">
              05 — Partners & Sponsorship
            </p>
            <Flourish className="w-32 h-4" color="#C8A662" />
            <h2 className="mt-8 font-display text-4xl md:text-5xl lg:text-6xl text-[#F5EFDE] leading-[0.98] tracking-tight font-bold">
              In good
              <br />
              <span className="italic text-[#C8A662] font-normal">company.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={120} className="lg:col-span-6 lg:col-start-7">
            <p className="font-body text-[#F5EFDE]/80 text-base md:text-lg leading-relaxed">
              We're lucky to work with a small group of partners who help us
              keep events affordable and well-run. For Michaelmas 2027 we're
              delighted to announce our headline partner.
            </p>
          </Reveal>
        </div>

        {/* Headline sponsor — cream card on navy, GBC partner-block style */}
        <Reveal>
        <div className="relative border border-[#C8A662]/50 bg-[#F5EFDE] p-10 md:p-16 mb-12 group overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C8A662] to-transparent" />
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#C8A662]/20 blur-3xl" />

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <p className="font-body text-[10px] uppercase tracking-[0.45em] text-[#9A1F2C] mb-4">
                Confirmed Headline Sponsor
              </p>
              <div data-testid="sponsor-jump-trading-logo" className="mb-8">
                <div className="font-display text-5xl md:text-6xl lg:text-7xl text-[#0F1B33] tracking-tight leading-none font-bold">
                  Jump
                  <span className="text-[#C8A662] italic font-normal"> Trading</span>
                </div>
              </div>
              <p className="font-body text-[#2a3550] text-base md:text-lg leading-relaxed max-w-xl">
                A global quantitative trading firm with a long-standing
                interest in poker and game theory. Their support helps us run
                the flagship nights, the lecture series, and educational
                materials for new players — at no extra cost to members.
              </p>
              <a
                href="#newsletter"
                data-testid="sponsor-inquire-button"
                className="inline-flex items-center gap-3 mt-8 px-7 py-3 bg-[#C8A662] hover:bg-[#b89554] text-[#0F1B33] font-body text-[11px] uppercase tracking-[0.3em] transition-all rounded-sm font-bold"
              >
                Sponsorship Enquiries
              </a>
            </div>
            <div className="md:col-span-5">
              <div className="aspect-square bg-[#0F1B33] border border-[#C8A662] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="font-display text-[180px] md:text-[220px] text-[#C8A662]/15 leading-none select-none font-bold">
                    J
                  </div>
                </div>
                <div className="relative text-center px-8">
                  <div className="font-display text-3xl md:text-4xl text-[#F5EFDE] tracking-tight font-bold">
                    Jump
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-[0.4em] text-[#C8A662] mt-2">
                    Trading
                  </div>
                  <div className="mt-6 h-px w-20 mx-auto bg-[#C8A662]/50" />
                  <div className="font-body text-[10px] uppercase tracking-[0.35em] text-[#F5EFDE]/60 mt-6">
                    Michaelmas · 2027
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Reveal>

        {/* Sponsorship tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#C8A662]/25">
          {[
            { name: "Founding", price: "Bespoke", note: "Year-long headline partner across all events." },
            { name: "Termly", price: "On Request", note: "Sponsor a single term and one of the flagship evenings." },
            { name: "Event", price: "On Request", note: "Underwrite a specific lecture or members' night." },
          ].map((t) => (
            <div
              key={t.name}
              data-testid={`sponsor-tier-${t.name.toLowerCase()}`}
              className="bg-[#0F1B33] p-8 md:p-10 hover:bg-[#16264a] transition-colors"
            >
              <div className="font-body text-[10px] uppercase tracking-[0.4em] text-[#C8A662] mb-4">
                Tier
              </div>
              <h4 className="font-display text-3xl text-[#F5EFDE] mb-2 font-bold">{t.name}</h4>
              <div className="font-body text-[#F5EFDE]/70 text-sm mb-6">{t.price}</div>
              <p className="font-body text-[#F5EFDE]/70 text-[14px] leading-relaxed">{t.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
