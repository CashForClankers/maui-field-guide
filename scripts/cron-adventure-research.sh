#!/bin/zsh

set -u

export PATH="/Users/bestrobot/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"

project_dir="/Users/bestrobot/.openclaw/workspace/projects/maui-field-guide"
gemini_runner="/Users/bestrobot/setup-mac/.agents/skills/gemini/scripts/run-gemini.sh"
claude_runner="/Users/bestrobot/setup-mac/.agents/skills/claudecode/scripts/run-claudecode.sh"
handoff="$project_dir/research/.daily-adventure-handoff.md"
work_output="$(mktemp)"
handoff_tmp="$(mktemp "$project_dir/research/.daily-adventure-handoff.XXXXXX")"
trap 'rm -f "$work_output" "$handoff_tmp"' EXIT

today="$(date +%F)"
research_prompt="Research one high-signal Maui family adventure or experience for July 8-12, 2026. Prioritize named local hosts, public give-back, wildlife, unusual food, or a meaningful kid field mission. Check current direct government, nonprofit, farm, cultural-group, or operator sources. Return at most three leads in concise markdown with direct URLs, exact date fit, drive friction from Mana Kai, family fit, cost/reservation status, safety caveats, and why each is better than a generic attraction. Do not edit files. Do not include private trip details or contact data."

backend="Agy / Gemini 3.1 Pro (High), sandboxed search"
if ! "$gemini_runner" search "$research_prompt" >"$work_output" 2>&1; then
  backend="Claude Code plan mode fallback (Agy unavailable or quota-limited)"
  if ! "$claude_runner" plan "$research_prompt Use web research when available. Do not edit files." >"$work_output" 2>&1; then
    echo "Maui adventure research failed once in both Agy and Claude Code; no retries."
    cat "$work_output"
    exit 1
  fi
fi

{
  echo "# Maui adventure research handoff"
  echo
  echo "- Date: $today"
  echo "- Backend: $backend"
  echo "- Status: unverified leads for the Codex/OpenClaw publisher"
  echo
  cat "$work_output"
} >"$handoff_tmp"

mv "$handoff_tmp" "$handoff"
cat "$handoff"
