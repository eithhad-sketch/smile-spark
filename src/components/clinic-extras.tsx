import { CalendarCheck, ClipboardList, Smile, Stethoscope, Star, Clock, ShieldCheck, Award, HeartHandshake } from "lucide-react";
import toolsPhoto from "@/assets/dental-instruments.jpg.asset.json";
import treatmentPhoto from "@/assets/dental-treatment.jpg.asset.json";
import imagingPhoto from "@/assets/dental-imaging.jpg.asset.json";
import clinicPhoto from "@/assets/dental-clinic.jpg.asset.json";

export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="12" className="fill-primary" />
      <path
        className="fill-primary-foreground"
        d="M24 11c-2 0-3.3.9-5 .9-1.8 0-3-.9-5-.9-3.6 0-5.6 3-5.6 6.6 0 3.3 1.5 5 2.1 8 .6 3-.2 6.3.7 9.5.6 2.1 1.6 3.4 2.9 3.4 2 0 1.8-3.5 2.2-6 .3-1.6.6-2.6 1.9-2.6h2.6c1.3 0 1.6 1 1.9 2.6.4 2.5.2 6 2.2 6 1.3 0 2.3-1.3 2.9-3.4.9-3.2.1-6.5.7-9.5.6-3 2.1-4.7 2.1-8 0-.6 0-1.1-.2-1.6"
        transform="translate(4 0)"
      />
      <path className="fill-accent" d="M38 6l1.4 3.6L43 11l-3.6 1.4L38 16l-1.4-3.6L33 11l3.6-1.4z" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="size-10" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-bold ${light ? "text-background" : "text-foreground"}`}>Northlight</span>
        <span className={`mt-1 text-[10px] font-semibold tracking-[0.28em] uppercase ${light ? "text-accent" : "text-primary"}`}>Dental Studio</span>
      </span>
    </span>
  );
}

const TRUST = [
  { icon: Star, label: "4.9 on Google", sub: "620+ reviews" },
  { icon: Award, label: "ADA members", sub: "Board-certified" },
  { icon: ShieldCheck, label: "Most insurance", sub: "Delta, Cigna, Aetna" },
  { icon: HeartHandshake, label: "0% financing", sub: "Up to 12 months" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
        {TRUST.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-secondary text-primary"><Icon className="size-5" /></span>
            <div>
              <p className="text-sm font-semibold">{label}</p>
              <p className="text-xs text-muted-foreground">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const STEPS = [
  { icon: CalendarCheck, title: "Book online", text: "Pick a time in under a minute." },
  { icon: ClipboardList, title: "Check-up & scan", text: "Gentle exam with digital X-rays." },
  { icon: Stethoscope, title: "Clear plan", text: "Options and pricing, explained." },
  { icon: Smile, title: "Leave smiling", text: "Follow-up reminders included." },
];

export function Process() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <span className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">Your first visit</span>
      <h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">Simple from start to finish.</h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map(({ icon: Icon, title, text }, i) => (
          <div key={title} className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground"><Icon className="size-5" /></span>
              <span className="font-display text-3xl font-bold text-muted-foreground/30">0{i + 1}</span>
            </div>
            <h3 className="mt-5 font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Gallery() {
  const imgs = [
    { src: treatmentPhoto.url, alt: "Dentist treating a patient", cls: "md:col-span-2 md:row-span-2" },
    { src: toolsPhoto.url, alt: "Sterilized dental instruments", cls: "" },
    { src: imagingPhoto.url, alt: "Reviewing dental X-rays", cls: "" },
    { src: clinicPhoto.url, alt: "Treatment room", cls: "md:col-span-2" },
  ];
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <span className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">Inside the studio</span>
        <h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">Take a look around.</h2>
        <div className="mt-12 grid auto-rows-[200px] gap-4 md:grid-cols-4">
          {imgs.map((im) => (
            <img key={im.alt} src={im.src} alt={im.alt} loading="lazy" className={`h-full w-full rounded-lg object-cover ${im.cls}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

const HOURS = [
  ["Mon – Thu", "8:00 am – 7:00 pm"],
  ["Friday", "8:00 am – 4:00 pm"],
  ["Saturday", "9:00 am – 2:00 pm"],
  ["Sunday", "Closed"],
];

const FAQ = [
  ["Do you accept new patients?", "Yes — most new patients are seen within a week."],
  ["Do you take my insurance?", "We're in-network with most major PPO plans and file claims for you."],
  ["What about emergencies?", "Call us — same-day emergency slots are held every weekday."],
  ["Is there parking?", "Free parking behind the building, plus a TriMet stop out front."],
];

export function InfoFaq() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[1fr_1.4fr]">
      <div className="rounded-lg border border-border bg-card p-8">
        <div className="flex items-center gap-2 text-primary"><Clock className="size-5" /><span className="font-semibold">Opening hours</span></div>
        <dl className="mt-6 divide-y divide-border text-sm">
          {HOURS.map(([d, h]) => (
            <div key={d} className="flex justify-between py-3"><dt className="text-muted-foreground">{d}</dt><dd className="font-medium">{h}</dd></div>
          ))}
        </dl>
      </div>
      <div>
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Common questions</h2>
        <div className="mt-6 divide-y divide-border">
          {FAQ.map(([q, a]) => (
            <details key={q} className="group py-4">
              <summary className="cursor-pointer list-none font-medium marker:hidden">{q}<span className="float-right text-primary group-open:rotate-45 transition-transform">+</span></summary>
              <p className="mt-2 text-sm text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
