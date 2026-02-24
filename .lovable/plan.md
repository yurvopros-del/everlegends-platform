

# Remove TikTok and Telegram Social Icons from Footer

## Scope
Minimal, surgical removal in `src/components/Footer.tsx`. No layout, styling, or structural changes.

## Change 1 -- Remove unused SVG component definitions (lines 15-25)

Delete the `TikTokIcon` and `TelegramIcon` component definitions entirely. These are local to this file and not used elsewhere.

## Change 2 -- Remove icon link elements (lines 81-86)

Delete the two `<a>` elements wrapping the icons:

```tsx
// DELETE these 6 lines:
<a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="TikTok">
  <TikTokIcon />
</a>
<a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Telegram">
  <TelegramIcon />
</a>
```

The parent `<div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">` container remains intact with the navigation links inside it.

## What is NOT changed
- Footer layout containers, spacing, styling
- Navigation links (Terms, Privacy, Cookie, Beta, Contact)
- Copyright block
- Separator characters
- All imports from external packages
- Component name and export

## File
```
src/components/Footer.tsx   (modified)
```
