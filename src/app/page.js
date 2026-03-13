import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ProblemServicesSection from "@/components/ProblemServicesSection";
import AudienceAndHelpSection from "@/components/AudienceAndHelpSection";
import ContactSection from "@/components/ContactSection";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido-principal">
        <HeroSection />
        <ProblemServicesSection />
        <AudienceAndHelpSection />
        <ContactSection />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}
