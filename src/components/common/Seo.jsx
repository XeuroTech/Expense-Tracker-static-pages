import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Expense-Tracker';
const DEFAULT_DESCRIPTION =
  'Expense-Tracker is a modern expense tracker to manage income, expenses, budgets, and financial reports with ease.';

/**
 * Drop into any page to set per-route title/meta/Open Graph tags.
 */
export default function Seo({ title, description = DEFAULT_DESCRIPTION, path = '/' }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Track Expenses, Plan Budgets, Grow Savings`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://www.expense-tracker.app${path}`} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={`https://www.expense-tracker.app${path}`} />
      <meta property="og:image" content="/og-image.svg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/og-image.svg" />
    </Helmet>
  );
}
