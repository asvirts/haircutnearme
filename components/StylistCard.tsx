import Image from "next/image"
import Link from "next/link"
import { Stylist } from "@/lib/types"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StarIcon } from "@heroicons/react/24/solid"

interface StylistCardProps {
  stylist: Stylist
  averageRating?: number
}

export function StylistCard({ stylist, averageRating = 0 }: StylistCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-64 w-full">
        <Image
          src={stylist.image_url || "/images/placeholder-stylist.jpg"}
          alt={stylist.name}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>
          <Link href={`/stylists/${stylist.id}`} className="hover:underline">
            {stylist.name}
          </Link>
        </CardTitle>
        <CardDescription className="flex items-center gap-1">
          {averageRating > 0 && (
            <>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(averageRating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm">{averageRating.toFixed(1)}</span>
            </>
          )}
          <span className="ml-2 text-sm">
            {stylist.years_experience} years experience
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="line-clamp-2 text-sm text-gray-600">{stylist.bio}</p>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {stylist.specialties.slice(0, 3).map((specialty) => (
            <span
              key={specialty}
              className="rounded-full bg-gray-100 px-2 py-1 text-xs"
            >
              {specialty}
            </span>
          ))}
          {stylist.specialties.length > 3 && (
            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">
              +{stylist.specialties.length - 3} more
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="justify-between border-t p-4">
        <div>
          <p className="text-sm font-medium">
            Services start at $
            {Math.min(...stylist.services.map((s) => s.price))}
          </p>
        </div>
        <Button size="sm" asChild>
          <Link href={`/stylists/${stylist.id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
