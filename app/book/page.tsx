"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createAppointment } from "@/lib/api"
import { Calendar, Clock, ArrowRight, Check } from "lucide-react"
import { MOCK_DB } from "@/lib/mockData"
import { Service } from "@/lib/types"

// Available time slots
const AVAILABLE_TIMES = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM"
]

// Define a map of salons from mock data for client-side access
const SALONS = MOCK_DB.salons.reduce((acc, salon) => {
  acc[salon.id] = salon
  return acc
}, {} as Record<string | number, (typeof MOCK_DB.salons)[0]>)

// Since we don't need stylists, we'll use the services directly
const SERVICES = MOCK_DB.services.reduce((acc, service) => {
  acc[service.id] = service
  return acc
}, {} as Record<string, Service>)

type BookingStep = "service" | "datetime" | "details" | "confirmation"

// BookingForm component that uses useSearchParams
function BookingForm() {
  const searchParams = useSearchParams()
  const initialSalonId = searchParams.get("salon")
  const initialServiceId = searchParams.get("service")

  const [step, setStep] = useState<BookingStep>("service")
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    initialServiceId
  )
  const [selectedSalonId, setSelectedSalonId] = useState<string | null>(
    initialSalonId
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
  const [isLoading, setIsLoading] = useState(false)

  // Get selected service directly from SERVICES
  const selectedService = selectedServiceId ? SERVICES[selectedServiceId] : null

  const handleServiceSelect = (serviceId: string) => {
    setSelectedServiceId(serviceId)

    // Set the salon ID based on the service's salon_id
    const service = SERVICES[serviceId]
    if (service && service.salon_id) {
      setSelectedSalonId(String(service.salon_id))
    }

    setStep("datetime")
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      !selectedServiceId ||
      !selectedDate ||
      !selectedTime ||
      !selectedSalonId
    ) {
      alert("Please complete all booking steps")
      return
    }

    setIsLoading(true)
    try {
      // In a real app, this would call the API to create the appointment
      await createAppointment({
        salon_id: selectedSalonId,
        service_id: selectedServiceId,
        customer_id: "guest",
        date: selectedDate,
        time: selectedTime,
        duration: selectedService?.duration || 60,
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
    } finally {
      setIsLoading(false)
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
              step === "service"
                ? "border-b-2 border-blue-500 text-blue-600 font-medium"
                : "text-gray-500"
            }`}
          >
            1. Select Service
          </div>
          <div
            className={`pb-2 px-4 ${
              step === "datetime"
                ? "border-b-2 border-blue-500 text-blue-600 font-medium"
                : "text-gray-500"
            }`}
          >
            2. Date & Time
          </div>
          <div
            className={`pb-2 px-4 ${
              step === "details"
                ? "border-b-2 border-blue-500 text-blue-600 font-medium"
                : "text-gray-500"
            }`}
          >
            3. Your Details
          </div>
          <div
            className={`pb-2 px-4 ${
              step === "confirmation"
                ? "border-b-2 border-blue-500 text-blue-600 font-medium"
                : "text-gray-500"
            }`}
          >
            4. Confirmation
          </div>
        </div>
      </div>

      {/* Step 1: Select Service */}
      {step === "service" && (
        <div>
          <h2 className="mb-4 text-xl font-semibold">Select a Service</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.values(SERVICES).map((service) => (
              <div
                key={service.id}
                className={`cursor-pointer rounded-lg border p-4 transition-all hover:shadow-md ${
                  selectedServiceId === service.id
                    ? "border-blue-500 bg-blue-50"
                    : ""
                }`}
                onClick={() => handleServiceSelect(service.id)}
              >
                <div className="flex flex-col">
                  <div className="mb-2">
                    <p className="text-sm font-medium text-gray-900">
                      {service.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(service.salon_id && SALONS[service.salon_id]?.title) ||
                        ""}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">
                      {service.description}
                    </p>
                    <p className="mt-2 text-sm font-medium">
                      ${service.price} - {service.duration} min
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Button
              onClick={() => selectedServiceId && setStep("datetime")}
              disabled={!selectedServiceId}
            >
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Select Date and Time */}
      {step === "datetime" && selectedService && (
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
              <div>
                <h3 className="font-medium">{selectedService.name}</h3>
                <p className="text-sm text-gray-600">
                  {(selectedService.salon_id &&
                    SALONS[selectedService.salon_id]?.title) ||
                    ""}
                </p>
              </div>

              <div className="flex-1 border-l pl-6">
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

      {/* Step 3: Enter Details */}
      {step === "details" &&
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
                <div>
                  <h3 className="font-medium">{selectedService.name}</h3>
                  <p className="text-sm text-gray-600">
                    {(selectedService.salon_id &&
                      SALONS[selectedService.salon_id]?.title) ||
                      ""}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">${selectedService.price}</h3>
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

      {/* Step 4: Confirmation */}
      {step === "confirmation" && bookingComplete && selectedService && (
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
            <Check className="h-12 w-12 text-green-600" />
          </div>

          <h2 className="mb-2 text-2xl font-bold">Booking Confirmed!</h2>
          <p className="mb-6 text-lg text-gray-600">
            We&apos;ve sent a confirmation email to {bookingDetails.email}
          </p>

          <div className="mx-auto mb-8 max-w-md rounded-lg border bg-gray-50 p-6">
            <div className="mb-4 text-left">
              <h3 className="font-medium">{selectedService.name}</h3>
              <p className="text-gray-600">
                {(selectedService.salon_id &&
                  SALONS[selectedService.salon_id]?.title) ||
                  ""}
              </p>
              <p className="text-gray-600">
                {(selectedService.salon_id &&
                  SALONS[selectedService.salon_id]?.address) ||
                  ""}
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
              <Link href={`/salons/${selectedSalonId}`}>View Salon</Link>
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

// Main page component with Suspense
export default function BookingPage() {
  return (
    <Suspense fallback={<div className="p-4">Loading booking form...</div>}>
      <BookingForm />
    </Suspense>
  )
}
