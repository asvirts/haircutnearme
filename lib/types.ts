export type Salon = {
  id: number
  input_id: string
  link: string
  title: string // salon name
  category: string
  address: string
  open_hours: Record<string, unknown>
  popular_times: Record<string, unknown>
  website?: string
  phone: string
  plus_code: string
  review_count: number
  review_rating: number
  reviews_per_rating: Record<string, unknown>
  latitude?: number
  longitude?: number
  cid: number
  status: string
  descriptions: string
  reviews_link: string
  thumbnail: string
  timezone: string
  price_range: string
  data_id: string
  images: string[]
  reservations: string
  order_online: string
  menu: Record<string, unknown>
  owner: Record<string, unknown>
  complete_address: Record<string, unknown>
  about: Record<string, unknown>
  user_reviews: Record<string, unknown>
  emails: string
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
