"use client";

import { Phone, MessageCircle, MapPin, ShieldAlert, Clock, Star, ExternalLink } from "lucide-react";
import {
  BUSINESS_NAME,
  SHORT_NAME,
  CALL_LINK,
  PHONE_DISPLAY,
  WHATSAPP_LINK,
  ADDRESS,
  GOOGLE_MAPS_URL,
  GOOGLE_MAPS_EMBED_URL,
  FOOTER_AREAS,
} from "@/lib/constants";
import { trackCall, trackWhatsApp } from "@/lib/tracking";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10 text-white/70 pt-16 pb-24 md:pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emergency-500/20 border border-emergency-500/40 flex items-center justify-center text-emergency-400 siren-blink">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <span className="font-display text-xl text-white tracking-wide">
                {SHORT_NAME}
              </span>
            </div>

            <p className="text-xs leading-relaxed text-white/70">
              Operated by Mahesh. Providing 24/7 life-saving ICU ambulance, oxygen support, ventilator transport, and dead body freezer box service across Khammam town, 30 km surrounding radius, and All India.
            </p>

            <div className="flex items-center gap-2 text-xs text-yellow-300 font-semibold bg-yellow-400/10 border border-yellow-400/20 px-3 py-1.5 rounded-lg w-fit">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>5.0 Rated Google Business Profile</span>
            </div>
          </div>

          {/* Quick Contact & Address */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-white text-base uppercase tracking-wider text-emergency-400">
              Emergency Helpline
            </h3>
            <div className="space-y-2 text-sm">
              <a
                href={CALL_LINK}
                onClick={() => trackCall("footer_phone")}
                className="flex items-center gap-2.5 text-white font-bold text-lg hover:text-emergency-300 transition-colors"
              >
                <Phone className="w-5 h-5 text-emergency-400" />
                <span>{PHONE_DISPLAY}</span>
              </a>

              <a
                href={WHATSAPP_LINK}
                onClick={() => trackWhatsApp("footer_wa")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-green-400 font-semibold text-sm hover:underline"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +91 96408 94489</span>
              </a>

              <div className="flex items-start gap-2 text-xs text-white/80 pt-2 border-t border-white/10">
                <MapPin className="w-4 h-4 text-emergency-400 flex-shrink-0 mt-0.5" />
                <span>{ADDRESS.display}</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-white/70">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Open 24 Hours · 365 Days a Year</span>
              </div>
            </div>
          </div>

          {/* 30 km Radius Locations */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-white text-base uppercase tracking-wider text-azure-400">
              30 km Service Mandals
            </h3>
            <ul className="grid grid-cols-2 gap-1.5 text-xs">
              {FOOTER_AREAS.map((area) => (
                <li key={area} className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors">
                  <span className="w-1 h-1 rounded-full bg-emergency-400" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Google Maps Embed Location */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-white text-base uppercase tracking-wider">
              Google Maps Location
            </h3>
            <div className="rounded-xl overflow-hidden border border-white/10 h-36 relative">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Khammam Ambulance Services Location Map"
              />
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emergency-400 hover:underline flex items-center gap-1"
            >
              Open in Google Maps <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <p className="text-center md:text-right">
            Designed &amp; Optimized by <strong className="text-white/80">DNS Digital Solutions</strong> for Google Ads Call Campaigns.
          </p>
        </div>
      </div>
    </footer>
  );
}
