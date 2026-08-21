import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import EmergencyCTA from "@/components/EmergencyCTA";
import { PHONE_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `24/7 Oxygen Support Ambulance in Khammam | Call ${PHONE_DISPLAY}`,
  description: `High-flow continuous oxygen fitted ambulance service in Khammam, Mayuri Center & 30km radius. Call ${PHONE_DISPLAY} for fast dispatch.`,
};

export default function OxygenAmbulanceKhammam() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <EmergencyCTA />
    </main>
  );
}
