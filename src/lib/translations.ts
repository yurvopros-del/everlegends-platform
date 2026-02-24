export type Locale = "en" | "ru";

export const translations = {
  nav: {
    system: { en: "The System", ru: "Система" },
    rewards: { en: "Rewards", ru: "Награды" },
    cta: { en: "Enter the Arena", ru: "На Арену" },
    joinMobile: { en: "Join", ru: "Войти" },
  },
  hero: {
    subtitle: { en: "The Global Merit Platform", ru: "Глобальная Платформа Заслуг" },
    headline1: { en: "WHERE MERIT IS", ru: "ГДЕ МАСТЕРСТВО —" },
    headline2: { en: "THE ONLY CURRENCY", ru: "ЕДИНСТВЕННАЯ ВАЛЮТА" },
    body: {
      en: "Athletic talent verified, ranked, and rewarded. No connections. No politics. Just performance.",
      ru: "Спортивный талант верифицирован, оценён и вознаграждён. Без связей. Без политики. Только результат.",
    },
    cta: { en: "Enter the Arena", ru: "Войти на Арену" },
  },
  philosophy: {
    headline1: { en: "TALENT SHOULD BE", ru: "ТАЛАНТ ДОЛЖЕН БЫТЬ" },
    headline2: { en: "REWARDED. PERIOD.", ru: "ВОЗНАГРАЖДЁН. ТОЧКА." },
    body: {
      en: "We built EVERLEGENDS because the world's most talented athletes shouldn't need the right connections, the right zip code, or the right algorithm to be seen. Merit is the only filter.",
      ru: "Мы создали EVERLEGENDS, потому что самые талантливые атлеты мира не должны зависеть от связей, географии или алгоритмов. Мастерство — единственный критерий.",
    },
  },
  system: {
    label: { en: "How It Works", ru: "Как Это Работает" },
    title: { en: "THE SYSTEM", ru: "СИСТЕМА" },
    steps: [
      {
        number: "01",
        title: { en: "COMPETE", ru: "СОРЕВНУЙСЯ" },
        description: {
          en: "Enter real athletic challenges designed to measure true ability.",
          ru: "Участвуй в реальных спортивных испытаниях, созданных для оценки истинных способностей.",
        },
      },
      {
        number: "02",
        title: { en: "PROVE", ru: "ДОКАЖИ" },
        description: {
          en: "Your performance is verified, recorded, and ranked transparently.",
          ru: "Твои результаты верифицируются, фиксируются и ранжируются прозрачно.",
        },
      },
      {
        number: "03",
        title: { en: "RISE", ru: "ВОЗВЫСЬСЯ" },
        description: {
          en: "Earn rewards and recognition based on merit alone.",
          ru: "Получай награды и признание исключительно за заслуги.",
        },
      },
    ],
  },
  rewards: {
    label: { en: "Technical Specifications", ru: "Технические Характеристики" },
    title: { en: "THE REWARD SYSTEM", ru: "СИСТЕМА НАГРАД" },
    specs: [
      {
        label: { en: "Verification", ru: "Верификация" },
        value: { en: "Blockchain-backed performance records", ru: "Результаты, подтверждённые блокчейном" },
      },
      {
        label: { en: "Rankings", ru: "Рейтинги" },
        value: { en: "Real-time global leaderboards", ru: "Глобальные таблицы лидеров в реальном времени" },
      },
      {
        label: { en: "Rewards", ru: "Награды" },
        value: { en: "Merit-based token distribution", ru: "Распределение токенов на основе заслуг" },
      },
      {
        label: { en: "Challenges", ru: "Испытания" },
        value: { en: "Weekly & seasonal competitions", ru: "Еженедельные и сезонные соревнования" },
      },
      {
        label: { en: "Eligibility", ru: "Участие" },
        value: { en: "Open to all athletes worldwide", ru: "Открыто для всех атлетов мира" },
      },
      {
        label: { en: "Integrity", ru: "Честность" },
        value: { en: "AI-powered anti-fraud detection", ru: "Антифрод-система на основе ИИ" },
      },
    ],
  },
  download: {
    headline1: { en: "READY TO", ru: "ГОТОВ" },
    headline2: { en: "COMPETE?", ru: "СОРЕВНОВАТЬСЯ?" },
    body: {
      en: "Join thousands of athletes proving their worth on the global stage.",
      ru: "Присоединяйся к тысячам атлетов, доказывающих свою ценность на мировой арене.",
    },
    ios: { en: "Download for iOS", ru: "Скачать для iOS" },
    android: { en: "Download for Android", ru: "Скачать для Android" },
  },
  footer: {
    rights: { en: "All rights reserved.", ru: "Все права защищены." },
    privacy: { en: "Privacy", ru: "Конфиденциальность" },
    terms: { en: "Terms", ru: "Условия" },
    contact: { en: "Contact", ru: "Контакты" },
  },
} as const;

export function t(obj: { en: string; ru: string }, locale: Locale): string {
  return obj[locale];
}
