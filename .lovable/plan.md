

# Prize Pool Section Overhaul

## Overview

Five changes: restore Top 100 prize to $20, redesign shimmer animation for organic feel, reposition the flag banner to the System/Rewards boundary, match the Prize Pool title to other section headers, and implement a podium-style layout.

## 1. Restore Top 100 Prize to $20

**File: `src/lib/translations.ts`**
- Change `prize: "$10"` back to `prize: "$20"` for Top 100
- Update `rewards.total.value` from `"$7,000"` to `"$7,500"` (new math: $2,500 + 2x$1,000 + 3x$500 + 100x$20 = $7,500)

## 2. Slower, Desynchronized Shimmer Animation

**File: `src/index.css`**

Replace the current synchronized shimmer with a slower animation and per-element randomized delays applied via inline styles in the component:

- Increase shimmer duration from `3s` to `6s` for a more subtle, luxurious sweep
- Remove the fixed `animation-delay` from CSS classes (currently 0s, 0.5s, 1s, 1.5s)
- Instead, each metallic class gets just the base animation definition without delay

**File: `src/components/RewardsSection.tsx`**

- Apply a pseudo-random `animation-delay` via inline `style` on each prize element, using values like 0s, 2.3s, 4.1s, 1.7s -- different enough to feel spontaneous
- This ensures each prize value shimmers independently at its own rhythm

## 3. Move Flag Banner to System/Rewards Boundary

**File: `src/pages/Index.tsx`**

Currently the page layout is:
```
SystemSection
RewardsSection (contains FlagTicker internally)
```

The FlagTicker is rendered inside RewardsSection at the top. Move it out:
- Remove the FlagTicker from inside `RewardsSection.tsx`
- Place it in `Index.tsx` between `SystemSection` and `RewardsSection`
- Use negative margins or zero spacing so it sits exactly on the dividing line between the two sections

**File: `src/components/RewardsSection.tsx`**
- Remove the FlagTicker import and its `<motion.div>` wrapper

## 4. Prize Pool Title -- Match Section Header Style

Currently the Rewards section uses a small label (`text-xs tracking-[0.3em]`) but no proper heading like SystemSection has (`heading-lg`).

**File: `src/components/RewardsSection.tsx`**
- Add a section title using the `heading-lg` class (same as "THE SYSTEM" heading): `text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[-0.02em]`
- Display translation key `rewards.title` ("THE REWARD SYSTEM" / "СИСТЕМА НАГРАД")
- Keep the small label above it for the "The Prize Pool" subtitle

## 5. Podium Layout for Prizes

Replace the flat 4-column grid with a podium hierarchy:

```text
         +----------+
         |  $2,500  |
         | 1ST PLACE|
    +----+----------+----+
    | $1,000 |      | $500  |
    | TOP 2  |      | TOP 3 |
    +--------+      +-------+
         +----------+
         |   $20    |
         | TOP 100  |
         +----------+
```

**Desktop (md+):**
- Top row: 3-column grid with `grid-cols-3`
  - Column 1 (2nd place): self-end, slightly shorter padding
  - Column 2 (1st place): taller padding, visually elevated
  - Column 3 (3rd place): self-end, slightly shorter padding
- Bottom row: centered single element for Top 100

**Mobile:**
- Stack vertically: 1st, 2nd, 3rd, Top 100 -- with 1st place getting extra size emphasis

---

## Technical Details

### File: `src/index.css` (shimmer changes)

Remove fixed `animation-delay` from each metallic class. Change animation duration to `6s`:

```css
.gold-metallic {
  /* same gradient */
  animation: shimmer 6s ease-in-out infinite;
  /* no delay -- applied via inline style */
}
.silver-metallic {
  animation: shimmer 6s ease-in-out infinite;
}
.bronze-metallic {
  animation: shimmer 6s ease-in-out infinite;
}
.steel-metallic {
  animation: shimmer 6s ease-in-out infinite;
}
```

### File: `src/components/RewardsSection.tsx` (full restructure)

- Remove FlagTicker import and rendering
- Add heading with `heading-lg` class
- Replace flat grid with podium layout:
  - Podium top row: `grid grid-cols-3` on md+, with 2nd | 1st | 3rd order
  - 1st place gets larger vertical padding (`py-16 md:py-20`) and biggest text
  - 2nd and 3rd get `self-end` alignment with less padding (`py-10 md:py-14`)
  - Top 100 row: centered below, full width, smaller styling
- Apply pseudo-random animation delays via inline style: `style={{ animationDelay: '0s' }}`, `'2.3s'`, `'4.1s'`, `'1.7s'`

### File: `src/pages/Index.tsx`

Move FlagTicker between SystemSection and RewardsSection with edge-fades that blend from the System section's `bg-background` on the left to the Rewards section's `bg-surface` context:

```tsx
<SystemSection />
<FlagTicker direction="right" />
<RewardsSection />
```

### File: `src/lib/translations.ts`

- `prize: "$20"` for Top 100
- `total.value: "$7,500"`

### Files Changed Summary

| File | Changes |
|------|---------|
| `src/lib/translations.ts` | Restore Top 100 to $20, update total to $7,500 |
| `src/index.css` | Slow shimmer to 6s, remove fixed delays from metallic classes |
| `src/components/RewardsSection.tsx` | Remove FlagTicker, add heading-lg title, podium layout, inline animation delays |
| `src/pages/Index.tsx` | Add FlagTicker between SystemSection and RewardsSection |

