# Maui Field Guide Design System

## 1. Visual Theme & Atmosphere

- A pocket naturalist journal crossed with a calm family travel field guide.
- Warm, sun-bleached surfaces; deep-ocean ink; one guava-coral action color.
- Consumer-friendly softness adapted from Airbnb, without marketplace imagery or booking chrome.
- Editorial hierarchy, fast scanning, low decoration, and useful content above the fold.
- Cards resemble labeled specimens rather than listings.

## 2. Color Palette & Roles

### Primary

- **Deep Ocean** `#123A3A`: headings, navigation, primary dark surfaces.
- **Night Reef** `#092B2C`: active and pressed states.
- **Guava Coral** `#E85D4A`: primary actions, new-item signals, selected filters.
- **Guava Pressed** `#C94738`: active action state.

### Accent

- **Mango** `#F4B942`: fruit and food signals.
- **Tidepool** `#2D8C84`: water and marine signals.
- **Honeycreeper** `#B63C55`: bird signals.
- **Leaf** `#527A45`: farm and plant signals.

### Neutral Scale

- **Ink** `#172322`: body text.
- **Muted** `#61706D`: secondary text.
- **Hairline** `#D8D6CB`: dividers and card borders.
- **Sand** `#F5F0E5`: page canvas.
- **Shell** `#FFFDF8`: card surface.
- **Mist** `#E8F0ED`: quiet highlight surface.

### Shadows & Depth

- **Card Shadow** `0 8px 30px rgba(18, 58, 58, 0.08)`.
- **Raised Shadow** `0 14px 36px rgba(18, 58, 58, 0.16)`.

## 3. Typography Rules

Use local system fonts for instant loading.

| Role       | Font                                    |                       Size | Weight | Line Height | Letter Spacing | Notes                  |
| ---------- | --------------------------------------- | -------------------------: | -----: | ----------: | -------------: | ---------------------- |
| Hero       | Iowan Old Style, Georgia, serif         | clamp(2.6rem, 9vw, 5.5rem) |    700 |        0.92 |        -0.04em | Short lines only       |
| Page title | Iowan Old Style, Georgia, serif         |   clamp(2.1rem, 7vw, 4rem) |    700 |           1 |        -0.03em | Editorial voice        |
| Section    | ui-sans-serif, system-ui, sans-serif    |                    1.25rem |    750 |         1.2 |        -0.02em | Functional hierarchy   |
| Card title | ui-sans-serif, system-ui, sans-serif    |                     1.1rem |    750 |        1.22 |       -0.015em | Maximum two lines      |
| Body       | ui-sans-serif, system-ui, sans-serif    |                       1rem |    450 |        1.55 |              0 | Default copy           |
| Label      | ui-monospace, SFMono-Regular, monospace |                    0.72rem |    700 |         1.2 |         0.08em | Uppercase field labels |

## 4. Component Stylings

- **Primary button:** guava background, white text, 48px minimum height, 999px radius, 18px horizontal padding; darkens on press.
- **Secondary button:** shell background, ocean text, 1px hairline border, 48px height, 999px radius.
- **Cards:** shell background, 18px radius, 1px hairline border, 18px padding; no image dependency.
- **Specimen band:** 7px colored top edge communicating content family.
- **Inputs:** 52px height, shell fill, 999px radius, 2px ocean focus ring.
- **Navigation:** compact sticky top rail plus a four-item mobile bottom dock.
- **New marker:** coral pill with a visible date, never an unexplained dot.
- **Images:** optional; when used, require meaningful alt text and 4:3 cropping. The interface must remain complete without them.

## 5. Layout Principles

- Base spacing unit: 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 72.
- Content max-width: 1180px; reading width: 720px.
- Mobile gutter: 16px; desktop gutter: 32px.
- Cards: one column under 640px, two columns from 640px, three from 980px.
- Radius scale: 8px, 12px, 18px, 28px, 999px.
- Keep a strong single recommendation before the broader card grid.

## 6. Depth & Elevation

- Canvas and editorial sections are flat.
- Cards use the card shadow only on hover-capable devices.
- Sticky navigation uses a translucent shell surface with a 1px border.
- Modals are avoided; details expand in-flow.

## 7. Do's and Don'ts

### Do

- Put drive time, cost, age caveat, and reservation status near every title.
- Explain what children can notice or learn.
- Show verification dates and primary-source links.
- Use warm color sparingly to highlight action and freshness.

### Don't

- Do not use generic tropical gradients, palm-tree wallpaper, or luau clichés.
- Do not display equal-weight walls of options.
- Do not hide safety caveats in footnotes.
- Do not depend on hover, animation, or perfect connectivity.

## 8. Responsive Behavior

- **Mobile `<640px`:** single cards, bottom navigation, filters scroll horizontally, 16px gutters.
- **Tablet `640–979px`:** two-card grid, top navigation remains compact.
- **Desktop `>=980px`:** three-card grid, bottom navigation disappears, optional sticky filter rail.
- Minimum touch target: 44px; primary targets: 48px.
- Honor `prefers-reduced-motion`; all motion is optional and under 180ms.

## 9. Agent Prompt Guide

Quick tokens: ocean `#123A3A`, coral `#E85D4A`, mango `#F4B942`, sand `#F5F0E5`, shell `#FFFDF8`.

Implementation prompt: “Build a fast Maui naturalist field guide using warm sand, deep-ocean ink, guava-coral actions, serif editorial headlines, rounded specimen cards, explicit field labels, and one strong answer before the full grid. Preserve 44px touch targets and full utility at 360px.”
