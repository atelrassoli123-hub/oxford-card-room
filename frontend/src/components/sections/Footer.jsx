import React from "react";
import Wordmark from "@/components/Wordmark";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#03040d] border-t border-[#F0EAD6]/[0.04] pt-20 pb-12"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-14 grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Brand column */}
        <div className="md:col-span-5">
          <Wordmark size="md" />
          <p className="mt-6 font-body text-[#F0EAD6]/22 text-[12px] leading-relaxed max-w-xs">
            An Oxford University student society. Membership is by
            application and entry to events is at the discretion of
            the committee.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="w-1 h-1 rounded-full bg-[#C6A76A]/40" />
            <p className="font-body text-[9px] uppercase tracking-[0.5em] text-[#F0EAD6]/18">
              University of Oxford
            </p>
          </div>
        </div>

        <FooterCol title="Society" links={[
          { label: "The Society",   href: "#overview"  },
          { label: "Three Tables",  href: "#tables"    },
          { label: "The Season",    href: "#timeline"  },
          { label: "Signature Nights", href: "#events" },
        ]} />
        <FooterCol title="Engage" links={[
          { label: "Partners",      href: "#partners"  },
          { label: "Committee",     href: "#committee" },
          { label: "Membership",    href: "#newsletter"},
          { label: "Sponsorship",   href: "#partners"  },
        ]} />
        <FooterCol title="Contact" links={[
          { label: "Join the List",     href: "#newsletter" },
          { label: "Press Enquiries",   href: "#newsletter" },
          { label: "Sponsor Enquiries", href: "#partners"   },
        ]} />
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-14 mt-16 pt-8 border-t border-[#F0EAD6]/[0.04] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-body text-[9px] uppercase tracking-[0.45em] text-[#F0EAD6]/18">
          © {year} The Oxford Card Room. All rights reserved.
        </p>
        <p className="font-body text-[9px] uppercase tracking-[0.45em] text-[#F0EAD6]/12">
          Oxford · Michaelmas 2027
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div
      className="md:col-span-2"
      data-testid={`footer-col-${title.toLowerCase().replace(/\s/g, "-")}`}
    >
      <p className="font-body text-[8px] uppercase tracking-[0.55em] text-[#C6A76A]/35 mb-6">
        :{title}
      </p>
      <ul className="space-y-3.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              data-testid={`footer-link-${l.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="font-body text-sm text-[#F0EAD6]/28 hover:text-[#C6A76A]/80 transition-colors duration-300"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
