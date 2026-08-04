import Seo from '../components/common/Seo';
import PageHeader from '../components/common/PageHeader';
import ProSection from '../components/pro/ProSection';

export default function ProPage() {
  return (
    <>
      <Seo
        title="Pro"
        description="See what's included in Expense-Tracker Pro — AI Smart Add, cloud sync, split expenses, and unlimited wallets, budgets, and transactions."
        path="/pro"
      />
      <PageHeader
        eyebrow="Pro"
        title="Unlock everything Expense-Tracker can do"
        subtitle="Free covers the essentials. Pro removes every limit and adds three things Free simply doesn't have."
      />
      <ProSection />
    </>
  );
}
