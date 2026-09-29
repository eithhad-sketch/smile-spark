import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Sparkles,
  ShieldCheck,
  Scan,
  Smile,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Check,
} from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import clinicRoom from "@/assets/clinic-room.jpg";
import drMarsh from "@/assets/team-dr-mars.jpg";
import drWilliams from "@/assets/team-dr-okafor.jpg";
import priya from "@/assets/team-priya.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Northlight Dental Studio — Gentle, Modern Dentistry in Portland",
      },
      {
        name: "description",
        content:
          "Northlight Dental Studio in Portland, OR. Calm, judgment-free dentistry — preventive care, whitening, implants and clear aligners. Accepting new patients.",
      },
      { property: "og:title", content: "Northlight Dental Studio" },
      {
        property: "og:description",
        content:
          "Calm, judgment-free dentistry in a bright, modern studio. Accepting new patients in Portland, OR.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function ToothMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M16 5.5c-4.2 0-6.6 2.4-6.6 5.8 0 2.6 1.2 4 1.7 6.5.5 2.4-.3 5.2.5 7.9.5 1.9 1.5 3.2 2.7 3.2 1.8 0 1.5-3.1 1.9-5.3.2-1.2.4-1.9 1.3-1.9.9 0 1.1.7 1.3 1.9.4 2.2.1 5.3 1.9 5.3 1.2 0 2.2-1.3 2.7-3.2.8-2.7 0-5.5.5-7.9.5-2.5 1.7-3.9 1.7-6.5 0-3.4-2.4-5.8-6.6-5.8-1 0-1.9.2-2.6.2s-1.6-.2-2.6-.2z"
        transform="translate(1.6 0)"
      />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Reviews", href: "#reviews" },
];

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="mt-4 flex items-center justify-between rounded-full bg-card/80 px-5 py-3 shadow-sm ring-1 ring-black/5 backdrop-blur-md">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
              <ToothMark className="size-5" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Northlight <span className="text-primary">Dental</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#visit"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Book a visit
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden">
      <video
        className="absolute inset-0 size-full object-cover"
        src={heroVideo.url}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-foreground/10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-24">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase ring-1 ring-primary-foreground/25 backdrop-blur">
              <span className="size-1.5 rounded-full bg-accent" />
              Accepting new patients
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display mt-6 text-5xl leading-[1.05] font-semibold text-balance text-primary-foreground sm:text-6xl lg:text-7xl">
              Dental care that feels like a deep breath.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
              Calm, judgment-free dentistry in a bright, light-filled studio —
              from gentle cleanings to complete smile restoration.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#visit"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-foreground shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Book an appointment
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#services"
                className="rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground ring-1 ring-primary-foreground/40 transition-colors hover:bg-primary-foreground/10"
              >
                Explore services
              </a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-14 flex gap-10 border-t border-primary-foreground/20 pt-8">
              {[
                { value: "15+", label: "years of care" },
                { value: "4.9", label: "patient rating" },
                { value: "12k", label: "smiles treated" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-semibold text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs tracking-wider text-primary-foreground/60 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: ShieldCheck,
    tag: "Preventive",
    title: "Cleanings & Exams",
    body: "Gentle, thorough cleanings and digital exams that keep small issues small.",
  },
  {
    icon: Sparkles,
    tag: "Cosmetic",
    title: "Teeth Whitening",
    body: "In-studio and custom take-home treatments for a naturally brighter smile.",
  },
  {
    icon: Scan,
    tag: "Restorative",
    title: "Dental Implants",
    body: "Permanent, natural-feeling replacements planned with 3D digital imaging.",
  },
  {
    icon: Smile,
    tag: "Orthodontics",
    title: "Clear Aligners",
    body: "Discreet, removable aligners mapped around your smile and your schedule.",
  },
];

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <Reveal>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              What we do
            </span>
            <h2 className="font-display mt-4 text-4xl leading-tight font-semibold text-balance sm:text-5xl">
              Care for every stage of your smile.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Every visit starts with an unhurried conversation about what you
            actually want — never a sales pitch.
          </p>
        </div>
      </Reveal>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, i) => (
          <Reveal key={service.title} delay={i * 80}>
            <div className="group h-full rounded-3xl bg-card p-7 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:ring-primary/30">
              <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" />
              </span>
              <span className="mt-6 inline-block text-[11px] font-semibold tracking-[0.18em] text-accent-foreground/60 uppercase">
                {service.tag}
              </span>
              <h3 className="font-display mt-2 text-xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const COMFORT_POINTS = [
  "Transparent, itemized pricing before we begin — no surprises.",
  "Sedation and comfort options for anxious patients.",
  "Digital scanning instead of goopy impressions.",
  "Evening and Saturday appointments that respect your week.",
];

function About() {
  return (
    <section id="about" className="bg-secondary/60">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 sm:py-28 lg:grid-cols-2">
        <Reveal>
          <img
            src={clinicRoom}
            alt="A bright, calm treatment room at Northlight Dental Studio"
            className="aspect-[6/5] w-full rounded-3xl object-cover ring-1 ring-black/5"
            width={1440}
            height={1200}
            loading="lazy"
          />
        </Reveal>
        <Reveal delay={120}>
          <span className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Why Northlight
          </span>
          <h2 className="font-display mt-4 text-4xl leading-tight font-semibold text-balance sm:text-5xl">
            A studio built around calm, not fear.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            Warm light, quiet rooms, and a team that explains every step before
            it begins. Most of our patients used to dread the dentist — now
            they fall asleep in the chair.
          </p>
          <ul className="mt-8 space-y-4">
            {COMFORT_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent/30 text-accent-foreground">
                  <Check className="size-3" />
                </span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

const TEAM = [
  {
    photo: drMarsh,
    name: "Dr. Elena Marsh",
    role: "Lead Dentist · Restorative",
    bio: "Fifteen years of minimally invasive crowns and full-mouth comfort care.",
  },
  {
    photo: drWilliams,
    name: "Dr. Marcus Williams",
    role: "Orthodontist · Aligners",
    bio: "Plans clear-aligner journeys that fit real, busy schedules.",
  },
  {
    photo: priya,
    name: "Priya Nair, RDH",
    role: "Lead Hygienist",
    bio: "Known for the gentlest cleanings in Portland — and honest, jargon-free advice.",
  },
];

function Team() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <Reveal>
        <div className="max-w-xl">
          <span className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Meet the team
          </span>
          <h2 className="font-display mt-4 text-4xl leading-tight font-semibold text-balance sm:text-5xl">
            The people behind the chair.
          </h2>
        </div>
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {TEAM.map((member, i) => (
          <Reveal key={member.name} delay={i * 80}>
            <div className="overflow-hidden rounded-3xl bg-card ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1">
              <img
                src={member.photo}
                alt={`Portrait of ${member.name}`}
                className="aspect-[4/5] w-full object-cover object-top"
                width={1024}
                height={1280}
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    quote:
      "I stopped dreading checkups. The room, the pace, the people — everything just feels calm.",
    author: "Dana R.",
    treatment: "Cleaning & Exam",
  },
  {
    quote:
      "They explained every cost upfront and never once rushed me through a decision.",
    author: "Marcus L.",
    treatment: "Dental Implant",
  },
  {
    quote:
      "My whitening came out even and natural — not that chalky, over-bright look at all.",
    author: "Sofia M.",
    treatment: "Teeth Whitening",
  },
];

function Reviews() {
  return (
    <section id="reviews" className="bg-secondary/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <Reveal>
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Patient stories
            </span>
            <h2 className="font-display mt-4 text-4xl leading-tight font-semibold text-balance sm:text-5xl">
              Quiet confidence, in their words.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.author} delay={i * 80}>
              <figure className="flex h-full flex-col justify-between rounded-3xl bg-card p-8 ring-1 ring-black/5">
                <blockquote className="font-display text-lg leading-relaxed text-pretty italic">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {review.author}
                  </span>{" "}
                  · {review.treatment}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="visit" className="bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 sm:py-28 lg:grid-cols-2">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Visit us
          </span>
          <h2 className="font-display mt-4 text-4xl leading-tight font-semibold text-balance sm:text-5xl">
            Come by, or reach out.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-background/70">
            New patients are always welcome. Share a little about what's
            bringing you in, and we'll find a time that works — usually within
            one business day.
          </p>
          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-background/10 text-accent">
                <MapPin className="size-5" />
              </span>
              <div>
                <div className="font-semibold">482 Maple Grove Ave, Suite 210</div>
                <div className="text-sm text-background/60">
                  Portland, OR 97210
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-background/10 text-accent">
                <Clock className="size-5" />
              </span>
              <div>
                <div className="font-semibold">Mon–Fri 8am–6pm · Sat 9am–2pm</div>
                <div className="text-sm text-background/60">
                  Evening appointments available
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-background/10 text-accent">
                <Phone className="size-5" />
              </span>
              <div>
                <div className="font-semibold">(503) 555-0172</div>
                <div className="text-sm text-background/60">
                  hello@northlightdental.com
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl bg-background/5 p-8 ring-1 ring-background/10 sm:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <span className="grid size-14 place-items-center rounded-full bg-accent/25 text-accent">
                  <Check className="size-7" />
                </span>
                <h3 className="font-display mt-6 text-2xl font-semibold">
                  Request received
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-background/70">
                  Thanks for reaching out — we'll confirm your appointment by
                  phone within one business day.
                </p>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-background/50 uppercase"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="Jordan Smith"
                    className="w-full rounded-2xl border border-background/15 bg-background/5 px-4 py-3 text-sm placeholder:text-background/30 focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-background/50 uppercase"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    placeholder="(503) 555-0100"
                    className="w-full rounded-2xl border border-background/15 bg-background/5 px-4 py-3 text-sm placeholder:text-background/30 focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-background/50 uppercase"
                  >
                    What can we help with?
                  </label>
                  <select
                    id="service"
                    defaultValue="checkup"
                    className="w-full appearance-none rounded-2xl border border-background/15 bg-background/5 px-4 py-3 text-sm focus:border-accent focus:outline-none"
                  >
                    <option className="text-foreground" value="checkup">
                      Check-up & cleaning
                    </option>
                    <option className="text-foreground" value="whitening">
                      Teeth whitening
                    </option>
                    <option className="text-foreground" value="implants">
                      Dental implants
                    </option>
                    <option className="text-foreground" value="aligners">
                      Clear aligners
                    </option>
                    <option className="text-foreground" value="other">
                      Something else
                    </option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Request an appointment
                </button>
                <p className="text-center text-xs text-background/40">
                  We'll never share your details. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-background/10 bg-foreground pb-10 text-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 pt-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
            <ToothMark className="size-4.5" />
          </span>
          <span className="text-sm text-background/60">
            © 2026 Northlight Dental Studio · Portland, OR
          </span>
        </div>
        <div className="flex gap-6 text-sm text-background/60">
          <a href="#services" className="transition-colors hover:text-background">
            Services
          </a>
          <a href="#visit" className="transition-colors hover:text-background">
            Contact
          </a>
          <a
            href="tel:5035550172"
            className="text-accent transition-colors hover:text-background"
          >
            (503) 555-0172
          </a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
