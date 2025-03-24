import { supabase } from "./supabase"
import { Appointment, Review, Salon, Stylist } from "./types"

// Salon API functions
export async function getSalons(
  filters?: {
    zip?: string
    city?: string
    priceRange?: number[]
    amenities?: string[]
    searchRadius?: number
    lat?: number
    lng?: number
  },
  page = 1,
  limit = 10
) {
  let query = supabase.from("salons").select("*")

  if (filters?.zip) {
    query = query.eq("zip", filters.zip)
  }

  if (filters?.city) {
    query = query.eq("city", filters.city)
  }

  if (filters?.priceRange?.length) {
    query = query.in("price_range", filters.priceRange)
  }

  // Pagination
  const from = (page - 1) * limit
  const to = from + limit - 1

  const { data, error } = await query.range(from, to)

  if (error) throw error
  return data as Salon[]
}

export async function getSalonById(id: string) {
  const { data, error } = await supabase
    .from("salons")
    .select("*")
    .eq("id", id)
    .single()

  if (error) throw error
  return data as Salon
}

// Stylist API functions
export async function getStylists(
  filters?: {
    salonId?: string
    specialties?: string[]
    searchTerm?: string
  },
  page = 1,
  limit = 10
) {
  let query = supabase.from("stylists").select("*")

  if (filters?.salonId) {
    query = query.eq("salon_id", filters.salonId)
  }

  if (filters?.specialties?.length) {
    query = query.contains("specialties", filters.specialties)
  }

  if (filters?.searchTerm) {
    query = query.ilike("name", `%${filters.searchTerm}%`)
  }

  // Pagination
  const from = (page - 1) * limit
  const to = from + limit - 1

  const { data, error } = await query.range(from, to)

  if (error) throw error
  return data as Stylist[]
}

export async function getStylistById(id: string) {
  const { data, error } = await supabase
    .from("stylists")
    .select("*")
    .eq("id", id)
    .single()

  if (error) throw error
  return data as Stylist
}

// Review API functions
export async function getReviewsByStylistId(stylistId: string) {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("stylist_id", stylistId)
    .order("created_at", { ascending: false })

  if (error) throw error
  return data as Review[]
}

// Appointment API functions
export async function createAppointment(
  appointment: Omit<Appointment, "id" | "created_at" | "updated_at">
) {
  const { data, error } = await supabase
    .from("appointments")
    .insert([appointment])
    .select()

  if (error) throw error
  return data[0] as Appointment
}

export async function getStylistAvailability(stylistId: string, date: string) {
  // This would need to be implemented based on your business rules for availability
  // Here's a placeholder implementation that returns all appointments for a stylist on a given date
  const { data, error } = await supabase
    .from("appointments")
    .select("*")
    .eq("stylist_id", stylistId)
    .eq("date", date)

  if (error) throw error
  return data as Appointment[]
}
