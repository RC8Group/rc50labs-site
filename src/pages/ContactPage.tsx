import { ContactForm } from '../components/ContactForm';
import { PageMeta } from '../components/PageMeta';

export function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact"
        description="Contact RC50labs for research-use-only catalog and documentation inquiries."
      />
      <section className="bg-ink px-4 py-16 text-white lg:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyanmark">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Support for catalog inquiries.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
            Send questions about documentation, availability placeholders, or future account workflows.
          </p>
        </div>
      </section>
      <section className="px-4 py-12 lg:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-md border border-marine/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-ink">Support expectations.</h2>
            <p className="mt-4 text-sm leading-6 text-marine/72">
              Support is limited to catalog, documentation, fulfillment, and account-related topics.
              RC50labs does not provide human-use guidance.
            </p>
            <p className="mt-4 text-sm font-semibold text-marine">
              Products are intended for laboratory research use only.
            </p>
          </aside>
          <ContactForm type="contact" />
        </div>
      </section>
    </>
  );
}
