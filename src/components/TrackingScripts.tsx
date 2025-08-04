'use client';

import Script from 'next/script';
import { useEffect } from 'react';

interface TrackingScriptsProps {
  gaId?: string;
  fbPixelId?: string;
  gtmId?: string;
}

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
    dataLayer: any[];
  }
}

export default function TrackingScripts({
  gaId = process.env.NEXT_PUBLIC_GA_ID,
  fbPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  gtmId = process.env.NEXT_PUBLIC_GTM_ID
}: TrackingScriptsProps) {
  
  // Facebook Pixel initialization
  useEffect(() => {
    if (!fbPixelId) return;

    // Facebook Pixel code (from Meta documentation)
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s) {
        if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s);
      }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${fbPixelId}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);
    
    return () => {
      // Cleanup if needed
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [fbPixelId]);

  return (
    <>
      {/* CCM19 Cookie Banner */}
      <Script
        src="https://cloud.ccm19.de/app.js?apiKey=311a0210ec4af246f7683534b2dc8941ff7132244f2983ce&domain=6890a3c64c6a03b2e4048e02"
        strategy="afterInteractive"
        referrerPolicy="origin"
      />

      {/* Google Analytics GA4 */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}

      {/* Google Tag Manager */}
      {gtmId && (
        <>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* Facebook Pixel (noscript fallback) */}
      {fbPixelId && (
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${fbPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      )}
    </>
  );
}
