import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/clinic-extras";

const links = [
  { to: "/services", label: "Services" },
  { to: "/about", label: "Our studio" },
  { to: "/new-patients", label: "New patients" },
  { to: "/contact", label: "Contact" },
] as const;

export function ClinicNav() {
  const [open, setOpen] = useState(false);
  return <header className="relative z-50 border-b border-border bg-background">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <nav aria-label="Main navigation" className="flex min-h-20 items-center justify-between gap-3 py-3">
        <Link to="/" aria-label="Northlight Dental Studio home"><Logo /></Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground lg:flex">
          {links.map(link => <Link key={link.to} to={link.to} activeProps={{ className: "text-primary" }} className="transition-colors hover:text-primary">{link.label}</Link>)}
        </div>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden h-11 px-5 sm:inline-flex"><Link to="/contact">Book a visit <ArrowRight /></Link></Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
        </div>
      </nav>
      {open && <nav aria-label="Mobile navigation" className="grid gap-1 border-t border-border py-4 lg:hidden">
        <Link to="/" onClick={() => setOpen(false)} className="px-2 py-3 text-sm font-medium">Home</Link>
        {links.map(link => <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="px-2 py-3 text-sm font-medium">{link.label}</Link>)}
        <Button asChild className="mt-2"><Link to="/contact" onClick={() => setOpen(false)}>Book a visit <ArrowRight /></Link></Button>
      </nav>}
    </div>
  </header>;
}

export function ClinicFooter() {
  return <footer className="bg-foreground text-background">
    <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
      <div><Link to="/" aria-label="Northlight home"><Logo light /></Link><p className="mt-5 max-w-xs text-sm leading-relaxed text-background/65">Thoughtful dentistry. Personal care.<br />Right here in Portland.</p></div>
      <div><h2 className="text-sm font-semibold">Explore</h2><div className="mt-4 grid gap-3 text-sm text-background/65">{links.map(link => <Link key={link.to} to={link.to} className="hover:text-background">{link.label}</Link>)}</div></div>
      <div><h2 className="text-sm font-semibold">Find us</h2><p className="mt-4 text-sm leading-relaxed text-background/65">482 Maple Grove Ave, Suite 210<br />Portland, OR 97210</p><a href="tel:5035550172" className="mt-4 inline-flex items-center gap-2 text-sm text-accent"><Phone className="size-4" />(503) 555-0172</a></div>
    </div>
    <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 border-t border-background/10 px-6 py-6 text-xs text-background/50"><span>© 2026 Northlight Dental Studio · Illustrative clinic</span><a href="https://www.pexels.com/license/" target="_blank" rel="noreferrer" className="underline underline-offset-4">Stock photography & footage · Pexels</a></div>
  </footer>;
}

export function PageCover({ title, eyebrow, description, photo, alt }: { title: string; eyebrow: string; description: string; photo: string; alt: string }) {
  return <section className="relative flex min-h-[420px] items-end overflow-hidden sm:min-h-[480px]">
    <img src={photo} alt={alt} className="absolute inset-0 size-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
    <div className="relative mx-auto w-full max-w-6xl px-6 py-16 text-primary-foreground"><p className="text-xs font-semibold uppercase">{eyebrow}</p><h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-6xl">{title}</h1><p className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/85">{description}</p></div>
  </section>;
}

export function BookingBand() {
  return <section className="bg-secondary"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-6 py-14 sm:flex-row sm:items-center"><div><h2 className="text-3xl font-semibold">Let’s take care of your smile.</h2><p className="mt-3 text-sm text-muted-foreground">New patients are always welcome.</p></div><Button asChild className="h-12 shrink-0 px-6"><Link to="/contact">Book a visit <ArrowRight /></Link></Button></div></section>;
}