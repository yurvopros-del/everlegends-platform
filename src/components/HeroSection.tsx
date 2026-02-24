import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

const heroVideos = [
  "/videos/hero-1.mp4",
  "/videos/hero-2.mp4",
  "/videos/hero-3.mov",
  "/videos/hero-4.mov",
  "/videos/hero-5.mov",
];

const HeroSection = () => {
  const locale = useLanguage();
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnded = useCallback(() => {
    setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background">
        {/* Video background */}
        <video
          key={currentVideo}
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
          src={heroVideos[currentVideo]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          aria-hidden="true"
        />

        {/* Soft overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/10 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
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
