"use client"

import Image from "next/image"
import Link from "next/link"
import { getStylistById, getReviewsByStylistId, getSalonById } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Stylist, Review, Salon } from "@/lib/types"
import { StarIcon } from "@heroicons/react/24/solid"
import { StarIcon as StarOutline } from "@heroicons/react/24/outline"
import { MapPin, Calendar } from "lucide-react"
import { useState, useEffect } from "react"

function calculateAverageRating(reviews: Review[]) {
  if (reviews.length === 0) return 0
  const total = reviews.reduce((sum, review) => sum + review.rating, 0)
  return total / reviews.length
}

export default function StylistPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const [stylist, setStylist] = useState<Stylist | null>(null)
  const [salon, setSalon] = useState<Salon | null>(null)
  const [reviews, setReviews] = useState<Review[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchStylistData() {
      setIsLoading(true)
      try {
        // In useEffect we need to handle the Promise differently since we're in a client component
        const paramsResolved = await Promise.resolve(params)
        const id = paramsResolved.id

        // Fetch stylist data
        const stylistData = await getStylistById(id)
        setStylist(stylistData)

        // Fetch salon data for this stylist
        if (stylistData.salon_id) {
          const salonData = await getSalonById(stylistData.salon_id)
          setSalon(salonData)
        }

        // Fetch reviews for this stylist
        const reviewsData = await getReviewsByStylistId(id)
        setReviews(reviewsData)
      } catch (error) {
        console.error("Error fetching stylist data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStylistData()
  }, [params])

  if (isLoading) {
    return (
      <div className="container mx-auto flex justify-center px-4 py-20">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
      </div>
    )
  }

  if (!stylist) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Stylist not found</h1>
        <p className="mt-4">We couldn't find the stylist you're looking for.</p>
        <Link
          href="/stylists"
          className="mt-6 inline-block text-blue-500 hover:underline"
        >
          ← Back to Stylists
        </Link>
      </div>
    )
  }

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

            {salon && (
              <div className="mb-4 space-y-3 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <Link
                    href={`/salons/${stylist.salon_id}`}
                    className="hover:text-blue-500 hover:underline"
                  >
                    {salon.title}
                  </Link>
                </p>
              </div>
            )}

            <Button className="w-full">Book Appointment</Button>
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
          {stylist.specialties && stylist.specialties.length > 0 && (
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
          )}

          {/* Services */}
          {stylist.services && stylist.services.length > 0 && (
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
                    <div className="flex items-center gap-3">
                      <span className="font-semibold">${service.price}</span>
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href={`/book?stylist=${stylist.id}&service=${service.id}`}
                        >
                          <Calendar className="mr-1 h-4 w-4" />
                          Book
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Client Reviews</h2>
            {reviews.length > 0 ? (
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
                        <span className="text-sm font-medium">
                          {review.customer_name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(review.created_at).toLocaleDateString()}
                      </span>
                    </div>

                    <p className="text-gray-700">{review.comment}</p>

                    {(review.skill_rating ||
                      review.timeliness_rating ||
                      review.value_rating) && (
                      <div className="mt-3 flex flex-wrap gap-3 text-xs">
                        {review.skill_rating && (
                          <div>
                            <span className="text-gray-500">Skill:</span>{" "}
                            <span className="font-medium">
                              {review.skill_rating}/5
                            </span>
                          </div>
                        )}
                        {review.timeliness_rating && (
                          <div>
                            <span className="text-gray-500">Timeliness:</span>{" "}
                            <span className="font-medium">
                              {review.timeliness_rating}/5
                            </span>
                          </div>
                        )}
                        {review.value_rating && (
                          <div>
                            <span className="text-gray-500">Value:</span>{" "}
                            <span className="font-medium">
                              {review.value_rating}/5
                            </span>
                          </div>
                        )}
                      </div>
                    )}

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
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
