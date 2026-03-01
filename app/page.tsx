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
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/iAyos logo.png"
                alt="iAyos"
                width={32}
                height={32}
                className="rounded-lg"
              />
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
            <div className="space-y-6 animate-fade-in-up">
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
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 hover:bg-primary/20 transition-colors">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    KYC Verified Workers
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 hover:bg-primary/20 transition-colors">
                  <Wallet className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    Escrow Protection
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 hover:bg-primary/20 transition-colors">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    Zamboanga Peninsula
                  </span>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 hover:bg-muted/80 transition-colors">
                  <Smartphone className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Mobile App Coming Soon
                  </span>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-muted animate-fade-in animation-delay-200">
              <Image
                src="/images/hero section GIF.gif"
                alt="iAyos Platform Demo"
                fill
                className="object-contain"
                unoptimized
              />
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
                className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
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
              <div
                key={idx}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
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
                video: "/videos/client-experience.mp4",
              },
              {
                title: "Worker Experience",
                video: "/videos/worker-experience.mp4",
              },
              {
                title: "Payment Flow",
                video: "/videos/payment-flow.mp4",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="shrink-0 rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="h-[400px] w-[225px] bg-muted">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    disablePictureInPicture
                    controlsList="nodownload"
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
                className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
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
              Services &amp; DOLE-Compliant Rates
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Professional services with transparent, fair pricing based on
              Department of Labor guidelines
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Plumbing", minRate: "₱500", avgRange: "₱500 – ₱5,000" },
              { name: "Electrical Work", minRate: "₱600", avgRange: "₱600 – ₱8,000" },
              { name: "Carpentry", minRate: "₱800", avgRange: "₱800 – ₱10,000" },
              { name: "Home Cleaning", minRate: "₱400", avgRange: "₱400 – ₱3,000" },
              { name: "HVAC", minRate: "₱1,000", avgRange: "₱1,000 – ₱15,000" },
              { name: "Painting", minRate: "₱800", avgRange: "₱800 – ₱8,000" },
              { name: "Masonry", minRate: "₱1,000", avgRange: "₱1,000 – ₱12,000" },
              { name: "Welding", minRate: "₱800", avgRange: "₱800 – ₱10,000" },
            ].map((service, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-4 hover:shadow-lg transition animate-fade-in-up"
                style={{ animationDelay: `${idx * 75}ms` }}
              >
                <p className="font-semibold text-foreground">{service.name}</p>
                <p className="text-lg font-bold text-primary">
                  {service.minRate}
                  <span className="text-sm font-normal text-muted-foreground">
                    /job min
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  Avg: {service.avgRange}
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
              <div
                key={idx}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
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

      {/* About Devante Section */}
      <section className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="flex justify-center animate-slide-in-left">
              <div className="relative w-64 h-64">
                <Image
                  src="/images/Devante logo.jpg"
                  alt="Devante Logo"
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>
            </div>
            <div className="space-y-6 animate-slide-in-right">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                About Devante
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Devante is a technology company focused on building innovative
                solutions that connect communities and empower local economies.
                Our flagship product, iAyos, represents our commitment to
                creating platforms that make everyday services more accessible,
                transparent, and trustworthy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Based in Zamboanga Peninsula, Philippines, we understand the
                unique needs of our community. Our team combines technical
                expertise with local knowledge to build solutions that truly
                serve our users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="border-t border-border bg-muted/30 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The passionate people behind iAyos
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                name: "Vaniel",
                role: "Lead Developer",
                image: "/images/Vaniel.JPEG",
                bio: "I architect and build the core systems powering iAyos, from real-time features to secure payment integrations.",
              },
              {
                name: "Gabriel",
                role: "Assistant Developer | QA Engineer",
                image: "/images/Gabriel.JPEG",
                bio: "I support core development and maintain quality through hands-on testing and engineering best practices.",
              },
              {
                name: "Inna",
                role: "Assistant UI/UX | QA Engineer",
                image: "/images/Inna.JPEG",
                bio: "I craft intuitive interfaces and validate every user interaction to ensure a seamless experience.",
              },
              {
                name: "Sandara",
                role: "Project Manager | Business Analyst",
                image: "/images/Sandara.JPG",
                bio: "I oversee project delivery and translate business needs into clear requirements that drive team success.",
              },
              {
                name: "Idris",
                role: "Researcher | Documentor",
                image: "/images/Idris.JPEG",
                bio: "I conduct in-depth research and maintain comprehensive documentation to inform and guide the team.",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-6 text-center hover:shadow-lg transition animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-foreground text-lg">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
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
                <Image
                  src="/images/iAyos logo.png"
                  alt="iAyos"
                  width={24}
                  height={24}
                  className="rounded-lg"
                />
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
