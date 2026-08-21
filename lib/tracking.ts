type GtagFn = (...args: unknown[]) => void;

// Default Google Ads Conversion ID & Label (Replace with Mahesh's Google Ads AW- ID and Label)
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18323101533";
export const CONTACT_CONVERSION_LABEL = process.env.NEXT_PUBLIC_ADS_CONTACT_LABEL || "r7sfCNHkhdEcEN2ukaFE";

function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  const w = window as Window & { gtag?: GtagFn; dataLayer?: unknown[] };
  if (typeof w.gtag === "function") {
    w.gtag(...args);
  }
}

// Fires the Google Ads "Phone Call / WhatsApp Contact" conversion.
function trackContactConversion() {
  gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${CONTACT_CONVERSION_LABEL}`,
  });
}

export function trackCall(label = "khammam_call_click") {
  gtag("event", "phone_call_click", {
    event_category: "emergency_engagement",
    event_label: label,
    value: 1,
  });
  trackContactConversion();
}

export function trackWhatsApp(label = "khammam_whatsapp_click") {
  gtag("event", "whatsapp_click", {
    event_category: "emergency_engagement",
    event_label: label,
    value: 1,
  });
  trackContactConversion();
}
