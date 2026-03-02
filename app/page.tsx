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
                  Now available in Zamboanga Peninsula
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
              <div className="flex flex-col gap-3 pt-4">
                <a
                  href="https://github.com/Banyel3/iayos/releases/download/mobile-v1.0.9/iayos-1.0.9.apk"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-medium text-primary-foreground hover:bg-primary/90 transition w-fit"
                >
                  <Smartphone className="h-4 w-4" />
                  Download Android APK
                </a>
                <p className="text-xs text-muted-foreground">
                  For <span className="font-medium text-foreground">clients</span> and <span className="font-medium text-foreground">workers</span>. Agencies &amp; service companies —{" "}
                  <Link href="/business" className="text-primary underline underline-offset-2 hover:no-underline">see the For Business page</Link>.
                </p>
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
                  "Workers, clients, and agencies are verified via ID + selfie face-match (dlib AI). 10+ supported document types for maximum trust.",
              },
              {
                icon: Wallet,
                title: "Escrow Payment Protection",
                description:
                  "50% downpayment held on job accept, 50% released on completion. Powered by PayMongo QR PH — scan with any PH bank or e-wallet. Both parties fully protected.",
              },
              {
                icon: MessageSquare,
                title: "Real-Time Chat & Voice",
                description:
                  "Django Channels WebSocket messaging with group conversations, plus Agora-powered 1-to-1 and group voice calling.",
              },
              {
                icon: Navigation,
                title: "GPS Discovery",
                description:
                  "Haversine-based location search — find verified professionals near you across the Zamboanga Peninsula.",
              },
              {
                icon: Star,
                title: "Two-Way Reviews",
                description:
                  "Role-specific review criteria for both workers and clients. Build reputation and find trusted professionals.",
              },
              {
                icon: Briefcase,
                title: "Worker Portfolios",
                description:
                  "Workers showcase certifications, skills, DOLE-compliant rates, and portfolio images to win more jobs.",
              },
              {
                icon: Building2,
                title: "Agency & Team Jobs",
                description:
                  "Multi-skill slot team jobs, employee assignment, daily attendance tracking, and Employee of the Month recognition.",
              },
              {
                icon: Zap,
                title: "ML Price Prediction",
                description:
                  "LSTM model trained on Philippine blue-collar data suggests fair price ranges when clients post new jobs.",
              },
              {
                icon: Clock,
                title: "Auto-Withdrawal & Payroll",
                description:
                  "Friday payroll cron with configurable auto-withdrawal to GCash. Track every peso with full wallet history.",
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
                title: "Pay Escrow",
                desc: "Pay 50% escrow via QR PH to confirm job start",
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
              20 service categories with DOLE-regulated daily minimums
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {[
              {
                name: "Appliance Repair",
                minRate: "₱400",
                range: "₱500–3,000",
              },
              { name: "Auto Mechanic", minRate: "₱500", range: "₱500–20,000" },
              { name: "Carpentry", minRate: "₱450", range: null },
              { name: "Drywall Installation", minRate: "₱450", range: null },
              { name: "Electrical Work", minRate: "₱600", range: null },
              { name: "Furniture Assembly", minRate: "₱300", range: null },
              { name: "General Cleaning", minRate: "₱300", range: null },
              { name: "Glass Installation", minRate: "₱500", range: null },
              { name: "HVAC (Aircon Services)", minRate: "₱500", range: null },
              { name: "Landscaping", minRate: "₱350", range: null },
              { name: "Masonry", minRate: "₱500", range: null },
              { name: "Motorcycle Repair", minRate: "₱350", range: null },
              { name: "Moving Services", minRate: "₱400", range: null },
              { name: "Painting", minRate: "₱350", range: null },
              { name: "Pest Control", minRate: "₱500", range: null },
              { name: "Plumbing", minRate: "₱500", range: null },
              { name: "Roofing", minRate: "₱600", range: null },
              { name: "Security System Install", minRate: "₱600", range: null },
              { name: "Tiling", minRate: "₱450", range: null },
              { name: "Welding", minRate: "₱550", range: null },
            ].map((service, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-4 hover:shadow-lg transition animate-fade-in-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <p className="font-semibold text-foreground text-sm">
                  {service.name}
                </p>
                <p className="text-lg font-bold text-primary">
                  {service.minRate}
                  <span className="text-sm font-normal text-muted-foreground">
                    /day min
                  </span>
                </p>
                {service.range && (
                  <p className="text-xs text-muted-foreground">
                    Range: {service.range}
                  </p>
                )}
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
              Protected transactions powered by PayMongo with multiple payment
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
                title: "PayMongo QR PH",
                description:
                  "Deposit via universal QR code — scan with GCash, Maya, BPI, UnionBank, or any PH bank/e-wallet",
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
                  "10% of total job budget, charged to client at escrow payment. Worker receives full agreed amount.",
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
                name: "Gabriel",
                role: "Assistant Developer | QA Engineer",
                image: "/images/Gabriel.JPEG",
                bio: "I support core development and maintain quality through hands-on testing and engineering best practices.",
              },
              {
                name: "Sandara",
                role: "Project Manager | Business Analyst",
                image: "/images/Sandara.JPG",
                bio: "I oversee project delivery and translate business needs into clear requirements that drive team success.",
              },
              {
                name: "Vaniel",
                role: "Lead Developer",
                image: "/images/Vaniel.JPEG",
                bio: "I architect and build the core systems powering iAyos, from real-time features to secure payment integrations.",
              },
              {
                name: "Inna",
                role: "Assistant UI/UX | QA Engineer",
                image: "/images/Inna.JPEG",
                bio: "I craft intuitive interfaces and validate every user interaction to ensure a seamless experience.",
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
                &copy; 2026 Devante. All rights reserved. Serving Zamboanga
                Peninsula.
              </p>
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">"Ayos"</span> - Filipino for "to
                  fix, to repair"
                </div>
                <a
                  href="https://github.com/Banyel3/iayos/releases/download/mobile-v1.0.9/iayos-1.0.9.apk"
                  className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground hover:bg-muted/80 transition"
                >
                  <Smartphone className="h-3 w-3" />
                  <span>Download APK</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
