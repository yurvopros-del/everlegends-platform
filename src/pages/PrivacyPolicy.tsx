import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

const GH_BASE = "/everlegends-platform";

const PRIVACY_PDF = Object.freeze({
  en: `${GH_BASE}/docs/EVERLEGENDS_PRIVACY_POLICY.pdf`,
  ru: `${GH_BASE}/docs/EVERLEGENDS_PRIVACY_POLICY_RU.pdf`,
} as const);

export default function PrivacyPolicy() {
  const locale = useLanguage();
  const pdfSrc = PRIVACY_PDF[locale] ?? PRIVACY_PDF.en;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="content-max py-12">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {t(translations.privacyPage.title, locale)}
        </h1>

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
}
