import { MetadataRoute } from "next"
import { MOCK_DB } from "@/lib/mockData"

// Get salon IDs from mock data
const getSalonIds = async (): Promise<string[]> => {
  // Use mock data instead of Supabase
  try {
    return MOCK_DB.salons.map((salon) => salon.id.toString())
  } catch (error) {
    console.error("Error fetching salon IDs for sitemap:", error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://haircutnearme.net"

  // Static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0
    },
    {
      url: `${baseUrl}/salons`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/stylists`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/book`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/list-business`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3
    }
  ]

  // Dynamic salon routes - fetch real salon IDs from Supabase
  const salonIds = await getSalonIds()

  const salonRoutes = salonIds.map((id) => ({
    url: `${baseUrl}/salons/${id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8
  }))

  return [...routes, ...salonRoutes]
}
