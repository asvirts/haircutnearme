import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { getSalonById } from "@/lib/api"
import { StylistCard } from "@/components/StylistCard"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Phone,
  Globe,
  Clock,
  DollarSign,
  Accessibility,
  Car
} from "lucide-react"
import { Salon, Stylist } from "@/lib/types"

// Mock data for demo purposes
const SALON: Salon = {
  id: "1",
  name: "Elegance Hair Studio",
  address: "123 Main St",
  city: "Los Angeles",
  state: "CA",
  zip: "90001",
  phone: "(555) 123-4567",
  email: "info@elegancehair.com",
  website: "https://elegancehair.example.com",
  description:
    "A luxury hair salon offering premium hair services in a relaxing environment. Our team of expert stylists is dedicated to providing you with the perfect look tailored to your unique style and personality. We use only the highest quality products and stay up-to-date with the latest trends and techniques.",
  amenities: [
    "Wi-Fi",
    "Complimentary Drinks",
    "Parking",
    "Kid-Friendly",
    "TV",
    "Magazines"
  ],
  created_at: "2023-01-01",
  updated_at: "2023-01-01",
  image_url: "/images/salon1.jpg",
  latitude: 34.0522,
  longitude: -118.2437,
  is_wheelchair_accessible: true,
  has_parking: true,
  price_range: 3
}

// Mock stylists for this salon
const STYLISTS: Stylist[] = [
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
  }
]

// Define dynamic metadata for this page based on salon data
export async function generateMetadata({
  params
}: {
  params: { id: string }
}): Promise<Metadata> {
  // In a real app, fetch the salon data using the id
  // const salon = await getSalonById(params.id);
  const salon = SALON

  // Use the salon name in the title for SEO
  const title = `${salon.name} - Haircuts Near Me in ${salon.city}, ${salon.state}`
  const description = `Book haircuts, color, and styling at ${salon.name} in ${
    salon.city
  }. ${salon.description.substring(0, 150)}...`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: salon.image_url ? [salon.image_url] : []
    },
    alternates: {
      canonical: `https://haircutnearme.net/salons/${params.id}`
    }
  }
}

// In a real app, this would be a server component that fetches data based on the ID parameter
export default function SalonPage({ params }: { params: { id: string } }) {
  // In a real app: const salon = await getSalonById(params.id);
  const salon = SALON // Using mock data for demo

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/salons" className="text-blue-500 hover:underline">
          ← Back to Salons
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Left column - Salon images */}
        <div className="md:col-span-2">
          <div className="relative h-80 w-full overflow-hidden rounded-lg">
            <Image
              src={salon.image_url || "/images/placeholder-salon.jpg"}
              alt={`${salon.name} hair salon in ${salon.city}, ${salon.state}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-4 grid grid-cols-4 gap-2">
            {/* These would be additional salon images in a real app */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative h-20 overflow-hidden rounded-lg">
                <Image
                  src={`/images/salon-detail-${i}.jpg`}
                  alt={`${salon.name} hair salon interior view ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Salon info */}
        <div>
          <h1 className="mb-2 text-3xl font-bold">{salon.name}</h1>

          <div className="mb-4 flex items-center gap-1">
            {Array.from({ length: salon.price_range }).map((_, i) => (
              <DollarSign key={i} className="h-4 w-4 text-green-600" />
            ))}
            <span className="ml-2 text-sm text-gray-500">Price Range</span>
          </div>

          <div className="mb-6 space-y-3 text-gray-600">
            <p className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gray-400" />
              {salon.address}, {salon.city}, {salon.state} {salon.zip}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-gray-400" />
              {salon.phone}
            </p>
            {salon.website && (
              <p className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-gray-400" />
                <a
                  href={salon.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {salon.website.replace(/^https?:\/\//, "")}
                </a>
              </p>
            )}
            <p className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-gray-400" />
              <span>Mon-Fri: 9am-7pm, Sat: 9am-5pm, Sun: Closed</span>
            </p>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {salon.is_wheelchair_accessible && (
              <span className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                <Accessibility className="h-4 w-4" />
                Wheelchair Accessible
              </span>
            )}
            {salon.has_parking && (
              <span className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                <Car className="h-4 w-4" />
                Parking Available
              </span>
            )}
          </div>

          <Button className="w-full" asChild>
            <Link href={`/book?salon=${salon.id}`}>Book Appointment</Link>
          </Button>
        </div>
      </div>

      {/* Salon description */}
      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold">About {salon.name}</h2>
        <p className="text-gray-700">{salon.description}</p>
      </div>

      {/* Amenities */}
      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold">Amenities</h2>
        <div className="flex flex-wrap gap-2">
          {salon.amenities.map((amenity) => (
            <span
              key={amenity}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm"
            >
              {amenity}
            </span>
          ))}
        </div>
      </div>

      {/* Stylists */}
      <div className="my-8">
        <h2 className="mb-6 text-xl font-semibold">Meet Our Stylists</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STYLISTS.map((stylist) => (
            <StylistCard
              key={stylist.id}
              stylist={stylist}
              averageRating={4.8}
            />
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold">Location</h2>
        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-gray-200">
          {/* This would be a real map in a production app */}
          <div className="flex h-full items-center justify-center">
            <p className="text-gray-500">
              Map showing {salon.address}, {salon.city}, {salon.state}
            </p>
          </div>
        </div>
      </div>

      {/* Schema.org structured data for local business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalon",
            name: salon.name,
            image: salon.image_url,
            "@id": `https://haircutnearme.net/salons/${salon.id}`,
            url: `https://haircutnearme.net/salons/${salon.id}`,
            telephone: salon.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: salon.address,
              addressLocality: salon.city,
              addressRegion: salon.state,
              postalCode: salon.zip,
              addressCountry: "US"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: salon.latitude,
              longitude: salon.longitude
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                opens: "09:00",
                closes: "19:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "17:00"
              }
            ],
            priceRange: "$".repeat(salon.price_range),
            hasMap: `https://maps.google.com/?q=${salon.latitude},${salon.longitude}`,
            keywords: "haircut, salon, hair styling, barber, haircuts near me"
          })
        }}
      />
    </div>
  )
}
