

# Premium Metallic Prize Pool with $7,000 Total

## Overview

Two changes to the Rewards section: (1) replace the shy gradient text with bold 3D metallic finishes (gold/silver/bronze) with shimmer animation, and (2) add a prominent "$7,000 PER EVENT" total line. The TOP 100 prize adjusts from $20 to $10 so the math adds up to $7,000.

## Prize Math

| Tier | Prize | Winners | Subtotal |
|------|-------|---------|----------|
| 1st Place | $2,500 | 1 | $2,500 |
| Top 2 | $1,000 | 2 | $2,000 |
| Top 3 | $500 | 3 | $1,500 |
| Top 100 | $10 | 100 | $1,000 |
| **Total** | | | **$7,000** |

## Visual Changes

### 1. Metallic Prize Numbers

Replace the current cyan-blue-purple gradient on prize amounts with per-tier metallic finishes:

- **Gold (1st)**: Rich gold gradient with warm amber drop-shadow
- **Silver (2nd)**: Cool steel-silver gradient with gray drop-shadow
- **Bronze (3rd)**: Warm bronze gradient with copper drop-shadow
- **Steel (Top 100)**: Subtle platinum/steel gradient

Each gets a sweeping shimmer animation (3s cycle, staggered 0.5s between tiers) -- a bright highlight band glides across the metallic text. Elegant, not flashy.

### 2. Bigger, Bolder Text

| Element | Current | New |
|---------|---------|-----|
| Prize amount | `text-3xl md:text-4xl lg:text-5xl` | `text-5xl md:text-6xl lg:text-7xl` |
| Winner count | `text-[10px]` | `text-xs md:text-sm` |
| Position label | `text-xs` | `text-sm md:text-base` |

### 3. Total Prize Pool Line

A prominent summary line below the 4-tier grid and above the specs, showing:

"$7,000" (large, gradient-text styled) + "per event" label

Bilingual: "Per Event" / "За Событие"

---

## Technical Details

### File: `src/index.css`

Add metallic utility classes and shimmer keyframes:

```css
.gold-metallic {
  background: linear-gradient(135deg, #B8860B, #FFD700, #FFF8DC, #FFD700, #B8860B);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s ease-in-out infinite;
  filter: drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3));
}

.silver-metallic { /* similar, cool grays, 0.5s delay */ }
.bronze-metallic { /* similar, warm browns, 1s delay */ }
.steel-metallic { /* similar, blue-grays, 1.5s delay */ }

@keyframes shimmer {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}
```

### File: `src/lib/translations.ts`

- Change TOP 100 prize from `"$20"` to `"$10"`
- Add `rewards.total` translation: `{ label: { en: "Per Event", ru: "За Событие" }, value: "$7,000" }`

### File: `src/components/RewardsSection.tsx`

- Map position index to metallic class: `["gold-metallic", "silver-metallic", "bronze-metallic", "steel-metallic"]`
- Increase text sizes on prize amounts, winner counts, and position labels
- Add a total prize pool block between the grid and specs: large "$7,000" with gradient-text + "PER EVENT" label
- Keep all existing motion animations

### Files Changed

| File | Changes |
|------|---------|
| `src/index.css` | Add 4 metallic classes + `@keyframes shimmer` |
| `src/lib/translations.ts` | Update TOP 100 prize to $10, add `rewards.total` translations |
| `src/components/RewardsSection.tsx` | Apply metallic classes per tier, increase text sizes, add $7,000 total line |

