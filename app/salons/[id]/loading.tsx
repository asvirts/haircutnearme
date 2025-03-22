import { Skeleton } from "@/components/ui/skeleton"

export default function SalonLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Skeleton className="h-6 w-24" />
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Left column - Salon images */}
        <div className="md:col-span-2">
          <Skeleton className="h-80 w-full rounded-lg" />

          <div className="mt-4 grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-20 w-full rounded-lg" />
            ))}
          </div>
        </div>

        {/* Right column - Salon info */}
        <div>
          <Skeleton className="mb-2 h-10 w-3/4" />

          <Skeleton className="mb-4 h-6 w-24" />

          <div className="mb-6 space-y-3">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-2/3" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-6 w-5/6" />
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            <Skeleton className="h-6 w-32 rounded-full" />
            <Skeleton className="h-6 w-32 rounded-full" />
          </div>

          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      </div>

      {/* Salon description */}
      <div className="my-8">
        <Skeleton className="mb-4 h-8 w-48" />
        <Skeleton className="h-24 w-full" />
      </div>

      {/* Amenities */}
      <div className="my-8">
        <Skeleton className="mb-4 h-8 w-32" />
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-6 w-20 rounded-full" />
          ))}
        </div>
      </div>

      {/* Stylists */}
      <div className="my-8">
        <Skeleton className="mb-6 h-8 w-48" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2].map((i) => (
            <Skeleton key={i} className="h-64 w-full rounded-lg" />
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="my-8">
        <Skeleton className="mb-4 h-8 w-32" />
        <Skeleton className="h-80 w-full rounded-lg" />
      </div>
    </div>
  )
}
