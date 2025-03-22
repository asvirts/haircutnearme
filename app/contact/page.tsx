import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
          Have questions or feedback? We'd love to hear from you. Fill out the
          form below or reach out directly.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="What is this regarding?"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-between">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Get in Touch</h2>

            <div className="flex items-start">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">contact@haircutnearme.net</p>
                <p className="text-gray-600">support@haircutnearme.net</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
                <p className="text-gray-600">Monday-Friday, 9AM-5PM EST</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Office</h3>
                <p className="text-gray-600">123 Styling Street</p>
                <p className="text-gray-600">New York, NY 10001</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/haircutnearme"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/haircutnearme"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/haircutnearme"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-2xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-3 text-lg font-semibold">
              How do I list my salon?
            </h3>
            <p className="text-gray-600">
              You can list your salon by creating a business account and
              following the simple registration process. Visit our List Your
              Business page to get started.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-3 text-lg font-semibold">
              Is there a fee to list my business?
            </h3>
            <p className="text-gray-600">
              We offer both free and premium listing options. The basic listing
              is completely free, while premium listings offer additional
              features at competitive rates.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-3 text-lg font-semibold">
              How do I change or cancel an appointment?
            </h3>
            <p className="text-gray-600">
              You can manage your appointments through your account dashboard.
              Most changes or cancellations can be made up to 24 hours before
              your scheduled time.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-3 text-lg font-semibold">How do reviews work?</h3>
            <p className="text-gray-600">
              After your appointment, you'll receive an email inviting you to
              leave a review. All reviews are from verified customers who have
              booked through our platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
