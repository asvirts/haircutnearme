import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
          Find answers to common questions about HaircutNearMe.net
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <h2 className="mb-6 text-2xl font-bold">For Clients</h2>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-lg font-semibold">
                How do I book an appointment?
              </h3>
              <p className="text-gray-600">
                Booking an appointment is easy! Simply search for salons or
                stylists in your area, browse their profiles and available
                services, select your preferred date and time, and confirm your
                booking. You'll receive a confirmation email with all the
                details.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-lg font-semibold">
                Do I need to create an account to book?
              </h3>
              <p className="text-gray-600">
                While you can browse salons and stylists without an account,
                creating one makes booking faster and allows you to manage your
                appointments, save favorite stylists, and leave reviews.
                Creating an account is free and only takes a minute.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-lg font-semibold">
                How do I cancel or reschedule an appointment?
              </h3>
              <p className="text-gray-600">
                You can cancel or reschedule your appointment through your
                account dashboard. Most salons allow changes up to 24 hours
                before your scheduled time without any penalty, but policies may
                vary by salon.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-lg font-semibold">
                Can I leave reviews for stylists?
              </h3>
              <p className="text-gray-600">
                Yes! After your appointment, you'll receive an email invitation
                to leave a review. Your honest feedback helps other clients and
                helps stylists improve their services. All reviews on our
                platform are from verified customers.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-lg font-semibold">
                Is there a fee for using HaircutNearMe.net?
              </h3>
              <p className="text-gray-600">
                No, our service is completely free for clients. You only pay for
                the salon services you book, directly to the salon or stylist
                when you visit.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="mb-6 text-2xl font-bold">
            For Salon Owners & Stylists
          </h2>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-lg font-semibold">
                How do I list my salon on HaircutNearMe.net?
              </h3>
              <p className="text-gray-600">
                You can list your salon by visiting our{" "}
                <Link
                  href="/list-business"
                  className="text-blue-600 hover:underline"
                >
                  List Your Business
                </Link>{" "}
                page and completing the registration process. The basic listing
                is free, and we also offer premium options with additional
                features.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-lg font-semibold">
                What are the costs and subscription options?
              </h3>
              <p className="text-gray-600">
                We offer three tiers: Basic (free), Premium ($29/month), and Pro
                ($49/month). Each tier comes with different features and
                benefits. You can view the detailed breakdown on our{" "}
                <Link
                  href="/list-business"
                  className="text-blue-600 hover:underline"
                >
                  pricing page
                </Link>
                .
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-lg font-semibold">
                How do online bookings work?
              </h3>
              <p className="text-gray-600">
                Our booking system integrates with your business schedule. You
                set your available hours, services, and prices, and clients can
                book appointments during those times. You'll receive
                notifications for new bookings, and can manage your schedule
                through our dashboard.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-lg font-semibold">
                Can I respond to customer reviews?
              </h3>
              <p className="text-gray-600">
                Yes, you can respond to all client reviews through your business
                dashboard. We encourage salon owners to engage with reviews, as
                it shows potential clients that you value customer feedback and
                are committed to great service.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-lg font-semibold">
                How do I update my salon's information?
              </h3>
              <p className="text-gray-600">
                You can update your salon's information, services, photos, and
                availability at any time through your business dashboard.
                Changes typically appear on your profile immediately.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="mb-6 text-2xl font-bold">
            Platform & Technical Questions
          </h2>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-lg font-semibold">
                Is HaircutNearMe.net available as a mobile app?
              </h3>
              <p className="text-gray-600">
                While we don't currently have a dedicated mobile app, our
                website is fully mobile-responsive and works seamlessly on
                smartphones and tablets. You can access all features through
                your mobile browser.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-lg font-semibold">
                How is my personal information protected?
              </h3>
              <p className="text-gray-600">
                We take data protection seriously. All personal information is
                encrypted and securely stored according to industry standards.
                We never share your personal details with third parties without
                your consent. For more information, please review our{" "}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-lg font-semibold">
                What payment methods are supported?
              </h3>
              <p className="text-gray-600">
                For salon subscriptions, we accept major credit cards, PayPal,
                and bank transfers. Clients typically pay for their services
                directly at the salon, though some businesses may offer
                prepayment options through their own systems.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-3 text-lg font-semibold">
                How do I contact customer support?
              </h3>
              <p className="text-gray-600">
                If you have any questions or need assistance, you can reach our
                customer support team through our{" "}
                <Link href="/contact" className="text-blue-600 hover:underline">
                  Contact Page
                </Link>
                , by email at support@haircutnearme.net, or by phone at (555)
                123-4567 during business hours.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-blue-50 p-8 text-center">
          <h2 className="mb-4 text-xl font-bold">Still have questions?</h2>
          <p className="mb-6 text-gray-600">
            We're here to help! Contact our support team and we'll get back to
            you as soon as possible.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
