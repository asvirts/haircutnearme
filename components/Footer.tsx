import Link from "next/link"
import { Scissors } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center text-xl font-bold">
              <Scissors className="mr-2 h-5 w-5" />
              <span>haircutnearme</span>
              <span className="text-blue-500">.net</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Find the perfect salon or stylist near you. Book appointments,
              read reviews, and discover talented hair professionals in your
              area.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">
              For Clients
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/salons"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Find Salons
                </Link>
              </li>
              <li>
                <Link
                  href="/stylists"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Find Stylists
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Leave a Review
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">
              For Businesses
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/list-business"
                  className="text-gray-600 hover:text-blue-500"
                >
                  List Your Business
                </Link>
              </li>
              <li>
                <Link
                  href="/business/pricing"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/business/resources"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/business/success-stories"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} haircutnearme.net. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
