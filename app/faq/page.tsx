import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const faqs = [
  {
    category: "Account",
    questions: [
      {
        q: "How do I create an account?",
        a: "Download the iAyos app or visit our website, tap 'Sign Up', and follow the registration process. You'll need to provide your name, email, phone number, and create a password.",
      },
      {
        q: "How do I verify my account?",
        a: "After registration, you'll need to complete KYC (Know Your Customer) verification. Upload a valid government ID (Driver's License, Passport, National ID, UMID, PhilHealth, etc.) and take a selfie for verification. Our team reviews submissions within 24 hours.",
      },
      {
        q: "Can I have both a worker and client profile?",
        a: "Yes! iAyos supports dual profiles. You can switch between hiring workers for your needs and offering your services to others, all from the same account.",
      },
      {
        q: "How do I reset my password?",
        a: "On the login screen, tap 'Forgot Password', enter your registered email, and we'll send you a password reset link.",
      },
      {
        q: "How do I delete my account?",
        a: "Go to Settings > Account > Delete Account. Note that this action is permanent and will remove all your data, reviews, and transaction history.",
      },
    ],
  },
  {
    category: "Jobs & Bookings",
    questions: [
      {
        q: "How do I post a job?",
        a: "As a client, go to 'Post Job', select the service category, describe the work needed, set your budget range, and choose your preferred schedule. Workers in your area will be able to see and apply to your job.",
      },
      {
        q: "How do I apply for jobs as a worker?",
        a: "Browse available jobs in your area, view the job details and requirements, then tap 'Apply'. You can include a message to the client explaining why you're the right fit.",
      },
      {
        q: "How does the job completion process work?",
        a: "Once work is finished, the worker marks the job as complete with photo proof. The client then reviews and approves the completion, triggering the final payment release.",
      },
      {
        q: "What if there's a dispute?",
        a: "If you have issues with a job, you can file a dispute through the app. Our support team will review the case and mediate between both parties to reach a fair resolution.",
      },
      {
        q: "Can I cancel a booked job?",
        a: "Jobs can be cancelled before the worker starts. If a downpayment was made, refund policies apply based on the cancellation timing. Check our Terms of Service for details.",
      },
    ],
  },
  {
    category: "Payments",
    questions: [
      {
        q: "How does the escrow payment system work?",
        a: "iAyos uses a 50/50 escrow system: 50% is paid as a downpayment when you accept a worker, held securely by the platform. The remaining 50% is paid upon job completion. This protects both clients and workers.",
      },
      {
        q: "What payment methods are accepted?",
        a: "We accept Platform Wallet (top up via GCash/Maya), GCash direct payment, Maya, Credit/Debit Cards, Bank Transfer, and Cash (with photo verification).",
      },
      {
        q: "What are the platform fees?",
        a: "iAyos charges a 10% platform fee on completed transactions. This fee covers payment processing, platform maintenance, and customer support.",
      },
      {
        q: "How do workers withdraw their earnings?",
        a: "Workers can withdraw earnings to their GCash account directly from the app. Go to Wallet > Withdraw, enter the amount, and funds are typically transferred within 1-2 business days.",
      },
      {
        q: "What happens if a client doesn't pay?",
        a: "With our escrow system, payment is secured before work begins. The downpayment is held by iAyos and released to the worker upon job completion approval.",
      },
      {
        q: "Can I pay with cash?",
        a: "Yes, cash payments are supported. The worker must upload photo proof of cash receipt, which is then verified by our admin team to complete the transaction.",
      },
    ],
  },
  {
    category: "Trust & Safety",
    questions: [
      {
        q: "How are workers verified?",
        a: "All workers undergo KYC verification including government ID verification, selfie matching, and optional background checks (Police/NBI Clearance). Verified workers display a blue checkmark badge.",
      },
      {
        q: "What does the blue checkmark mean?",
        a: "The blue checkmark indicates a KYC-verified user whose identity has been confirmed through our verification process. This adds an extra layer of trust for transactions.",
      },
      {
        q: "How do I report a problem or safety concern?",
        a: "Use the 'Report' button on any user profile or job listing. You can also contact support directly through Settings > Help & Support > Report Issue.",
      },
      {
        q: "Is my personal data secure?",
        a: "Yes, we use bank-level encryption to protect your data. Your personal information is never shared with third parties. See our Privacy Policy for complete details.",
      },
      {
        q: "What if I suspect a scam?",
        a: "Never share personal financial information outside the app. Report suspicious activity immediately. Our team actively monitors and removes fraudulent accounts.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        q: "The app isn't working properly. What should I do?",
        a: "Try closing and reopening the app, check your internet connection, or reinstall the app. If issues persist, contact support with screenshots of the problem.",
      },
      {
        q: "Why am I not receiving notifications?",
        a: "Check that notifications are enabled in your phone settings and in the iAyos app settings. Make sure you have a stable internet connection.",
      },
      {
        q: "How do I update the app?",
        a: "Visit the App Store (iOS) or Google Play Store (Android) and check for updates. We recommend keeping auto-updates enabled for the latest features and security patches.",
      },
    ],
  },
];

export default function FAQPage() {
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
                href="/#services"
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                Services
              </Link>
              <Link
                href="/faq"
                className="text-sm text-foreground font-medium transition"
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

      {/* Hero */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to common questions about using iAyos
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          {faqs.map((category, catIdx) => (
            <div key={catIdx}>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIdx) => (
                  <details
                    key={faqIdx}
                    className="group rounded-xl border border-border bg-card p-4"
                  >
                    <summary className="flex cursor-pointer items-center justify-between font-medium text-foreground">
                      {faq.q}
                      <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-4 text-muted-foreground">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Still have questions?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our support team is here to help you
          </p>
          <a
            href="mailto:support@iayos.com"
            className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition"
          >
            Contact Support
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Devante. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition">
              Terms
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
