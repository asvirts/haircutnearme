import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin, DollarSign, Search, Filter, X } from "lucide-react"

type FilterValues = {
  location: string
  priceRange: number[]
  specialties: string[]
  searchTerm: string
  hasParking: boolean
  isWheelchairAccessible: boolean
}

type SearchFiltersProps = {
  onFilterChange: (filters: FilterValues) => void
  initialFilters?: Partial<FilterValues>
}

const SPECIALTIES = [
  "Haircut",
  "Color",
  "Balayage",
  "Highlights",
  "Curly Hair",
  "Barber",
  "Extensions",
  "Wedding",
  "Kids"
]

export function SearchFilters({
  onFilterChange,
  initialFilters = {}
}: SearchFiltersProps) {
  const [filters, setFilters] = useState<FilterValues>({
    location: initialFilters.location || "",
    priceRange: initialFilters.priceRange || [],
    specialties: initialFilters.specialties || [],
    searchTerm: initialFilters.searchTerm || "",
    hasParking: initialFilters.hasParking || false,
    isWheelchairAccessible: initialFilters.isWheelchairAccessible || false
  })

  const [isFiltersExpanded, setIsFiltersExpanded] = useState(false)

  const handleInputChange = (field: keyof FilterValues, value: any) => {
    const newFilters = { ...filters, [field]: value }
    setFilters(newFilters)
  }

  const togglePriceRange = (priceLevel: number) => {
    const newPriceRange = [...filters.priceRange]
    const index = newPriceRange.indexOf(priceLevel)

    if (index >= 0) {
      newPriceRange.splice(index, 1)
    } else {
      newPriceRange.push(priceLevel)
    }

    handleInputChange("priceRange", newPriceRange)
  }

  const toggleSpecialty = (specialty: string) => {
    const newSpecialties = [...filters.specialties]
    const index = newSpecialties.indexOf(specialty)

    if (index >= 0) {
      newSpecialties.splice(index, 1)
    } else {
      newSpecialties.push(specialty)
    }

    handleInputChange("specialties", newSpecialties)
  }

  const handleSearch = () => {
    onFilterChange(filters)
  }

  const clearFilters = () => {
    const resetFilters: FilterValues = {
      location: "",
      priceRange: [],
      specialties: [],
      searchTerm: "",
      hasParking: false,
      isWheelchairAccessible: false
    }
    setFilters(resetFilters)
    onFilterChange(resetFilters)
  }

  return (
    <div className="mb-8 rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search stylists, services, etc."
            className="pl-9"
            value={filters.searchTerm}
            onChange={(e) => handleInputChange("searchTerm", e.target.value)}
          />
        </div>
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Location, ZIP code"
            className="pl-9"
            value={filters.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
          />
        </div>
        <Button onClick={handleSearch}>Search</Button>
        <Button
          variant="outline"
          onClick={() => setIsFiltersExpanded(!isFiltersExpanded)}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        {(filters.priceRange.length > 0 ||
          filters.specialties.length > 0 ||
          filters.hasParking ||
          filters.isWheelchairAccessible) && (
          <Button
            variant="ghost"
            onClick={clearFilters}
            className="flex items-center gap-2"
          >
            <X className="h-4 w-4" />
            Clear
          </Button>
        )}
      </div>

      {isFiltersExpanded && (
        <div className="mt-4 grid gap-6 border-t pt-4 md:grid-cols-3">
          <div>
            <h3 className="mb-2 font-medium">Price Range</h3>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((price) => (
                <Button
                  key={price}
                  variant={
                    filters.priceRange.includes(price) ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => togglePriceRange(price)}
                  className="flex h-8 w-8 items-center justify-center p-0"
                >
                  {Array.from({ length: price })
                    .map(() => "$")
                    .join("")}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-medium">Specialties</h3>
            <div className="flex flex-wrap gap-2">
              {SPECIALTIES.map((specialty) => (
                <Button
                  key={specialty}
                  variant={
                    filters.specialties.includes(specialty)
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  onClick={() => toggleSpecialty(specialty)}
                  className="h-7 rounded-full py-0 text-xs"
                >
                  {specialty}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-medium">Amenities</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.hasParking}
                  onChange={() =>
                    handleInputChange("hasParking", !filters.hasParking)
                  }
                  className="rounded border-gray-300"
                />
                <span>Parking Available</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.isWheelchairAccessible}
                  onChange={() =>
                    handleInputChange(
                      "isWheelchairAccessible",
                      !filters.isWheelchairAccessible
                    )
                  }
                  className="rounded border-gray-300"
                />
                <span>Wheelchair Accessible</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
