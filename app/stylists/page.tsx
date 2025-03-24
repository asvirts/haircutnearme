"use client"

import { SearchFilters } from "@/components/SearchFilters"
import { StylistCard } from "@/components/StylistCard"
import { Stylist } from "@/lib/types"
import { useState, useEffect } from "react"
import { getStylists } from "@/lib/api"

export default function StylistsPage() {
  const [stylists, setStylists] = useState<Stylist[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const ITEMS_PER_PAGE = 6

  useEffect(() => {
    async function fetchStylists() {
      setIsLoading(true)
      try {
        const data = await getStylists({}, page, ITEMS_PER_PAGE)
        setStylists(data)
        // In a real implementation, you'd get the total count from the API
        // For now, we're assuming 2 pages of data
        setTotalPages(2)
      } catch (error) {
        console.error("Error fetching stylists:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStylists()
  }, [page])

  const handleFilterChange = (filters: Record<string, unknown>) => {
    console.log("Filters changed:", filters)
    // In a real app, this would filter the stylists by calling the API with filters
  }

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Hair Stylists & Barbers</h1>

      <SearchFilters onFilterChange={handleFilterChange} />

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="my-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stylists.map((stylist) => (
            <StylistCard key={stylist.id} stylist={stylist} />
          ))}
        </div>
      )}

      <div className="my-8 flex justify-center">
        <nav className="flex space-x-2">
          <button
            className="rounded-md border bg-white px-3 py-1 text-sm"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`rounded-md border px-3 py-1 text-sm ${
                page === index + 1 ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="rounded-md border bg-white px-3 py-1 text-sm"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  )
}
