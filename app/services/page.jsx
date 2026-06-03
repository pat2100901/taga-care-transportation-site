import Link from "next/link";
import {
  ArrowIcon,
  CheckIcon,
  ComplianceNote,
  ExclusionsStrip,
  PageHero,
  PrimaryLink,
  SecondaryLink,
  SectionIntro,
} from "../_components/site";
import { exclusions, services } from "../_data/site";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="Approved Services"
        title="Approved Waiver Services with Clear, Careful Support"
        gridClassName="lg:items-center lg:py-20"
        actions={
          <>
            <PrimaryLink href="/contact">Get Started</PrimaryLink>
            <SecondaryLink href="/who-we-serve">Who We Serve</SecondaryLink>
          </>
        }
        panel={
          <div className="rounded-[2rem] border border-teal/15 bg-white p-6 shadow-[0_28px_80px_rgba(18,49,92,0.16)] sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
              Service clarity
            </p>
            <h2 className="mt-4 text-2xl font-bold text-navy">
              Three approved services, clearly separated.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Attendant care, home and community assistance, and nonmedical
              transportation each serve a distinct role in daily support.
            </p>
            <ul className="mt-6 grid gap-2">
              {services.map((service) => (
                <li
                  key={service.slug}
                  className="flex items-center justify-between gap-3 rounded-full border border-slate-200 bg-mist/40 px-4 py-2 text-sm font-bold text-navy"
                >
                  <span>{service.shortTitle}</span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-[0.18em] text-teal transition hover:text-[#117c78]"
                  >
                    View
                    <ArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <p>
          Our services are designed to support daily routines, community access,
          and dependable transportation when authorized through the individual’s
          waiver plan. The examples on each service page may be included under
          the approved service categories when authorized through the person’s plan.
        </p>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-8 lg:pt-14">
        <ExclusionsStrip items={exclusions} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <SectionIntro
          eyebrow="Service Details"
          title="Support that stays practical, respectful, and waiver-aware."
        >
          Open any service to see what it looks like in daily life and how it
          fits within the individual’s authorized waiver plan.
        </SectionIntro>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_16px_50px_rgba(18,49,92,0.08)] transition duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_24px_70px_rgba(18,49,92,0.14)]"
            >
              {service.image ? (
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              ) : null}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
                  {service.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-navy">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-teal">
                  May include
                </p>
                <ul className="mt-3 space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3 text-slate-700">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex-1" />
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(18,49,92,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-ink"
                >
                  Learn more about {service.shortTitle}
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <ComplianceNote className="mt-8" />
      </section>
    </main>
  );
}
