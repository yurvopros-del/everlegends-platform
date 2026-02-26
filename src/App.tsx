import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { LanguageProvider, useLanguage } from "@/hooks/useLanguage";
import ScrollToHash from "@/components/ScrollToHash";
import AppErrorBoundary from "@/components/AppErrorBoundary";

import Index from "./pages/Index";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import CookieBanner from "./components/CookieBanner";

const queryClient = new QueryClient();

function DebugHUD() {
  const loc = useLocation();
  const locale = useLanguage();
  const base = import.meta.env.BASE_URL;
  return (
    <div style={{ position: "fixed", left: 8, bottom: 8, zIndex: 999999, padding: 10, borderRadius: 8, background: "rgba(0,0,0,0.75)", color: "#fff", font: "12px/1.4 ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}>
      <div><b>DEBUG</b></div>
      <div>base: {base}</div>
      <div>path: {loc.pathname}</div>
      <div>hash: {loc.hash || "(none)"}</div>
      <div>search: {loc.search || "(none)"}</div>
      <div>locale: {locale}</div>
    </div>
  );
}

function RuProbe() {
  const locale = useLanguage();
  return (
    <div>
      <div style={{ position: "fixed", top: 80, left: 8, zIndex: 999999, padding: 10, borderRadius: 8, background: "rgba(255,0,0,0.85)", color: "#fff", font: "12px/1.4 ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}>
        RU ROUTE HIT (locale: {locale})
      </div>
      <Index />
    </div>
  );
}

export default function App() {
  const basename = import.meta.env.BASE_URL;
  return (
    <BrowserRouter basename={basename}>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <AppErrorBoundary>
              <ScrollToHash />
              <DebugHUD />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />

                <Route path="/ru" element={<RuProbe />} />
                <Route path="/ru/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/ru/cookie-policy" element={<CookiePolicy />} />
                <Route path="/ru/" element={<Navigate to="/ru" replace />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
              <CookieBanner />
              <Toaster />
              <Sonner />
            </AppErrorBoundary>
          </TooltipProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
