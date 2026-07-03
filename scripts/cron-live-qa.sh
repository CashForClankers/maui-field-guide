#!/bin/zsh

set -u

export PATH="/Users/bestrobot/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"

project_dir="/Users/bestrobot/.openclaw/workspace/projects/maui-field-guide"
claude_runner="/Users/bestrobot/setup-mac/.agents/skills/claudecode/scripts/run-claudecode.sh"

cd "$project_dir" || exit 1

"$claude_runner" plan "Perform a read-only post-publish QA of https://cashforclankers.github.io/maui-field-guide/. Do not edit files, commit, push, or trigger workflows. Check the latest GitHub Pages deployment state, homepage, Daily page, adventure deep link, visible source links, mobile-width layout risk, and obvious stale or contradictory copy against origin/main. Return at most eight concise bullets. Lead with PASS or ACTION NEEDED. If deployment is still running, report that once without retrying."
