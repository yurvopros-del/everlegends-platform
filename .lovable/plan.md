

# Global Russian Typography Safeguard

## Problem
Russian words break mid-character (e.g., "ТЕХНОЛОГИЧЕСКА / Я"), which is unacceptable for Cyrillic typography.

## Solution
Add a CSS rule in `src/index.css` using the `:lang(ru)` selector, and set `lang="ru"` on the page wrapper when the Russian locale is active.

## Changes

### 1. `src/index.css` -- Add Cyrillic typography rule

Add to the `@layer base` block:

```css
:lang(ru) {
  word-break: keep-all;
  overflow-wrap: normal;
  hyphens: none;
}
```

This prevents mid-word breaking for all elements under a `lang="ru"` container, while leaving English completely unaffected.

### 2. `src/pages/Index.tsx` -- Set `lang` attribute on page root

Use the `useLanguage()` hook to conditionally set `lang="ru"` on the `<main>` element:

```tsx
const locale = useLanguage();
return (
  <main className="bg-background min-h-screen" lang={locale}>
    ...
  </main>
);
```

### 3. `src/pages/CookiePolicy.tsx` and `src/pages/PrivacyPolicy.tsx`

Apply the same `lang={locale}` pattern to their root elements for consistency.

### 4. `src/components/SystemSection.tsx` -- Remove now-redundant fix

Remove the `break-words overflow-visible` classes from the heading that were added as a local fix, since the global rule now handles this properly.

## Files Modified
```
src/index.css              (add :lang(ru) rule)
src/pages/Index.tsx        (add lang={locale} to <main>)
src/pages/CookiePolicy.tsx (add lang={locale})
src/pages/PrivacyPolicy.tsx(add lang={locale})
src/components/SystemSection.tsx (remove redundant classes)
```

## What is NOT changed
- Fonts, font sizes, layout spacing
- English typography behavior
- Component structure or naming
