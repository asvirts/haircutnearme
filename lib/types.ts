export type Salon = {
  id: string
  name: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  email: string
  website?: string
  description: string
  amenities: string[]
  created_at: string
  updated_at: string
  latitude?: number
  longitude?: number
  image_url?: string
  is_wheelchair_accessible: boolean
  has_parking: boolean
  price_range: 1 | 2 | 3 | 4 // $ to $$$$
}

export type Stylist = {
  id: string
  salon_id: string
  name: string
  bio: string
  specialties: string[]
  services: Service[]
  created_at: string
  updated_at: string
  image_url?: string
  years_experience: number
}

export type Service = {
  id: string
  name: string
  description: string
  duration: number // in minutes
  price: number
  stylist_id: string
}

export type Review = {
  id: string
  stylist_id: string
  rating: 1 | 2 | 3 | 4 | 5
  comment: string
  customer_name: string
  created_at: string
  skill_rating?: 1 | 2 | 3 | 4 | 5
  timeliness_rating?: 1 | 2 | 3 | 4 | 5
  value_rating?: 1 | 2 | 3 | 4 | 5
  image_url?: string
}

export type Appointment = {
  id: string
  stylist_id: string
  service_id: string
  date: string
  time: string
  duration: number
  customer_name: string
  customer_email: string
  customer_phone: string
  status: "pending" | "confirmed" | "cancelled"
  notes?: string
  created_at: string
  updated_at: string
}
