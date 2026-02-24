import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

const METALLIC_CLASSES = [
  "gold-metallic",
  "silver-metallic",
  "bronze-metallic",
  "steel-metallic",
];

const SHIMMER_DELAYS = ["0s", "2.3s", "4.1s", "1.7s"];

const RewardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const locale = useLanguage();

  const positions = translations.rewards.positions;
  // Podium order for desktop: 2nd | 1st | 3rd
  const podiumOrder = [positions[1], positions[0], positions[2]];
  const podiumMetallic = [METALLIC_CLASSES[1], METALLIC_CLASSES[0], METALLIC_CLASSES[2]];
  const podiumDelays = [SHIMMER_DELAYS[1], SHIMMER_DELAYS[0], SHIMMER_DELAYS[2]];
  const disclaimer = t(translations.rewards.disclaimer, locale)?.trim();

  return (
    <section id="rewards" className="section-padding bg-surface" ref={ref}>
      <div className="content-max">
        {/* Section Title */}
        <motion.h2
          className="heading-lg text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {t(translations.rewards.title, locale)}
        </motion.h2>

        {/* Podium Layout — Desktop */}
        <div className="hidden md:block mb-12">
          <div className="grid grid-cols-3 gap-0 items-end">
            {podiumOrder.map((pos, i) => {
              const isFirst = i === 1;
              return (
                <motion.div
                  key={i}
                  className={`text-center ${isFirst ? "py-16 md:py-20" : "py-10 md:py-14"} ${
                    i === 0 ? "border-r border-border" : i === 2 ? "border-l border-border" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.12 }}
                >
                  <span
                    className={`${isFirst ? "text-6xl md:text-7xl lg:text-8xl" : "text-5xl md:text-6xl lg:text-7xl"} font-black block mb-2 ${podiumMetallic[i]}`}
                    style={{ animationDelay: podiumDelays[i] }}
                  >
                    {pos.prize}
                  </span>
                  <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-1">
                    {t(pos.winners, locale)}
                  </span>
                  <span className="text-sm md:text-base font-medium tracking-[0.3em] text-foreground/70 block">
                    {t(pos.position, locale)}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Top 100 — centered below */}
          <motion.div
            className="text-center py-8 mt-4 border-t border-border max-w-xs mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <span
              className={`text-4xl md:text-5xl font-black block mb-2 ${METALLIC_CLASSES[3]}`}
              style={{ animationDelay: SHIMMER_DELAYS[3] }}
            >
              {positions[3].prize}
            </span>
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-1">
              {t(positions[3].winners, locale)}
            </span>
            <span className="text-sm md:text-base font-medium tracking-[0.3em] text-foreground/70 block">
              {t(positions[3].position, locale)}
            </span>
          </motion.div>
        </div>

        {/* Mobile Layout — stacked: 1st, 2nd, 3rd, Top 100 */}
        <div className="md:hidden mb-12 space-y-6">
          {positions.map((pos, i) => (
            <motion.div
              key={i}
              className={`text-center ${i === 0 ? "py-12" : "py-8"} ${i < 3 ? "border-b border-border" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.12 }}
            >
              <span
                className={`${i === 0 ? "text-6xl" : "text-5xl"} font-black block mb-2 ${METALLIC_CLASSES[i]}`}
                style={{ animationDelay: SHIMMER_DELAYS[i] }}
              >
                {pos.prize}
              </span>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-1">
                {t(pos.winners, locale)}
              </span>
              <span className="text-sm font-medium tracking-[0.3em] text-foreground/70 block">
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

        {disclaimer && (
          <motion.p
            className="text-xs text-muted-foreground text-center mt-8 tracking-wide"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {disclaimer}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default RewardsSection;
