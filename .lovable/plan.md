

# Reorder Hero Slider: Remove 2.avif, Add 10.avif, New 8-Slide Order

## Overview
Remove the "BUILT THROUGH DISCIPLINE" slide (from 2.avif), introduce 10.avif (uploaded as `10-2.avif`), and reorder all 8 slides to the new narrative sequence. No layout, animation, or logic changes.

---

## Step 1 -- Replace asset files in `src/assets/hero/`

Since we are shuffling existing files (sources become targets), we must use a safe copy order to avoid overwriting a source before it is consumed. The uploaded `user-uploads://10-2.avif` provides the new 10.avif image.

New mapping (all 8 files overwritten in place):

| Target file | Source | Description |
|---|---|---|
| hero_01.avif | Current hero_08.avif (11.avif) | Cup |
| hero_02.avif | user-uploads://10-2.avif | Kids (NEW) |
| hero_03.avif | Current hero_04.avif (8.avif) | Kids |
| hero_04.avif | Current hero_05.avif (6.avif) | Kids |
| hero_05.avif | Current hero_06.avif (5.avif) | Kids |
| hero_06.avif | Current hero_01.avif (3.avif) | Women |
| hero_07.avif | Current hero_03.avif (4.avif) | Men |
| hero_08.avif | Current hero_02.avif (1.avif) | Women |

Since multiple files reference each other as both source and target, we copy each source to its new target using the original upload files where available. For the shuffled files, we rely on the original uploaded images (which are still available from prior uploads) to avoid circular overwrites:
- hero_01 from `user-uploads://11.avif`
- hero_02 from `user-uploads://10-2.avif`
- hero_03 from `user-uploads://8.avif`
- hero_04 from `user-uploads://6.avif`
- hero_05 from `user-uploads://5.avif`
- hero_06 from `user-uploads://3.avif`
- hero_07 from `user-uploads://4.avif`
- hero_08 from `user-uploads://1.avif`

This avoids circular dependency entirely -- each write comes from the original upload, not from another hero_XX file.

---

## Step 2 -- `src/components/HeroSection.tsx` (NO changes)

Imports already reference `hero_01.avif` through `hero_08.avif` and `SLIDE_IMAGES` has length 8. Filenames are stable -- only the underlying image data changes. No code edits needed.

Verification: confirm no stale JPG imports exist (there are none currently).

---

## Step 3 -- `src/lib/translations.ts` -- replace `heroSlides` array

Replace lines 20-53 (the `heroSlides` array contents) with 8 objects in the new order:

1. GLORY BELONGS TO THE FEARLESS / СЛАВА ПРИНАДЛЕЖИТ БЕССТРАШНЫМ
2. THE ARENA AWAITS / ТВОЙ ВЫХОД НА АРЕНУ! (new slide text)
3. HEAD UP, GAME ON / УМНЫЙ КОНТРОЛЬ
4. AMBIDEXTROUS POWER / ТЕХНИЧЕСКАЯ ГАРМОНИЯ
5. THE CLASSICAL SCHOOL / ЧИСТОТА ШКОЛЫ
6. TAKE YOUR PLACE IN THE RANKING / ЗАЙМИ СВОЁ МЕСТО В РЕЙТИНГЕ
7. CLAIM YOUR STATUS / ВРЕМЯ ПОКАЗАТЬ КЛАСС
8. OWN THE TEMPO / ПОЙМАЙ СВОЙ РИТМ

"BUILT THROUGH DISCIPLINE" is removed entirely. `translations.hero` block is untouched.

---

## Step 4 -- Verification

- Total slides: 8
- Dot count: 8 (SLIDE_IMAGES.length)
- First slide: Cup (11.avif as hero_01)
- Slides 2-5: kids-first order (10, 8, 6, 5)
- 2.avif completely gone (no heroSlides entry, file overwritten)
- 1.avif (hero_08) and 3.avif (hero_06) not adjacent (separated by hero_07)
- No old JPG imports in HeroSection.tsx

