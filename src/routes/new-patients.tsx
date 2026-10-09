import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { ClinicNav, ClinicFooter, PageCover, BookingBand } from "@/components/clinic-layout";
import { Process, InfoFaq } from "@/components/clinic-extras";
import consultation from "@/assets/dental-consultation.jpg.asset.json";

export const Route = createFileRoute("/new-patients")({ head: () => ({ meta: [
  { title: "New Patients & First Visits | Northlight Dental Studio" },
  { name: "description", content: "Prepare for your first visit to Northlight Dental Studio. What to bring, what to expect, and answers to common questions." },
  { property: "og:title", content: "New Patients | Northlight Dental Studio" },
  { property: "og:description", content: "A warm welcome, a gentle examination and a clear plan for your dental care." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: NewPatientsPage });

function NewPatientsPage() {
  return <><ClinicNav /><main><PageCover title="Your first visit." eyebrow="New patients" description="A fresh start for your smile. We’ll get to know you, understand your concerns, and make a plan together." photo={consultation.url} alt="A dentist talking with a patient about their dental care" /><Process />
    <section className="bg-secondary"><div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2"><div><h2 className="text-3xl font-semibold">A little preparation.</h2><p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">Bring the essentials and any questions you have. If you have previous dental records, let us know when you book.</p><ul className="mt-7 space-y-4">{["Photo ID and insurance details, if applicable", "A list of medications and relevant medical history", "Any recent dental X-rays or treatment records", "Your questions, concerns and smile goals"].map(item => <li key={item} className="flex gap-3 text-sm"><Check className="size-5 shrink-0 text-primary" />{item}</li>)}</ul></div><div><h2 className="text-3xl font-semibold">No pressure. No judgment.</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Your first appointment is a chance to talk. We’ll review your health history, examine your teeth and gums, and discuss imaging if needed.</p><div className="mt-7 space-y-6"><div><h3 className="font-semibold">Nervous about your visit?</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Tell us before your appointment. We can talk through comfort options and agree on a signal for taking a break.</p></div><div><h3 className="font-semibold">Understanding your costs</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">We explain recommended treatment and itemized pricing before proceeding. Ask us about your insurance and payment options.</p></div></div></div></div></section>
    <InfoFaq /><BookingBand /></main><ClinicFooter /></>;
}