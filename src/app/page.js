import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import AudienceServicesSection from "@/components/AudienceServicesSection";
import ProblemServicesSection from "@/components/ProblemServicesSection";
import AudienceAndHelpSection from "@/components/AudienceAndHelpSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemServicesSection />
      <AudienceServicesSection />
      <AudienceAndHelpSection />
      <Footer />
    </>
  );
}
