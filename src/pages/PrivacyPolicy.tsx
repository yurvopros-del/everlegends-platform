import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

// GitHub Pages project site: prefix static docs with BASE_URL ("/everlegends-platform/")
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const PRIVACY_PDF = {
  en: `${BASE}/docs/EVERLEGENDS_PRIVACY_POLICY.pdf`,
  ru: `${BASE}/docs/EVERLEGENDS_PRIVACY_POLICY_RU.pdf`,
} as const;

const PrivacyPolicy = () => {
  const locale = useLanguage();
  const [viewLang, setViewLang] = useState<"en" | "ru">(locale);

  const pdfSrc = PRIVACY_PDF[viewLang] ?? PRIVACY_PDF.en;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="content-max py-12">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {t(translations.privacyPage.title, locale)}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setViewLang("en")}
            className={`text-xs tracking-[0.1em] uppercase px-3 py-1.5 rounded border transition-colors ${
              viewLang === "en"
                ? "border-primary text-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {t(translations.privacyPage.enVersion, locale)}
          </button>

          <button
            type="button"
            onClick={() => setViewLang("ru")}
            className={`text-xs tracking-[0.1em] uppercase px-3 py-1.5 rounded border transition-colors ${
              viewLang === "ru"
                ? "border-primary text-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {t(translations.privacyPage.ruVersion, locale)}
          </button>

          <a
            href={pdfSrc}
            download
            className="ml-auto text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            ↓ {t(translations.privacyPage.download, locale)}
          </a>
        </div>

        <div className="mt-6 w-full overflow-hidden rounded-lg border border-border">
          <iframe
            title={t(translations.privacyPage.title, locale)}
            src={pdfSrc}
            className="w-full h-[75vh]"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
