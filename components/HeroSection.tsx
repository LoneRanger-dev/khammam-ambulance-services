"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  Clock,
  Star,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import {
  CALL_LINK,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  PHONE_DISPLAY,
  WHATSAPP_LINK,
  GOOGLE_MAPS_URL,
  IMAGES,
  BUSINESS_NAME,
} from "@/lib/constants";
import { trackCall, trackWhatsApp } from "@/lib/tracking";

const trustBadges = [
  { icon: Star, label: `${GOOGLE_RATING.toFixed(1)}★ Verified on Google`, highlight: true },
  { icon: CheckCircle2, label: `${GOOGLE_REVIEW_COUNT} Reviews`, highlight: false },
  { icon: ShieldCheck, label: "ICU Ventilator Equipped", highlight: false },
  { icon: Clock, label: "24/7 Khammam & 30km Coverage", highlight: false },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-hero-gradient noise-bg pt-16 sm:pt-20"
      aria-label={`${BUSINESS_NAME} — 24/7 Emergency Ambulance Service in Khammam`}
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emergency-500/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-azure-500/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      {/* Live status bar */}
      <div
        className="w-full bg-emergency-500/15 border-b border-emergency-500/30 py-2 mt-1 sm:mt-2"
        role="status"
        aria-label="Emergency lines open 24 hours, 7 days a week in Khammam & surrounding 30 km radius"
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 text-center">
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 flex-shrink-0" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emergency-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emergency-400" />
          </span>
          <span className="text-emergency-300 text-[11px] sm:text-sm font-semibold font-heading tracking-wide uppercase">
            24/7 EMERGENCY AMBULANCE · KHAMMAM &amp; 30 KM RADIUS
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 pb-8 sm:pt-10 lg:pt-14 lg:pb-14">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* ── Image Banner (Order-1 on Mobile, Order-2 on Desktop) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="block relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-lg lg:max-w-xl mx-auto">
              <div className="absolute -inset-4 bg-emergency-500/15 rounded-3xl blur-2xl" aria-hidden="true" />

              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-black/80 bg-navy-950">
                <Image
                  src={IMAGES.hero}
                  alt="Khammam Ambulance Services Mahesh vehicle banner — FAST. SAFE. ALWAYS HERE. TS04UE5854"
                  width={1200}
                  height={800}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto object-contain rounded-3xl"
                  quality={95}
                />
              </div>

              {/* Floating rating badges */}
              <motion.a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="hidden sm:block sm:absolute -top-5 -right-5 glass border border-yellow-400/30 px-4 py-3 rounded-2xl hover:border-yellow-400/60 transition-colors shadow-xl z-10"
                aria-label={`Rated ${GOOGLE_RATING} stars on Google`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-display text-white leading-none">{GOOGLE_RATING.toFixed(1)}</span>
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                </div>
                <div className="text-white/60 text-xs mt-0.5">Google Business Rating</div>
              </motion.a>

              <motion.a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="hidden sm:block sm:absolute -bottom-5 -left-5 glass border border-emergency-500/30 px-4 py-3 rounded-2xl hover:border-emergency-500/60 transition-colors shadow-xl z-10"
                aria-label="30 km Khammam Service Area"
              >
                <div className="text-2xl font-display text-emergency-400 leading-none">30 KM</div>
                <div className="text-white/60 text-xs mt-0.5">Khammam Coverage Radius</div>
              </motion.a>
            </div>
          </motion.div>

          {/* ── Text Content (Order-2 on Mobile, Order-1 on Desktop) ── */}
          <div className="space-y-5 sm:space-y-6 order-2 lg:order-1">
            {/* 24/7 Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 glass border border-emergency-500/30 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full"
            >
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emergency-400" aria-hidden="true" />
              <span className="text-emergency-300 text-xs sm:text-sm font-semibold font-heading tracking-wider">
                24/7 EMERGENCY &amp; ICU AMBULANCE · KHAMMAM
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-none text-white"
            >
              EVERY{" "}
              <span className="gradient-text">SECOND</span>
              <br />
              COUNTS.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-white/80 text-base sm:text-xl leading-relaxed max-w-lg font-body"
            >
              Khammam&apos;s trusted emergency ambulance service operated by Mahesh. ICU ventilator support, oxygen, freezer box, and inter-state transfers across <strong className="text-white font-semibold">30 km radius of Khammam &amp; All India</strong>.
            </motion.p>

            {/* Location Pill */}
            <motion.div
              custom={2.5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-start gap-2.5 glass border border-white/10 p-3 rounded-2xl max-w-md"
            >
              <MapPin className="w-5 h-5 text-emergency-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-white/90">
                <span className="font-bold text-white">Google Business Profile Location:</span> Station Rd, Mayuri Center, Mamillagudaem, Khammam 507001
              </p>
            </motion.div>

            {/* CTA Buttons — Single Line Call Number */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={CALL_LINK}
                onClick={() => trackCall("hero")}
                className="btn-emergency inline-flex items-center justify-center gap-2.5 bg-emergency-500 hover:bg-emergency-600 active:bg-emergency-700 text-white px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg font-bold font-heading tracking-wide transition-all duration-200 shadow-lg shadow-emergency-500/30 hover:shadow-emergency-500/50 hover:scale-105 emergency-pulse whitespace-nowrap min-w-max shrink-0"
                aria-label={`Call ${BUSINESS_NAME} now at ${PHONE_DISPLAY}`}
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap inline-block">CALL {PHONE_DISPLAY}</span>
              </a>
              <a
                href={WHATSAPP_LINK}
                onClick={() => trackWhatsApp("hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 glass border border-green-500/40 hover:bg-green-500/20 text-white px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg font-bold font-heading tracking-wide transition-all duration-200 hover:scale-105 whitespace-nowrap min-w-max shrink-0"
                aria-label="Contact Khammam Ambulance Services on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap inline-block">WhatsApp Now</span>
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-2 pt-1"
            >
              {trustBadges.map(({ icon: Icon, label, highlight }) => (
                <div
                  key={label}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium ${
                    highlight
                      ? "bg-yellow-400/10 border border-yellow-400/30 text-yellow-300"
                      : "glass text-white/80"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${highlight ? "text-yellow-400" : "text-emergency-400"}`} aria-hidden="true" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-6 lg:mt-12"
        >
          <a
            href="#services"
            className="flex flex-col items-center gap-1 text-white/40 hover:text-white/80 transition-colors group"
            aria-label="Scroll down to services"
          >
            <span className="text-xs font-medium tracking-widest">EXPLORE SERVICES</span>
            <ChevronDown className="w-5 h-5 animate-bounce" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
