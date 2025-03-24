/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh5.googleusercontent.com",
      "lh3.googleusercontent.com",
      "lh4.googleusercontent.com",
      "lh6.googleusercontent.com",
      "maps.googleapis.com",
      "streetviewpixels-pa.googleapis.com",
      "images.unsplash.com",
      "salon-api.vercel.app",
      "fastly.picsum.photos"
    ]
  },
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
