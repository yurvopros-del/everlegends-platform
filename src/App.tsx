import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LanguageProvider } from "@/hooks/useLanguage";

import Index from "./pages/Index";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

import CookieBanner from "./components/CookieBanner";

const queryClient = new QueryClient();

export default function App() {
  // In production (GitHub Pages project site) this is "/everlegends-platform/"
  const basename = import.meta.env.BASE_URL;

  return (
    <BrowserRouter basename={basename}>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

            <CookieBanner />

            <Toaster />
            <Sonner />
          </TooltipProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
