import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

const DownloadSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const locale = useLanguage();

  return (
    <section id="download" className="section-padding" ref={ref}>
      <div className="content-max text-center">
        <motion.h2
          className="heading-xl text-foreground mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {t(translations.download.headline1, locale)}
          <br />
          <span className="gradient-text">{t(translations.download.headline2, locale)}</span>
        </motion.h2>

        <motion.p
          className="body-text max-w-md mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t(translations.download.body, locale)}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#"
            className="gradient-btn text-sm font-semibold tracking-[0.1em] uppercase px-10 py-4 rounded text-foreground transition-opacity hover:opacity-90"
          >
            {t(translations.download.ios, locale)}
          </a>
          <a
            href="#"
            className="border border-border text-sm font-semibold tracking-[0.1em] uppercase px-10 py-4 rounded text-foreground transition-colors hover:bg-secondary"
          >
            {t(translations.download.android, locale)}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
