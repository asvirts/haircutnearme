import Image from "next/image"
import { Scissors, Users, Globe, Award, Calendar } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">About HaircutNearMe.net</h1>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
          Connecting people with talented hair professionals in their area since
          2023.
        </p>
      </div>

      <div className="mb-20 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold">Our Mission</h2>
          <p className="mb-4 text-gray-600">
            At HaircutNearMe.net, we're on a mission to revolutionize how people
            find and book hair services. We believe everyone deserves to look
            and feel their best, and finding the right stylist shouldn't be a
            challenge.
          </p>
          <p className="mb-4 text-gray-600">
            Our platform connects clients with skilled hair professionals based
            on their specific needs, location, and preferences. We're dedicated
            to making the entire process - from discovery to booking to
            post-appointment reviews - seamless and enjoyable.
          </p>
          <p className="text-gray-600">
            By empowering both clients and stylists with the right tools and
            information, we're building a community where great hair experiences
            are accessible to all.
          </p>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src="/images/about-image.jpg"
            alt="Stylist working with client"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-20">
        <h2 className="mb-12 text-center text-2xl font-bold">
          Why Choose HaircutNearMe
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">
              Find Your Perfect Match
            </h3>
            <p className="text-gray-600">
              Our intelligent matching system helps you find stylists who
              specialize in your specific hair type and desired style.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Calendar className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Easy Online Booking</h3>
            <p className="text-gray-600">
              Book appointments instantly with real-time availability, no phone
              calls required.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Verified Reviews</h3>
            <p className="text-gray-600">
              All reviews are from real clients who have booked through our
              platform, giving you honest insights.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Globe className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Nationwide Coverage</h3>
            <p className="text-gray-600">
              With thousands of salons and stylists across the country, find
              great hair services wherever you are.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="mb-8 text-center text-2xl font-bold">Our Story</h2>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-lg text-gray-600">
            HaircutNearMe.net was founded in 2023 by a team of tech enthusiasts
            who were frustrated with the traditional ways of finding and booking
            hair services.
          </p>
          <p className="mb-4 text-lg text-gray-600">
            After countless bad haircuts and difficulties finding stylists who
            understood their specific hair needs, they decided to create a
            solution that would make the process easier for everyone.
          </p>
          <p className="text-lg text-gray-600">
            Today, our platform connects thousands of clients with talented hair
            professionals every day, helping people look and feel their best
            while supporting local salon businesses.
          </p>
        </div>
      </div>

      <div>
        <h2 className="mb-8 text-center text-2xl font-bold">
          Join Our Community
        </h2>
        <div className="mx-auto max-w-xl rounded-lg bg-blue-50 p-8 text-center">
          <div className="mb-4 flex justify-center">
            <Scissors className="h-12 w-12 text-blue-600" />
          </div>
          <h3 className="mb-4 text-xl font-semibold">
            Are you a hair professional?
          </h3>
          <p className="mb-6 text-gray-600">
            Join thousands of stylists and salon owners who are growing their
            business with HaircutNearMe.net. Manage your bookings, showcase your
            work, and connect with new clients.
          </p>
          <a
            href="/list-business"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            List Your Business
          </a>
        </div>
      </div>
    </div>
  )
}
