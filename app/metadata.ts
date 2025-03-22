import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Haircut Near Me | Find & Book Local Hair Salons & Barbers",
  description:
    "Find the best haircut near me - discover local hair salons and stylists, read reviews, and book appointments instantly. Great haircuts in your neighborhood!",
  keywords: [
    "haircut near me",
    "hair salon near me",
    "barber near me",
    "best haircuts",
    "local hair salon",
    "book haircut online",
    "hair styling",
    "affordable haircuts",
    "men's haircut",
    "women's haircut"
  ],
  authors: [{ name: "HaircutNearMe.net" }],
  creator: "HaircutNearMe.net",
  publisher: "HaircutNearMe.net",
  formatDetection: {
    telephone: true,
    address: true,
    email: true
  },
  metadataBase: new URL("https://haircutnearme.net"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/"
    }
  },
  openGraph: {
    title: "Haircut Near Me | Find & Book Local Hair Salons & Barbers",
    description:
      "Find the best haircut near me - discover local hair salons and stylists, read reviews, and book appointments instantly.",
    url: "https://haircutnearme.net",
    siteName: "HaircutNearMe.net",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/haircutnearme-og.jpg",
        width: 1200,
        height: 630,
        alt: "HaircutNearMe.net - Find the perfect haircut near you"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Haircut Near Me | Find & Book Local Hair Salons",
    description:
      "Find the best haircut near me - discover local hair salons and book instantly.",
    images: ["/images/haircutnearme-twitter.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  verification: {
    google: "google-site-verification-code-here",
    yandex: "yandex-verification-code-here",
    bing: "bing-verification-code-here"
  }
}
