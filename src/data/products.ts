export type ProductCategory = 'peptides' | 'aminos' | 'sprays' | 'liquids';

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  priceLabel: string;
  badge?: string;
  overview: string;
  detail: string;
  accent: 'cyan' | 'leaf' | 'caution' | 'marine';
};

export const categoryLabels: Record<ProductCategory, string> = {
  peptides: 'Peptides',
  aminos: 'Aminos',
  sprays: 'Sprays',
  liquids: 'Liquids / Blends',
};

export const categories: Array<{
  slug: ProductCategory;
  title: string;
  description: string;
  imageTone: 'cool' | 'green' | 'amber' | 'neutral';
}> = [
  {
    slug: 'peptides',
    title: 'Peptides',
    description: 'Reference materials organized for qualified laboratory workflows.',
    imageTone: 'cool',
  },
  {
    slug: 'aminos',
    title: 'Aminos',
    description: 'Placeholder amino catalog entries prepared for future backend data.',
    imageTone: 'green',
  },
  {
    slug: 'sprays',
    title: 'Sprays',
    description: 'Research-use spray format placeholders with clear documentation paths.',
    imageTone: 'amber',
  },
  {
    slug: 'liquids',
    title: 'Liquids / Blends',
    description: 'Structured catalog framing for liquid and blended reference products.',
    imageTone: 'neutral',
  },
];

export const products: Product[] = [
  {
    slug: 'pep-102-research-reference',
    name: 'PEP-102 Research Reference',
    category: 'peptides',
    priceLabel: 'Price placeholder',
    badge: 'Featured',
    overview: 'A generic peptide-category placeholder for catalog structure and procurement review.',
    detail:
      'This listing is prepared for future research-use documentation, inventory metadata, and certificate file attachments. No application, preparation, or outcome guidance is provided.',
    accent: 'cyan',
  },
  {
    slug: 'pep-148-reference-standard',
    name: 'PEP-148 Reference Standard',
    category: 'peptides',
    priceLabel: 'Price placeholder',
    overview: 'A second peptide-category placeholder for validating grid, route, and detail templates.',
    detail:
      'Use this entry to test product page layout, category filtering, and compliance messaging while backend systems are pending.',
    accent: 'marine',
  },
  {
    slug: 'amn-210-amino-reference',
    name: 'AMN-210 Amino Reference',
    category: 'aminos',
    priceLabel: 'Price placeholder',
    badge: 'New',
    overview: 'A generic amino-category placeholder with research-use labeling and neutral copy.',
    detail:
      'This placeholder can later receive SKU data, batch identifiers, lot documentation, and availability status from an ecommerce platform.',
    accent: 'leaf',
  },
  {
    slug: 'amn-244-lab-reference',
    name: 'AMN-244 Lab Reference',
    category: 'aminos',
    priceLabel: 'Price placeholder',
    overview: 'A catalog placeholder for amino research materials and future comparison views.',
    detail:
      'The page intentionally omits any dosing, administration, biological effect, or human-use language.',
    accent: 'leaf',
  },
  {
    slug: 'spr-040-research-spray',
    name: 'SPR-040 Research Spray',
    category: 'sprays',
    priceLabel: 'Price placeholder',
    badge: 'Placeholder',
    overview: 'A spray-format placeholder for future qualified research procurement.',
    detail:
      'Documentation and handling notes can be attached later after compliance and operations review.',
    accent: 'caution',
  },
  {
    slug: 'spr-072-spray-reference',
    name: 'SPR-072 Spray Reference',
    category: 'sprays',
    priceLabel: 'Price placeholder',
    overview: 'A neutral spray-category product entry for testing catalog display density.',
    detail:
      'This placeholder supports route testing and future ecommerce data mapping without making product claims.',
    accent: 'caution',
  },
  {
    slug: 'liq-305-liquid-reference',
    name: 'LIQ-305 Liquid Reference',
    category: 'liquids',
    priceLabel: 'Price placeholder',
    badge: 'New',
    overview: 'A liquid-category placeholder prepared for future inventory and documentation fields.',
    detail:
      'This entry is designed for laboratory procurement review only and contains no usage instructions.',
    accent: 'cyan',
  },
  {
    slug: 'blend-410-research-blend',
    name: 'BLEND-410 Research Blend',
    category: 'liquids',
    priceLabel: 'Price placeholder',
    overview: 'A blend-category placeholder with original, compliance-cautious product copy.',
    detail:
      'Future backend integrations can connect this item to batch records, document links, and availability rules.',
    accent: 'marine',
  },
];

export const featuredProducts = products.slice(0, 4);
export const newArrivals = products.filter((product) => product.badge === 'New');
