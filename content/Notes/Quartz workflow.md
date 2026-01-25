---
title: Quartz workflow
date: 2026-01-25
description:
draft: false
tags:
  - quartz
  - terminal
  - github
---
```
# Regular publishing (do this daily/whenever)
npx quartz sync --no-pull

# Update Quartz framework (do this like once every few months when you're bored)
git pull upstream v4
git push origin main
```