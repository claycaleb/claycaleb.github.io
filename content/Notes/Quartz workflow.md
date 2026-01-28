---
title: Quartz workflow
created: 2026-01-25T09:34:44-05:00 
modified: 2026-01-28T04:29:25Z
published: 2026-01-25
description:
draft: false
tags:
  - quartz
  - terminal
  - github
  - obsidian
---
```
# Regular publishing (do this daily/whenever)
npx quartz sync --no-pull

# Update Quartz framework (do this like once every few months when you're bored)
git pull upstream v4
git push origin main
```

I can publish from Obsidian using Obsidian Git. I set a hotkey to Commit + Sync with Cmd + Shift + P.