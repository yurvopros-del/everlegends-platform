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

const App = () => {
  // Vite sets this to "/everlegends-platform/" in production because of vite.config.ts base.
  const basename = import.meta.env.BASE_URL;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <BrowserRouter basename={basename}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>

            <CookieBanner />

            <Toaster />
            <Sonner />
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
