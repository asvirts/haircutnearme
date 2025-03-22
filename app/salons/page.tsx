"use client"

import { SearchFilters } from "@/components/SearchFilters"
import { SalonCard } from "@/components/SalonCard"
import { Salon } from "@/lib/types"

// This would be a server component in a real app
// For demo purposes, using mock data
const MOCK_SALONS: Salon[] = [
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
  },
  {
    id: "4",
    name: "Urban Style Lounge",
    address: "101 High St",
    city: "Boston",
    state: "MA",
    zip: "02108",
    phone: "(555) 222-3333",
    email: "hello@urbanstylesalon.com",
    description:
      "Modern salon specializing in urban and contemporary hairstyles.",
    amenities: ["Wi-Fi", "Coffee Bar", "Parking"],
    created_at: "2023-01-04",
    updated_at: "2023-01-04",
    image_url: "/images/salon4.jpg",
    is_wheelchair_accessible: true,
    has_parking: true,
    price_range: 3
  },
  {
    id: "5",
    name: "The Hair Loft",
    address: "222 Maple Ave",
    city: "Austin",
    state: "TX",
    zip: "73301",
    phone: "(555) 444-5555",
    email: "info@hairloft.com",
    description:
      "Boutique salon offering personalized hair services in a relaxed setting.",
    amenities: ["Free Drinks", "Wi-Fi", "Kid-Friendly"],
    created_at: "2023-01-05",
    updated_at: "2023-01-05",
    image_url: "/images/salon5.jpg",
    is_wheelchair_accessible: false,
    has_parking: true,
    price_range: 2
  },
  {
    id: "6",
    name: "Prestige Cuts",
    address: "333 Pine St",
    city: "Seattle",
    state: "WA",
    zip: "98101",
    phone: "(555) 666-7777",
    email: "contact@prestigecuts.com",
    description:
      "High-end salon providing luxury hair services and treatments.",
    amenities: ["Valet Parking", "Refreshments", "Wi-Fi"],
    created_at: "2023-01-06",
    updated_at: "2023-01-06",
    image_url: "/images/salon6.jpg",
    is_wheelchair_accessible: true,
    has_parking: true,
    price_range: 4
  }
]

export default function SalonsPage() {
  const handleFilterChange = (filters: Record<string, unknown>) => {
    console.log("Filters changed:", filters)
    // In a real app, this would filter the salons
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Salons & Barbershops</h1>

      <SearchFilters onFilterChange={handleFilterChange} />

      <div className="my-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_SALONS.map((salon) => (
          <SalonCard key={salon.id} salon={salon} />
        ))}
      </div>

      <div className="my-8 flex justify-center">
        <nav className="flex space-x-2">
          <button className="rounded-md border bg-white px-3 py-1 text-sm">
            Previous
          </button>
          <button className="rounded-md border bg-blue-500 px-3 py-1 text-sm text-white">
            1
          </button>
          <button className="rounded-md border bg-white px-3 py-1 text-sm">
            2
          </button>
          <button className="rounded-md border bg-white px-3 py-1 text-sm">
            3
          </button>
          <button className="rounded-md border bg-white px-3 py-1 text-sm">
            Next
          </button>
        </nav>
      </div>
    </div>
  )
}
