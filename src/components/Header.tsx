import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Search, ShoppingCart, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Shop All', href: '/shop' },
  { label: 'Peptides', href: '/category/peptides' },
  { label: 'Aminos', href: '/category/aminos' },
  { label: 'Sprays', href: '/category/sprays' },
  { label: 'Wholesale', href: '/wholesale' },
  { label: 'Affiliate', href: '/affiliate' },
  { label: 'Contact', href: '/contact' },
];

function navClass({ isActive }: { isActive: boolean }) {
  return `rounded-md px-3 py-2 text-sm font-medium transition ${
    isActive ? 'bg-cyanmark/15 text-cyanmark' : 'text-white/82 hover:bg-white/10 hover:text-white'
  }`;
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 lg:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-md border border-cyanmark/40 bg-cyanmark/10 text-sm font-bold text-cyanmark">
            R50
          </span>
          <span className="text-xl font-semibold tracking-wide">RC50labs</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto hidden w-full max-w-xs items-center rounded-md border border-white/12 bg-white/8 px-3 py-2 lg:flex">
          <Search aria-hidden="true" size={18} className="text-cyanmark" />
          <label htmlFor="site-search" className="sr-only">
            Search products
          </label>
          <input
            id="site-search"
            type="search"
            placeholder="Search catalog"
            className="w-full bg-transparent px-3 text-sm text-white placeholder:text-white/52 outline-none"
          />
        </div>

        <button
          type="button"
          aria-label="Cart placeholder"
          className="grid h-10 w-10 place-items-center rounded-md border border-white/12 bg-white/8 text-white transition hover:border-cyanmark/70 hover:text-cyanmark"
        >
          <ShoppingCart aria-hidden="true" size={19} />
        </button>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-md border border-white/12 bg-white/8 text-white transition hover:border-cyanmark/70 lg:hidden"
        >
          {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-ink px-4 pb-5 lg:hidden">
          <div className="mb-3 flex items-center rounded-md border border-white/12 bg-white/8 px-3 py-2">
            <Search aria-hidden="true" size={18} className="text-cyanmark" />
            <label htmlFor="mobile-site-search" className="sr-only">
              Search products
            </label>
            <input
              id="mobile-site-search"
              type="search"
              placeholder="Search catalog"
              className="w-full bg-transparent px-3 text-sm text-white placeholder:text-white/52 outline-none"
            />
          </div>
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className={navClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
