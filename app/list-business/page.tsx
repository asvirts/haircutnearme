import Image from "next/image"
import Link from "next/link"
import {
  Check,
  Scissors,
  CalendarCheck,
  Star,
  Users,
  TrendingUp
} from "lucide-react"

export default function ListBusinessPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">List Your Business</h1>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
          Join thousands of salons and stylists growing their business with
          HaircutNearMe.net
        </p>
      </div>

      <div className="mb-20 grid gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="mb-6 text-2xl font-bold">Grow Your Client Base</h2>
          <p className="mb-6 text-gray-600">
            HaircutNearMe.net connects you with potential clients who are
            actively searching for the services you offer. Our platform helps
            you:
          </p>

          <ul className="mb-8 space-y-4">
            <li className="flex items-start">
              <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Check className="h-4 w-4" />
              </div>
              <span className="text-gray-700">
                Increase your online visibility
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Check className="h-4 w-4" />
              </div>
              <span className="text-gray-700">
                Fill your appointment calendar
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Check className="h-4 w-4" />
              </div>
              <span className="text-gray-700">
                Showcase your work and expertise
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Check className="h-4 w-4" />
              </div>
              <span className="text-gray-700">
                Build your reputation through verified reviews
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Check className="h-4 w-4" />
              </div>
              <span className="text-gray-700">
                Manage your business efficiently with our tools
              </span>
            </li>
          </ul>

          <Link
            href="/list-business/register"
            className="inline-block rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Get Started Today
          </Link>
        </div>

        <div className="order-1 relative aspect-square overflow-hidden rounded-lg md:order-2">
          <Image
            src="/images/salon-owner.jpg"
            alt="Salon owner working with client"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-20">
        <h2 className="mb-12 text-center text-2xl font-bold">
          Features & Benefits
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Scissors className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">
              Custom Business Profile
            </h3>
            <p className="text-gray-600">
              Create a beautiful profile showcasing your services, team members,
              photos, amenities, and business details to attract new clients.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <CalendarCheck className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">
              Online Booking System
            </h3>
            <p className="text-gray-600">
              Our easy-to-use booking system allows clients to schedule
              appointments 24/7, reducing no-shows and saving you time on the
              phone.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Star className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">Review Management</h3>
            <p className="text-gray-600">
              Build your reputation with verified client reviews. Respond to
              feedback and showcase your quality service to potential clients.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">Client Management</h3>
            <p className="text-gray-600">
              Keep track of client preferences, appointment history, and notes
              to provide personalized service and build lasting relationships.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">Analytics Dashboard</h3>
            <p className="text-gray-600">
              Gain insights into your business performance with detailed
              analytics on bookings, client retention, popular services, and
              more.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <CalendarCheck className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-lg font-semibold">Marketing Tools</h3>
            <p className="text-gray-600">
              Access promotional tools and features to help you attract new
              clients, fill empty slots, and grow your business.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="mb-8 text-center text-2xl font-bold">Pricing Plans</h2>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6">
            <div className="mb-4">
              <h3 className="mb-2 text-xl font-bold">Basic</h3>
              <p className="text-3xl font-bold">Free</p>
              <p className="text-sm text-gray-500">Forever</p>
            </div>

            <ul className="mb-6 space-y-3">
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-gray-700">Business profile</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-gray-700">3 team members</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-gray-700">
                  Basic online booking
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-gray-700">Review management</span>
              </li>
            </ul>

            <Link
              href="/list-business/register"
              className="block w-full rounded-md border border-blue-600 px-4 py-2 text-center text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50"
            >
              Get Started
            </Link>
          </div>

          <div className="relative rounded-lg border-2 border-blue-600 p-6">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
              Most Popular
            </div>

            <div className="mb-4">
              <h3 className="mb-2 text-xl font-bold">Premium</h3>
              <p className="text-3xl font-bold">$29</p>
              <p className="text-sm text-gray-500">per month</p>
            </div>

            <ul className="mb-6 space-y-3">
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-gray-700">
                  All Basic features
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-gray-700">
                  Unlimited team members
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-gray-700">
                  Advanced booking features
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-gray-700">
                  Featured in search results
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-gray-700">
                  Client management tools
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-gray-700">Basic analytics</span>
              </li>
            </ul>

            <Link
              href="/list-business/register"
              className="block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <div className="mb-4">
              <h3 className="mb-2 text-xl font-bold">Pro</h3>
              <p className="text-3xl font-bold">$49</p>
              <p className="text-sm text-gray-500">per month</p>
            </div>

            <ul className="mb-6 space-y-3">
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-gray-700">
                  All Premium features
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-gray-700">
                  Priority in search results
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-gray-700">
                  Advanced analytics
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-gray-700">Marketing tools</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-gray-700">Dedicated support</span>
              </li>
            </ul>

            <Link
              href="/list-business/register"
              className="block w-full rounded-md border border-blue-600 px-4 py-2 text-center text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="mb-8 text-center text-2xl font-bold">How It Works</h2>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex flex-col items-start md:flex-row md:items-center">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
              1
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Create Your Account
              </h3>
              <p className="text-gray-600">
                Sign up for a free account and provide basic information about
                your business. The process takes less than 5 minutes.
              </p>
            </div>
          </div>

          <div className="mb-8 flex flex-col items-start md:flex-row md:items-center">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
              2
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Complete Your Profile
              </h3>
              <p className="text-gray-600">
                Add detailed information about your salon, services, stylists,
                photos, and business hours to make your profile stand out.
              </p>
            </div>
          </div>

          <div className="mb-8 flex flex-col items-start md:flex-row md:items-center">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
              3
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Set Up Your Availability
              </h3>
              <p className="text-gray-600">
                Configure your business hours, services, and appointment
                availability to start accepting bookings from clients.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start md:flex-row md:items-center">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
              4
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Start Growing Your Business
              </h3>
              <p className="text-gray-600">
                Your profile is now live! Start receiving bookings, collecting
                reviews, and using our tools to grow your client base.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl rounded-lg bg-blue-50 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">
          Ready to Grow Your Business?
        </h2>
        <p className="mb-6 text-gray-600">
          Join thousands of salon owners and stylists who are expanding their
          client base with HaircutNearMe.net
        </p>
        <Link
          href="/list-business/register"
          className="inline-block rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Get Started Today
        </Link>
      </div>
    </div>
  )
}
