import React, { useEffect, useState } from "react";
import Wordmark from "@/components/Wordmark";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#overview",  label: "Society"   },
  { href: "#tables",    label: "Tables"    },
  { href: "#timeline",  label: "Season"    },
  { href: "#events",    label: "Events"    },
  { href: "#partners",  label: "Partners"  },
  { href: "#committee", label: "Committee" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("");
  const [visible, setVisible]   = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-38% 0px -57% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      } ${
        scrolled
          ? "bg-white/96 backdrop-blur-2xl border-b border-[#C6A76A]/20 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-14 h-[72px] flex items-center justify-between">

        {/* Wordmark */}
        <a href="#top" data-testid="nav-logo-link" className="z-10">
          <Wordmark size="md" />
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-9">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={`relative font-body text-[10px] uppercase tracking-[0.38em] transition-all duration-300 pb-0.5 ${
                active === l.href
                  ? "text-[#C6A76A]"
                  : "text-[#1C1814]/60 hover:text-[#1C1814]/90"
              }`}
            >
              {active === l.href && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[#C6A76A]/50" />
              )}
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#newsletter"
          data-testid="nav-rsvp-button"
          className="hidden lg:inline-flex items-center gap-3 px-5 py-2.5 rounded border border-[#C6A76A]/40 hover:border-[#C6A76A]/80 hover:bg-[#C6A76A]/8 text-[#C6A76A] hover:text-[#C6A76A] font-body text-[9px] uppercase tracking-[0.38em] transition-all duration-300"
        >
          Join
          <span className="w-3 h-px bg-current" />
        </a>

        {/* Mobile toggle */}
        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-[#F0EAD6]/60 hover:text-[#F0EAD6] transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        data-testid="nav-mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-white/98 backdrop-blur-2xl ${
          open ? "max-h-[400px] border-b border-[#F0EAD6]/[0.05]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
              className={`font-body text-sm uppercase tracking-[0.35em] transition-colors ${
                active === l.href ? "text-[#C6A76A]" : "text-[#1C1814]/60 hover:text-[#1C1814]/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#newsletter"
            onClick={() => setOpen(false)}
            data-testid="nav-mobile-rsvp"
            className="mt-3 inline-flex w-fit items-center gap-3 px-5 py-3 border border-[#C6A76A]/25 text-[#C6A76A]/70 font-body text-[9px] uppercase tracking-[0.4em] hover:border-[#C6A76A]/50 hover:text-[#C6A76A] transition-all"
          >
            Join the Society
            <span className="w-3 h-px bg-current" />
          </a>
        </div>
      </div>
    </header>
  );
}
