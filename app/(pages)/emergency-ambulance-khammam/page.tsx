import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import ServiceAreas from "@/components/ServiceAreas";
import EmergencyCTA from "@/components/EmergencyCTA";
import FAQ from "@/components/FAQ";
import { BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `24/7 Emergency Ambulance Service in Khammam | Call ${PHONE_DISPLAY}`,
  description: `Emergency ambulance service in Khammam town & 30 km radius (Mayuri Center, Station Rd, Wyra, Nelakondapalli). Fast 24/7 ICU & patient transport. Call ${PHONE_DISPLAY} immediately.`,
};

export default function EmergencyAmbulanceKhammam() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <ServiceAreas />
      <EmergencyCTA />
      <FAQ />
    </main>
  );
}
