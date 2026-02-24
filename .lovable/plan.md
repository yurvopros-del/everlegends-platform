

# Three Changes: Text Update, Remove Colosseum/Lightning, Add Video Background

## 1. Update Philosophy Section Text (EN + RU)

Change the headline in `src/lib/translations.ts`:

**English:**
- `headline1`: "TALENT AND SYSTEMATIC TRAINING SHOULD BE" --> "MASTERY AND HARD WORK"
- `headline2`: "REWARDED. PERIOD." --> "SHOULD BE REWARDED. PERIOD."

**Russian:**
- `headline1`: "ТАЛАНТ И СИСТЕМНЫЕ ТРЕНИРОВКИ ДОЛЖНЫ БЫТЬ" --> "МАСТЕРСТВО И ТРУД"
- `headline2`: "ВОЗНАГРАЖДЕНЫ. ТОЧКА." --> "ДОЛЖНЫ БЫТЬ ВОЗНАГРАЖДЕНЫ. ТОЧКА."

### File: `src/lib/translations.ts`

---

## 2. Remove Colosseum + Lightning Effects Entirely

Strip out all Colosseum imagery and lightning animation from both sections:

### File: `src/components/HeroSection.tsx`
- Remove the `LightningBolt` component entirely
- Remove the Colosseum `<img>` element
- Remove the lightning flash overlay `<div>`
- Remove all 3 SVG lightning bolt instances
- Keep the soft gradient overlays for a clean dark background
- The background will now be handled by the video (see step 3)

### File: `src/components/PhilosophySection.tsx`
- Remove the Colosseum `<img>` element
- Remove the lightning flash overlay `<div>`
- Keep the gradient overlays for a clean dark background look

### File: `tailwind.config.ts`
- Remove `arena-thunder`, `lightning-flash`, and `lightning-bolt` keyframes and animations (cleanup unused code)

---

## 3. Add Video Background to Hero Section

Copy the 5 uploaded video files to `public/videos/` and use one as the hero background. Since we have multiple clips, we can either pick the best single one or create a rotating/sequential playback.

**Approach**: Use a single `<video>` element with all 5 sources as a looping, muted, autoplay background. The browser will play the first compatible format it finds. Alternatively, cycle through them sequentially using `onEnded` events for variety.

**Implementation (sequential playback for variety):**
- Copy all 5 videos to `public/videos/`
- Add a `<video>` element behind the hero content, styled as `absolute inset-0 w-full h-full object-cover`
- Apply a subtle dark overlay on top so text remains readable
- Set `autoPlay`, `muted`, `playsInline`, `loop` (or use `onEnded` to cycle to the next video)
- Apply a slight desaturation/grayscale filter for a cinematic look matching the dark theme
- Keep the existing gradient overlays on top for text contrast

### File: `src/components/HeroSection.tsx`
- Add video element with the uploaded clips
- Keep soft gradient overlays for text readability
- Remove all Colosseum/lightning code (combined with step 2)

### Files to copy:
- `user-uploads://30_shutterstock_1055123201.mp4` --> `public/videos/hero-1.mp4`
- `user-uploads://shutterstock_14930116.mp4` --> `public/videos/hero-2.mp4`
- `user-uploads://shutterstock_1046146867.mov` --> `public/videos/hero-3.mov`
- `user-uploads://shutterstock_1064731816.mov` --> `public/videos/hero-4.mov`
- `user-uploads://shutterstock_1071658435.mov` --> `public/videos/hero-5.mov`

---

## Summary of All Changes

| File | Changes |
|------|---------|
| `src/lib/translations.ts` | Update philosophy headline1/headline2 in both EN and RU |
| `src/components/HeroSection.tsx` | Remove Colosseum image + lightning bolts + flash overlay. Add `<video>` background cycling through 5 uploaded clips |
| `src/components/PhilosophySection.tsx` | Remove Colosseum image + lightning flash overlay. Keep clean dark gradient background |
| `tailwind.config.ts` | Remove `arena-thunder`, `lightning-flash`, `lightning-bolt` keyframes/animations |
| `public/videos/` | Copy 5 uploaded video files |

