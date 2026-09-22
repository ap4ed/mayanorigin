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
  // --- Mayan Origin private label (own brand, highest margin) ---
  {
    slug: 'balam',
    name: 'Balam',
    subtitle: 'El Jaguar',
    description:
      'Perfectly balanced and deeply satisfying. Notes of brown sugar, toasted almond, and a clean citrus finish — a medium roast that earns its place in your daily ritual. Named for the Mayan jaguar god, Balam is single origin from the highlands of Copán, Honduras.',
    roast: 'Medium Roast',
    origin: 'Copán, Honduras',
    process: 'Washed',
    altitude: '1,300–1,700 masl',
    prices: { 'Whole Bean 16oz': 52 },
    image: '/images/balam.jpg',
    brand: 'Mayan Origin Coffee Co.',
    metaTitle: 'Balam Medium Roast — Single Origin Honduras Coffee | Mayan Origin',
    metaDescription: 'Balam Medium Roast — single origin specialty coffee from the Mayan Highlands of Copán, Honduras. 1,300–1,700 masl. Brown sugar, toasted almond, clean citrus. Private label by Mayan Origin Coffee Co. Ships direct from Honduras.',
  },
  {
    slug: 'mut',
    name: 'Mut',
    subtitle: 'El Ave Sagrada',
    description:
      'Bright and luminous. Floral notes of jasmine and orange blossom, with a delicate stone fruit sweetness and a clean, honey-like finish. Named for the sacred bird of Mayan prophecy — light, alive, and full of clarity. Single origin from the highlands of Copán, Honduras.',
    roast: 'Light Roast',
    origin: 'Copán, Honduras',
    process: 'Natural',
    altitude: '1,300–1,700 masl',
    prices: { 'Whole Bean 16oz': 52 },
    image: '/images/mut.jpg',
    brand: 'Mayan Origin Coffee Co.',
    metaTitle: 'Mut Light Roast — Single Origin Honduras Coffee | Mayan Origin',
    metaDescription: 'Mut Light Roast — single origin specialty coffee from the Mayan Highlands of Copán, Honduras. 1,300–1,700 masl. Jasmine, orange blossom, stone fruit, honey finish. Private label by Mayan Origin Coffee Co. Ships direct from Honduras.',
  },
  {
    slug: 'kukulkan',
    name: 'Kukulkan',
    subtitle: 'La Serpiente Emplumada',
    description:
      'Bold, intense, and commanding. Notes of dark chocolate, smoky cedar, and dried cherry — our darkest roast for those who drink coffee with purpose. Named for Kukulkan, the feathered serpent god of the Maya. Single origin from the highlands of Copán, Honduras.',
    roast: 'Dark Roast',
    origin: 'Copán, Honduras',
    process: 'Washed',
    altitude: '1,300–1,700 masl',
    prices: { 'Whole Bean 16oz': 52 },
    image: '/images/kukulkan.jpg',
    brand: 'Mayan Origin Coffee Co.',
    metaTitle: 'Kukulkan Dark Roast — Single Origin Honduras Coffee | Mayan Origin',
    metaDescription: 'Kukulkan Dark Roast — single origin specialty coffee from the Mayan Highlands of Copán, Honduras. 1,300–1,700 masl. Dark chocolate, smoky cedar, dried cherry. Private label by Mayan Origin Coffee Co. Ships direct from Honduras.',
  },
  // --- Curated partners (price high → low for anchoring) ---
  {
    slug: 'mythoz-classic',
    name: 'Mythoz',
    subtitle: 'Legacy Blend',
    description:
      'National Winner at the Global Coffee Awards 2025. This Honduras specialty coffee is sourced direct-trade from 109+ producer families across five Honduran regions. A small-batch medium roast with creamy, nutty character and clean citrus acidity — award-winning Honduras coffee available in 12oz and 16oz.',
    roast: 'Medium Roast',
    origin: 'Honduras (5 regions)',
    process: 'Washed',
    altitude: 'Up to 1,800 masl',
    prices: { 'Whole Bean 16oz': 56, 'Ground 16oz': 56 },
    image: '/images/mythoz-classic-whole-bean.webp',
    secondaryImage: '/images/mythoz-classic-ground.webp',
    brand: 'Mythoz Coffee Roasters',
    metaTitle: 'Mythoz — Award-Winning Honduras Specialty Coffee | Mayan Origin',
    metaDescription: 'Mythoz Legacy Blend — National Winner, Global Coffee Awards 2025. Small-batch Honduras specialty coffee sourced direct-trade from 109+ producer families. Creamy, nutty, clean citrus acidity.',
    ingredients: '100% Arabica Coffee — Honduras (multi-region blend). Direct-trade from 109+ producer families. Nothing added.',
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
    prices: { 'Ground 12oz': 40 },
    image: '/images/welchez-house-blend.webp',
    brand: 'Café Welchez',
    metaTitle: 'Café Welchez House Blend — Honduras Specialty Coffee | Mayan Origin',
    metaDescription: 'Café Welchez House Blend — small-batch Honduras specialty coffee from Copán. Natural + washed arabica blend: dark chocolate, caramel, bright acidity. Fifth-generation family farm. Ships from Honduras.',
    ingredients: '100% Arabica Coffee — Copán, Honduras. Blend of natural and washed process beans. Nothing added.',
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
    prices: { 'Ground 16oz': 38 },
    image: '/images/sigua-finca-el-zapote.webp',
    brand: 'Sigua Coffee',
    metaTitle: 'Sigua Coffee Finca El Zapote — Single Origin Honduras Coffee | Mayan Origin',
    metaDescription: 'Sigua Coffee Finca El Zapote — single origin specialty coffee from Siguatepeque, Honduras. 1,550 masl, hand-selected arabica. Farmers & roasters since 2013. Direct-trade, small-batch.',
    ingredients: '100% Single-Origin Arabica Coffee — Finca El Zapote, Siguatepeque, Honduras. Hand-selected at harvest. Nothing added.',
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
    prices: { 'Ground 12oz': 35 },
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
    prices: { 'Whole Bean 12oz': 33, 'Ground 12oz': 31 },
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
    prices: { 'Ground 12oz': 27 },
    image: '/images/cafe-maya-reserva.webp',
    brand: 'Café Maya',
    metaTitle: 'Café Maya Reserva — Premium Honduras Coffee | Mayan Origin',
    metaDescription: 'Café Maya Reserva — 100% Honduran arabica, Mayan Medium Roast, 340g. The premium line from Café Maya, with 63+ years of Honduran coffee tradition. "Tu Café. A Tu Manera."',
    ingredients: '100% Arabica Coffee — Honduras. Nothing added.',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getStartingPrice(product: Product): number {
  return Math.min(...Object.values(product.prices));
}
