import { Link } from 'react-router-dom';
import { ClipboardCheck, FileText, PackageCheck, TestTube2 } from 'lucide-react';
import { CategoryCard } from '../components/CategoryCard';
import { ComplianceBanner } from '../components/ComplianceBanner';
import { NewsletterSignup } from '../components/NewsletterSignup';
import { PageMeta } from '../components/PageMeta';
import { ProductGrid } from '../components/ProductGrid';
import { categories, featuredProducts, newArrivals } from '../data/products';

const trustCards = [
  {
    title: 'Independent Quality Testing',
    description: 'Built to support third-party documentation workflows and batch-level record keeping.',
    icon: TestTube2,
  },
  {
    title: 'Research-Focused Support',
    description: 'Procurement-oriented support language for qualified research organizations.',
    icon: ClipboardCheck,
  },
  {
    title: 'Fast, Tracked Fulfillment',
    description: 'Frontend structure prepared for tracked shipment updates after backend integration.',
    icon: PackageCheck,
  },
  {
    title: 'Clear Documentation',
    description: 'Product templates include room for COA and documentation attachments.',
    icon: FileText,
  },
];

export function HomePage() {
  return (
    <>
      <PageMeta
        title="RC50labs"
        description="RC50labs storefront framework for research-use-only catalog browsing and qualified laboratory procurement."
      />
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-ink text-white">
        <img
          src="/images/rc50labs-lab-hero.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-mask absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-24 lg:min-h-[calc(100vh-5rem)] lg:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyanmark">
              Research-use-only catalog
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              RC50labs
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              Premium storefront framing for qualified research procurement, documentation review,
              and future ecommerce integration.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/shop"
                className="rounded-md bg-cyanmark px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"
              >
                Shop All
              </Link>
              <Link
                to="/research-use-disclaimer"
                className="rounded-md border border-white/22 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyanmark hover:text-cyanmark"
              >
                Research Use Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ComplianceBanner />

      <section className="px-4 py-16 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyanmark">
                Catalog categories
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
                Organized for research procurement.
              </h2>
            </div>
            <Link to="/shop" className="text-sm font-semibold text-marine transition hover:text-cyanmark">
              View full catalog
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyanmark">
              Why researchers choose RC50labs
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
              Built around documentation, clarity, and careful language.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="rounded-md border border-marine/10 bg-mist/40 p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-ink text-cyanmark">
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-marine/70">{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyanmark">
              Best-selling placeholders
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
              Featured research catalog entries.
            </h2>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <section className="bg-white px-4 py-16 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyanmark">
              New arrivals
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
              Fresh placeholders for launch testing.
            </h2>
          </div>
          <ProductGrid products={newArrivals} />
        </div>
      </section>

      <section className="px-4 py-16 lg:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-md border border-marine/10 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyanmark">
              About RC50labs
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
              A careful foundation for a research-focused storefront.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-marine/75">
            <p>
              RC50labs is structured as a modern catalog and inquiry experience for qualified
              research purchasers. The launch scaffold emphasizes clear category paths,
              documentation readiness, and restrained compliance copy.
            </p>
            <p>
              Product data, checkout, inventory, payment, and fulfillment systems can be connected
              later without changing the public-facing compliance posture established here.
            </p>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
