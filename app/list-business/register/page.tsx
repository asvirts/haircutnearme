import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function RegisterBusinessPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/list-business"
        className="mb-8 flex items-center text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Business Info
      </Link>

      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold">Register Your Business</h1>
          <p className="text-gray-600">
            Fill out the form below to get started with your HaircutNearMe.net
            business listing.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
          <form className="space-y-6">
            <div>
              <h2 className="mb-6 text-xl font-semibold">
                Business Information
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="businessName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Business Name*
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="businessType"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Business Type*
                  </label>
                  <select
                    id="businessType"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    required
                  >
                    <option value="">Select type</option>
                    <option value="salon">Hair Salon</option>
                    <option value="barbershop">Barbershop</option>
                    <option value="spa">Spa with Hair Services</option>
                    <option value="independent">Independent Stylist</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Business Phone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Business Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="website"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Website (optional)
                  </label>
                  <input
                    type="url"
                    id="website"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="yearEstablished"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Year Established (optional)
                  </label>
                  <input
                    type="number"
                    id="yearEstablished"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    min="1900"
                    max={new Date().getFullYear()}
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-xl font-semibold">Address</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Street Address*
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    City*
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="state"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    State/Province*
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="zip"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    ZIP/Postal Code*
                  </label>
                  <input
                    type="text"
                    id="zip"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Country*
                  </label>
                  <select
                    id="country"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    required
                  >
                    <option value="">Select country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-xl font-semibold">
                Account Information
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="ownerName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Owner/Manager Name*
                  </label>
                  <input
                    type="text"
                    id="ownerName"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="ownerEmail"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Owner/Manager Email*
                  </label>
                  <input
                    type="email"
                    id="ownerEmail"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Create Password*
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    required
                    minLength={8}
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    At least 8 characters with a mix of letters, numbers, and
                    symbols
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Confirm Password*
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    required
                    minLength={8}
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-xl font-semibold">Subscription Plan</h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-md border border-gray-200 p-4">
                  <input
                    type="radio"
                    id="planBasic"
                    name="subscriptionPlan"
                    value="basic"
                    checked
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="planBasic"
                    className="flex flex-1 justify-between"
                  >
                    <div>
                      <p className="font-medium">Basic</p>
                      <p className="text-sm text-gray-600">
                        Free listing with basic features
                      </p>
                    </div>
                    <div className="font-medium">Free</div>
                  </label>
                </div>

                <div className="flex items-center gap-3 rounded-md border border-gray-200 p-4">
                  <input
                    type="radio"
                    id="planPremium"
                    name="subscriptionPlan"
                    value="premium"
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="planPremium"
                    className="flex flex-1 justify-between"
                  >
                    <div>
                      <p className="font-medium">Premium</p>
                      <p className="text-sm text-gray-600">
                        Advanced features and visibility
                      </p>
                    </div>
                    <div className="font-medium">$29/month</div>
                  </label>
                </div>

                <div className="flex items-center gap-3 rounded-md border border-gray-200 p-4">
                  <input
                    type="radio"
                    id="planPro"
                    name="subscriptionPlan"
                    value="pro"
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="planPro"
                    className="flex flex-1 justify-between"
                  >
                    <div>
                      <p className="font-medium">Pro</p>
                      <p className="text-sm text-gray-600">
                        All premium features plus marketing tools
                      </p>
                    </div>
                    <div className="font-medium">$49/month</div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                required
              />
              <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                I agree to the{" "}
                <a href="/terms" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Create Account
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}
