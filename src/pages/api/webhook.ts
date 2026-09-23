import type { APIRoute } from 'astro';
import Stripe from 'stripe';
import { Resend } from 'resend';

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
    if (session.payment_status !== 'unpaid') {
      // Expand line items so we can show them in the email
      const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ['line_items'],
      });
      await fulfillOrder(fullSession);
    }
  }

  if (event.type === 'checkout.session.async_payment_failed') {
    const session = event.data.object as Stripe.Checkout.Session;
    console.error('Payment failed for session:', session.id, session.customer_details?.email);
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

async function fulfillOrder(session: Stripe.Checkout.Session) {
  const email = session.customer_details?.email;
  const name = session.customer_details?.name ?? 'Coffee Lover';
  const firstName = name.split(' ')[0];
  const total = session.amount_total ? `$${(session.amount_total / 100).toFixed(2)}` : '';
  const teeSize = session.metadata?.free_tee_size;
  const teeColor = session.metadata?.free_tee_color;

  const lineItems = session.line_items?.data ?? [];
  const itemsHtml = lineItems.map(item => `
    <tr>
      <td style="padding:8px 0;font-family:'DM Sans',Arial,sans-serif;font-size:14px;color:#2d2d2d;border-bottom:1px solid #e4ddd4;">
        ${item.description ?? item.quantity + 'x item'} × ${item.quantity}
      </td>
      <td style="padding:8px 0;font-family:'DM Sans',Arial,sans-serif;font-size:14px;color:#1b2e1b;font-weight:700;text-align:right;border-bottom:1px solid #e4ddd4;">
        $${((item.amount_total ?? 0) / 100).toFixed(2)}
      </td>
    </tr>
  `).join('');

  const teeRow = teeSize && teeColor ? `
    <tr>
      <td style="padding:8px 0;font-family:'DM Sans',Arial,sans-serif;font-size:14px;color:#2d2d2d;border-bottom:1px solid #e4ddd4;">
        🎁 Free Tee (${teeColor}, Size ${teeSize})
      </td>
      <td style="padding:8px 0;font-family:'DM Sans',Arial,sans-serif;font-size:14px;color:#2d6a2d;font-weight:700;text-align:right;border-bottom:1px solid #e4ddd4;">
        FREE
      </td>
    </tr>
  ` : '';

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#faf8f4;font-family:'DM Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#faf8f4;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.07);">

        <!-- Header -->
        <tr>
          <td style="background:#1b2e1b;padding:32px 40px;text-align:center;">
            <img src="https://mayanorigin.com/logo.png" alt="Mayan Origin Coffee Co." width="80" height="80" style="border-radius:50%;margin-bottom:12px;" />
            <p style="margin:0;font-family:Georgia,serif;font-size:22px;font-weight:700;color:#c9943a;letter-spacing:1px;">MAYAN ORIGIN COFFEE CO.</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px 40px 32px;">
            <h1 style="font-family:Georgia,serif;font-size:26px;color:#1b2e1b;margin:0 0 8px;">Order Confirmed ✓</h1>
            <p style="font-size:16px;color:#6b6b6b;margin:0 0 28px;">Thank you, ${firstName}. Your coffee is being packed fresh in Honduras and will ship within 3 business days.</p>

            <!-- Order summary -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td style="font-family:Georgia,serif;font-size:13px;font-weight:700;color:#1b2e1b;text-transform:uppercase;letter-spacing:1px;padding-bottom:10px;border-bottom:2px solid #1b2e1b;">Item</td>
                <td style="font-family:Georgia,serif;font-size:13px;font-weight:700;color:#1b2e1b;text-transform:uppercase;letter-spacing:1px;padding-bottom:10px;border-bottom:2px solid #1b2e1b;text-align:right;">Price</td>
              </tr>
              ${itemsHtml}
              ${teeRow}
              <tr>
                <td style="padding:12px 0 0;font-family:Georgia,serif;font-size:15px;font-weight:700;color:#1b2e1b;">Total</td>
                <td style="padding:12px 0 0;font-family:Georgia,serif;font-size:15px;font-weight:700;color:#1b2e1b;text-align:right;">${total}</td>
              </tr>
            </table>

            <!-- What's next -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#faf8f4;border-radius:8px;margin-bottom:28px;">
              <tr>
                <td style="padding:20px 24px;">
                  <p style="font-family:Georgia,serif;font-size:14px;font-weight:700;color:#1b2e1b;margin:0 0 12px;text-transform:uppercase;letter-spacing:1px;">What happens next</p>
                  <p style="font-size:14px;color:#2d2d2d;margin:0 0 8px;">📦 <strong>Packed fresh</strong> — your order is prepared in Copán, Honduras within 3 business days</p>
                  <p style="font-size:14px;color:#2d2d2d;margin:0 0 8px;">✈️ <strong>Ships via DHL Express</strong> — you'll receive a tracking number by email</p>
                  <p style="font-size:14px;color:#2d2d2d;margin:0;">🚪 <strong>Arrives in 7–14 business days</strong> — straight from the highlands to your door</p>
                </td>
              </tr>
            </table>

            <!-- Review request -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#1b2e1b;border-radius:8px;margin-bottom:28px;">
              <tr>
                <td style="padding:24px;text-align:center;">
                  <p style="font-family:Georgia,serif;font-size:16px;color:#c9943a;margin:0 0 8px;font-weight:700;">Love your coffee? Tell the world.</p>
                  <p style="font-size:13px;color:#e4ddd4;margin:0 0 16px;">Once your order arrives, a quick review on Trustpilot helps other coffee lovers discover Mayan Origin.</p>
                  <a href="https://www.trustpilot.com/review/mayanorigin.com" style="display:inline-block;background:#c9943a;color:#fff;font-family:Georgia,serif;font-size:14px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:6px;">⭐ Leave a Review</a>
                </td>
              </tr>
            </table>

            <!-- Photo submission -->
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e4ddd4;border-radius:8px;margin-bottom:28px;">
              <tr>
                <td style="padding:20px 24px;text-align:center;">
                  <p style="font-family:Georgia,serif;font-size:15px;color:#1b2e1b;margin:0 0 8px;font-weight:700;">📸 Share your first cup</p>
                  <p style="font-size:13px;color:#6b6b6b;margin:0 0 14px;">Tag us on Instagram <strong>@mayanorigin</strong> or reply to this email with a photo — we feature our customers on our page.</p>
                  <a href="https://www.instagram.com/mayanorigin" style="display:inline-block;color:#c9943a;font-size:13px;font-weight:700;text-decoration:none;">@mayanorigin on Instagram →</a>
                </td>
              </tr>
            </table>

            <p style="font-size:13px;color:#6b6b6b;margin:0;">Questions? Reply to this email or contact us at <a href="mailto:hello@mayanorigin.com" style="color:#c9943a;">hello@mayanorigin.com</a></p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#faf8f4;padding:24px 40px;text-align:center;border-top:1px solid #e4ddd4;">
            <p style="font-size:12px;color:#6b6b6b;margin:0 0 4px;">Mayan Origin Coffee Co. · Copán, Honduras</p>
            <p style="font-size:12px;color:#6b6b6b;margin:0;"><a href="https://mayanorigin.com" style="color:#c9943a;">mayanorigin.com</a></p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim();

  if (!email) {
    console.warn('No customer email found for session:', session.id);
    return;
  }

  const resendKey = import.meta.env.RESEND_API_KEY;
  if (!resendKey) {
    console.warn('RESEND_API_KEY not set — skipping confirmation email');
    return;
  }

  const resend = new Resend(resendKey);
  const { error } = await resend.emails.send({
    from: 'Mayan Origin Coffee Co. <hello@mayanorigin.com>',
    to: email,
    subject: `Order confirmed — your coffee is being packed ☕`,
    html,
  });

  if (error) {
    console.error('Failed to send confirmation email:', error);
  } else {
    console.log('✅ Confirmation email sent to:', email);
  }
}
