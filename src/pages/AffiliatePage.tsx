import { ContactForm } from '../components/ContactForm';
import { PageMeta } from '../components/PageMeta';

export function AffiliatePage() {
  return (
    <>
      <PageMeta
        title="Affiliate"
        description="Future RC50labs affiliate program interest page with compliance-first framing."
      />
      <section className="bg-ink px-4 py-16 text-white lg:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyanmark">
            Affiliate
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Affiliate program interest.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
            A future partner program can be evaluated around compliant research-use positioning
            and approved communications.
          </p>
        </div>
      </section>
      <section className="px-4 py-12 lg:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-md border border-marine/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-ink">Compliance-led partnerships.</h2>
            <p className="mt-4 text-sm leading-6 text-marine/72">
              Affiliate materials should avoid medical, human-use, therapeutic, body-composition,
              or disease-related claims. Partner review workflows can be added before launch.
            </p>
          </aside>
          <ContactForm type="affiliate" />
        </div>
      </section>
    </>
  );
}
