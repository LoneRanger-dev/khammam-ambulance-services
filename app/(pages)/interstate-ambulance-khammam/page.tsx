import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServiceAreas from "@/components/ServiceAreas";
import EmergencyCTA from "@/components/EmergencyCTA";
import { PHONE_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Interstate Ambulance Service Khammam to Hyderabad & All India | Call ${PHONE_DISPLAY}`,
  description: `Interstate long-distance ambulance transport connecting Khammam to Hyderabad, Vijayawada, Warangal, Chennai, and Bengaluru. Call ${PHONE_DISPLAY}.`,
};

export default function InterstateAmbulanceKhammam() {
  return (
    <main>
      <HeroSection />
      <ServiceAreas />
      <EmergencyCTA />
    </main>
  );
}
