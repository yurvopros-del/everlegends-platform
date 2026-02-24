import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const locale = useLanguage();

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Faint arena archway background */}
      <img
        src="https://images.unsplash.com/photo-1555992643-a09e8f2afdce?w=1200&q=60"
        alt=""
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-[0.10]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />

      <div className="content-max text-center relative z-10">
        <motion.h2
          className="heading-lg text-foreground mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {t(translations.philosophy.headline1, locale)}
          <br />
          <span className="gradient-text">{t(translations.philosophy.headline2, locale)}</span>
        </motion.h2>

        <motion.p
          className="body-text max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t(translations.philosophy.body, locale)}
        </motion.p>
      </div>
    </section>
  );
};

export default PhilosophySection;
