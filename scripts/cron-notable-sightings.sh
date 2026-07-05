#!/bin/zsh

set -u

export PATH="/Users/bestrobot/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"

project_dir="/Users/bestrobot/.openclaw/workspace/projects/maui-field-guide"
cd "$project_dir" || exit 1

# Scans recent iNaturalist activity within ~60km of Mana Kai for genuinely
# notable wildlife (curated watchlist, then a rarity/threatened/endemic
# fallback that excludes introduced species) and pushes a Telegram message
# for anything new. Silent — no message, no state change — when nothing
# notable turns up. State lives in research/.notable-sightings-seen.json
# (gitignored) so re-runs never repeat a notification.
node scripts/check-notable-sightings.mjs
