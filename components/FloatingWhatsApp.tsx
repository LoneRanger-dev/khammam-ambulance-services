"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { trackWhatsApp } from "@/lib/tracking";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      onClick={() => trackWhatsApp("floating_widget")}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3 bg-green-500 hover:bg-green-600 text-white p-3.5 pl-4 rounded-full shadow-2xl shadow-green-500/40 hover:scale-105 transition-all duration-200 group"
      aria-label="Chat on WhatsApp with Khammam Ambulance Services"
    >
      <span className="text-xs font-bold font-heading tracking-wide hidden lg:inline max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
        Emergency Chat on WhatsApp
      </span>
      <MessageCircle className="w-6 h-6 fill-current" />
    </a>
  );
}
