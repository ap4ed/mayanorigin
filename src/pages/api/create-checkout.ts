import type { APIRoute } from 'astro';
import Stripe from 'stripe';
import { products } from '../../data/products';

export const POST: APIRoute = async ({ request }) => {
  const stripeKey = import.meta.env.STRIPE_SECRET_KEY;

  if (!stripeKey) {
    return new Response(JSON.stringify({ error: 'Stripe not configured yet.' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const stripe = new Stripe(stripeKey, { apiVersion: '2026-08-26.dahlia' });

  let body: { items: { slug: string; size: string; qty: number }[] };
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

  // Validate and price items server-side — never trust client-supplied prices
  const lineItems = [];
  for (const item of items) {
    const product = products.find(p => p.slug === item.slug);
    if (!product) {
      return new Response(JSON.stringify({ error: `Unknown product: ${item.slug}` }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const price = product.prices[item.size];
    if (price === undefined) {
      return new Response(JSON.stringify({ error: `Invalid size "${item.size}" for ${item.slug}` }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    lineItems.push({
      price_data: {
        currency: 'usd',
        product_data: {
          name: `${product.name} — ${product.subtitle} (${item.size})`,
          description: `${product.roast} · ${product.origin} · ${product.process}. Packed fresh in Honduras.`,
          images: [`https://mayanorigin.com${product.image}`],
        },
        unit_amount: Math.round(price * 100),
      },
      quantity: item.qty,
    });
  }

  // Server-side shipping calculation
  const subtotal = items.reduce((sum, item) => {
    const product = products.find(p => p.slug === item.slug)!;
    return sum + product.prices[item.size] * item.qty;
  }, 0);
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
      line_items: lineItems,
      mode: 'payment',
      shipping_address_collection: { allowed_countries: ['US'] },
      shipping_options: [{
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: { amount: shippingFee * 100, currency: 'usd' },
          display_name: shippingLabel,
          delivery_estimate: {
            minimum: { unit: 'business_day', value: 5 },
            maximum: { unit: 'business_day', value: 10 },
          },
        },
      }],
      success_url: `${new URL(request.url).origin}/order-confirmed/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${new URL(request.url).origin}/cart/`,
      metadata: { source: 'mayanorigin.com' },
      integration_identifier: 'mayanorigin-checkout-kqzprwxy',
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
