import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";
import FlagTicker from "./FlagTicker";

const RewardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const locale = useLanguage();

  return (
    <section id="rewards" className="section-padding bg-surface" ref={ref}>
      <div className="content-max">
        {/* Label */}
        <motion.p
          className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t(translations.rewards.label, locale)}
        </motion.p>

        {/* Prize Pool Hero */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black gradient-text leading-none tracking-tight">
            {t(translations.rewards.prizePool, locale)}
          </h2>
          <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mt-4">
            {t(translations.rewards.prizePoolSub, locale)}
          </p>
        </motion.div>

        {/* Flag ticker between headline and positions */}
        <motion.div
          className="my-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <FlagTicker direction="right" />
        </motion.div>

        {/* Top 3 Positions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-16">
          {translations.rewards.positions.map((pos, i) => (
            <motion.div
              key={pos.position}
              className={`text-center py-10 md:py-12 ${
                i < 2 ? "border-b md:border-b-0 md:border-r border-border" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
            >
              <span className="text-xs font-medium tracking-[0.3em] text-muted-foreground block mb-3">
                {pos.position}
              </span>
              <span className="text-3xl md:text-4xl lg:text-5xl font-black gradient-text block mb-3">
                {pos.prize}
              </span>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70">
                {t(pos.label, locale)}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Supporting Specs */}
        <div className="space-y-0">
          {translations.rewards.specs.map((spec, i) => (
            <motion.div
              key={i}
              className="gradient-border flex flex-col md:flex-row md:items-center justify-between py-6 gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
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
