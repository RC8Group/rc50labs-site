import { ReactNode, useMemo, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

const ACCEPTED_KEY = 'rc50labs.ageGate.accepted';
const DENIED_KEY = 'rc50labs.ageGate.denied';

type GateStatus = 'accepted' | 'denied' | 'pending';

type AgeGateProps = {
  children: ReactNode;
};

function getInitialStatus(): GateStatus {
  if (typeof window === 'undefined') {
    return 'pending';
  }

  if (window.localStorage.getItem(ACCEPTED_KEY) === 'true') {
    return 'accepted';
  }

  if (window.sessionStorage.getItem(DENIED_KEY) === 'true') {
    return 'denied';
  }

  return 'pending';
}

export function AgeGate({ children }: AgeGateProps) {
  const [status, setStatus] = useState<GateStatus>(getInitialStatus);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const accept = () => {
    window.localStorage.setItem(ACCEPTED_KEY, 'true');
    window.sessionStorage.removeItem(DENIED_KEY);
    setStatus('accepted');
  };

  const deny = () => {
    window.sessionStorage.setItem(DENIED_KEY, 'true');
    setStatus('denied');
  };

  if (status === 'accepted') {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-ink px-4 py-8 text-white">
      <div className="absolute inset-0 molecule-pattern opacity-30" aria-hidden="true" />
      <section
        aria-labelledby="age-gate-title"
        aria-modal="true"
        role="dialog"
        className="relative w-full max-w-2xl overflow-hidden rounded-lg border border-white/15 bg-white p-6 text-ink shadow-soft sm:p-8"
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-cyanmark">
            <ShieldCheck aria-hidden="true" size={24} />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-marine/70">
              RC50labs
            </p>
            <h1 id="age-gate-title" className="text-2xl font-semibold text-ink sm:text-3xl">
              Are you 21 years of age or older?
            </h1>
          </div>
        </div>

        {status === 'denied' ? (
          <div className="rounded-md border border-caution/35 bg-caution/10 p-5">
            <h2 className="text-xl font-semibold">Access restricted.</h2>
            <p className="mt-3 text-sm leading-6 text-marine">
              This site is limited to visitors who confirm they are 21 years of age or older
              and understand that products and information are intended for qualified
              research use only.
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-3 text-base leading-7 text-marine">
              <p>Products and information on this site are intended for qualified research use only.</p>
              <p className="font-semibold text-ink">Not for human consumption.</p>
              <p>These statements have not been evaluated by the FDA.</p>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={accept}
                className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-marine"
              >
                Yes, I am 21+
              </button>
              <button
                type="button"
                onClick={deny}
                className="rounded-md border border-marine/20 px-5 py-3 text-sm font-semibold text-ink transition hover:border-caution hover:bg-caution/10"
              >
                No
              </button>
            </div>
          </>
        )}

        <p className="mt-6 text-xs leading-5 text-marine/70">
          Acceptance is stored locally for this browser. Copyright {currentYear} RC50labs.
        </p>
      </section>
    </div>
  );
}
