# Maui local anchors

Checked June 27, 2026. This page applies the pattern documented in the Los Cóbanos project: prefer a named, accountable local person who reduces uncertainty and lets support flow directly to visible work.

## The pattern carried over from Victor

Victor worked because the value was not merely access to a boat. He offered direct coordination, place-specific judgment, realistic condition checks, and a human trust surface. The Maui version therefore prioritizes:

1. a named person or small working team;
2. direct confirmation rather than anonymous marketplace checkout;
3. local judgment about conditions and current needs;
4. a clear path for the family’s time or money to support the work;
5. one memorable relationship instead of a long directory.

## Primary leads

- **Ekolu Lindsey / Maui Cultural Lands:** The [official volunteer page](https://mauiculturallands.org/mcl/participate) says Honokōwai maintenance happens Saturdays at 9am, groups and families are welcome, gloves and tools are supplied, and conditions are rough with no restroom. [MCL’s history](https://mauiculturallands.org/mcl/who-we-are) documents Ekolu, his parents Ed and Puanani, and the family’s cultural-resource restoration work. This aligns with Saturday, July 11.
- **Tiana Nāpua Lewis / Kīpuka Olowalu:** The [official team page](https://kipukaolowalu.org/team-2) names Tiana as volunteer and outreach coordinator, Ua Maji as cultural practitioner, and Ekolu as vice president. The [volunteer page](https://kipukaolowalu.org/volunteer) says days are typically Wednesday, Thursday, and the last Sunday, 7:30–11:30am, with email confirmation and possible weather cancellation. Thursday, July 9 is the practical trip match.
- **Hua Momona farm team:** The [official voluntour page](https://www.huamomonafarms.com/voluntour) describes a reserved 90-minute work session shaped by current farm needs. Tasks can include harvesting, washing, weeding, and tray sanitation; the foundation links the work to Maui food-insecurity programs.
- **Laurelee Blanchard / Leilani Farm Sanctuary:** The [founder story](https://leilanifarmsanctuary.org/our-story/) describes Laurelee’s animal-rescue work and nonprofit mission. The [official FAQ](https://leilanifarmsanctuary.org/faq) lists advance-booked 60–75 minute personalized tours at $50 per visitor; tour proceeds support care and humane education.
- **Gerry Ross and Janet Simpson / Kupaʻa Farms:** The [farm history](https://www.kupaafarms.com/about) documents the owners, regenerative methods, and community education. The farm is appointment-only; its [contact page](https://www.kupaafarms.com/contact) provides the direct tour path. Gerry’s compost program diverts about 52 tons of food waste annually.
- **Angel, Alohi, and Linda / Pueo Farm (Kula):** The [farm tours page](https://www.pueofarm.com/farmtours) lists a 1.5-hour, ten-guest tour Tuesday–Thursday 10–11:30am ($60/person) through a citrus orchard with Australian finger limes, dragonfruit, jaboticaba, apple bananas, mango, and avocado, plus fruit tasting and coconut husking by Alohi. Add-on lei-making class with Angel is $40. Private dates: text Linda at (808) 283-9626 (SMS, not WhatsApp). Verified June 28, 2026. Tour days fit Wed Jul 8 / Thu Jul 9.
- **Surfing Goat Dairy (Kula):** The [tours page](https://surfinggoatdairy.com/pages/our-tours) describes an Evening Chores & Milking tour (~45–60 min, ≈$41.50 adult / $33 child 3–11) where guests help feed the herd, learn the milking process, and try milking; success earns an "Official Goat Milker" ribbon. Open Tue–Sat; contact (808) 878-2870 / sgdmaui@gmail.com; no WhatsApp listed. Verified June 28, 2026.

## Ranking

Display order is no longer hand-picked. `src/lib/rank.ts` `rankLocalAnchor` scores each anchor from evidence fields — kid payoff, local depth, learning, direct support, novelty, drive proximity, and friction — and `rankedLocalAnchors` sorts descending. The page renders the top-scoring anchor as the highlighted pick. To change order, change the evidence, not the array. A `quote` field (e.g. the Lindsey ʻohana principle) renders only on whichever anchor surfaces as the top pick. WhatsApp check (June 28, 2026): none of the seven anchors publish a WhatsApp number; all use official sign-up pages, phone/SMS, or email.

## Guardrails

- Schedules are leads, not reservations. The site always sends the family to the organization for direct confirmation.
- No private personal information is stored. Names and contact paths come from the organizations’ public official pages.
- “Helping” must not create extra supervision, cleanup, or interruption. Follow assigned tasks and site rules.
- Cultural work is not entertainment. Ask before photographing people, children, active work, or cultural sites.
- Drive times are rough planning estimates from Mana Kai, not traffic promises.
