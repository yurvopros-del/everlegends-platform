

# Combined Update: Wording Fixes + Colosseum Imagery + Rewards Upgrade + International Flags

This plan bundles all pending changes plus the new flags concept into one cohesive implementation.

---

## 1. Fix System Section Wording

Update step titles and descriptions in `src/lib/translations.ts`:

| Step | Current EN | New EN | Current RU | New RU |
|------|-----------|--------|-----------|--------|
| 02 | PROVE | WIN | ДОКАЖИ | ПОБЕЖДАЙ |
| 03 | RISE | BE REWARDED | ВОЗВЫСЬСЯ | ВЫИГРЫВАЙ |

Step descriptions updated to match the new verbs naturally.

---

## 2. Fix Philosophy Headline

| | Current | New |
|---|---------|-----|
| EN line 1 | TALENT SHOULD BE | TALENT AND SYSTEMATIC TRAINING SHOULD BE |
| EN line 2 | REWARDED. PERIOD. | REWARDED. PERIOD. |
| RU line 1 | ТАЛАНТ ДОЛЖЕН БЫТЬ | ТАЛАНТ И СИСТЕМНЫЕ ТРЕНИРОВКИ ДОЛЖНЫ БЫТЬ |
| RU line 2 | ВОЗНАГРАЖДЁН. ТОЧКА. | ВОЗНАГРАЖДЕНЫ. ТОЧКА. |

Body text also updated to reflect the training + talent message.

---

## 3. Colosseum Arena Imagery

### Hero Section
- Add a high-quality desaturated Colosseum interior photo as a background layer (Unsplash CDN)
- Apply CSS `grayscale(100%)`, opacity ~8-10%, with dark gradient overlays fading to black at all edges
- Creates atmospheric "arena" depth without competing with text

### Philosophy Section
- Add a faint Colosseum archway image behind the statement
- Even more subtle (opacity ~5%), fully grayscale, dark vignette overlay

---

## 4. Rewards Section Upgrade -- Stimulating Prize Pool

Transform the current dry spec-sheet into a powerful, motivating showcase:

**A. Hero Prize Pool Number**
- Large gradient-text headline: "$1,000,000+" (dominant visual element)
- Subtitle: "TOTAL SEASONAL PRIZE POOL" / "ОБЩИЙ СЕЗОННЫЙ ПРИЗОВОЙ ФОНД"

**B. Top 3 Positions Grid**
Three columns with gradient accents:
- 1ST -- $250,000 -- CHAMPION / ЧЕМПИОН
- 2ND -- $100,000 -- ELITE / ЭЛИТА
- 3RD -- $50,000 -- CONTENDER / ПРЕТЕНДЕНТ

Oversized position numbers, gradient-text prize amounts, clean dividing lines.

**C. Supporting Specs Below**
Keep the label-value spec sheet style for: weekly challenges, leaderboard bonuses, eligibility, integrity.

---

## 5. International Flags -- The Organic Approach

### Concept: "Floating Flag Ticker"

A **continuous horizontal scrolling ribbon** of small national flag emoji or SVG icons that drifts slowly across the screen -- like a subtle stock ticker but with flags. This appears in two strategic places:

**A. Between Hero and Philosophy sections**
- A single thin horizontal band (~24px tall) with ~40-50 small circular flag icons scrolling continuously left-to-right
- Flags rendered as small circles (16-20px) with slight spacing, very low opacity (~30-40%) that brightens slightly on the band itself
- The band has a subtle gradient fade on both left and right edges (fade to black) so flags appear and disappear organically
- Scroll speed: slow and meditative (60-80 seconds for full loop), using CSS `@keyframes` animation (no JS needed)
- A thin gradient accent line above and below the flag band

**B. Inside the Rewards Section**
- A second flag ribbon scrolling in the **opposite direction** (right-to-left), placed between the prize pool headline and the top-3 positions grid
- Reinforces the "open to all athletes worldwide" message with visual proof
- Same styling: small circular flags, low opacity, edge fades

### Flag Implementation
- Use a curated set of ~50 country flag SVGs (small, optimized) or Unicode flag emoji rendered in a flex row
- Duplicated twice in the DOM for seamless infinite scroll (standard CSS ticker pattern)
- Countries represented: a diverse global mix -- USA, Brazil, UK, Japan, Nigeria, India, Germany, South Korea, Mexico, Australia, Kenya, France, Russia, China, Saudi Arabia, South Africa, Argentina, etc.
- Each flag rendered as a small circle with `border-radius: 50%` and `object-fit: cover`

### Why This Works
- **Organic**: flags drift in and out naturally, never static or forced
- **Dynamic**: continuous motion adds life without being distracting
- **Stylish**: circular flags with low opacity on dark background feel premium
- **International**: instantly communicates "global platform" without a single word
- **Minimal**: thin bands don't disrupt the generous whitespace between sections

---

## Technical Details

### Files Modified

| File | Changes |
|------|---------|
| `src/lib/translations.ts` | Update system steps 2-3, philosophy headline/body, add prize pool and top-3 position translations |
| `src/components/HeroSection.tsx` | Add subtle grayscale Colosseum background image layer |
| `src/components/PhilosophySection.tsx` | Add faint arena archway background |
| `src/components/RewardsSection.tsx` | Rebuild with prize pool hero number, top-3 grid, flag ribbon, supporting specs |
| `src/components/SystemSection.tsx` | No structural changes (wording flows from translations) |
| `src/index.css` | Add `@keyframes flag-scroll` animation and flag ticker utility classes |

### New File

| File | Purpose |
|------|---------|
| `src/components/FlagTicker.tsx` | Reusable scrolling flag ribbon component with ~50 country flag SVGs, CSS infinite scroll, edge fade overlays |

### Pages Modified

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Insert `FlagTicker` component between Hero and Philosophy sections |

