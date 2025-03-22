import { MetadataRoute } from "next"
import { Salon } from "@/lib/types"

// In a real app, this would fetch all salon IDs from the database
const getMockSalonIds = (): string[] => {
  return ["1", "2", "3", "4", "5"]
}

export default function sitemap(): MetadataRoute.Sitemap {
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

  // Dynamic salon routes
  // In a real app, you'd fetch all salon IDs from your database
  const salonIds = getMockSalonIds()

  const salonRoutes = salonIds.map((id) => ({
    url: `${baseUrl}/salons/${id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8
  }))

  return [...routes, ...salonRoutes]
}
