import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ComplianceBanner } from '../components/ComplianceBanner';
import { PageMeta } from '../components/PageMeta';
import { ProductGrid } from '../components/ProductGrid';
import { ProductCategory, categoryLabels, products } from '../data/products';

const allowedCategories = ['peptides', 'aminos', 'sprays', 'liquids'] as const;

function isCategory(value: string | undefined): value is ProductCategory {
  return allowedCategories.includes(value as ProductCategory);
}

export function CategoryPage() {
  const { categorySlug } = useParams();

  if (!isCategory(categorySlug)) {
    return (
      <section className="px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-3xl rounded-md border border-marine/10 bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-semibold text-ink">Category not found.</h1>
          <Link to="/shop" className="mt-6 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white">
            Return to Shop
          </Link>
        </div>
      </section>
    );
  }

  const categoryProducts = products.filter((product) => product.category === categorySlug);
  const label = categoryLabels[categorySlug];

  return (
    <>
      <PageMeta
        title={label}
        description={`${label} placeholder catalog entries for research-use-only procurement review.`}
      />
      <section className="bg-ink px-4 py-16 text-white lg:px-6">
        <div className="mx-auto max-w-7xl">
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-cyanmark">
            <ArrowLeft aria-hidden="true" size={18} />
            Shop All
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-cyanmark">
            Category
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{label}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
            Static research-use placeholder entries organized for a future ecommerce backend.
          </p>
        </div>
      </section>
      <ComplianceBanner compact />
      <section className="px-4 py-12 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <ProductGrid products={categoryProducts} />
        </div>
      </section>
    </>
  );
}
