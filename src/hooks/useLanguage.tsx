import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

export type Locale = "en" | "ru";

const STORAGE_KEYS = ["locale", "lang", "i18nextLng"] as const;

function readStoredLocale(): Locale | null {
  try {
    for (const k of STORAGE_KEYS) {
      const v = localStorage.getItem(k);
      if (v === "ru" || v === "en") return v;
    }
  } catch {}
  return null;
}

function writeStoredLocale(locale: Locale) {
  try {
    for (const k of STORAGE_KEYS) localStorage.setItem(k, locale);
  } catch {}
}

function normalizeLocale(value: string | null): Locale | null {
  if (!value) return null;
  const v = value.toLowerCase();
  if (v === "ru" || v.startsWith("ru")) return "ru";
  if (v === "en" || v.startsWith("en")) return "en";
  return null;
}

export function useLanguage(): Locale {
  const location = useLocation();
  const [stored, setStored] = useState<Locale>(() => readStoredLocale() ?? "en");

  // Determine locale in a stable, deterministic order:
  // 1) explicit ?lang=ru|en (if present)
  // 2) stored locale (localStorage)
  // 3) path prefix (/ru...) as fallback only
  // 4) default en
  const derived = useMemo<Locale>(() => {
    const url = new URL(window.location.href);
    const q = normalizeLocale(url.searchParams.get("lang"));
    if (q) return q;

    const fromStore = readStoredLocale();
    if (fromStore) return fromStore;

    const p = location.pathname || "";
    if (p === "/ru" || p.startsWith("/ru/")) return "ru";

    return "en";
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (derived !== stored) {
      setStored(derived);
    }
    writeStoredLocale(derived);
  }, [derived, stored]);

  return stored;
}

export default useLanguage;