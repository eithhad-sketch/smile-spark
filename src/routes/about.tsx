import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, Scan, MessageCircle } from "lucide-react";
import { ClinicNav, ClinicFooter, PageCover, BookingBand } from "@/components/clinic-layout";
import { Gallery } from "@/components/clinic-extras";
import { clinicPhoto as clinic, teamPhoto as team } from "@/lib/clinic-media";

export const Route = createFileRoute("/about")({ head: () => ({ meta: [
  { title: "Our Studio & Approach | Northlight Dental Studio" },
  { name: "description", content: "Get to know Northlight Dental Studio: thoughtful dentistry, modern diagnostics and unhurried care in Portland." },
  { property: "og:title", content: "Our Studio | Northlight Dental Studio" },
  { property: "og:description", content: "A calm approach to dentistry, with time to listen and space to feel comfortable." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: AboutPage });

function AboutPage() {
  return <><ClinicNav /><main><PageCover title="Northlight Dental Studio" eyebrow="Our studio" description="A calmer kind of dental visit. Built around people, not just teeth." photo={clinic.url} alt="A bright dental treatment room" />
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2"><div><p className="text-xs font-semibold uppercase text-primary">Our philosophy</p><h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">Good care starts with listening.</h2><p className="mt-5 leading-relaxed text-muted-foreground">Every smile has a story. Whether you’re here for a routine check-up or returning after a long break, there’s no judgment — just a conversation about what you need.</p><p className="mt-4 leading-relaxed text-muted-foreground">We explain what we see, offer clear options, and give you space to make decisions. Your comfort is part of your care, from the first hello to the follow-up.</p></div><img src={team.url} alt="Dental professionals providing careful treatment" className="aspect-[4/3] w-full rounded-lg object-cover" loading="lazy" /></section>
    <section className="border-y border-border"><div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">{[{ icon: MessageCircle, title: "Time to understand", text: "Your questions matter. We explain treatment in plain language and agree on a plan together." }, { icon: HeartHandshake, title: "Comfort comes first", text: "Let us know what makes you anxious. We’ll talk about breaks and comfort options before we begin." }, { icon: Scan, title: "A clearer picture", text: "Digital imaging helps us understand your oral health and explain the care we recommend." }].map(({ icon: Icon, title, text }) => <div key={title}><Icon className="size-7 text-primary" /><h2 className="mt-5 text-xl font-semibold">{title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}</div></section>
    <Gallery /><BookingBand /></main><ClinicFooter /></>;
}