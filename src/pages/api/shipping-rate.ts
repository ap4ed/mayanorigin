import type { APIRoute } from 'astro';

interface CartItem {
  slug: string;
  size: string;
  qty: number;
  price: number;
}

// Weight in lbs per size (product weight + bag/packaging)
const SIZE_WEIGHT: Record<string, number> = {
  '250g': 0.65,
  '500g': 1.2,
  '1kg': 2.4,
  '12oz': 0.9,
  '16oz': 1.1,
  'Whole Bean 12oz': 0.9,
  'Ground 12oz': 0.9,
  'Whole Bean 16oz': 1.1,
  'Ground 16oz': 1.1,
};

function calcWeight(items: CartItem[]): number {
  let total = 0;
  for (const item of items) {
    const unitWeight = SIZE_WEIGHT[item.size] ?? 1.0;
    total += unitWeight * item.qty;
  }
  // Add box/packing material weight
  return Math.max(total + 0.3, 0.5);
}

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.SHIPPO_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Shipping not configured.' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: { items: CartItem[]; zipCode: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { items, zipCode } = body;

  if (!items || items.length === 0) {
    return new Response(JSON.stringify({ error: 'Cart is empty.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!zipCode || !/^\d{5}$/.test(zipCode.trim())) {
    return new Response(JSON.stringify({ error: 'Enter a valid 5-digit US zip code.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const weightLbs = calcWeight(items);

  const shipmentPayload = {
    address_from: {
      name: 'Mayan Origin',
      street1: 'Col. Palmira',
      city: 'Tegucigalpa',
      state: 'FM',
      zip: '11101',
      country: 'HN',
      email: 'info@mayanorigin.com',
    },
    address_to: {
      name: 'Customer',
      street1: '1 Main St',
      city: '',
      state: '',
      zip: zipCode.trim(),
      country: 'US',
    },
    parcels: [
      {
        length: '12',
        width: '10',
        height: '8',
        distance_unit: 'in',
        weight: weightLbs.toFixed(2),
        mass_unit: 'lb',
      },
    ],
    async: false,
  };

  try {
    const res = await fetch('https://api.goshippo.com/shipments/', {
      method: 'POST',
      headers: {
        Authorization: `ShippoToken ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(shipmentPayload),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Shippo error:', err);
      return new Response(JSON.stringify({ error: 'Could not fetch shipping rates.' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await res.json();
    const rates = (data.rates ?? []) as Array<{
      provider: string;
      servicelevel: { name: string };
      amount: string;
      currency: string;
      estimated_days: number | null;
    }>;

    // Return all rates, sorted cheapest first
    const formatted = rates
      .map((r) => ({
        provider: r.provider,
        service: r.servicelevel?.name ?? '',
        amount: parseFloat(r.amount),
        currency: r.currency,
        days: r.estimated_days,
      }))
      .sort((a, b) => a.amount - b.amount);

    return new Response(JSON.stringify({ rates: formatted, weightLbs }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Shippo fetch error:', err);
    return new Response(JSON.stringify({ error: 'Connection error. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
