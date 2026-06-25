import { FormEvent, useState } from 'react';

type ContactFormProps = {
  type: 'contact' | 'wholesale' | 'affiliate';
};

const config = {
  contact: {
    title: 'Contact RC50labs',
    button: 'Send Message',
    fields: ['Name', 'Email', 'Message'],
  },
  wholesale: {
    title: 'Wholesale Inquiry',
    button: 'Submit Inquiry',
    fields: ['Name', 'Email', 'Organization/Lab', 'Estimated monthly volume', 'Message'],
  },
  affiliate: {
    title: 'Affiliate Program Interest',
    button: 'Submit Interest',
    fields: ['Name', 'Email', 'Website or channel', 'Message'],
  },
} satisfies Record<ContactFormProps['type'], { title: string; button: string; fields: string[] }>;

export function ContactForm({ type }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const selected = config[type];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-md border border-marine/10 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-2xl font-semibold text-ink">{selected.title}</h2>
      <div className="mt-6 grid gap-4">
        {selected.fields.map((field) => {
          const id = `${type}-${field.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
          const isMessage = field === 'Message';

          return (
            <div key={field}>
              <label htmlFor={id} className="text-sm font-semibold text-marine">
                {field}
              </label>
              {isMessage ? (
                <textarea
                  id={id}
                  required
                  rows={5}
                  className="mt-2 w-full rounded-md border border-marine/15 bg-white px-3 py-3 text-sm outline-none transition focus:border-cyanmark"
                />
              ) : (
                <input
                  id={id}
                  required
                  type={field === 'Email' ? 'email' : 'text'}
                  className="mt-2 h-12 w-full rounded-md border border-marine/15 bg-white px-3 text-sm outline-none transition focus:border-cyanmark"
                />
              )}
            </div>
          );
        })}
      </div>
      <button
        type="submit"
        className="mt-6 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-marine"
      >
        {selected.button}
      </button>
      {submitted && (
        <p className="mt-4 rounded-md bg-cyanmark/10 px-4 py-3 text-sm text-marine">
          Submission placeholder received. A connected form backend can be added before launch.
        </p>
      )}
    </form>
  );
}
