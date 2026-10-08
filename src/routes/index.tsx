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
import heroWebm from "@/assets/hero.webm.asset.json";
import clinicPhoto from "@/assets/dental-clinic.jpg.asset.json";
import treatmentPhoto from "@/assets/dental-treatment.jpg.asset.json";
import consultationPhoto from "@/assets/dental-consultation.jpg.asset.json";
import teamPhoto from "@/assets/dental-care-team.jpg.asset.json";
import imagingPhoto from "@/assets/dental-imaging.jpg.asset.json";
import toolsPhoto from "@/assets/dental-instruments.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { Logo, TrustBar, Process, Gallery, InfoFaq } from "@/components/clinic-extras";

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
  { label: "Our approach", href: "#team" },
  { label: "Contact", href: "#visit" },
];

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="flex min-h-20 items-center justify-between gap-3 py-3">
          <a href="#top" className="flex items-center gap-2.5">
            <Logo />
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
          <Button asChild className="h-11 px-4 sm:px-5">
            <a href="#visit">Book a visit <ArrowRight /></a>
          </Button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[660px] lg:min-h-[720px] items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={clinicPhoto.url}
        className="absolute inset-0 size-full object-cover"
      >
        <source src={heroWebm.url} type="video/webm" />
        <source src={heroVideo.url} type="video/mp4" />
      </video>
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
              Northlight Dental Studio
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-primary-foreground/90">
              Thoughtful dentistry. Personal care. Right here in Portland.
            </p>
            <div className="mt-8">
              <Button asChild variant="secondary" className="h-12 px-6">
                <a href="#visit">Book an appointment <ArrowRight /></a>
              </Button>
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
    photo: treatmentPhoto.url,
    tag: "Preventive",
    title: "Cleanings & Exams",
    body: "Gentle, thorough cleanings and digital exams that keep small issues small.",
  },
  {
    icon: Sparkles,
    photo: toolsPhoto.url,
    tag: "Cosmetic",
    title: "Teeth Whitening",
    body: "In-studio and custom take-home treatments for a naturally brighter smile.",
  },
  {
    icon: Scan,
    photo: imagingPhoto.url,
    tag: "Restorative",
    title: "Dental Implants",
    body: "Permanent, natural-feeling replacements planned with 3D digital imaging.",
  },
  {
    icon: Smile,
    photo: consultationPhoto.url,
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
            Unhurried care — never a sales pitch.
          </p>
        </div>
      </Reveal>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, i) => (
          <Reveal key={service.title} delay={i * 80}>
            <div className="group h-full overflow-hidden rounded-lg border border-border bg-card">
              <img src={service.photo} alt={service.title === "Teeth Whitening" ? "Dental instruments prepared for care" : service.title === "Clear Aligners" ? "A dentist discussing treatment with a patient" : service.title === "Dental Implants" ? "A clinician examining a dental X-ray" : "A dentist providing a dental examination"} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="p-5">
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
            src={clinicPhoto.url}
            alt="A dental treatment chair, examination light and digital imaging screen"
            className="aspect-[6/5] w-full rounded-lg object-cover ring-1 ring-border"
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
            Warm light, quiet rooms, and a team that explains every step.
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
    photo: consultationPhoto.url,
    name: "A conversation first",
    role: "Personal attention",
    bio: "Time to talk through your concerns and treatment options.",
    alt: "Dentist discussing a dental scan with a patient",
  },
  {
    photo: teamPhoto.url,
    name: "Care at your pace",
    role: "Everyday dentistry",
    bio: "A gentle approach, with your comfort at the centre.",
    alt: "Two dental professionals carefully treating a patient",
  },
  {
    photo: imagingPhoto.url,
    name: "A clearer picture",
    role: "Modern diagnostics",
    bio: "Detailed imaging to help plan the right care for you.",
    alt: "Dental professional reviewing X-ray images",
  },
];

function Team() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <Reveal>
        <div className="max-w-xl">
          <span className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Our approach
          </span>
          <h2 className="font-display mt-4 text-4xl leading-tight font-semibold text-balance sm:text-5xl">
            Good care starts with listening.
          </h2>
        </div>
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {TEAM.map((member, i) => (
          <Reveal key={member.name} delay={i * 80}>
            <div className="overflow-hidden rounded-lg bg-card ring-1 ring-border transition-transform duration-300 hover:-translate-y-1">
              <img
                src={member.photo}
                alt={member.alt}
                className="aspect-[4/3] w-full object-cover"
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
            New patients always welcome — we'll find a time that works.
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
          <div className="rounded-lg bg-background/5 p-8 ring-1 ring-background/10 sm:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <span className="grid size-14 place-items-center rounded-full bg-accent/25 text-accent">
                  <Check className="size-7" />
                </span>
                <h3 className="font-display mt-6 text-2xl font-semibold">
                  Thank you
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-background/70">
                  This is a demonstration form. No appointment request has been sent.
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
                    className="w-full rounded-md border border-background/15 bg-background/5 px-4 py-3 text-sm placeholder:text-background/30 focus:border-accent focus:outline-none"
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
                    className="w-full rounded-md border border-background/15 bg-background/5 px-4 py-3 text-sm placeholder:text-background/30 focus:border-accent focus:outline-none"
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
                    className="w-full appearance-none rounded-md border border-background/15 bg-background/5 px-4 py-3 text-sm focus:border-accent focus:outline-none"
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
                <Button type="submit" className="h-12 w-full">
                  Request an appointment <ArrowRight />
                </Button>
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
          <Logo light />
          <span className="text-sm text-background/60">
            © 2026 Northlight Dental Studio · Portland, OR
          </span>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-background/60">
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
      <div className="mx-auto mt-6 flex max-w-6xl flex-wrap justify-between gap-3 px-6 text-xs text-background/50">
        <span>Illustrative clinic · Stock photography</span>
        <a href="https://www.pexels.com/license/" target="_blank" rel="noreferrer" className="underline underline-offset-4">Photography from Pexels</a>
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
        <TrustBar />
        <Services />
        <Process />
        <About />
        <Gallery />
        <Team />
        <InfoFaq />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
