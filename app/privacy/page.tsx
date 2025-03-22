import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
          Last updated: June 1, 2024
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="prose prose-blue max-w-none">
          <p>
            At HaircutNearMe.net, we respect your privacy and are committed to
            protecting your personal data. This Privacy Policy explains how we
            collect, use, and safeguard your information when you use our
            website and services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect several types of information from and about users of our
            website, including:
          </p>
          <ul>
            <li>
              <strong>Personal Identifiers:</strong> Name, email address, phone
              number, and postal address.
            </li>
            <li>
              <strong>Account Information:</strong> Username, password, and
              account preferences.
            </li>
            <li>
              <strong>Booking Information:</strong> Appointment details, service
              preferences, and booking history.
            </li>
            <li>
              <strong>Business Information:</strong> For salon and stylist
              users, we collect business details, service offerings, pricing,
              and availability.
            </li>
            <li>
              <strong>Payment Information:</strong> For business subscriptions,
              we collect payment details, but we do not store complete credit
              card numbers.
            </li>
            <li>
              <strong>User Content:</strong> Reviews, ratings, comments, and
              photos that you post on our platform.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, device
              information, operating system, and usage patterns.
            </li>
          </ul>

          <h2>2. How We Collect Your Information</h2>
          <p>We collect information through:</p>
          <ul>
            <li>
              <strong>Direct Interactions:</strong> When you create an account,
              make a booking, leave a review, or contact us.
            </li>
            <li>
              <strong>Automated Technologies:</strong> We use cookies and
              similar technologies to collect data about your browsing actions
              and patterns.
            </li>
            <li>
              <strong>Third Parties:</strong> We may receive information about
              you from third-party service providers, such as payment processors
              or social media platforms if you use them to log in.
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your personal information for the following purposes:</p>
          <ul>
            <li>To provide and improve our services</li>
            <li>To process and manage bookings</li>
            <li>
              To facilitate communication between clients and salons/stylists
            </li>
            <li>
              To personalize your experience and recommend relevant services
            </li>
            <li>To process payments and subscriptions</li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To send you service-related notifications and updates</li>
            <li>To send marketing communications (with your consent)</li>
            <li>To monitor and analyze usage patterns and trends</li>
            <li>To protect our services and prevent fraud</li>
          </ul>

          <h2>4. Sharing of Your Information</h2>
          <p>We may share your personal information with:</p>
          <ul>
            <li>
              <strong>Salons and Stylists:</strong> When you book an
              appointment, we share your booking details with the relevant salon
              or stylist.
            </li>
            <li>
              <strong>Service Providers:</strong> We engage third-party vendors
              who provide services on our behalf, such as hosting, payment
              processing, and customer support.
            </li>
            <li>
              <strong>Business Partners:</strong> We may share non-personal,
              aggregated information with our business partners for analytics
              and service improvement.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your
              information if required by law or if we believe it is necessary to
              protect our rights or the safety of others.
            </li>
          </ul>

          <h2>5. Your Privacy Choices</h2>
          <p>You have several choices regarding your personal information:</p>
          <ul>
            <li>
              <strong>Account Information:</strong> You can review and update
              your account information through your account settings.
            </li>
            <li>
              <strong>Marketing Communications:</strong> You can opt out of
              receiving marketing emails by clicking the "unsubscribe" link in
              any marketing email or updating your communication preferences.
            </li>
            <li>
              <strong>Cookies:</strong> Most browsers allow you to refuse or
              accept cookies. Note that blocking cookies may impact your
              experience on our website.
            </li>
            <li>
              <strong>Data Access and Deletion:</strong> You may request access
              to, correction of, or deletion of your personal information.
              Please contact us to make such requests.
            </li>
          </ul>

          <h2>6. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. However, no method of internet transmission or
            electronic storage is completely secure, and we cannot guarantee
            absolute security.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes for which we collected it, including for the
            purposes of satisfying any legal, accounting, or reporting
            requirements.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            Our services are not intended for children under 16 years of age,
            and we do not knowingly collect personal information from children
            under 16. If you are under 16, please do not provide any personal
            information on our website.
          </p>

          <h2>9. International Data Transfers</h2>
          <p>
            Your information may be transferred to, and stored in, countries
            outside of your country of residence. We ensure that any such
            transfers comply with applicable data protection laws and that your
            information remains protected.
          </p>

          <h2>10. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or services.
            We are not responsible for the privacy practices or content of these
            third parties. We encourage you to read the privacy policies of any
            third-party websites you visit.
          </p>

          <h2>11. Cookie Policy</h2>
          <p>
            We use cookies and similar tracking technologies to track activity
            on our website and store certain information. Cookies are files with
            a small amount of data that may include an anonymous unique
            identifier. You can instruct your browser to refuse all cookies or
            to indicate when a cookie is being sent.
          </p>

          <h2>12. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last updated" date. You are advised to review this
            Privacy Policy periodically for any changes.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p>
            HaircutNearMe.net
            <br />
            Email: privacy@haircutnearme.net
            <br />
            Address: 123 Styling Street, New York, NY 10001
          </p>

          <div className="mt-8 rounded-lg bg-blue-50 p-6">
            <h3 className="text-lg font-semibold">Privacy Concerns?</h3>
            <p className="mb-4">
              If you have any questions or concerns about your privacy, please
              contact our support team.
            </p>
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
