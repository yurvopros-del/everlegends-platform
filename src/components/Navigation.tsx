import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";
import { useNavigate, useLocation } from "react-router-dom";
import logoRu from "@/assets/fixact-sport-logo.svg";
import logoEn from "@/assets/logo-en.svg";
import { BETA_FORM_URL } from "@/lib/constants";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const locale = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const logo = locale === "en" ? logoEn : logoRu;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // GitHub Pages safe base, e.g. "/everlegends-platform/"
  const base = import.meta.env.BASE_URL;

  const goHome = () => {
    // RU must hard-navigate to avoid SPA /ru black route history
    if (locale === "ru") {
      window.location.assign(`${base}ru/`);
      return;
    }
    // EN can SPA-navigate
    navigate("/");
  };

  const jumpTo = (id: "system" | "rewards") => {
    const isHomeEn = location.pathname === "/";
    const isHomeRu = location.pathname === "/ru" || location.pathname === "/ru/";

    // If not on a home route, go home first then apply hash
    if (!isHomeEn && !isHomeRu) {
      if (locale === "ru") {
        // hard-nav so the server entry path works deterministically
        window.location.assign(`${base}ru/#${id}`);
      } else {
        navigate("/");
        window.setTimeout(() => {
          window.location.hash = `#${id}`;
        }, 0);
      }
      return;
    }

    // Already on home => set hash directly
    window.location.hash = `#${id}`;
  };

  const switchLang = () => {
    // Deterministic persistence in BOTH directions:
    // - EN -> RU: go to /ru/ (server fallback redirects to /?lang=ru and main.tsx stores it)
    // - RU -> EN: go to /?lang=en so main.tsx stores "en" and cleans URL
    if (locale === "en") {
      window.location.assign(`${base}ru/`);
    } else {
      window.location.assign(`${base}?lang=en`);
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="content-max h-14 md:h-[72px] flex items-center justify-between">
        <button
          type="button"
          onClick={goHome}
          className="flex items-center gap-3"
          aria-label={locale === "en" ? "FIXACT SPORT — home" : "ФиксАкт Спорт — главная"}
        >
          <img
            src={logo}
            alt={locale === "en" ? "FIXACT SPORT" : "ФиксАкт Спорт"}
            className="h-6 md:h-7 w-auto"
          />
        </button>

        <nav className="hidden md:flex items-center gap-6">
          <button
            type="button"
            onClick={() => jumpTo("system")}
            className="text-sm tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {t(translations.nav.system, locale)}
          </button>

          <button
            type="button"
            onClick={() => jumpTo("rewards")}
            className="text-sm tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {t(translations.nav.rewards, locale)}
          </button>

          <button
            type="button"
            onClick={switchLang}
            className="text-sm tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {locale === "en" ? "RU" : "EN"}
          </button>

          <a
            href={BETA_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {t(translations.nav.cta, locale)}
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={switchLang}
            className="text-sm tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {locale === "en" ? "RU" : "EN"}
          </button>

          <a
            href={BETA_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {t(translations.nav.joinMobile, locale)}
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Navigation;