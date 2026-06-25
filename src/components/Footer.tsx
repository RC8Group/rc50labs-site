import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms and Conditions', href: '/terms' },
  { label: 'Research Use Disclaimer', href: '/research-use-disclaimer' },
  { label: 'Shipping & Returns', href: '/shipping-returns' },
  { label: 'Wholesale', href: '/wholesale' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1.2fr_1fr] lg:px-6">
        <div>
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-md border border-cyanmark/40 bg-cyanmark/10 text-sm font-bold text-cyanmark">
              R50
            </span>
            <span className="text-xl font-semibold tracking-wide">RC50labs</span>
          </Link>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-white/72">
            Products are intended for laboratory research use only. Not for human consumption.
            Statements on this site have not been evaluated by the U.S. Food and Drug
            Administration. Products are not intended to diagnose, treat, cure, or prevent
            any disease.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="grid gap-3 sm:grid-cols-2">
          {footerLinks.map((link) => (
            <Link key={link.href} to={link.href} className="text-sm text-white/72 transition hover:text-cyanmark">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/52">
        Copyright {new Date().getFullYear()} RC50labs. Research-use-only storefront scaffold.
      </div>
    </footer>
  );
}
