"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";
import { CALL_LINK, PHONE_DISPLAY } from "@/lib/constants";
import { trackCall } from "@/lib/tracking";

const faqs = [
  {
    question: "How fast can Khammam Ambulance arrive at my location?",
    answer:
      "Our main base is located at Mayuri Center, Station Road, Mamillagudaem, Khammam. Within Khammam town center, we dispatch immediately and arrive in 5–15 minutes. For locations within our 30 km radius (Wyra, Nelakondapalli, Kusumanchi, Kalluru, Mudigonda, Thallada), response time is typically 15–25 minutes.",
  },
  {
    question: "What medical equipment is available inside the ICU ambulance?",
    answer:
      "Our ICU ventilator ambulance is equipped with a critical care transport ventilator, cardiac/multipara monitor, high-flow continuous oxygen cylinders, suction machine, emergency resuscitation kit, and stretcher bed. Paramedics and doctors are available upon request.",
  },
  {
    question: "Do you provide outstation patient transfer from Khammam to Hyderabad or Vijayawada?",
    answer:
      "Yes! We specialize in inter-hospital patient transfers from Khammam to major super-specialty hospitals in Hyderabad (KIMS, Yashoda, Apollo, Nizam's Institute), Vijayawada, Warangal, and Visakhapatnam.",
  },
  {
    question: "Is dead body freezer box rental service available 24/7 in Khammam?",
    answer:
      "Yes, we provide 24/7 dead body freezer box rental and home delivery across Khammam town and nearby mandals, as well as mortuary transport vehicles for outstation dead body transport.",
  },
  {
    question: "What are the charges for ambulance service in Khammam?",
    answer:
      "We offer fair and transparent pricing. Local emergency transport within Khammam town starts at minimal flat rates, while outstation inter-city transfers are charged on a clear per-kilometer basis. Call 096408 94489 for an instant quote.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-navy-900/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-white/20 text-white/90 text-xs font-semibold font-heading uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emergency-400" /> FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">
            EVERYTHING YOU <span className="gradient-text">NEED TO KNOW</span>
          </h2>
          <p className="text-white/70 text-base">
            Common questions about ambulance booking, response time, and services in Khammam district.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-dark rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-white hover:text-emergency-300 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-emergency-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-white/80 text-sm leading-relaxed font-body border-t border-white/5 mt-1">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Card */}
        <div className="mt-10 p-6 glass rounded-2xl border border-emergency-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="font-bold text-white text-lg">Have more emergency questions?</h3>
            <p className="text-xs text-white/70">Our helpline is active 24 hours a day, 365 days a year.</p>
          </div>

          <a
            href={CALL_LINK}
            onClick={() => trackCall("faq_help")}
            className="flex items-center gap-2 bg-emergency-500 hover:bg-emergency-600 text-white font-bold font-heading px-6 py-3 rounded-xl text-sm transition-all emergency-pulse"
          >
            <Phone className="w-4 h-4" />
            <span>CALL {PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
