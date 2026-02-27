import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

const SystemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const locale = useLanguage();
  const steps = translations.system.steps;

  return (
    <section id="system" className="section-padding" ref={ref}>
      <div className="content-max">
        <motion.p
          className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t(translations.system.label, locale)}
        </motion.p>
        <motion.h2
          className="heading-lg text-foreground mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {t(translations.system.title, locale)}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className={`py-8 md:py-0 md:px-10 ${
                i < steps.length - 1 ? "border-b md:border-b-0 md:border-r border-border" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
            >
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground mb-4 block">
                {step.number}
              </span>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-[-0.02em] gradient-text mb-4">{t(step.title, locale)}</h3>
              <p className="body-text text-sm md:text-base">{t(step.description, locale)}</p>
              {step.bullets && (
                <ul className="mt-3 space-y-1 list-disc list-inside body-text text-sm md:text-base">
                  {step.bullets.map((b, j) => <li key={j}>{t(b, locale)}</li>)}
                </ul>
              )}
              {'footer' in step && step.footer && (
                <p className="body-text text-sm md:text-base mt-3">{t(step.footer, locale)}</p>
              )}
            </motion.div>
          ))}
        </div>

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
      </div>
    </section>
  );
};

export default SystemSection;
