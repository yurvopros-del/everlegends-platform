import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

const USER_AGREEMENT_PATH = Object.freeze({
  en: "/docs/EVERLEGENDS_PLATFORM_USER_AGREEMENT.pdf",
  ru: "/docs/EVERLEGENDS_PLATFORM_USER_AGREEMENT_RU.pdf",
} as const);

const BETA_TESTING_PATH = Object.freeze({
  en: "/docs/EVERLEGENDS_BETA_TESTING_RULES.pdf",
  ru: "/docs/EVERLEGENDS_BETA_TESTING_RULES_RU.pdf",
} as const);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15z" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const Footer = () => {
  const locale = useLanguage();
  const betaHref = BETA_TESTING_PATH[locale] ?? BETA_TESTING_PATH.en;

  return (
    <footer className="border-t border-border py-12">
      <div className="content-max flex flex-col items-center gap-6">
        {/* Operator line */}
        <span className="text-xs font-medium tracking-[0.1em] text-muted-foreground">
          {t(translations.footer.operator, locale)}
        </span>

        {/* Links + socials */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <a
            href={USER_AGREEMENT_PATH[locale]}
            target="_blank"
            rel="noopener noreferrer"
            type="application/pdf"
            className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {t(translations.footer.terms, locale)}
          </a>
          <span className="text-muted-foreground/40">|</span>
          <a href="#" className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            {t(translations.footer.privacy, locale)}
          </a>
          <span className="text-muted-foreground/40">|</span>
          <Link
            to={locale === "ru" ? "/ru/cookie-policy" : "/cookie-policy"}
            className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {t(translations.footer.cookiePolicy, locale)}
          </Link>
          <span className="text-muted-foreground/40">|</span>
          <a href="#" className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            {t(translations.footer.contact, locale)}
          </a>
          <span className="text-muted-foreground/40">|</span>
          <a
            href={betaHref}
            target="_blank"
            rel="noopener noreferrer"
            type="application/pdf"
            className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
          >
            <span className="text-[10px] leading-none px-1 py-0.5 rounded border border-muted-foreground/30 font-medium">
              β
            </span>
            {t(translations.footer.beta, locale)}
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="TikTok">
            <TikTokIcon />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Telegram">
            <TelegramIcon />
          </a>
        </div>

        {/* Copyright */}
        <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} EVERLEGENDS. {t(translations.footer.rights, locale)}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
