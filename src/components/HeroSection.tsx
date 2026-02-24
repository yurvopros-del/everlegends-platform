import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

import slide1 from "@/assets/hero/iStock-599713470.jpg";
import slide2 from "@/assets/hero/iStock-601369426.jpg";
import slide3 from "@/assets/hero/iStock-618624716.jpg";
import slide4 from "@/assets/hero/iStock-637772392.jpg";
import slide5 from "@/assets/hero/iStock-687124332.jpg";
import slide6 from "@/assets/hero/iStock-698615450.jpg";
import slide7 from "@/assets/hero/iStock-918580062.jpg";
import slide8 from "@/assets/hero/iStock-966297686.jpg";

const SLIDES = [
  {
    image: slide1,
    headline: { en: "RISE ABOVE THE NOISE", ru: "ПОДНИМИСЬ НАД ШУМОМ" },
    tagline: { en: "Your talent deserves a global stage.", ru: "Твой талант заслуживает мировой сцены." },
  },
  {
    image: slide2,
    headline: { en: "BUILT THROUGH DISCIPLINE", ru: "ЗАКАЛЁННЫЙ ДИСЦИПЛИНОЙ" },
    tagline: { en: "No shortcuts. No excuses. Just results.", ru: "Без обходных путей. Без оправданий. Только результат." },
  },
  {
    image: slide3,
    headline: { en: "GLORY BELONGS TO THE FEARLESS", ru: "СЛАВА ПРИНАДЛЕЖИТ БЕССТРАШНЫМ" },
    tagline: { en: "Real prizes for real performance.", ru: "Реальные призы за реальные результаты." },
  },
  {
    image: slide4,
    headline: { en: "STRONGER TOGETHER", ru: "СИЛЬНЕЕ ВМЕСТЕ" },
    tagline: { en: "A global community united by merit.", ru: "Глобальное сообщество, объединённое заслугами." },
  },
  {
    image: slide5,
    headline: { en: "OUTWORK EVERYONE", ru: "ПРЕВЗОЙДИ КАЖДОГО" },
    tagline: { en: "Where effort is the only currency.", ru: "Где усилие — единственная валюта." },
  },
  {
    image: slide6,
    headline: { en: "LEGACY STARTS NOW", ru: "НАСЛЕДИЕ НАЧИНАЕТСЯ СЕЙЧАС" },
    tagline: { en: "Inspire the next generation of champions.", ru: "Вдохновляй следующее поколение чемпионов." },
  },
  {
    image: slide7,
    headline: { en: "EARN YOUR RANK", ru: "ЗАСЛУЖИ СВОЙ РАНГ" },
    tagline: { en: "Verified. Ranked. Rewarded.", ru: "Верифицирован. Оценён. Вознаграждён." },
  },
  {
    image: slide8,
    headline: { en: "THE ARENA AWAITS", ru: "АРЕНА ЖДЁТ" },
    tagline: { en: "Join thousands proving their worth worldwide.", ru: "Присоединяйся к тысячам, доказывающим свою ценность." },
  },
];

const HeroSection = () => {
  const locale = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0 bg-background">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slide.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.45)" }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 6, ease: "easeOut" },
            }}
            aria-hidden="true"
          />
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 content-max text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-xl text-foreground mb-4">
              <span className="gradient-text">{slide.headline[locale]}</span>
            </h1>
            <motion.p
              className="body-text max-w-lg mx-auto mb-12 text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {slide.tagline[locale]}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <motion.a
          href="#download"
          className="inline-block gradient-btn text-sm md:text-base font-semibold tracking-[0.1em] uppercase px-10 py-4 rounded text-foreground transition-opacity hover:opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {t(translations.hero.cta, locale)}
        </motion.a>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentSlide
                ? "gradient-btn w-6"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
