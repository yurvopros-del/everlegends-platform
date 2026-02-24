import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dark atmospheric background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
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
          The Global Merit Platform
        </motion.p>

        <motion.h1
          className="heading-xl text-foreground mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          WHERE MERIT IS
          <br />
          <span className="gradient-text">THE ONLY CURRENCY</span>
        </motion.h1>

        <motion.p
          className="body-text max-w-lg mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Athletic talent verified, ranked, and rewarded. No connections. No politics. Just performance.
        </motion.p>

        <motion.a
          href="#download"
          className="inline-block gradient-btn text-sm md:text-base font-semibold tracking-[0.1em] uppercase px-10 py-4 rounded text-foreground transition-opacity hover:opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Enter the Arena
        </motion.a>
      </div>

      {/* Scroll indicator */}
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
