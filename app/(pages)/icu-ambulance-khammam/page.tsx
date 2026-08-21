import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import EmergencyCTA from "@/components/EmergencyCTA";
import { PHONE_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `ICU Ventilator Ambulance in Khammam | Call ${PHONE_DISPLAY}`,
  description: `Advanced ICU Ambulance with Ventilator, Cardiac Monitor, and Paramedic staff in Khammam & 30km surrounding area. 24/7 service. Call ${PHONE_DISPLAY}.`,
};

export default function ICUAmbulanceKhammam() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <EmergencyCTA />
    </main>
  );
}
