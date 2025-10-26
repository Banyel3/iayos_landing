import { CheckCircle2, Shield, Zap, Users, MapPin, Star } from "lucide-react"

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
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
                Features
              </a>
              <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition">
                How It Works
              </a>
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition">
                Services
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-accent/10 px-4 py-2">
                <span className="text-sm font-medium text-accent">Trusted by thousands in Zamboanga Peninsula</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Connect with Verified Local Workers
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                iAyos makes it simple to find, book, and pay trusted professionals for home and maintenance services.
                From plumbing to electrical work, we've got you covered.
              </p>
              <div className="flex gap-6 pt-4">
                <div>
                  <p className="text-2xl font-bold text-foreground">5K+</p>
                  <p className="text-sm text-muted-foreground">Verified Workers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">10K+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">4.8★</p>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
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
      <section id="features" className="border-t border-border bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Why Choose iAyos?</h2>
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
                  "All workers and clients are verified through our KYC system for maximum trust and safety.",
              },
              {
                icon: Zap,
                title: "Easy Booking",
                description:
                  "Browse profiles, view rates, and book services in minutes. Negotiate pricing directly with workers.",
              },
              {
                icon: CheckCircle2,
                title: "Secure Payments",
                description: "Pay securely through Xendit or choose cash payment. Your transactions are protected.",
              },
              {
                icon: Star,
                title: "Ratings & Reviews",
                description:
                  "Both clients and workers rate each other. Build reputation and find trusted professionals.",
              },
              {
                icon: MapPin,
                title: "Local Focus",
                description: "Serving the Zamboanga Peninsula with workers who know your community.",
              },
              {
                icon: Users,
                title: "For Everyone",
                description: "Whether you're a homeowner, business, or skilled worker, iAyos has a place for you.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition">
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">How It Works</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: "1", title: "Browse", desc: "Find verified workers in your area" },
              { step: "2", title: "Connect", desc: "View profiles and negotiate rates" },
              { step: "3", title: "Book", desc: "Confirm your service appointment" },
              { step: "4", title: "Pay & Rate", desc: "Secure payment and leave feedback" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="border-t border-border bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Services We Offer</h2>
            <p className="mt-4 text-lg text-muted-foreground">Find the right professional for any job</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Plumbing",
              "Electrical Work",
              "Cleaning Services",
              "Carpentry",
              "Painting",
              "HVAC Services",
              "Landscaping",
              "Home Repairs",
              "Appliance Repair",
            ].map((service, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-border bg-card p-4 text-center hover:bg-accent/5 transition"
              >
                <p className="font-medium text-foreground">{service}</p>
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
              <p className="text-sm text-muted-foreground">Connecting communities with trusted professionals.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-foreground transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-foreground transition">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-foreground transition">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 iAyos. All rights reserved. Serving Zamboanga Peninsula.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
