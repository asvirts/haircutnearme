import fs from "fs"
import path from "path"
import { Appointment, Review, Salon, Service } from "./types"

// Database structure
export interface JsonDB {
  salons: Salon[]
  services: Service[]
  reviews: Review[]
  appointments: Appointment[]
}

// Database file path
const dbPath = path.join(process.cwd(), "data", "db.json")

// Read the database
export function readDb(): JsonDB {
  try {
    const data = fs.readFileSync(dbPath, "utf8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Error reading database:", error)
    return {
      salons: [],
      services: [],
      reviews: [],
      appointments: []
    }
  }
}

// Write to the database
export function writeDb(db: JsonDB): void {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2))
  } catch (error) {
    console.error("Error writing database:", error)
  }
}

// Generate a unique ID
export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
}

// Get the current timestamp
export function getTimestamp(): string {
  return new Date().toISOString()
}
