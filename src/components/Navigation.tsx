import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="content-max flex items-center justify-between h-16 md:h-20">
        <a href="#" className="text-lg md:text-xl font-black tracking-[0.15em] uppercase text-foreground">
          EVERLEGENDS
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#system" className="text-sm font-medium tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            The System
          </a>
          <a href="#rewards" className="text-sm font-medium tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            Rewards
          </a>
          <a
            href="#download"
            className="gradient-btn text-sm font-semibold tracking-[0.08em] uppercase px-6 py-2.5 rounded text-foreground transition-opacity hover:opacity-90"
          >
            Enter the Arena
          </a>
        </div>

        {/* Mobile CTA */}
        <a
          href="#download"
          className="md:hidden gradient-btn text-xs font-semibold tracking-[0.08em] uppercase px-4 py-2 rounded text-foreground"
        >
          Join
        </a>
      </div>
    </motion.nav>
  );
};

export default Navigation;
