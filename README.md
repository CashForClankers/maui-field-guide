# Maui Field Guide

A phone-first, source-backed family discovery guide for Maui, July 8–13, 2026, based at Mana Kai Maui in Kīhei.

## Architecture

- Astro generates static multi-page HTML.
- TypeScript holds typed discoveries and computes rankings at build time.
- No runtime database, API, account, analytics, or private itinerary data.
- A small service worker keeps the core guide available when reception is weak.
- GitHub Actions builds and deploys `dist/` to GitHub Pages.

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
