"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, ShieldAlert, MapPin } from "lucide-react";
import {
  BUSINESS_NAME,
  CALL_LINK,
  PHONE_DISPLAY,
  WHATSAPP_LINK,
} from "@/lib/constants";
import { trackCall, trackWhatsApp } from "@/lib/tracking";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md border-b border-white/10 shadow-lg py-2.5"
          : "bg-gradient-to-b from-navy-950/95 via-navy-950/80 to-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emergency-500/20 border border-emergency-500/40 flex items-center justify-center text-emergency-400 group-hover:scale-105 transition-transform siren-blink flex-shrink-0">
              <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-2xl text-white tracking-wide leading-none group-hover:text-emergency-300 transition-colors">
                KHAMMAM AMBULANCE
              </span>
              <span className="hidden sm:flex text-[10px] text-emergency-400 font-semibold font-heading tracking-widest uppercase items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 inline" /> Mayuri Center, Khammam · 24/7
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              Services
            </a>
            <a href="#coverage" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              30km Radius Coverage
            </a>
            <a href="#reviews" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              Reviews
            </a>
            <a href="#faq" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              FAQ
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              onClick={() => trackWhatsApp("navbar")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 glass border border-green-500/30 hover:bg-green-500/20 text-green-300 px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="whitespace-nowrap">WhatsApp</span>
            </a>
            <a
              href={CALL_LINK}
              onClick={() => trackCall("navbar")}
              className="btn-emergency flex items-center gap-2 bg-emergency-500 hover:bg-emergency-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold font-heading tracking-wide transition-all shadow-lg shadow-emergency-500/30 hover:scale-105 emergency-pulse whitespace-nowrap"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">CALL {PHONE_DISPLAY}</span>
            </a>
          </div>

          {/* Mobile Menu & Call Quick Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={CALL_LINK}
              onClick={() => trackCall("navbar_mobile")}
              className="flex items-center gap-1.5 bg-emergency-500 hover:bg-emergency-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold font-heading emergency-pulse shadow-md whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="whitespace-nowrap">CALL NOW</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 glass text-white/80 hover:text-white rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 glass-dark rounded-2xl border border-white/10 space-y-3 animate-slide-up">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white/90 font-medium text-sm py-2 px-3 rounded-lg hover:bg-white/10"
            >
              Ambulance Services
            </a>
            <a
              href="#coverage"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white/90 font-medium text-sm py-2 px-3 rounded-lg hover:bg-white/10"
            >
              30 km Service Area (Khammam)
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white/90 font-medium text-sm py-2 px-3 rounded-lg hover:bg-white/10"
            >
              Google Reviews
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white/90 font-medium text-sm py-2 px-3 rounded-lg hover:bg-white/10"
            >
              FAQ
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={CALL_LINK}
                onClick={() => trackCall("mobile_menu")}
                className="w-full flex items-center justify-center gap-2 bg-emergency-500 text-white py-3 rounded-xl font-bold font-heading text-sm whitespace-nowrap"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">Call {PHONE_DISPLAY}</span>
              </a>
              <a
                href={WHATSAPP_LINK}
                onClick={() => trackWhatsApp("mobile_menu")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 glass border border-green-500/40 text-green-300 py-3 rounded-xl font-bold font-heading text-sm whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="whitespace-nowrap">WhatsApp Instant Chat</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
