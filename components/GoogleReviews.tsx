"use client";

import { Star, Quote, CheckCircle, ExternalLink } from "lucide-react";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GOOGLE_MAPS_URL } from "@/lib/constants";

const reviews = [
  {
    name: "Ramesh Reddy",
    location: "Mamillagudaem, Khammam",
    rating: 5,
    date: "1 week ago",
    comment:
      "Very fast emergency ambulance response in Khammam town! Called Mahesh brother midnight for an urgent ICU transfer to Hyderabad. Ventilator & doctor support was excellent. Highly recommended!",
  },
  {
    name: "Suresh Babu",
    location: "Wyra, Khammam",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Best ambulance service in 30 km range of Khammam. Prompt arrival in Wyra with oxygen support. Reasonable rates and very professional driver.",
  },
  {
    name: "Venkatesh K.",
    location: "Mayuri Center, Khammam",
    rating: 5,
    date: "1 month ago",
    comment:
      "Hired freezer box service and outstation dead body vehicle. Very respectful staff and clean freezer unit. Available 24 hours without any delay.",
  },
];

export default function GoogleReviews() {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-yellow-400/30 text-yellow-300 text-xs font-semibold font-heading uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" /> VERIFIED GOOGLE BUSINESS REVIEWS
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-white">
              WHAT OUR PATIENTS &amp; <span className="gradient-text">FAMILIES SAY</span>
            </h2>
          </div>

          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass border border-yellow-400/30 p-4 rounded-2xl flex items-center gap-4 hover:border-yellow-400/60 transition-all group"
          >
            <div className="text-center">
              <div className="text-3xl font-display text-white leading-none">{GOOGLE_RATING.toFixed(1)}</div>
              <div className="flex text-yellow-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-left border-l border-white/10 pl-4">
              <div className="text-xs font-bold text-white group-hover:text-yellow-300 transition-colors flex items-center gap-1">
                {GOOGLE_REVIEW_COUNT} Google Reviews <ExternalLink className="w-3 h-3" />
              </div>
              <div className="text-[11px] text-white/60">Station Rd, Mayuri Center, Khammam</div>
            </div>
          </a>
        </div>

        {/* Reviews Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((rev, index) => (
            <div key={index} className="glass-dark rounded-3xl p-6 border border-white/10 flex flex-col justify-between relative">
              <Quote className="w-8 h-8 text-emergency-500/20 absolute top-6 right-6" />

              <div className="space-y-4">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-white/85 text-sm leading-relaxed font-body italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    {rev.name} <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <div className="text-xs text-white/60">{rev.location}</div>
                </div>
                <span className="text-[11px] text-white/40">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
