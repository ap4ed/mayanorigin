/**
 * Affiliate product database — equipment & books only.
 * Never list competing coffee beans or chocolate brands.
 *
 * Amazon Associates tag: placeholder until account is approved.
 * To activate: replace "mayanorigin-20" with your real Associates tag.
 *
 * Commission rates (2024):
 *   Kitchen & Dining: 4.50%
 *   Home & Kitchen:   8.00%
 *   Books:            4.50%
 *   Grocery:          1.00%
 */

export interface AffiliateProduct {
  id: string;
  name: string;
  brand: string;
  category: 'grinder' | 'brewer' | 'kettle' | 'scale' | 'accessory' | 'book';
  asin: string;
  price: string;
  listPrice?: string;
  discount?: string;
  rating: string;
  reviews: string;
  tagline: string;
  why: string;
  image?: string;
}

const AMAZON_TAG = 'mayanorigin-20';

export const affiliateProducts: AffiliateProduct[] = [
  // --- GRINDERS ---
  {
    id: 'timemore-c2-max',
    name: 'Timemore Chestnut C2 Max',
    brand: 'Timemore',
    category: 'grinder',
    asin: 'B0B1HDJ2JK',
    price: '$55.90',
    rating: '4.6',
    reviews: '2,400+ ratings',
    tagline: 'The hand grinder that made burr grinding affordable without sacrifice.',
    why: 'Stainless steel burrs with 36 click settings give you the range from French press to pour over. Grinds 20g in under 30 seconds. At this price, there is no reason to own a blade grinder.',
  },
  {
    id: 'baratza-encore-esp',
    name: 'Baratza Encore ESP',
    brand: 'Baratza',
    category: 'grinder',
    asin: 'B0BZD67RZM',
    price: '$169.95',
    rating: '4.5',
    reviews: '1,800+ ratings',
    tagline: 'The electric burr grinder coffee professionals recommend to beginners.',
    why: 'James Hoffmann calls the Encore the best entry-level electric grinder. 40 grind settings cover espresso through French press. Built to last — Baratza sells every replacement part, so this is the last grinder you buy for years.',
  },
  {
    id: '1zpresso-jx',
    name: '1Zpresso JX',
    brand: '1Zpresso',
    category: 'grinder',
    asin: 'B0CHSGQ9J5',
    price: '$79.99',
    rating: '4.7',
    reviews: '800+ ratings',
    tagline: 'Competition-level hand grinder at a fraction of the price.',
    why: '48mm stainless steel burrs produce exceptionally uniform grounds. The JX handles pour over and French press with ease. If you want the best hand grinder under $100, this is it.',
  },

  // --- BREWERS ---
  {
    id: 'bodum-chambord',
    name: 'Bodum Chambord French Press',
    brand: 'Bodum',
    category: 'brewer',
    asin: 'B00008XPTY',
    price: '$34.95',
    listPrice: '$44.50',
    discount: '-21%',
    rating: '4.6',
    reviews: '24,000+ ratings',
    tagline: 'The French press that defined the category — and still the best value.',
    why: 'Borosilicate glass, stainless steel frame, three-part mesh filter. Brews 34oz (about 4 cups). Simple, reliable, and iconic. If you are buying your first French press, start here.',
  },
  {
    id: 'hario-v60-02',
    name: 'Hario V60 Dripper 02',
    brand: 'Hario',
    category: 'brewer',
    asin: 'B000P4D5HG',
    price: '$9.50',
    rating: '4.7',
    reviews: '12,000+ ratings',
    tagline: 'The pour over dripper used by more specialty cafes than any other.',
    why: 'Spiral ribs create airflow between filter and wall, giving you full control over extraction. Ceramic holds heat well. Under $10 — the best value-to-quality ratio in all of coffee equipment.',
  },
  {
    id: 'chemex-6cup',
    name: 'Chemex Classic 6-Cup',
    brand: 'Chemex',
    category: 'brewer',
    asin: 'B000I1WP7W',
    price: '$44.95',
    rating: '4.7',
    reviews: '15,000+ ratings',
    tagline: 'Clean, bright, sweet — the Chemex filter removes oils that other methods keep.',
    why: 'The thick Chemex paper filters produce a remarkably clean cup that highlights the delicate floral and fruit notes in light roasts. In the MoMA permanent collection for a reason.',
  },
  {
    id: 'aeropress-original',
    name: 'AeroPress Original',
    brand: 'AeroPress',
    category: 'brewer',
    asin: 'B0047BIWSK',
    price: '$39.95',
    rating: '4.7',
    reviews: '20,000+ ratings',
    tagline: 'Espresso-like concentrate or clean filter coffee — in 60 seconds.',
    why: 'The most versatile brewer ever made. Works with any grind size, any coffee, any water temperature. Nearly indestructible, travels anywhere, and there is a world championship dedicated to it.',
  },
  {
    id: 'bialetti-moka-6cup',
    name: 'Bialetti Moka Express 6-Cup',
    brand: 'Bialetti',
    category: 'brewer',
    asin: 'B0000CF3Q6',
    price: '$34.99',
    listPrice: '$44.99',
    discount: '-22%',
    rating: '4.6',
    reviews: '30,000+ ratings',
    tagline: 'Rich, full-bodied stovetop coffee — the Italian way since 1933.',
    why: 'The Moka pot brews a strong, concentrated coffee that works beautifully with dark roasts like our Kukulkan. Aluminum body, patented safety valve. Six cups in about five minutes.',
  },

  // --- KETTLES ---
  {
    id: 'fellow-stagg-ekg',
    name: 'Fellow Stagg EKG Electric Kettle',
    brand: 'Fellow',
    category: 'kettle',
    asin: 'B07DTMZL56',
    price: '$165.00',
    rating: '4.6',
    reviews: '6,000+ ratings',
    tagline: 'Precision pour control and variable temperature in one beautiful kettle.',
    why: 'The Stagg EKG heats to your exact target temperature and holds it for 60 minutes. The precision spout gives you the slow, controlled pour that pour over demands. Worth every dollar if you brew daily.',
  },
  {
    id: 'hario-buono-kettle',
    name: 'Hario V60 Buono Gooseneck Kettle',
    brand: 'Hario',
    category: 'kettle',
    asin: 'B000IGOXLS',
    price: '$38.00',
    rating: '4.5',
    reviews: '4,500+ ratings',
    tagline: 'The stovetop gooseneck that gets the job done without the electronics.',
    why: 'Stainless steel, slim spout, heats on any burner. Pair it with a $5 thermometer and you have 90% of what the $165 Fellow offers. The smart budget choice.',
  },

  // --- SCALES ---
  {
    id: 'timemore-black-mirror',
    name: 'Timemore Black Mirror Basic+',
    brand: 'Timemore',
    category: 'scale',
    asin: 'B0B5T8LKDQ',
    price: '$57.90',
    rating: '4.5',
    reviews: '1,200+ ratings',
    tagline: 'Built-in timer, 0.1g precision, auto-start — designed for pour over.',
    why: 'Responds instantly (no lag), auto-starts the timer when you pour, and the LED display is easy to read. Does exactly what a $150 Acaia does at a third of the price.',
  },
  {
    id: 'greater-goods-scale',
    name: 'Greater Goods Coffee Scale',
    brand: 'Greater Goods',
    category: 'scale',
    asin: 'B07JG1PXLC',
    price: '$24.99',
    rating: '4.5',
    reviews: '8,000+ ratings',
    tagline: 'The budget scale that coffee Reddit actually recommends.',
    why: 'Built-in timer, 0.1g resolution, compact size fits under any dripper. Under $25. If you are not sure whether you want to weigh your coffee yet, start here — you will never go back to scooping.',
  },

  // --- ACCESSORIES ---
  {
    id: 'hario-v60-filters-100',
    name: 'Hario V60 Paper Filters (100 ct)',
    brand: 'Hario',
    category: 'accessory',
    asin: 'B001O0R46I',
    price: '$8.50',
    rating: '4.8',
    reviews: '18,000+ ratings',
    tagline: 'The original tabbed filters designed for the V60 dripper.',
    why: 'Natural, unbleached paper. Rinse with hot water before brewing to remove any papery taste. 100 filters for under $9 — about 9 cents per cup.',
  },
  {
    id: 'milk-frother-zulay',
    name: 'Zulay Milk Frother Handheld',
    brand: 'Zulay',
    category: 'accessory',
    asin: 'B074YGN5TF',
    price: '$9.99',
    rating: '4.4',
    reviews: '65,000+ ratings',
    tagline: 'Quick froth for hot chocolate, lattes, and matcha.',
    why: 'Battery-powered, froths in 15 seconds. The easiest way to get the traditional foamy top on your Mayan hot chocolate without a molinillo. Under $10.',
  },
  {
    id: 'molinillo-mexican-whisk',
    name: 'Traditional Mexican Molinillo',
    brand: 'Verve Culture',
    category: 'accessory',
    asin: 'B09VKFM4V2',
    price: '$18.95',
    rating: '4.6',
    reviews: '500+ ratings',
    tagline: 'Hand-carved wooden whisk — the traditional way to froth chocolate.',
    why: 'Carved from a single piece of wood. Roll the handle between your palms to froth your hot chocolate the way Mesoamerican cultures have done for centuries. Functional and beautiful.',
  },

  // --- BOOKS ---
  {
    id: 'hoffmann-world-atlas',
    name: 'The World Atlas of Coffee',
    brand: 'James Hoffmann',
    category: 'book',
    asin: 'B07CRY44ZH',
    price: '$22.49',
    listPrice: '$35.00',
    discount: '-36%',
    rating: '4.8',
    reviews: '8,500+ ratings',
    tagline: 'The definitive guide to coffee — from bean to cup, country by country.',
    why: 'James Hoffmann covers everything: how coffee grows, how it is processed, how to grind and brew it, and what makes each origin taste different. The Honduras chapter alone is worth the price if you want to understand the coffee you are drinking. We reference this book throughout our guides.',
  },
  {
    id: 'coe-maya',
    name: 'The Maya (9th Edition)',
    brand: 'Michael D. Coe & Stephen Houston',
    category: 'book',
    asin: 'B019G1SKRS',
    price: '$16.99',
    rating: '4.6',
    reviews: '1,200+ ratings',
    tagline: 'The most respected introduction to Mayan civilization in print.',
    why: 'Covers art, architecture, writing, religion, astronomy, and daily life. Written by the scholars who helped decipher Mayan glyphs. If the gods and mythology posts sparked your curiosity, this is where to go deeper.',
  },
  {
    id: 'popol-vuh',
    name: 'Popol Vuh: The Definitive Edition',
    brand: 'Dennis Tedlock (Translator)',
    category: 'book',
    asin: '0684818450',
    price: '$14.69',
    listPrice: '$18.99',
    discount: '-23%',
    rating: '4.6',
    reviews: '700+ ratings',
    tagline: 'The Mayan creation story — the Hero Twins, the gods, the origin of humanity.',
    why: 'The Popol Vuh is the single most important text of Mayan mythology. The Hero Twins, the jaguar gods, the feathered serpent — every story we tell on this site traces back to this book. Tedlock\'s translation is the standard.',
  },
  {
    id: 'coe-chocolate',
    name: 'The True History of Chocolate',
    brand: 'Sophie D. Coe & Michael D. Coe',
    category: 'book',
    asin: '0500290687',
    price: '$15.95',
    rating: '4.5',
    reviews: '600+ ratings',
    tagline: 'How a bitter Mesoamerican drink conquered the world.',
    why: 'Traces cacao from its Mayan and Aztec origins to modern chocolate. If our hot chocolate recipe or cacao ceremony guide interested you, this book is the deep dive — it covers the exact rituals we describe, plus 3,000 more years of history.',
  },

  // --- MORE BOOKS (diversified across posts) ---
  {
    id: 'sharer-ancient-maya',
    name: 'The Ancient Maya (6th Edition)',
    brand: 'Robert Sharer & Loa Traxler',
    category: 'book',
    asin: '0804748179',
    price: '$39.99',
    rating: '4.5',
    reviews: '200+ ratings',
    tagline: 'The most comprehensive academic reference on Mayan civilization.',
    why: 'At 900+ pages, this is the textbook archaeologists actually use. Covers everything from the Preclassic to the Spanish conquest with maps, chronologies, and site plans. Not light reading, but nothing else comes close in depth.',
  },
  {
    id: 'martin-maya-kings',
    name: 'Chronicle of the Maya Kings and Queens',
    brand: 'Simon Martin & Nikolai Grube',
    category: 'book',
    asin: '0500287260',
    price: '$29.95',
    rating: '4.7',
    reviews: '300+ ratings',
    tagline: 'Dynasty by dynasty, city by city — every known Mayan ruler decoded.',
    why: 'The Copan dynasty alone gets a full chapter. Martin and Grube decode the hieroglyphic record to reconstruct the political history of each major city. If the gods posts made you want names, dates, and power struggles, start here.',
  },
  {
    id: 'easto-craft-coffee',
    name: 'Craft Coffee: A Manual',
    brand: 'Jessica Easto',
    category: 'book',
    asin: '1572842334',
    price: '$14.99',
    rating: '4.6',
    reviews: '1,500+ ratings',
    tagline: 'A practical guide to brewing better coffee at home — method by method.',
    why: 'Covers pour over, French press, AeroPress, cold brew, and espresso with clear instructions and the science behind each one. Less encyclopedic than Hoffmann, more hands-on. A great companion to any brewer you own.',
  },
  {
    id: 'miller-maya-gods',
    name: 'The Gods and Symbols of Ancient Mexico and the Maya',
    brand: 'Mary Miller & Karl Taube',
    category: 'book',
    asin: '0500279284',
    price: '$22.95',
    rating: '4.6',
    reviews: '400+ ratings',
    tagline: 'An illustrated dictionary of every Mesoamerican deity and symbol.',
    why: 'Over 250 entries with illustrations covering gods, rituals, animals, plants, and symbols from Olmec through Aztec and Maya. The reference book you keep next to you while reading anything about Mesoamerica.',
  },
  {
    id: 'coe-breaking-maya-code',
    name: 'Breaking the Maya Code',
    brand: 'Michael D. Coe',
    category: 'book',
    asin: '0500289557',
    price: '$19.95',
    rating: '4.7',
    reviews: '500+ ratings',
    tagline: 'The detective story of how scholars cracked the Mayan hieroglyphs.',
    why: 'Reads like a thriller. Coe follows the decades-long quest to decipher the Maya script, from early failures to the breakthrough by Yuri Knorosov. If you find the inscriptions at Copan fascinating, this explains how we learned to read them.',
  },
  {
    id: 'uncommon-grounds',
    name: 'Uncommon Grounds: The History of Coffee',
    brand: 'Mark Pendergrast',
    category: 'book',
    asin: '046501836X',
    price: '$18.99',
    rating: '4.5',
    reviews: '1,000+ ratings',
    tagline: 'The full history of coffee — from Ethiopian legend to global commodity.',
    why: 'Covers the politics, economics, and culture of coffee across five centuries. The Central America chapters explain how coffee shaped Honduras, Guatemala, and Costa Rica. Essential context for understanding why specialty coffee matters.',
  },

  // --- MORE EQUIPMENT (diversified across posts) ---
  {
    id: 'fellow-atmos-canister',
    name: 'Fellow Atmos Vacuum Canister',
    brand: 'Fellow',
    category: 'accessory',
    asin: 'B07WLRTLMG',
    price: '$32.00',
    rating: '4.6',
    reviews: '3,500+ ratings',
    tagline: 'Twist the lid, remove the air, keep coffee fresh for weeks.',
    why: 'An integrated vacuum pump sucks air out of the canister every time you close it. Coffee stays fresh 50% longer than in a bag with a clip. Works for whole bean or ground.',
  },
  {
    id: 'toddy-cold-brew',
    name: 'Toddy Cold Brew System',
    brand: 'Toddy',
    category: 'brewer',
    asin: 'B0006H0JVW',
    price: '$41.99',
    rating: '4.5',
    reviews: '5,000+ ratings',
    tagline: 'The original cold brew maker — smooth concentrate in 12 hours.',
    why: 'Toddy invented cold brew coffee. The felt filter produces a concentrate that is 67% less acidic than hot-brewed coffee. Dilute to taste, keep in the fridge for two weeks. Simple and bulletproof.',
  },
  {
    id: 'thermopro-thermometer',
    name: 'ThermoPro TP03 Digital Thermometer',
    brand: 'ThermoPro',
    category: 'accessory',
    asin: 'B01IHHLB3W',
    price: '$8.99',
    rating: '4.6',
    reviews: '45,000+ ratings',
    tagline: 'Instant-read temperature in 3 seconds — for water, food, anything.',
    why: 'Water temperature matters more than most people think. Too hot scalds the coffee, too cool under-extracts it. Under $9 gets you a thermometer accurate to within 1 degree. Pair it with any stovetop kettle.',
  },
  {
    id: 'fellow-carter-mug',
    name: 'Fellow Carter Move Mug',
    brand: 'Fellow',
    category: 'accessory',
    asin: 'B08GFD8WLG',
    price: '$30.00',
    rating: '4.5',
    reviews: '2,000+ ratings',
    tagline: 'A travel mug designed by the same people who make the Stagg kettle.',
    why: 'Ceramic interior means no metallic taste. Splash guard keeps your coffee in the cup. Keeps coffee hot for 12 hours. If you grind and brew at home, this is how you take it with you.',
  },
  {
    id: 'chemex-filters-100',
    name: 'Chemex Bonded Filters (100 ct)',
    brand: 'Chemex',
    category: 'accessory',
    asin: 'B000N1BQUP',
    price: '$11.50',
    rating: '4.8',
    reviews: '10,000+ ratings',
    tagline: 'The thick paper filter that gives Chemex its signature clean cup.',
    why: '20-30% heavier than standard filters. Removes oils and sediment that other drippers let through. The reason a Chemex cup tastes different from a V60 cup is mostly this filter.',
  },
  {
    id: 'hario-skerton-plus',
    name: 'Hario Skerton Plus Hand Grinder',
    brand: 'Hario',
    category: 'grinder',
    asin: 'B01LXZGIUO',
    price: '$44.00',
    rating: '4.4',
    reviews: '3,000+ ratings',
    tagline: 'The ceramic burr hand grinder from the makers of the V60.',
    why: 'Ceramic burrs last longer than steel (they never need sharpening), and the stabilized shaft gives more consistent results than the original Skerton. A solid entry-level hand grinder from a brand you can trust.',
  },
];

export function getAffiliateProduct(id: string): AffiliateProduct | undefined {
  return affiliateProducts.find((p) => p.id === id);
}

export function buildAmazonUrl(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}
