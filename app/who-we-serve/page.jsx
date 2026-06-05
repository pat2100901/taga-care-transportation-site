import {
  CheckIcon,
  ComplianceNote,
  PageHero,
  PrimaryLink,
  SecondaryLink,
  SectionIntro,
} from "../_components/site";
import { commonSituations, waiverPrograms } from "../_data/site";

const counties = [
  "Hendricks County",
  "Johnson County",
  "Marion County",
  "Morgan County",
];

export default function WhoWeServePage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="Who We Serve"
        title="Support for eligible Indiana waiver participants and families."
        gridClassName="lg:items-center lg:py-20"
        actions={
          <>
            <PrimaryLink href="/contact">Get Started</PrimaryLink>
            <SecondaryLink href="/services">View Services</SecondaryLink>
          </>
        }
        panel={
          <div className="rounded-[2rem] border border-teal/15 bg-white p-6 shadow-soft sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
              Service area
            </p>
            <h2 className="mt-4 text-2xl font-bold text-navy">
              Serving central Indiana communities.
            </h2>
            <div className="mt-5 grid gap-3">
              {counties.map((county) => (
                <div key={county} className="flex gap-3 rounded-2xl bg-mist p-4 text-slate-700">
                  <CheckIcon />
                  <span className="font-semibold">{county}</span>
                </div>
              ))}
            </div>
          </div>
        }
      >
        <p>
          We support eligible individuals and families participating in Indiana
          waiver programs, depending on eligibility, authorization, and program
          requirements.
        </p>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <SectionIntro
          eyebrow="Waiver Programs"
          title="Program participation depends on eligibility and authorization."
        >
          TAGA’S COMPASSIONATE CARE LLC may support eligible participants connected
          with the following Indiana waiver programs, when services are authorized
          and applicable requirements are met.
        </SectionIntro>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {waiverPrograms.map((program) => (
            <article key={program} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <CheckIcon />
              <h3 className="mt-4 text-2xl font-bold text-navy">{program}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Support may be available based on waiver enrollment, service
                authorization, and program requirements.
              </p>
            </article>
          ))}
        </div>
        <ComplianceNote className="mt-8" />
      </section>

      {/* Common situations */}
      <section className="bg-soft py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionIntro
            eyebrow="Common situations"
            title="Some of the moments families reach out."
          >
            Every household is different. These are a few common situations where
            our non-medical support and authorized transportation help daily life
            feel steadier.
          </SectionIntro>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {commonSituations.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_12px_36px_rgba(18,49,92,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-teal/30 hover:shadow-[0_22px_56px_rgba(18,49,92,0.12)] sm:p-7"
              >
                <CheckIcon />
                <h3 className="mt-4 text-xl font-extrabold leading-snug text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Local support */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="rounded-[2rem] bg-white p-6 shadow-[0_28px_80px_rgba(18,49,92,0.10)] sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">
            Local Support
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Helping daily life feel more supported and connected.
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-slate-600">
            The agency focuses on practical non-medical support for daily routines,
            home and community activities, and assisted or unassisted nonmedical
            transportation needs when authorized through the individual’s plan.
          </p>
        </div>
      </section>
    </main>
  );
}
