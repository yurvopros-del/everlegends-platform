import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/useLanguage";

export default function Index() {
  const locale = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        <div className="content-max py-16">
          <div className="text-2xl font-bold">INDEX OK</div>
          <div className="mt-2 text-sm opacity-70">locale: {locale}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
