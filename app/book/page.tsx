"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Stylist, Salon } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  createAppointment,
  getStylistById,
  getSalonById,
  getStylists
} from "@/lib/api"
import { Calendar, Clock, ArrowRight, Check } from "lucide-react"

// Available time slots
const AVAILABLE_TIMES = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM"
]

type BookingStep =
  | "stylist"
  | "service"
  | "datetime"
  | "details"
  | "confirmation"

export default function BookPage() {
  const searchParams = useSearchParams()
  const initialStylistId = searchParams.get("stylist")
  const initialSalonId = searchParams.get("salon")
  const initialServiceId = searchParams.get("service")

  const [step, setStep] = useState<BookingStep>("stylist")
  const [selectedStylistId, setSelectedStylistId] = useState<string | null>(
    initialStylistId
  )
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    initialServiceId
  )
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [bookingDetails, setBookingDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: ""
  })
  const [bookingComplete, setBookingComplete] = useState(false)

  const [stylists, setStylists] = useState<Record<string, Stylist>>({})
  const [salons, setSalons] = useState<Record<string, Salon>>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      try {
        // If we have an initial stylist ID, fetch that stylist
        if (initialStylistId) {
          const stylist = await getStylistById(initialStylistId)
          setStylists((prev) => ({ ...prev, [stylist.id]: stylist }))

          // Also fetch the salon this stylist works at
          if (stylist.salon_id) {
            const salon = await getSalonById(stylist.salon_id)
            setSalons((prev) => ({ ...prev, [salon.id]: salon }))
          }
        }
        // If we have an initial salon ID, fetch stylists for that salon
        else if (initialSalonId) {
          const salon = await getSalonById(initialSalonId)
          setSalons((prev) => ({ ...prev, [salon.id]: salon }))

          // Fetch stylists for this salon
          const salonStylists = await getStylists({ salonId: initialSalonId })
          const stylistsMap = salonStylists.reduce((acc, stylist) => {
            acc[stylist.id] = stylist
            return acc
          }, {} as Record<string, Stylist>)
          setStylists(stylistsMap)
        }
        // Otherwise, fetch a selection of stylists
        else {
          const allStylists = await getStylists({}, 1, 10)
          const stylistsMap = allStylists.reduce((acc, stylist) => {
            acc[stylist.id] = stylist
            return acc
          }, {} as Record<string, Stylist>)
          setStylists(stylistsMap)

          // Fetch salons for these stylists
          for (const stylist of allStylists) {
            if (stylist.salon_id && !salons[stylist.salon_id]) {
              const salon = await getSalonById(stylist.salon_id)
              setSalons((prev) => ({ ...prev, [salon.id]: salon }))
            }
          }
        }
      } catch (error) {
        console.error("Error fetching booking data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [initialStylistId, initialSalonId, salons])

  const selectedStylist = selectedStylistId ? stylists[selectedStylistId] : null
  const salonId = selectedStylist?.salon_id || initialSalonId
  const salon = salonId ? salons[salonId] : null

  const selectedService =
    selectedStylist && selectedServiceId && selectedStylist.services
      ? selectedStylist.services.find((s) => s.id === selectedServiceId)
      : null

  const handleServiceSelect = (serviceId: string) => {
    setSelectedServiceId(serviceId)
    setStep("datetime")
  }

  const handleStylistSelect = (stylistId: string) => {
    setSelectedStylistId(stylistId)
    setStep("service")
  }

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setStep("details")
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setBookingDetails((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !selectedStylistId ||
      !selectedServiceId ||
      !selectedDate ||
      !selectedTime
    ) {
      alert("Please complete all booking steps")
      return
    }

    try {
      // In a real app, this would call the API to create the appointment
      await createAppointment({
        stylist_id: selectedStylistId,
        service_id: selectedServiceId,
        date: selectedDate,
        time: selectedTime,
        customer_name: `${bookingDetails.firstName} ${bookingDetails.lastName}`,
        customer_email: bookingDetails.email,
        customer_phone: bookingDetails.phone,
        notes: bookingDetails.notes,
        status: "pending"
      })
      setBookingComplete(true)
      setStep("confirmation")
    } catch (error) {
      console.error("Error creating appointment:", error)
      alert("There was a problem booking your appointment. Please try again.")
    }
  }

  // Generate dates for the next 14 days
  const dates = Array.from({ length: 14 }).map((_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i)
    return date.toISOString().split("T")[0]
  })

  if (isLoading) {
    return (
      <div className="container mx-auto flex justify-center px-4 py-20">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Book an Appointment</h1>

      <div className="mb-8">
        <div className="mb-4 flex border-b">
          <div
            className={`pb-2 px-4 ${
              step === "stylist"
                ? "border-b-2 border-blue-500 text-blue-600 font-medium"
                : "text-gray-500"
            }`}
          >
            1. Choose Stylist
          </div>
          <div
            className={`pb-2 px-4 ${
              step === "service"
                ? "border-b-2 border-blue-500 text-blue-600 font-medium"
                : "text-gray-500"
            }`}
          >
            2. Select Service
          </div>
          <div
            className={`pb-2 px-4 ${
              step === "datetime"
                ? "border-b-2 border-blue-500 text-blue-600 font-medium"
                : "text-gray-500"
            }`}
          >
            3. Choose Date & Time
          </div>
          <div
            className={`pb-2 px-4 ${
              step === "details"
                ? "border-b-2 border-blue-500 text-blue-600 font-medium"
                : "text-gray-500"
            }`}
          >
            4. Your Details
          </div>
        </div>
      </div>

      {/* Step 1: Select Stylist */}
      {step === "stylist" && (
        <div>
          <h2 className="mb-4 text-xl font-semibold">Choose a Stylist</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.values(stylists).map((stylist) => (
              <div
                key={stylist.id}
                className={`cursor-pointer rounded-lg border p-4 transition-all hover:shadow-md ${
                  selectedStylistId === stylist.id
                    ? "border-blue-500 bg-blue-50"
                    : ""
                }`}
                onClick={() => handleStylistSelect(stylist.id)}
              >
                <div className="flex gap-4">
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={
                        stylist.image_url || "/images/placeholder-stylist.jpg"
                      }
                      alt={stylist.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{stylist.name}</h3>
                    <p className="text-sm text-gray-600">
                      {stylist.specialties.slice(0, 3).join(", ")}
                    </p>
                    <p className="text-xs text-gray-500">
                      {salons[stylist.salon_id].name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Button
              onClick={() => selectedStylistId && setStep("service")}
              disabled={!selectedStylistId}
            >
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Select Service */}
      {step === "service" && selectedStylist && (
        <div>
          <div className="mb-4 flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setStep("stylist")}
            >
              ← Back
            </Button>
            <h2 className="text-xl font-semibold">Select a Service</h2>
          </div>

          <div className="mb-6 rounded-lg border bg-gray-50 p-4">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  src={
                    selectedStylist.image_url ||
                    "/images/placeholder-stylist.jpg"
                  }
                  alt={selectedStylist.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">{selectedStylist.name}</h3>
                <p className="text-sm text-gray-600">{salon?.name}</p>
              </div>
            </div>
          </div>

          <div className="divide-y rounded-lg border">
            {selectedStylist.services.map((service) => (
              <div
                key={service.id}
                className={`cursor-pointer p-4 transition-all hover:bg-gray-50 ${
                  selectedServiceId === service.id ? "bg-blue-50" : ""
                }`}
                onClick={() => handleServiceSelect(service.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{service.name}</h3>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {service.duration} minutes
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">${service.price}</p>
                    <Button
                      size="sm"
                      className="mt-2"
                      onClick={() => handleServiceSelect(service.id)}
                    >
                      Select
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Select Date and Time */}
      {step === "datetime" && selectedStylist && selectedService && (
        <div>
          <div className="mb-4 flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setStep("service")}
            >
              ← Back
            </Button>
            <h2 className="text-xl font-semibold">Choose Date & Time</h2>
          </div>

          <div className="mb-6 rounded-lg border bg-gray-50 p-4">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={
                      selectedStylist.image_url ||
                      "/images/placeholder-stylist.jpg"
                    }
                    alt={selectedStylist.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{selectedStylist.name}</h3>
                  <p className="text-sm text-gray-600">{salon?.name}</p>
                </div>
              </div>

              <div className="flex-1 border-l pl-6">
                <h3 className="font-medium">{selectedService.name}</h3>
                <div className="flex gap-4 text-sm text-gray-600">
                  <p>${selectedService.price}</p>
                  <p>{selectedService.duration} minutes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Date selection */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 font-medium">
                <Calendar className="h-5 w-5" /> Select Date
              </h3>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4">
                {dates.map((date) => {
                  const d = new Date(date)
                  const formattedDate = d.toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric"
                  })

                  return (
                    <button
                      key={date}
                      className={`rounded-md border p-2 text-center text-sm transition-all hover:border-blue-500 ${
                        selectedDate === date
                          ? "border-blue-500 bg-blue-50"
                          : ""
                      }`}
                      onClick={() => handleDateSelect(date)}
                    >
                      {formattedDate}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Time selection */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 font-medium">
                <Clock className="h-5 w-5" /> Select Time
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {selectedDate ? (
                  AVAILABLE_TIMES.map((time) => (
                    <button
                      key={time}
                      className={`rounded-md border p-2 text-center text-sm transition-all hover:border-blue-500 ${
                        selectedTime === time
                          ? "border-blue-500 bg-blue-50"
                          : ""
                      }`}
                      onClick={() => handleTimeSelect(time)}
                    >
                      {time}
                    </button>
                  ))
                ) : (
                  <p className="col-span-3 text-gray-500">
                    Please select a date first
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Enter Details */}
      {step === "details" &&
        selectedStylist &&
        selectedService &&
        selectedDate &&
        selectedTime && (
          <div>
            <div className="mb-4 flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setStep("datetime")}
              >
                ← Back
              </Button>
              <h2 className="text-xl font-semibold">Your Details</h2>
            </div>

            <div className="mb-6 rounded-lg border bg-gray-50 p-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={
                        selectedStylist.image_url ||
                        "/images/placeholder-stylist.jpg"
                      }
                      alt={selectedStylist.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{selectedStylist.name}</h3>
                    <p className="text-sm text-gray-600">{salon?.name}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium">
                    {selectedService.name} - ${selectedService.price}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {new Date(selectedDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric"
                    })}{" "}
                    at {selectedTime}
                  </p>
                  <p className="text-sm text-gray-600">
                    {selectedService.duration} minutes
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    First Name
                  </label>
                  <Input
                    type="text"
                    name="firstName"
                    value={bookingDetails.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    name="lastName"
                    value={bookingDetails.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={bookingDetails.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={bookingDetails.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium">
                    Special Requests or Notes
                  </label>
                  <textarea
                    name="notes"
                    value={bookingDetails.notes}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    rows={3}
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-4">
                <Button type="submit">Book Appointment</Button>
              </div>
            </form>
          </div>
        )}

      {/* Step 5: Confirmation */}
      {step === "confirmation" && bookingComplete && (
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
            <Check className="h-12 w-12 text-green-600" />
          </div>

          <h2 className="mb-2 text-2xl font-bold">Booking Confirmed!</h2>
          <p className="mb-6 text-lg text-gray-600">
            We've sent a confirmation email to {bookingDetails.email}
          </p>

          <div className="mx-auto mb-8 max-w-md rounded-lg border bg-gray-50 p-6">
            <div className="mb-4 text-left">
              <h3 className="font-medium">{selectedStylist?.name}</h3>
              <p className="text-gray-600">{salon?.name}</p>
              <p className="text-gray-600">
                {salon?.address}, {salon?.city}
              </p>
            </div>

            <div className="mb-4 border-t border-b py-4">
              <div className="flex justify-between">
                <span className="font-medium">Service:</span>
                <span>{selectedService?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Date:</span>
                <span>
                  {new Date(selectedDate).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric"
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Time:</span>
                <span>{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Duration:</span>
                <span>{selectedService?.duration} minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Price:</span>
                <span>${selectedService?.price}</span>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <p className="font-medium">Booking Reference:</p>
              <p className="font-mono">
                {Math.random().toString(36).substring(2, 10).toUpperCase()}
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href={`/stylists/${selectedStylistId}`}>
                View Stylist Profile
              </Link>
            </Button>
            <Button asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
