import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import EmergencyCTA from "@/components/EmergencyCTA";
import { PHONE_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Ambulance Service in Mamillagudaem, Khammam | Call ${PHONE_DISPLAY}`,
  description: `Primary base emergency ambulance service at Mamillagudaem, Khammam. Fast 5-min dispatch for ICU, oxygen, and freezer box. Call ${PHONE_DISPLAY}.`,
};

export default function MamillagudaemAmbulance() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <EmergencyCTA />
    </main>
  );
}
