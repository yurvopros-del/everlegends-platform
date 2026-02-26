import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/hooks/useLanguage";
import ScrollToHash from "@/components/ScrollToHash";
import AppErrorBoundary from "@/components/AppErrorBoundary";

import Index from "./pages/Index";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import CookieBanner from "./components/CookieBanner";

const queryClient = new QueryClient();

export default function App() {
  const basename = import.meta.env.BASE_URL; // "/everlegends-platform/" on GitHub Pages

  return (
    <BrowserRouter basename={basename}>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <AppErrorBoundary>
              <ScrollToHash />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />

                {/* RU aliases */}
                <Route path="/ru" element={<Index />} />
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
