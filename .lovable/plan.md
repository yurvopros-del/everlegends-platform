

# IMPLEMENTATION TASK -- DO NOT REWRITE COPY

Exact string replacements across 4 files. All source strings verified against current file contents.

---

## File 1: `src/lib/translations.ts` (~17 edits)

### nav.joinMobile (line 8)
- EN: `"Join"` -> `"Enter the Arena"`
- RU: `"Войти"` -> `"На Арену"`

### DELETE hero.subtitle (line 11)
Remove: `subtitle: { en: "The Global Merit Platform", ru: "Глобальная Платформа Заслуг" },`

### hero.cta (line 18)
- EN: `"Enter the Arena"` -> `"Enter the Platform"`
- RU: `"Войти на Арену"` -> `"Перейти на Арену"`

### philosophy.headline1 (line 21)
- EN: `"MASTERY AND HARD WORK"` -> `"MASTERY. WORK. RESULTS."`
- RU: `"МАСТЕРСТВО И ТРУД"` -> `"МАСТЕРСТВО. ТРУД. РЕЗУЛЬТАТ."`

### philosophy.headline2 (line 22)
- EN: `"SHOULD BE REWARDED. PERIOD."` -> `""`
- RU: `"ДОЛЖНЫ БЫТЬ ВОЗНАГРАЖДЕНЫ. ТОЧКА."` -> `""`

### philosophy.body (lines 23-26)
- EN: -> `"EVERLEGENDS is a digital environment where submitted results are recorded, technologically verified, and compared based on objective data. Only confirmed results are reflected in the ranking."`
- RU: -> `"EVERLEGENDS создан как цифровая среда, где результаты фиксируются, проверяются и сравниваются на основе объективных данных. Здесь значение имеет только подтверждённый результат."`

### system.steps[0] (lines 34-37)
- title EN: `"COMPETE"` -> `"SUBMIT RESULTS"`
- title RU: `"СОРЕВНУЙСЯ"` -> `"ПРЕДСТАВЬ РЕЗУЛЬТАТ"`
- description EN: -> `"Submit materials for analytical evaluation of a physical performance result."`
- description RU: -> `"Представь материалы для аналитической оценки физического результата."`

### system.steps[1] (lines 42-45)
- title EN: `"WIN"` -> `"TECH VERIFICATION"`
- title RU: no change (`"ТЕХНОЛОГИЧЕСКАЯ ПРОВЕРКА"`)
- description EN: -> `"Results undergo technological verification and are included in the ranking."`
- description RU: -> `"Результаты проходят технологическую верификацию и включаются в рейтинг."`

### system.steps[2] (lines 50-53)
- title EN: `"BE REWARDED"` -> `"GAIN RECOGNITION"`
- title RU: `"ВЫИГРЫВАЙ"` -> `"ПОЛУЧАЙ ПРИЗНАНИЕ"`
- description EN: -> `"Separate incentive programs may be offered at the Operator's discretion."`
- description RU: -> `"Отдельные программы поощрения могут предоставляться Оператором."`

### DELETE rewards.label (line 59)
Remove: `label: { en: "The Prize Pool", ru: "Призовой Фонд" },`

### rewards.title (line 60)
- EN: `"REWARDS"` -> `"INCENTIVE PROGRAMS"`
- RU: stays `"ПООЩРИТЕЛЬНЫЕ ПРОГРАММЫ"`

### rewards.specs[1].label (line 93)
- RU: `"Честность"` -> `"Контроль достоверности"`

### ADD rewards.disclaimer (after specs array, inside rewards object -- before line 97 closing brace)
```text
disclaimer: {
  en: "Incentive programs are voluntary and may be changed or discontinued at the Operator's discretion.",
  ru: "Поощрительные программы носят добровольный характер и могут быть изменены или прекращены.",
},
```

### download.headline2 (line 100)
- EN: `"COMPETE?"` -> `"SUBMIT RESULTS?"`
- RU: `"СОРЕВНОВАТЬСЯ?"` -> `"ПРЕДСТАВИТЬ РЕЗУЛЬТАТ?"`

---

## File 2: `src/components/HeroSection.tsx` -- Slides + accessibility

### Slide text replacements (exact current strings verified)

| Slide | Field | Current EN | New EN | Current RU | New RU |
|-------|-------|-----------|--------|-----------|--------|
| 1 | headline | RISE ABOVE THE NOISE | ONLY THE STRONGEST STAND OUT | ПОДНИМИСЬ НАД ШУМОМ | ВЫХОДЯТ СИЛЬНЕЙШИЕ |
| 1 | tagline | Your talent deserves a global stage. | Your results deserve recognition. | Твой талант заслуживает мировой сцены. | Результат должен быть признан. |
| 4 | tagline | A global community united by merit. | A global community united by results. | Глобальное сообщество, объединённое заслугами. | Сильнейшие объединяются результатом. |
| 5 | headline | OUTWORK EVERYONE | PROVE YOUR LEVEL | ПРЕВЗОЙДИ КАЖДОГО | ДОКАЖИ УРОВЕНЬ |
| 5 | tagline | Where effort is the only currency. | Only verified results are counted. | Где усилие — единственная валюта. | Здесь учитывается только результат. |
| 6 | tagline | Inspire the next generation of champions. | Your results shape the future of the ranking. | Вдохновляй следующее поколение чемпионов. | Твой результат формирует будущее рейтинга. |
| 7 | headline | EARN YOUR RANK | TAKE YOUR PLACE IN THE RANKING | ЗАСЛУЖИ СВОЙ РАНГ | ЗАЙМИ СВОЁ МЕСТО В РЕЙТИНГЕ |
| 7 | tagline | Verified. Ranked. Rewarded. | Verified. Recorded. Ranked. | Верифицирован. Оценён. Вознаграждён. | Проверено. Оценено. Зафиксировано. |
| 8 | tagline | Join thousands proving their worth worldwide. | Thousands already record results worldwide. | Присоединяйся к тысячам, доказывающим свою ценность. | Тысячи уже фиксируют результаты по всему миру. |

Slides 2, 3 unchanged.

### Dot indicator (line 187)
Replace `aria-label={\`Slide \${i + 1}\`}` with:
```text
aria-label={`${locale === "ru" ? "Слайд" : "Slide"} ${i + 1}`}
```

---

## File 3: `src/components/PhilosophySection.tsx`

Add const before return (after line 9):
```text
const h2 = t(translations.philosophy.headline2, locale)?.trim();
```

Replace lines 23-25:
```text
{t(translations.philosophy.headline1, locale)}
<br />
<span className="gradient-text">{t(translations.philosophy.headline2, locale)}</span>
```
with:
```text
{t(translations.philosophy.headline1, locale)}
{h2 && (
  <>
    <br />
    <span className="gradient-text">{h2}</span>
  </>
)}
```

---

## File 4: `src/components/RewardsSection.tsx`

Add const after line 24:
```text
const disclaimer = t(translations.rewards.disclaimer, locale)?.trim();
```

Add after specs closing `</div>` (after line 152):
```text
{disclaimer && (
  <motion.p
    className="text-xs text-muted-foreground text-center mt-8 tracking-wide"
    initial={{ opacity: 0 }}
    animate={isInView ? { opacity: 1 } : {}}
    transition={{ duration: 0.6, delay: 0.7 }}
  >
    {disclaimer}
  </motion.p>
)}
```

---

## Post-update verification

1. Visual check: Hero slides, Philosophy spacing, Rewards disclaimer on mobile
2. Forbidden term scan -- none should remain in UI:
   - RU: `соревн`, `выигр`, `конкурс`, `турнир`
   - EN: `COMPETE`, `WIN` (as title), `REWARDED`, `competition`, `contest`

## Summary

- 4 files modified
- ~35 exact text replacements (EN + RU)
- 2 unused keys deleted
- 1 new key added (rewards.disclaimer)
- 2 const extractions with .trim() guards
- 1 accessibility fix
