import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/products';

type Category = (typeof categories)[number];

const toneClass: Record<Category['imageTone'], string> = {
  cool: 'from-cyanmark/20 via-white to-marine/18',
  green: 'from-leaf/20 via-white to-cyanmark/16',
  amber: 'from-caution/22 via-white to-marine/14',
  neutral: 'from-mist via-white to-cyanmark/14',
};

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group overflow-hidden rounded-md border border-marine/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className={`product-visual h-44 bg-gradient-to-br ${toneClass[category.imageTone]}`} />
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-ink">{category.title}</h3>
            <p className="mt-2 text-sm leading-6 text-marine/70">{category.description}</p>
          </div>
          <ArrowRight
            aria-hidden="true"
            className="mt-1 shrink-0 text-cyanmark transition group-hover:translate-x-1"
            size={20}
          />
        </div>
      </div>
    </Link>
  );
}
