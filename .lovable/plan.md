

# Replace User Agreement PDFs

## Overview
Overwrite the two existing User Agreement PDF files in `public/docs/` with the newly uploaded versions.

## Changes

### 1. Replace `public/docs/EVERLEGENDS_PLATFORM_USER_AGREEMENT.pdf`
Copy from: `user-uploads://✅_FINAL_VERSION_EVERLEGENDS_PLATFORM_USER_AGREEMENT_with_APPENDIX_A.pdf`

### 2. Replace `public/docs/EVERLEGENDS_PLATFORM_USER_AGREEMENT_RU.pdf`
Copy from: `user-uploads://✅_ПОЛЬЗОВАТЕЛЬСКОЕ_СОГЛАШЕНИЕ_ПЛАТФОРМЫ_EVERLEGENDS.pdf`

### What stays the same
- No code changes needed -- `Footer.tsx` already has the correct `USER_AGREEMENT_PATH` mapping and locale-aware link logic
- Filenames remain ASCII-only as before
- All link behavior (new tab, `rel="noopener noreferrer"`, `type="application/pdf"`) is unchanged

