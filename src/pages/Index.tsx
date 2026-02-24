import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FlagTicker from "@/components/FlagTicker";
import PhilosophySection from "@/components/PhilosophySection";
import SystemSection from "@/components/SystemSection";
import RewardsSection from "@/components/RewardsSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <HeroSection />
      <FlagTicker direction="left" />
      <PhilosophySection />
      <SystemSection />
      <FlagTicker direction="right" />
      <RewardsSection />
      <DownloadSection />
      <Footer />
    </main>
  );
};

export default Index;
