# Maui Field Guide Agent Instructions

## Purpose

Maintain a phone-first family discovery guide for a July 8–13, 2026 Maui trip based at Mana Kai Maui in Kīhei. July 13 is a travel day; calendar activities must fit July 8–12.

## Content rules

- Favor wildlife, marine life, endemic birds, tropical fruit, farms, unusual local food, kid insight, free value, and low-friction logistics.
- One verified high-signal addition is better than ten generic listings.
- Use primary sources whenever possible and retain a direct source URL.
- Never claim that wild animal sightings are guaranteed.
- Never recommend touching, feeding, chasing, or crowding protected wildlife.
- Never suggest picking fruit without explicit permission from the landowner or a named tour.
- Mark uncertain prices, hours, access, or seasonality as `verify` rather than guessing.
- Preserve Hawaiian diacritics in names when the primary source uses them.

## Daily loop

1. Read `research/DAILY_RUNBOOK.md`, `research/EVENT_INDEX.md`, and current data.
2. Search for date-relevant openings, closures, events, fruit availability, wildlife conditions, and value opportunities.
3. Re-verify the calendar index first. Add at most three strong calendar options or improve stale records; do not grow the index with generic attractions.
4. Improve general discoveries only when the evidence does not belong primarily in the calendar index.
5. Update `src/data/daily.ts` with the latest brief and `src/data/updates.ts` with a concise human-readable change note.
6. Run `npm run verify`.
7. Commit and push only if verification passes and the diff contains no private trip details or credentials.

## Engineering rules

- Keep the Astro/TypeScript architecture; do not replace it with a runtime database or client SPA.
- Ranking belongs in `src/lib/rank.ts`; do not hand-sort the array.
- Calendar candidates belong in `src/data/events.ts`; fixed `.ics` downloads require exact date and time evidence.
- Keep controls accessible, touch targets at least 44px, and the primary content usable at 360px wide.
- Treat links and map destinations as public data.
- Keep GitHub Pages base-path compatibility.
