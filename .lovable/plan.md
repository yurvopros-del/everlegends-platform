

# User Agreement PDF Links — Footer Update

## Overview
Link the uploaded EN and RU User Agreement PDFs to the footer's "User Agreement" button, opening the correct localized document in a new tab.

## Changes

### 1. Store PDFs as static assets
Copy the uploaded files to `public/docs/` with ASCII-only filenames:
- `public/docs/EVERLEGENDS_PLATFORM_USER_AGREEMENT.pdf` (from uploaded EN file)
- `public/docs/EVERLEGENDS_PLATFORM_USER_AGREEMENT_RU.pdf` (from uploaded RU file)

### 2. Update `src/components/Footer.tsx`

Add a frozen locale-to-path mapping above the component:

```tsx
const USER_AGREEMENT_PATH = Object.freeze({
  en: "/docs/EVERLEGENDS_PLATFORM_USER_AGREEMENT.pdf",
  ru: "/docs/EVERLEGENDS_PLATFORM_USER_AGREEMENT_RU.pdf",
} as const);
```

Replace the User Agreement link (line 29) from `href="#"` to:

```tsx
<a
  href={USER_AGREEMENT_PATH[locale]}
  target="_blank"
  rel="noopener noreferrer"
  type="application/pdf"
  className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
>
  {t(translations.footer.terms, locale)}
</a>
```

### What stays the same
- All other footer links (Privacy, Contact, social icons) remain unchanged
- No other components or files are modified

### Behavior
- Opens correct PDF in a new browser tab based on active locale
- Served as a static asset (no React Router involvement)
- CDN and production safe (ASCII filenames only)
- `Object.freeze` prevents accidental mutation
- `rel="noopener noreferrer"` prevents tab-nabbing

