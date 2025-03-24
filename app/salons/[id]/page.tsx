"use client"

import Image from "next/image"
import Link from "next/link"
import { getSalonById, getStylists } from "@/lib/api"
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
import { useEffect, useState } from "react"

export default function SalonPage({ params }: { params: { id: string } }) {
  const [salon, setSalon] = useState<Salon | null>(null)
  const [stylists, setStylists] = useState<Stylist[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchSalonData() {
      setIsLoading(true)
      try {
        const salonData = await getSalonById(params.id)
        setSalon(salonData)

        // Fetch stylists for this salon
        const stylistsData = await getStylists({ salonId: params.id })
        setStylists(stylistsData)
      } catch (error) {
        console.error("Error fetching salon data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSalonData()
  }, [params.id])

  if (isLoading) {
    return (
      <div className="container mx-auto flex justify-center px-4 py-20">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
      </div>
    )
  }

  if (!salon) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Salon not found</h1>
        <p className="mt-4">We couldn't find the salon you're looking for.</p>
        <Link
          href="/salons"
          className="mt-6 inline-block text-blue-500 hover:underline"
        >
          ← Back to Salons
        </Link>
      </div>
    )
  }

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

          <Button className="w-full">Book Appointment</Button>
        </div>
      </div>

      {/* Salon description */}
      <div className="my-10">
        <h2 className="mb-4 text-2xl font-bold">About {salon.name}</h2>
        <p className="text-gray-700">{salon.description}</p>
      </div>

      {/* Amenities */}
      <div className="my-10">
        <h2 className="mb-4 text-2xl font-bold">Amenities</h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {salon.amenities &&
            salon.amenities.map((amenity) => (
              <div
                key={amenity}
                className="rounded-lg bg-gray-100 p-3 text-center"
              >
                {amenity}
              </div>
            ))}
        </div>
      </div>

      {/* Stylists */}
      <div className="my-10">
        <h2 className="mb-6 text-2xl font-bold">Our Stylists</h2>
        {stylists.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stylists.map((stylist) => (
              <StylistCard key={stylist.id} stylist={stylist} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            No stylists available at this salon yet.
          </p>
        )}
      </div>

      {/* Location map placeholder */}
      <div className="my-10">
        <h2 className="mb-4 text-2xl font-bold">Location</h2>
        <div className="h-80 w-full overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Map would be displayed here</span>
        </div>
      </div>
    </div>
  )
}
