"use client"

import Link from "next/link"
import Image from "next/image"
import { SearchFilters } from "@/components/SearchFilters"
import { SalonCard } from "@/components/SalonCard"
import { StylistCard } from "@/components/StylistCard"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Star, Scissors, Sparkles } from "lucide-react"
import { Salon } from "@/lib/types"
import Head from "next/head"
import { useEffect, useState } from "react"
import { getSalons } from "@/lib/api"

// Replace mock data with real data from Supabase
export default function Home() {
  const [featuredSalons, setFeaturedSalons] = useState<Salon[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchFeaturedSalons() {
      try {
        const salons = await getSalons({}, 1, 3) // Limit to 3 featured salons
        setFeaturedSalons(salons)
      } catch (error) {
        console.error("Error fetching salons:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchFeaturedSalons()
  }, [])

  const handleFilterChange = (filters: Record<string, unknown>) => {
    console.log("Filters changed:", filters)
    // In a real app, this would be used for search/filtering
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HaircutNearMe.net",
    url: "https://haircutnearme.net",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://haircutnearme.net/salons?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 py-20 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero-bg.jpg"
            alt="Haircut near me - professional salon services"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
            Find the Best Haircut Near Me
          </h1>
          <p className="mb-8 text-xl">
            Discover top-rated hair salons and barbers in your neighborhood
          </p>
          <div className="mx-auto max-w-4xl rounded-lg bg-white p-4 shadow-lg">
            <SearchFilters onFilterChange={handleFilterChange} />
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16" aria-labelledby="how-it-works-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="how-it-works-heading" className="mb-12 text-3xl font-bold">
            How to Find the Perfect Haircut Near Me
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Find Local Salons</h3>
              <p className="text-gray-600">
                Discover the best hair salons and barber shops near you based on
                location, services, and reviews.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Book Your Haircut</h3>
              <p className="text-gray-600">
                Book haircut appointments online instantly with real-time
                availability at salons near you.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Review Your Experience
              </h3>
              <p className="text-gray-600">
                Share your haircut experience and help others find the perfect
                stylist in their area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured salons section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Featured Salons</h2>
            <Link
              href="/salons"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              View all salons
            </Link>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredSalons.map((salon) => (
                <SalonCard key={salon.id} salon={salon} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold">
              Own a Hair Salon or Barbershop?
            </h2>
            <p className="mb-8 text-lg">
              Join thousands of local hair salons and stylists who use
              haircutnearme.net to grow their business and attract new clients
              searching for "haircut near me".
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/list-business">List Your Salon</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ section for SEO */}
      <section className="py-16 bg-gray-50" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          <h2 id="faq-heading" className="mb-8 text-2xl font-bold text-center">
            Frequently Asked Questions About Finding a Haircut Near Me
          </h2>

          <div className="mx-auto max-w-3xl space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                How do I find the best haircut near me?
              </h3>
              <p className="text-gray-700">
                To find the best haircut near your location, use our search
                filters to enter your zip code or allow location access. You can
                browse salons by ratings, price range, and available services to
                find the perfect haircut in your neighborhood.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                How much does a haircut near me typically cost?
              </h3>
              <p className="text-gray-700">
                Haircut prices vary depending on location, salon type, and
                stylist experience. Basic haircuts typically range from $20-$50,
                while premium salons may charge $50-$100+. Our platform shows
                price ranges for each salon to help you find options in your
                budget.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Can I book a same-day haircut appointment near me?
              </h3>
              <p className="text-gray-700">
                Yes! Many salons offer same-day appointments. Use our "Available
                Today" filter to find salons with immediate openings near you.
                You can book your haircut appointment instantly through our
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
