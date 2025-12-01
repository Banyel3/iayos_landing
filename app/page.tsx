import {
  CheckCircle2,
  Shield,
  Zap,
  Users,
  MapPin,
  Star,
  MessageSquare,
  Navigation,
  Building2,
  Briefcase,
  Wallet,
  Clock,
  Camera,
  Smartphone,
  Mail,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary"></div>
              <span className="text-xl font-bold text-foreground">iAyos</span>
            </div>
            <div className="hidden gap-8 md:flex">
              <a
                href="#features"
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                How It Works
              </a>
              <a
                href="#services"
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                Services
              </a>
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

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-2">
                <span className="text-sm font-medium text-primary">
                  Trusted by thousands in Zamboanga Peninsula
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Connect with Verified Local Workers
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                <span className="font-semibold text-foreground">iAyos</span>{" "}
                (from Filipino "Ayos" - to fix, to repair) makes it simple to
                find, book, and pay trusted professionals for home and
                maintenance services. Protected by our escrow payment system.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div>
                  <p className="text-2xl font-bold text-foreground">5K+</p>
                  <p className="text-sm text-muted-foreground">
                    Verified Workers
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">10K+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">4.8★</p>
                  <p className="text-sm text-muted-foreground">
                    Average Rating
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">37+</p>
                  <p className="text-sm text-muted-foreground">App Screens</p>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                  <Smartphone className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Mobile App Coming Soon
                  </span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <Users className="mx-auto h-24 w-24 text-primary/40 mb-4" />
                <p className="text-muted-foreground">Connecting communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="border-t border-border bg-muted/30 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Why Choose iAyos?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need for safe, transparent service bookings
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "KYC Verified",
                description:
                  "All workers and clients are verified through our KYC system with 10+ supported document types for maximum trust and safety.",
              },
              {
                icon: Wallet,
                title: "Escrow Payment Protection",
                description:
                  "50/50 split payment system - 50% downpayment when job is accepted, 50% upon completion. Both parties protected.",
              },
              {
                icon: MessageSquare,
                title: "Real-Time Chat",
                description:
                  "WebSocket-powered instant messaging with typing indicators, image sharing, and full conversation history.",
              },
              {
                icon: Navigation,
                title: "GPS Discovery",
                description:
                  "Find verified workers near you with location-based search. Connect with professionals in your area.",
              },
              {
                icon: Star,
                title: "Two-Way Ratings",
                description:
                  "Both clients and workers rate each other. Build reputation and find trusted professionals.",
              },
              {
                icon: Briefcase,
                title: "Worker Portfolios",
                description:
                  "Workers showcase certifications, skills, hourly rates, and up to 10 portfolio images.",
              },
              {
                icon: Building2,
                title: "Agency Support",
                description:
                  "Service companies can register, manage employees, and accept direct job invitations.",
              },
              {
                icon: Camera,
                title: "Cash Payment Verification",
                description:
                  "Choose cash payment with photo proof upload and admin verification for flexibility.",
              },
              {
                icon: MapPin,
                title: "Local Focus",
                description:
                  "Serving the Zamboanga Peninsula with workers who know your community and DOLE-compliant rates.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition"
              >
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              How It Works
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4 mb-16">
            {[
              {
                step: "1",
                title: "Browse",
                desc: "Find verified workers in your area",
              },
              {
                step: "2",
                title: "Connect",
                desc: "View profiles and negotiate rates",
              },
              {
                step: "3",
                title: "Book",
                desc: "Confirm your service appointment",
              },
              {
                step: "4",
                title: "Pay & Rate",
                desc: "Secure payment and leave feedback",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Video Showcases */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl text-balance">
              See It In Action
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Watch how easy it is to use iAyos
            </p>
          </div>
          <div className="flex gap-12 justify-center items-start overflow-x-auto pb-4">
            {[
              {
                title: "Client Experience",
                video: "/videos/Client Side Pov + Job Request.mp4",
              },
              {
                title: "Worker Experience",
                video: "/videos/Worker Side Pov.mp4",
              },
              {
                title: "Payment Flow",
                video: "/videos/Payment Flow (slightly modified).mp4",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-[400px] w-[225px] bg-muted">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-3 text-center">
                  <h4 className="font-semibold text-foreground text-sm">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section
        id="users"
        className="border-t border-border bg-muted/30 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Built for Everyone
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you need services or provide them, iAyos has you covered
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "For Clients",
                subtitle: "Homeowners & Businesses",
                features: [
                  "Create job postings with budget & requirements",
                  "Browse verified worker profiles",
                  "Review applications and select workers",
                  "Pay securely with escrow protection",
                  "Rate workers and view job history",
                ],
              },
              {
                icon: Briefcase,
                title: "For Workers",
                subtitle: "Freelance Tradespeople",
                features: [
                  "Create professional profiles with portfolio",
                  "Set your skills, rates & certifications",
                  "Browse and apply to job listings",
                  "Track active jobs and earnings",
                  "Withdraw earnings to GCash",
                ],
              },
              {
                icon: Building2,
                title: "For Agencies",
                subtitle: "Service Companies (B2B)",
                features: [
                  "Register as a verified business",
                  "Manage employees and assign jobs",
                  "Track employee performance & ratings",
                  "Accept direct job invitations",
                  "Employee of the Month recognition",
                ],
              },
            ].map((userType, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition"
              >
                <userType.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {userType.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {userType.subtitle}
                </p>
                <ul className="space-y-2">
                  {userType.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Services & DOLE-Compliant Rates
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Professional services with transparent, fair pricing based on
              Department of Labor guidelines
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Plumbing", rate: "₱150", level: "Intermediate" },
              { name: "Electrical", rate: "₱175", level: "Intermediate" },
              { name: "Carpentry", rate: "₱140", level: "Intermediate" },
              { name: "Home Cleaning", rate: "₱85", level: "Entry" },
              { name: "HVAC", rate: "₱200", level: "Expert" },
              { name: "Painting", rate: "₱120", level: "Intermediate" },
              { name: "Masonry", rate: "₱130", level: "Intermediate" },
              { name: "Welding", rate: "₱180", level: "Expert" },
            ].map((service, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-4 hover:shadow-lg transition"
              >
                <p className="font-semibold text-foreground">{service.name}</p>
                <p className="text-lg font-bold text-primary">
                  {service.rate}
                  <span className="text-sm font-normal text-muted-foreground">
                    /hr min
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {service.level} Level
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Security Section */}
      <section className="border-t border-border bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Secure Payment System
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Protected transactions powered by Xendit with multiple payment
              options
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Wallet,
                title: "Escrow Protection",
                description:
                  "50% downpayment held securely until job completion",
              },
              {
                icon: Smartphone,
                title: "GCash Integration",
                description:
                  "Pay and withdraw directly via GCash through Xendit",
              },
              {
                icon: Camera,
                title: "Cash Option",
                description:
                  "Photo proof upload with admin verification for cash payments",
              },
              {
                icon: Clock,
                title: "10% Platform Fee",
                description:
                  "Transparent platform fee on completed transactions",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-6 w-6 rounded-lg bg-primary"></div>
                <span className="font-bold text-foreground">iAyos</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Connecting communities with trusted professionals.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#features"
                    className="hover:text-foreground transition"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="hover:text-foreground transition"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-foreground transition"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-foreground transition"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business"
                    className="hover:text-foreground transition"
                  >
                    For Business
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:support@iayos.com"
                    className="hover:text-foreground transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-foreground transition"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-foreground transition"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                &copy; 2025 Devante. All rights reserved. Serving Zamboanga
                Peninsula.
              </p>
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">"Ayos"</span> - Filipino for "to
                  fix, to repair"
                </div>
                <div className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  <Smartphone className="h-3 w-3" />
                  <span>App Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
