import Link from "next/link";
import Image from "next/image";

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: December 1, 2025
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using iAyos ("Platform"), you agree to be bound
                by these Terms of Service ("Terms"). If you do not agree to
                these Terms, you may not use our Platform. These Terms
                constitute a legally binding agreement between you and iAyos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Description of Service
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                iAyos is a marketplace platform that connects clients seeking
                home and maintenance services with verified workers and service
                providers. We facilitate the discovery, booking, and payment for
                services but are not a party to the actual service agreements
                between clients and workers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. User Accounts
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                3.1 Registration
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To use iAyos, you must create an account and complete KYC
                verification. You must be at least 18 years old to register. You
                agree to provide accurate, current, and complete information.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                3.2 Account Security
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for maintaining the security of your account
                credentials. You must notify us immediately of any unauthorized
                access. iAyos is not liable for losses resulting from
                unauthorized account use.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                3.3 Account Types
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Users may register as Clients, Workers, or Agencies. Users may
                maintain both Client and Worker profiles on a single account.
                Agencies must complete additional business verification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. User Conduct
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree NOT to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>Provide false or misleading information</li>
                <li>Impersonate another person or entity</li>
                <li>Harass, threaten, or abuse other users</li>
                <li>Post discriminatory or offensive content</li>
                <li>Circumvent platform payments or fees</li>
                <li>Use the Platform for illegal activities</li>
                <li>Spam or send unsolicited communications</li>
                <li>Attempt to access other users' accounts or private data</li>
                <li>Interfere with the Platform's operation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Job Postings and Applications
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                5.1 For Clients
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Job postings must accurately describe the work required</li>
                <li>
                  Budget ranges should reflect fair market rates (DOLE
                  guidelines apply)
                </li>
                <li>
                  Clients must approve job completion to release final payment
                </li>
                <li>
                  Disputes must be filed within 48 hours of job completion
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                5.2 For Workers
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  Profiles must accurately represent skills and qualifications
                </li>
                <li>Workers must complete jobs as agreed upon</li>
                <li>Photo proof of completion may be required</li>
                <li>
                  Workers are independent contractors, not iAyos employees
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Payments and Fees
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                6.1 Escrow System
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                iAyos uses a 50/50 escrow payment system:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>50% downpayment is collected when a worker is accepted</li>
                <li>Funds are held securely by iAyos until job completion</li>
                <li>
                  Remaining 50% is paid upon client approval of completed work
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                6.2 Platform Fees
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                iAyos charges a 10% platform fee on completed transactions. This
                fee is deducted from the worker's earnings and covers payment
                processing and platform maintenance.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                6.3 Payment Methods
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Accepted payment methods include Platform Wallet, GCash, Maya,
                Credit/Debit Cards, Bank Transfer, and verified Cash payments.
                Payments processed through Xendit are subject to their terms.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                6.4 Refunds
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Refund eligibility depends on the job status and circumstances.
                Cancellations before work begins may be eligible for full or
                partial refunds. Disputes are reviewed on a case-by-case basis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Reviews and Ratings
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Users may leave reviews and ratings after completed
                transactions. Reviews must be honest and based on actual
                experience. iAyos reserves the right to remove reviews that
                violate our guidelines, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>Fraudulent or fake reviews</li>
                <li>Reviews containing offensive content</li>
                <li>Reviews unrelated to the transaction</li>
                <li>Reviews that include personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Dispute Resolution
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In case of disputes between users:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>
                  Users should first attempt to resolve issues directly through
                  chat
                </li>
                <li>If unresolved, file a dispute through the app</li>
                <li>
                  iAyos will review evidence from both parties within 48-72
                  hours
                </li>
                <li>Our decision on disputes is final and binding</li>
                <li>
                  Escrow funds will be released based on dispute resolution
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The iAyos name, logo, and Platform design are our intellectual
                property. Users retain ownership of content they post but grant
                iAyos a license to display and use such content for Platform
                operations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                10. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                iAyos is a platform connecting users and is not responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>Quality or outcome of services provided by workers</li>
                <li>Actions or conduct of users on or off the Platform</li>
                <li>Damages or injuries arising from services booked</li>
                <li>
                  Loss of data or service interruptions beyond our control
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To the maximum extent permitted by law, iAyos's liability is
                limited to the amount of fees paid to us in the past 12 months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                11. Account Termination
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may suspend or terminate accounts for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>Violation of these Terms</li>
                <li>Fraudulent activity</li>
                <li>Repeated negative reviews or complaints</li>
                <li>Extended inactivity</li>
                <li>At our discretion with reasonable notice</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Upon termination, pending escrow funds will be handled according
                to our dispute resolution process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                12. Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may modify these Terms at any time. Material changes will be
                notified via email or in-app notification. Continued use after
                changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                13. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of the Republic of the
                Philippines. Any disputes shall be resolved in the courts of
                Zamboanga City.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                14. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms, please contact us:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 mt-4">
                <li>
                  <strong>Email:</strong> legal@iayos.com
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
            &copy; 2025 Devante. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition">
              Privacy
            </Link>
            <Link href="/terms" className="text-foreground font-medium">
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
