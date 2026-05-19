import React from "react";
import Wordmark from "@/components/Wordmark";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#08111F] border-t border-[#C8A662]/25 pt-16 pb-10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Wordmark size="md" />
          <p className="mt-6 font-body text-[#F5EFDE]/70 text-[14px] leading-relaxed max-w-sm">
            An Oxford University student society. Membership is by application
            and entry to events is at the discretion of the committee.
          </p>
        </div>

        <FooterCol
          title="Society"
          links={[
            { label: "Overview", href: "#overview" },
            { label: "Format & Tables", href: "#format" },
            { label: "Timeline", href: "#timeline" },
            { label: "Partners", href: "#partners" },
          ]}
        />
        <FooterCol
          title="Programme"
          links={[
            { label: "Upcoming Events", href: "#events" },
            { label: "Knockout Night", href: "#events" },
            { label: "Lecture Series", href: "#events" },
            { label: "Members' Cash", href: "#events" },
          ]}
        />
        <FooterCol
          title="Get In Touch"
          links={[
            { label: "Membership", href: "#newsletter" },
            { label: "Sponsorship", href: "#partners" },
            { label: "Press Enquiries", href: "#newsletter" },
          ]}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-[#C8A662]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-body text-[11px] uppercase tracking-[0.3em] text-[#F5EFDE]/50">
          © {year} The Oxford Card Room. All rights reserved.
        </p>
        <p className="font-body text-[11px] uppercase tracking-[0.3em] text-[#F5EFDE]/40">
          Crafted in Oxford · Michaelmas 2027
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div className="md:col-span-2" data-testid={`footer-col-${title.toLowerCase().replace(/\s/g, '-')}`}>
      <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#C8A662] mb-5">
        {title}
      </p>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              data-testid={`footer-link-${l.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="font-body text-sm text-[#F5EFDE]/70 hover:text-[#C8A662] transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
