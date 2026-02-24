import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

const HeroSection = () => {
  const locale = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background">
        {/* Colosseum background */}
        <img
          src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover grayscale animate-colosseum-flash"
          style={{ "--flash-base": "0.25", "--flash-peak": "0.45" } as React.CSSProperties}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/15 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--gradient-mid)) 0%, transparent 60%)`,
          }}
        />
      </div>

      <div className="relative z-10 content-max text-center">
        <motion.p
          className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t(translations.hero.subtitle, locale)}
        </motion.p>

        <motion.h1
          className="heading-xl text-foreground mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t(translations.hero.headline1, locale)}
          <br />
          <span className="gradient-text">{t(translations.hero.headline2, locale)}</span>
        </motion.h1>

        <motion.p
          className="body-text max-w-lg mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t(translations.hero.body, locale)}
        </motion.p>

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

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
