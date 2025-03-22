"use client"

import Script from "next/script"

export function GoogleAdsenseScript() {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
      crossOrigin="anonymous"
      strategy="afterInteractive"
      onError={(e) => console.error("Script failed to load", e)}
    />
  )
}
