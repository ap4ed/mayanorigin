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
    balam: 'Balam — Dark Roast',
    ixchel: 'Ixchel — Light Roast',
    kukulkan: 'Kukulkan — Medium Roast',
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
  const freeShipping = subtotal >= 60;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      shipping_address_collection: { allowed_countries: ['US'] },
      shipping_options: freeShipping
        ? [{ shipping_rate_data: { type: 'fixed_amount', fixed_amount: { amount: 0, currency: 'usd' }, display_name: 'Free Shipping', delivery_estimate: { minimum: { unit: 'business_day', value: 7 }, maximum: { unit: 'business_day', value: 14 } } } }]
        : [{ shipping_rate_data: { type: 'fixed_amount', fixed_amount: { amount: 1500, currency: 'usd' }, display_name: 'Standard Shipping (DHL)', delivery_estimate: { minimum: { unit: 'business_day', value: 7 }, maximum: { unit: 'business_day', value: 14 } } } }],
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
