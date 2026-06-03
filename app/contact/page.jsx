import {
  ComplianceNote,
  PageHero,
  PrimaryLink,
  SecondaryLink,
  SectionIntro,
} from "../_components/site";
import { business } from "../_data/site";

const steps = [
  {
    title: "Share the need",
    text: "Describe the attendant care, home and community assistance, or transportation support being requested.",
  },
  {
    title: "Discuss waiver status",
    text: "Talk through waiver enrollment, service authorization, service area, and applicable program requirements.",
  },
  {
    title: "Coordinate next steps",
    text: "Plan clear communication for the individual, family, case manager, or referral partner.",
  },
];

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
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
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.5 12 14l9-5.5M3 7h18v10H3V7Z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="Contact"
        title="Looking for care support or transportation services?"
        gridClassName="lg:items-center lg:py-20"
        actions={
          <>
            <PrimaryLink href="/services">View Services</PrimaryLink>
            <SecondaryLink href="/who-we-serve">Who We Serve</SecondaryLink>
          </>
        }
        panel={
          <div className="rounded-[2rem] border border-teal/15 bg-white p-6 shadow-[0_28px_80px_rgba(18,49,92,0.16)] sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
              Contact details
            </p>
            <h2 className="mt-3 text-2xl font-bold text-navy">
              Direct lines for families and partners.
            </h2>
            <div className="mt-5 space-y-3">
              <a
                href={`tel:${business.phoneTel}`}
                className="flex items-center gap-4 rounded-2xl bg-mist p-4 text-navy shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="grid size-11 place-items-center rounded-full bg-white text-teal shadow-sm">
                  <PhoneIcon />
                </span>
                <span className="flex flex-col">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-teal">
                    Phone
                  </span>
                  <span className="text-lg font-extrabold leading-6">
                    {business.phone}
                  </span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl bg-mist p-4 text-navy">
                <span className="grid size-11 place-items-center rounded-full bg-white text-teal shadow-sm">
                  <MailIcon />
                </span>
                <span className="flex flex-col">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-teal">
                    Email
                  </span>
                  <span className="text-base font-extrabold leading-6">
                    {business.email}
                  </span>
                </span>
              </div>
            </div>
            <p className="mt-5 text-xs leading-5 text-slate-500">
              Email address will be added once confirmed. Phone line is live.
            </p>
          </div>
        }
      >
        <p>
          Contact {business.name} to discuss service needs, waiver status, and next steps.
        </p>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionIntro
            eyebrow="Get Started"
            title="A simple, referral-style conversation."
          >
            We keep the first conversation focused and clear — what is being
            requested, what is authorized, and what the next step looks like.
          </SectionIntro>
          <div className="grid gap-4 sm:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-[0_12px_36px_rgba(18,49,92,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-teal/30 hover:shadow-[0_22px_56px_rgba(18,49,92,0.12)]"
              >
                <span className="text-sm font-extrabold text-teal">0{index + 1}</span>
                <h3 className="mt-3 font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
        <ComplianceNote className="mt-10" />
      </section>
    </main>
  );
}
