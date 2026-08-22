"use client";

import Image from "next/image";
import { Phone, HeartPulse, Activity, Box, Truck, ShieldAlert, Navigation } from "lucide-react";
import { CALL_LINK, IMAGES, PHONE_DISPLAY } from "@/lib/constants";
import { trackCall } from "@/lib/tracking";

const services = [
  {
    id: "icu-ambulance",
    title: "ICU Ventilator Ambulance Service",
    description:
      "Fully equipped Advanced Life Support (ALS) mobile ICU unit with critical care ventilator, cardiac monitor, multipara monitor, suction apparatus, and emergency medicines handled by trained medical staff.",
    image: IMAGES.interior,
    icon: HeartPulse,
    badge: "CRITICAL CARE",
    features: ["Modern ICU Ventilator", "Cardiac Monitor & ECG", "Oxygen Cylinder Setup", "Trained ICU Paramedic"],
  },
  {
    id: "oxygen-ambulance",
    title: "Oxygen Support Ambulance",
    description:
      "Dedicated oxygen-fitted ambulances for patients requiring continuous high-flow oxygen supply during local hospital transport in Khammam and outstation transit.",
    image: IMAGES.oxygen,
    icon: Activity,
    badge: "24/7 OXYGEN",
    features: ["High-Capacity Oxygen Cylinders", "Nebulizer & Suction Unit", "Comfortable Stretcher Bed", "Fast Dispatch in Khammam"],
  },
  {
    id: "freezer-box",
    title: "Dead Body Freezer Box Service",
    description:
      "Hygienic dead body freezer box rental service & funeral ambulance transport. Maintains low temperatures to preserve deceased persons with respect and care.",
    image: IMAGES.freezerBox,
    icon: Box,
    badge: "FREEZER BOX RENTAL",
    features: ["Stainless Steel Cold Cabinet", "24/7 Home Delivery in Khammam", "Long-Distance Dead Body Transport", "Clean & Sanitized Unit"],
  },
  {
    id: "emergency-transport",
    title: "24/7 Local Emergency Transport (30 km Radius)",
    description:
      "Rapid emergency dispatch across Mayuri Center, Station Rd, Mamillagudaem, Wyra, Nelakondapalli, Kusumanchi, Kalluru, and all surrounding areas of Khammam district within 30 km.",
    image: IMAGES.hero,
    icon: ShieldAlert,
    badge: "FAST DISPATCH",
    features: ["Coverage in 30 km Radius", "Under 15 Min Response Target", "Stretcher & Wheelchair", "24/7 Availability"],
  },
  {
    id: "hospital-transfer",
    title: "Inter-Hospital Patient Transfer",
    description:
      "Safe and smooth patient transfers between local Khammam hospitals and major super-specialty hospitals in Hyderabad, Vijayawada, and Warangal.",
    image: IMAGES.ventilator,
    icon: Truck,
    badge: "SUPER-SPECIALTY TRANSFERS",
    features: ["Khammam to Hyderabad Route", "Khammam to Vijayawada Route", "Bed-to-Bed Transfer", "Continuous Monitoring"],
  },
  {
    id: "interstate-ambulance",
    title: "Inter-State Long Distance Transport",
    description:
      "Long-distance outstation ambulance service connecting Khammam to Chennai, Bengaluru, Visakhapatnam, Mumbai, and all major cities across India.",
    image: IMAGES.fleet,
    icon: Navigation,
    badge: "ALL INDIA SERVICE",
    features: ["Pan-India Permit", "Dual Oxygen Tanks & Inverter", "Experienced Highway Drivers", "Competitive Km Rates"],
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-navy-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-emergency-500/30 text-emergency-300 text-xs font-semibold font-heading uppercase tracking-wider mb-3">
            EMERGENCY AMBULANCE SERVICES
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">
            COMPREHENSIVE <span className="gradient-text">MEDICAL TRANSPORT</span> IN KHAMMAM
          </h2>
          <p className="text-white/70 text-base sm:text-lg">
            Available 24 hours a day, 365 days a year across Mayuri Center, Station Road, Mamillagudaem, and 30 km radius of Khammam.
          </p>
        </div>

        {/* Grid of Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="service-card glass-dark rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group hover:border-emergency-500/50 transition-all duration-300"
              >
                <div>
                  {/* Service Image Header */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="bg-emergency-500/90 backdrop-blur-md text-white text-[11px] font-bold font-heading px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                        {service.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emergency-500/20 border border-emergency-500/40 flex items-center justify-center text-emergency-400 backdrop-blur-md flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-2xl text-white group-hover:text-emergency-300 transition-colors leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <p className="text-white/75 text-sm leading-relaxed font-body">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-2 pt-2 border-t border-white/10">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-white/85">
                          <span className="w-1.5 h-1.5 rounded-full bg-emergency-400 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-5 sm:p-6 pt-0">
                  <a
                    href={CALL_LINK}
                    onClick={() => trackCall(`service_${service.id}`)}
                    className="w-full flex items-center justify-center gap-2 bg-emergency-500/90 hover:bg-emergency-600 text-white font-bold font-heading py-3 px-4 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-emergency-500/30 whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">BOOK NOW · {PHONE_DISPLAY}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
