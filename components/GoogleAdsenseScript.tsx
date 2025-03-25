"use client"

import Script from "next/script"

export function GoogleAdsenseScript() {
  // Get AdSense client ID from environment variable or disable if not available
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || ""

  // Don't render the script if there's no valid client ID
  if (!adsenseClientId || adsenseClientId === "XXXXXXXXXXXXXXXX") {
    return null
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
      crossOrigin="anonymous"
      strategy="lazyOnload"
      onError={(e) => console.error("AdSense script failed to load", e)}
    />
  )
}
