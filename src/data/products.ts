export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  roast: string;
  origin: string;
  process: string;
  altitude: string;
  prices: {
    '250g': number;
    '500g': number;
    '1kg': number;
  };
  image: string;
}

export const products: Product[] = [
  {
    slug: 'balam',
    name: 'Balam',
    subtitle: 'El Jaguar',
    description:
      'Bold and full-bodied. Notes of dark chocolate, smoky cedar, and dried cherry. Our most intense roast — for those who drink coffee with purpose.',
    roast: 'Dark Roast',
    origin: 'Copán, Honduras',
    process: 'Washed',
    altitude: '1,400–1,600 masl',
    prices: { '250g': 18, '500g': 32, '1kg': 58 },
    image: '/images/balam.jpg',
  },
  {
    slug: 'ixchel',
    name: 'Ixchel',
    subtitle: 'La Diosa de la Luna',
    description:
      'Light and luminous. Jasmine, white peach, and a honey finish. Named for the moon goddess — delicate, bright, alive.',
    roast: 'Light Roast',
    origin: 'Copán, Honduras',
    process: 'Natural',
    altitude: '1,500–1,700 masl',
    prices: { '250g': 19, '500g': 34, '1kg': 62 },
    image: '/images/ixchel.jpg',
  },
  {
    slug: 'kukulkan',
    name: 'Kukulkan',
    subtitle: 'La Serpiente Emplumada',
    description:
      'Perfectly balanced. Brown sugar, toasted almond, and a clean citrus finish. The everyday cup that never disappoints.',
    roast: 'Medium Roast',
    origin: 'Copán, Honduras',
    process: 'Honey',
    altitude: '1,350–1,550 masl',
    prices: { '250g': 17, '500g': 30, '1kg': 55 },
    image: '/images/kukulkan.jpg',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getStartingPrice(product: Product): number {
  return Math.min(...Object.values(product.prices));
}
