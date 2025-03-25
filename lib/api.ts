import { readDb } from "./jsonDb"
import { Appointment, Review, Salon, Service } from "./types"

// Salon API functions
export async function getSalons({
  filters = {},
  from = 0,
  to = 20
}: {
  filters?: Record<string, any>
  from?: number
  to?: number
} = {}) {
  const db = await readDb()
  let filteredSalons = [...db.salons]

  // Apply filters if provided
  if (filters.services) {
    // Filter by services
    // In a real app, this would look at the salon services, not just the description
  }

  if (filters.priceRange) {
    // Filter by price range
    filteredSalons = filteredSalons.filter(
      (salon) => salon.price_range === filters.priceRange
    )
  }

  if (filters.location) {
    // Filter by location
    // In a real app, this would use geocoding or distance calculation
  }

  if (filters.search) {
    const searchTerm = filters.search.toLowerCase()
    filteredSalons = filteredSalons.filter(
      (salon) =>
        salon.title?.toLowerCase().includes(searchTerm) ||
        salon.address?.toLowerCase().includes(searchTerm) ||
        salon.descriptions?.toLowerCase().includes(searchTerm)
    )
  }

  if (filters.amenities) {
    // Filter by amenities if salon has them
    filteredSalons = filteredSalons.filter((salon) => {
      if (!salon.about?.highlights) return false
      return salon.about.highlights.some((highlight) =>
        highlight.toLowerCase().includes(filters.amenities.toLowerCase())
      )
    })
  }

  return filteredSalons.slice(from, to)
}

export async function getSalonById(id: string) {
  const db = await readDb()
  const salon = db.salons.find((s) => String(s.id) === String(id))
  if (!salon) throw new Error(`Salon with id ${id} not found`)
  return salon
}

// Service API functions
export async function getServicesBySalonId(salonId: string) {
  const db = await readDb()
  return db.services.filter((service) => service.id.startsWith(salonId))
}

// Review API functions
export async function getReviewsBySalonId(salonId: string) {
  const db = await readDb()
  return db.reviews.filter((review) => review.salon_id === salonId)
}

// Appointment API functions
export async function getSalonAvailability(salonId: string, date: string) {
  const db = await readDb()
  const bookedAppointments = db.appointments.filter(
    (appointment) =>
      appointment.salon_id === salonId && appointment.date === date
  )

  // In a real app, this would check the salon's hours and calculate available slots
  // For demo purposes, return some mock availability
  const availableSlots = []
  for (let hour = 9; hour < 17; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`
      const isBooked = bookedAppointments.some((appt) => appt.time === time)
      if (!isBooked) {
        availableSlots.push(time)
      }
    }
  }

  return availableSlots
}

// Booking API functions
export async function createAppointment(
  appointment: Omit<Appointment, "id" | "created_at" | "updated_at">
) {
  const db = await readDb()

  // Check if salon exists
  const salon = db.salons.find((s) => s.id === appointment.salon_id)
  if (!salon) {
    throw new Error(`Salon with id ${appointment.salon_id} not found`)
  }

  // Check if service exists
  const service = db.services.find((s) => s.id === appointment.service_id)
  if (!service) {
    throw new Error(`Service with id ${appointment.service_id} not found`)
  }

  // Check if time slot is available
  const isTimeSlotAvailable = !db.appointments.some(
    (a) =>
      a.salon_id === appointment.salon_id &&
      a.date === appointment.date &&
      a.time === appointment.time
  )

  if (!isTimeSlotAvailable) {
    throw new Error("The selected time slot is not available")
  }

  const now = new Date().toISOString()
  const newAppointment: Appointment = {
    ...appointment,
    id: Date.now().toString(),
    created_at: now,
    updated_at: now
  }

  db.appointments.push(newAppointment)

  // In a real app, this would save to the database
  // await writeDb(db)

  return newAppointment
}
