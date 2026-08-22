"use client";

import { Phone, MessageCircle, ShieldAlert } from "lucide-react";
import { CALL_LINK, PHONE_DISPLAY, WHATSAPP_LINK } from "@/lib/constants";
import { trackCall, trackWhatsApp } from "@/lib/tracking";

export default function EmergencyCTA() {
  return (
    <section id="emergency-cta" className="py-14 bg-red-gradient relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-bold font-heading uppercase tracking-widest">
              <ShieldAlert className="w-4 h-4 text-yellow-400" />
              24/7 IMMEDIATE EMERGENCY DISPATCH
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-white leading-tight">
              MEDICAL EMERGENCY IN KHAMMAM?
            </h2>
            <p className="text-white/90 text-lg font-medium">
              Don&apos;t delay! Call Mahesh immediately for 24/7 ICU ambulance, oxygen support, or dead body freezer box in Khammam &amp; 30 km radius.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a
              href={CALL_LINK}
              onClick={() => trackCall("emergency_cta")}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white hover:bg-slate-100 text-emergency-600 px-6 sm:px-8 py-4 rounded-2xl text-base sm:text-lg lg:text-xl font-bold font-heading tracking-wide shadow-2xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-emergency-600 animate-bounce flex-shrink-0" />
              <span className="whitespace-nowrap">CALL {PHONE_DISPLAY}</span>
            </a>

            <a
              href={WHATSAPP_LINK}
              onClick={() => trackWhatsApp("emergency_cta")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-black/40 hover:bg-black/60 text-white border border-white/30 px-6 sm:px-8 py-4 rounded-2xl text-base sm:text-lg lg:text-xl font-bold font-heading tracking-wide transition-all hover:scale-105 whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
              <span className="whitespace-nowrap">WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
