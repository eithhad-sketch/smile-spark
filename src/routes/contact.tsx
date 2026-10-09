import { createFileRoute } from "@tanstack/react-router";
import { ClinicNav, ClinicFooter } from "@/components/clinic-layout";
import { AppointmentSection } from "@/components/appointment-section";
import { InfoFaq } from "@/components/clinic-extras";

export const Route = createFileRoute("/contact")({ head: () => ({ meta: [
  { title: "Contact & Appointments | Northlight Dental Studio" },
  { name: "description", content: "Find Northlight Dental Studio in Portland, see opening hours and explore our demonstration appointment form." },
  { property: "og:title", content: "Contact | Northlight Dental Studio" },
  { property: "og:description", content: "Get in touch with Northlight Dental Studio. New patients welcome in Portland." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ContactPage });

function ContactPage() {
  return <><ClinicNav /><main><div className="mx-auto max-w-6xl px-6 py-14"><p className="text-xs font-semibold uppercase text-primary">Northlight Dental Studio</p><h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Contact & appointments</h1><p className="mt-4 text-muted-foreground">We look forward to welcoming you.</p></div><AppointmentSection /><InfoFaq /></main><ClinicFooter /></>;
}