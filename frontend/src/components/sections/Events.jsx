import React, { useEffect, useState } from "react";
import axios from "axios";
import RSVPDialog from "@/components/sections/RSVPDialog";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, Trophy, Calendar, BookOpen } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const META = {
  "boxing-night-2027": {
    img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&q=80&w=1200",
    icon: Trophy,
    badge: "Flagship Night",
    badgeColor: "#C6A76A",
  },
  "regular-poker-night": {
    img: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&q=80&w=1200",
    icon: Calendar,
    badge: "Members' Night",
    badgeColor: "#8fa8c8",
  },
  "poker-lecture-series": {
    img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&q=80&w=1200",
    icon: BookOpen,
    badge: "Lecture Series",
    badgeColor: "#9a9eb0",
  },
};

export default function Events() {
  const [events, setEvents]   = useState([]);
  const [selected, setSelected] = useState(null);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    let mounted = true;
    axios.get(`${API}/events`).then((r) => mounted && setEvents(r.data)).catch(() => {});
    return () => { mounted = false; };
  }, []);

  const handleRSVP = (e) => { setSelected(e); setOpen(true); };

  return (
    <section
      id="events"
      data-testid="events-section"
      className="relative py-24 lg:py-40 bg-[#FFFEF9] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(198,167,106,0.03),transparent)]" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-14">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-end">
          <Reveal as="div" className="lg:col-span-6">
            <p className="font-body text-[9px] uppercase tracking-[0.55em] text-[#C6A76A] mb-8">
              :04 — Signature Nights
            </p>
            <h2
              className="font-display text-[#1C1814] leading-[0.95] tracking-tight font-bold"
              style={{ fontSize: "clamp(40px, 6vw, 78px)" }}
            >
              Three kinds of<br />
              <span className="italic font-normal text-[#C6A76A]">evening.</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={130} className="lg:col-span-5 lg:col-start-8">
            <p className="font-body text-[#1C1814]/60 text-base leading-relaxed">
              Sign-ups open four weeks before each event. Members take
              priority, and there's almost always a seat for a guest.
            </p>
          </Reveal>
        </div>

        {/* Event grid */}
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#C6A76A]/[0.1]">
            {events.map((e, idx) => {
              const meta = META[e.id] || META["regular-poker-night"];
              const Icon = meta.icon;
              return (
                <Reveal key={e.id} delay={idx * 80} as="div">
                  <article
                    data-testid={`event-card-${e.id}`}
                    className="relative group flex flex-col bg-white hover:bg-[#FDF8F0] rounded-lg overflow-hidden transition-all duration-500 h-full hover:shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={meta.img}
                        alt={e.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.8s] group-hover:scale-105 opacity-60 group-hover:opacity-75"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/60 to-transparent" />

                      {/* Badge */}
                      <div
                        className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1 border text-[8px] uppercase tracking-[0.4em] font-body"
                        style={{ borderColor: `${meta.badgeColor}35`, color: `${meta.badgeColor}90` }}
                      >
                        <Icon size={9} strokeWidth={1.5} />
                        {meta.badge}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-8">
                      <div className="font-body text-[8px] uppercase tracking-[0.5em] text-[#1C1814]/25 mb-5">
                        {e.date} · {e.venue}
                      </div>

                      <h3 className="font-display text-2xl md:text-3xl text-[#1C1814] leading-tight tracking-tight mb-4 font-bold">
                        {e.title}
                      </h3>
                      <p className="font-body text-[#1C1814]/60 text-sm leading-relaxed mb-8 flex-1">
                        {e.description}
                      </p>

                      <div className="mt-auto pt-6 border-t border-[#F0EAD6]/[0.05]">
                        <button
                          onClick={() => handleRSVP(e)}
                          data-testid={`event-rsvp-button-${e.id}`}
                          className="w-full inline-flex items-center justify-between gap-3 px-5 py-3.5 border border-[#C6A76A]/20 hover:border-[#C6A76A]/60 hover:bg-[#C6A76A]/5 text-[#C6A76A]/70 hover:text-[#C6A76A] font-body text-[9px] uppercase tracking-[0.4em] transition-all duration-300"
                        >
                          Reserve a Seat
                          <ArrowUpRight size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        ) : (
          /* Placeholder state while loading */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#C6A76A]/[0.1]">
            {[
              { label: "The Knockout Night", sub: "Boxing & Poker · Flagship", badge: "Week IV", detail: "Three sanctioned bouts, a friendly book, and a four-table tournament. The Card Room's most anticipated evening.", img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&q=80&w=1200", badgeColor: "#C6A76A" },
              { label: "Members' Night", sub: "All Tables · Weekly", badge: "Every Week", detail: "Our standing evening. All three tables open simultaneously. Simply come, take your seat, and play.", img: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&q=80&w=1200", badgeColor: "#8fa8c8" },
              { label: "The Lecture Series", sub: "Theory & Practice", badge: "Fortnightly", detail: "Three lectures over the term — poker fundamentals, tournament play, and game theory. Open to all members.", img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&q=80&w=1200", badgeColor: "#9a9eb0" },
            ].map((p, idx) => (
              <Reveal key={p.label} delay={idx * 80} as="div">
                <article className="relative group flex flex-col bg-white hover:bg-[#FDF8F0] rounded-lg overflow-hidden transition-all duration-500 h-full hover:shadow-[0_4px_32px_rgba(0,0,0,0.4)]">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.label}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.8s] group-hover:scale-105 opacity-60 group-hover:opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/60 to-transparent" />
                    <div
                      className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1 border text-[8px] uppercase tracking-[0.4em] font-body"
                      style={{ borderColor: `${p.badgeColor}35`, color: `${p.badgeColor}90` }}
                    >
                      :{p.badge}
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-8">
                    <h3 className="font-display text-2xl md:text-3xl text-[#1C1814]/80 leading-tight tracking-tight mb-3 font-bold">
                      {p.label}
                    </h3>
                    <p className="font-body text-[9px] uppercase tracking-[0.4em] text-[#1C1814]/25 mb-5">
                      {p.sub}
                    </p>
                    <p className="font-body text-[#1C1814]/60 text-sm leading-relaxed flex-1">
                      {p.detail}
                    </p>
                    <div className="mt-8 pt-6 border-t border-[#F0EAD6]/[0.05]">
                      <a
                        href="#newsletter"
                        className="inline-flex items-center gap-3 text-[#C6A76A]/40 hover:text-[#C6A76A] font-body text-[9px] uppercase tracking-[0.4em] transition-colors"
                      >
                        Join to Reserve
                        <span className="w-4 h-px bg-current" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}

      </div>

      <RSVPDialog open={open} setOpen={setOpen} event={selected} />
    </section>
  );
}
