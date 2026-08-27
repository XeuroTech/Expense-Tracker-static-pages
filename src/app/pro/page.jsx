import PageHeader from '../../components/common/PageHeader';
import ProSection from '../../components/pro/ProSection';

export const metadata = {
  title: 'Pro',
  description:
    "See what's included in AI-Expense Tracker Pro — AI Smart Add, cloud sync, split expenses, and unlimited wallets, budgets, and transactions.",
  alternates: { canonical: '/pro' },
};

export default function ProPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pro"
        title="Unlock everything AI-Expense Tracker can do"
        subtitle="Free covers the essentials. Pro removes every limit and adds three things Free simply doesn't have."
      />
      <ProSection />
    </>
  );
}
