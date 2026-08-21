import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import EmergencyCTA from "@/components/EmergencyCTA";
import { PHONE_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `24/7 Emergency Ambulance Service in Wyra, Khammam | Call ${PHONE_DISPLAY}`,
  description: `24/7 Emergency ICU & Oxygen Ambulance dispatch in Wyra and surrounding mandals within Khammam 30km radius. Call ${PHONE_DISPLAY}.`,
};

export default function WyraAmbulance() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <EmergencyCTA />
    </main>
  );
}
