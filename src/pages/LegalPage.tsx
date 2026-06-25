import { PageMeta } from '../components/PageMeta';

type LegalPageKey = 'privacy' | 'terms' | 'research-use-disclaimer' | 'shipping-returns';

type LegalPageProps = {
  page: LegalPageKey;
};

const pages: Record<
  LegalPageKey,
  {
    title: string;
    description: string;
    sections: Array<{ heading: string; body: string }>;
  }
> = {
  privacy: {
    title: 'Privacy Policy',
    description: 'Starter privacy policy placeholder for the RC50labs website.',
    sections: [
      {
        heading: 'Overview',
        body: 'This starter privacy policy is a placeholder for launch planning. It should be reviewed and replaced with final language before collecting personal information.',
      },
      {
        heading: 'Information Collection',
        body: 'Future forms may collect contact details, organization information, and inquiry details submitted by users for support, wholesale, or affiliate review.',
      },
      {
        heading: 'Data Use',
        body: 'Submitted information may be used to respond to inquiries, evaluate account eligibility, maintain records, and improve site operations.',
      },
    ],
  },
  terms: {
    title: 'Terms and Conditions',
    description: 'Starter terms and conditions placeholder for RC50labs.',
    sections: [
      {
        heading: 'Site Access',
        body: 'Access is limited to visitors who confirm they are 21 years of age or older and understand the research-use-only nature of site content.',
      },
      {
        heading: 'Catalog Content',
        body: 'Product listings are placeholders for procurement review and do not provide dosing, preparation, administration, or human-use guidance.',
      },
      {
        heading: 'Future Transactions',
        body: 'Ordering, payment, fulfillment, and account verification terms should be added before any live ecommerce backend is enabled.',
      },
    ],
  },
  'research-use-disclaimer': {
    title: 'Research Use Disclaimer',
    description: 'Research-use-only disclaimer for RC50labs catalog content.',
    sections: [
      {
        heading: 'Research Use Only',
        body: 'Products and information on this site are intended for qualified laboratory research use only and are not for human consumption.',
      },
      {
        heading: 'No Medical Guidance',
        body: 'RC50labs does not provide medical, therapeutic, diagnostic, dosing, administration, or human-use instructions.',
      },
      {
        heading: 'FDA Statement',
        body: 'Statements on this site have not been evaluated by the U.S. Food and Drug Administration. Products are not intended to diagnose, treat, cure, or prevent any disease.',
      },
    ],
  },
  'shipping-returns': {
    title: 'Shipping & Returns',
    description: 'Starter shipping and returns placeholder for RC50labs.',
    sections: [
      {
        heading: 'Shipping',
        body: 'Shipping content is a placeholder. Future fulfillment details can include tracked shipment notices, carrier options, and handling policies.',
      },
      {
        heading: 'Returns',
        body: 'Return eligibility and issue-resolution workflows should be finalized before live commerce is enabled.',
      },
      {
        heading: 'Compliance',
        body: 'Availability, fulfillment, and account access may be subject to verification and research-use-only restrictions.',
      },
    ],
  },
};

export function LegalPage({ page }: LegalPageProps) {
  const content = pages[page];

  return (
    <>
      <PageMeta title={content.title} description={content.description} />
      <section className="bg-ink px-4 py-16 text-white lg:px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyanmark">
            RC50labs
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{content.title}</h1>
          <p className="mt-5 text-base leading-7 text-white/72">{content.description}</p>
        </div>
      </section>
      <section className="px-4 py-12 lg:px-6">
        <div className="mx-auto grid max-w-4xl gap-5">
          {content.sections.map((section) => (
            <article key={section.heading} className="rounded-md border border-marine/10 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-ink">{section.heading}</h2>
              <p className="mt-4 text-base leading-7 text-marine/75">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
