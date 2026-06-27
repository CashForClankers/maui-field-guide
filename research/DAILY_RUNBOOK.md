# Daily discovery and re-ranking runbook

Run daily through July 13, 2026. After the trip, disable the OpenClaw job.

## Objective

Keep the phone guide fresh with one strong answer fast. Find materially useful changes or additions involving wildlife, reef and ocean conditions, native birds, tropical fruit, farms, kid learning, free events, strong deals, closures, and reservations.

## Procedure

1. Read `AGENTS.md`, `src/data/experiences.ts`, `src/data/updates.ts`, and `src/lib/rank.ts`.
2. Check official sources first: NPS, NOAA, USFWS, Hawaiʻi DLNR, Maui County, named farms, nonprofits, and direct operators.
3. Check the trip dates and weekday fit. The trip is Wednesday July 8 through Monday July 13, 2026.
4. Prefer improving an existing record over adding a duplicate.
5. Add no more than three experiences in one run. Every addition needs a primary URL, verification date, explicit kid takeaway, realistic cost, drive time, friction score, and safety note when applicable.
6. Re-rank by changing evidence fields only. Never hard-code display order.
7. Add one update entry describing what changed and why it matters.
8. Run `npm run verify`.
9. Inspect `git diff --check` and `git diff`. Reject secrets, private booking details, personal contacts, unsupported wildlife promises, or unauthorized fruit-picking advice.
10. If there is no meaningful change, do not commit.
11. If changed and verified, commit with `Daily Maui refresh: YYYY-MM-DD`, push `main`, and confirm the Pages workflow started.

## Seasonal questions

- Which local fruits are actually available now? Ask growers; do not infer year-round stock.
- Are any farms explicitly offering guided picking? Ordinary roadside trees and private land are not permission.
- Are beach, reserve, trail, road, or park closures active?
- Are there free cultural or nature programs during July 8–13?
- Did admission, parking, reservation, or age rules change?
- Is a candidate worth the parent effort from Mana Kai?

## Failure handling

- On model quota failure, stop; do not loop. The next scheduled run is the fallback.
- On source uncertainty, mark the record `verify`; do not invent details.
- On build or test failure, leave the change uncommitted and record the failure in the OpenClaw run output.
