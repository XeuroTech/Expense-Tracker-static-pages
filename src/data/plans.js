// Mirrors the app's real in-app Subscription screen (Free / Pro Monthly /
// Pro Yearly) — keep this in sync with `subscription.ts` in the app repo if
// plan limits or pricing ever change.
const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '',
    features: [
      'Up to 2 wallets',
      'Up to 2 recurring plans',
      'Up to 1,000 transactions',
      'Basic dashboard',
      'Limited budget and analytics access',
      'Ads enabled',
    ],
  },
  {
    name: 'Pro Monthly',
    price: '$10',
    period: '/month',
    features: [
      'Unlimited wallets, plans, and transactions',
      'Full budgets and analytics',
      'Advanced reports and export',
      'Premium dashboard',
      'Cloud backup and multi-device sync',
      'Ads disabled',
    ],
  },
  {
    name: 'Pro Yearly',
    price: '$100',
    period: '/year',
    features: [
      'Unlimited wallets, plans, and transactions',
      'Full budgets and analytics',
      'Advanced reports and export',
      'Premium dashboard',
      'Cloud backup and multi-device sync',
      'Ads disabled',
      'Yearly renewal and expiry handling',
    ],
  },
];

export default plans;
