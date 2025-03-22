"use client"

import { SearchFilters } from "@/components/SearchFilters"
import { StylistCard } from "@/components/StylistCard"
import { Stylist } from "@/lib/types"

// This would be a server component in a real app
// For demo purposes, using mock data
const MOCK_STYLISTS: Stylist[] = [
  {
    id: "1",
    salon_id: "1",
    name: "Jessica Smith",
    bio: "Award-winning hair stylist with over 10 years of experience specializing in color and balayage.",
    specialties: ["Color", "Balayage", "Curly Hair"],
    services: [
      {
        id: "101",
        name: "Haircut",
        description: "Style cut with consultation",
        duration: 60,
        price: 85,
        stylist_id: "1"
      },
      {
        id: "102",
        name: "Color",
        description: "Full color treatment",
        duration: 120,
        price: 130,
        stylist_id: "1"
      },
      {
        id: "103",
        name: "Balayage",
        description: "Custom balayage treatment",
        duration: 180,
        price: 200,
        stylist_id: "1"
      }
    ],
    created_at: "2023-01-01",
    updated_at: "2023-01-01",
    image_url: "/images/stylist1.jpg",
    years_experience: 10
  },
  {
    id: "2",
    salon_id: "1",
    name: "Michael Chen",
    bio: "Precision cutting specialist with a background in fashion styling for editorial shoots.",
    specialties: ["Haircut", "Men's Styling", "Razor Cut"],
    services: [
      {
        id: "201",
        name: "Precision Cut",
        description: "Expert precision haircut",
        duration: 45,
        price: 95,
        stylist_id: "2"
      },
      {
        id: "202",
        name: "Men's Cut",
        description: "Men's haircut and style",
        duration: 30,
        price: 55,
        stylist_id: "2"
      },
      {
        id: "203",
        name: "Beard Trim",
        description: "Beard shaping and trim",
        duration: 20,
        price: 25,
        stylist_id: "2"
      }
    ],
    created_at: "2023-01-02",
    updated_at: "2023-01-02",
    image_url: "/images/stylist2.jpg",
    years_experience: 8
  },
  {
    id: "3",
    salon_id: "2",
    name: "Olivia Johnson",
    bio: "Curly hair specialist certified in DevaCurl and Ouidad cutting techniques.",
    specialties: ["Curly Hair", "DevaCut", "Natural Hair"],
    services: [
      {
        id: "301",
        name: "DevaCut",
        description: "Specialized cut for curly hair",
        duration: 75,
        price: 120,
        stylist_id: "3"
      },
      {
        id: "302",
        name: "Curl Treatment",
        description: "Deep conditioning for curls",
        duration: 60,
        price: 85,
        stylist_id: "3"
      },
      {
        id: "303",
        name: "Style Consultation",
        description: "Curl pattern analysis and styling tips",
        duration: 45,
        price: 65,
        stylist_id: "3"
      }
    ],
    created_at: "2023-01-03",
    updated_at: "2023-01-03",
    image_url: "/images/stylist3.jpg",
    years_experience: 12
  },
  {
    id: "4",
    salon_id: "3",
    name: "James Wilson",
    bio: "Classic barber with expertise in traditional techniques and modern men's styling.",
    specialties: ["Barber", "Fade", "Hot Towel Shave"],
    services: [
      {
        id: "401",
        name: "Classic Cut",
        description: "Traditional men's haircut",
        duration: 30,
        price: 40,
        stylist_id: "4"
      },
      {
        id: "402",
        name: "Fade",
        description: "Precision fade haircut",
        duration: 45,
        price: 50,
        stylist_id: "4"
      },
      {
        id: "403",
        name: "Hot Towel Shave",
        description: "Traditional straight razor shave",
        duration: 45,
        price: 45,
        stylist_id: "4"
      }
    ],
    created_at: "2023-01-04",
    updated_at: "2023-01-04",
    image_url: "/images/stylist4.jpg",
    years_experience: 15
  }
]

export default function StylistsPage() {
  const handleFilterChange = (filters: Record<string, unknown>) => {
    console.log("Filters changed:", filters)
    // In a real app, this would filter the stylists
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Hair Stylists & Barbers</h1>

      <SearchFilters onFilterChange={handleFilterChange} />

      <div className="my-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_STYLISTS.map((stylist) => (
          <StylistCard
            key={stylist.id}
            stylist={stylist}
            averageRating={Math.floor(Math.random() * 2) + 4} // Random rating between 4-5 for demo
          />
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
