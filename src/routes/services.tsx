import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClinicNav, ClinicFooter, PageCover, BookingBand } from "@/components/clinic-layout";
import { treatmentPhoto as treatment, toolsPhoto as instruments, imagingPhoto as imaging, consultationPhoto as consultation } from "@/lib/clinic-media";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Dental Services | Northlight Dental Studio" },
    { name: "description", content: "Explore cleanings, whitening, dental implants and clear aligners at Northlight Dental Studio in Portland." },
    { property: "og:title", content: "Dental Services | Northlight Dental Studio" },
    { property: "og:description", content: "Preventive, cosmetic and restorative care, thoughtfully planned around your smile." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ServicesPage,
});

const treatments = [
  { title: "Cleanings & exams", category: "Preventive care", photo: treatment.url, alt: "A dentist examining a patient's teeth", description: "A healthy smile starts with regular care. We check your teeth, gums and bite, then talk through anything that needs attention.", points: ["Professional cleaning and polishing", "Gum health assessment", "Digital X-rays when appropriate"] },
  { title: "Teeth whitening", category: "Cosmetic dentistry", photo: instruments.url, alt: "Prepared dental instruments", description: "A brighter smile, without guesswork. We assess your teeth and discuss a whitening approach that suits your goals and sensitivity.", points: ["In-studio whitening", "Custom take-home options", "Advice for maintaining your results"] },
  { title: "Dental implants", category: "Restorative dentistry", photo: imaging.url, alt: "A dental professional examining an X-ray", description: "Replace missing teeth with a carefully planned, natural-feeling solution. A consultation helps establish the right treatment for you.", points: ["Detailed imaging and assessment", "Individual treatment planning", "Ongoing care and maintenance"] },
  { title: "Clear aligners", category: "Orthodontics", photo: consultation.url, alt: "A dentist discussing a scan with a patient", description: "A discreet way to straighten your teeth. We explain the options, assess your bite and plan each stage around your needs.", points: ["Digital smile assessment", "Removable, clear aligners", "Progress checks throughout treatment"] },
];

function ServicesPage() {
  return <><ClinicNav /><main><PageCover title="Dental care, thoughtfully planned." eyebrow="Our services" description="Everyday check-ups to a more confident smile. Clear advice, personal attention, and care at your pace." photo={treatment.url} alt="A patient receiving dental care" />
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">{treatments.map((item, i) => <section key={item.title} className="grid items-center gap-8 border-b border-border py-12 first:pt-0 last:border-0 lg:grid-cols-2 lg:gap-16">
      <img src={item.photo} alt={item.alt} loading="lazy" className={`aspect-[4/3] w-full rounded-lg object-cover ${i % 2 ? "lg:order-2" : ""}`} />
      <div><p className="text-xs font-semibold uppercase text-primary">{item.category}</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{item.title}</h2><p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">{item.description}</p><ul className="my-6 space-y-3">{item.points.map(point => <li key={point} className="flex items-center gap-3 text-sm"><Check className="size-4 shrink-0 text-primary" />{point}</li>)}</ul><Button asChild variant="outline"><Link to="/contact">Discuss your options <ArrowRight /></Link></Button></div>
    </section>)}</div><BookingBand /></main><ClinicFooter /></>;
}