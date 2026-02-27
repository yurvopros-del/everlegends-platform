

# Implement User Agreement + Beta Testing Branded Pages

## Overview
Create two new legal document pages and update routing/footer, cloning the CookiePolicy.tsx pattern 1:1. Beta badge uses `β`. No existing pages modified.

---

## Changes (5 files: 2 new, 3 edited)

### 1. `src/lib/translations.ts` -- Add 2 blocks
Add `userAgreementPage` and `betaTestingPage` translation objects (same shape as `cookiePage`) after `privacyPage`.

### 2. `src/pages/UserAgreement.tsx` -- New file
Clone of `CookiePolicy.tsx` with `USER_AGREEMENT_PDF` constant pointing to `EVERLEGENDS_PLATFORM_USER_AGREEMENT.pdf` / `_RU.pdf`, using `translations.userAgreementPage`.

### 3. `src/pages/BetaTesting.tsx` -- New file
Same clone with `BETA_TESTING_PDF` pointing to `EVERLEGENDS_BETA_TESTING_RULES.pdf` / `_RU.pdf`, using `translations.betaTestingPage`.

### 4. `src/App.tsx` -- Add 4 routes + 2 imports
```text
/user-agreement    -> <UserAgreement />
/beta-testing      -> <BetaTesting />
/ru/user-agreement -> <UserAgreement />
/ru/beta-testing   -> <BetaTesting />
```
Placed before the `/ru/*` catch-all.

### 5. `src/components/Footer.tsx` -- Convert 2 links
- Remove dead `USER_AGREEMENT_PATH`, `BETA_TESTING_PATH` constants and their `termsHref`/`betaHref` variables
- User Agreement: `<a>` becomes `<Link to={locale === "ru" ? "/ru/user-agreement" : "/user-agreement"}>`
- Beta Testing: `<a>` becomes `<Link>` with `β` badge (Greek beta, not "B")
- Link order preserved: User Agreement | Privacy Policy | Cookie Policy | Beta Testing | Contact

## What does NOT change
- PrivacyPolicy.tsx, CookiePolicy.tsx -- untouched
- All existing translations -- untouched
- Layout, Navigation, animations -- untouched
- PDF files in public/docs/ -- untouched

## Future optimization (noted, not included)
Abstract all 4 legal pages into a reusable `<LegalDocumentPage />` component to eliminate duplication. Deferred -- not required for correctness.

