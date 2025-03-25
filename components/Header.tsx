import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scissors } from "lucide-react"

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center text-2xl font-bold">
          <Scissors className="mr-2 h-6 w-6" />
          <span>haircutnearme</span>
          <span className="text-blue-500">.net</span>
        </Link>

        <nav className="hidden space-x-6 md:flex">
          <Link
            href="/salons"
            className="text-sm font-medium hover:text-blue-500"
          >
            Find Salons
          </Link>
          <Link
            href="/book"
            className="text-sm font-medium hover:text-blue-500"
          >
            Book
          </Link>
          <Link href="/faq" className="text-sm font-medium hover:text-blue-500">
            FAQ
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-blue-500"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-blue-500"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/list-business">List Your Business</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
