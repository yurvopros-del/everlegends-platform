import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export type Locale = "en" | "ru";

const STORAGE_KEYS = ["locale", "lang", "i18nextLng"] as const;

function normalizeLocale(value: string | null): Locale | null {
  if (!value) return null;
  const v = value.toLowerCase();
  if (v === "ru" || v.startsWith("ru")) return "ru";
  if (v === "en" || v.startsWith("en")) return "en";
  return null;
}

function readStoredLocale(): Locale | null {
  try {
    for (const k of STORAGE_KEYS) {
      const v = localStorage.getItem(k);
      const n = normalizeLocale(v);
      if (n) return n;
    }
  } catch {}
  return null;
}

function writeStoredLocale(locale: Locale) {
  try {
    for (const k of STORAGE_KEYS) localStorage.setItem(k, locale);
  } catch {}
}

const LanguageContext = createContext<Locale>("en");

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [locale, setLocale] = useState<Locale>(() => readStoredLocale() ?? "en");

  const derived = useMemo<Locale>(() => {
    // 1) explicit ?lang=ru|en (from 404.html redirect)
    try {
      const params = new URLSearchParams(location.search);
      const q = normalizeLocale(params.get("lang"));
      if (q) return q;
    } catch {}

    // 2) localStorage
    const stored = readStoredLocale();
    if (stored) return stored;

    // 3) path fallback only
    const p = location.pathname || "";
    if (p === "/ru" || p.startsWith("/ru/")) return "ru";

    return "en";
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (derived !== locale) setLocale(derived);
    writeStoredLocale(derived);
  }, [derived, locale]);

  return <LanguageContext.Provider value={locale}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): Locale {
  return useContext(LanguageContext);
}

export default useLanguage;