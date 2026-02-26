import { useEffect, useState } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Always build absolute in-site URLs from Vite BASE_URL (GitHub Pages project subpath safe)
  const base = import.meta.env.BASE_URL; // e.g. "/everlegends-platform/"
  const homeHref = locale === "ru" ? `${base}ru/` : base;

  const goHome = () => {
    // Use hard navigation for RU to avoid SPA /ru route issues entirely.
    if (locale === "ru") {
      window.location.assign(`${base}ru/`);
      return;
    }
    // EN can safely SPA-navigate to "/"
    navigate("/");
  };

  const jumpTo = (id: "system" | "rewards") => {
    // If we're not on the home route, go home first then apply hash.
    // For RU we hard-navigate to /ru/ (server fallback does the right thing); for EN we SPA.
    const isHomeEn = location.pathname === "/";
    const isHomeRu = location.pathname === "/ru" || location.pathname === "/ru/";

    if (!isHomeEn && !isHomeRu) {
      if (locale === "ru") {
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
    // Deterministic fix:
    // - Switching to RU must be a HARD navigation to /ru/ so server-side 404 fallback handles it.
    // - Switching back to EN goes to BASE_URL (root).
    if (locale === "en") {
      window.location.assign(`${base}ru/`);
    } else {
      window.location.assign(base);
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
      <div className="content-max h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={goHome}
          className="flex items-center gap-3"
          aria-label="EverLegends home"
        >
          <img src={logo} alt="EverLegends" className="h-7 w-auto" />
        </button>

        <nav className="hidden md:flex items-center gap-6">
          <button
            type="button"
            onClick={() => jumpTo("system")}
            className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {t(translations.nav.system, locale)}
          </button>

          <button
            type="button"
            onClick={() => jumpTo("rewards")}
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