

# Header Proportions + Nav Text + Brand Rename — Final Execution

## 1. Navigation.tsx (9 edits)

### Header proportions + a11y
| Line | Current | New |
|------|---------|-----|
| 76 | `content-max h-16 flex items-center justify-between` | `content-max h-14 md:h-[72px] flex items-center justify-between` |
| 81 | `aria-label="FixAct Sport home"` | `aria-label="ФиксАкт Спорт — главная"` |
| 83 | `alt="FixAct Sport" className="h-7 w-auto"` | `alt="ФиксАкт Спорт" className="h-6 md:h-7 w-auto"` |

### Nav text size (6 lines)
Lines 90, 98, 106, 115, 125, 134: `text-xs tracking-[0.1em]` -> `text-sm tracking-[0.08em]`

## 2. translations.ts (7 text replacements)

| Line | Change |
|------|--------|
| 58 | `EVERLEGENDS is a digital` -> `ФиксАкт Спорт is a digital` |
| 59 | `EVERLEGENDS создан` -> `ФиксАкт Спорт создан` |
| 96 | `ATTESTATION INDEX EVERLEGENDS` -> `ATTESTATION INDEX — ФиксАкт Спорт` |
| 96 | `АТТЕСТАЦИОННЫЙ ИНДЕКС EVERLEGENDS` -> `АТТЕСТАЦИОННЫЙ ИНДЕКС — ФиксАкт Спорт` |
| 190 | `to use EverLegends` -> `to use ФиксАкт Спорт` |
| 191 | `использовать EverLegends` -> `использовать ФиксАкт Спорт` |
| 222 | `the EverLegends platform` -> `the ФиксАкт Спорт platform` |
| 223 | `платформы EverLegends` -> `платформы ФиксАкт Спорт` |

Em-dash format for Step 03 title to avoid aggressive all-caps Cyrillic.

## 3. Footer.tsx (1 edit)

Line 58: `EVERLEGENDS.` -> `ФиксАкт Спорт.` (mixed case for consistency with the brand style used elsewhere)

## 4. AppErrorBoundary.tsx (1 edit)

Line 22: `EverLegends runtime error` -> `ФиксАкт Спорт runtime error`

## 5. 404.html (1 edit)

Line 6: `<title>EverLegends</title>` -> `<title>ФиксАкт Спорт</title>` (redirect logic on lines 7-24 untouched)

## 6. index.html (title + 5 meta tags)

Line 22: `<title>EVERLEGENDS — Where Merit Is The Only Currency</title>` -> `<title>ФиксАкт Спорт — Where Merit Is The Only Currency</title>`

Insert after line 24 (after apple-touch-icon):
```html
<meta property="og:title" content="ФиксАкт Спорт — Where Merit Is The Only Currency" />
<meta property="og:description" content="Athletic talent verified, ranked, and rewarded." />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="ФиксАкт Спорт" />
<meta name="twitter:card" content="summary_large_image" />
```

## Explicitly NOT changed

- localStorage keys (`everlegends_cookie_ack`, `everlegends_privacy_consent`) -- preserves existing user consents
- Variable names, file names, PDF paths, routing paths, BASE_URL
- Redirect logic in index.html and 404.html
- Package name, technical comments, environment variables

## Files summary

| File | Edit count |
|------|------------|
| Navigation.tsx | 9 |
| translations.ts | 7 |
| Footer.tsx | 1 |
| AppErrorBoundary.tsx | 1 |
| index.html | title + 5 meta |
| 404.html | 1 |

