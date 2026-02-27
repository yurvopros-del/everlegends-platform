import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";
import { BASE_PATH } from "@/lib/basePath";

const BETA_TESTING_PDF = {
  en: `${BASE_PATH}/docs/EVERLEGENDS_BETA_TESTING_RULES.pdf`,
  ru: `${BASE_PATH}/docs/EVERLEGENDS_BETA_TESTING_RULES_RU.pdf`,
} as const;

export default function BetaTesting() {
  const locale = useLanguage();
  const [viewLang, setViewLang] = useState<"en" | "ru">(locale === "ru" ? "ru" : "en");
  const pdfSrc = BETA_TESTING_PDF[viewLang] ?? BETA_TESTING_PDF.en;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="content-max py-12">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {t(translations.betaTestingPage.title, locale)}
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
            {t(translations.betaTestingPage.enVersion, locale)}
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
            {t(translations.betaTestingPage.ruVersion, locale)}
          </button>

          <a
            href={pdfSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            ↓ {t(translations.betaTestingPage.download, locale)}
          </a>
        </div>

        <div className="mt-6 w-full overflow-hidden rounded-lg border border-border">
          <iframe
            title={t(translations.betaTestingPage.title, locale)}
            src={pdfSrc}
            className="w-full h-[75vh]"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
