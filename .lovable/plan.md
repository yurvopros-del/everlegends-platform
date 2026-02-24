

# Replace All CTAs with Yandex Beta Access Form

## Overview
Replace every placeholder CTA with a direct link to the Yandex Forms beta access form. All three review improvements incorporated.

## Step 1: Create `src/lib/constants.ts`
```ts
export const BETA_FORM_URL = "https://forms.yandex.ru/cloud/699df00490fa7bdac2fea0cd/";
```
Imported via `@/lib/constants` (already resolved by tsconfig paths).

## Step 2: Update `src/lib/translations.ts`
- `nav.cta`: "Request Beta Access" / "Запросить доступ"
- `nav.joinMobile`: "Request Beta Access" / "Запросить доступ"
- `hero.cta`: "Request Beta Access" / "Запросить доступ"
- `download.ios`: "Request Beta Access (iOS)" / "Запросить доступ (iOS)"
- `download.android`: "Request Beta Access (Android)" / "Запросить доступ (Android)"
- NEW `download.betaNote`: "Closed beta. Selected participants receive early access." / "Закрытая бета. Выбранные участники получают ранний доступ."

## Step 3: Update `src/components/Navigation.tsx`
- Import `BETA_FORM_URL` from `@/lib/constants`
- Desktop CTA: replace `href="#download"` with `href={BETA_FORM_URL}`, add `target="_blank"`, `rel="noopener noreferrer"`, `data-cta="beta-access"`
- Mobile CTA: same changes

## Step 4: Update `src/components/HeroSection.tsx`
- Import `BETA_FORM_URL` from `@/lib/constants`
- Hero CTA: replace `href="#download"` with `href={BETA_FORM_URL}`, add `target="_blank"`, `rel="noopener noreferrer"`, `data-cta="beta-access"`

## Step 5: Update `src/components/DownloadSection.tsx`
- Import `BETA_FORM_URL` from `@/lib/constants`
- iOS button: replace `href="#"` with `href={BETA_FORM_URL}`, add `target="_blank"`, `rel="noopener noreferrer"`, `data-cta="beta-access"`
- Android button: same changes
- Keep both buttons (two distinct CTAs)
- Add `betaNote` helper text paragraph below the buttons

## Files
```
src/lib/constants.ts              (new)
src/lib/translations.ts           (modified)
src/components/Navigation.tsx     (modified)
src/components/HeroSection.tsx    (modified)
src/components/DownloadSection.tsx (modified)
```

## Not changed
Layout, animations, styling, footer, banner, social icons, two-button download layout.

