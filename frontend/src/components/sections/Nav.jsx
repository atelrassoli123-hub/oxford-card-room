import React, { useEffect, useState } from "react";
import Wordmark from "@/components/Wordmark";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#format", label: "Format" },
  { href: "#timeline", label: "Timeline" },
  { href: "#events", label: "Events" },
  { href: "#partners", label: "Partners" },
  { href: "#committee", label: "Committee" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080C14]/95 backdrop-blur-xl border-b border-[#C8A662]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#top" data-testid="nav-logo-link" className="z-10">
          <Wordmark size="md" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={`relative font-body text-[11px] uppercase tracking-[0.3em] transition-colors duration-300 pb-0.5
                ${active === l.href ? "text-[#C8A662]" : "text-[#F5EFDE]/60 hover:text-[#C8A662]"}`}
            >
              <span className="text-[#C8A662]/50 mr-0.5">:</span>{l.label}
              {active === l.href && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-[#C8A662]/60 rounded-full" />
              )}
            </a>
          ))}
        </nav>

        <a
          href="#newsletter"
          data-testid="nav-rsvp-button"
          className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 border border-[#C8A662]/40 hover:border-[#C8A662] hover:bg-[#C8A662]/5 text-[#C8A662] font-body text-[11px] uppercase tracking-[0.28em] transition-all duration-300"
        >
          Reserve a Seat
        </a>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-[#F5EFDE]"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="lg:hidden bg-[#080C14]/98 backdrop-blur-xl border-t border-[#C8A662]/10"
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                className="font-body text-sm uppercase tracking-[0.3em] text-[#F5EFDE]/60 hover:text-[#C8A662]"
              >
                <span className="text-[#C8A662]/50 mr-1">:</span>{l.label}
              </a>
            ))}
            <a
              href="#newsletter"
              onClick={() => setOpen(false)}
              data-testid="nav-mobile-rsvp"
              className="mt-2 inline-flex w-fit items-center gap-2 px-5 py-2.5 border border-[#C8A662]/40 text-[#C8A662] font-body text-[11px] uppercase tracking-[0.28em]"
            >
              Reserve a Seat
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
