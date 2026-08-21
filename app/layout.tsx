import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import {
  BUSINESS_NAME,
  PHONE_NUMBER,
  PHONE_DISPLAY,
  SITE_URL,
  ADDRESS,
  GEO,
  BUSINESS_HOURS,
  SERVICES_LIST,
  AREA_SERVED,
  WHATSAPP_NUMBER,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_MAPS_URL,
  EMAIL,
} from "@/lib/constants";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} | 24/7 Emergency Ambulance in Khammam – Call ${PHONE_DISPLAY}`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: `${BUSINESS_NAME} — 24/7 emergency ambulance in Mamillagudaem, Mayuri Center, Station Rd, Wyra, & 30 km radius of Khammam. ICU ambulance with ventilator, oxygen, dead body freezer box, inter-state transfers. Call ${PHONE_DISPLAY} now. Rated ${GOOGLE_RATING}★ on Google.`,
  keywords: [
    "khammam ambulance service",
    "emergency ambulance khammam",
    "ICU ambulance khammam",
    "oxygen ambulance khammam",
    "ventilator ambulance khammam",
    "ambulance near me khammam",
    "ambulance service mamillagudaem",
    "ambulance service station road mayuri center khammam",
    "dead body freezer box khammam",
    "hospital transfer ambulance khammam",
    "inter state ambulance service khammam",
    "24 hour ambulance khammam",
    "wyra ambulance service",
    "nelakondapalli ambulance service",
    "kalluru ambulance service",
    "kusumanchi ambulance service",
    "patient transport khammam",
    "mahesh ambulance khammam",
  ],
  authors: [{ name: BUSINESS_NAME }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} | 24/7 Emergency Ambulance in Khammam – Call ${PHONE_DISPLAY}`,
    description: `Need an emergency ambulance in Khammam NOW? ${BUSINESS_NAME} — 24/7 ICU ventilator, oxygen & dead body freezer box service within 30km radius & All India. Call ${PHONE_DISPLAY}.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_NAME} | 24/7 Emergency Ambulance in Khammam`,
    description: `24/7 ICU ambulance in Khammam 30km radius & All India. Call ${PHONE_DISPLAY} for immediate response.`,
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "healthcare",
  verification: {
    google: "PsqVYmdfmMUhna01JtFBFuEt172PGGS7O1fvshpKoL4",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#020c1b",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "EmergencyService"],
      "@id": `${SITE_URL}/#business`,
      name: BUSINESS_NAME,
      description: `24/7 emergency ambulance service in Khammam, Telangana. ICU ambulance, oxygen ambulance, ventilator ambulance, dead body freezer box, and inter-state transfers across 30km radius of Khammam & All India.`,
      url: SITE_URL,
      telephone: PHONE_NUMBER,
      email: EMAIL,
      image: `${SITE_URL}/images/hero_ambulance.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.state,
        postalCode: ADDRESS.postalCode,
        addressCountry: ADDRESS.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: GEO.latitude,
        longitude: GEO.longitude,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday",
        ],
        opens: BUSINESS_HOURS.opens,
        closes: BUSINESS_HOURS.closes,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: String(GOOGLE_RATING),
        reviewCount: String(GOOGLE_REVIEW_COUNT),
        bestRating: "5",
        worstRating: "1",
      },
      sameAs: [
        `https://wa.me/${WHATSAPP_NUMBER}`,
        GOOGLE_MAPS_URL,
      ],
      hasMap: GOOGLE_MAPS_URL,
      areaServed: AREA_SERVED.map((area) => ({
        "@type": "Place",
        name: area,
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Ambulance Services",
        itemListElement: SERVICES_LIST.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service,
          },
        })),
      },
      priceRange: "$$",
    },
  ];

  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${syne.variable} ${dmSans.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="font-body antialiased mobile-bottom-safe">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
