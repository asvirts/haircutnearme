import { StaticImageData } from "next/image"

// Define PageProps type compatible with Next.js App Router
export type PageProps<P = {}, S = {}> = {
  params: P
  searchParams: S
}

export type Salon = {
  id: string | number
  input_id?: string
  link?: string
  title: string
  category?: string
  address: string
  open_hours?:
    | {
        today?: string
        weekly?: Array<{ day: string; hours: string }>
      }
    | string
  popular_times?: Record<string, unknown>
  website?: string
  phone?: string
  plus_code?: string
  review_count?: number
  review_rating?: number
  reviews_per_rating?: Record<string, number>
  latitude?: number
  longitude?: number
  cid?: number
  status?: string
  descriptions?: string
  description?: string
  reviews_link?: string
  thumbnail?: string
  timezone?: string
  price_range?: number | string
  data_id?: string
  images?: Array<string | { image: string }>
  reservations?: string
  order_online?: string
  menu?: Record<string, unknown>
  owner?: { name: string; response_rate: string }
  complete_address?: {
    street?: string
    city?: string
    state?: string
    zip?: string
    country?: string
  }
  city?: string
  state?: string
  zip?: string
  about?: {
    highlights?: string[]
    services?: string[]
  }
  amenities?: string[]
  is_wheelchair_accessible?: boolean
  has_parking?: boolean
  user_reviews?: Array<Review>
  emails?: string
  image_url?: string
  created_at?: string
  updated_at?: string
  name?: string
}

export type Service = {
  id: string
  name: string
  description: string
  duration: number
  price: number
  category?: string
}

export type Review = {
  id: string
  salon_id?: string
  rating: number
  comment: string
  customer_name: string
  created_at: string
  skill_rating?: number
  timeliness_rating?: number
  value_rating?: number
  image_url?: string
}

export type Appointment = {
  id: string
  salon_id: string
  service_id: string
  customer_id: string
  date: string
  time: string
  status: "pending" | "confirmed" | "cancelled" | "completed"
  created_at: string
  updated_at: string
  notes?: string
}
