

# Hero Slides Centralization + RU Copy Updates

## Overview
Move all hero slide text from hardcoded `SLIDES` array in `HeroSection.tsx` into `translations.ts`, apply 5 updated RU strings for hero slides and 2 updated RU strings for system steps. The existing `translations.hero` block (headline1, headline2, body, cta) stays as-is since it is still referenced by the hero CTA button.

## Changes

### 1. `src/lib/translations.ts`

**Add `heroSlides` array** (after the `hero` block, around line 18):

```ts
heroSlides: [
  {
    headline: { en: "ONLY THE STRONGEST STAND OUT", ru: "ВЫХОДЯТ СИЛЬНЕЙШИЕ" },
    tagline: { en: "Your results deserve recognition.", ru: "Результат должен быть признан." },
  },
  {
    headline: { en: "BUILT THROUGH DISCIPLINE", ru: "ЗАКАЛЁННЫЙ ДИСЦИПЛИНОЙ" },
    tagline: { en: "No shortcuts. No excuses. Just results.", ru: "Без обходных путей. Без оправданий. Только результат." },
  },
  {
    headline: { en: "GLORY BELONGS TO THE FEARLESS", ru: "СЛАВА ПРИНАДЛЕЖИТ БЕССТРАШНЫМ" },
    tagline: { en: "Real prizes for real performance.", ru: "Реальные призы за реальные результаты." },
  },
  {
    headline: { en: "STRONGER TOGETHER", ru: "СИЛЬНЕЕ ВМЕСТЕ" },
    tagline: { en: "A global community united by results.", ru: "Сильнейшие выходят на одну арену." },
  },
  {
    headline: { en: "PROVE YOUR LEVEL", ru: "ДОКАЖИ УРОВЕНЬ" },
    tagline: { en: "Only verified results are counted.", ru: "Здесь учитывается только результат." },
  },
  {
    headline: { en: "LEGACY STARTS NOW", ru: "ИСТОРИЯ НАЧИНАЕТСЯ С ПОСТУПКОВ!" },
    tagline: { en: "Your results shape the future of the ranking.", ru: "Твой результат — твоя история. Войди в рейтинг!" },
  },
  {
    headline: { en: "TAKE YOUR PLACE IN THE RANKING", ru: "ЗАЙМИ СВОЁ МЕСТО В РЕЙТИНГЕ" },
    tagline: { en: "Verified. Recorded. Ranked.", ru: "Проверено. Оценено. Зафиксировано." },
  },
  {
    headline: { en: "THE ARENA AWAITS", ru: "ТВОЙ ВЫХОД НА АРЕНУ!" },
    tagline: { en: "Thousands already record results worldwide.", ru: "Сильные результаты видят во всём мире." },
  },
],
```

**Update system.steps RU descriptions** (EN unchanged):
- steps[0].description.ru: `"Покажи, на что способен! Отправь свой результат на проверку и закрепись в рейтинге."`
- steps[1].description.ru: `"Каждый результат проходит независимую проверку."`

**Note on `translations.hero`**: The existing `hero.headline1`, `hero.headline2`, `hero.body`, and `hero.cta` keys remain untouched -- `hero.cta` is still used by the CTA button in HeroSection. No dead keys are created.

### 2. `src/components/HeroSection.tsx`

**Replace** the `SLIDES` array (lines 16-57) with an image-only array:

```ts
const SLIDE_IMAGES = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];
```

**Update all references**:
- `SLIDES.length` becomes `SLIDE_IMAGES.length` (lines 72, 79)
- `SLIDES[nextIndex].image` becomes `SLIDE_IMAGES[nextIndex]` (line 81)
- `const slide = SLIDES[currentSlide]` becomes two lookups:
  ```ts
  const slideImage = SLIDE_IMAGES[currentSlide];
  const slideText = translations.heroSlides[currentSlide];
  ```
- `slide.image` becomes `slideImage` (line 114)
- `slide.headline[locale]` becomes `t(slideText.headline, locale)` (line 154)
- `slide.tagline[locale]` becomes `t(slideText.tagline, locale)` (line 162)
- Dot navigation `SLIDES.map` becomes `SLIDE_IMAGES.map` (line 182)

No changes to animations, transitions, timing, classes, or layout.

## Files Modified

```text
src/lib/translations.ts        (add heroSlides array, update 2 system.steps RU descriptions)
src/components/HeroSection.tsx  (remove hardcoded SLIDES text, use translations + image array)
```

## What is NOT changed
- English text (all EN strings identical)
- `translations.hero` block (still used by CTA button)
- Layout, styling, animations, transitions, timing
- Image imports and preloading logic
- Dot navigation behavior
- Any other component or page
