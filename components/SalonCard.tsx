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
  // Get city and state from complete_address if available
  const location =
    salon.complete_address?.city && salon.complete_address?.state
      ? `${salon.complete_address.city}, ${salon.complete_address.state}`
      : "Location info unavailable"

  // Format price range for display
  const priceRangeDisplay = salon.price_range || "$"

  return (
    <Card
      className="overflow-hidden transition-all hover:shadow-md"
      itemScope
      itemType="https://schema.org/HairSalon"
    >
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
          <Link
            href={`/salons/${salon.id}`}
            className="hover:underline"
            itemProp="name"
          >
            {salon.title}
          </Link>
        </CardTitle>
        <CardDescription>
          <div className="flex items-center gap-1 text-sm">
            <MapPin className="h-4 w-4" />
            <span itemProp="address">{salon.address}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>
              <span itemProp="aggregateRating">{salon.review_rating}</span> (
              {salon.review_count} reviews)
            </span>
          </div>
          {salon.phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href={`tel:${salon.phone}`} itemProp="telephone">
                {salon.phone}
              </a>
            </div>
          )}
          {salon.open_hours && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>
                {Array.isArray(salon.open_hours)
                  ? "Hours available"
                  : typeof salon.open_hours === "object" &&
                    salon.open_hours.today
                  ? salon.open_hours.today
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
          href={`/salons/${salon.id}`}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  )
}
