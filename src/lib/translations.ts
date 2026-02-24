export type Locale = "en" | "ru";

export const translations = {
  nav: {
    system: { en: "The System", ru: "Система" },
    rewards: { en: "Rewards", ru: "Награды" },
    cta: { en: "Enter the Arena", ru: "На Арену" },
    joinMobile: { en: "Enter the Arena", ru: "На Арену" },
  },
  hero: {
    headline1: { en: "WHERE MERIT IS", ru: "ГДЕ МАСТЕРСТВО —" },
    headline2: { en: "THE ONLY CURRENCY", ru: "ЕДИНСТВЕННАЯ ВАЛЮТА" },
    body: {
      en: "Athletic talent verified, ranked, and rewarded. No connections. No politics. Just performance.",
      ru: "Спортивный талант верифицирован, оценён и вознаграждён. Без связей. Без политики. Только результат.",
    },
    cta: { en: "Enter the Platform", ru: "Перейти на Арену" },
  },
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
        title: { en: "SUBMIT RESULTS", ru: "ПРЕДСТАВЬ РЕЗУЛЬТАТ" },
        description: {
          en: "Submit materials for analytical evaluation of a physical performance result.",
          ru: "Представь материалы для аналитической оценки физического результата.",
        },
      },
      {
        number: "02",
        title: { en: "TECH VERIFICATION", ru: "ТЕХНОЛОГИЧЕСКАЯ ПРОВЕРКА" },
        description: {
          en: "Results undergo technological verification and are included in the ranking.",
          ru: "Результаты проходят технологическую верификацию и включаются в рейтинг.",
        },
      },
      {
        number: "03",
        title: { en: "GAIN RECOGNITION", ru: "ПОЛУЧАЙ ПРИЗНАНИЕ" },
        description: {
          en: "Separate incentive programs may be offered at the Operator's discretion.",
          ru: "Отдельные программы поощрения могут предоставляться Оператором.",
        },
      },
    ],
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
      en: "Join thousands of athletes proving their worth on the global stage.",
      ru: "Стань частью поколения победителей. Докажи силу на мировой арене.",
    },
    ios: { en: "Download for iOS", ru: "Скачать для iOS" },
    android: { en: "Download for Android", ru: "Скачать для Android" },
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
} as const;

export function t(obj: { en: string; ru: string }, locale: Locale): string {
  return obj[locale];
}
