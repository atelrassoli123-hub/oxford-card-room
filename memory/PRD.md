# The Oxford Card Room — PRD

## Original Problem Statement
Build a landing page for a poker society called "The Oxford Card Room" (Oxford University). Structure inspired by germanbritishconference.com. Sections: Overview, Format (rules), Partners/Sponsorships (Jump Trading confirmed), Upcoming Events, Committee (President Mirsaid Abdullaev, Secretary Atel Rassoli), Timeline. Modern dark luxury aesthetic.

## User Choices
- Aesthetic: Modern dark luxury (black/charcoal + burgundy #7A1C28 + gold #D4AF37)
- Interactive: Event RSVP + Newsletter signup (MongoDB-backed)
- Events: Boxing Night (with betting + poker), Regular Poker Nights, Educational Lectures
- Format: Texas Hold'em with 8-week Michaelmas 2027 visual timeline
- Branding: Custom typographic wordmark (spade icon + Cormorant Garamond)

## Personas
- Oxford undergraduate / postgraduate interested in poker, game theory, and refined social events
- Prospective sponsor (quant firms, finance)
- Press / society reporters

## Architecture
- Backend: FastAPI (Python). MongoDB via Motor. UUID primary keys, ISO datetimes, _id excluded.
- Endpoints (all /api): GET /, GET /events, POST/GET /rsvp, POST/GET /newsletter
- Frontend: React 19 + react-router-dom. Tailwind + shadcn primitives. Sonner for toasts. Cormorant Garamond (display) + Outfit (body).

## Implemented (Dec 2025)
- Hero with chip imagery, animated gold shimmer wordmark, Michaelmas 2027 overline, stats row
- Overview section with sticky label, asymmetric image+text, Oxford architecture imagery
- Format & Rules: 4 asymmetric bento cards (No-Limit Hold'em, Tournament Structure, Blind Schedule, Buy-Ins) + 5-rule etiquette list
- 8-week Michaelmas 2027 vertical timeline with alternating sides, gold-diamond flagship nodes
- Upcoming Events grid (3 cards, fetched from /api/events)
- RSVP dialog with name/email/college/notes — POST /api/rsvp
- Partners section: Jump Trading hero card + 3 sponsor tiers (Founding/Termly/Event)
- Committee cards: President Mirsaid Abdullaev, Secretary Atel Rassoli (initials avatars)
- Newsletter signup — POST /api/newsletter (idempotent)
- Footer with 3 link columns and copyright
- All interactive elements have data-testid attributes

## Tests Passing
- Backend: 9/9 pytest cases (events list, rsvp create/list, newsletter create/list, validation)
- Frontend: All flows (nav scroll, timeline render, events fetch, RSVP submit, newsletter submit)

## Prioritized Backlog
- P1: Add committee photos (currently initials avatars); add real Jump Trading SVG logo
- P1: Member application form (gated by college email)
- P2: Admin dashboard to view/export RSVPs and newsletter subscribers
- P2: Past events archive page; results / leaderboard
- P2: Sponsor inquiry contact form with email forwarding
- P3: Lecture recording library (members-only)
- P3: Live event countdown timer on hero
