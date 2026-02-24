import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

const STORAGE_KEY = "everlegends_cookie_ack";

const CookieBanner = () => {
  const locale = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  const policyPath = locale === "ru" ? "/ru/cookie-policy" : "/cookie-policy";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 backdrop-blur-md">
      <div className="content-max flex flex-col sm:flex-row items-start sm:items-center gap-3 py-3">
        <p className="text-xs text-muted-foreground leading-relaxed flex-1">
          {t(translations.cookieBanner.text, locale)}{" "}
          <Link
            to={policyPath}
            className="underline underline-offset-2 text-foreground hover:text-primary transition-colors"
          >
            {t(translations.cookieBanner.learnMore, locale)}
          </Link>
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 text-xs font-medium tracking-[0.1em] uppercase px-4 py-1.5 rounded border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-colors"
        >
          {t(translations.cookieBanner.ok, locale)}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
