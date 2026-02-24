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
      {/* Dramatic interior wide-angle */}
      <img
        src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=60"
        alt=""
        className="absolute inset-0 w-full h-full object-cover grayscale animate-arena-thunder"
        style={
          {
            "--flash-base": "0.10",
            "--flash-mid": "0.30",
            "--flash-peak": "0.50",
          } as React.CSSProperties
        }
        aria-hidden="true"
      />

      {/* Lightning flash overlay (subtler) */}
      <div
        className="absolute inset-0 animate-lightning-flash"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(200,220,255,0.8) 0%, rgba(150,180,255,0.2) 40%, transparent 70%)",
          opacity: 0,
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background/70" />
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
