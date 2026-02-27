

# System Section Terminology + Pool Block Rename

## Verified: Step 03 title current value
The file currently contains:
- EN: `ATTESTATION INDEX — ФиксАкт Спорт`
- RU: `АТТЕСТАЦИОННЫЙ ИНДЕКС — ФиксАкт Спорт`

These match the plan's "find" strings exactly. No adjustment needed.

## Changes (all in `src/lib/translations.ts`, lines 83-122)

### A. Step 02 (lines 83-92)
- **Title**: `EXPERT VALIDATION` / `ЭКСПЕРТНАЯ ВАЛИДАЦИЯ` -> `EXPERT CONTROL` / `ЭКСПЕРТНЫЙ КОНТРОЛЬ`
- **Bullet 1**: Replace with video authenticity verification text (EN/RU)
- **Bullet 2**: Replace with FixAct Sport referee/VK certification text (EN/RU)
- **Footer**: Replace with regulated verification protocol text (EN/RU)

### B. Step 03 (lines 96, 108)
- **Title**: `ATTESTATION INDEX — ФиксАкт Спорт` / `АТТЕСТАЦИОННЫЙ ИНДЕКС — ФиксАкт Спорт` -> `ATTESTATION INDEX FIXACT SPORT` / `АТТЕСТАЦИОННЫЙ ИНДЕКС ФИКСАКТ СПОРТ`
- **Footer**: Replace with objective evaluation/development monitoring text (EN/RU)

### C. Pool block (lines 112-122)
- **Title**: `ATTESTATION POOL` / `АТТЕСТАЦИОННЫЙ ПУЛ` -> `REGULATIONS FOR FORMING THE ATTESTATION GROUP` / `РЕГЛАМЕНТ ФОРМИРОВАНИЯ АТТЕСТАЦИОННОЙ ГРУППЫ`
- **Body**: `cycle` -> `group` terminology (EN/RU)
- **3 bullets**: Replace all with group-based wording
- **Footer**: Updated wording with `исключающему` (RU)

## Files touched
| File | Edits |
|------|-------|
| `src/lib/translations.ts` | ~12 text replacements |
| `src/components/SystemSection.tsx` | 0 -- renders dynamically from translations |

## Not changed
Layout, grid, animations, routing, BASE_PATH, PDFs, localStorage, component structure, variable names
