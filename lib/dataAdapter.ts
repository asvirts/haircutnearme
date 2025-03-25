import { Salon as DBSalon } from "./types"

export interface AppSalon {
  id: string | number
  name: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  website: string
  image_url: string
  description: string
  price_range: number
  amenities: string[]
  latitude: number
  longitude: number
  review_rating: number
  review_count: number
  is_wheelchair_accessible: boolean
  has_parking: boolean
  images?: any[]
}

export function adaptSalonToAppFormat(dbSalon: DBSalon): AppSalon {
  return {
    id: dbSalon.id,
    name: dbSalon.title || (dbSalon.name as string) || "",
    address: dbSalon.address || "",
    city: dbSalon.complete_address?.city || "",
    state: dbSalon.complete_address?.state || "",
    zip: dbSalon.complete_address?.zip || "",
    phone: dbSalon.phone || "",
    website: dbSalon.website || "",
    image_url: dbSalon.thumbnail || "",
    description: dbSalon.descriptions || dbSalon.description || "",
    price_range: typeof dbSalon.price_range === "string" 
      ? dbSalon.price_range.length 
      : (typeof dbSalon.price_range === "number" ? dbSalon.price_range : 1),
    amenities: dbSalon.about?.highlights || dbSalon.amenities || [],
    latitude: dbSalon.latitude || 0,
    longitude: dbSalon.longitude || 0,
    review_rating: dbSalon.review_rating || 0,
    review_count: dbSalon.review_count || 0,
    is_wheelchair_accessible: dbSalon.is_wheelchair_accessible || false,
    has_parking: dbSalon.has_parking || false,
    images: dbSalon.images || []
  }
}

export function getBusinessHours(salon: DBSalon): Record<string, string> {
  // Case 1: If salon has open_hours as an object with today/weekly properties
  if (typeof salon.open_hours === "object" && salon.open_hours !== null) {
    if (Array.isArray(salon.open_hours.weekly)) {
      return salon.open_hours.weekly.reduce((acc, day) => {
        if (day.day && day.hours) {
          acc[day.day] = day.hours
        }
        return acc
      }, {} as Record<string, string>)
    } 
    
    // Try to extract from open_hours object directly if it has day keys
    if (salon.open_hours) {
      const hours = {} as Record<string, string>
      
      // Filter out non-day properties
      for (const [key, value] of Object.entries(salon.open_hours)) {
        if (key !== 'today' && key !== 'weekly' && value) {
          // Handle case where value is an array (e.g., ["9 AM–5 PM"])
          if (Array.isArray(value)) {
            hours[key] = value[0] || 'Closed'
          } else if (typeof value === 'string') {
            hours[key] = value
          }
        }
      }
      
      if (Object.keys(hours).length > 0) {
        return hours
      }
    }
  }
  
  // Case 2: If salon has open_hours as a string, try to parse it
  if (typeof salon.open_hours === "string") {
    try {
      const parsed = JSON.parse(salon.open_hours)
      if (typeof parsed === "object" && parsed !== null) {
        return parsed
      }
    } catch (e) {
      // Not valid JSON, use as is
      return { "Hours": salon.open_hours }
    }
  }
  
  // Default empty hours
  return {
    "Monday": "9 AM–7 PM",
    "Tuesday": "9 AM–7 PM",
    "Wednesday": "9 AM–7 PM",
    "Thursday": "9 AM–7 PM",
    "Friday": "9 AM–7 PM",
    "Saturday": "9 AM–5 PM",
    "Sunday": "Closed"
  }
}
