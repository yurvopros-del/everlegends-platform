

# Fix PDF 404s: Replace Hardcoded GH_BASE with Vite Base Path

## Overview
All 4 legal document pages hardcode `GH_BASE = "/everlegends-platform"` for PDF paths, causing 404s when deployed at a different base. Fix by creating a shared `BASE_PATH` helper derived from Vite's `import.meta.env.BASE_URL`.

## Changes (5 files: 1 new, 4 edited)

### 1. `src/lib/basePath.ts` -- New file
```ts
export const BASE_PATH = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
```

### 2. `src/pages/CookiePolicy.tsx` -- Edit
- Remove `const GH_BASE = "/everlegends-platform";`
- Add `import { BASE_PATH } from "@/lib/basePath";`
- Change PDF constant to use `${BASE_PATH}/docs/...`

### 3. `src/pages/PrivacyPolicy.tsx` -- Edit
- Same: remove GH_BASE, import BASE_PATH, update PDF constant

### 4. `src/pages/UserAgreement.tsx` -- Edit
- Same: remove GH_BASE, import BASE_PATH, update PDF constant

### 5. `src/pages/BetaTesting.tsx` -- Edit
- Same: remove GH_BASE, import BASE_PATH, update PDF constant

## What does NOT change
- Routing, translations, Footer, Navigation -- untouched
- Page structure, styling, iframe, viewLang, toggles -- untouched
- PDF files in `public/docs/` -- untouched

