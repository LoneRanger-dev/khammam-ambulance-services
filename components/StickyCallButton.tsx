"use client";

import { Phone, MessageCircle } from "lucide-react";
import { CALL_LINK, PHONE_DISPLAY, WHATSAPP_LINK } from "@/lib/constants";
import { trackCall, trackWhatsApp } from "@/lib/tracking";

export default function StickyCallButton() {
  return (
    <aside
      className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-navy-950/95 backdrop-blur-md border-t border-white/10 md:hidden pb-safe shadow-2xl"
      aria-label="Emergency Contact Floating Bar"
    >
      <div className="grid grid-cols-2 gap-2">
        <a
          href={WHATSAPP_LINK}
          onClick={() => trackWhatsApp("sticky_bottom")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 glass border border-green-500/40 text-green-300 py-3 px-2 rounded-xl text-sm font-bold font-heading transition-all active:scale-95"
        >
          <MessageCircle className="w-5 h-5 text-green-400" />
          <span>WhatsApp</span>
        </a>

        <a
          href={CALL_LINK}
          onClick={() => trackCall("sticky_bottom")}
          className="btn-emergency flex items-center justify-center gap-2 bg-emergency-500 text-white py-3 px-2 rounded-xl text-sm font-bold font-heading emergency-pulse shadow-lg shadow-emergency-500/40 active:scale-95"
        >
          <Phone className="w-5 h-5 animate-bounce" />
          <span>CALL {PHONE_DISPLAY}</span>
        </a>
      </div>
    </aside>
  );
}
