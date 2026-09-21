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
  metaTitle?: string;
  metaDescription?: string;
  ingredients?: string;
  secondaryImage?: string;
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
    metaTitle: 'Balam Dark Roast — Single Origin Honduras Coffee | Mayan Origin',
    metaDescription: 'Balam is a single origin dark roast specialty coffee from Copán, Honduras — 1,400–1,600 masl. Dark chocolate, smoky cedar, dried cherry. Direct trade from CAFICO cooperative. Free Express shipping over $100.',
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
    metaTitle: 'Ixchel Light Roast — Single Origin Honduras Coffee | Mayan Origin',
    metaDescription: 'Ixchel is a single origin light roast specialty coffee from Copán, Honduras — natural process, 1,500–1,700 masl. Jasmine, white peach, honey finish. Direct trade from CAFICO. Free Express shipping over $100.',
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
    metaTitle: 'Kukulkan Medium Roast — Single Origin Honduras Coffee | Mayan Origin',
    metaDescription: 'Kukulkan is a single origin medium roast specialty coffee from Copán, Honduras — honey process, 1,350–1,550 masl. Brown sugar, toasted almond, clean citrus. Direct trade from COCAFCAL. Free Express shipping over $100.',
  },
  {
    slug: 'welchez-house-blend',
    name: 'House Blend',
    subtitle: 'Café Welchez',
    description:
      'A Honduras specialty coffee blend crafted for espresso. This small-batch arabica marries the fruity body of natural process with the refined elegance of washed — dark chocolate, caramel, and clean citrus acidity in every cup. Roasted by Café Welchez, fifth-generation coffee farmers in Copán, Honduras.',
    roast: 'Medium Roast',
    origin: 'Copán, Honduras',
    process: 'Natural + Washed',
    altitude: '1,000–1,300 masl',
    prices: { '12oz': 29 },
    image: '/images/welchez-house-blend.webp',
    brand: 'Café Welchez',
    metaTitle: 'Café Welchez House Blend — Honduras Specialty Coffee | Mayan Origin',
    metaDescription: 'Café Welchez House Blend — small-batch Honduras specialty coffee from Copán. Natural + washed arabica blend: dark chocolate, caramel, bright acidity. Fifth-generation family farm. Ships from Honduras.',
    ingredients: '100% Arabica Coffee — Copán, Honduras. Blend of natural and washed process beans. Nothing added.',
  },
  {
    slug: 'welchez-santa-isabel',
    name: 'Santa Isabel',
    subtitle: 'Café Welchez',
    description:
      'A single origin specialty coffee from Santa Isabel Farm in Honduras. Parainema, Catuaí, and Caturra varieties grown at 1,000–1,300 masl — sweet and acidic notes with a rich chocolatey aroma. Small-batch Honduras coffee at its most direct, roasted by Café Welchez.',
    roast: 'Light Roast',
    origin: 'Santa Isabel Farm, Copán, Honduras',
    process: 'Washed',
    altitude: '1,000–1,300 masl',
    prices: { '12oz': 25 },
    image: '/images/welchez-santa-isabel.webp',
    brand: 'Café Welchez',
    metaTitle: 'Café Welchez Santa Isabel — Single Origin Honduras Coffee | Mayan Origin',
    metaDescription: 'Santa Isabel is a single origin light roast from Santa Isabel Farm, Copán, Honduras. Varieties: Parainema, Catuaí, Caturra. Sweet, acidic, chocolatey aroma. Small-batch, direct-trade Honduras coffee.',
    ingredients: '100% Single-Origin Arabica Coffee — Santa Isabel Farm, Copán, Honduras. Varieties: Parainema, Catuaí, Caturra. Nothing added.',
  },
  {
    slug: 'cafe-maya-coffee-club',
    name: 'Coffee Club',
    subtitle: 'Café Maya',
    description:
      'Café Maya Coffee Club is a "Mayan Roast" — 100% Honduran arabica roasted to a smooth medium profile, available in whole bean or ground. Produced by Café Maya in Valle de Amarateca, Honduras, with over 63 years of roasting tradition. A well-rounded everyday Honduras coffee with a bold character.',
    roast: 'Medium Roast',
    origin: 'Honduras',
    process: 'Washed',
    altitude: 'High altitude Honduras',
    prices: { 'Whole Bean 12oz': 23, 'Ground 12oz': 21 },
    image: '/images/cafe-maya-coffee-club.webp',
    secondaryImage: '/images/cafe-maya-coffee-club-ground.webp',
    brand: 'Café Maya',
    metaTitle: 'Café Maya Coffee Club — Mayan Roast Honduras Coffee | Mayan Origin',
    metaDescription: 'Café Maya Coffee Club — Mayan Roast 100% Honduran arabica, 340g. Available whole bean or ground. 63+ years of Honduran roasting tradition. Smooth medium roast, everyday Honduras coffee.',
    ingredients: '100% Arabica Coffee — Honduras. Available in whole bean or ground. Nothing added.',
  },
  {
    slug: 'cafe-maya-reserva',
    name: 'Reserva',
    subtitle: 'Café Maya',
    description:
      'Café Maya Reserva is a 100% Honduran arabica roasted to a "Mayan Medium Roast" — the premium tier of the Café Maya lineup. Produced in Valle de Amarateca, Honduras, with over 63 years of tradition. "Tu Café. A Tu Manera." — your coffee, your way.',
    roast: 'Medium Roast',
    origin: 'Honduras',
    process: 'Washed',
    altitude: 'High altitude Honduras',
    prices: { '12oz': 17 },
    image: '/images/cafe-maya-reserva.webp',
    brand: 'Café Maya',
    metaTitle: 'Café Maya Reserva — Premium Honduras Coffee | Mayan Origin',
    metaDescription: 'Café Maya Reserva — 100% Honduran arabica, Mayan Medium Roast, 340g. The premium line from Café Maya, with 63+ years of Honduran coffee tradition. "Tu Café. A Tu Manera."',
    ingredients: '100% Arabica Coffee — Honduras. Nothing added.',
  },
  {
    slug: 'sigua-finca-el-zapote',
    name: 'Finca El Zapote',
    subtitle: 'Sigua Coffee',
    description:
      'A single origin specialty coffee from Finca El Zapote in Siguatepeque, Honduras — grown at 1,550 masl and hand-selected at harvest. Sigua Coffee has been farming and roasting in Honduras since 2013, using regenerative agriculture and direct-trade relationships to produce 100% arabica beans with full traceability back to the farm.',
    roast: 'Medium Roast',
    origin: 'Finca El Zapote, Siguatepeque, Honduras',
    process: 'Washed',
    altitude: '1,550 masl',
    prices: { '16oz': 28 },
    image: '/images/sigua-finca-el-zapote.webp',
    brand: 'Sigua Coffee',
    metaTitle: 'Sigua Coffee Finca El Zapote — Single Origin Honduras Coffee | Mayan Origin',
    metaDescription: 'Sigua Coffee Finca El Zapote — single origin specialty coffee from Siguatepeque, Honduras. 1,550 masl, hand-selected arabica. Farmers & roasters since 2013. Direct-trade, small-batch.',
    ingredients: '100% Single-Origin Arabica Coffee — Finca El Zapote, Siguatepeque, Honduras. Hand-selected at harvest. Nothing added.',
  },
  {
    slug: 'mythoz-classic',
    name: 'Mythoz Classic',
    subtitle: 'Legacy Blend',
    description:
      'National Winner at the Global Coffee Awards 2025. This Honduras specialty coffee is sourced direct-trade from 109+ producer families across five Honduran regions. A small-batch medium roast with creamy, nutty character and clean citrus acidity — award-winning Honduras coffee available in 12oz and 16oz.',
    roast: 'Medium Roast',
    origin: 'Honduras (5 regions)',
    process: 'Washed',
    altitude: 'Up to 1,800 masl',
    prices: { 'Whole Bean 16oz': 46, 'Ground 16oz': 46 },
    image: '/images/mythoz-classic-whole-bean.webp',
    secondaryImage: '/images/mythoz-classic-ground.webp',
    brand: 'Mythoz Café',
    metaTitle: 'Mythoz Classic — Award-Winning Honduras Specialty Coffee | Mayan Origin',
    metaDescription: 'Mythoz Classic Legacy Blend — National Winner, Global Coffee Awards 2025. Small-batch Honduras specialty coffee sourced direct-trade from 109+ producer families. Creamy, nutty, clean citrus acidity.',
    ingredients: '100% Arabica Coffee — Honduras (multi-region blend). Direct-trade from 109+ producer families. Nothing added.',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getStartingPrice(product: Product): number {
  return Math.min(...Object.values(product.prices));
}
