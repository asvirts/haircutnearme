import Link from "next/link"
import { Salon } from "@/lib/types"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { MapPin, Phone, DollarSign, Clock, Star } from "lucide-react"

interface SalonCardProps {
  salon: Salon
}

export function SalonCard({ salon }: SalonCardProps) {
  // Safely handle potentially undefined values
  const thumbnailSrc = salon?.thumbnail || "https://placehold.co/1200x768"
  const title = salon?.title || "Salon"
  const address = salon?.address || "Address unavailable"
  const reviewRating = salon?.review_rating || "N/A"
  const reviewCount = salon?.review_count || 0
  const salonId = salon?.id || "unknown"
  const priceRangeDisplay = salon?.price_range || "$"
  const phone = salon?.phone || ""
  const openHours = salon?.open_hours

  // Early return if salon is undefined
  if (!salon) {
    return null
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 w-full">
        <img
          src={salon.thumbnail || "/images/placeholder-salon.jpg"}
          alt={`${salon.title} - hair salon - haircut near me`}
          className="object-cover w-full h-full"
          loading="lazy"
          itemProp="image"
        />
      </div>
      <CardHeader>
        <CardTitle>
          <Link href={`/salons/${salonId}`} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
        <CardDescription>
          <span className="flex items-center gap-1 text-sm">
            <MapPin className="h-4 w-4" />
            <span>{address}</span>
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>
              {reviewRating} ({reviewCount} reviews)
            </span>
          </div>
          {phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
          )}
          {openHours && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>
                {typeof openHours === "object" &&
                (openHours as Record<string, unknown>).today
                  ? String((openHours as Record<string, unknown>).today)
                  : "Hours available"}
              </span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-1">
          <DollarSign className="h-4 w-4" />
          <span>{priceRangeDisplay}</span>
        </div>
        <Link
          href={`/salons/${salonId}`}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  )
}
