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
    headline: { en: "ONLY THE STRONGEST STAND OUT", ru: "ВЫХОДЯТ СИЛЬНЕЙШИЕ" },
    tagline: { en: "Your results deserve recognition.", ru: "Результат должен быть признан." },
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
    tagline: { en: "A global community united by results.", ru: "Сильнейшие объединяются результатом." },
  },
  {
    image: slide5,
    headline: { en: "PROVE YOUR LEVEL", ru: "ДОКАЖИ УРОВЕНЬ" },
    tagline: { en: "Only verified results are counted.", ru: "Здесь учитывается только результат." },
  },
  {
    image: slide6,
    headline: { en: "LEGACY STARTS NOW", ru: "НАСЛЕДИЕ НАЧИНАЕТСЯ СЕЙЧАС" },
    tagline: { en: "Your results shape the future of the ranking.", ru: "Твой результат формирует будущее рейтинга." },
  },
  {
    image: slide7,
    headline: { en: "TAKE YOUR PLACE IN THE RANKING", ru: "ЗАЙМИ СВОЁ МЕСТО В РЕЙТИНГЕ" },
    tagline: { en: "Verified. Recorded. Ranked.", ru: "Проверено. Оценено. Зафиксировано." },
  },
  {
    image: slide8,
    headline: { en: "THE ARENA AWAITS", ru: "АРЕНА ЖДЁТ" },
    tagline: { en: "Thousands already record results worldwide.", ru: "Тысячи уже фиксируют результаты по всему миру." },
  },
];

const imageTransition = {
  duration: 0.9,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

const HeroSection = () => {
  const locale = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sweepKey, setSweepKey] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Preload next slide image
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % SLIDES.length;
    const img = new window.Image();
    img.src = SLIDES[nextIndex].image;
  }, [currentSlide]);

  // Periodic light sweep
  useEffect(() => {
    const timer = setInterval(() => {
      setSweepKey((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Branded gradient placeholder — never black */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(240,6%,6%)] via-[hsl(217,20%,12%)] to-[hsl(260,15%,10%)]" />

      {/* Cross-depth image transitions */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0.3, scale: 1.05, filter: "blur(12px) brightness(0.45)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px) brightness(0.45)" }}
          exit={{ opacity: 0, scale: 0.97, filter: "blur(4px) brightness(0.45)" }}
          transition={imageTransition}
        >
          <img
            src={slide.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover animate-[hero-breathe_15s_ease-in-out_infinite_0.9s]"
            aria-hidden="true"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/30 to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50 z-[1]" />

      {/* Subtle light sweep */}
      <motion.div
        key={`sweep-${sweepKey}`}
        className="absolute inset-0 z-[2] pointer-events-none"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)",
        }}
      />

      {/* Content with staggered entrance */}
      <div className="relative z-10 content-max text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h1
              className="heading-xl text-foreground mb-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              <span className="gradient-text">{slide.headline[locale]}</span>
            </motion.h1>
            <motion.p
              className="body-text max-w-lg mx-auto mb-12 text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.37 }}
            >
              {slide.tagline[locale]}
            </motion.p>
            <motion.a
              href="#download"
              className="inline-block gradient-btn text-sm md:text-base font-semibold tracking-[0.1em] uppercase px-10 py-4 rounded text-foreground transition-opacity hover:opacity-90"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.52 }}
            >
              {t(translations.hero.cta, locale)}
            </motion.a>
          </motion.div>
        </AnimatePresence>
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
            aria-label={`${locale === "ru" ? "Слайд" : "Slide"} ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
