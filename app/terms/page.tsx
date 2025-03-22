import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Terms of Service</h1>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
          Last updated: June 1, 2024
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="prose prose-blue max-w-none">
          <p>
            Welcome to HaircutNearMe.net. These Terms of Service govern your use
            of our website and services. By accessing or using
            HaircutNearMe.net, you agree to be bound by these terms. Please read
            them carefully.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our services, you acknowledge that you have
            read, understood, and agree to be bound by these Terms of Service.
            If you do not agree to all of these terms, you may not use our
            services.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            HaircutNearMe.net is an online platform that connects clients with
            hair salons and stylists. We provide information about salons,
            stylists, and their services, and facilitate booking appointments.
            We do not provide hair services ourselves.
          </p>

          <h2>3. User Accounts</h2>
          <p>
            Some features of our service require you to create an account. You
            are responsible for maintaining the confidentiality of your account
            information, including your password, and for all activity that
            occurs under your account. You agree to notify us immediately of any
            unauthorized use of your account.
          </p>

          <h2>4. User Conduct</h2>
          <p>You agree not to use our services to:</p>
          <ul>
            <li>Violate any laws or regulations</li>
            <li>Impersonate any person or entity</li>
            <li>Harass, abuse, or harm another person</li>
            <li>Send spam or other unsolicited messages</li>
            <li>Interfere with or disrupt our services</li>
            <li>
              Collect or store personal data about other users without their
              permission
            </li>
          </ul>

          <h2>5. Content</h2>
          <p>
            Our services may allow you to post, upload, or provide content, such
            as reviews, comments, and photos. You retain ownership of any
            content you submit, but grant us a worldwide, royalty-free license
            to use, modify, publicly display, and distribute such content in
            connection with our services.
          </p>
          <p>
            You are solely responsible for your content and the consequences of
            sharing it. You represent and warrant that:
          </p>
          <ul>
            <li>You own or have the necessary rights to share your content</li>
            <li>Your content does not violate the rights of any third party</li>
            <li>Your content is accurate and not misleading</li>
          </ul>

          <h2>6. Salon and Stylist Listings</h2>
          <p>
            Salon and stylist listings on our platform are created and
            maintained by the respective businesses or individuals. While we
            strive to ensure the accuracy of information on our platform, we
            cannot guarantee that all information is complete, accurate, or
            up-to-date. You should verify important information directly with
            the salon or stylist before making a booking.
          </p>

          <h2>7. Booking and Appointments</h2>
          <p>
            When you book an appointment through our platform, you are entering
            into an agreement directly with the salon or stylist, not with
            HaircutNearMe.net. We are not responsible for the quality, safety,
            legality, or any other aspect of the services provided by salons or
            stylists listed on our platform.
          </p>
          <p>
            Cancellation policies vary by salon and stylist. You are responsible
            for adhering to the cancellation policy of the salon or stylist you
            book with.
          </p>

          <h2>8. Fees and Payments</h2>
          <p>
            Use of our platform is free for clients. Salon and stylist
            subscriptions may be subject to fees as described on our pricing
            page. All fees are exclusive of any applicable taxes.
          </p>
          <p>
            Payments for salon services are made directly to the salon or
            stylist according to their payment policies, not through our
            platform.
          </p>

          <h2>9. Intellectual Property</h2>
          <p>
            Our services and content, including logos, trademarks, software, and
            text, are protected by intellectual property rights owned or
            licensed by HaircutNearMe.net. You may not use, copy, reproduce,
            distribute, or create derivative works from our content without our
            express permission.
          </p>

          <h2>10. Disclaimers</h2>
          <p>
            Our services are provided "as is" without any warranties, express or
            implied. We do not guarantee that our services will be
            uninterrupted, secure, or error-free. We disclaim all warranties
            regarding the accuracy, reliability, and completeness of any content
            on our platform.
          </p>

          <h2>11. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, HaircutNearMe.net shall not
            be liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly, or any loss of data, use, goodwill,
            or other intangible losses resulting from:
          </p>
          <ul>
            <li>Your use of or inability to use our services</li>
            <li>Any conduct or content of any third party on our services</li>
            <li>
              Any services obtained from salons or stylists through our platform
            </li>
            <li>Unauthorized access, use, or alteration of your content</li>
          </ul>

          <h2>12. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless HaircutNearMe.net
            and its officers, directors, employees, agents, and affiliates from
            and against any claims, liabilities, damages, losses, and expenses,
            including reasonable attorneys' fees, arising out of or in any way
            connected with your access to or use of our services, your content,
            or your violation of these terms.
          </p>

          <h2>13. Termination</h2>
          <p>
            We may terminate or suspend your access to our services, at our sole
            discretion, without notice, for conduct that we believe violates
            these terms or is harmful to other users, us, or third parties, or
            for any other reason.
          </p>

          <h2>14. Changes to Terms</h2>
          <p>
            We may modify these terms at any time. When we make changes, we will
            post the updated terms on our website and update the "Last updated"
            date. Your continued use of our services after the changes have been
            posted constitutes your acceptance of the new terms.
          </p>

          <h2>15. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with
            the laws of the state of [State], without regard to its conflict of
            law provisions.
          </p>

          <h2>16. Contact Information</h2>
          <p>
            If you have any questions about these terms, please contact us at:
          </p>
          <p>
            HaircutNearMe.net
            <br />
            Email: legal@haircutnearme.net
            <br />
            Address: 123 Styling Street, New York, NY 10001
          </p>

          <div className="mt-8 rounded-lg bg-blue-50 p-6">
            <h3 className="text-lg font-semibold">Questions or Concerns?</h3>
            <p className="mb-4">
              If you have any questions about our Terms of Service, please
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
