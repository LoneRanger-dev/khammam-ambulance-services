"use client";

import { MapPin, Navigation, Phone, CheckCircle } from "lucide-react";
import { PRIMARY_AREAS, LONG_DISTANCE_AREAS, CALL_LINK, PHONE_DISPLAY, ADDRESS } from "@/lib/constants";
import { trackCall } from "@/lib/tracking";

export default function ServiceAreas() {
  return (
    <section id="coverage" className="py-16 lg:py-24 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-azure-500/30 text-azure-400 text-xs font-semibold font-heading uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" /> 30 KM RADIUS &amp; ALL INDIA COVERAGE
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">
            LOCAL KHAMMAM &amp; <span className="gradient-text">LONG-DISTANCE TRANSIT</span>
          </h2>
          <p className="text-white/75 text-base sm:text-lg">
            Based directly at <strong className="text-white">{ADDRESS.display}</strong>, covering all hospital emergencies within 30 km radius and outstation transfers across India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Local 30 km Coverage Box */}
          <div className="glass-dark rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emergency-500/20 border border-emergency-500/40 flex items-center justify-center text-emergency-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white">Local Khammam (30 km Radius)</h3>
                  <p className="text-xs text-emergency-400 font-semibold uppercase tracking-wider">Fast Emergency Response</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-6">
                {PRIMARY_AREAS.map((area) => (
                  <div key={area.name} className="glass p-3 rounded-xl border border-white/5 flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emergency-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">{area.name}</div>
                      <div className="text-[11px] text-white/60">{area.distance}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={CALL_LINK}
              onClick={() => trackCall("area_local")}
              className="w-full flex items-center justify-center gap-2 bg-emergency-500 hover:bg-emergency-600 text-white font-bold font-heading py-3.5 px-4 rounded-xl text-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>NEED LOCAL AMBULANCE IN KHAMMAM? CALL {PHONE_DISPLAY}</span>
            </a>
          </div>

          {/* Outstation & Interstate Box */}
          <div className="glass-dark rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-azure-500/20 border border-azure-500/40 flex items-center justify-center text-azure-400">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white">Inter-State &amp; Outstation Routes</h3>
                  <p className="text-xs text-azure-400 font-semibold uppercase tracking-wider">Long Distance Hospital Transfers</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {LONG_DISTANCE_AREAS.map((dest) => (
                  <div key={dest.name} className="glass p-3.5 rounded-xl border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-azure-400" />
                      <div>
                        <div className="text-sm font-bold text-white">Khammam ➔ {dest.name}</div>
                        <div className="text-xs text-white/60">{dest.state}</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-azure-300 bg-azure-500/10 border border-azure-500/20 px-2.5 py-1 rounded-lg">
                      {dest.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={CALL_LINK}
              onClick={() => trackCall("area_outstation")}
              className="w-full flex items-center justify-center gap-2 glass border border-azure-500/40 hover:bg-azure-500/20 text-azure-300 font-bold font-heading py-3.5 px-4 rounded-xl text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-azure-400" />
              <span>BOOK INTERSTATE TRANSIT · CALL {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
