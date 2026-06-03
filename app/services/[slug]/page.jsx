import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckIcon,
  ComplianceNote,
  PrimaryLink,
  SecondaryLink,
  SectionIntro,
  ServicePreviewTile,
} from "../../_components/site";
import { business, services } from "../../_data/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} | ${business.name}`,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) {
    notFound();
  }

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_12%,rgba(20,143,139,0.14),transparent_34%),radial-gradient(circle_at_84%_18%,rgba(214,168,79,0.18),transparent_28%),linear-gradient(135deg,#f7fbfc_0%,#ffffff_44%,#edf7f7_100%)]">
        <div className="pointer-events-none absolute right-[8%] top-24 h-56 w-56 rounded-full bg-teal/[0.12] blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-20">
          <div className="animate-fade-up">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.18em] text-teal transition hover:text-[#117c78]"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m6-6-6 6 6 6" />
              </svg>
              All Services
            </Link>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-teal">
              {service.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.06] tracking-tight text-navy sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-[38rem] text-lg leading-8 text-slate-600">
              {service.longDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/contact">Get Started</PrimaryLink>
              <SecondaryLink href="/who-we-serve">Who We Serve</SecondaryLink>
            </div>
          </div>
          <div className="animate-fade-up overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_38px_100px_rgba(18,49,92,0.18)]">
            <div className="relative">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="h-72 w-full object-cover sm:h-80 lg:h-[26rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3">
                <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-navy backdrop-blur">
                  {service.eyebrow}
                </span>
                <span className="rounded-full bg-teal px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white">
                  Approved Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What this looks like */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <SectionIntro
          eyebrow="What this looks like"
          title="Practical, respectful support shaped around the individual."
        >
          The examples below may be included under {service.title} when authorized
          through the person’s waiver plan. The day-to-day mix is shaped by the
          individual’s plan, preferences, and routine.
        </SectionIntro>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {service.items.map((item) => (
            <li
              key={item}
              className="flex gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_12px_36px_rgba(18,49,92,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-teal/30 hover:shadow-[0_22px_56px_rgba(18,49,92,0.12)]"
            >
              <CheckIcon />
              <span className="font-semibold leading-7 text-navy">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* When this is used */}
      <section className="bg-soft py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <SectionIntro
              eyebrow="When this is used"
              title="Provided when authorized through the individual’s plan."
            >
              {service.context}
            </SectionIntro>
            <ComplianceNote />
          </div>
        </div>
      </section>

      {/* Explore other services */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <SectionIntro
          eyebrow="Explore other services"
          title="Two other approved services round out the support."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {otherServices.map((other) => (
            <ServicePreviewTile
              key={other.slug}
              service={other}
              href={`/services/${other.slug}`}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-20">
        <div className="rounded-[2rem] bg-navy px-6 py-12 text-center text-white sm:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">
            Get Started
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Discuss {service.shortTitle.toLowerCase()} for an eligible waiver participant.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-50">
            Contact TAGA’S COMPASSIONATE CARE LLC to share service needs, waiver
            status, and next steps.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryLink href="/contact">Contact Us</PrimaryLink>
            <a
              href={`tel:${business.phoneTel}`}
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
            >
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
