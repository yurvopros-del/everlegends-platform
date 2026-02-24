

# Updates: Prize Pool, Flag Ticker, and Colosseum Fix

## 1. Update Prize Pool Structure

Replace the current 3-position grid with a 4-tier layout matching your exact amounts:

| Position | Prize | Winners |
|----------|-------|---------|
| 1ST PLACE | $2,500 | One winner |
| TOP 2 | $1,000 | Two winners |
| TOP 3 | $500 | Three winners |
| TOP 100 | $20 | Hundred winners |

- Remove the "$1,000,000+" hero headline since it no longer applies
- Change to a 4-column grid (2x2 on mobile, 4 across on desktop)
- Each tile shows: prize amount (large gradient text), position label, and number of winners
- Update both EN and RU translations

### Files Modified
- `src/lib/translations.ts` -- replace `positions` array with 4 tiers, update `prizePool`/`prizePoolSub` or remove them, update specs
- `src/components/RewardsSection.tsx` -- adjust grid from 3-col to 4-col (or 2x2 mobile), add "winners" count line per tile

---

## 2. Enhance Flag Ticker with Country Labels

Currently the ticker shows only emoji flags at low opacity. Update to show **flag emoji + country code** together, making it more engaging:

Example: `🇺🇸 USA  🇧🇷 BRA  🇬🇧 GBR  🇯🇵 JPN ...`

- Add country codes next to each flag emoji
- Increase opacity slightly (from 30% to 40-50%) for better visibility
- Keep the same smooth scrolling animation and edge fades

### Files Modified
- `src/components/FlagTicker.tsx` -- change FLAGS array to include country codes, render both flag + code label

---

## 3. Fix Colosseum Visibility

The Colosseum images ARE in the code (Hero at 8% opacity, Philosophy at 5% opacity), but they may be too faint or the images may not be loading. Fixes:

- **Hero Section**: Increase Colosseum opacity from `0.08` to `0.12-0.15` so it's actually visible as a subtle texture
- **Philosophy Section**: Increase from `0.05` to `0.08-0.10`
- Lighten the overlay gradients slightly so the image isn't completely buried
- Verify the Unsplash URLs are loading correctly; if not, use alternative reliable URLs

### Files Modified
- `src/components/HeroSection.tsx` -- increase image opacity, soften overlays
- `src/components/PhilosophySection.tsx` -- increase image opacity, soften overlays

---

## Summary of All File Changes

| File | Changes |
|------|---------|
| `src/lib/translations.ts` | Replace 3 positions with 4 tiers ($2500/$1000/$500/$20), update prize pool headline, add winner counts in EN+RU |
| `src/components/RewardsSection.tsx` | 4-tier grid layout with winner counts, remove or update the big prize pool number |
| `src/components/FlagTicker.tsx` | Add country code labels next to flag emojis, boost opacity |
| `src/components/HeroSection.tsx` | Increase Colosseum opacity to ~12-15%, soften dark overlays |
| `src/components/PhilosophySection.tsx` | Increase arena opacity to ~8-10%, soften dark overlays |

