## Development

Start dev server:
```
npm run dev
```

## Environment variables

Copy `.env.example` to `.env` and fill in:
- DHL credentials: get from developer.dhl.com (need business account)
- Stripe credentials: get from dashboard.stripe.com

## DHL Integration

API route: `src/pages/api/shipping-rate.ts`
Currently returns mock data. To activate:
1. Create DHL Express account at dhl.com/honduras
2. Register at developer.dhl.com for API key
3. Add DHL_API_KEY and DHL_ACCOUNT_NUMBER to .env

## Stripe Integration

API route: `src/pages/api/create-checkout.ts`
Currently returns placeholder. To activate:
1. Create account at stripe.com
2. Add STRIPE_SECRET_KEY and PUBLIC_STRIPE_PUBLISHABLE_KEY to .env

## Products

Edit `src/data/products.ts` to add/change coffees.

## Deployment

Push to GitHub -> connect to Vercel -> add .env variables in Vercel dashboard.
