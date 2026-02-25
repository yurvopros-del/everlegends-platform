

# Centralize All Remaining User-Facing Copy into translations.ts

## Current State
The codebase is already ~95% centralized. After auditing every landing-related component, only 4 small gaps remain where hardcoded strings exist.

## Inventory of Remaining Hardcoded Strings

| Component | String(s) | New translations.ts Key |
|-----------|-----------|------------------------|
| `HeroSection.tsx` (line 151) | `"Slide"` / `"Слайд"` (aria-label) | `hero.slideLabel` |
| `CookiePolicy.tsx` (line 63) | `title="Cookie Policy"` (iframe) | reuse `cookiePage.title` |
| `PrivacyPolicy.tsx` (line 62) | `title="Privacy Policy"` (iframe) | reuse `privacyPage.title` |
| `NotFound.tsx` (lines 14-16) | `"Oops! Page not found"`, `"Return to Home"` | `notFound.message`, `notFound.backHome` |

## Changes

### 1. `src/lib/translations.ts` -- Add missing keys

Add to the `hero` block:
```ts
slideLabel: { en: "Slide", ru: "Слайд" },
```

Add a new `notFound` block:
```ts
notFound: {
  message: { en: "Oops! Page not found", ru: "Страница не найдена" },
  backHome: { en: "Return to Home", ru: "Вернуться на главную" },
},
```

### 2. `src/components/HeroSection.tsx` -- Replace aria-label inline conditional

Line 151: Replace
```ts
aria-label={`${locale === "ru" ? "Слайд" : "Slide"} ${i + 1}`}
```
with
```ts
aria-label={`${t(translations.hero.slideLabel, locale)} ${i + 1}`}
```

### 3. `src/pages/CookiePolicy.tsx` -- Use translation for iframe title

Line 63: Replace `title="Cookie Policy"` with `title={t(translations.cookiePage.title, locale)}`

### 4. `src/pages/PrivacyPolicy.tsx` -- Use translation for iframe title

Line 62: Replace `title="Privacy Policy"` with `title={t(translations.privacyPage.title, locale)}`

### 5. `src/pages/NotFound.tsx` -- Localize 404 page

- Import `useLanguage`, `translations`, `t`
- Replace hardcoded strings with `t()` lookups
- Add `lang={locale}` to root div
- Keep the `"404"` heading as-is (it is a number, not localized text)

## Files Modified

```text
src/lib/translations.ts         (add hero.slideLabel + notFound block)
src/components/HeroSection.tsx   (1 line: aria-label)
src/pages/CookiePolicy.tsx       (1 line: iframe title)
src/pages/PrivacyPolicy.tsx      (1 line: iframe title)
src/pages/NotFound.tsx           (localize 2 strings)
```

## What is NOT changed
- All existing English and Russian wording (extraction only)
- Layout, styling, animations, typography
- Locale routing logic
- Component structure
- Any already-centralized translations
