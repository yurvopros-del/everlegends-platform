import { createContext, useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import type { Locale } from "@/lib/translations";

const LanguageContext = createContext<Locale>("en");

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const locale: Locale = useMemo(
    () => (location.pathname.startsWith("/ru") ? "ru" : "en"),
    [location.pathname]
  );

  return (
    <LanguageContext.Provider value={locale}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
