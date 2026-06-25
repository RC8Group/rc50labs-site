import { useMemo, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { ComplianceBanner } from '../components/ComplianceBanner';
import { PageMeta } from '../components/PageMeta';
import { ProductGrid } from '../components/ProductGrid';
import { ProductCategory, categoryLabels, products } from '../data/products';

type FilterValue = ProductCategory | 'all';

const filters: Array<{ value: FilterValue; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'peptides', label: 'Peptides' },
  { value: 'aminos', label: 'Aminos' },
  { value: 'sprays', label: 'Sprays' },
  { value: 'liquids', label: 'Liquids' },
];

export function ShopPage() {
  const [filter, setFilter] = useState<FilterValue>('all');

  const visibleProducts = useMemo(() => {
    return filter === 'all' ? products : products.filter((product) => product.category === filter);
  }, [filter]);

  return (
    <>
      <PageMeta
        title="Shop All"
        description="Browse RC50labs placeholder research-use catalog entries by category."
      />
      <section className="bg-ink px-4 py-16 text-white lg:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyanmark">
            Shop all
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Research catalog placeholders.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
            Browse static product data prepared for future ecommerce, inventory, and documentation
            integrations.
          </p>
        </div>
      </section>
      <ComplianceBanner compact />
      <section className="px-4 py-10 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 rounded-md border border-marine/10 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3 text-marine">
              <SlidersHorizontal aria-hidden="true" size={20} className="text-cyanmark" />
              <span className="text-sm font-semibold">Filter catalog</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setFilter(item.value)}
                  className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                    filter === item.value
                      ? 'bg-ink text-white'
                      : 'border border-marine/12 text-marine hover:border-cyanmark hover:text-ink'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <label className="flex items-center gap-3 text-sm font-semibold text-marine">
              Sort
              <select className="h-10 rounded-md border border-marine/15 bg-white px-3 text-sm">
                <option>Featured first</option>
                <option>Newest first</option>
                <option>Category A-Z</option>
              </select>
            </label>
          </div>
          {filter !== 'all' && (
            <p className="mb-5 text-sm text-marine/70">
              Showing {categoryLabels[filter]} research-use placeholders.
            </p>
          )}
          <ProductGrid products={visibleProducts} />
        </div>
      </section>
    </>
  );
}
