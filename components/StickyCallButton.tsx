"use client";

import { Phone, MessageCircle } from "lucide-react";
import { CALL_LINK, PHONE_DISPLAY, WHATSAPP_LINK } from "@/lib/constants";
import { trackCall, trackWhatsApp } from "@/lib/tracking";

export default function StickyCallButton() {
  return (
    <aside
      className="fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-navy-950/95 backdrop-blur-md border-t border-white/10 md:hidden pb-safe shadow-2xl"
      aria-label="Emergency Contact Floating Bar"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={WHATSAPP_LINK}
          onClick={() => trackWhatsApp("sticky_bottom")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 glass border border-green-500/40 text-green-300 py-3 px-1.5 rounded-xl font-bold font-heading transition-all active:scale-95 whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
          <span className="text-xs sm:text-sm whitespace-nowrap">WhatsApp</span>
        </a>

        <a
          href={CALL_LINK}
          onClick={() => trackCall("sticky_bottom")}
          className="btn-emergency flex items-center justify-center gap-1.5 bg-emergency-500 text-white py-3 px-1.5 rounded-xl font-bold font-heading emergency-pulse shadow-lg shadow-emergency-500/40 active:scale-95 whitespace-nowrap"
        >
          <Phone className="w-4 h-4 flex-shrink-0 animate-bounce" />
          <span className="text-[11.5px] min-[360px]:text-xs min-[410px]:text-sm whitespace-nowrap tracking-tight font-bold">
            CALL {PHONE_DISPLAY}
          </span>
        </a>
      </div>
    </aside>
  );
}
