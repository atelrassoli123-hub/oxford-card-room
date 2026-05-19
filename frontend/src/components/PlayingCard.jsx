import React from "react";

/**
 * Refined playing card SVG with cleaner type, proper proportions, and
 * better suit illustrations. Faces use ornate monograms instead of
 * cluttered detail.
 */
export default function PlayingCard({
  variant = "ace-spade",
  className = "",
  rotate = 0,
  style = {},
}) {
  const isRed = variant.includes("heart") || variant.includes("diamond");
  const ink = isRed ? "#9A1F2C" : "#111111";
  const accent = "#C9A14A";

  const rank = {
    "ace-spade": "A",
    "king-heart": "K",
    "queen-diamond": "Q",
    "jack-club": "J",
    "ten-spade": "10",
  }[variant];

  const SuitGlyph = ({ size = 1 }) => {
    const s = size;
    if (variant.includes("spade"))
      return (
        <path
          transform={`scale(${s})`}
          d="M0 -12 C 7 -5 13 0 13 6 C 13 10 10 13 6 13 C 4 13 2 12 1 11 C 1.5 14 3 16 5 17 L -5 17 C -3 16 -1.5 14 -1 11 C -2 12 -4 13 -6 13 C -10 13 -13 10 -13 6 C -13 0 -7 -5 0 -12 Z"
          fill={ink}
        />
      );
    if (variant.includes("heart"))
      return (
        <path
          transform={`scale(${s})`}
          d="M0 14 C 0 14 -13 6 -13 -4 C -13 -9 -9 -12 -5 -12 C -2 -12 0 -10 0 -8 C 0 -10 2 -12 5 -12 C 9 -12 13 -9 13 -4 C 13 6 0 14 0 14 Z"
          fill={ink}
        />
      );
    if (variant.includes("diamond"))
      return (
        <path
          transform={`scale(${s})`}
          d="M0 -14 L 10 0 L 0 14 L -10 0 Z"
          fill={ink}
        />
      );
    if (variant.includes("club"))
      return (
        <g transform={`scale(${s})`} fill={ink}>
          <circle cx="0" cy="-7" r="6" />
          <circle cx="-6" cy="3" r="6" />
          <circle cx="6" cy="3" r="6" />
          <path d="M-2 4 L 2 4 L 4 14 L -4 14 Z" />
        </g>
      );
    return null;
  };

  return (
    <svg
      viewBox="0 0 220 308"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
    >
      <defs>
        <filter id={`shdw-${variant}`} x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#1a0e0e" floodOpacity="0.32" />
        </filter>
        <linearGradient id={`face-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFDF6" />
          <stop offset="100%" stopColor="#F5EEDC" />
        </linearGradient>
      </defs>

      {/* Card body */}
      <rect
        x="6"
        y="6"
        width="208"
        height="296"
        rx="14"
        fill={`url(#face-${variant})`}
        stroke="#1a0e0e"
        strokeOpacity="0.18"
        strokeWidth="1"
        filter={`url(#shdw-${variant})`}
      />
      {/* Inner gold frame */}
      <rect
        x="14"
        y="14"
        width="192"
        height="280"
        rx="10"
        fill="none"
        stroke={accent}
        strokeOpacity="0.55"
        strokeWidth="0.8"
      />
      <rect
        x="18"
        y="18"
        width="184"
        height="272"
        rx="8"
        fill="none"
        stroke={accent}
        strokeOpacity="0.2"
        strokeWidth="0.4"
      />

      {/* Top-left corner */}
      <g transform="translate(30, 44)">
        <text
          fontFamily="Times New Roman, Times, serif"
          fontSize="40"
          fontWeight="600"
          fill={ink}
          textAnchor="middle"
        >
          {rank}
        </text>
        <g transform="translate(0, 26) scale(0.6)">
          <SuitGlyph />
        </g>
      </g>

      {/* Center face — ornate monogram disc */}
      <g transform="translate(110, 154)">
        <circle r="58" fill="none" stroke={accent} strokeOpacity="0.6" strokeWidth="0.7" />
        <circle r="52" fill="none" stroke={accent} strokeOpacity="0.35" strokeWidth="0.5" />
        {/* Decorative cross */}
        <g stroke={accent} strokeOpacity="0.4" strokeWidth="0.5" fill="none">
          <line x1="-58" y1="0" x2="-46" y2="0" />
          <line x1="46" y1="0" x2="58" y2="0" />
          <line x1="0" y1="-58" x2="0" y2="-46" />
          <line x1="0" y1="46" x2="0" y2="58" />
        </g>
        {/* Central suit */}
        <g transform="scale(2.4)">
          <SuitGlyph />
        </g>
      </g>

      {/* Bottom-right corner (rotated 180) */}
      <g transform="translate(190, 264) rotate(180)">
        <text
          fontFamily="Times New Roman, Times, serif"
          fontSize="40"
          fontWeight="600"
          fill={ink}
          textAnchor="middle"
        >
          {rank}
        </text>
        <g transform="translate(0, 26) scale(0.6)">
          <SuitGlyph />
        </g>
      </g>
    </svg>
  );
}
