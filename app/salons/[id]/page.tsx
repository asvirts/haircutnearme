import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Globe, Clock, DollarSign } from "lucide-react"
import { getSalonById } from "@/lib/api"
import { adaptSalonToAppFormat, getBusinessHours } from "@/lib/dataAdapter"
import { SalonImageGallery } from "@/components/SalonImageGallery"
import { BusinessHours } from "../../../components/BusinessHours"

// Define dynamic metadata
export async function generateMetadata({
  params
}: {
  params: { id: string }
}): Promise<Metadata> {
  try {
    const { id } = params
    const dbSalon = await getSalonById(id)
    const salon = adaptSalonToAppFormat(dbSalon)

    const title = `${salon.name} - Haircuts Near Me in ${salon.city}, ${salon.state}`
    const description = `Book haircuts, color, and styling at ${
      salon.name
    } in ${salon.city}. ${salon.description.substring(0, 150)}...`

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
        canonical: `https://haircutnearme.net/salons/${id}`
      }
    }
  } catch {
    return {
      title: "Salon Details - Haircuts Near Me",
      description: "Find the perfect salon for your next haircut."
    }
  }
}

// Page component
export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params
  const dbSalon = await getSalonById(id)
  const salon = adaptSalonToAppFormat(dbSalon)
  const businessHours = getBusinessHours(dbSalon)

  // Order days of the week properly
  const orderedDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ]

  // Sort business hours by day of week
  const sortedBusinessHours = orderedDays
    .filter((day) => Object.keys(businessHours).includes(day))
    .map((day) => ({ day, hours: businessHours[day] }))

  // Add any remaining days that might be in the data but not in our orderedDays array
  Object.entries(businessHours)
    .filter(([day]) => !orderedDays.includes(day))
    .forEach(([day, hours]) => sortedBusinessHours.push({ day, hours }))

  // Format business hours for display (keeping the old string format as fallback)
  const formattedHours =
    Object.entries(businessHours)
      .map(([day, hours]) => `${day}: ${hours}`)
      .join(", ") || "Mon-Fri: 9am-7pm, Sat: 9am-5pm, Sun: Closed"

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
          <SalonImageGallery
            mainImage={salon.image_url || "/images/placeholder-salon.jpg"}
            thumbnails={
              Array.isArray(dbSalon.images) && dbSalon.images.length > 0
                ? dbSalon.images
                : [1, 2, 3, 4].map((i) => `/images/salon-detail-${i}.jpg`)
            }
            altText={`${salon.name} hair salon in ${salon.city}, ${salon.state}`}
          />
        </div>

        {/* Right column - Salon info */}
        <div>
          <h1 className="mb-2 text-3xl font-bold">{salon.name}</h1>

          <div className="mb-4 flex items-center gap-1">
            {Array.from({
              length:
                typeof salon.price_range === "number" ? salon.price_range : 1
            }).map((_, i) => (
              <DollarSign key={i} className="h-4 w-4 text-green-600" />
            ))}
            <span className="ml-2 text-sm text-gray-500">Price Range</span>
          </div>

          <div className="mb-6 space-y-3 text-gray-600">
            <p className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gray-400" />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${salon.address}, ${salon.city}, ${salon.state} ${salon.zip}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 hover:underline"
              >
                {salon.address}, {salon.city}, {salon.state} {salon.zip}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-gray-400" />
              <a
                href={`tel:${salon.phone.replace(/\D/g, "")}`}
                className="hover:text-blue-500 hover:underline"
              >
                {salon.phone}
              </a>
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
            <p className="flex items-start gap-2">
              <Clock className="h-5 w-5 mt-1 text-gray-400 flex-shrink-0" />
              <BusinessHours
                businessHours={sortedBusinessHours}
                fallbackHours={formattedHours}
              />
            </p>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {/* Accessibility features would be added here if available in the API */}
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

      {/* Location */}
      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold">Location</h2>
        <div className="relative h-80 w-full overflow-hidden rounded-lg">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBPfbmSIvvJ-Gr_J2-3FI67sdYH-32uysY&q=${encodeURIComponent(
              `${salon.name}, ${salon.address}, ${salon.city}, ${salon.state} ${salon.zip}`
            )}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map showing ${salon.name} location`}
          ></iframe>
        </div>
      </div>
    </div>
  )
}
