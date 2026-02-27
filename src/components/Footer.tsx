import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

const Footer = () => {
  const locale = useLanguage();

  return (
    <footer className="border-t border-border py-12">
      <div className="content-max flex flex-col items-center gap-6">
        <span className="text-xs font-medium tracking-[0.1em] text-muted-foreground">
          {t(translations.footer.operator, locale)}
        </span>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <Link
            to={locale === "ru" ? "/ru/user-agreement" : "/user-agreement"}
            className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {t(translations.footer.terms, locale)}
          </Link>
          <span className="text-muted-foreground/40">|</span>
          <Link
            to={locale === "ru" ? "/ru/privacy-policy" : "/privacy-policy"}
            className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {t(translations.footer.privacy, locale)}
          </Link>
          <span className="text-muted-foreground/40">|</span>
          <Link
            to={locale === "ru" ? "/ru/cookie-policy" : "/cookie-policy"}
            className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {t(translations.footer.cookiePolicy, locale)}
          </Link>
          <span className="text-muted-foreground/40">|</span>
          <Link
            to={locale === "ru" ? "/ru/beta-testing" : "/beta-testing"}
            className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
          >
            <span className="text-[10px] leading-none px-1 py-0.5 rounded border border-muted-foreground/30 font-medium">
              β
            </span>
            {t(translations.footer.beta, locale)}
          </Link>
          <span className="text-muted-foreground/40">|</span>
          <a
            href="https://t.me/DjamalG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {t(translations.footer.contact, locale)}
          </a>
        </div>

        <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} EVERLEGENDS. {t(translations.footer.rights, locale)}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
