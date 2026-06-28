# Daily discovery and re-ranking runbook

Run daily through July 13, 2026. After the trip, disable the OpenClaw job.

## Objective

Keep the phone guide fresh with one strong answer fast. Find materially useful changes or additions involving wildlife, reef and ocean conditions, native birds, tropical fruit, farms, kid learning, free events, strong deals, closures, reservations, and current opportunities to meet named local hosts or give back.

## Procedure

1. Read `AGENTS.md`, `research/EVENT_INDEX.md`, `src/data/events.ts`, `src/data/experiences.ts`, `src/data/creatures.ts`, `src/data/locals.ts`, `src/data/updates.ts`, and `src/lib/rank.ts`.
2. Check official sources first: NPS, NOAA, USFWS, Hawaiʻi DLNR, Maui County, named farms, nonprofits, and direct operators.
3. Check the trip dates and weekday fit. The trip is Wednesday July 8 through Monday July 13, 2026.
4. Re-check every dated calendar option whose official source may have changed, then scan the source lanes in `research/EVENT_INDEX.md` for new July 8–13 inventory.
5. Prefer improving an existing record over adding a duplicate. Add no more than three calendar options in one run, and reject generic attractions without a specific trip-date reason.
6. Every calendar addition needs applicable trip dates, current cost, realistic drive time from Mana Kai, reservation status, age fit, certainty, friction, safety, and a direct source. Only add `.ics` metadata when date and time are exact.
7. Add general experiences only when they do not primarily belong on the calendar surface. Every addition needs a primary URL, verification date, explicit kid takeaway, realistic cost, drive time, friction score, and safety note when applicable.
8. Re-rank by changing evidence fields only. Never hard-code display order.
9. Re-check creature population claims and wildlife distances against NOAA, USFWS, Hawaiʻi DLNR, or University of Hawaiʻi sources. Preserve the displayed photo credit, license, and original record whenever a photo changes.
10. Re-check local-anchor availability, public contact paths, prices, and workday schedules. Keep only direct official sources and never imply that a lead is a confirmed reservation.
11. Search for one date-fit chance to meet a named public local host or small team, join a public community workday, or directly support a Maui-led project. Require a direct source, public confirmation path, family fit, travel friction from Mana Kai, and a plain explanation of where support goes.
12. Use Gemini once for read-only fresh-lead research and Claude Code once for read-only review when each CLI is available and authenticated. Treat their output as leads, verify claims directly, and never retry failures in a loop.
13. Add one update entry describing what changed and why it matters.
14. Run `npm run verify`.
15. Inspect `git diff --check` and `git diff`. Reject secrets, private booking details, personal contacts, unsupported wildlife promises, or unauthorized fruit-picking advice.
16. Apply the pocket evals in `/Users/bestrobot/setup-mac/.agents/skills/maui-field-guide-daily/SKILL.md`; do not publish work a person cannot verify.
17. If there is no meaningful change, do not commit.
18. If changed and verified, commit with `Daily Maui refresh: YYYY-MM-DD`, push `main`, and confirm the Pages workflow started.

## Seasonal questions

- Which local fruits are actually available now? Ask growers; do not infer year-round stock.
- Are any farms explicitly offering guided picking? Ordinary roadside trees and private land are not permission.
- Are beach, reserve, trail, road, or park closures active?
- Are there free cultural or nature programs during July 8–13?
- Did admission, parking, reservation, or age rules change?
- Did NOAA or USFWS change a viewing distance, population estimate, hotline, or seasonal nesting warning shown in the creature guide?
- Did a local anchor change its workday, booking availability, public contact route, price, family suitability, or current support need?
- Is there a new public, date-fit community workday, Maui-led project, or named host the family can meet and support?
- Is a candidate worth the parent effort from Mana Kai?

## Failure handling

- On model quota failure, stop; do not loop. The next scheduled run is the fallback.
- On source uncertainty, mark the record `verify`; do not invent details.
- On build or test failure, leave the change uncommitted and record the failure in the OpenClaw run output.
