export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  roast: string;
  origin: string;
  process: string;
  altitude: string;
  prices: Record<string, number>;
  image: string;
  brand?: string;
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
  {
    slug: 'welchez-house-blend',
    name: 'House Blend',
    subtitle: 'Café Welchez',
    description:
      'Exclusively crafted for espresso machines, this blend marries the fruity body of natural process coffee with the refined elegance of washed coffee. Dark sweet chocolate aromas with caramel notes and a bright, well-balanced cup.',
    roast: 'Medium Roast',
    origin: 'Honduras',
    process: 'Natural + Washed',
    altitude: '1,000–1,300 masl',
    prices: { '12oz': 12, '48oz': 48 },
    image: '/images/welchez-house-blend.webp',
    brand: 'Café Welchez',
  },
  {
    slug: 'welchez-santa-isabel',
    name: 'Santa Isabel',
    subtitle: 'Café Welchez',
    description:
      'A combination of Parainema, Catuaí, and Caturra varieties from the Santa Isabel Farm. Sweet and acidic notes highlight a rich profile with a notably chocolatey aroma — a cup that rewards slow mornings.',
    roast: 'Light Roast',
    origin: 'Santa Isabel Farm, Honduras',
    process: 'Washed',
    altitude: '1,000–1,300 masl',
    prices: { '12oz': 10, '48oz': 38 },
    image: '/images/welchez-santa-isabel.webp',
    brand: 'Café Welchez',
  },
  {
    slug: 'welchez-seasonal-blend',
    name: 'Seasonal Blend',
    subtitle: 'Café Welchez',
    description:
      'A blend of ideas and varieties particular to the current harvest — it changes every year. The process varies too: washed, honey, natural, or soaking, depending on what the season delivers. No two years taste exactly alike.',
    roast: 'Medium Roast',
    origin: 'Honduras',
    process: 'Varies by harvest (washed, honey, natural)',
    altitude: '1,000–1,300 masl',
    prices: { '12oz': 12, '48oz': 48 },
    image: '/images/welchez-seasonal-blend.webp',
    brand: 'Café Welchez',
  },
  {
    slug: 'welchez-signature-blend',
    name: 'Signature Blend',
    subtitle: 'Café Welchez',
    description:
      'A special blend of Java, Catuaí, and Parainema varieties from microlots at 1,400–1,500 meters. Medium roast brings caramelized sugars to the surface — chocolaty flavor with surprising hints of citrus, good body, and marked acidity.',
    roast: 'Medium Roast',
    origin: 'Honduras',
    process: 'Washed',
    altitude: '1,400–1,500 masl',
    prices: { '12oz': 15, '48oz': 60 },
    image: '/images/welchez-signature-blend.webp',
    brand: 'Café Welchez',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getStartingPrice(product: Product): number {
  return Math.min(...Object.values(product.prices));
}
