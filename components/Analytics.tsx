import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GOOGLE_ADS_ID } from "@/lib/tracking";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-GG9MGLW17W";
const PAGE_LOAD_CONVERSION_LABEL = process.env.NEXT_PUBLIC_ADS_PAGE_LOAD_LABEL || "ammeCIy019AcEN2ukaFE";

export default function Analytics() {
  return (
    <>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      <Script id="google-ads-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('config', '${GOOGLE_ADS_ID}');

          // Fire page load conversion once per session
          if (!sessionStorage.getItem('ads_page_load_conversion_sent')) {
            gtag('event', 'conversion', { send_to: '${GOOGLE_ADS_ID}/${PAGE_LOAD_CONVERSION_LABEL}' });
            sessionStorage.setItem('ads_page_load_conversion_sent', '1');
          }
        `}
      </Script>
    </>
  );
}
