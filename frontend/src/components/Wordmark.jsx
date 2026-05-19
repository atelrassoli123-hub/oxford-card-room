import React from "react";

/**
 * Refined typographic wordmark.
 * tone="dark" → light text for dark backgrounds
 * tone="light" → dark text for cream backgrounds
 */
export default function Wordmark({ size = "md", showFull = true, tone = "dark" }) {
  const sizes = {
    sm: { spade: 14, primary: "text-base", caption: "text-[9px]" },
    md: { spade: 18, primary: "text-lg", caption: "text-[10px]" },
    lg: { spade: 28, primary: "text-3xl", caption: "text-xs" },
  };
  const s = sizes[size] || sizes.md;
  const primary = tone === "light" ? "text-[#050816]" : "text-[#F0EAD6]";
  const caption = tone === "light" ? "text-[#C6A76A]" : "text-[#C6A76A]";
  const spadeFill = tone === "light" ? "#050816" : "#C6A76A";

  return (
    <div className="flex items-center gap-2.5 select-none" data-testid="wordmark">
      <svg
        width={s.spade}
        height={s.spade}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 2 C 14 6.5 19 9.5 19 14 C 19 16.8 16.8 19 14 19 C 13.2 19 12.5 18.8 12 18.4 C 12.3 20 13.2 21.2 14.5 22 L 9.5 22 C 10.8 21.2 11.7 20 12 18.4 C 11.5 18.8 10.8 19 10 19 C 7.2 19 5 16.8 5 14 C 5 9.5 10 6.5 12 2 Z"
          fill={spadeFill}
          stroke={spadeFill}
          strokeWidth="0.5"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={`font-display font-bold tracking-tight ${primary} ${s.primary}`}>
          The Oxford Card Room
        </span>
        {showFull && (
          <span className={`font-body uppercase tracking-[0.32em] mt-1 ${caption} ${s.caption}`}>
            Est. Michaelmas&nbsp;·&nbsp;Oxford
          </span>
        )}
      </div>
    </div>
  );
}
