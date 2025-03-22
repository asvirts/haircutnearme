import Image from "next/image"
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
import { MapPin, Phone, DollarSign, Wheelchair, Car } from "lucide-react"

interface SalonCardProps {
  salon: Salon
}

export function SalonCard({ salon }: SalonCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={salon.image_url || "/images/placeholder-salon.jpg"}
          alt={salon.name}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>
          <Link href={`/salons/${salon.id}`} className="hover:underline">
            {salon.name}
          </Link>
        </CardTitle>
        <CardDescription className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          {salon.city}, {salon.state}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="line-clamp-2 text-sm text-gray-600">
            {salon.description}
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Phone className="h-4 w-4" />
          {salon.phone}
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {salon.amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="rounded-full bg-gray-100 px-2 py-1 text-xs"
            >
              {amenity}
            </span>
          ))}
          {salon.amenities.length > 3 && (
            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">
              +{salon.amenities.length - 3} more
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="justify-between border-t p-4">
        <div className="flex items-center gap-1">
          {Array.from({ length: salon.price_range }).map((_, i) => (
            <DollarSign key={i} className="h-4 w-4 text-green-600" />
          ))}
        </div>
        <div className="flex gap-2">
          {salon.is_wheelchair_accessible && (
            <Wheelchair
              className="h-4 w-4 text-blue-500"
              title="Wheelchair Accessible"
            />
          )}
          {salon.has_parking && (
            <Car className="h-4 w-4 text-blue-500" title="Parking Available" />
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
