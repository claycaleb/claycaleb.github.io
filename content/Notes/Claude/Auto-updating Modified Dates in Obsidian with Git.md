---
title: Auto-updating Modified Dates in Obsidian with Git
created: 2026-01-27T23:33:20-05:00
modified: 2026-01-28T04:29:25Z
published: 2026-01-27
description:
draft: false
tags:
  - github
  - obsidian
---
*From Claude*
# Summary: Auto-updating Modified Dates in Obsidian with Git

We set up a **git pre-commit hook** that automatically updates the `modified:` date in your Obsidian notes' frontmatter whenever you commit changes.
## What we did:

1. **Identified your setup**: Quartz repo at `Projects/quartz` with your Obsidian vault in the `content/` subfolder
2. **Created a git hook** at `.git/hooks/pre-commit` that:
    - Runs automatically before each commit
    - Finds all staged `.md` files in your `content/` folder
    - Checks if they have a `modified:` field in frontmatter
    - Updates it to the current timestamp (ISO format)
    - Re-stages the files so the update is included in the commit
3. **Debugged syntax issues**: Fixed grep regex and line break problems
4. **Ignored content/templates folder**: Added `grep -v '^content/templates/'` to file
5. **Made it executable**: `chmod +x .git/hooks/pre-commit`
## Result:

Now every time you `git commit`, your `modified:` dates automatically update to reflect when you actually committed the changes - no manual work needed! Files without the `modified:` field are left untouched.

You kept `published:` as manual so you control when something is truly "published" vs just updated.