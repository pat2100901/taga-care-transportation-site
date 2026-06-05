import {
  CheckIcon,
  ComplianceNote,
  CountyCard,
  ExclusionsStrip,
  PageHero,
  PrimaryLink,
  SecondaryLink,
  SectionIntro,
  ServiceCard,
  ServicePreviewTile,
  StepCard,
} from "./_components/site";
import { business, exclusions, howItWorks, services } from "./_data/site";

const reasons = [
  "Indiana Medicaid Waiver Service Provider Certification",
  "Approved services kept clear: attendant care, home and community assistance, and nonmedical transportation",
  "Support for eligible participants in Hendricks, Johnson, Marion, and Morgan counties",
  "Careful communication around service needs, waiver status, authorization, and next steps",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="INDIANA MEDICAID WAIVER CERTIFIED PROVIDER"
        title={
          <>
            <span className="block">Compassionate Support</span>
            <span className="block">and Reliable Transportation</span>
            <span className="block">for Daily Life</span>
          </>
        }
        titleClassName="text-[1.85rem] sm:text-[2.4rem] lg:text-[2.7rem] xl:text-[2.95rem]"
        gridClassName="lg:items-start pt-6 pb-14 lg:pt-8 lg:pb-20"
        actions={
          <>
            <PrimaryLink href="/contact">Get Started</PrimaryLink>
            <SecondaryLink href="/services">View Services</SecondaryLink>
          </>
        }
        trustCards={[
          "Certified Provider",
          "Transportation Available",
          "Serving Hendricks, Johnson, Marion, and Morgan Counties",
        ]}
        after={null}
        afterTrust={
          <div className="mt-8 max-w-[42rem]">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-[0_28px_80px_rgba(18,49,92,0.16)]">
              <img
                src="/images/wheelchair-van.jpg"
                alt="TAGA’S Compassionate Care wheelchair-accessible van with a caregiver assisting a client down the deployed ramp"
                className="h-auto w-full object-cover"
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal shadow-[0_8px_24px_rgba(18,49,92,0.18)] backdrop-blur">
                <span className="size-1.5 rounded-full bg-teal" />
                Wheelchair-Accessible Boarding
              </span>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent p-4 pt-10">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white drop-shadow">
                  Assisted boarding · Mechanical lift · Unassisted rides
                </p>
              </div>
            </div>
          </div>
        }
        panel={
          <div className="animate-fade-up relative rounded-[2rem] border border-white/80 bg-gradient-to-br from-white via-white to-[#eef7f6] p-5 shadow-[0_38px_100px_rgba(18,49,92,0.18)] backdrop-blur lg:p-6">
            <div className="animate-soft-float pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-teal/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-8 left-6 h-28 w-28 rounded-full bg-[#d6a84f]/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] bg-navy/[0.04]">
              <img
                src="/images/taga-minivan-driver.jpg"
                alt="TAGA’S Compassionate Care branded van with a professional driver and a smiling client in the back seat"
                className="h-64 w-full object-cover sm:h-72 lg:h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent" />
              <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal shadow-[0_8px_24px_rgba(18,49,92,0.18)] backdrop-blur">
                <span className="size-1.5 rounded-full bg-teal" />
                Featured Support
              </span>
            </div>

            <div className="mt-3 flex items-start gap-4 rounded-[1.25rem] border border-teal/15 bg-white p-4 shadow-[0_8px_28px_rgba(18,49,92,0.06)] sm:p-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-teal/10 text-teal">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 14V8a2 2 0 0 1 2-2h9.2a2 2 0 0 1 1.55.74L20 10v4M4 14h16M4 14v3a1 1 0 0 0 1 1h1m14-4v3a1 1 0 0 1-1 1h-1m-12 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
                  />
                </svg>
              </span>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-teal">
                  Nonmedical Transportation
                </p>
                <p className="mt-1 text-sm font-semibold leading-5 text-navy">
                  Assisted and unassisted nonmedical rides in wheelchair-accessible
                  vans for approved appointments, errands, and essential destinations
                  when authorized through the individual’s plan.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-[1.5rem] bg-gradient-to-br from-mist to-white p-5 shadow-inner">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
                Certified provider
              </p>
              <h2 className="mt-3 text-xl font-bold leading-snug text-navy">
                {business.certification}
              </h2>
              <p className="mt-2 text-xs font-semibold text-slate-500">
                {business.certificationEffective}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Attendant Care",
                  "Home & Community Assistance",
                  "Nonmedical Transportation",
                ].map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-white px-4 py-2 text-sm font-bold text-navy shadow-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        }
      >
        <p>
          Attendant care, home and community assistance, and assisted or
          unassisted nonmedical transportation for eligible Indiana waiver
          participants across Hendricks, Johnson, Marion, and Morgan counties.
        </p>
      </PageHero>

      {/* Services at a Glance strip */}
      <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-8 lg:pt-14">
        <div className="grid gap-4 sm:grid-cols-3">
          {services.map((service) => (
            <ServicePreviewTile
              key={service.slug}
              service={service}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>
      </section>

      {/* Core Services */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <SectionIntro
          eyebrow="Core Services"
          title="Support for daily routines, community access, and planned transportation."
        >
          Services are kept clear and coordinated around the individual’s authorized
          plan, schedule, and communication needs.
        </SectionIntro>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        <ComplianceNote className="mt-8" />
      </section>

      {/* How it works */}
      <section className="bg-soft py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionIntro
            eyebrow="How it works"
            title="A calm, three-step start from first call to authorized support."
          >
            We move at the pace each family needs. No rushed intake, no pressure —
            just clear communication and waiver-aware coordination.
          </SectionIntro>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {howItWorks.map((item) => (
              <StepCard
                key={item.step}
                step={item.step}
                title={item.title}
                body={item.body}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why families call */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">
              Why Families Call
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              A warm local provider with waiver-aware communication.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              TAGA’S COMPASSIONATE CARE LLC focuses on respectful, non-medical
              support that helps daily life run more smoothly at home, in the
              community, and during authorized transportation needs.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <CheckIcon />
                <p className="mt-4 font-bold leading-7 text-navy">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counties served */}
      <section className="px-5 pb-16 sm:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-[#16315a] to-[#0f2545] p-8 text-white shadow-[0_38px_100px_rgba(18,49,92,0.25)] sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-teal">
                Service area
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Proudly serving four Central Indiana counties.
              </h2>
              <p className="mt-4 max-w-md leading-7 text-blue-100">
                Based in Central Indiana, TAGA’S COMPASSIONATE CARE LLC supports
                eligible waiver participants across the following counties.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {business.counties.map((county) => (
                <CountyCard key={county} name={county} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exclusions */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-20">
        <ExclusionsStrip items={exclusions} />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-20">
        <div className="rounded-[2rem] bg-navy px-6 py-12 text-center text-white sm:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">
            Get Started
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Looking for care support or transportation services?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-50">
            Contact TAGA’S COMPASSIONATE CARE LLC to discuss service needs,
            waiver status, and next steps.
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
