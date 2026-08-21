import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import ServiceAreas from "@/components/ServiceAreas";
import EmergencyCTA from "@/components/EmergencyCTA";
import GoogleReviews from "@/components/GoogleReviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950 text-white relative">
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <ServiceAreas />
      <EmergencyCTA />
      <GoogleReviews />
      <FAQ />
      <Footer />
      <StickyCallButton />
      <FloatingWhatsApp />
    </main>
  );
}
