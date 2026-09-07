# Contributing — austin-house-site

## Adding curated plots

When adding plots to `public/data/plots-feed.json` by hand (or via an agent):

**Do not edit the JSON file directly with a text editor or Edit tool.** The file has derived fields enforced by the pre-commit hook:

- `count` — must equal `plots.length` (self-consistency witness; a stale count blocked every subsequent scanner startup for five days in Sept 2026)
- `last_updated` — must reflect the date of the most recent write (the automated scanner never set this; after every automated run the feed gained new plots but the date stayed stale)

The pre-commit hook recomputes both fields automatically whenever `plots-feed.json` is staged. You do not need to set either field — just append plot objects and commit.

**Why a direct Edit is risky:** the automated scanner maintains these fields through `writeFeed()`, which derives them at write time. A direct file edit bypasses that function. The hook covers `count` and `last_updated` specifically, but it does not cover whatever the next direct edit breaks. The general rule is: call the write function, do not edit structured data files at the record level.

## Setup after cloning

```
npm install   # runs prepare script: git config core.hooksPath scripts/git-hooks
```

The pre-commit hook (`scripts/git-hooks/pre-commit`) then activates automatically for all future commits in this checkout.
