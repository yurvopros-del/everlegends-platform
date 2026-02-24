import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

const RewardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const locale = useLanguage();
  const specs = translations.rewards.specs;

  return (
    <section id="rewards" className="section-padding bg-surface" ref={ref}>
      <div className="content-max">
        <motion.p
          className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t(translations.rewards.label, locale)}
        </motion.p>
        <motion.h2
          className="heading-lg text-foreground mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {t(translations.rewards.title, locale)}
        </motion.h2>

        <div className="space-y-0">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              className="gradient-border flex flex-col md:flex-row md:items-center justify-between py-6 gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                {t(spec.label, locale)}
              </span>
              <span className="text-sm md:text-base font-light text-foreground">
                {t(spec.value, locale)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
