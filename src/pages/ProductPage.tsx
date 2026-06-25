import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, FileText, ShoppingCart } from 'lucide-react';
import { ComplianceBanner } from '../components/ComplianceBanner';
import { PageMeta } from '../components/PageMeta';
import { ProductImage } from '../components/ProductImage';
import { ProductGrid } from '../components/ProductGrid';
import { categoryLabels, products } from '../data/products';

export function ProductPage() {
  const { slug } = useParams();
  const [cartMessage, setCartMessage] = useState(false);
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <section className="px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-3xl rounded-md border border-marine/10 bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-semibold text-ink">Product not found.</h1>
          <Link to="/shop" className="mt-6 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white">
            Return to Shop
          </Link>
        </div>
      </section>
    );
  }

  const related = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 4);

  return (
    <>
      <PageMeta
        title={product.name}
        description={`${product.name} placeholder product detail page for research-use-only catalog structure.`}
      />
      <section className="px-4 py-10 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-marine hover:text-cyanmark">
            <ArrowLeft aria-hidden="true" size={18} />
            Shop All
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="overflow-hidden rounded-md border border-marine/10 bg-white shadow-sm">
              <ProductImage product={product} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyanmark">
                {categoryLabels[product.category]}
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-ink sm:text-5xl">{product.name}</h1>
              <p className="mt-4 text-xl font-semibold text-marine">{product.priceLabel}</p>
              <div className="mt-6 rounded-md border border-caution/30 bg-caution/10 p-4 text-sm leading-6 text-marine">
                <strong className="text-ink">Research-use disclaimer:</strong> This item is intended
                for laboratory research use only. Not for human consumption. No preparation,
                administration, or outcome guidance is provided.
              </div>
              <div className="mt-7 space-y-4 text-base leading-7 text-marine/75">
                <p>{product.overview}</p>
                <p>{product.detail}</p>
              </div>
              <div className="mt-7 rounded-md border border-marine/10 bg-white p-4">
                <div className="flex items-start gap-3">
                  <FileText aria-hidden="true" size={22} className="mt-1 text-cyanmark" />
                  <div>
                    <h2 className="font-semibold text-ink">Documentation / COA available upon request</h2>
                    <p className="mt-2 text-sm leading-6 text-marine/70">
                      This placeholder reserves space for future lot documentation, certificate
                      attachments, and verification workflows.
                    </p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setCartMessage(true)}
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-marine"
              >
                <ShoppingCart aria-hidden="true" size={18} />
                Add to Cart
              </button>
              {cartMessage && (
                <p className="mt-4 rounded-md bg-cyanmark/10 px-4 py-3 text-sm text-marine">
                  Cart placeholder active. Checkout and payment integrations are intentionally not connected.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      <ComplianceBanner compact />
      <section className="px-4 py-14 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-2xl font-semibold text-ink">Related placeholders</h2>
          <ProductGrid products={related} />
        </div>
      </section>
    </>
  );
}
