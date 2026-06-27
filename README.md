# Maui Field Guide

A phone-first, source-backed family discovery guide for Maui, July 8–13, 2026, based at Mana Kai Maui in Kīhei.

## Architecture

- Astro generates static multi-page HTML.
- TypeScript holds typed discoveries and computes rankings at build time.
- No runtime database, API, account, analytics, or private itinerary data.
- A small service worker keeps the core guide available when reception is weak.
- GitHub Actions builds and deploys `dist/` to GitHub Pages.

## Guide surfaces

- **Pulse:** current trip signal, new research, top-ranked ideas, and trip rhythm.
- **Discover:** searchable and filterable activities ranked for this family.
- **Wildlife:** five photographed creatures with field marks, kid-readable science, ethical viewing rules, and photo licensing.
- **Fruit:** July fruit signals and useful questions for growers and markets.
- **Rules:** wildlife distances and low-impact field behavior.

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run verify
```

## Deployment

Push `main`. The `Deploy GitHub Pages` workflow builds and publishes the static artifact.

## Daily maintenance

OpenClaw follows [research/DAILY_RUNBOOK.md](research/DAILY_RUNBOOK.md), updates the typed content, verifies the build, and publishes only meaningful changes.

Creature claims and image rights are documented in [research/CREATURE_FIELD_GUIDE.md](research/CREATURE_FIELD_GUIDE.md).
