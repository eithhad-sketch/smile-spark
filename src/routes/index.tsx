import { createFileRoute, Link } from "@tanstack/react-router";
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
import heroVideo from "@/assets/dental-care.mp4.asset.json";
import heroWebm from "@/assets/dental-care.webm.asset.json";
import clinicPhoto from "@/assets/dental-clinic.jpg.asset.json";
import treatmentPhoto from "@/assets/dental-treatment.jpg.asset.json";
import consultationPhoto from "@/assets/dental-consultation.jpg.asset.json";
import teamPhoto from "@/assets/dental-care-team.jpg.asset.json";
import imagingPhoto from "@/assets/dental-imaging.jpg.asset.json";
import toolsPhoto from "@/assets/dental-instruments.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { TrustBar, Process, Gallery, InfoFaq } from "@/components/clinic-extras";

import { ClinicNav, ClinicFooter, BookingBand } from "@/components/clinic-layout";
import { AppointmentSection } from "@/components/appointment-section";

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

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[580px] lg:min-h-[640px] items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-label="A dentist providing gentle dental care"
        poster={clinicPhoto.url}
        className="absolute inset-0 size-full object-cover"
      >
        <source src={heroWebm.url} type="video/webm" />
        <source src={heroVideo.url} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-foreground/10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20">
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
                <Link to="/contact">Book an appointment <ArrowRight /></Link>
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


function Index() {
  return (
    <div className="min-h-screen">
      <ClinicNav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <section className="mx-auto grid max-w-6xl gap-6 border-t border-border px-6 py-14 sm:grid-cols-3">
          {[{ to: "/services", title: "Find your treatment", text: "Explore preventive, cosmetic and restorative care." }, { to: "/about", title: "Meet the studio", text: "A closer look at our approach and our spaces." }, { to: "/new-patients", title: "Your first appointment", text: "What to bring, what to expect, and what comes next." }].map(item => <Link key={item.to} to={item.to} className="group border-b border-border pb-6"><h2 className="flex items-center justify-between text-xl font-semibold">{item.title}<ArrowRight className="size-5 text-primary transition-transform group-hover:translate-x-1" /></h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p></Link>)}
        </section>
        <Process />
        <About />
        <Gallery />
        <Team />
        <InfoFaq />
        <AppointmentSection />
      </main>
      <ClinicFooter />
    </div>
  );
}
