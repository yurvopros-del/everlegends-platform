

# Privacy Policy Page + Personal Data Consent Banner (Hardened)

## Overview
Add Privacy Policy PDFs, create a dedicated page, update footer links, and replace the cookie-only banner with a combined Privacy/Data consent banner -- incorporating all 5 hardening tweaks.

## 1. Store PDFs as Static Assets

Copy uploaded files to `public/docs/`:
- `EVERLEGENDS_PRIVACY_POLICY.pdf` (English)
- `EVERLEGENDS_PRIVACY_POLICY_RU.pdf` (Russian)

## 2. Translation Keys

Add to `src/lib/translations.ts`:

- `privacyPage` block: title, enVersion, ruVersion, download (mirrors `cookiePage`)
- `privacyBanner` block with **corrected copy** (tweak #4 -- removes "by continuing you agree" phrasing since Decline is offered):
  - Text: "We process personal data to operate the EverLegends platform, provide analytical services, and improve functionality."
  - Followed by inline links: "Privacy Policy" and "Cookie Policy"
  - Buttons: Accept / Decline
- `footer.privacy` key already exists, no change needed

## 3. Create Privacy Policy Page

New file: `src/pages/PrivacyPolicy.tsx`

Mirrors `CookiePolicy.tsx` exactly:
- Navigation + Footer
- Localized heading
- Language toggle ("English version" / "Русская версия")
- Download PDF link
- Embedded `<iframe>` viewer
- Locale derived from `useLanguage()` hook (tweak #5 -- same pattern as CookiePolicy, locale comes from route prefix via LanguageProvider)

## 4. Add Routes

In `src/App.tsx`:
```
/privacy-policy    -> <PrivacyPolicy />
/ru/privacy-policy -> <PrivacyPolicy />
```

## 5. Update Footer (tweak #3 -- consistent link types)

In `src/components/Footer.tsx`:
- Replace the `<a href="#">` Privacy Policy placeholder with a `<Link>` to `/privacy-policy` or `/ru/privacy-policy`
- Both Privacy Policy and Cookie Policy use `<Link>` (page routes with embedded viewers)
- User Agreement stays as `<a>` (direct PDF, new tab) -- this is intentional since it has no dedicated page
- Reorder to match requested structure: User Agreement | Privacy Policy | Cookie Policy | Beta Testing | Contact

## 6. Replace Cookie Banner with Combined Consent Banner

Modify `src/components/CookieBanner.tsx`:

### localStorage handling (tweaks #1 and #2):

```ts
function safeGetItem(key: string): string | null {
  if (typeof window === "undefined") return null;
  try { return localStorage.getItem(key); } catch { return null; }
}

function safeSetItem(key: string, value: string): void {
  if (typeof window === "undefined") return;
  try { localStorage.setItem(key, value); } catch {}
}
```

### Backward compatibility migration (tweak #2):
On mount, if `everlegends_cookie_ack` exists but `everlegends_privacy_consent` does not:
- Set `everlegends_privacy_consent = "accepted"`
- Then hide banner
- This makes the old key a one-time migration source, not a permanent dependency

### New key: `everlegends_privacy_consent`
- Values: `"accepted"` or `"declined"`

### Accept behavior:
- Store `"accepted"`, hide banner

### Decline behavior:
- Store `"declined"`, hide banner
- Records refusal state for future analytics gating (no analytics scripts currently active)

### Exported helper:
```ts
export function getPrivacyConsent(): "accepted" | "declined" | null {
  return safeGetItem("everlegends_privacy_consent") as any;
}
```

### Banner UI (tweak #4 -- corrected copy):
```text
+------------------------------------------------------------------+
| We process personal data to operate the EverLegends platform,    |
| provide analytical services, and improve functionality.          |
| Privacy Policy and Cookie Policy.                                |
|                                        [ Decline ]  [ Accept ]   |
+------------------------------------------------------------------+
```

- "Privacy Policy" links to `/privacy-policy` (or `/ru/privacy-policy`)
- "Cookie Policy" links to `/cookie-policy` (or `/ru/cookie-policy`)
- Decline button: outline style (border, muted text)
- Accept button: filled style (matching CTA conventions)
- Mobile: text stacks above buttons, buttons remain side by side

## 7. Registration Checkbox -- Deferred

No registration page exists. Will implement when registration flow is built.

---

## Technical Summary

### Files changed:
```
public/docs/EVERLEGENDS_PRIVACY_POLICY.pdf       (new - from upload)
public/docs/EVERLEGENDS_PRIVACY_POLICY_RU.pdf     (new - from upload)
src/pages/PrivacyPolicy.tsx                        (new)
src/lib/translations.ts                            (modified - add privacyPage + privacyBanner)
src/components/CookieBanner.tsx                    (modified - becomes consent banner)
src/components/Footer.tsx                          (modified - Privacy Policy link)
src/App.tsx                                        (modified - add routes)
```

### Hardening tweaks incorporated:
1. localStorage guarded with `typeof window` and try/catch
2. Old `everlegends_cookie_ack` key migrated to new key on first encounter
3. Footer links consistent: pages use `<Link>`, direct PDFs use `<a>`
4. Banner copy removes "by continuing you agree" (inconsistent with Decline option)
5. Locale derived from `useLanguage()` hook (route-prefix based, same as CookiePolicy)

