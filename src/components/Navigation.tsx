import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const locale = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLang = () => {
    navigate(locale === "en" ? "/ru" : "/");
  };

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
        <a href={locale === "ru" ? "/ru" : "/"}>
          <img src={logo} alt="EVERLEGENDS" className="h-6 md:h-7" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#system" className="text-sm font-medium tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            {t(translations.nav.system, locale)}
          </a>
          <a href="#rewards" className="text-sm font-medium tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            {t(translations.nav.rewards, locale)}
          </a>
          <button
            onClick={switchLang}
            className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {locale === "en" ? "RU" : "EN"}
          </button>
          <a
            href="#download"
            className="gradient-btn text-sm font-semibold tracking-[0.08em] uppercase px-6 py-2.5 rounded text-foreground transition-opacity hover:opacity-90"
          >
            {t(translations.nav.cta, locale)}
          </a>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={switchLang}
            className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {locale === "en" ? "RU" : "EN"}
          </button>
          <a
            href="#download"
            className="gradient-btn text-xs font-semibold tracking-[0.08em] uppercase px-4 py-2 rounded text-foreground"
          >
            {t(translations.nav.joinMobile, locale)}
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
