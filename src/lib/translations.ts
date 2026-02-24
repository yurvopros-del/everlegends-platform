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
    headline1: { en: "TALENT AND SYSTEMATIC TRAINING SHOULD BE", ru: "ТАЛАНТ И СИСТЕМНЫЕ ТРЕНИРОВКИ ДОЛЖНЫ БЫТЬ" },
    headline2: { en: "REWARDED. PERIOD.", ru: "ВОЗНАГРАЖДЕНЫ. ТОЧКА." },
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
        title: { en: "WIN", ru: "ПОБЕЖДАЙ" },
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
    title: { en: "THE REWARD SYSTEM", ru: "СИСТЕМА НАГРАД" },
    prizePool: { en: "$1,000,000+", ru: "$1,000,000+" },
    prizePoolSub: { en: "TOTAL SEASONAL PRIZE POOL", ru: "ОБЩИЙ СЕЗОННЫЙ ПРИЗОВОЙ ФОНД" },
    positions: [
      {
        position: "1ST",
        prize: "$250,000",
        label: { en: "CHAMPION", ru: "ЧЕМПИОН" },
      },
      {
        position: "2ND",
        prize: "$100,000",
        label: { en: "ELITE", ru: "ЭЛИТА" },
      },
      {
        position: "3RD",
        prize: "$50,000",
        label: { en: "CONTENDER", ru: "ПРЕТЕНДЕНТ" },
      },
    ],
    specs: [
      {
        label: { en: "Weekly Challenges", ru: "Еженедельные Испытания" },
        value: { en: "Up to $10,000 in weekly competition prizes", ru: "До $10,000 призов в еженедельных соревнованиях" },
      },
      {
        label: { en: "Leaderboard Bonuses", ru: "Бонусы Рейтинга" },
        value: { en: "Monthly rewards for top-ranked athletes", ru: "Ежемесячные награды для лучших атлетов" },
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
