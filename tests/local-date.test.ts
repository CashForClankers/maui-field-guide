import assert from "node:assert/strict";
import test from "node:test";

import { hawaiiDate, isoDateInTimeZone } from "../scripts/lib/local-date.mjs";

test("wildlife refresh dates follow Hawaiʻi across the UTC date boundary", () => {
  const afterUtcMidnight = new Date("2026-07-08T01:30:00Z");
  assert.equal(hawaiiDate(afterUtcMidnight), "2026-07-07");
  assert.equal(
    isoDateInTimeZone(afterUtcMidnight, "America/Los_Angeles"),
    "2026-07-07",
  );
});
