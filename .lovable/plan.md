

# System Section Update -- Execution-Ready Plan

## Pre-flight checks (both passed)

1. **`t()` compatibility with bullets**: `t()` accepts `{ en: string; ru: string }` and returns the locale string. Each bullet element is `{ en: string, ru: string }` -- identical shape. No issue.
2. **Import naming**: `SystemSection.tsx` line 4 imports `translations` and `t` from `@/lib/translations`. The plan references `translations.system.pool` and calls `t(...)`. Naming is consistent.

---

## Change 1: `src/lib/translations.ts` (lines 65-90)

Replace the `system.steps` array and add `pool` sibling.

### Updated `steps` array (3 items):

**Step 01 -- DIGITAL ANALYSIS**
- title: EN "DIGITAL ANALYSIS" / RU "ЦИФРОВОЙ АНАЛИЗ"
- description: EN "Each test is processed automatically..." / RU "Каждый тест проходит..."
- bullets: 5 items (biomechanical correctness, tempo stability, technical variation, weak-foot usage, dynamic resilience)
- footer: none

**Step 02 -- EXPERT VALIDATION**
- title: EN "EXPERT VALIDATION" / RU "ЭКСПЕРТНАЯ ВАЛИДАЦИЯ"
- description: EN "The system uses a two-layer verification..." / RU "Система использует двухконтурную..."
- bullets: 2 items (anti-fraud analysis, professional referee validation)
- footer: EN "This builds trust in the final metric." / RU "Это обеспечивает доверие к итоговому показателю."

**Step 03 -- ATTESTATION INDEX EVERLEGENDS**
- title: EN "ATTESTATION INDEX EVERLEGENDS" / RU "АТТЕСТАЦИОННЫЙ ИНДЕКС EVERLEGENDS"
- description: EN "The final index is calculated to 0.001 precision..." / RU "Итоговый индекс рассчитывается с точностью до 0,001..."
- bullets: 5 items (quantitative output, technical variation, tempo stability, fatigue resistance, progress dynamics)
- footer: EN "The index can be used for independent selection..." / RU "Индекс используется для независимой селекции..."

### New `pool` object (sibling to `steps`):

```text
system: {
  label: ...,   // unchanged
  title: ...,   // unchanged
  steps: [...], // updated above
  pool: {       // NEW
    title:   { en: "ATTESTATION POOL", ru: "АТТЕСТАЦИОННЫЙ ПУЛ" },
    body:    { en: "Each attestation cycle is formed dynamically.", ru: "Каждый аттестационный цикл формируется динамически." },
    bullets: [ 3 {en,ru} items ],
    footer:  { en: "Distribution is performed automatically...", ru: "Распределение происходит автоматически..." },
  },
}
```

---

## Change 2: `src/components/SystemSection.tsx`

### A) Extend column rendering (after line 47)

Insert conditional bullets + footer inside the existing `.map()` loop, right after the `<p>` body text:

```tsx
{step.bullets && (
  <ul className="mt-3 space-y-1 list-disc list-inside body-text text-sm md:text-base">
    {step.bullets.map((b, j) => <li key={j}>{t(b, locale)}</li>)}
  </ul>
)}
{step.footer && (
  <p className="body-text text-sm md:text-base mt-3">{t(step.footer, locale)}</p>
)}
```

### B) Add Attestation Pool block (after line 50, after grid `</div>`)

```tsx
<motion.div
  className="mt-16 md:mt-20 md:px-10"
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.7, delay: 0.7 }}
>
  <h3 className="text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-[-0.02em] gradient-text mb-4">
    {t(translations.system.pool.title, locale)}
  </h3>
  <p className="body-text text-sm md:text-base">
    {t(translations.system.pool.body, locale)}
  </p>
  <ul className="mt-3 space-y-1 list-disc list-inside body-text text-sm md:text-base">
    {translations.system.pool.bullets.map((b, i) => (
      <li key={i}>{t(b, locale)}</li>
    ))}
  </ul>
  <p className="body-text text-sm md:text-base mt-3">
    {t(translations.system.pool.footer, locale)}
  </p>
</motion.div>
```

---

## Scope

| Item | Value |
|------|-------|
| Files changed | 2 |
| Files created/deleted | 0 |
| Type updates needed | None (no explicit types exist) |
| Grid layout | Untouched |
| Routing / BASE_PATH | Untouched |
| PDF / localStorage | Untouched |
| CTA / buttons added | None |

