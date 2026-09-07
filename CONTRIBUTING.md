# Contributing — austin-house-site

## Adding curated plots

When adding plots to `public/data/plots-feed.json` by hand (or via an agent):

**Do not edit the JSON file directly with a text editor or Edit tool.** The file has several derived fields that must stay consistent with the array:

- `count` — must equal `plots.length` at all times (enforced by the pre-commit hook; a stale count from a direct edit has taken the scanner down for days)
- `last_updated` — must reflect the actual edit date

Instead, append new plot objects to the `plots` array and let the pre-commit hook maintain `count`. You still need to update `last_updated` by hand if no automated run will do it.

**Why a direct Edit is risky:** the automated scanner maintains `count` through `writeFeed()`, which derives it from the array at write time. A direct file edit bypasses that function. If you append a plot object without touching `count`, the hook will fix `count` automatically — but the hook only covers the fields it knows about. The general rule is: call the write function, do not edit structured data files at the record level.

## Setup after cloning

```
npm install   # runs prepare script: git config core.hooksPath scripts/git-hooks
```

The pre-commit hook (`scripts/git-hooks/pre-commit`) then activates automatically for all future commits in this checkout.
