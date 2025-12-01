import {
  Building2,
  Users,
  BarChart3,
  CheckCircle2,
  Shield,
  Award,
  Send,
  Clock,
  Wallet,
  Star,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary"></div>
              <span className="text-xl font-bold text-foreground">iAyos</span>
            </Link>
            <div className="hidden gap-8 md:flex">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                Home
              </Link>
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
                className="text-sm text-foreground font-medium transition"
              >
                For Business
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-2">
                <span className="text-sm font-medium text-primary">
                  iAyos for Business
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Scale Your Service Business with iAyos
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Register your agency, manage your team, and connect with clients
                across Zamboanga Peninsula. Our B2B platform helps service
                companies grow with powerful tools for employee management, job
                tracking, and performance analytics.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="mailto:business@iayos.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition"
                >
                  <Send className="h-4 w-4" />
                  Contact Sales
                </a>
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium text-foreground hover:bg-muted transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <Building2 className="mx-auto h-24 w-24 text-primary/60 mb-4" />
                <p className="text-lg font-medium text-foreground">
                  Agency Dashboard
                </p>
                <p className="text-muted-foreground">Manage your entire team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Why Agencies Choose iAyos
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to run and grow your service business
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Employee Management",
                description:
                  "Add, manage, and track all your workers from a single dashboard. Assign jobs and monitor availability in real-time.",
              },
              {
                icon: Send,
                title: "Direct Job Invitations",
                description:
                  "Receive job requests directly from clients who prefer working with established agencies. No bidding required.",
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description:
                  "Track employee ratings, completed jobs, earnings, and customer satisfaction with detailed analytics.",
              },
              {
                icon: Shield,
                title: "Agency Verification",
                description:
                  "Get your business verified with our agency KYC process. Display trust badges that attract more clients.",
              },
              {
                icon: Award,
                title: "Employee Recognition",
                description:
                  "Motivate your team with Employee of the Month recognition. Top performers get featured badges.",
              },
              {
                icon: Wallet,
                title: "Centralized Payments",
                description:
                  "Manage all earnings in one place. Track employee payouts and agency revenue with ease.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition"
              >
                <benefit.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works for Agencies */}
      <section className="border-t border-border bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              How It Works for Agencies
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get started in just a few steps
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Register Agency",
                desc: "Create your agency account and complete business verification (KYC)",
              },
              {
                step: "2",
                title: "Add Employees",
                desc: "Invite workers to join your agency and manage their profiles",
              },
              {
                step: "3",
                title: "Receive Jobs",
                desc: "Get direct job invitations from clients or let employees apply",
              },
              {
                step: "4",
                title: "Track & Grow",
                desc: "Monitor performance, manage earnings, and scale your business",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Dashboard Features */}
      <section className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Powerful Agency Dashboard
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to manage your service business
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Users,
                title: "Employee Directory",
                features: [
                  "View all employees with their status",
                  "Track verification and KYC status",
                  "Manage employee availability",
                  "View individual performance metrics",
                ],
              },
              {
                icon: Briefcase,
                title: "Job Management",
                features: [
                  "View all agency jobs in one place",
                  "Assign jobs to specific employees",
                  "Track job progress and completion",
                  "Handle client communications",
                ],
              },
              {
                icon: TrendingUp,
                title: "Analytics & Reports",
                features: [
                  "Revenue tracking and trends",
                  "Employee performance rankings",
                  "Customer satisfaction scores",
                  "Job completion rates",
                ],
              },
              {
                icon: Star,
                title: "Recognition System",
                features: [
                  "Employee of the Month selection",
                  "Performance-based badges",
                  "Top performer highlights",
                  "Team motivation tools",
                ],
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {feature.features.map((item, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-border bg-primary px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              { value: "100+", label: "Registered Agencies" },
              { value: "500+", label: "Agency Employees" },
              { value: "₱2M+", label: "Agency Earnings" },
              { value: "4.9★", label: "Agency Rating" },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl font-bold text-primary-foreground">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Same low fees as individual workers
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="rounded-2xl border-2 border-primary bg-card p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Agency Plan
              </h3>
              <p className="text-muted-foreground mb-6">
                Everything you need to run your agency
              </p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-foreground">10%</span>
                <span className="text-muted-foreground"> platform fee</span>
              </div>
              <ul className="space-y-3 text-left mb-8">
                {[
                  "Unlimited employees",
                  "Agency verification badge",
                  "Direct job invitations",
                  "Performance analytics",
                  "Employee management",
                  "Centralized payments",
                  "Priority support",
                  "Employee of the Month feature",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:business@iayos.com"
                className="block w-full rounded-lg bg-primary py-3 font-medium text-primary-foreground hover:bg-primary/90 transition"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Ready to Grow Your Service Business?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join hundreds of agencies already using iAyos to manage their teams
            and connect with clients.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="mailto:business@iayos.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-medium text-primary-foreground hover:bg-primary/90 transition"
            >
              <Send className="h-5 w-5" />
              Get Started Today
            </a>
            <a
              href="tel:+639123456789"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 font-medium text-foreground hover:bg-muted transition"
            >
              <Clock className="h-5 w-5" />
              Schedule a Demo
            </a>
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
