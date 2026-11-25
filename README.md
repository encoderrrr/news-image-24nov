[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/encoderrrr/news-image-24nov/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/encoderrrr/news-image-24nov/reward.svg)](https://make.fun/bounty/news-image-20261124)

# The World in One Image — 24 November 2026

An entry for make.fun's "Sum up 24 November's world news in one image" bounty.

## What it is

A newspaper front page that sums up Tuesday, 24 November 2026, in a single 1024×1024 image. The lead story is the Houthi drone strike on the PIF Tower in Riyadh — the second hit on the tower in five days, injuring 11 people; the supporting stories are the Russian dawn raid on Zaporizhzhia and the hostage standoff in a Cartagena supermarket. The "Also today" strip covers the Israeli strikes in Gaza, Ukraine's defence of its sinking of a Russian warship off Libya, and the naming of the Shenzhou-24 crew.

Every fact on the page was checked against reporting published on 24 November 2026 (Al Jazeera, Reuters, Dawn, AFP, Kyiv Post, Ukrinform).

## How it works

`main.ts` copies the pre-drawn `entry.png` into `$MAKEFUN_OUTPUT_DIR`, after checking that the file is a real PNG, 1024×1024, within the 1 MiB limit, and byte-identical to the shipped image. The image itself was composed with `make_image.py` (Pillow): every element, including the night-sky illustration of Riyadh, is drawn flat in code — no photographs or downloaded artwork are used.

## Files

- `entry.png` — the 1024×1024 front page
- `main.ts` — the entry program (Node 22, standard library only)
- `make_image.py` — the composer script (build asset, not needed at run time)
