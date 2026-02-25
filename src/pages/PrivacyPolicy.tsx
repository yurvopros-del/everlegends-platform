import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

const PRIVACY_PDF = {
  en: "/docs/EVERLEGENDS_PRIVACY_POLICY.pdf",
  ru: "/docs/EVERLEGENDS_PRIVACY_POLICY_RU.pdf",
} as const;

const PrivacyPolicy = () => {
  const locale = useLanguage();
  const [viewLang, setViewLang] = useState<"en" | "ru">(locale);

  return (
    <div className="bg-background min-h-screen flex flex-col" lang={locale}>
      <Navigation />

      <div className="content-max flex-1 pt-28 pb-16">
        <h1 className="heading-md text-foreground mb-8">
          {t(translations.privacyPage.title, locale)}
        </h1>

        {/* Language toggle + download */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <button
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
            href={PRIVACY_PDF[viewLang]}
            download
            className="ml-auto text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            ↓ {t(translations.privacyPage.download, locale)}
          </a>
        </div>

        {/* Embedded PDF */}
        <iframe
          key={viewLang}
          src={PRIVACY_PDF[viewLang]}
          title="Privacy Policy"
          className="w-full rounded border border-border"
          style={{ height: "calc(100vh - 260px)", minHeight: "500px" }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
