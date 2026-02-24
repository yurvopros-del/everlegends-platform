import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";
import FlagTicker from "./FlagTicker";

const METALLIC_CLASSES = [
  "gold-metallic",
  "silver-metallic",
  "bronze-metallic",
  "steel-metallic",
];

const RewardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const locale = useLanguage();

  return (
    <section id="rewards" className="section-padding bg-surface" ref={ref}>
      <div className="content-max">
        {/* Label */}
        <motion.p
          className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t(translations.rewards.label, locale)}
        </motion.p>

        {/* Flag ticker */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FlagTicker direction="right" />
        </motion.div>

        {/* 4-tier Prize Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-12">
          {translations.rewards.positions.map((pos, i) => (
            <motion.div
              key={i}
              className={`text-center py-10 md:py-12 ${
                i < 3 ? "border-b md:border-b-0 md:border-r border-border" : ""
              } ${i < 2 ? "border-r border-border md:border-r" : ""}`}
              style={{ borderRight: i === 1 || i === 3 ? 'none' : undefined }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.12 }}
            >
              <span className={`text-5xl md:text-6xl lg:text-7xl font-black block mb-2 ${METALLIC_CLASSES[i]}`}>
                {pos.prize}
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-1">
                {t(pos.winners, locale)}
              </span>
              <span className="text-sm md:text-base font-medium tracking-[0.3em] text-foreground/70 block">
                {t(pos.position, locale)}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Total Prize Pool */}
        <motion.div
          className="text-center py-10 mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="text-6xl md:text-7xl lg:text-8xl font-black gradient-text block mb-2">
            {translations.rewards.total.value}
          </span>
          <span className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-muted-foreground">
            {t(translations.rewards.total.label, locale)}
          </span>
        </motion.div>

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
