import Image from "next/image"
import Link from "next/link"
import { getStylistById, getReviewsByStylistId } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Stylist, Review, Salon } from "@/lib/types"
import { StarIcon } from "@heroicons/react/24/solid"
import { StarIcon as StarOutline } from "@heroicons/react/24/outline"
import { MapPin, Calendar } from "lucide-react"

// Mock data for demo purposes
const STYLIST: Stylist = {
  id: "1",
  salon_id: "1",
  name: "Jessica Smith",
  bio: "Award-winning hair stylist with over 10 years of experience specializing in color and balayage. My approach combines technical expertise with an artistic eye to create personalized looks that enhance each client's unique features and lifestyle. Having trained with industry leaders in New York and Los Angeles, I bring a wealth of knowledge and contemporary techniques to every appointment.",
  specialties: [
    "Color",
    "Balayage",
    "Curly Hair",
    "Highlights",
    "Hair Extensions",
    "Bridal Styling"
  ],
  services: [
    {
      id: "101",
      name: "Haircut & Style",
      description: "Precision cut with consultation and styling",
      duration: 60,
      price: 85,
      stylist_id: "1"
    },
    {
      id: "102",
      name: "Color",
      description: "Full color treatment with premium products",
      duration: 120,
      price: 130,
      stylist_id: "1"
    },
    {
      id: "103",
      name: "Balayage",
      description: "Custom balayage for natural-looking, dimensional color",
      duration: 180,
      price: 200,
      stylist_id: "1"
    },
    {
      id: "104",
      name: "Highlights",
      description: "Full or partial highlights for added dimension",
      duration: 150,
      price: 175,
      stylist_id: "1"
    },
    {
      id: "105",
      name: "Keratin Treatment",
      description: "Smoothing treatment to reduce frizz",
      duration: 180,
      price: 250,
      stylist_id: "1"
    },
    {
      id: "106",
      name: "Bridal Hair",
      description: "Special occasion styling with consultation",
      duration: 90,
      price: 120,
      stylist_id: "1"
    }
  ],
  created_at: "2023-01-01",
  updated_at: "2023-01-01",
  image_url: "/images/stylist1.jpg",
  years_experience: 10
}

// Mock salon data
const SALON: Salon = {
  id: "1",
  name: "Elegance Hair Studio",
  address: "123 Main St",
  city: "Los Angeles",
  state: "CA",
  zip: "90001",
  phone: "(555) 123-4567",
  email: "info@elegancehair.com",
  description: "A luxury hair salon offering premium hair services.",
  amenities: ["Wi-Fi", "Complimentary Drinks", "Parking"],
  created_at: "2023-01-01",
  updated_at: "2023-01-01",
  image_url: "/images/salon1.jpg",
  is_wheelchair_accessible: true,
  has_parking: true,
  price_range: 3
}

// Mock reviews
const REVIEWS: Review[] = [
  {
    id: "1",
    stylist_id: "1",
    rating: 5,
    comment:
      "Jessica is amazing! She gave me the best haircut I've ever had and took the time to understand exactly what I wanted.",
    customer_name: "Sarah Johnson",
    created_at: "2023-05-15",
    skill_rating: 5,
    timeliness_rating: 5,
    value_rating: 4,
    image_url: "/images/review1.jpg"
  },
  {
    id: "2",
    stylist_id: "1",
    rating: 5,
    comment:
      "I loved my balayage! Jessica is a true artist and really knows how to work with different hair types. Will definitely be coming back!",
    customer_name: "Emma Rodriguez",
    created_at: "2023-04-22",
    skill_rating: 5,
    timeliness_rating: 4,
    value_rating: 5
  },
  {
    id: "3",
    stylist_id: "1",
    rating: 4,
    comment:
      "Great experience overall. Jessica is very knowledgeable and helped me find a style that works for my face shape and lifestyle.",
    customer_name: "Michael Lee",
    created_at: "2023-03-10",
    skill_rating: 4,
    timeliness_rating: 4,
    value_rating: 4
  }
]

function calculateAverageRating(reviews: Review[]) {
  if (reviews.length === 0) return 0
  const total = reviews.reduce((sum, review) => sum + review.rating, 0)
  return total / reviews.length
}

// In a real app, this would be a server component that fetches data based on the ID parameter
export default function StylistPage({ params }: { params: { id: string } }) {
  // In a real app:
  // const stylist = await getStylistById(params.id);
  // const reviews = await getReviewsByStylistId(params.id);

  const stylist = STYLIST // Using mock data for demo
  const reviews = REVIEWS // Using mock data for demo
  const averageRating = calculateAverageRating(reviews)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/stylists" className="text-blue-500 hover:underline">
          ← Back to Stylists
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Left column - Stylist image and info */}
        <div>
          <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
            <Image
              src={stylist.image_url || "/images/placeholder-stylist.jpg"}
              alt={stylist.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <h1 className="mb-2 text-2xl font-bold">{stylist.name}</h1>

            <div className="mb-3 flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < Math.floor(averageRating) ? (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <StarOutline key={i} className="h-5 w-5 text-gray-300" />
                  )
                )}
              </div>
              <span className="text-sm font-medium">
                {averageRating.toFixed(1)}
              </span>
              <span className="text-sm text-gray-500">
                ({reviews.length} reviews)
              </span>
            </div>

            <p className="mb-3 text-sm font-medium">
              {stylist.years_experience} years experience
            </p>

            <div className="mb-4 space-y-3 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <Link
                  href={`/salons/${SALON.id}`}
                  className="hover:text-blue-500 hover:underline"
                >
                  {SALON.name}
                </Link>
              </p>
            </div>

            <Button className="w-full" asChild>
              <Link href={`/book?stylist=${stylist.id}`}>Book Appointment</Link>
            </Button>
          </div>
        </div>

        {/* Right column - Stylist details */}
        <div className="md:col-span-2">
          {/* About section */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">About {stylist.name}</h2>
            <p className="text-gray-700">{stylist.bio}</p>
          </div>

          {/* Specialties */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Specialties</h2>
            <div className="flex flex-wrap gap-2">
              {stylist.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Services & Pricing</h2>
            <div className="overflow-hidden rounded-lg border">
              {stylist.services.map((service, index) => (
                <div
                  key={service.id}
                  className={`flex flex-col justify-between gap-2 p-4 md:flex-row ${
                    index < stylist.services.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div>
                    <h3 className="font-medium">{service.name}</h3>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {service.duration} minutes
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold">
                      ${service.price}
                    </span>
                    <Button size="sm" variant="outline" asChild>
                      <Link
                        href={`/book?stylist=${stylist.id}&service=${service.id}`}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        Book
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Client Reviews</h2>
              <Button variant="outline" size="sm" asChild>
                <Link href={`/reviews/new?stylist=${stylist.id}`}>
                  Write a Review
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="rounded-lg border bg-white p-4 shadow-sm"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) =>
                          i < review.rating ? (
                            <StarIcon
                              key={i}
                              className="h-4 w-4 text-yellow-400"
                            />
                          ) : (
                            <StarOutline
                              key={i}
                              className="h-4 w-4 text-gray-300"
                            />
                          )
                        )}
                      </div>
                      <span className="font-medium">
                        {review.customer_name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(review.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                      })}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700">{review.comment}</p>

                  {review.image_url && (
                    <div className="mt-3">
                      <div className="relative h-24 w-24 overflow-hidden rounded-md">
                        <Image
                          src={review.image_url}
                          alt="Review image"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {(review.skill_rating ||
                    review.timeliness_rating ||
                    review.value_rating) && (
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-600">
                      {review.skill_rating && (
                        <div>
                          <span className="font-medium">Skill:</span>{" "}
                          <span>{review.skill_rating}/5</span>
                        </div>
                      )}
                      {review.timeliness_rating && (
                        <div>
                          <span className="font-medium">Timeliness:</span>{" "}
                          <span>{review.timeliness_rating}/5</span>
                        </div>
                      )}
                      {review.value_rating && (
                        <div>
                          <span className="font-medium">Value:</span>{" "}
                          <span>{review.value_rating}/5</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
