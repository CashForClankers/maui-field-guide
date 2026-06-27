# Maui Field Guide Agent Instructions

## Purpose

Maintain a phone-first family discovery guide for a July 8–13, 2026 Maui trip based at Mana Kai Maui in Kīhei.

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

1. Read `research/DAILY_RUNBOOK.md` and current data.
2. Search for date-relevant openings, closures, events, fruit availability, wildlife conditions, and value opportunities.
3. Add at most three strong discoveries or improve stale records.
4. Update `src/data/updates.ts` with a concise human-readable change note.
5. Run `npm run verify`.
6. Commit and push only if verification passes and the diff contains no private trip details or credentials.

## Engineering rules

- Keep the Astro/TypeScript architecture; do not replace it with a runtime database or client SPA.
- Ranking belongs in `src/lib/rank.ts`; do not hand-sort the array.
- Keep controls accessible, touch targets at least 44px, and the primary content usable at 360px wide.
- Treat links and map destinations as public data.
- Keep GitHub Pages base-path compatibility.
