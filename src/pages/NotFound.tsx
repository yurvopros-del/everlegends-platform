import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, t } from "@/lib/translations";

const NotFound = () => {
  const location = useLocation();
  const locale = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted" lang={locale}>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t(translations.notFound.message, locale)}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {t(translations.notFound.backHome, locale)}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
