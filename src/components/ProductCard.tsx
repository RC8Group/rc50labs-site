import { Link } from 'react-router-dom';
import { Product, categoryLabels } from '../data/products';
import { ProductImage } from './ProductImage';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-md border border-marine/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <ProductImage product={product} />
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-marine/55">
            {categoryLabels[product.category]}
          </span>
          {product.badge && (
            <span className="rounded-full bg-cyanmark/12 px-3 py-1 text-xs font-semibold text-marine">
              {product.badge}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-ink">{product.name}</h3>
        <p className="mt-3 min-h-12 text-sm leading-6 text-marine/72">{product.overview}</p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="text-sm font-semibold text-ink">{product.priceLabel}</span>
          <Link
            to={`/product/${product.slug}`}
            className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-marine"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
