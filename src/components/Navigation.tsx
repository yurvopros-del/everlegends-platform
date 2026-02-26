import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { BETA_FORM_URL } from "@/lib/constants";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const locale = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const base = useMemo(() => {
    // "/everlegends-platform/" in prod; "/" in dev
    return import.meta.env.BASE_URL;
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goHomeHash = (hash: string) => {
    const target = `${base}#${hash}`; // base already ends with "/"
    // If we are already on home, just set hash + scroll
    if (location.pathname === "/" || location.pathname === "/ru") {
      window.location.hash = `#${hash}`;
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    // Otherwise, do a hard navigation to home with correct base + hash
    window.location.assign(target);
  };

  const switchLang = () => {
    navigate(locale === "en" ? "/ru" : "/");
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="content-max h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-3"
          aria-label="EverLegends home"
        >
          <img src={logo} alt="EverLegends" className="h-7 w-auto" />
        </button>

        <nav className="hidden md:flex items-center gap-6">
          <button
            type="button"
            onClick={() => goHomeHash("system")}
            className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {t(translations.nav.system, locale)}
          </button>
          <button
            type="button"
            onClick={() => goHomeHash("rewards")}
            className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {t(translations.nav.rewards, locale)}
          </button>

          <button
            type="button"
            onClick={switchLang}
            className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {locale === "en" ? "RU" : "EN"}
          </button>

          <a
            href={BETA_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {t(translations.nav.cta, locale)}
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={switchLang}
            className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {locale === "en" ? "RU" : "EN"}
          </button>

          <a
            href={BETA_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {t(translations.nav.joinMobile, locale)}
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Navigation;
