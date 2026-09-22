import type { APIRoute } from 'astro';
import Stripe from 'stripe';

export const POST: APIRoute = async ({ request }) => {
  const stripeKey = import.meta.env.STRIPE_SECRET_KEY;

  if (!stripeKey) {
    return new Response(JSON.stringify({ error: 'Stripe not configured yet.' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const stripe = new Stripe(stripeKey, { apiVersion: '2024-06-20' });

  let body: { items: { slug: string; size: string; qty: number; price: number }[] };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { items } = body;
  if (!items || items.length === 0) {
    return new Response(JSON.stringify({ error: 'Cart is empty.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const PRODUCT_NAMES: Record<string, string> = {
    balam: 'Balam — Medium Roast',
    mut: 'Mut — Light Roast',
    kukulkan: 'Kukulkan — Dark Roast',
    'welchez-house-blend': 'House Blend — Café Welchez',
    'welchez-santa-isabel': 'Santa Isabel — Café Welchez',
    'cafe-maya-coffee-club': 'Coffee Club — Café Maya',
    'cafe-maya-reserva': 'Reserva — Café Maya',
    'sigua-finca-el-zapote': 'Finca El Zapote — Sigua Coffee',
    'mythoz-classic': 'Mythoz Classic — Legacy Blend',
  };

  const lineItems = items.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: `${PRODUCT_NAMES[item.slug] ?? item.slug} (${item.size})`,
        description: 'Single-origin coffee from Copán, Honduras. Packed fresh.',
        images: [`https://mayanorigin.com/images/${item.slug}.jpg`],
      },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.qty,
  }));

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const totalQty = items.reduce((s, i) => s + i.qty, 0);

  function calcShipping(qty: number, sub: number): number {
    if (sub >= 120) return 0;
    if (qty >= 3) return 20;
    if (qty >= 2) return 25;
    return 35;
  }

  const shippingFee = calcShipping(totalQty, subtotal);
  const shippingLabel = shippingFee === 0 ? 'Free Shipping' : 'DHL Express International';

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      shipping_address_collection: { allowed_countries: ['US'] },
      shipping_options: [{ shipping_rate_data: { type: 'fixed_amount', fixed_amount: { amount: shippingFee * 100, currency: 'usd' }, display_name: shippingLabel, delivery_estimate: { minimum: { unit: 'business_day', value: 5 }, maximum: { unit: 'business_day', value: 10 } } } }],
      success_url: `${new URL(request.url).origin}/order-confirmed/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${new URL(request.url).origin}/cart/`,
      metadata: {
        source: 'mayanorigin.com',
      },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Stripe error:', err);
    return new Response(JSON.stringify({ error: 'Failed to create checkout session.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
