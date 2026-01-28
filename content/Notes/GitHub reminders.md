---
title: GitHub reminders
created: 2026-01-25T11:27:19-05:00 
modified: 2026-01-28T04:29:25Z
published: 2026-01-24
description:
draft: false
tags:
  - terminal
  - github
---
## Git process
```
git add file
git commit -m "[Insert message here]"
git push
```

## Use SSH to clone

I need to remember to clone like this (SSH):
```
git clone git@github.com:username/repo.git
```

**NOT** this (HTTPS):
```
git clone https//:github.com/username/repo
```

If I forget, I can use this:
```
# Change remote from HTTPS to SSH
git remote set-url origin git@github.com:username/repo

# Verify it changed
git remote -v
```

# command not found: quartz
For some reason, this ancient Macbook reverts back to node v8.9.3.
```
# If npx quartz sync --no-pull results in command not found: quartz
nvm use --lts
node --version
npm --version
```