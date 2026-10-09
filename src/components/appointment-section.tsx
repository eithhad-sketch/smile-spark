import { useState } from "react";
import { MapPin, Clock, Phone, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppointmentSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="visit" className="bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 sm:py-28 lg:grid-cols-2">
        <div>
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
        </div>

        <div>
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
        </div>
      </div>
    </section>
  );
}

