import {
  CheckIcon,
  ComplianceNote,
  PageHero,
  PrimaryLink,
  SecondaryLink,
  SectionIntro,
  StepCard,
} from "../_components/site";
import { approach, business } from "../_data/site";

const values = [
  "Compassionate, respectful support",
  "Clear communication with families and referral partners",
  "Dependable help with daily routines and community access",
  "A careful approach to waiver authorization and program requirements",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="About TAGA’S COMPASSIONATE CARE LLC"
        title="Warm, dependable support for daily life in the community."
        gridClassName="lg:items-center lg:py-20"
        actions={
          <>
            <PrimaryLink href="/contact">Get Started</PrimaryLink>
            <SecondaryLink href="/services">View Services</SecondaryLink>
          </>
        }
        panel={
          <div className="rounded-[2rem] border border-teal/15 bg-white p-6 shadow-[0_28px_80px_rgba(18,49,92,0.16)] sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
              Provider focus
            </p>
            <h2 className="mt-4 text-2xl font-bold text-navy">
              Respect, dignity, routine, and connection.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              The agency is built around steady non-medical support that helps
              people remain supported at home and connected to daily community life.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { label: "Provider type", value: "Non-medical" },
                { label: "Style of support", value: "One-on-one" },
                { label: "Service area", value: "4 Indiana counties" },
                { label: "Certification", value: business.certificationEffective },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-mist/40 px-4 py-3"
                >
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-extrabold leading-5 text-navy">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        }
      >
        <p>
          {business.name} is an Indiana Medicaid Waiver certified provider focused
          on compassionate support, dependable transportation, and clear
          communication for eligible waiver participants and families.
        </p>
      </PageHero>

      {/* Our approach: 4 steps */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <SectionIntro
          eyebrow="Our approach"
          title="A calm, four-step rhythm shaped around the individual."
        >
          The same warm tone every visit — at home, in the community, and
          during authorized transportation.
        </SectionIntro>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {approach.map((item, i) => (
            <StepCard
              key={item.step}
              step={String(i + 1).padStart(2, "0")}
              title={item.step}
              body={item.body}
            />
          ))}
        </div>
      </section>

      {/* What guides us */}
      <section className="bg-soft py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionIntro
              eyebrow="What guides us"
              title="Simple, sincere support without clinical or emergency care language."
            >
              TAGA’S COMPASSIONATE CARE LLC keeps the focus on practical daily
              assistance, community access, and transportation support when authorized
              through the individual’s plan.
            </SectionIntro>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <CheckIcon />
                  <p className="mt-4 font-bold leading-7 text-navy">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <ComplianceNote className="mt-10" />
        </div>
      </section>
    </main>
  );
}
