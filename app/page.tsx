import Link from "next/link"
import Image from "next/image"
import { SearchFilters } from "@/components/SearchFilters"
import { SalonCard } from "@/components/SalonCard"
import { StylistCard } from "@/components/StylistCard"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Star, Scissors, Sparkles } from "lucide-react"
import { Salon } from "@/lib/types"

// Mock data - in a real app, would come from Supabase
const FEATURED_SALONS: Salon[] = [
  {
    id: "1",
    name: "Elegance Hair Studio",
    address: "123 Main St",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    phone: "(555) 123-4567",
    email: "info@elegancehair.com",
    description:
      "A luxury hair salon offering premium hair services in a relaxing environment.",
    amenities: ["Wi-Fi", "Complimentary Drinks", "Parking"],
    created_at: "2023-01-01",
    updated_at: "2023-01-01",
    image_url: "/images/salon1.jpg",
    is_wheelchair_accessible: true,
    has_parking: true,
    price_range: 3
  },
  {
    id: "2",
    name: "Modern Cuts",
    address: "456 Elm St",
    city: "New York",
    state: "NY",
    zip: "10001",
    phone: "(555) 987-6543",
    email: "hello@moderncuts.com",
    description:
      "Trendy salon specializing in the latest hair styles and techniques.",
    amenities: ["Wi-Fi", "Kid-Friendly"],
    created_at: "2023-01-02",
    updated_at: "2023-01-02",
    image_url: "/images/salon2.jpg",
    is_wheelchair_accessible: true,
    has_parking: false,
    price_range: 2
  },
  {
    id: "3",
    name: "Classic Barber Shop",
    address: "789 Oak St",
    city: "Chicago",
    state: "IL",
    zip: "60007",
    phone: "(555) 456-7890",
    email: "info@classicbarber.com",
    description: "Traditional barbershop offering classic cuts and hot shaves.",
    amenities: ["Free Drinks", "TV"],
    created_at: "2023-01-03",
    updated_at: "2023-01-03",
    image_url: "/images/salon3.jpg",
    is_wheelchair_accessible: false,
    has_parking: true,
    price_range: 1
  }
]

export default function Home() {
  const handleFilterChange = (filters: any) => {
    console.log("Filters changed:", filters)
    // In a real app, this would be used for search/filtering
  }

  return (
    <div>
      {/* Hero section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 py-20 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
            Find Your Perfect Haircut
          </h1>
          <p className="mb-8 text-xl">
            Discover top-rated salons and stylists in your area
          </p>
          <div className="mx-auto max-w-4xl rounded-lg bg-white p-4 shadow-lg">
            <SearchFilters onFilterChange={handleFilterChange} />
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-12 text-3xl font-bold">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Find</h3>
              <p className="text-gray-600">
                Discover salons and stylists near you based on location,
                services, and reviews.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Book</h3>
              <p className="text-gray-600">
                Book appointments online instantly with real-time availability.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Review</h3>
              <p className="text-gray-600">
                Share your experience and help others find the perfect stylist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured salons section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Salons</h2>
            <Button variant="outline" asChild>
              <Link href="/salons">View All Salons</Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_SALONS.map((salon) => (
              <SalonCard key={salon.id} salon={salon} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold">
              Own a Salon or Barbershop?
            </h2>
            <p className="mb-8 text-lg">
              Join thousands of salons and stylists who use haircutnearme.net to
              grow their business.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/list-business">List Your Business</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
