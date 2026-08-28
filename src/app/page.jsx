import HeroSection from '../components/hero/HeroSection';
import FeaturesSection from '../components/features/FeaturesSection';
import ScreenshotsSection from '../components/screenshots/ScreenshotsSection';
import HowItWorksSection from '../components/howItWorks/HowItWorksSection';
import WhyChooseUsSection from '../components/whyChooseUs/WhyChooseUsSection';
import FaqSection from '../components/faq/FaqSection';

export const metadata = {
  description:
    'AI Expense Tracker is a modern, AI-powered expense tracker to manage income, expenses, budgets, and financial reports with ease. Available on iOS and Android.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <FaqSection />
    </>
  );
}
