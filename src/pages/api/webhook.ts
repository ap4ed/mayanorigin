import type { APIRoute } from 'astro';
import Stripe from 'stripe';

export const POST: APIRoute = async ({ request }) => {
  const stripeKey = import.meta.env.STRIPE_SECRET_KEY;
  const webhookSecret = import.meta.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeKey || !webhookSecret) {
    return new Response('Webhook not configured.', { status: 503 });
  }

  const stripe = new Stripe(stripeKey, { apiVersion: '2026-08-26.dahlia' });

  const sig = request.headers.get('stripe-signature');
  if (!sig) {
    return new Response('Missing stripe-signature header.', { status: 400 });
  }

  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return new Response('Webhook signature verification failed.', { status: 400 });
  }

  if (
    event.type === 'checkout.session.completed' ||
    event.type === 'checkout.session.async_payment_succeeded'
  ) {
    const session = event.data.object as Stripe.Checkout.Session;
    // Only fulfill when payment is confirmed — delayed payment methods
    // fire checkout.session.completed while payment_status is still 'unpaid'
    if (session.payment_status !== 'unpaid') {
      await fulfillOrder(session);
    }
  }

  if (event.type === 'checkout.session.async_payment_failed') {
    const session = event.data.object as Stripe.Checkout.Session;
    console.error('Payment failed for session:', session.id, session.customer_details?.email);
    // TODO: notify customer that payment failed
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

async function fulfillOrder(session: Stripe.Checkout.Session) {
  // TODO: send order confirmation email to session.customer_details?.email
  // TODO: notify Honduras warehouse / fulfillment team
  console.log('✅ Order fulfilled:', {
    sessionId: session.id,
    customerEmail: session.customer_details?.email,
    customerName: session.customer_details?.name,
    shippingAddress: session.shipping_details?.address,
    amountTotal: session.amount_total ? `$${(session.amount_total / 100).toFixed(2)}` : null,
    paymentStatus: session.payment_status,
  });
}
