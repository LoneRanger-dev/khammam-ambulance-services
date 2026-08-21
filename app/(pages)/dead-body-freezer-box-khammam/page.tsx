import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import EmergencyCTA from "@/components/EmergencyCTA";
import { PHONE_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Dead Body Freezer Box Service in Khammam | Call ${PHONE_DISPLAY}`,
  description: `24/7 Dead Body Freezer Box rental & mortuary vehicle transport in Khammam town & 30km surrounding mandals. Call ${PHONE_DISPLAY}.`,
};

export default function FreezerBoxKhammam() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <EmergencyCTA />
    </main>
  );
}
