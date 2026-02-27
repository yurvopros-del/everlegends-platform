
# Replace Hero Slider: New Images + New Copy

## Overview
Hard-replace the 8-slide hero slider with new AVIF images and updated EN/RU copy. No layout, animation, or structural changes.

---

## Step 1: Copy uploaded images into `src/assets/hero/`

| Upload file | Target filename |
|---|---|
| `3.avif` | `src/assets/hero/hero_01.avif` |
| `1.avif` | `src/assets/hero/hero_02.avif` |
| `4.avif` | `src/assets/hero/hero_03.avif` |
| `8.avif` | `src/assets/hero/hero_04.avif` |
| `6.avif` | `src/assets/hero/hero_05.avif` |
| `5.avif` | `src/assets/hero/hero_06.avif` |
| `2.avif` | `src/assets/hero/hero_07.avif` |
| `11.avif` | `src/assets/hero/hero_08.avif` |

`10.avif` is explicitly ignored.

---

## Step 2: Update `src/components/HeroSection.tsx` (imports only)

Replace lines 7-17 (old JPG imports + SLIDE_IMAGES) with new AVIF imports:

```text
import slide1 from "@/assets/hero/hero_01.avif";
import slide2 from "@/assets/hero/hero_02.avif";
...
import slide8 from "@/assets/hero/hero_08.avif";

const SLIDE_IMAGES = [slide1, slide2, ..., slide8];
```

Nothing else in HeroSection.tsx changes.

---

## Step 3: Update `translations.heroSlides` in `src/lib/translations.ts`

Replace only the `heroSlides` array with the 8 new slide objects:

1. TAKE YOUR PLACE IN THE RANKING / ЗАЙМИ СВОЁ МЕСТО В РЕЙТИНГЕ
2. OWN THE TEMPO / ПОЙМАЙ СВОЙ РИТМ
3. CLAIM YOUR STATUS / ВРЕМЯ ПОКАЗАТЬ КЛАСС
4. HEAD UP, GAME ON / УМНЫЙ КОНТРОЛЬ
5. AMBIDEXTROUS POWER / ТЕХНИЧЕСКАЯ ГАРМОНИЯ
6. THE CLASSICAL SCHOOL / ЧИСТОТА ШКОЛЫ
7. BUILT THROUGH DISCIPLINE / ЗАКАЛЁННЫЙ ДИСЦИПЛИНОЙ
8. GLORY BELONGS TO THE FEARLESS / СЛАВА ПРИНАДЛЕЖИТ БЕССТРАШНЫМ

`translations.hero` block is NOT touched.

---

## Step 4: Verification

- Total slides: 8
- Dot count: 8
- All slides have EN + RU
- No old iStock JPG imports remain
- AVIF images render correctly
