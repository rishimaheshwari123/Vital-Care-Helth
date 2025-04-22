"use client";
import { useEffect } from "react";
import Wrapper from "./wrapper";

export default function RootLayout({ children }) {
  useEffect(() => {
    // GTM script
    const gtmScript = document.createElement("script");
    gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WZF4QCRL');`;
    document.head.appendChild(gtmScript);

    // GA script
    const gaScript = document.createElement("script");
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-23RW5NTL09";
    gaScript.async = true;
    document.head.appendChild(gaScript);

    const gaInitScript = document.createElement("script");
    gaInitScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-23RW5NTL09');
    `;
    document.head.appendChild(gaInitScript);

    // Google Ads (AW) script
    const awScript = document.createElement("script");
    awScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-16461499591";
    awScript.async = true;
    document.head.appendChild(awScript);

    const awInitScript = document.createElement("script");
    awInitScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16461499591');
    `;
    document.head.appendChild(awInitScript);
  }, []);

  return (
    <html lang="en">
      <head />
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WZF4QCRL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
