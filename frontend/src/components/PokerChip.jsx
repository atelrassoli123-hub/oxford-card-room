import React from "react";

/**
 * Black poker chip (no text, no OCR monogram) — for decorative use.
 * Two chip color options.
 */
export default function PokerChip({ className = "", style = {}, variant = "black" }) {
  const palette =
    variant === "black"
      ? { body: "#0E0E10", deep: "#020203", rim: "#C9A14A", inner: "#1a1a1c" }
      : { body: "#7A1C28", deep: "#2a0a10", rim: "#C9A14A", inner: "#3a1018" };

  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`chip-${variant}-body`} cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor={palette.body} stopOpacity="1" />
          <stop offset="100%" stopColor={palette.deep} stopOpacity="1" />
        </radialGradient>
        <filter id={`chip-${variant}-shadow`} x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#0a0508" floodOpacity="0.35" />
        </filter>
      </defs>

      <g filter={`url(#chip-${variant}-shadow)`}>
        {/* Body */}
        <circle cx="60" cy="60" r="56" fill={`url(#chip-${variant}-body)`} />
        {/* Outer rim */}
        <circle cx="60" cy="60" r="55.5" fill="none" stroke={palette.rim} strokeOpacity="0.85" strokeWidth="1.2" />
        {/* Notched outer ring */}
        <g stroke={palette.rim} strokeOpacity="0.9" strokeWidth="8" fill="none" strokeDasharray="3 13">
          <circle cx="60" cy="60" r="50" />
        </g>
        {/* Inner ring */}
        <circle cx="60" cy="60" r="38" fill={palette.inner} />
        <circle cx="60" cy="60" r="38" fill="none" stroke={palette.rim} strokeOpacity="0.7" strokeWidth="0.8" />
        {/* Center medallion */}
        <circle cx="60" cy="60" r="22" fill={palette.deep} />
        <circle cx="60" cy="60" r="22" fill="none" stroke={palette.rim} strokeOpacity="0.9" strokeWidth="0.8" />
        {/* Spade pip */}
        <path
          transform="translate(60, 52) scale(0.7)"
          d="M0 -12 C 7 -5 13 0 13 6 C 13 10 10 13 6 13 C 4 13 2 12 1 11 C 1.5 14 3 16 5 17 L -5 17 C -3 16 -1.5 14 -1 11 C -2 12 -4 13 -6 13 C -10 13 -13 10 -13 6 C -13 0 -7 -5 0 -12 Z"
          fill={palette.rim}
        />
      </g>
    </svg>
  );
}
