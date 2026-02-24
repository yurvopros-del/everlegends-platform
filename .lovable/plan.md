

# Cookie Policy Page + Cookie Notice Banner

## Overview
Add Cookie Policy PDFs as static assets, create a dedicated Cookie Policy page with embedded PDF viewer and language toggle, add a "Cookie Policy" link to the footer, and implement a lightweight RF-compliant cookie notice banner.

## 1. Store PDFs as Static Assets

Copy uploaded files to `public/docs/`:
- `public/docs/EVERLEGENDS_COOKIE_POLICY.pdf` (English)
- `public/docs/EVERLEGENDS_COOKIE_POLICY_RU.pdf` (Russian)

## 2. Add Translation Keys

In `src/lib/translations.ts`, add:

```ts
cookie: {
  policy: { en: "Cookie Policy", ru: "Политика Cookie" },
},
// inside footer:
cookiePolicy: { en: "Cookie Policy", ru: "Политика Cookie" },
// cookie banner:
cookieBanner: {
  text: {
    en: "This website uses cookies to ensure platform functionality and analytics. By continuing to use EverLegends, you consent to cookie use.",
    ru: "Этот сайт использует файлы cookie для обеспечения работы платформы и аналитики. Продолжая использовать EverLegends, вы соглашаетесь на использование cookie.",
  },
  learnMore: { en: "Learn more", ru: "Подробнее" },
  ok: { en: "OK", ru: "OK" },
},
```

## 3. Create Cookie Policy Page

New file: `src/pages/CookiePolicy.tsx`

- Full-page layout with Navigation and Footer
- Heading: "Cookie Policy" (localized)
- Two clearly labeled links/buttons: "English version" / "Русская версия"
- Each opens the respective PDF in a new tab
- Embedded PDF viewer (`<iframe>`) showing the locale-appropriate PDF by default
- Consistent with site branding (dark background, muted foreground text, content-max container)

## 4. Add Routes

In `src/App.tsx`, add:
```
/cookie-policy    -> <CookiePolicy />
/ru/cookie-policy -> <CookiePolicy />
```

## 5. Update Footer

In `src/components/Footer.tsx`:
- Add a "Cookie Policy" link after "Privacy Policy", using a `<Link>` (react-router) pointing to `/cookie-policy` or `/ru/cookie-policy` based on locale
- Same styling as existing footer links, separated by pipe divider

## 6. Create Cookie Banner Component

New file: `src/components/CookieBanner.tsx`

Behavior:
- On mount, check `localStorage` for key `everlegends_cookie_ack`
- If not set, show banner; if set, render nothing
- On "OK" click, set `localStorage` key and hide banner
- Banner auto-dismisses after any navigation (optional, OK button is primary)

UI:
- Fixed to bottom of screen (`fixed bottom-0 left-0 right-0 z-40`)
- Dark surface background (`bg-card/95 backdrop-blur-md`) with top border
- Text in `text-xs text-muted-foreground`, "Learn more" as inline link to cookie policy page
- Small "OK" button on the right, styled with existing muted/outline conventions
- Mobile-friendly: text wraps, button stays accessible
- Does NOT block scrolling or interaction with the page beneath

## 7. Mount Cookie Banner

In `src/pages/Index.tsx`, add `<CookieBanner />` at the bottom of the component tree (or in `App.tsx` outside Routes for global coverage -- placing in App.tsx is better so it appears on all pages including the cookie policy page itself).

## Technical Details

### File structure changes:
```
public/docs/EVERLEGENDS_COOKIE_POLICY.pdf       (new)
public/docs/EVERLEGENDS_COOKIE_POLICY_RU.pdf     (new)
src/pages/CookiePolicy.tsx                        (new)
src/components/CookieBanner.tsx                   (new)
src/lib/translations.ts                           (modified)
src/components/Footer.tsx                         (modified)
src/App.tsx                                       (modified)
```

### localStorage key: `everlegends_cookie_ack`
- Value: `"1"` (simple truthy string)
- No expiry needed for RF compliance (acknowledgement, not consent)

### Cookie Banner layout (mobile + desktop):
```text
+------------------------------------------------------+
| This website uses cookies... Learn more    [ OK ]    |
+------------------------------------------------------+
```

On mobile, text stacks above the button.

