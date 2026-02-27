

# Rebrand: Replace Logo + Audit Report

## STEP 1 -- Replace Header Logo

### Copy asset
- Save uploaded image as `src/assets/fixact-sport-logo.png`

### `src/components/Navigation.tsx` (3 edits)
- Find the current logo import (currently `import logo from "@/assets/logo.png"` at line 6). Replace it with:
  `import logo from "@/assets/fixact-sport-logo.png";`
- Change `alt="EverLegends"` to `alt="FixAct Sport"` (line 83)
- Change `aria-label="EverLegends home"` to `aria-label="FixAct Sport home"` (line 81)
- Keep `h-7 w-auto`, positioning, and homepage link logic unchanged

## STEP 2 -- Audit Report (NO EDITS)

### UI-visible (10)
| # | File | Line | Match | Note |
|---|------|------|-------|------|
| 1 | Navigation.tsx | 83 | `alt="EverLegends"` | Fixed by Step 1 |
| 2 | Navigation.tsx | 81 | `aria-label="EverLegends home"` | Fixed by Step 1 |
| 3 | Footer.tsx | 58 | `EVERLEGENDS.` | Copyright line |
| 4 | AppErrorBoundary.tsx | 22 | `EverLegends runtime error` | Error fallback |
| 5 | translations.ts | 58 | `EVERLEGENDS is a digital environment...` | Philosophy EN |
| 6 | translations.ts | 59 | `EVERLEGENDS создан как цифровая среда...` | Philosophy RU |
| 7 | translations.ts | 157 | `...use EverLegends, you consent...` | Cookie banner EN |
| 8 | translations.ts | 158 | `...использовать EverLegends...` | Cookie banner RU |
| 9 | translations.ts | 189 | `...the EverLegends platform...` | Privacy banner EN |
| 10 | translations.ts | 190 | `...платформы EverLegends...` | Privacy banner RU |

### SEO-meta (1)
| # | File | Line | Match |
|---|------|------|-------|
| 11 | index.html | 22 | `EVERLEGENDS -- Where Merit Is The Only Currency` |

### Infra (5) -- DO NOT TOUCH
| # | File | Line | Match |
|---|------|------|-------|
| 12 | index.html | 10 | `"/everlegends-platform/"` |
| 13 | index.html | 12 | `https://everlegends.com` |
| 14 | index.html | 13 | `"/everlegends-platform"` |
| 15 | public/404.html | 6 | `<title>EverLegends</title>` |
| 16 | public/404.html | 10 | `"/everlegends-platform"` |

### Technical-only (4) -- DO NOT TOUCH
| # | File | Line | Match |
|---|------|------|-------|
| 17 | Navigation.tsx | 22 | `// "/everlegends-platform/"` (comment) |
| 18 | main.tsx | 97 | `// "/everlegends-platform"` (comment) |
| 19 | CookieBanner.tsx | 6 | `"everlegends_cookie_ack"` (localStorage) |
| 20 | CookieBanner.tsx | 7 | `"everlegends_privacy_consent"` (localStorage) |

### Docs-only (4) -- DO NOT TOUCH
| # | File | Line | Match |
|---|------|------|-------|
| 21 | CookiePolicy.tsx | 9-10 | `EVERLEGENDS_COOKIE_POLICY*.pdf` |
| 22 | PrivacyPolicy.tsx | 9-10 | `EVERLEGENDS_PRIVACY_POLICY*.pdf` |
| 23 | UserAgreement.tsx | 9-10 | `EVERLEGENDS_PLATFORM_USER_AGREEMENT*.pdf` |
| 24 | BetaTesting.tsx | 9-10 | `EVERLEGENDS_BETA_TESTING_RULES*.pdf` |

## What this implementation changes
- 1 new asset file
- 1 file edited (Navigation.tsx -- 3 lines)
- Zero other files touched

