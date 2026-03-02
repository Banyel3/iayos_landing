import Link from "next/link";
import Image from "next/image";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/iAyos logo.png"
                alt="iAyos"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-foreground">iAyos</span>
            </Link>
            <div className="hidden gap-8 md:flex">
              <Link
                href="/#features"
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                Features
              </Link>
              <Link
                href="/faq"
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                FAQ
              </Link>
              <Link
                href="/business"
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                For Business
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: December 1, 2025
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                iAyos ("we," "our," or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our mobile
                application and website (collectively, the "Platform").
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By using iAyos, you agree to the collection and use of
                information in accordance with this policy. If you do not agree
                with our policies, please do not use our Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                2.1 Personal Information
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                When you register for an account, we collect:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Profile photo</li>
                <li>Physical address (for service location purposes)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                2.2 KYC Verification Data
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                For identity verification, we collect:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>
                  Government-issued ID (Driver's License, Passport, National ID,
                  UMID, PhilHealth, etc.)
                </li>
                <li>Selfie photo for identity matching</li>
                <li>
                  Optional: Police/NBI clearance for enhanced worker
                  verification
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                2.3 Transaction Data
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We collect information about your transactions including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>Job postings and applications</li>
                <li>Payment history and wallet transactions</li>
                <li>Reviews and ratings given/received</li>
                <li>Chat messages between users</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                2.4 Location Data
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With your permission, we collect GPS location data to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>Show nearby workers and jobs</li>
                <li>Enable location-based search features</li>
                <li>Verify service locations</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                2.5 Device Information
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We automatically collect device information including device
                type, operating system, unique device identifiers, and mobile
                network information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>Create and manage your account</li>
                <li>Verify your identity through KYC process</li>
                <li>Connect clients with verified workers</li>
                <li>Process payments and transactions securely</li>
                <li>Enable real-time communication between users</li>
                <li>Provide customer support</li>
                <li>Send notifications about jobs, payments, and updates</li>
                <li>Improve our Platform and user experience</li>
                <li>Detect and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Information Sharing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share your
                information with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>
                  <strong>Other Users:</strong> Your public profile, ratings,
                  and reviews are visible to other users to facilitate trust and
                  transactions.
                </li>
                <li>
                  <strong>Payment Processors:</strong> We share necessary
                  payment information with PayMongo to process transactions.
                </li>
                <li>
                  <strong>Service Providers:</strong> Third-party services that
                  help us operate the Platform (hosting, analytics, customer
                  support).
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights and users' safety.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement bank-level security measures to protect your data:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>SSL/TLS encryption for all data transmission</li>
                <li>Encrypted storage for sensitive information</li>
                <li>Regular security audits and monitoring</li>
                <li>Secure authentication with password hashing</li>
                <li>Access controls and employee training</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of marketing communications</li>
                <li>Control location sharing settings</li>
                <li>Download a copy of your data</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, contact us at privacy@iayos.com or
                through the app settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Data Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as your account
                is active or as needed to provide services. Transaction records
                are kept for 7 years for legal and accounting purposes. You may
                request account deletion at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Cookies and Tracking
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies and similar technologies to enhance
                your experience, analyze usage, and provide personalized
                content. You can manage cookie preferences through your browser
                settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                iAyos is not intended for users under 18 years of age. We do not
                knowingly collect information from children. If we discover that
                a child has provided us with personal information, we will
                delete it immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the "Last updated" date. Continued use of the
                Platform after changes constitutes acceptance of the updated
                policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                11. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact
                us:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 mt-4">
                <li>
                  <strong>Email:</strong> privacy@iayos.com
                </li>
                <li>
                  <strong>Address:</strong> Zamboanga Peninsula, Philippines
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Devante. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="text-foreground font-medium">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition">
              Terms
            </Link>
            <Link href="/faq" className="hover:text-foreground transition">
              FAQ
            </Link>
            <Link href="/" className="hover:text-foreground transition">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
