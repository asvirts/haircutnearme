import { useEffect } from "react"

interface GoogleAdsenseProps {
  client: string
  slot: string
  format?: "auto" | "rectangle" | "vertical" | "horizontal"
  responsive?: boolean
  style?: React.CSSProperties
}

export function GoogleAdsense({
  client,
  slot,
  format = "auto",
  responsive = true,
  style = {}
}: GoogleAdsenseProps) {
  useEffect(() => {
    try {
      // Force AdSense to load ads when component mounts
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.error("AdSense error:", error)
    }
  }, [])

  return (
    <div style={{ overflow: "hidden", ...style }}>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          width: responsive ? "100%" : undefined,
          height: responsive && format === "auto" ? "100%" : undefined
        }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  )
}
