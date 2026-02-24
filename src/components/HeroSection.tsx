import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

const LightningBolt = ({ d, className }: { d: string; className?: string }) => (
  <svg
    className={`absolute pointer-events-none animate-lightning-bolt ${className}`}
    viewBox="0 0 400 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="boltGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--gradient-start))" />
        <stop offset="100%" stopColor="hsl(var(--gradient-end))" />
      </linearGradient>
    </defs>
    <path
      d={d}
      stroke="url(#boltGrad)"
      strokeWidth="2"
      strokeLinecap="round"
      filter="drop-shadow(0 0 6px hsl(var(--gradient-start) / 0.6))"
    />
  </svg>
);

const HeroSection = () => {
  const locale = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background">
        {/* Colosseum background - aerial view */}
        <img
          src="https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover grayscale animate-arena-thunder"
          style={
            {
              "--flash-base": "0.12",
              "--flash-mid": "0.4",
              "--flash-peak": "0.65",
            } as React.CSSProperties
          }
          aria-hidden="true"
        />

        {/* Lightning flash overlay */}
        <div
          className="absolute inset-0 animate-lightning-flash"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(200,220,255,1) 0%, rgba(150,180,255,0.3) 40%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* SVG Lightning bolts */}
        <LightningBolt
          d="M 180,0 L 200,90 L 170,95 L 195,190 L 165,195 L 190,310 L 160,315 L 185,420"
          className="w-[200px] h-[500px] top-0 left-[15%] opacity-0"
        />
        <LightningBolt
          d="M 220,0 L 200,70 L 230,75 L 205,160 L 235,165 L 210,270 L 240,275 L 215,380"
          className="w-[180px] h-[450px] top-[-20px] right-[20%] opacity-0"
        />
        <LightningBolt
          d="M 200,0 L 190,60 L 215,65 L 195,140 L 220,145 L 200,240"
          className="w-[150px] h-[300px] top-[10px] left-[55%] opacity-0"
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
