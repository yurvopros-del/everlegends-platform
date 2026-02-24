import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

const OLD_KEY = "everlegends_cookie_ack";
const NEW_KEY = "everlegends_privacy_consent";

function safeGetItem(key: string): string | null {
  if (typeof window === "undefined") return null;
  try { return localStorage.getItem(key); } catch { return null; }
}

function safeSetItem(key: string, value: string): void {
  if (typeof window === "undefined") return;
  try { localStorage.setItem(key, value); } catch {}
}

export function getPrivacyConsent(): "accepted" | "declined" | null {
  return safeGetItem(NEW_KEY) as "accepted" | "declined" | null;
}

const CookieBanner = () => {
  const locale = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Already consented with new key
    if (safeGetItem(NEW_KEY)) return;

    // Migrate old key
    if (safeGetItem(OLD_KEY)) {
      safeSetItem(NEW_KEY, "accepted");
      return;
    }

    setVisible(true);
  }, []);

  const handleAccept = () => {
    safeSetItem(NEW_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    safeSetItem(NEW_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  const privacyPath = locale === "ru" ? "/ru/privacy-policy" : "/privacy-policy";
  const cookiePath = locale === "ru" ? "/ru/cookie-policy" : "/cookie-policy";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 backdrop-blur-md">
      <div className="content-max flex flex-col sm:flex-row items-start sm:items-center gap-3 py-3">
        <p className="text-xs text-muted-foreground leading-relaxed flex-1">
          {t(translations.privacyBanner.text, locale)}{" "}
          <Link
            to={privacyPath}
            className="underline underline-offset-2 text-foreground hover:text-primary transition-colors"
          >
            {t(translations.privacyBanner.privacyLink, locale)}
          </Link>
          {" "}{t(translations.privacyBanner.and, locale)}{" "}
          <Link
            to={cookiePath}
            className="underline underline-offset-2 text-foreground hover:text-primary transition-colors"
          >
            {t(translations.privacyBanner.cookieLink, locale)}
          </Link>
          .
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleDecline}
            className="text-xs font-medium tracking-[0.1em] uppercase px-4 py-1.5 rounded border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-colors"
          >
            {t(translations.privacyBanner.decline, locale)}
          </button>
          <button
            onClick={handleAccept}
            className="text-xs font-medium tracking-[0.1em] uppercase px-4 py-1.5 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {t(translations.privacyBanner.accept, locale)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
