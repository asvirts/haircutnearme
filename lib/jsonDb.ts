import { Appointment, Review, Salon, Service, Stylist } from "./types"
import { MOCK_DB } from "./mockData"

// Database structure
export interface JsonDB {
  salons: Salon[]
  services: Service[]
  reviews: Review[]
  appointments: Appointment[]
  stylists?: Stylist[]
}

// Read the database
export async function readDb(): Promise<JsonDB> {
  return MOCK_DB
}

// Write to the database
export async function writeDb(db: JsonDB): Promise<void> {
  console.warn("writeDb called - operation not supported in this environment")
  return
}

// Generate a unique ID
export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
}

// Get the current timestamp
export function getTimestamp(): string {
  return new Date().toISOString()
}
