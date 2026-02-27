

# Replace Logo Import -- Verified & Ready

## Verification
Line 6 of `src/components/Navigation.tsx` is confirmed to be exactly:
```
import logo from "@/assets/logo.png";
```
Match is exact. No ambiguity.

## Changes

### 1. Copy uploaded asset
- Save `user-uploads://ФиксАкт_Спорт_логотип_на_сайт.png` as `src/assets/fixact-sport-logo.png`

### 2. `src/components/Navigation.tsx` -- 3 line edits
- **Line 6**: `import logo from "@/assets/logo.png"` -> `import logo from "@/assets/fixact-sport-logo.png"`
- **Line 81**: `aria-label="EverLegends home"` -> `aria-label="FixAct Sport home"`
- **Line 83**: `alt="EverLegends"` -> `alt="FixAct Sport"`

### Unchanged
- Variable name `logo` -- same
- JSX `<img src={logo} className="h-7 w-auto" />` -- same
- All routing, BASE_PATH, layout, styles -- same

### Total scope
- 1 new asset file
- 1 file edited, 3 lines changed

