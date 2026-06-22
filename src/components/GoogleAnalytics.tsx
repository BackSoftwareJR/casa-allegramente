import { Suspense } from 'react';
import Script from 'next/script';
import GAPageViewTracker from './GAPageViewTracker';

const GA_MEASUREMENT_ID = 'G-PPG322967R';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: true
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <GAPageViewTracker measurementId={GA_MEASUREMENT_ID} />
      </Suspense>
    </>
  );
}
