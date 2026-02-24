

# Colosseum Thunder Effect + Visual Flag Images

## 1. Colosseum "Thunder Flash" Effect

The Colosseum images at 10-14% opacity are being completely buried by the dark overlays. Two fixes:

### A. Increase Base Visibility
- **Hero Section**: Boost opacity from `0.14` to `0.25`, soften the overlay gradients (reduce `via-background/30` to `via-background/15`)
- **Philosophy Section**: Boost opacity from `0.10` to `0.18`, soften overlays from `via-background/60` to `via-background/40`

### B. Irregular "Thunder Flash" Animation
Add a CSS keyframe animation that periodically brightens the Colosseum image at irregular intervals, like distant lightning illuminating an arena:

- Create a `colosseum-flash` keyframe: stays at base opacity most of the time, then briefly spikes to ~40-50% opacity for 0.3-0.5s at irregular points in a long cycle (~15s total)
- Apply this animation to the Colosseum `<img>` elements in both sections
- The effect is subtle and atmospheric -- not a strobe, more like distant thunder briefly revealing the arena walls

### Files Modified
- `tailwind.config.ts` -- add `colosseum-flash` keyframe and animation
- `src/components/HeroSection.tsx` -- increase opacity, soften overlays, add flash animation class
- `src/components/PhilosophySection.tsx` -- increase opacity, soften overlays, add flash animation class

---

## 2. Replace Emoji Flags with Visual Flag Images

Emoji flags render as plain text glyphs and look flat. Replace them with actual flag images from a free CDN (`flagcdn.com`) which serves high-quality country flag PNGs/SVGs.

### Implementation
- Update the `FLAGS` array to include 2-letter ISO country codes (e.g., `us`, `br`, `gb`)
- Render each flag as an `<img>` tag: `https://flagcdn.com/w40/{code}.png` -- small, optimized, visually rich
- Style each flag image as a rounded rectangle (~28x20px) with a subtle border and slight shadow
- Keep the country code text label next to each flag image for context
- Maintain the scrolling animation, edge fades, and overall layout

### Visual Result
Instead of: `🇺🇸 USA  🇧🇷 BRA` (flat text)
Now: `[US flag image] USA  [BR flag image] BRA` (real visual flags with depth)

### Files Modified
- `src/components/FlagTicker.tsx` -- replace emoji with `<img>` from flagcdn.com, add ISO codes, style flag images

---

## Technical Details

### New Keyframe: `colosseum-flash` (in `tailwind.config.ts`)
A ~15-second animation cycle with irregular brightness spikes:
- 0% - base opacity
- 18% - brief spike up
- 20% - back to base
- 55% - another brief spike
- 57% - back to base  
- 82% - one more spike
- 84% - back to base
- 100% - base opacity

This creates an organic, non-repeating feel across a 15s loop.

### Flag CDN
Using `flagcdn.com` -- a free, reliable CDN for country flags. No API key needed, loads fast, supports multiple sizes. Each flag is a ~1-2KB PNG.

### Summary of File Changes

| File | Changes |
|------|---------|
| `tailwind.config.ts` | Add `colosseum-flash` keyframe + animation |
| `src/components/HeroSection.tsx` | Increase Colosseum opacity to 25%, soften overlays, add thunder flash animation |
| `src/components/PhilosophySection.tsx` | Increase opacity to 18%, soften overlays, add thunder flash animation |
| `src/components/FlagTicker.tsx` | Replace emoji flags with real flag images from flagcdn.com CDN |

