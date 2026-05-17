const navItems = [
  { label: "Services", href: "#services" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const careServices = [
  "Personal care support and daily assistance",
  "Companion support and routine check-ins",
  "Meal, hygiene, and household routine reminders",
  "Family and referral communication",
];

const transportationServices = [
  "Transportation to appointments and errands",
  "Community access for activities and visits",
  "Door-to-door support before and after rides",
  "Clear scheduling communication",
];

const audiences = [
  "Older adults who need dependable daily support",
  "Individuals who benefit from companion support",
  "Families coordinating care and transportation",
  "Referral partners seeking reliable non-medical help",
];

const reasons = [
  "Warm, respectful personal support",
  "Care and transportation planned as separate, coordinated services",
  "Reliable communication with families and referral partners",
  "Simple next steps with placeholders ready for local details",
];

function ArrowIcon() {
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

function CheckIcon() {
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

function ServiceCard({ title, eyebrow, children, items }) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">{eyebrow}</p>
      <h3 className="mt-3 text-2xl font-bold text-navy">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{children}</p>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-slate-700">
            <CheckIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="text-lg font-extrabold tracking-tight text-navy">
            [Business Name]
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-teal">
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-ink"
          >
            Get Started
            <ArrowIcon />
          </a>
        </nav>
      </header>

      <section id="top" className="relative overflow-hidden bg-gradient-to-b from-soft to-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.86fr] lg:items-center lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">
              Non-medical support in [Service Area]
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Compassionate Care Support and Reliable Transportation
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Non-medical support and dependable transportation services that help
              individuals stay safe, supported, and connected.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-4 font-bold text-white shadow-sm transition hover:bg-[#117c78]"
              >
                Contact Us
                <ArrowIcon />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-4 font-bold text-navy transition hover:border-teal hover:text-teal"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-teal/15 bg-white p-5 shadow-soft">
            <div className="rounded-[1.5rem] bg-mist p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal text-2xl text-white">
                    +
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-navy">Care Support</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Personal assistance, companion support, daily routines, and family communication.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-2xl text-white">
                    →
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-navy">Transportation</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Dependable rides for appointments, errands, activities, and community access.
                  </p>
                </div>
              </div>
              <div className="mt-5 rounded-2xl bg-white p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">
                  Coordinated together
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-teal" />
                  <span className="h-px flex-1 bg-slate-200" />
                  <span className="h-3 w-3 rounded-full bg-navy" />
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Support before, during, and after the day’s plans so care needs and ride details stay clear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Services</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Two distinct services, one dependable support plan.
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Care support and transportation are kept clear and separate, then coordinated around each person’s routine, schedule, and communication needs.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ServiceCard title="Care Support" eyebrow="Non-medical personal assistance" items={careServices}>
            Daily assistance designed to help individuals feel comfortable, respected, and supported at home and in the community.
          </ServiceCard>
          <ServiceCard title="Transportation Services" eyebrow="Reliable ride support" items={transportationServices}>
            Dependable transportation support for planned appointments, errands, activities, and community access.
          </ServiceCard>
        </div>
      </section>

      <section id="who-we-serve" className="bg-soft py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Who We Serve</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Support for people who need a steady hand with daily life.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map((audience) => (
                <div key={audience} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex gap-3">
                    <CheckIcon />
                    <p className="font-semibold leading-7 text-slate-700">{audience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] bg-navy p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Why Choose Us</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Built around trust, routine, and clear communication.
            </h2>
            <p className="mt-5 leading-7 text-blue-50">
              [Business Name] focuses on practical, non-medical support that helps each day run more smoothly, from personal assistance to transportation details.
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

      <section className="bg-mist py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 rounded-[2rem] bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[0.8fr_1fr] lg:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Get Started</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                A simple path to the right support.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Share the need", "Confirm services", "Coordinate support"].map((step, index) => (
                <div key={step} className="rounded-2xl border border-slate-200 p-5">
                  <span className="text-sm font-extrabold text-teal">0{index + 1}</span>
                  <h3 className="mt-3 font-bold text-navy">{step}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {index === 0 && "Tell us about the daily assistance or transportation support needed."}
                    {index === 1 && "We clarify non-medical support needs, ride details, and service area fit."}
                    {index === 2 && "We plan clear communication for the individual, family, or referral partner."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="rounded-[2rem] bg-navy px-6 py-12 text-center text-white sm:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">Contact</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to discuss care support or transportation needs?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-50">
            Reach out to [Business Name] to talk through non-medical support, transportation services, and availability in [Service Area].
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm font-semibold sm:flex-row">
            <span className="rounded-full bg-white/10 px-5 py-3">[Phone Number]</span>
            <span className="rounded-full bg-white/10 px-5 py-3">[Email Address]</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p className="font-bold text-navy">[Business Name]</p>
          <p>Non-medical care support and transportation services in [Service Area].</p>
        </div>
      </footer>
    </main>
  );
}
