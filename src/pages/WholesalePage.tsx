import { ContactForm } from '../components/ContactForm';
import { PageMeta } from '../components/PageMeta';

export function WholesalePage() {
  return (
    <>
      <PageMeta
        title="Wholesale"
        description="Wholesale inquiry page for qualified RC50labs research-use procurement."
      />
      <section className="bg-ink px-4 py-16 text-white lg:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyanmark">
            Wholesale
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Inquiry-based procurement.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
            Wholesale availability is subject to verification, documentation review, and operational approval.
          </p>
        </div>
      </section>
      <section className="px-4 py-12 lg:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-md border border-marine/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-ink">Verification-first access.</h2>
            <p className="mt-4 text-sm leading-6 text-marine/72">
              Wholesale availability is limited to qualified organizations and may require additional
              documentation before any catalog or ordering access is enabled.
            </p>
            <p className="mt-4 text-sm font-semibold text-marine">
              Products remain research-use-only and are not for human consumption.
            </p>
          </aside>
          <ContactForm type="wholesale" />
        </div>
      </section>
    </>
  );
}
