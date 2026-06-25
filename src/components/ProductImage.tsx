import { Product } from '../data/products';

const accentClass: Record<Product['accent'], string> = {
  cyan: 'from-cyanmark/15 via-white to-cyanmark/35',
  leaf: 'from-leaf/15 via-white to-leaf/35',
  caution: 'from-caution/15 via-white to-caution/35',
  marine: 'from-marine/15 via-white to-marine/35',
};

export function ProductImage({ product }: { product: Product }) {
  return (
    <div
      className={`product-visual rounded-t-md bg-gradient-to-br ${accentClass[product.accent]}`}
      role="img"
      aria-label={`${product.name} placeholder product visual`}
    >
      <div className="absolute left-5 top-5 rounded-full border border-white/65 bg-white/45 px-3 py-1 text-xs font-semibold text-marine/75">
        Research
      </div>
      <div className="absolute bottom-5 left-5 h-10 w-28 rounded-full border border-white/70 bg-white/35" />
      <div className="absolute bottom-10 left-12 h-4 w-44 rotate-[-18deg] rounded-full bg-white/25" />
    </div>
  );
}
