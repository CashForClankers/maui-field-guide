# Maui event index

The Events page is a decision index for July 8–13, 2026—not a general tourism directory. The daily scout should make it more current and more useful, not merely larger.

## Source lanes

Check these in order and retain direct URLs:

1. Maui County calendar and Parks & Recreation notices.
2. Haleakalā National Park events, alerts, fees, and reservation inventory.
3. Hawaiʻi DLNR park notices and closures.
4. NOAA and USFWS visitor programs and refuge conditions.
5. Direct calendars from Maui Arts & Cultural Center, Hāna Arts, museums, botanical gardens, farms, markets, canoe clubs, and named nonprofits.
6. Current Maui event calendars only as discovery leads; replace them with organizer sources whenever possible.

## Admission bar

Add an option only when it has at least one of these:

- a hard date inside July 8–13;
- a recurring weekday that exactly matches the trip;
- limited inventory or a reservation decision worth making before arrival;
- unusually strong family value within 30 minutes of Mana Kai;
- meaningful Maui-specific nature, culture, food, or community participation.

Do not add generic beaches, shopping centers, restaurants, or tours merely because they are open. Do not infer 2026 recurrence from an old event page.

## Daily checks

- Re-check exact date, local time, venue, admission, age limits, and reservation status.
- When an option also exists in `src/data/experiences.ts`, keep its `experienceId` reference valid and reconcile shared facts in both records.
- Remove or demote cancellations, closures, sold-out inventory, and stale recurring claims.
- Keep `dates` inside the trip window.
- Use `confidence: "verify"` when exact inventory is not public.
- Generate calendar metadata only for a fixed date with defensible start and end times.
- Prefer one strong new option or one useful correction over three weak additions.
