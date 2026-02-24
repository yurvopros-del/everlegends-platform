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
    headline1: { en: "MASTERY AND HARD WORK", ru: "МАСТЕРСТВО И ТРУД" },
    headline2: { en: "SHOULD BE REWARDED. PERIOD.", ru: "ДОЛЖНЫ БЫТЬ ВОЗНАГРАЖДЕНЫ. ТОЧКА." },
    body: {
      en: "We built EVERLEGENDS because the world's most talented and hardest-training athletes shouldn't need the right connections, the right zip code, or the right algorithm to be seen. Merit and dedication are the only filters.",
      ru: "Мы создали EVERLEGENDS, потому что самые талантливые и упорно тренирующиеся атлеты мира не должны зависеть от связей, географии или алгоритмов. Мастерство и преданность делу — единственные критерии.",
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
        title: { en: "WIN", ru: "ТЕХНОЛОГИЧЕСКАЯ ПРОВЕРКА" },
        description: {
          en: "Your performance is verified, recorded, and ranked against the world's best.",
          ru: "Твои результаты верифицируются, фиксируются и сравниваются с лучшими в мире.",
        },
      },
      {
        number: "03",
        title: { en: "BE REWARDED", ru: "ВЫИГРЫВАЙ" },
        description: {
          en: "Earn real prizes and global recognition based on merit alone.",
          ru: "Получай реальные призы и мировое признание исключительно за заслуги.",
        },
      },
    ],
  },
  rewards: {
    label: { en: "The Prize Pool", ru: "Призовой Фонд" },
    title: { en: "REWARDS", ru: "ПООЩРИТЕЛЬНЫЕ ПРОГРАММЫ" },
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
  },
} as const;

export function t(obj: { en: string; ru: string }, locale: Locale): string {
  return obj[locale];
}
