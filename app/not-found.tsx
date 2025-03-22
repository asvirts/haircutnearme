import Link from "next/link"
import { Scissors } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
        <Scissors className="h-12 w-12 text-blue-600" />
      </div>

      <h1 className="mb-4 text-4xl font-bold">Page Not Found</h1>

      <p className="mb-8 max-w-md text-lg text-gray-600">
        We couldn't find the page you're looking for. It might have been
        removed, renamed, or doesn't exist.
      </p>

      <div className="space-y-4">
        <Link
          href="/"
          className="inline-block rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Go to Homepage
        </Link>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/salons"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Find Salons
          </Link>
          <Link
            href="/stylists"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Find Stylists
          </Link>
          <Link
            href="/book"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Book an Appointment
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
