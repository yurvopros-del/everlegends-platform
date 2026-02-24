

# Hero Banner Slider with Image Slides and Motivational Slogans

## Overview

Remove the video background entirely from the Hero section. Replace it with a full-screen image slider (banner/carousel) that cycles through the 8 uploaded athletic images, each with its own unique motivational slogan and project tagline -- all bilingual (EN/RU).

## 1. Copy Images to Project

Copy all 8 uploaded images to `src/assets/hero/`:

| File | Theme |
|------|-------|
| `iStock-599713470.jpg` | Pull-ups / determination |
| `iStock-601369426.jpg` | Push-ups / grit |
| `iStock-618624716.jpg` | Trophy / victory |
| `iStock-637772392.jpg` | High-five / team |
| `iStock-687124332.jpg` | Plank / intensity |
| `iStock-698615450.jpg` | Mother-daughter / legacy |
| `iStock-918580062.jpg` | Squats / group training |
| `iStock-966297686.jpg` | High-five / unity |

## 2. Slide Content (EN / RU)

Each slide gets a compelling headline and a short project-angle tagline:

1. **Pull-ups**: "RISE ABOVE THE NOISE" / "ПОДНИМИСЬ НАД ШУМОМ" -- "Your talent deserves a global stage." / "Твой талант заслуживает мировой сцены."
2. **Push-ups/grit**: "BUILT THROUGH DISCIPLINE" / "ЗАКАЛЁННЫЙ ДИСЦИПЛИНОЙ" -- "No shortcuts. No excuses. Just results." / "Без обходных путей. Без оправданий. Только результат."
3. **Trophy**: "GLORY BELONGS TO THE FEARLESS" / "СЛАВА ПРИНАДЛЕЖИТ БЕССТРАШНЫМ" -- "Real prizes for real performance." / "Реальные призы за реальные результаты."
4. **High-five team**: "STRONGER TOGETHER" / "СИЛЬНЕЕ ВМЕСТЕ" -- "A global community united by merit." / "Глобальное сообщество, объединённое заслугами."
5. **Plank intensity**: "OUTWORK EVERYONE" / "ПРЕВЗОЙДИ КАЖДОГО" -- "Where effort is the only currency." / "Где усилие -- единственная валюта."
6. **Mother-daughter**: "LEGACY STARTS NOW" / "НАСЛЕДИЕ НАЧИНАЕТСЯ СЕЙЧАС" -- "Inspire the next generation of champions." / "Вдохновляй следующее поколение чемпионов."
7. **Squats group**: "EARN YOUR RANK" / "ЗАСЛУЖИ СВОЙ РАНГ" -- "Verified. Ranked. Rewarded." / "Верифицирован. Оценён. Вознаграждён."
8. **Unity high-five**: "THE ARENA AWAITS" / "АРЕНА ЖДЁТ" -- "Join thousands proving their worth worldwide." / "Присоединяйся к тысячам, доказывающим свою ценность."

## 3. Slider Implementation

### Approach
Use `framer-motion` with `AnimatePresence` for smooth crossfade transitions between slides. Auto-advance every 6 seconds. Include dot indicators at the bottom.

### HeroSection.tsx -- Complete Rewrite

- Remove all video code (`heroVideos` array, `useState`, `handleVideoEnded`, `<video>` element)
- Import all 8 images from `src/assets/hero/`
- Define a `SLIDES` array with `{ image, headline: {en, ru}, tagline: {en, ru} }` for each
- State: `currentSlide` index, auto-advancing via `useEffect` interval (6s)
- Render structure:
  - Full-screen section (same as now)
  - Background: `AnimatePresence` wrapping a `motion.img` keyed by `currentSlide`, with fade in/out + subtle scale (1.05 to 1.0 Ken Burns effect)
  - Image styling: `object-cover`, slight darkening overlay on top (gradient from bottom + side vignettes), NO grayscale -- show the images in their natural warm tones but with a dark overlay for contrast
  - Text overlay: slide-specific headline (large, bold) + tagline (smaller, lighter) -- animated in with staggered fade+slide
  - Below the slide text: the existing CTA button ("Enter the Arena")
  - Dot indicators: small circles at the bottom, clickable, active dot highlighted with the brand gradient

### Visual Treatment
- Images shown at ~55-60% brightness (dark overlay, not grayscale) to keep the warm athletic tones visible
- Bottom gradient overlay: `from-transparent via-background/40 to-background` for seamless blend into next section
- Side vignette: subtle `from-background/50 via-transparent to-background/50`
- Ken Burns: each slide starts at `scale(1.05)` and slowly zooms to `scale(1.0)` over the 6s display time

## 4. Translation Updates

Add new translation keys in `src/lib/translations.ts` under a `heroSlides` section with all 8 slides' headlines and taglines. Remove the old single `hero.subtitle`, `hero.headline1`, `hero.headline2`, `hero.body` keys (or keep the CTA key for the button).

## 5. Delete Video Files

The 5 video files in `public/videos/` are no longer needed and can be removed.

---

## Technical Details

### File Changes

| File | Changes |
|------|---------|
| `src/assets/hero/*.jpg` | Copy 8 uploaded images |
| `src/components/HeroSection.tsx` | Complete rewrite: remove video, add image slider with AnimatePresence, per-slide slogans, dot navigation, Ken Burns effect |
| `src/lib/translations.ts` | Add `heroSlides` array with 8 headline/tagline pairs in EN+RU, keep `hero.cta` |
| `public/videos/` | Remove 5 video files (no longer used) |

### Animation Details
- Slide transition: 0.8s crossfade with `AnimatePresence mode="wait"`
- Ken Burns: CSS transition `transform 6s ease-out` from `scale(1.05)` to `scale(1.0)`
- Text entrance: staggered `motion.div` with `y: 20 -> 0`, `opacity: 0 -> 1`, 0.3s delay between headline and tagline
- Dot indicators: `w-2 h-2` circles, inactive = `bg-white/30`, active = brand gradient background

