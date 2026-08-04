// Mirrors the app's actual free vs Pro gating (see `subscription.ts` /
// `app/subscription.tsx` in the app repo) — keep this in sync if plan limits
// ever change.
const planComparison = [
  { feature: 'Wallets', free: '2', pro: 'Unlimited' },
  { feature: 'Recurring plans', free: '2', pro: 'Unlimited' },
  { feature: 'Transactions', free: '1,000', pro: 'Unlimited' },
  { feature: 'Budgets', free: 'View only', pro: 'Create & manage' },
  { feature: 'Analytics', free: 'Basic', pro: 'Full breakdown' },
  { feature: 'AI Smart Add', free: false, pro: true },
  { feature: 'Cloud backup & sync', free: false, pro: true },
  { feature: 'Friends & split expenses', free: false, pro: true },
  { feature: 'Export reports', free: false, pro: true },
  { feature: 'Ads', free: 'Shown', pro: 'None' },
];

export default planComparison;
