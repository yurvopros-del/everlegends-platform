

# EVERLEGENDS Website Update Plan

## Overview
Three changes requested:
1. Use the actual EVERLEGENDS logo image (instead of text wordmark) and match gradient colors precisely to the uploaded brand assets
2. Add a complete Russian language version with natural translation
3. Add TikTok and Telegram social links in the footer

---

## 1. Brand Logo and Colors

### Logo Integration
- Copy `user-uploads://Group.png` (wordmark) to `src/assets/logo.png`
- Copy `user-uploads://icon_ios_2048_537KB_512px.png` (E emblem) to `src/assets/emblem.png`
- Replace the text-based "EVERLEGENDS" in `Navigation.tsx` with the actual logo image
- Use the logo image at appropriate height (~28-32px) in the nav bar

### Color Correction
The uploaded logo shows a gradient from **cyan (#4EEADB)** through **blue (#4A8FE7)** to **magenta/violet (#C55BF0)**. The current CSS gradient variables will be adjusted to match:
- `--gradient-start`: adjusted to match the cyan/teal from the logo
- `--gradient-mid`: adjusted to match the blue from the logo  
- `--gradient-end`: adjusted to match the magenta/violet from the logo

This ensures `.gradient-text`, `.gradient-btn`, and `.gradient-border` all use the exact brand colors.

---

## 2. Russian Language Version

### Approach: Language Context with URL-based routing
- Add route `/ru` for Russian version, `/` stays English
- Create a `LanguageContext` provider storing current locale (`en` | `ru`)
- Create a translations file (`src/lib/translations.ts`) with all UI strings in both languages
- Create a `useTranslation` hook that returns the correct strings based on locale

### Translation Scope (all visible text)
- **Navigation**: links, CTA button
- **Hero**: subtitle, headline, body text, CTA
- **Philosophy**: headline, body text
- **System**: section label, title, step titles and descriptions
- **Rewards**: section label, title, all spec labels and values
- **Download**: headline, body text, button labels
- **Footer**: copyright, legal links

### Language Switcher
- Add a small EN/RU toggle in the navigation bar (right side, before CTA)
- Clicking switches locale and navigates to the corresponding route

### Russian Translations (natural, fluent)
All copy will be translated to sound natural in Russian, not literal. For example:
- "WHERE MERIT IS THE ONLY CURRENCY" becomes something like "ГДЕ МАСТЕРСТВО — ЕДИНСТВЕННАЯ ВАЛЮТА"
- "Enter the Arena" becomes "ВОЙТИ НА АРЕНУ"
- Step titles: СОРЕВНУЙСЯ / ДОКАЖИ / ВОЗВЫСЬСЯ

---

## 3. Social Links (TikTok + Telegram)

- Add TikTok and Telegram icon links in the `Footer.tsx`
- Use simple SVG icons inline (no extra dependency needed)
- Place them alongside the existing Privacy/Terms/Contact links or as a separate social row
- Links will be placeholder `#` URLs (to be replaced with actual profile URLs later)

---

## Files to Create
| File | Purpose |
|------|---------|
| `src/lib/translations.ts` | All EN/RU string pairs |
| `src/hooks/useLanguage.tsx` | Language context, provider, and hook |
| `src/pages/IndexRu.tsx` | Russian version page (reuses same components) |

## Files to Modify
| File | Change |
|------|--------|
| `src/assets/logo.png` | Copy from uploaded wordmark |
| `src/assets/emblem.png` | Copy from uploaded emblem |
| `src/index.css` | Update gradient CSS variables to match exact logo colors |
| `src/App.tsx` | Add `/ru` route, wrap with LanguageProvider |
| `src/components/Navigation.tsx` | Use logo image, add EN/RU switcher, use translation hook |
| `src/components/HeroSection.tsx` | Use translation hook for all text |
| `src/components/PhilosophySection.tsx` | Use translation hook |
| `src/components/SystemSection.tsx` | Use translation hook |
| `src/components/RewardsSection.tsx` | Use translation hook |
| `src/components/DownloadSection.tsx` | Use translation hook |
| `src/components/Footer.tsx` | Use translation hook, add TikTok + Telegram SVG icons |

