import React from "react";

/**
 * Decorative SVG ornaments and patterns.
 */

export function SuitPattern({ className = "", opacity = 0.06, color = "#7A1C28" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="suit-pat" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <g fill={color} opacity={opacity}>
            <path d="M20 12 C22 16 26 18 26 22 C26 24 24.4 26 22 26 C21.4 26 20.8 25.9 20.4 25.6 C20.6 26.8 21.2 27.6 22 28 L18 28 C18.8 27.6 19.4 26.8 19.6 25.6 C19.2 25.9 18.6 26 18 26 C15.6 26 14 24 14 22 C14 18 18 16 20 12 Z" />
            <path d="M60 56 C60 56 56 53 56 50 C56 48.5 57 47.5 58.4 47.5 C59.2 47.5 59.8 48 60 48.6 C60.2 48 60.8 47.5 61.6 47.5 C63 47.5 64 48.5 64 50 C64 53 60 56 60 56 Z" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#suit-pat)" />
    </svg>
  );
}

export function Flourish({ className = "", color = "#D4AF37" }) {
  return (
    <svg viewBox="0 0 220 22" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth="0.8">
        <line x1="0" y1="11" x2="80" y2="11" />
        <line x1="140" y1="11" x2="220" y2="11" />
        <path d="M85 11 C 92 4, 100 4, 107 11 C 114 18, 122 18, 129 11" />
      </g>
      <g fill={color}>
        <circle cx="80" cy="11" r="1.5" />
        <circle cx="140" cy="11" r="1.5" />
        <path d="M107 6 L 110 11 L 107 16 L 104 11 Z" />
      </g>
    </svg>
  );
}

export function Chip({ className = "", color = "#7A1C28", accent = "#D4AF37" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="chip-grad">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#1a0a0c" stopOpacity="1" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#chip-grad)" />
      <circle cx="50" cy="50" r="48" fill="none" stroke={accent} strokeWidth="0.8" />
      <g stroke={accent} strokeWidth="6" fill="none" strokeDasharray="2 8">
        <circle cx="50" cy="50" r="44" />
      </g>
      <circle cx="50" cy="50" r="32" fill="#FAF6EE" />
      <circle cx="50" cy="50" r="32" fill="none" stroke={color} strokeWidth="0.6" />
      <text x="50" y="56" textAnchor="middle" fontFamily="Times New Roman, Times, serif" fontSize="20" fill={color} fontWeight="600">
        OCR
      </text>
    </svg>
  );
}

export function Ornament({ className = "", color = "#7A1C28" }) {
  return (
    <svg viewBox="0 0 60 60" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth="0.8">
        <circle cx="30" cy="30" r="28" />
        <circle cx="30" cy="30" r="22" />
        <path d="M30 4 L 32 28 L 56 30 L 32 32 L 30 56 L 28 32 L 4 30 L 28 28 Z" fill={color} fillOpacity="0.1" />
      </g>
    </svg>
  );
}
