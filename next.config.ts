import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["streetviewpixels-pa.googleapis.com", "maps.googleapis.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleapis.com",
        pathname: "**"
      }
    ]
  }
}

export default nextConfig
