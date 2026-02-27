export type Locale = "en" | "ru";

export const translations = {
  nav: {
    system: { en: "The System", ru: "Система" },
    rewards: { en: "Rewards", ru: "Награды" },
    cta: { en: "Request Beta Access", ru: "ЗАПРОСИТЬ Beta ДОСТУП" },
    joinMobile: { en: "Request Beta Access", ru: "Запросить доступ" },
  },
  hero: {
    headline1: { en: "WHERE MERIT IS", ru: "ГДЕ МАСТЕРСТВО —" },
    headline2: { en: "THE ONLY CURRENCY", ru: "ЕДИНСТВЕННАЯ ВАЛЮТА" },
    body: {
      en: "Athletic talent verified, ranked, and rewarded. No connections. No politics. Just performance.",
      ru: "Спортивный талант верифицирован, оценён и вознаграждён. Без связей. Без политики. Только результат.",
    },
    cta: { en: "Request Beta Access", ru: "Запросить доступ" },
    slideLabel: { en: "Slide", ru: "Слайд" },
  },
  heroSlides: [
    {
      headline: { en: "GLORY BELONGS TO THE FEARLESS", ru: "СЛАВА ПРИНАДЛЕЖИТ БЕССТРАШНЫМ" },
      tagline: { en: "Real prizes for real performance.", ru: "Реальные призы за реальные результаты." },
    },
    {
      headline: { en: "THE ARENA AWAITS", ru: "ТВОЙ ВЫХОД НА АРЕНУ!" },
      tagline: { en: "Thousands already record results worldwide.", ru: "Сильные результаты видят во всём мире." },
    },
    {
      headline: { en: "HEAD UP, GAME ON", ru: "УМНЫЙ КОНТРОЛЬ" },
      tagline: { en: "The ball obeys the composed. Control the chaos.", ru: "Думай головой. Мяч послушен, когда разум спокоен." },
    },
    {
      headline: { en: "AMBIDEXTROUS POWER", ru: "ТЕХНИЧЕСКАЯ ГАРМОНИЯ" },
      tagline: { en: "A true footballer has no weak foot. Only two weapons.", ru: "У футболиста нет «слабой» ноги. Есть вторая рабочая." },
    },
    {
      headline: { en: "THE CLASSICAL SCHOOL", ru: "ЧИСТОТА ШКОЛЫ" },
      tagline: { en: "Every touch is the signature of a master.", ru: "Каждое касание — как почерк мастера." },
    },
    {
      headline: { en: "TAKE YOUR PLACE IN THE RANKING", ru: "ЗАЙМИ СВОЁ МЕСТО В РЕЙТИНГЕ" },
      tagline: { en: "Verified. Recorded. Ranked.", ru: "Проверено. Оценено. Зафиксировано." },
    },
    {
      headline: { en: "CLAIM YOUR STATUS", ru: "ВРЕМЯ ПОКАЗАТЬ КЛАСС" },
      tagline: { en: "Your score is your verified technical ID. Step up.", ru: "Твой рейтинг — твои повышенные шансы пропуска в большой футбол." },
    },
    {
      headline: { en: "OWN THE TEMPO", ru: "ПОЙМАЙ СВОЙ РИТМ" },
      tagline: { en: "Find your flow. Command the pulse of the match.", ru: "Диктуй темп игры. Будь дирижером на поле." },
    },
  ],
  philosophy: {
    headline1: { en: "MASTERY. WORK. RESULTS.", ru: "МАСТЕРСТВО. ТРУД. РЕЗУЛЬТАТ." },
    headline2: { en: "", ru: "" },
    body: {
      en: "EVERLEGENDS is a digital environment where submitted results are recorded, technologically verified, and compared based on objective data. Only confirmed results are reflected in the ranking.",
      ru: "EVERLEGENDS создан как цифровая среда, где результаты фиксируются, проверяются и сравниваются на основе объективных данных. Здесь значение имеет только подтверждённый результат.",
    },
  },
  system: {
    label: { en: "How It Works", ru: "Как Это Работает" },
    title: { en: "THE SYSTEM", ru: "СИСТЕМА" },
    steps: [
      {
        number: "01",
        title: { en: "DIGITAL ANALYSIS", ru: "ЦИФРОВОЙ АНАЛИЗ" },
        description: {
          en: "Each test is processed automatically using computer vision and measurable parameters.",
          ru: "Каждый тест проходит автоматизированную обработку на основе компьютерного зрения и измеряемых параметров.",
        },
        bullets: [
          { en: "biomechanical correctness", ru: "биомеханическая корректность" },
          { en: "tempo stability", ru: "темповая стабильность" },
          { en: "technical variation", ru: "техническая вариативность" },
          { en: "weak-foot usage", ru: "использование слабой ноги" },
          { en: "dynamic resilience", ru: "динамическая устойчивость" },
        ],
      },
      {
        number: "02",
        title: { en: "EXPERT VALIDATION", ru: "ЭКСПЕРТНАЯ ВАЛИДАЦИЯ" },
        description: {
          en: "The system uses a two-layer verification process for results.",
          ru: "Система использует двухконтурную проверку результатов.",
        },
        bullets: [
          { en: "anti-fraud analysis (editing, speed changes, digital manipulation)", ru: "антифрод-анализ (монтаж, ускорение, цифровые вмешательства)" },
          { en: "professional referee validation for rating-eligible results", ru: "профессиональная судейская верификация рейтинговых результатов" },
        ],
        footer: { en: "This builds trust in the final metric.", ru: "Это обеспечивает доверие к итоговому показателю." },
      },
      {
        number: "03",
        title: { en: "ATTESTATION INDEX EVERLEGENDS", ru: "АТТЕСТАЦИОННЫЙ ИНДЕКС EVERLEGENDS" },
        description: {
          en: "The final index is calculated to 0.001 precision and is based on measurable performance indicators.",
          ru: "Итоговый индекс рассчитывается с точностью до 0,001 и формируется на основе измеряемых параметров.",
        },
        bullets: [
          { en: "quantitative output", ru: "количественный результат" },
          { en: "technical variation", ru: "техническая вариативность" },
          { en: "tempo stability", ru: "стабильность темпа" },
          { en: "fatigue resistance", ru: "устойчивость к утомлению" },
          { en: "progress dynamics", ru: "динамика прогресса" },
        ],
        footer: { en: "The index can be used for independent selection and development monitoring.", ru: "Индекс используется для независимой селекции и мониторинга развития." },
      },
    ],
    pool: {
      title: { en: "ATTESTATION POOL", ru: "АТТЕСТАЦИОННЫЙ ПУЛ" },
      body: { en: "Each attestation cycle is formed dynamically.", ru: "Каждый аттестационный цикл формируется динамически." },
      bullets: [
        { en: "one pool includes up to 500 participants", ru: "один пул включает до 500 участников" },
        { en: "if exceeded, the next pool is created automatically", ru: "при превышении автоматически создается следующий пул" },
        { en: "if underfilled, the cycle continues until the minimum threshold is reached", ru: "при недоборе цикл продолжается до достижения минимального порога" },
      ],
      footer: {
        en: "Distribution is performed automatically under an approved rating algorithm, excluding subjective influence.",
        ru: "Распределение происходит автоматически по утвержденному алгоритму расчета рейтинга, исключая субъективное влияние.",
      },
    },
  },
  rewards: {
    title: { en: "INCENTIVE PROGRAMS", ru: "ПООЩРИТЕЛЬНЫЕ ПРОГРАММЫ" },
    positions: [
      {
        position: { en: "1ST PLACE", ru: "1-Е МЕСТО" },
        prize: "$2,500",
        winners: { en: "One winner", ru: "Один победитель" },
      },
      {
        position: { en: "TOP 2", ru: "ТОП-2" },
        prize: "$1,000",
        winners: { en: "Two winners", ru: "Два победителя" },
      },
      {
        position: { en: "TOP 3", ru: "ТОП-3" },
        prize: "$500",
        winners: { en: "Three winners", ru: "Три победителя" },
      },
      {
        position: { en: "TOP 100", ru: "ТОП-100" },
        prize: "$20",
        winners: { en: "Hundred winners", ru: "Сто победителей" },
      },
    ],
    total: {
      value: "$7,500",
      label: { en: "Per Event", ru: "За Событие" },
    },
    specs: [
      {
        label: { en: "Eligibility", ru: "Участие" },
        value: { en: "Open to all athletes worldwide", ru: "Открыто для всех атлетов мира" },
      },
      {
        label: { en: "Integrity", ru: "Контроль достоверности" },
        value: { en: "AI-powered anti-fraud detection", ru: "Антифрод-система на основе ИИ" },
      },
    ],
    disclaimer: {
      en: "Incentive programs are voluntary and may be changed or discontinued at the Operator's discretion.",
      ru: "Поощрительные программы носят добровольный характер и могут быть изменены или прекращены.",
    },
  },
  download: {
    headline1: { en: "READY TO", ru: "ГОТОВ" },
    headline2: { en: "SUBMIT RESULTS?", ru: "ПРЕДСТАВИТЬ РЕЗУЛЬТАТ?" },
    body: {
      en: "Showcase your performance on the global stage.",
      ru: "Стань частью поколения победителей. Докажи силу на мировой арене.",
    },
    ios: { en: "Request Beta Access (iOS)", ru: "Запросить доступ (iOS)" },
    android: { en: "Request Beta Access (Android)", ru: "Запросить доступ (Android)" },
    betaNote: { en: "Closed beta. Selected participants receive early access.", ru: "Закрытая бета. Выбранные участники получают ранний доступ." },
  },
  footer: {
    rights: { en: "All rights reserved.", ru: "Все права защищены." },
    operator: { en: 'Operator: LLC "CTT Etalon"', ru: 'Оператор: ООО «ЦТТ Эталон»' },
    privacy: { en: "Privacy Policy", ru: "Политика конфиденциальности" },
    terms: { en: "User Agreement", ru: "Пользовательское соглашение" },
    contact: { en: "Contact", ru: "Контакты" },
    beta: { en: "Beta Testing", ru: "Бета-тестирование" },
    cookiePolicy: { en: "Cookie Policy", ru: "Политика Cookie" },
  },
  cookieBanner: {
    text: {
      en: "This website uses cookies to ensure platform functionality and analytics. By continuing to use EverLegends, you consent to cookie use.",
      ru: "Этот сайт использует файлы cookie для обеспечения работы платформы и аналитики. Продолжая использовать EverLegends, вы соглашаетесь на использование cookie.",
    },
    learnMore: { en: "Learn more", ru: "Подробнее" },
    ok: { en: "OK", ru: "OK" },
  },
  cookiePage: {
    title: { en: "Cookie Policy", ru: "Политика Cookie" },
    enVersion: { en: "English version", ru: "English version" },
    ruVersion: { en: "Русская версия", ru: "Русская версия" },
    download: { en: "Download PDF", ru: "Скачать PDF" },
  },
  privacyPage: {
    title: { en: "Privacy Policy", ru: "Политика конфиденциальности" },
    enVersion: { en: "English version", ru: "English version" },
    ruVersion: { en: "Русская версия", ru: "Русская версия" },
    download: { en: "Download PDF", ru: "Скачать PDF" },
  },
  userAgreementPage: {
    title: { en: "User Agreement", ru: "Пользовательское соглашение" },
    enVersion: { en: "English version", ru: "English version" },
    ruVersion: { en: "Русская версия", ru: "Русская версия" },
    download: { en: "Download PDF", ru: "Скачать PDF" },
  },
  betaTestingPage: {
    title: { en: "Beta Testing", ru: "Бета-тестирование" },
    enVersion: { en: "English version", ru: "English version" },
    ruVersion: { en: "Русская версия", ru: "Русская версия" },
    download: { en: "Download PDF", ru: "Скачать PDF" },
  },
  privacyBanner: {
    text: {
      en: "We process personal data to operate the EverLegends platform, provide analytical services, and improve functionality.",
      ru: "Мы обрабатываем персональные данные для работы платформы EverLegends, предоставления аналитических сервисов и улучшения функциональности.",
    },
    privacyLink: { en: "Privacy Policy", ru: "Политикой конфиденциальности" },
    and: { en: "and", ru: "и" },
    cookieLink: { en: "Cookie Policy", ru: "Политикой Cookie" },
    accept: { en: "Accept", ru: "Принять" },
    decline: { en: "Decline", ru: "Отклонить" },
  },
  notFound: {
    message: { en: "Oops! Page not found", ru: "Страница не найдена" },
    backHome: { en: "Return to Home", ru: "Вернуться на главную" },
  },
} as const;

export function t(obj: { en: string; ru: string }, locale: Locale): string {
  return obj[locale];
}
