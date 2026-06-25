import { FormEvent, useState } from 'react';
import { Mail } from 'lucide-react';

export function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-ink px-4 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.1fr] lg:px-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyanmark">
            Documentation updates
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Stay aligned with catalog releases.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/72">
            Receive future availability notices, documentation updates, and procurement announcements.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row lg:self-end">
          <div className="flex min-h-12 flex-1 items-center rounded-md border border-white/14 bg-white/8 px-3">
            <Mail aria-hidden="true" size={18} className="text-cyanmark" />
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="research@example.com"
              className="w-full bg-transparent px-3 text-sm text-white placeholder:text-white/48 outline-none"
            />
          </div>
          <button
            type="submit"
            className="min-h-12 rounded-md bg-cyanmark px-5 text-sm font-semibold text-ink transition hover:bg-white"
          >
            Join List
          </button>
          {submitted && (
            <p className="text-sm text-white/72 sm:self-center">Signup placeholder saved for UI testing.</p>
          )}
        </form>
      </div>
    </section>
  );
}
