import Link from "next/link";
import { business } from "../_data/site";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Contact", href: "/contact" },
];

export function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="mt-1 h-5 w-5 flex-none text-teal"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/60 bg-white/[0.82] shadow-[0_1px_0_rgba(18,49,92,0.04)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
        <Link href="/" className="inline-flex items-center">
          <img
            src="/images/taga-logo-white-cropped.png"
            alt="TAGA’S Compassionate Care LLC"
            className="h-14 w-auto sm:h-16 lg:h-[4.25rem]"
          />
        </Link>
        <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-teal">
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(18,49,92,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-ink hover:shadow-[0_16px_38px_rgba(18,49,92,0.24)]"
        >
          Get Started
          <ArrowIcon />
        </Link>
      </nav>
      <div className="border-t border-slate-100 px-5 py-3 sm:px-8 lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto text-sm font-semibold text-slate-600">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 transition hover:text-teal">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy px-5 py-12 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <img
            src="/images/taga-logo-white-cropped.png"
            alt="TAGA’S Compassionate Care LLC logo"
            className="h-auto w-full max-w-[24rem] rounded-2xl border border-white/10 bg-white p-3 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
            loading="lazy"
          />
          <p className="mt-5 text-lg font-extrabold">{business.name}</p>
          <p className="mt-3 max-w-xl leading-7 text-blue-100">
            Indiana Medicaid Waiver Certified Provider serving Hendricks, Johnson,
            Marion, and Morgan counties.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">Quick Links</p>
          <div className="mt-4 grid gap-3 text-sm font-semibold text-blue-100">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">Provider Focus</p>
          <p className="mt-4 leading-7 text-blue-100">
            Attendant care, home and community assistance, and nonmedical transportation
            when authorized through the individual’s plan.
          </p>
          <a
            href={`tel:${business.phoneTel}`}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-extrabold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#117c78]"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6.5C3 4.567 4.567 3 6.5 3H8a2 2 0 0 1 2 2v2a2 2 0 0 1-1 1.732l-.94.543a13.5 13.5 0 0 0 7.665 7.665l.543-.94A2 2 0 0 1 18 14h2a2 2 0 0 1 2 2v1.5C22 19.433 20.433 21 18.5 21A17 17 0 0 1 3 6.5Z"
              />
            </svg>
            {business.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
  actions,
  trustCards,
  panel,
  after,
  afterTrust,
  titleClassName = "",
  gridClassName = "lg:items-center lg:py-20",
}) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_12%,rgba(20,143,139,0.14),transparent_34%),radial-gradient(circle_at_84%_18%,rgba(214,168,79,0.18),transparent_28%),linear-gradient(135deg,#f7fbfc_0%,#ffffff_44%,#edf7f7_100%)]">
      <div className="pointer-events-none absolute right-[8%] top-24 h-56 w-56 rounded-full bg-teal/[0.12] blur-3xl" />
      <div className="pointer-events-none absolute bottom-12 left-[42%] h-40 w-40 rounded-full bg-[#d6a84f]/15 blur-3xl" />
      <div className={`relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.82fr] ${gridClassName}`}>
        <div className="animate-fade-up">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">{eyebrow}</p>
          <h1 className={`mt-5 max-w-4xl text-4xl font-extrabold leading-[1.06] tracking-tight text-navy sm:text-5xl lg:text-6xl ${titleClassName}`}>
            {title}
          </h1>
          <div className="mt-6 max-w-[38rem] text-lg leading-8 text-slate-600">{children}</div>
          {actions ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div> : null}
          {trustCards ? (
            <div className="mt-7 flex max-w-[42rem] flex-wrap gap-3">
              {trustCards.map((item) => (
                <div
                  key={item}
                  className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-extrabold leading-5 text-navy shadow-[0_10px_28px_rgba(18,49,92,0.08)] backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          ) : null}
          {afterTrust}
        </div>
        {panel}
      </div>
      {after}
    </section>
  );
}

export function PrimaryLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-7 py-4 font-bold text-white shadow-[0_14px_34px_rgba(20,143,139,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#117c78] hover:shadow-[0_18px_42px_rgba(20,143,139,0.30)]"
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

export function SecondaryLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-7 py-4 font-bold text-navy shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-teal hover:text-teal hover:shadow-md"
    >
      {children}
    </Link>
  );
}

export function SectionIntro({ eyebrow, title, children }) {
  return (
    <div className="max-w-[48rem]">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {children ? <p className="mt-4 max-w-[42rem] leading-7 text-slate-600">{children}</p> : null}
    </div>
  );
}

export function ServiceCard({ service }) {
  const href = service.slug ? `/services/${service.slug}` : null;
  const body = (
    <>
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
        {href ? (
          <span className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.18em] text-teal transition group-hover:text-[#117c78]">
            Learn more
            <ArrowIcon />
          </span>
        ) : null}
      </div>
    </>
  );

  const baseClasses =
    "group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_16px_50px_rgba(18,49,92,0.08)] transition duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_24px_70px_rgba(18,49,92,0.14)]";

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/40`}>
        {body}
      </Link>
    );
  }

  return <article className={baseClasses}>{body}</article>;
}

export function ComplianceNote({ className = "" }) {
  return (
    <p className={`rounded-2xl border border-teal/20 bg-mist p-5 text-sm font-semibold leading-6 text-ink shadow-[0_12px_36px_rgba(20,143,139,0.08)] ${className}`}>
      Services are provided based on eligibility, waiver enrollment, service
      authorization, and applicable program requirements.
    </p>
  );
}

export function StepCard({ step, title, body, accent = "teal" }) {
  return (
    <article className="group relative flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-[0_12px_36px_rgba(18,49,92,0.06)] transition duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_22px_56px_rgba(18,49,92,0.14)]">
      <span className={`inline-flex w-fit items-center justify-center rounded-full bg-${accent}/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-${accent}`}>
        Step {step}
      </span>
      <h3 className="mt-5 text-xl font-extrabold leading-snug text-navy">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{body}</p>
    </article>
  );
}

export function CountyCard({ name }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/[0.08] px-5 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur">
      <span className="grid size-9 place-items-center rounded-full bg-teal/30 text-white">
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z" />
          <circle cx="12" cy="10" r="2.4" strokeLinecap="round" />
        </svg>
      </span>
      {name}
    </div>
  );
}

export function ExclusionsStrip({ items, className = "" }) {
  return (
    <section
      className={`rounded-[1.75rem] border border-[#d6a84f]/30 bg-gradient-to-br from-[#fff8eb] to-white p-6 sm:p-8 ${className}`}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#a07a25]">
            What we do not provide
          </p>
          <h3 className="mt-3 text-2xl font-extrabold leading-snug text-navy">
            We are a non-medical waiver provider.
          </h3>
          <p className="mt-3 leading-7 text-slate-600">
            TAGA’S COMPASSIONATE CARE LLC supports daily living, home assistance,
            and approved transportation. We do not offer medical, clinical, or
            emergency services.
          </p>
        </div>
        <ul className="grid w-full max-w-xl gap-2 text-sm font-semibold text-navy sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-xl bg-white/80 px-3 py-2 shadow-[0_6px_18px_rgba(160,122,37,0.08)]"
            >
              <svg
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 flex-none text-[#a07a25]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServicePreviewTile({ service, href }) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white shadow-[0_14px_38px_rgba(18,49,92,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(18,49,92,0.20)]"
    >
      {service.image ? (
        <div className="relative h-32 overflow-hidden">
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />
        </div>
      ) : null}
      <div className="bg-white p-4">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal">
          {service.eyebrow}
        </p>
        <p className="mt-1.5 text-sm font-extrabold leading-5 text-navy">
          {service.shortTitle || service.title}
        </p>
      </div>
    </Link>
  );
}

export function TrustStrip() {
  return (
    <div className="bg-navy px-5 py-6 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 text-sm font-bold leading-6 text-white sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3">
          Indiana Medicaid Waiver Certified Provider
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3">
          Serving Hendricks, Johnson, Marion, and Morgan Counties
        </div>
      </div>
    </div>
  );
}
